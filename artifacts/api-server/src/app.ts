import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import type { Options as PinoHttpOptions, HttpLogger } from "pino-http";
import type { IncomingMessage, ServerResponse } from "http";
import type { RequestHandler } from "express";
import router from "./routes";
import { logger } from "./lib/logger";

type PinoHttpFn = (opts?: PinoHttpOptions) => HttpLogger;
const pinoHttpCandidate =
  (pinoHttpModule as unknown as { default?: PinoHttpFn }).default ??
  (pinoHttpModule as unknown as PinoHttpFn);
const pinoHttp = pinoHttpCandidate as PinoHttpFn;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage & { id?: string | number }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
