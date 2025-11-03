export function About() {
  return (
    <section id="about" className=" px-4 md:px-8 py-32 md:py-48 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-4 md:space-y-6 md:sticky md:top-28 self-start">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Research. Tools. Open Knowledge.</h3>
            <p className="text-base md:text-lg leading-tight tracking-tight font-mono text-black/80">
              We study Byzantine Fault Tolerant consensus, build analyzers and simulators, and share practical insights
              for resilient distributed systems.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="border-2 border-black p-6 md:p-8">
              <h4 className="pixel-font text-[10px] md:text-xs mb-3">RESEARCH</h4>
              <p className="text-sm md:text-base font-mono tracking-tight ">
                Deep dive into BFT protocols, safety/liveness trade-offs, and performance modeling under real-world
                network conditions.
              </p>
            </div>

            <div className="border-2 border-black p-6 md:p-8">
              <h4 className="pixel-font text-[10px] md:text-xs mb-3">DEVELOPMENT</h4>
              <p className="text-sm md:text-base font-mono tracking-tight ">
                Open-source tools for log ETL, event visualization, and scenario testing to understand consensus
                behavior.
              </p>
            </div>

            <div className="border-2 border-black p-6 md:p-8">
              <h4 className="pixel-font text-[10px] md:text-xs mb-3">INNOVATION</h4>
              <p className="text-sm md:text-base font-mono tracking-tight ">
                Experimentation-driven ideas to push reliability and observability in decentralized networks.
              </p>
            </div>

            <div className="border-2 border-black p-6 md:p-8">
              <h4 className="pixel-font text-[10px] md:text-xs mb-3">COMMUNITY</h4>
              <p className="text-sm md:text-base font-mono tracking-tight ">
                Transparent research, reproducible results, and approachable write-ups for the broader ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
