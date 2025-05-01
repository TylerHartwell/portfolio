import { FaArrowRight, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function SocialLinks() {
  return (
    <ul className="flex flex-col items-center gap-6  text-nowrap">
      <li>
        <a
          href="https://github.com/TylerHartwell"
          target="_blank"
          className="underline flex gap-2 items-center hover:translate-y-[1px] transition-all group"
        >
          <FaGithub color="white" title="github icon" size={30} className="group-hover:scale-120 transition-all" />
          github.com/TylerHartwell
        </a>
      </li>
      <li>
        <a
          href="mailto:thartwell37@gmail.com"
          target="_blank"
          className="underline flex gap-2 items-center hover:translate-y-[1px] transition-all group"
        >
          <MdEmail color="white" title="email icon" size={30} className="group-hover:scale-120 transition-all" />
          tharwell37@gmail.com
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tyler-hartwell/"
          target="_blank"
          className="underline flex gap-2 items-center hover:translate-y-[1px] transition-all group"
        >
          <FaLinkedin color="white" title="linkedin icon" size={30} className="group-hover:scale-120 transition-all" />
          linkedin.com/in/tyler-hartwell
        </a>
      </li>
      <li className="mt-3">
        <a
          href="/pdfs/Tyler_Hartwell_Software_Engineer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center hover:translate-y-[1px] transition-all group"
        >
          Check out my Resume
          <FaArrowRight />
          <FaFilePdf color="white" title="pdf icon" size={30} className="group-hover:scale-120 transition-all" />
        </a>
      </li>
    </ul>
  )
}
