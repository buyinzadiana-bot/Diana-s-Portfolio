const skills = [
  { category: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Javascript", "HTML", "CSS"] },
  { category: "Backend", items: ["Firebase", "PostgreSQL", "Node.js", "Express"] },
  { category: "Design", items: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"] },
  { category: "Tools", items: ["Git", "GitHub", "Vercel", "npm/pnpm"] },
]

export default function SkillsPage() {
  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-glow">Technical Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="p-6 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/20 transition-colors group"
          >
            <h2 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {skill.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm hover:bg-primary/10 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
