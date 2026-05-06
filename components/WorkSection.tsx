"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp, Layers, Smartphone } from 'lucide-react';

const achievements = [
  {
    icon: TrendingUp,
    title: '高效业务落地',
    description: '完成 10+ 业务需求开发，优化首屏加载时间（FCP），提升用户体验。',
  },
  {
    icon: Layers,
    title: '组件重构与工程化',
    description: '推动原子化设计体系建设，代码精简 20%，提升开发效率和可维护性。',
  },
  {
    icon: Smartphone,
    title: '小程序独立开发',
    description: '负责教育类小程序 0-1 建设，完成低端机型适配，保障用户覆盖。',
  },
];

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-24 md:py-32 bg-[#131112] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#eac26d] text-sm font-medium tracking-wider uppercase mb-4">
            Work Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            工作<span className="text-gradient">经验</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl p-8 border border-[#2d2a2b] card-hover"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#131112]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">东莞市卓乐教育科技有限公司</h3>
                <p className="text-[#eac26d] font-medium">前端工程师</p>
                <p className="text-gray-500 text-sm">2026/01 - 2026/04</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              在卓乐教育担任前端工程师期间，负责公司核心产品的开发与维护。
              通过技术创新和流程优化，显著提升了产品性能和开发效率，获得团队一致认可。
            </p>
          </motion.div>

          <div className="grid gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2d2a2b] card-hover"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#eac26d]/20 to-[#ad3b5b]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#eac26d]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
