import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Projects() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-700">
        <section className="p-16 bg-slate-100 flex-1">
          <h2 className="text-center text-3xl pb-8">Projects</h2>
          <p>Project 1</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
