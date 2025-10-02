'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Cloud, Zap, Users, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    {
      icon: Code2,
      title: 'Backend Technologies',
      description: 'Expert in server-side development with modern frameworks and languages',
      technologies: ['Node.js', 'NestJS', 'Express.js', 'Go', 'Python', 'TypeScript']
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'Proficient in both SQL and NoSQL databases with optimization expertise',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'TypeORM']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Experienced in cloud platforms and containerization technologies',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Nginx']
    },
    {
      icon: Zap,
      title: 'AI & Modern Tech',
      description: 'Working with cutting-edge AI technologies and integrations',
      technologies: ['GenAI', 'LangChain', 'Vector DBs', 'LLM Integration', 'Embeddings', 'RAG']
    }
  ]

  const achievements = [
    {
      icon: Users,
      title: '1.5+ Years',
      description: 'Professional development experience'
    },
    {
      icon: Award,
      title: '20+ Technologies',
      description: 'Mastered across different domains'
    },
    {
      icon: Zap,
      title: '99.9% Uptime',
      description: 'Maintained for production systems'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#fdfcfcff' }}
      data-scroll
      data-scroll-call="aboutInView"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#333333' }}>
              About Me
            </h2>
            <div 
              className="w-20 h-1 mx-auto mb-6" 
              style={{ background: 'linear-gradient(135deg, #0077C0 40%, #d0def9ff 100%)' }}
            ></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I&apos;m a passionate Backend Engineer with over 1.5 years of experience building 
              scalable, high-performance systems. I specialize in designing robust APIs, 
              optimizing database performance, and implementing cloud-native solutions with 
              cutting-edge AI integration.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20" variants={containerVariants}>
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="rounded-2xl p-6 lg:p-8 transition-all duration-300 border bg-gradient-to-br from-blue-50 to-white-50 border-gray-100 hover:border-blue-200"
                variants={itemVariants}
                whileHover={{ 
                  y: -5
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div variants={containerVariants}>
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 lg:mb-12 font-playfair"
              variants={itemVariants}
            >
              Key Achievements
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  className="text-center p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-white-50 rounded-2xl border border-blue-100"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 15px 30px rgba(59, 130, 246, 0.15)'
                  }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
