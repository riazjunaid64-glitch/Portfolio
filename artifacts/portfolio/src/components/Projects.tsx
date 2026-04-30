import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Admin Dashboard",
      description: "A comprehensive dashboard for managing inventory, orders, and customer data. Built with a robust .NET Web API backend and a responsive React frontend utilizing modern state management.",
      tech: ["React", ".NET Web API", "Tailwind CSS", "SQL Server"],
      github: "#",
      live: "#"
    },
    {
      title: "Finance Analytics Tracker",
      description: "A data visualization platform tracking personal expenses. Features complex chart integrations and real-time updates through an Angular frontend communicating with RESTful services.",
      tech: ["Angular", "TypeScript", "Chart.js", ".NET Core"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management API",
      description: "A high-performance REST API designed to handle thousands of requests per second for a project management tool. Includes JWT authentication, role-based access, and comprehensive API documentation.",
      tech: ["C#", ".NET Web API", "Entity Framework", "Swagger"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">03.</span>
            Featured Projects
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col h-full hover:-translate-y-2 hover:border-primary/50 transition-all group shadow-sm hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="w-10 h-10">
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {project.tech.map((tech, tIdx) => (
                  <li key={tIdx} className="text-xs font-mono text-muted-foreground/80">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}