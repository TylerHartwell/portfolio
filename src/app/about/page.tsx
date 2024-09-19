import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function About() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-700">
        <section className="p-16 bg-slate-100 flex-1">
          <h2 className="text-center text-3xl pb-8">About</h2>
          <p>
            I&apos;m Tyler Hartwell, a fullstack software developer. I earned my degree in mechanical engineering and decided to make the transition
            into the software engineering field where I find more freedom to exercise creative problem solving and make effective and enjoyable user
            experiences. This site is just a simple avenue to display some of the projects I&apos;ve worked on. It&apos;s currently being used as an
            explorative development sandbox and is likely to be in a perpetually unfinished or broken state as I continuously learn different
            technologies, platforms, and methodologies.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
