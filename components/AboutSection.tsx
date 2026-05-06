"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const techTags = [
  { name: 'Vue 3', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { name: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { name: 'Node.js', color: 'bg-lime-500/20 text-lime-400 border-lime-500/30' },
  { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { name: 'AI', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { name: 'Next.js', color: 'bg-white/10 text-white border-white/20' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#131112] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Image
                  src="/images/avatar/profile.png"
                  alt="Andrew Liu"
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 320px"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-[#eac26d] text-sm font-medium tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              About Me
            </motion.p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              关于<span className="text-gradient">我</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              我是一名充满热情的前端工程师，专注于构建高性能、优雅的用户界面。
              拥有扎实的计算机科学基础，热爱探索新技术，特别是在 AI 领域的应用。
              我相信技术的力量可以改变世界，致力于创造有意义的产品。
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              在工作中，我注重代码质量和团队协作，善于将复杂的问题分解为可管理的小任务。
              持续学习是我的生活态度，我不断挑战自己，追求卓越。
            </p>

            <div className="flex flex-wrap gap-3">
              {techTags.map((tag, index) => (
                <motion.span
                  key={tag.name}
                  className={`px-4 py-2 rounded-full border text-sm font-medium ${tag.color} group relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">{tag.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#eac26d]/50 to-[#ad3b5b]/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
