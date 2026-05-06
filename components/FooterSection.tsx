"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp, Github, Mail, Heart } from 'lucide-react';

export default function FooterSection() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-tech-blue to-aurora-purple flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showBackTop ? 1 : 0, y: showBackTop ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="返回顶部"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <footer className="py-16 bg-deep-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tech-blue to-aurora-purple flex items-center justify-center">
                <span className="text-xs font-bold text-white">A</span>
              </div>
              <span className="text-lg font-bold text-gradient">Andrew Liu</span>
            </div>

            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:andrew@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>

            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Andrew Liu
            </p>
          </motion.div>

          <motion.div
            className="mt-8 pt-8 border-t border-white/5 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 text-sm">
              © 2024 Andrew Liu. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
