import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 w-full"
        >
          <p className="text-primary font-mono tracking-wide">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h2>
          
          <p className="text-muted-foreground text-lg pb-8">
            Whether you have a question, a project proposal, or just want to say hi, 
            I'll try my best to get back to you! Currently open to new opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-12">
            <a 
              href="mailto:junaid@example.com" // Placeholder email
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Say Hello
            </a>
            <a 
              href="#" 
              className="px-8 py-4 bg-card text-foreground font-medium rounded-lg border border-border hover:border-primary/50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/riazjunaid64-glitch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/junaid-riaz-8967b13a9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}