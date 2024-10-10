import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Project from "@/components/Project"

export default function Projects() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-700">
        <section className="px-2 py-8 md:px-16 bg-slate-100 flex-1">
          <h2 className="text-center text-3xl pb-4">Projects</h2>
          <div className="grid md:grid-cols-2 grid-rows-1 gap-x-4">
            <div className="row-span-2">
              <Project
                name="Put It On The List"
                url="https://putitonthelist.netlify.app/"
                src="https://tylerhartwell.com/wp-content/uploads/2024/05/putitonthelist_landscape.png"
                desc="Put It On The List A collaborative and anonymous list management application. How does it work? Users can keep a private list cloud-hosted in
                      a Firebase Realtime Database. Lists can be shared to make public and collaborative while maintaining anonymity of users who can leave or join
                      at will with a provided group ID."
                width={1092}
                height={757}
              />
            </div>

            <div></div>

            <div className="row-span-2">
              <Project
                name="Sudoku Ruler"
                url="https://sudoku.tylerhartwell.com/"
                src="/images/sudoku_project.png"
                desc="A sudoku solving assistant that lets you selectively skip manually resolving the easy and tedious patterns and focus only on the tougher ones you want to."
                width={894}
                height={614}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
