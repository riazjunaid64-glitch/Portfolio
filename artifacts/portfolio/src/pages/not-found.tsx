import { Card, CardContent } from "@/components/ui/card";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md bg-card border-border shadow-xl">
        <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
            <FaExclamationTriangle className="h-8 w-8 text-destructive" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-2 font-mono">404</h1>
          <h2 className="text-xl font-semibold text-foreground mb-4">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:-translate-y-1 transition-transform">
            Return Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}