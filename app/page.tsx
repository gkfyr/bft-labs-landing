import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Footer />
    </main>
  )
}
