import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Skills from './sections/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SystemFlow from './components/SystemFlow'

function App() {
  return (
    <div className="min-h-screen bg-(var(--color-bg)) text-(var(--color-text))">
      <Navbar />

      <main>
        <section
          id="home"
          className="border-b border-white/10 px-6"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-16 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-(var(--color-accent))" />

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-(var(--color-accent))">
                  System Online
                </p>
              </div>

              <h1 className="font-display mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Software
                <br />
                <span className="text-(var(--color-muted))">
                  → Systems → Cloud
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-(var(--color-muted))">
                I build software and learn the systems that take it to the cloud.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-lg bg-(var(--color-accent)) px-5 py-3 text-sm font-semibold text-(var(--color-bg)) transition-transform hover:-translate-y-0.5"
                >
                  View Projects
                </a>

                <a
                  href="https://github.com/milesmorales-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-(var(--color-text)) transition-colors hover:border-white/25"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <SystemFlow />
          </div>
        </section>

        <About />

        <Projects />

        <Skills />

        <Contact />

        <Footer />
      </main>
    </div>
  )
}


export default App