import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-700">
        <div className="flex flex-col-reverse md:flex-row flex-1">
          <section className="p-8 bg-slate-100 flex-1 flex flex-col gap-8">
            <div>
              <h2>Post title</h2>
              <div>
                <span>Date</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?
              </p>
            </div>
            <div>
              <h2>Post title</h2>
              <div>
                <span>Date</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?
              </p>
            </div>
            <div>
              <h2>Post title</h2>
              <div>
                <span>Date</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?
              </p>
            </div>
            <div>
              <h2>Post title</h2>
              <div>
                <span>Date</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?
              </p>
            </div>
          </section>
          <aside className="b1 bg-amber-300 w-full md:w-[200px] h-24 md:h-auto"></aside>
        </div>
      </main>

      <Footer />
    </>
  )
}
