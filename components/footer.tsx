import { Github, Mail, BookOpen, ArrowUp, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-2 border-black py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 items-start">
          <div className="space-y-4">
            <div className="pixel-font text-[10px] md:text-xs">BFT LABS</div>
            <p className="text-sm leading-relaxed text-black/70">
              Researching Byzantine Fault Tolerant systems and building open tools for better consensus visibility.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/bft-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 hover:bg-black hover:text-[#DAD9D6] transition-colors pixel-font text-[10px]"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 hover:bg-black hover:text-[#DAD9D6] transition-colors pixel-font text-[10px]"
              >
                <BookOpen className="w-4 h-4" />
                DOCS
              </a>
            </div>
          </div>

          <div>
            <div className="pixel-font text-[10px] md:text-xs mb-4">NAVIGATION</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
              </li>
              <li>
                <a href="#team" className="hover:opacity-60 transition-opacity">Team</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="pixel-font text-[10px] md:text-xs mb-4">CONNECT</div>
            <div className="flex gap-3">
              <a
                href="https://github.com/bft-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="border-2 border-black p-3 hover:bg-black hover:text-[#DAD9D6] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/bftlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="border-2 border-black p-3 hover:bg-black hover:text-[#DAD9D6] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@bftlabs.org"
                aria-label="Email"
                className="border-2 border-black p-3 hover:bg-black hover:text-[#DAD9D6] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="pixel-font text-[10px]">© 2025 BFT Labs</div>
          <a href="#home" className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity">
            <ArrowUp className="w-4 h-4" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
