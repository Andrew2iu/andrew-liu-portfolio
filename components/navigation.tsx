"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, BookOpen } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#education', label: '教育' },
  { href: '#work', label: '工作' },
  { href: '#projects', label: '项目' },
  { href: '#skills', label: '技能' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#131112]/80 backdrop-blur-xl border-b border-[#2d2a2b]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#131112]" />
            </div>
            <span className="text-xl font-bold text-gradient">个人博客</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:andrew@example.com"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#131112]/95 backdrop-blur-xl border-t border-[#2d2a2b]"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="mailto:andrew@example.com">
                  <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
