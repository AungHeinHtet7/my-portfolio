"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 md:px-6 flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-primary">{portfolioData.personalInfo.name}</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {portfolioData.personalInfo.title}
          </p>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
             High level experience in web development and mobile development knowledge, producing quality work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 min-[400px]:flex-row"
        >
          <Link href="#contact">
            <Button size="lg" className="gap-2">
              Contact Me <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://drive.google.com/file/d/1bWNX-osYr1FY57k8Tyy09XqHDdJRs5R0/view" target="_blank" download>
            <Button variant="outline" size="lg" className="gap-2">
              Download CV <Download className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Optional: Add a profile image or blob if available */}
      </div>
    </section>
  )
}
