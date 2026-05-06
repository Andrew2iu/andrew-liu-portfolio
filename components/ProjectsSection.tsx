"use client";

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DocShare',
    subtitle: '高性能全栈实时协同文档系统',
    period: '2025/12 - 2026/02',
    description: '仿"腾讯文档"的工业级协作系统，支持多用户低延迟实时协同、彩色光标感知、图片异步分发',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS 3', 'Quill', 'Yjs', 'y-quill', 'y-websocket'],
    challenges: [
      '实时协同编辑冲突处理',
      'WebSocket通信和房间管理',
      '富文本编辑器集成',
      '数据持久化',
      '在线用户状态管理',
    ],
    image: '/images/projects/docshare.png',
  },
  {
    title: 'AI心理健康助手',
    subtitle: '智能心理辅助应用',
    period: '2026/02 - 2026/03',
    description: '基于Vue 3的AI心理助手应用，集成智能对话、情绪分析、情绪日志、心理咨询和知识推荐',
    techStack: ['Vue 3', 'Vite', 'Uniapp', 'WangEditor', 'ECharts'],
    challenges: [
      '流式API实时对话',
      '富文本编辑器集成与定制',
      '前端路由权限控制',
      '响应式设计与用户体验优化',
    ],
    image: '/images/projects/ai-mental-health.png',
  },
];

const techColors: Record<string, string> = {
  'React': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Next.js': 'bg-white/10 text-white border-white/20',
  'TypeScript': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Tailwind CSS 3': 'bg-lime-500/20 text-lime-400 border-lime-500/30',
  'Quill': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Yjs': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'y-quill': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'y-websocket': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Vue 3': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Vite': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Uniapp': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'WangEditor': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'ECharts': 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#131112] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#eac26d] text-sm font-medium tracking-wider uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            项目<span className="text-gradient">经历</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl border border-[#2d2a2b] overflow-hidden card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <motion.div
                      className="aspect-video rounded-lg bg-gradient-to-br from-[#eac26d]/20 to-[#ad3b5b]/20 overflow-hidden relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-gray-400">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.a
                          href="#"
                          className="w-9 h-9 rounded-lg border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#eac26d] transition-colors"
                          whileHover={{ y: -3 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="w-9 h-9 rounded-lg border border-[#2d2a2b] flex items-center justify-center text-[#c9c2ba] hover:text-[#f2eae0] hover:border-[#ad3b5b] transition-colors"
                          whileHover={{ y: -3 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm mb-4">{project.period}</p>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 rounded-full border text-sm font-medium ${techColors[tech] || 'bg-white/10 text-gray-400 border-white/10'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="flex items-center gap-2 text-[#eac26d] hover:text-[#ad3b5b] transition-colors"
                    >
                      <span className="text-sm font-medium">技术难点</span>
                      <motion.div
                        animate={{ rotate: expandedProject === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: expandedProject === index ? 'auto' : 0, opacity: expandedProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2 pl-4 border-l-2 border-[#eac26d]/30">
                        {project.challenges.map((challenge, idx) => (
                          <motion.li
                            key={challenge}
                            className="text-gray-400 text-sm py-1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={expandedProject === index ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.2, delay: idx * 0.1 }}
                          >
                            {challenge}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
