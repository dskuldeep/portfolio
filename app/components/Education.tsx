"use client"

import { motion } from "framer-motion"

const educations = [
  {
    degree: "MSc Applied Data Science",
    institution: "University of Essex",
    period: "2024 - 2025",
    grade: "87%",
  },
  {
    degree: "B.Tech",
    institution: "IIEST, Shibpur",
    period: "2016 - 2020",
    grade: "7.52 CGPA",
  },
  {
    degree: "Higher Secondary",
    institution: "South Point High School (CBSE)",
    period: "2014 - 2016",
    grade: "86%",
  },
  {
    degree: "Secondary",
    institution: "South Point High School (WBBSE)",
    period: "2014",
    grade: "90%",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-2">{edu.period}</p>
              <p className="text-green-400">{edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

