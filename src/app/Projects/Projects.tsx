'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'UnifyPay',
      description: 'A Unified Payment Gateway Library that simplifies payment processing by integrating multiple payment providers into a single, easy-to-use SDK for multiple platforms in single codebase.',
      image: '/api/placeholder/600/400',
      technologies: ['TypeScript', 'Node.js', 'OOPS', 'Payment Gateways'],
      features: [
        'Multiple Payment Providers',
        'Easy Integration',
        'Secure Transactions',
        'Comprehensive Documentation'
      ],
      liveUrl: 'https://www.npmjs.com/package/unified-pay-node',
      githubUrl: 'https://github.com/DarshilChauhan1/unified-pay.git',
      status: 'Production',
      date: '2024'
    },
    {
      title: 'Query Builder LLM',
      description: 'Tool for executing and generating SQL queries using natural language processing and LLMs to interact with databases more intuitively just like ChatGPT.',
      image: '/api/placeholder/600/400',
      technologies: ['Langchain', 'OpenAI', 'PostgreSQL', 'TypeScript', 'NestJS', 'Prisma', 'Docker'],
      features: [
        'Natural Language to SQL',
        'Database Integration',
        'Query Execution',
        'Error Handling'
      ],
      liveUrl: '',
      githubUrl: 'https://github.com/DarshilChauhan1/sql-query-builder-llm.git',
      status: 'In Progress',
      date: '2024'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={cardVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work in backend development, DevOps automation, 
              and full-stack applications. Each project demonstrates different aspects 
              of modern software engineering.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl text-blue-600 font-bold">
                    {project.title.split(' ').map(word => word[0]).join('').substring(0, 2)}
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  {/* Title and Date */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm ml-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-600">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2  text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium" style={{ backgroundColor: '#006dc0ff' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12 lg:mt-16"
            variants={cardVariants}
          >
            <p className="text-lg text-gray-600 mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium" style={{ backgroundColor: '#006dc0ff' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
