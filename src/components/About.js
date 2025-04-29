/**
 * About component that displays a personal introduction and summary.
 * Features animated sections and hover effects using Framer Motion.
 * 
 * @component
 * @returns {JSX.Element} A section containing personal introduction and key highlights
 */
'use client';
import { motion } from 'framer-motion';

export default function About() {
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
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I am a passionate Senior Technology Consultant with over 7 years of experience in software development and cloud technologies. My journey in tech has been driven by a constant desire to learn and create efficient, scalable solutions that make a real impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Currently at Ernst & Young (EY), I specialize in leading technical teams and implementing cloud-native solutions. I have a strong foundation in full-stack development and a particular interest in cloud architecture and DevOps practices.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">What I Do</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Technical Leadership</li>
                <li>Cloud Architecture</li>
                <li>Full Stack Development</li>
                <li>DevOps Implementation</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">My Approach</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>User-Centered Design</li>
                <li>Agile Methodologies</li>
                <li>Continuous Learning</li>
                <li>Collaborative Development</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}