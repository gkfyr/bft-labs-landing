import Link from "next/link";

const teamMembers = [
  {
    username: "zsystm",
    github: "https://github.com/zsystm",
  },
  {
    username: "gkfyr",
    github: "https://github.com/gkfyr",
  },
  {
    username: "djm07073",
    github: "https://github.com/djm07073",
  },
  {
    username: "bonomoon",
    github: "https://github.com/bonomoon",
  },
];

export function Team() {
  return (
    <section id="team" className="px-4 md:px-8 py-28 md:py-36 border-t-2 border-black scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="pixel-font text-xs md:text-sm mb-16 text-center">TEAM</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.username}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-2 border-black p-6 md:p-8 hover:bg-black hover:text-[#DAD9D6] transition-colors text-center"
            >
              <div className="mx-auto mb-4 w-16 h-16 md:w-20 md:h-20 border-2 border-black bg-white overflow-hidden">
                <img
                  src={`https://github.com/${member.username}.png?size=200`}
                  alt={`@${member.username}`}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
              <div className="pixel-font text-[10px] md:text-xs">@{member.username}</div>
              <div className="text-[10px] opacity-70 group-hover:opacity-100">GitHub</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
