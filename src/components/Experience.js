import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Technology Consultant",
      company: "Ernst & Young (EY)",
      location: "Mumbai, India",
      period: "October 2021 - Present",
      responsibilities: [
        "Led and coordinated sprints, providing technical leadership",
        "Developed frameworks and optimized development time",
        "Implemented AWS deployment strategies",
        "Optimized infrastructure for high performance"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "QualityKiosk Technologies Pvt. Ltd.",
      location: "Navi Mumbai, India",
      period: "May 2016 - September 2021",
      responsibilities: [
        "Developed efficient software solutions",
        "Created automated services",
        "Implemented Agile and DevOps methodologies",
        "Maintained ELK stack",
        "Extensive work with Java, JSP, Angular"
      ]
    }
  ];

  return (
    <section className="py-16">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Professional Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <motion.h3 
              className="text-xl font-semibold text-blue-600 dark:text-blue-400"
              whileHover={{ x: 10 }}
            >
              {exp.title}
            </motion.h3>
            <div className="text-gray-600 dark:text-gray-300 mt-1">{exp.company} - {exp.location}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">{exp.period}</div>
            <motion.ul 
              className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {exp.responsibilities.map((resp, idx) => (
                <motion.li 
                  key={idx} 
                  className="mt-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {resp}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}