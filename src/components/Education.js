import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Engineering",
      institution: "University of Mumbai",
      location: "Mumbai",
      period: "July 2012 - May 2016"
    }
  ];

  const certifications = [
    {
      name: "Scrum Master (PSM-I)",
      year: "2024"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      year: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
        Education & Certifications
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <motion.h3 
            className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
            whileHover={{ x: 10 }}
          >
            Education
          </motion.h3>
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.h4 
                className="font-semibold"
                whileHover={{ x: 5 }}
              >
                {edu.degree}
              </motion.h4>
              <p className="text-gray-600 dark:text-gray-300">{edu.institution}, {edu.location}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <motion.h3 
            className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4"
            whileHover={{ x: 10 }}
          >
            Certifications
          </motion.h3>
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.h4 
                className="font-semibold"
                whileHover={{ x: 5 }}
              >
                {cert.name}
              </motion.h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Achieved in {cert.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}