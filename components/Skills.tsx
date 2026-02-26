"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Layout } from "lucide-react"

export default function Skills() {
  const iconMap: Record<string, React.ReactNode> = {
    mobile: <Smartphone className="h-6 w-6 text-primary" />,
    web: <Layout className="h-6 w-6 text-primary" />,
    practices: <Code className="h-6 w-6 text-primary" />,
  }

  const titleMap: Record<string, string> = {
    mobile: "Mobile Development",
    web: "Web Technologies",
    practices: "Best Practices",
  }

  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <p className="text-muted-foreground">My technical level</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {Object.entries(portfolioData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {iconMap[category]}
                  <CardTitle>{titleMap[category]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
