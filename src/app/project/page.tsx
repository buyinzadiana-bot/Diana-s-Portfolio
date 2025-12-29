import { GithubProjects } from "../components/github-projects"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-glow">Selected Projects</h1>
          <p className="text-muted-foreground mt-2">A collection of my recent work and open-source contributions.</p>
        </div>
        <a
          href="https://github.com/buyinzadiana-bot"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View GitHub Archive <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <GithubProjects />
    </div>
  )
}
