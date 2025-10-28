import { ExternalLink } from "lucide-react";

const repositories = [
  {
    name: "cometbft-log-etl",
    description:
      "CometBFT log ETL that parses node logs, normalizes and enriches events, and loads them into a database for analytics.",
    url: "https://github.com/bft-labs/cometbft-log-etl",
  },
  {
    name: "cometbft-analyzer-types",
    description: "Shared type definitions and data schemas for the CometBFT Analyzer.",
    url: "https://github.com/bft-labs/cometbft-analyzer-types",
  },
  {
    name: "cometbft-analyzer-frontend",
    description:
      "Web UI for CometBFT Analyzer — visualize consensus events, latency, and network health powered by the backend/log ETL",
    url: "https://github.com/bft-labs/cometbft-analyzer-frontend",
  },
  {
    name: "cometbft-analyzer-backend",
    description:
      "Exposes normalized consensus events and metrics via a MongoDB-backed REST API with per-simulation databases,",
    url: "https://github.com/bft-labs/cometbft-analyzer-backend",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-4 md:px-8 py-24 md:py-32 border-t-2 border-black scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="pixel-font text-xs md:text-sm mb-16 text-center">COMETBFT ANALYZER</h2>

        <div className="space-y-12">
          {repositories.map((repo) => (
            <div key={repo.name} className="border-2 border-black p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="pixel-font text-[10px] md:text-xs flex-1 break-all">{repo.name}</h3>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 hover:opacity-60 transition-opacity"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm leading-relaxed">{repo.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/bft-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-black px-6 py-3 hover:bg-black hover:text-[#DAD9D6] transition-colors pixel-font text-[10px]"
          >
            VIEW ALL REPOS
          </a>
        </div>
      </div>
    </section>
  );
}
