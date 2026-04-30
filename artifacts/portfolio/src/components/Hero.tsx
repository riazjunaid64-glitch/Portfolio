import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex flex-col justify-center relative pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2 lg:order-1 space-y-8"
        >
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-primary font-medium tracking-wide uppercase"
            >
              Hi, my name is
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              Junaid Riaz.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              Full-Stack Developer
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a software developer with over 1.5 years of experience crafting robust, scalable web applications. 
              I specialize in bridging the gap between powerful <span className="text-foreground font-medium">.NET Web API</span> backends 
              and dynamic, responsive frontends using <span className="text-foreground font-medium">Angular and React</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-all flex items-center gap-2 hover:-translate-y-1"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-blue-600 opacity-20 blur-2xl" />
            <div className="absolute inset-0 rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-4">
              <img 
                src="/avatar.png" 
                alt="Junaid Riaz - Abstract Developer Portrait" 
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
            
            {/* Floating decoration badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-card border border-border px-4 py-2 rounded-lg shadow-xl font-mono text-sm text-primary"
            >
              &lt;React /&gt;
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 bg-card border border-border px-4 py-2 rounded-lg shadow-xl font-mono text-sm text-blue-500"
            >
              .NET Core
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </a>
      </motion.div>
    </section>
  );
}