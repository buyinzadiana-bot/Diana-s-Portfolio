import { Mail, Linkedin, Github, MessageSquare } from "lucide-react"
import { Button } from "./../components/ui/button"

export default function ContactPage() {
  return (
    <div className="max-w-2xl py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold tracking-tight mb-6 text-glow">Get In Touch</h1>
      <p className="text-muted-foreground mb-12 leading-relaxed">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <a
          href="mailto:hello@example.com"
          className="flex items-center p-6 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/20 transition-all group"
        >
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
            <Mail className="text-primary h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-muted-foreground">hello@example.com</div>
          </div>
        </a>

        <div className="flex gap-4">
          <a
            href="#"
            className="flex-1 flex items-center p-4 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/20 transition-all group"
          >
            <Linkedin className="text-primary h-5 w-5 mr-3" />
            <span className="font-medium text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/buyinzadiana-bot"
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center p-4 rounded-2xl bg-card/30 border border-white/5 hover:border-primary/20 transition-all group"
          >
            <Github className="text-primary h-5 w-5 mr-3" />
            <span className="font-medium text-sm">GitHub</span>
          </a>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
        <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Have a specific project in mind?</h3>
        <p className="text-sm text-muted-foreground mb-6">Let&#39;s build something amazing together.</p>
        <Button className="rounded-full px-8">Send a message</Button>
      </div>
    </div>
  )
}
