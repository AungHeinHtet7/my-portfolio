"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export default function About() {
  // Stats from the old site (inferred or hardcoded based on image content)
  const stats = [
    { label: "Years experience", value: "01+" }, // From old site
    { label: "Completed project", value: "3+" }, // From old site
    { label: "Companies worked", value: "02+" }, // Updated based on 2 companies listed
  ]

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground max-w-[700px]">My Introduction</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.summary}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm">
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

           {/* Image or Visual - Using a placeholder or potentially the blob from assets if I can access it easily, but standard image component is safer */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
             className="flex justify-center"
           >
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                {/* Fallback to a nice gradient or placeholder if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-4xl font-bold text-primary/50">
                  Me
                </div>
                {/* <Image src="/assets/img/aboutme.png" alt="About Me" layout="fill" objectFit="cover" /> */}
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  )
}
