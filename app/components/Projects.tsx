"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Recommendation Engine",
    description: "Developed a recommendation system using collaborative filtering and content-based filtering techniques to personalize user experience and increase engagement for an e-commerce platform.",
    imageUrl: "https://source.unsplash.com/random/600x400/?ai,technology",
    projectLink: "#",
    githubLink: "#",
  },
  {
    title: "Mobile App for Data Visualization",
    description: "Designed and built a cross-platform mobile application enabling users to visualize complex datasets interactively through various chart types and dashboards. Integrated with a live data backend.",
    imageUrl: "https://source.unsplash.com/random/600x400/?mobile,data",
    projectLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "Created a comprehensive analytics dashboard for an e-commerce client, providing insights into sales trends, customer behavior, and inventory management. Utilized SQL, Python, and Tableau.",
    imageUrl: "https://source.unsplash.com/random/600x400/?ecommerce,analytics",
    projectLink: "#",
    githubLink: "#",
  },
  {
    title: "Predictive Maintenance IoT System",
    description: "Led the development of an IoT system using sensors and machine learning to predict equipment failures in a manufacturing plant, reducing downtime and maintenance costs.",
    imageUrl: "https://source.unsplash.com/random/600x400/?iot,manufacturing",
    projectLink: "#",
    githubLink: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-[hsl(var(--primary-accent))]"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden relative group"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <p className="text-gray-300 text-center mb-4">{project.description}</p>
                <div className="space-x-4">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-4 py-2 rounded-md hover:bg-[hsl(var(--accent-hover))] transition duration-300 text-sm"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 text-sm"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
