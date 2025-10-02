'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden" 
      style={{ backgroundColor: '#fdfcfcff' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orb 1 */}
        <div 
          className="absolute rounded-full opacity-30 blur-[60px] animate-float hidden sm:block"
          style={{
            width: '2000px',
            height: '2000px',
            background: `radial-gradient(circle, 
              rgba(59, 130, 246, 0.4) 0%, 
              rgba(147, 197, 253, 0.3) 40%, 
              rgba(219, 234, 254, 0.15) 70%, 
              transparent 100%
            )`,
            top: '-5%',
            left: '-15%'
          }}
        />
        
        {/* Gradient Orb 2 */}
        <div 
          className="absolute rounded-full opacity-30 blur-[60px] animate-float-delay-1 hidden sm:block"
          style={{
            width: '550px',
            height: '550px',
            background: `radial-gradient(circle, 
              rgba(147, 197, 253, 0.35) 0%, 
              rgba(219, 234, 254, 0.25) 35%, 
              rgba(59, 130, 246, 0.15) 65%, 
              transparent 100%
            )`,
            top: '70%',
            right: '-20%'
          }}
        />
        
        {/* Gradient Orb 3 */}
        <div 
          className="absolute rounded-full opacity-20 blur-[60px] animate-float-delay-2 hidden sm:block"
          style={{
            width: '600px',
            height: '600px',
            background: `radial-gradient(circle, 
              rgba(219, 234, 254, 0.3) 0%, 
              rgba(59, 130, 246, 0.25) 45%, 
              rgba(147, 197, 253, 0.15) 75%, 
              transparent 100%
            )`,
            bottom: '-5%',
            left: '70%'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          data-scroll
          data-scroll-call="heroInView"
        >
          {/* Hero Title */}
          <motion.div className="mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
            <h1 className="mb-4 sm:mb-6 md:mb-8">
              <span className="block font-serif font-bold text-center leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ color: '#3b82f6' }}>
                Darshil Chauhan
              </span>
              <span className="block font-sans font-medium text-center leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 text-gray-500">
                Backend & DevOps Engineer
              </span>
            </h1>
          </motion.div>

          {/* Hero Subtitle */}
          <motion.p 
            className="font-sans text-center font-normal mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-500"
            variants={itemVariants}
          >
            Crafting robust, scalable backend systems with modern technologies and AI.
            Passionate about clean code, system architecture, and performance optimization.
          </motion.p>

          {/* Social Media Links */}
          <motion.div 
            className="flex gap-3 sm:gap-4 md:gap-5 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/DarshilChauhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl text-gray-500 border border-gray-200 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 hover:shadow-md hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/darshil-chauhan-118637215/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl text-gray-500 border border-gray-200 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 hover:shadow-md hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
            
            <motion.a
              href="mailto:workwithdarshil@gmail.com"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl text-gray-500 border border-gray-200 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 hover:shadow-md hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
            
            <motion.a
              href="https://medium.com/@chauhandarshil716"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-xl text-gray-500 border border-gray-200 shadow-sm transition-all duration-200 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-500 hover:shadow-md hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
