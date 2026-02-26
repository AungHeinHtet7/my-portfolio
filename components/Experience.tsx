"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </div>

        <div className="max-w-3xl mx-auto relative border-l border-muted pl-8 ml-4 md:ml-auto md:mr-auto space-y-12">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />

              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Briefcase className="h-4 w-4" />
                  <span>{job.company}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{job.period}</span>
                </div>
              </div>

              <ul className="list-disc list-outside ml-5 space-y-1 text-muted-foreground">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 text-center mt-24 mb-12">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
        </div>
         <div className="max-w-3xl mx-auto relative border-l border-muted pl-8 ml-4 md:ml-auto md:mr-auto space-y-12">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary" />

              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span>{edu.degree}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
