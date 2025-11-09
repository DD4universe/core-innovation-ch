'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time data visualization with machine learning insights and predictive analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'Python', 'TensorFlow', 'MongoDB'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'E-Commerce Revolution',
      description: 'Next-gen shopping platform with AR product preview and AI recommendations',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      tags: ['Next.js', 'Stripe', 'AR.js', 'PostgreSQL'],
      github: '#',
      demo: '#',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Smart City IoT Platform',
      description: 'Connected infrastructure management system for modern urban environments',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80',
      tags: ['Node.js', 'IoT', 'WebSocket', 'Redis'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Social Media Analytics Suite',
      description: 'Comprehensive social listening and engagement tracking platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Vue.js', 'GraphQL', 'Elasticsearch', 'Docker'],
      github: '#',
      demo: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant patient management with telemedicine capabilities',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['React', 'WebRTC', 'AWS', 'MySQL'],
      github: '#',
      demo: '#',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Blockchain DeFi Platform',
      description: 'Decentralized finance application with smart contract integration',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      tags: ['Web3', 'Solidity', 'Ethereum', 'IPFS'],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 glow">
            Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative solutions that blend creativity with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all"
            >
              {/* Image container with hover effect */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1"
                >
                  <FiStar className="text-yellow-300" />
                  <span className="text-sm font-semibold">Featured</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <FiGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                  >
                    <FiExternalLink />
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-primary animate-gradient-x" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-lg font-semibold glow-strong"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
