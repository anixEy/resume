/**
 * Header component that displays the main header section of the portfolio
 * including name, title, and contact information. Features smooth animations.
 * 
 * @component
 * @returns {JSX.Element} A header section with animated content
 */
'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="text-center py-16 relative text-white min-h-[400px] overflow-hidden">
      {/* Background with mountains and stars */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-600"
        style={{
          background: `
            radial-gradient(2px 2px at 20px 30px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, white, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, white, rgba(0,0,0,0)),
            linear-gradient(to bottom, transparent 60%, #1a365d),
            linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
          `,
          backgroundSize: '200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 200px 200px, 100% 100%, 100% 100%'
        }}
      />
      
      {/* Mountains silhouette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, #0f172a 25%, transparent 25%) 50px 0,
            linear-gradient(-45deg, #0f172a 25%, transparent 25%) 50px 0,
            linear-gradient(45deg, transparent 75%, #0f172a 75%),
            linear-gradient(-45deg, transparent 75%, #0f172a 75%)
          `,
          backgroundSize: '100px 100px',
          backgroundPosition: 'bottom',
          maskImage: 'linear-gradient(to top, black 30%, transparent 60%)'
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h1 
          className="text-4xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Aniket Sonavane
        </motion.h1>
        <motion.h2 
          className="text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Senior Technology Consultant
        </motion.h2>
        <motion.div 
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="mailto:aniket.sonavane@example.com" className="text-white hover:text-blue-200 transition-colors">
            aniket.sonavane@example.com
          </a>
          <a href="tel:+919876543210" className="text-white hover:text-blue-200 transition-colors">
            +91 98765 43210
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}