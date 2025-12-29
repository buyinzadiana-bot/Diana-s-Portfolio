import { GithubProjects } from "../app/components/github-projects"
import { Github, Linkedin, Twitter, Mail, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
// Removed unused Button import (use native Link styled as a button instead)

export default function PortfolioPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 py-20 md:px-12 lg:py-32">
      {/* Hero Section */}
      <section className="lg:flex lg:justify-between lg:items-start lg:gap-20">
        <header className="lg:sticky lg:top-32 lg:flex lg:h-fit lg:w-[45%] lg:flex-col lg:justify-between lg:py-0">
          <div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-glow">Diana Buyinza</h1>
            <h2 className="mt-3 text-lg font-medium text-primary sm:text-xl">Software Engineer & Creative Designer</h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              I build high-end digital experiences that live at the intersection of design and engineering.
            </p>

            <nav className="hidden lg:block mt-16 space-y-4">
              <a href="#about" className="group flex items-center py-3 active">
                <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary">
                  About
                </span>
              </a>
              <a href="#projects" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary">
                  Projects
                </span>
              </a>
              <a href="#experience" className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary">
                  Stack
                </span>
              </a>
            </nav>
          </div>

          <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0" aria-label="Social media">
            <li>
              <a
                href="https://github.com/buyinzadiana-bot"
                target="_blank"
                className="block hover:text-primary transition-colors"
                rel="noreferrer"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/buyinza-diana-9404b61b7/" className="block hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="mailto:hello@example.com" className="block hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>
        </header>

        <div className="pt-20 lg:w-[55%] lg:py-0">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <Sparkles className="mr-2 h-4 w-4" />
            Available for new opportunities
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-glow max-w-4xl">
            Crafting digital experiences with <span className="text-primary">precision</span> and{" "}
            <span className="text-primary">passion</span>.
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            I'm Diana Buyinza, a Software Engineer dedicated to building high-end, user-centric applications that merge
            robust backend logic with creative frontend design.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/project"
              className="inline-flex items-center rounded-full px-8 py-3 bg-primary text-white font-semibold text-lg leading-6 hover:opacity-90 transition-colors"
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 hover:text-primary transition-colors">
              Learn more about me <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* About Section */}
          <section id="about" className="mb-24 scroll-mt-16 md:mb-36 lg:mb-48 lg:scroll-mt-24 mt-24">
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I'm a developer passionate about crafting pixel-perfect user interfaces using{" "}
              <span className="text-primary font-medium">React</span> and{" "}
              <span className="text-primary font-medium">Next.js</span>. My journey began in{" "}
              <span className="text-primary font-medium">Figma</span>, where I learned the importance of thoughtful UX
              before diving into the world of code.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Currently, I focus on building scalable web applications with{" "}
              <span className="text-primary font-medium">PostgreSQL</span> and{" "}
              <span className="text-primary font-medium">Firebase</span>, ensuring that every project is not only
              visually stunning but also robust and efficient.
            </p>
          </section>

          {/* Experience/Stack Section */}
          <section id="experience" className="mb-24 scroll-mt-16 md:mb-36 lg:mb-48 lg:scroll-mt-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary lg:hidden mb-8">Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card/30 border border-white/5">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Frontend
                </h4>
                <p className="text-xs text-muted-foreground">Next.js, React, Tailwind CSS, Javascript</p>
              </div>
              <div className="p-4 rounded-xl bg-card/30 border border-white/5">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Backend
                </h4>
                <p className="text-xs text-muted-foreground">Firebase, PostgreSQL, Node.js</p>
              </div>
              <div className="p-4 rounded-xl bg-card/30 border border-white/5">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Design
                </h4>
                <p className="text-xs text-muted-foreground">Figma, UI/UX, Prototypes</p>
              </div>
              <div className="p-4 rounded-xl bg-card/30 border border-white/5">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Tools
                </h4>
                <p className="text-xs text-muted-foreground">Git, GitHub, Vercel</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary lg:hidden mb-8">Projects</h3>
            <GithubProjects />

            <div className="mt-12">
              <a
                href="https://github.com/buyinzadiana-bot"
                target="_blank"
                className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-all group"
                rel="noreferrer"
              >
                View Full Archive
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </section>

          <footer className="mt-24 text-sm text-muted-foreground max-w-md">
            <p>
              Loosely designed in Figma and coded in VS Code by Diana. Built with Next.js and Tailwind CSS, deployed
              with Vercel.
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}
