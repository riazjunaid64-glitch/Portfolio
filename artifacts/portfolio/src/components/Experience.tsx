import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Techlogics",
      role: "Software Developer",
      duration: "Jan 2024 - Present",
      description: [
        "Architect and develop scalable backend services using .NET Web API.",
        "Implement responsive, dynamic user interfaces using Angular and React, improving user engagement.",
        "Collaborate with cross-functional teams to define architecture and deliver robust software solutions.",
        "Optimize database queries and API response times for high-traffic endpoints."
      ]
    },
    {
      company: "Arfa Tech",
      role: "Junior Web Developer",
      duration: "Jun 2023 - Dec 2023",
      description: [
        "Maintained and enhanced legacy applications built with jQuery and ASP.NET MVC.",
        "Migrated key frontend modules to modern React components, enhancing maintainability.",
        "Integrated third-party APIs for payment processing and analytics.",
        "Participated in daily standups and agile development cycles."
      ]
    },
    {
      company: "Ezilon",
      role: "Software Engineering Intern",
      duration: "Jan 2023 - May 2023",
      description: [
        "Assisted in the development of internal tools using .NET Core and HTML/CSS.",
        "Wrote unit tests and performed manual testing for pre-release software.",
        "Gained hands-on experience with Git version control and CI/CD pipelines."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </div>

        <div className="relative border-l border-border/60 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-muted-foreground bg-background px-3 py-1 rounded-full border border-border w-fit">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3 leading-relaxed">
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span>{item}</span>
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