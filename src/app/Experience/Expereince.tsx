'use client'

import {  motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })


  const experiences = [
    {
      title: 'Backend & Devops Engineer',
      company: 'Sunbots Innovations LLP',
      location: 'Ahmedabad, India',
      period: '2024 - Present',
      type: 'Full-time',
      description: 'Leading backend architecture design and implementation for high-scale distributed system with optimization.',
      achievements: [
        'Build Scalable Backend Systems and increase the response time by 70%',
        'Built an Document AI feature which can scale upto million users simultaneously with no downtime',
        'Reduced infrastructure costs by 30% through efficient resource management',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Mentored junior developers and conducted code reviews to ensure code quality'
      ],
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS', 'Docker', 'Redis', 'RabbitMQ', 'Payment Gateways']
    },
    {
      title: 'Backend Engineer',
      company: 'Lucent Innovations',
      location: 'Ahmedabad, India',
      period: '2024(Jan - Jun)',
      type: 'Internship',
      description: 'Worked on a Fintech startup project to develop and maintain backend services and APIs.',
      achievements: [
        'Developed RESTful APIs for core banking features',
        'Learned best practices in backend development and cloud deployment',
        'Collaborated with cross-functional teams to deliver features on time',
        'Learned about Shopify API and its integration'
      ],
      technologies: ['JavaScript', 'Express.js', 'MongoDB', 'MySQL']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16 lg:mb-20" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My journey through various roles has shaped me into a well-rounded engineer 
              with expertise in backend development, system architecture, and team leadership.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform sm:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-blue-600 rounded-full transform sm:-translate-x-1/2 mt-6 z-10 ring-4 ring-white"></div>

                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <motion.div
                      className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Full-time' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {exp.type}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold mb-3" style={ { color: '#006dc0ff' } }>
                          {exp.company}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-1 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex text-[1rem] gap-2 items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Briefcase className="w-4 h-4 mr-1 text-blue-500" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-[0.8rem] rounded-md font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
