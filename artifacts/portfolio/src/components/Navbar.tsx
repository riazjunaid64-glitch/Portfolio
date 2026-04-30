import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">
              JR
            </div>
            <span className="group-hover:text-primary transition-colors">Junaid Riaz</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4 border-l border-border pl-6">
              <a href="https://github.com/riazjunaid64-glitch" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/junaid-riaz-8967b13a9/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#contact" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col items-center space-y-8 text-2xl font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="flex space-x-6 pt-4 border-t border-border w-full justify-center">
            <a href="https://github.com/riazjunaid64-glitch" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/junaid-riaz-8967b13a9/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} className="text-muted-foreground hover:text-foreground" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}