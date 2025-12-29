"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Star, GitFork, BookText } from "lucide-react"

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

export function GithubProjects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/buyinzadiana-bot/repos?sort=updated&per_page=6")
        const data = await res.json()
        if (Array.isArray(data)) {
          setRepos(data)
        }
      } catch (error) {
        console.error("[v0] Error fetching GitHub repos:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 rounded-xl bg-muted/20 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col p-6 rounded-2xl bg-card/50 border border-white/5 transition-all duration-300 hover:bg-muted/30 hover:translate-x-1"
        >
          <div className="flex items-start justify-between mb-4">
            <BookText className="w-6 h-6 text-primary" />
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {repo.name.replace(/-/g, " ")}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow">
            {repo.description || "No description provided."}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-3 h-3" />
              {repo.forks_count}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
