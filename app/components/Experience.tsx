"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Adpushup (Zelto)",
    role: "Product Manager",
    period: "Nov' 2022-Jan' 2024",
    achievements: [
      "Increased Ad Revenue: Implemented Machine Learning based Floor Engine on Banner Ads across 150+ partner sites, achieving a 42% average increase in RPM delivering over 1 billion monthly ad impressions worldwide.",
      "Video Ad Optimization: Deployed Machine Learning based Floor Engine for instream and outstream video ads on 300+ partner sites, driving a 30% average increase in Request CPM. delivering over 100 million monthly ad impressions worldwide",
      "Bid Optimization: Designed and implemented a ML algorithmic delay function for bid requests, reducing null bids by 60% across the top 15 sites in the ad network.",
      "User Clustering: Developed user clustering models based on behavioral analysis to enable optimized bid pricing strategies.",
      "Mobile SDK Integration: Launched GTM strategy and introduced a mobile SDK for 10 new mobile applications, expanding product capabilities.",
      "Content Management: Built a content library for instream video players deployed on the top 30 network sites, enhancing content accessibility.",
      "AI-Driven Content Discovery: Led the development of an AI-based contextual content discovery platform for video players on the top 30 sites, improving engagement.",
      "Dashboard Revamp: Spearheaded the re-engineering of a legacy monitoring and payments dashboard, reducing session failure rates by 90% on the customer portal.",
      "Video Player Rollout: Oversaw the deployment of instream video player on 300+ new sites, contributing 25% additional revenue to the ad network delivering.",
      "Report Automation: Automated 30+ reports from Google Ad Manager Big Query using advanced reporting pipelines, reducing report generation time by 90%.",
      "Ad Performance Enhancement: Directed the implementation of backfill ads in video and banner formats, reducing null bids and increasing RPM by 5%.",
      "Third-Party Demand Integration: Integrated third-party VAST demand for instream video ads, achieving a 30% increase in RPM.",
      "Companion Ads Implementation: Launched companion ads for instream and outstream video formats, leading to a 15% improvement in RPM.",
      "Statistical Revenue Optimization: Designed and implemented multi-GAM-based revenue optimization models, improving RPM by 12% using data-driven GAM selection.",
      "Team Leadership: Oversaw the hiring, training, and knowledge management of the product team, including engineers and data engineers, ensuring team readiness for quarterly and annual targets.",
      "Agile Sprint Management: Managed sprints and overall product planning across multiple teams, reducing backlog by 70% within six months and accelerating product delivery.",
      "Performance Metrics and Goal Setting: Spearheaded the creation of performance targets and objectives for product and engineering teams, including product roadmaps, key metrics, A/B tests, validation experiments, and data-driven feature prioritization."

    ],
  },
  {
    company: "Durbin Technologies",
    role: "Co-Founder and CEO",
    period: "Jul' 2020-Nov' 2022",
    achievements: [
      "Entrepreneurial Vision: Co-founded the company with a mission to empower manufacturing businesses by leveraging cutting-edge IoT and AI technologies to address complex operational challenges.",
      "Team Leadership: Recruited, trained, and managed a cross-functional team of 15 engineers to design, build, manufacture, and deploy hardware and software solutions for AI and IoT-based industrial applications.",
      "Successful Exit: Led the company to a successful acquisition by Maco Corporation in 2022, achieving a significant milestone in its growth journey.",
      "P2P Video Conferencing: Designed and deployed a low-bandwidth real-time P2P video conferencing solution for remote IoT devices, managing conception, hardware-software design, and deployment across client sites in India.",
      "IoT Data Ingestion Platform: Developed xIngest, a scalable IoT data ingestion platform supporting protocols like MQTTS, HTTPS, Kafka, and MQ, with features including infrastructure scaling, data resilience, OTA updates, and dynamic pipeline configurations.",
      "Edge Computing Hardware: Engineered xMCU, an edge-computing hardware platform that integrates with industrial and manufacturing equipment, enabling IoT connectivity and seamless integration with xIngest.",
      "Asset Management System: Built an asset management platform for industrial machinery, streamlining tracking, lease management, billing, auditing, and remote access for high-value assets.",
      "LiDAR-Based Monitoring: Developed and deployed a LiDAR-based OHE measurement and monitoring system for Indian Railways, enhancing infrastructure reliability.",
      "Remote Operations Platform: Delivered a remote operation platform for high-voltage isolators used by Indian Railways, improving operational efficiency.",
      "Predictive Maintenance: Created a high-voltage AC motor monitoring and predictive maintenance platform using LSTM models to forecast failures in rotational assemblies.",
      "Fire Suppression Systems: Developed advanced nitrogen-based fire suppression control systems for underground mines, deployed across 14 sites in India, with cross-compatibility for ANSUL systems.",
      "AI Driver Monitoring: Built an AI-based driver monitoring system using in-cabin cameras to detect fatigue and cognition loss in long-haul truck drivers, improving road safety.",
      "Power Equipment Monitoring: Designed a predictive failure management platform for high-voltage power equipment used by Indian Railways, incorporating non-contact power quality testing."
    ],
  },
  {
    company: "Quinch Systems",
    role: "Co-Founder and CEO",
    period: "Jul' 2018-Nov' 2022",
    achievements: [
      "Entrepreneurial Leadership: Co-founded the company during sophomore year, focusing on researching and developing innovative software solutions for medium-sized businesses.",
      "AI Security System: Designed and deployed an AI-powered security system integrating CNN-based threat detection for IP security cameras, enhancing surveillance capabilities, deployed at a Fortune 500 company’s manufacturing plant.",
      "Defect Detection Platform: Built a quality analysis platform using semantic segmentation and CNN models to detect surface defects in metal flat products, improving production efficiency.",
      "ERP System Development: Developed a comprehensive ERP system tailored for entertainment businesses and successfully implemented it for one of India’s largest circus companies.",
      "Learning Management System: Designed and deployed a scalable learning management system for a leading edtech startup in India, enhancing their digital education offerings.",
      ]
    },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
              <p className="text-blue-400 mb-2">{exp.role}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

