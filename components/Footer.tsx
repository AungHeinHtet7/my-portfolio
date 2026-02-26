import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-lg font-bold">{portfolioData.personalInfo.name}</span>
            <p className="text-sm text-muted-foreground">
              {portfolioData.personalInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
             {/* Adding other social links if available or placeholders */}
             <Link
              href="https://www.facebook.com/aungheinhtet.me"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
             <Link
              href="https://www.instagram.com/aunghein_htet/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
             <Link
              href="https://twitter.com/AungHein_Htet"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
