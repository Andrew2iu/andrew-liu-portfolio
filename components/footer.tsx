"use client";

import { motion } from 'framer-motion';
import { ArrowUp, Github, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="py-16 bg-[#131112] border-t border-[#2d2a2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center">
              <span className="text-[#131112] font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gradient">Andrew Liu</span>
          </motion.div>
          <p className="text-[#c9c2ba] mb-6">
            热爱技术，专注于构建优雅的用户体验
          </p>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#eac26d] transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:andrew@example.com"
              className="w-10 h-10 rounded-full border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#ad3b5b] transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-[#2d2a2b] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#8a857f] text-sm">
              © {new Date().getFullYear()} Andrew Liu. All rights reserved.
            </p>
            <p className="text-[#8a857f] text-sm flex items-center gap-2">
              Made with <span className="text-[#ad3b5b]">❤️</span> by Andrew Liu
            </p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center text-[#131112] shadow-lg hover:shadow-xl transition-all z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
