"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Programming & Platform Skills",
    skills: [
      "Python",
      "SQL",
      "R",
      "Java",
      "C",
      "C++",
      "HTML",
      "CSS",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Pandas",
      "FastAPI",
      "Flask",
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Jenkins",
      "GitHub",
      "Airflow",
      "Alembic",
      "Tableau",
      "Power BI",
      "Superset",
      "MongoDB",
      "Redis",
      "Pinecone",
      "Langchain",
      "Whisper",
      "Hugging Face",
      "Jira",
      "ClickUp",
      "Airtable",
      "MS Excel",
      "Asana",
      "PostHog",
      "GA",
      "GAM",
      "Notion",
    ],
  },
  {
    category: "PM & Leadership Skills",
    skills: [
      "User research",
      "stakeholder management",
      "cross-functional collaboration",
      "data-driven decision-making",
      "roadmap planning",
      "team leadership",
      "agile methodologies",
      "communication",
      "problem-solving",
      "delivering user-focused solutions",
    ],
  },
  {
    category: "Communication",
    skills: ["English", "Bengali", "Hindi"],
  },
]

// Icons and services definition moved to the top, outside component scope or directly within if only used here.
// For clarity, icons are imported at the top of the file.
import { FaDesktop, FaMobileAlt, FaPalette } from "react-icons/fa"

const services = [
  {
    title: "Web Design",
    description: "Crafting responsive and intuitive websites that engage users and achieve business goals. My focus is on clean, modern designs that are both visually appealing and highly functional.",
    icon: FaDesktop,
  },
  {
    title: "App Design",
    description: "Designing user-friendly mobile applications with a focus on seamless user experience and functionality. I create intuitive interfaces that make complex tasks simple for users.",
    icon: FaMobileAlt,
  },
  {
    title: "UI/UX Design",
    description: "Creating compelling user interfaces and experiences through research, wireframing, and user-centered design principles. I strive to design products that are not only beautiful but also easy and enjoyable to use.",
    icon: FaPalette,
  },
]

const Skills = () => { // Single definition of Skills component
  return (
    <>
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center text-[hsl(var(--primary-accent))]"
          >
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center text-[hsl(var(--primary-accent))]"
          >
            Services Offered
          </motion.h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 12px 24px rgba(0,0,0,0.35)" }}
                className="bg-gray-700 rounded-lg p-8 shadow-xl flex flex-col items-center text-center"
              >
                <service.icon className="text-5xl mb-6 text-[hsl(var(--accent))]" />
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills

