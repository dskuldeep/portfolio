"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          With over 5+ years of experience as an Entrepreneur and Product Manager, I specialize in driving the
          end-to-end lifecycle of data-driven B2B products, leveraging cutting-edge technologies in Machine Learning
          (ML), Artificial Intelligence (AI), and agile software development. From founding and scaling a startup from
          the ground up to leading product strategy in a high-growth startup environment, I bring hands-on expertise in
          team building, product development, and achieving product-market fit.
        </motion.p>
      </div>
    </section>
  )
}

export default About

