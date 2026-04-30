import { motion } from "framer-motion";
import { SiDotnet, SiAngular, SiReact, SiJquery, SiSharp, SiTypescript, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiGit } from "react-icons/si";
import { Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: ".NET Web API", icon: SiDotnet, color: "text-purple-500" },
        { name: "C#", icon: SiSharp, color: "text-purple-600" },
        { name: "SQL Server", icon: Database, color: "text-red-500" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "Angular", icon: SiAngular, color: "text-red-600" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
      ]
    },
    {
      title: "Web & Tools",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: SiCss, color: "text-blue-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Git", icon: SiGit, color: "text-orange-600" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary font-mono text-2xl mr-2">01.</span>
            Technical Skills
          </h2>
          <div className="h-[1px] bg-border flex-grow max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={sIdx}
                      variants={itemVariants}
                      className="flex flex-col items-center justify-center p-4 bg-background border border-border rounded-lg gap-3 hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default group"
                    >
                      <Icon className={`text-3xl ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}