"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, ArrowRight } from 'lucide-react';

const titles = ['前端工程师', 'AI 探索者', '终身学习者'];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = 80;
    const deletingSpeed = 40;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayText, isDeleting, currentTitleIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-[#131112] via-[#131112]/95 to-[#131112]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-[#eac26d] text-sm md:text-base font-medium tracking-wider uppercase mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">Andrew Liu</span>
          </h1>

          <div className="h-16 md:h-20 flex items-center justify-center">
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {displayText}
              <span className={`inline-block w-1 h-8 md:h-10 lg:h-12 bg-gradient-to-r from-[#eac26d] to-[#ad3b5b] ml-2 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </motion.p>
          </div>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            热爱技术，专注于构建优雅的用户体验。<br />
            在代码的世界里探索无限可能，持续学习，不断成长。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href="#about"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#eac26d] to-[#ad3b5b] rounded-lg font-medium text-[#131112] hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              了解更多
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-lg font-medium text-white hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#eac26d] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://juejin.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#ad3b5b] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <span className="text-sm font-bold">掘金</span>
            </motion.a>
            <motion.a
              href="mailto:andrew@example.com"
              className="w-10 h-10 rounded-full border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#eac26d] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </div>
    </section>
  );
}
