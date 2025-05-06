export default function TechMarquee() {
  const techStack = ["Git", "HTML", "CSS", "Javascript", "React", "Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "Vercel"]

  return (
    <div className="relative w-[400px] max-w-screen text-stone-300">
      <span className="absolute -top-full left-1/2 -translate-x-1/2">Technologies:</span>
      <div className="flex [mask-image:linear-gradient(to_right,_transparent,_black_15%,_black_85%,_transparent_100%)] overflow-hidden group">
        <div className="animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {techStack.map((tech, index) => (
            <span key={index} className="mx-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {techStack.map((tech, index) => (
            <span key={index} className="mx-2">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
