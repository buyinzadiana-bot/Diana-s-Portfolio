export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-12 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-6 text-glow">About Me</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I am a developer passionate about crafting pixel-perfect user interfaces using{" "}
            <span className="text-primary font-medium">React</span> and{" "}
            <span className="text-primary font-medium">Next.js</span>. My journey began in{" "}
            <span className="text-primary font-medium">Figma</span>, where I learned the importance of thoughtful UX
            before diving into the world of code.
          </p>
          <p>
            Currently, I focus on building scalable web applications with{" "}
            <span className="text-primary font-medium">PostgreSQL</span> and{" "}
            <span className="text-primary font-medium">Firebase</span>, ensuring that every project is not only visually
            stunning but also robust and efficient.
          </p>
          <p>
            When I&#39;m not coding, I&#39;m exploring new design trends, contributing to open-source projects, or refining my
            workflow to deliver better results faster.
          </p>
        </div>
      </section>
    </div>
  )
}
