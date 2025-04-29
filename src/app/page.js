/**
 * Main home page component that assembles the portfolio.
 * Implements a staggered animation system for the main sections
 * using Framer Motion for smooth transitions and animations.
 * 
 * @component
 * @returns {JSX.Element} The complete portfolio page with animated sections
 */
'use client';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-8 space-y-16"
      >
        <motion.div variants={item}>
          <About />
        </motion.div>
        <motion.div variants={item}>
          <Experience />
        </motion.div>
        <motion.div variants={item}>
          <Skills />
        </motion.div>
        <motion.div variants={item}>
          <Education />
        </motion.div>
      </motion.main>
    </div>
  );
}
