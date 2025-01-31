"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 py-8"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© 2024 Kuldeep Paul. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/kuldeep-paul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a href="mailto:kuldeep.paul08@gmail.com" className="text-blue-400 hover:text-blue-300">
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

