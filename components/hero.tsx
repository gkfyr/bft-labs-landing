import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="px-4 md:px-8 py-28 md:py-40 border-b-2 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl ">
          <div className="pixel-font text-[10px] md:text-xs">
            <Image
              src="/logo.jpg"
              alt="BFT Labs"
              width={180}
              height={182}
              style={{ imageRendering: "pixelated" }}
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Byzantine Fault Tolerant Systems Lab
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Exploring the frontiers of Byzantine Fault Tolerant consensus and distributed systems.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-black/70 mb-8">
            We build tools and conduct research to advance the understanding of consensus protocols and blockchain
            technology.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-block border-2 border-black px-6 py-3 hover:bg-black hover:text-[#DAD9D6] transition-colors pixel-font text-[10px]"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#about"
              className="inline-block border-2 border-black px-6 py-3 hover:bg-black hover:text-[#DAD9D6] transition-colors pixel-font text-[10px]"
            >
              ABOUT US
            </a>
          </div>

          <div className="mt-10"></div>
        </div>
      </div>
    </section>
  );
}
