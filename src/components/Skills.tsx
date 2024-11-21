import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Server,
  Layout,
  GitBranch,
  Container,
  Layers,
  Cpu,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <Code2 size={24} />, level: 90 },
      { name: "Redux", icon: <Layers size={24} />, level: 85 },
      { name: "Tailwind CSS", icon: <Layout size={24} />, level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <Server size={24} />, level: 88 },
      { name: "Express.js", icon: <Cpu size={24} />, level: 85 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: <Database size={24} />, level: 82 },
      { name: "Mongoose", icon: <Database size={24} />, level: 80 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Git", icon: <GitBranch size={24} />, level: 88 },
      { name: "Docker", icon: <Container size={24} />, level: 75 },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center mb-2">
                      <div className="text-accent mr-2">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
