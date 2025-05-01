export default function TechMarquee() {
  const techStack = ["React", "Next.js", "Tailwind CSS", "TypeScript", "MongoDB", "Vercel"]

  return (
    <div className="absolute bottom-0 max-w-full w-max flex overflow-x-hidden [mask-image:linear-gradient(to_right,_transparent,_black_15%,_black_85%,_transparent_100%)]">
      <div className="animate-marquee whitespace-nowrap">
        {techStack.map((tech, index) => (
          <span key={index} className="mx-2">
            {tech}
          </span>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        {techStack.map((tech, index) => (
          <span key={index} className="mx-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
