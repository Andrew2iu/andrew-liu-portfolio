"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const achievements = [
  '蓝桥杯广东赛区二等奖',
  '校级三等奖学金',
  '单项奖学金',
  '优秀学生干部',
  'CET-4/6',
];

const courses = [
  '数据结构与算法',
  '操作系统',
  '计算机网络',
  '数据库原理',
  '软件工程',
  '人工智能导论',
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 md:py-32 bg-[#131112] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#eac26d] text-sm font-medium tracking-wider uppercase mb-4">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            教育<span className="text-gradient">经历</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#eac26d] via-[#ad3b5b] to-transparent" />
          <div className="block md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#eac26d] via-[#ad3b5b] to-transparent" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hidden md:block absolute -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center timeline-dot">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#131112]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="md:hidden absolute -left-10 w-8 h-8 rounded-full bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center timeline-dot">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#131112]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2d2a2b] card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-[#eac26d]" />
                  <div>
                    <h3 className="text-xl font-bold text-white">东莞理工学院</h3>
                    <p className="text-gray-400">软件工程(卓越计划班) · 本科</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">2023/09 - 2027/06</p>
                <p className="text-gray-300 leading-relaxed">
                  在大学期间，我系统学习了计算机科学的核心课程，培养了扎实的编程基础和问题解决能力。
                  通过参与各类竞赛和项目实践，不断提升自己的技术水平和团队协作能力。
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative pl-16 md:pl-0"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="md:hidden absolute -left-10 w-8 h-8 rounded-full bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center timeline-dot">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#131112]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="hidden md:block absolute -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#eac26d] to-[#ad3b5b] flex items-center justify-center timeline-dot">
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#131112]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="space-y-6">
                <div className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2d2a2b]">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-[#ad3b5b]" />
                    <h3 className="text-lg font-bold text-white">荣誉奖项</h3>
                  </div>
                  <ul className="space-y-3">
                    {achievements.map((item, index) => (
                      <motion.li
                        key={item}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ad3b5b]" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className="bg-[#1a1819]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2d2a2b]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-6 h-6 text-[#eac26d]" />
                    <h3 className="text-lg font-bold text-white">主修课程</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-full bg-white/5 text-gray-400 text-sm border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
