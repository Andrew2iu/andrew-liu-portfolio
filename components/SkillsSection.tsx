"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    name: '前端框架',
    skills: [
      { name: 'Vue 3', level: 95, description: '精通组合式API、响应式系统、组件设计' },
      { name: 'React', level: 90, description: '熟练使用Hooks、状态管理、性能优化' },
      { name: 'Next.js', level: 85, description: 'SSR/SSG、App Router、Edge Functions' },
      { name: 'Nuxt.js', level: 80, description: 'Vue生态服务端渲染框架' },
    ],
  },
  {
    name: '工程化',
    skills: [
      { name: 'TypeScript', level: 90, description: '类型安全、泛型、高级类型' },
      { name: 'Webpack/Vite', level: 85, description: '构建优化、性能调优' },
      { name: 'Tailwind CSS', level: 95, description: '原子化CSS、自定义主题' },
      { name: 'Git', level: 85, description: '代码管理、协作流程' },
    ],
  },
  {
    name: '小程序/跨端',
    skills: [
      { name: '微信小程序', level: 85, description: '原生开发、云开发、性能优化' },
      { name: 'UniApp', level: 80, description: '跨平台开发、多端适配' },
      { name: 'Taro', level: 75, description: 'React/Vue跨端框架' },
    ],
  },
  {
    name: '后端/Node',
    skills: [
      { name: 'Node.js', level: 80, description: 'Express、Koa、异步编程' },
      { name: 'MongoDB', level: 75, description: '文档数据库、聚合查询' },
      { name: 'Redis', level: 70, description: '缓存策略、数据结构' },
    ],
  },
  {
    name: 'AI驱动开发',
    skills: [
      { name: 'LLM API', level: 85, description: 'OpenAI、Anthropic、国产大模型' },
      { name: 'LangChain', level: 80, description: '提示工程、链开发' },
      { name: '向量数据库', level: 75, description: 'Pinecone、Milvus、语义搜索' },
    ],
  },
  {
    name: '计算机基础',
    skills: [
      { name: '数据结构', level: 85, description: '数组、链表、树、图、哈希表' },
      { name: '算法', level: 80, description: '排序、搜索、动态规划、贪心' },
      { name: '网络协议', level: 75, description: 'HTTP、TCP/IP、WebSocket' },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#131112] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#eac26d] text-sm font-medium tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            专业<span className="text-gradient">技能</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2d2a2b]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#eac26d] to-[#ad3b5b]" />
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#2d2a2b] rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#eac26d] to-[#ad3b5b]"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                      />
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <motion.div
                      className="absolute left-0 right-0 bottom-full mb-2 p-3 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-white/10 text-xs text-gray-300 z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: hoveredSkill === skill.name ? 1 : 0, y: hoveredSkill === skill.name ? 0 : 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.description}
                      <div className="absolute top-full left-4 w-2 h-2 bg-gray-900/95 border-l border-b border-white/10 rotate-45" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
