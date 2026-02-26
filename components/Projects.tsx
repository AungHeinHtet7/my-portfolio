"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <p className="text-muted-foreground">My recent work</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="line-clamp-2 min-h-[3.5rem]">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2 pt-2">
                  {project.links.demo && (
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <Link href={project.links.github} target="_blank">
                        <Github className="h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                  {project.links.ios && (
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <Link href={project.links.ios} target="_blank">
                        <Smartphone className="h-4 w-4" /> iOS
                      </Link>
                    </Button>
                  )}
                  {project.links.android && (
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <Link href={project.links.android} target="_blank">
                        <Smartphone className="h-4 w-4" /> Android
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
