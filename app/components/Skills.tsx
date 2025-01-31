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

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
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
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

