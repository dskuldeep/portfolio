"use client"

import { motion } from "framer-motion"
import { Link } from "react-scroll"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-900 bg-opacity-90 z-50"
    >
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-4">
          {["About", "Experience", "Skills", "Education", "Achievements"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-lg text-gray-300 hover:text-[hsl(var(--accent))] cursor-pointer transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

