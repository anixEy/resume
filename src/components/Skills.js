import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Java", "Angular", "Spring Boot", "Elastic Stack", "JavaScript", "HTML", "CSS", "Mule", "React", "Git", "Jira", "Jenkins", "AWS"]
    },
    {
      title: "Soft Skills",
      skills: ["Continuous Learning", "Coaching & Mentoring", "Strong Analytical Thinking", "Team Management", "Decision-making"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <motion.h3 
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
              whileHover={{ x: 10 }}
            >
              {category.title}
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}