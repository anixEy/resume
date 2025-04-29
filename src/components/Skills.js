'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const skills = [
  { 
    name: 'JavaScript',
    level: 95,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    name: 'React',
    level: 90,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    name: 'Node.js',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'TypeScript',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  { 
    name: 'Next.js',
    level: 80,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  { 
    name: 'Python',
    level: 75,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  { 
    name: 'SQL',
    level: 85,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  { 
    name: 'Docker',
    level: 70,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
];

const progressVariants = {
  initial: { width: 0, opacity: 0 },
  animate: (level) => ({
    width: `${level}%`,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1], // Custom easing for smooth animation
    }
  }),
  hover: {
    scale: 1.02,
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 }
  }
};

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.img 
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                <span className="font-medium text-gray-700">{skill.name}</span>
                <motion.span 
                  className="ml-auto text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="relative h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden backdrop-blur-sm p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full relative"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                  variants={progressVariants}
                  custom={skill.level}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}