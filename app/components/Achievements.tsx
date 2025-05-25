"use client"

import { motion } from "framer-motion"

const achievements = [
  "Recognition for Outstanding contribution to the Development of Zelto Products",
  "Award of Excellence in Social Leadership - Alumni Fellowship IIEST Shibpur",
  "1st Prize at Metallix, J.U. (Metallography Event)",
  "1st Prize at Metallix, J.U. (B-Plan Event)",
  "1st Prize at Heritage Institute of Technology Techfest, Dakshh (Business Plan and Innovation Contest)",
  "2nd Prize at IOCL Debate held at IIEST Shibpur",
  "Best Innovative Prototype at Scintillations 2017",
  "2nd Prize at NIT Durgapur, Aarohan (Business Plan Event)",
  "1st Prize at Kriti 2017 IIEST Shibpur Hackathon",
  "National Award for Top 50 Innovations at Intel Initiative for Research and Innovation in Science",
  "The Telegraph Balarampur Chini Mills Award for Innovation and Research",
  "Times of India Student of the Year Award for All-Rounder Performance",
  "M.P. Birla Smark Kosh Special Talent Award for Scientific Research and Innovation",
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-[hsl(var(--primary-accent))]"
        >
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
              className="bg-gray-700 rounded-lg p-4 shadow-lg"
            >
              <p className="text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

