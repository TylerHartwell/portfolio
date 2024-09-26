import BlogPost from "@/components/BlogPost"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"
import Image from "next/image"

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col bg-zinc-700">
        <div className="flex flex-col-reverse md:flex-row flex-1 bg-slate-100">
          <section className="p-8  flex-1 flex flex-col gap-8">
            <BlogPost
              title="Blog In Progress"
              date="2099-12-31"
              content="This blog page is currently in progress. These blog posts are filler as I develop the style, organization, and functionality I want. I will likely have the option to put a number of tags on and choose one of a few categories for each post. If a category is selected in the sidebar, filter by category. Search results will prioritize matching titles, tags, then content. Option to sort by date and reverse."
            />
            <BlogPost
              title="Post Title"
              date="2024-09-26"
              content="On my blog page I was having trouble scaling the scroll-to-top svg icon and its surrounding button on hover without it becoming blurry. I found one technique that involved scaling down the default size and then normalizing it on hover but it did not work for me. My alternative to transform scaling was to change the width and height with the size property instead, which solved the blurriness issue but caused the icon to grow up and left instead of from its center since it is fixed and anchored near the bottom and right of the screen. So I wrapped the button in a div, fixed the position of the div to the bottom right instead of the button, and then centered the button in the div so that changes to its size would let it grow from the center. But then I realized I didn't need the extra wrapper div and could just translate the button by half of its width and height in order for everything to work. I was able to solve my problem quickly with an overcomplicated workaround and then simplify it soon after."
            />
            <BlogPost
              title="Post Title"
              date="yesterday"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?"
            />
            <BlogPost
              title="Post Title"
              date="yesterday"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?"
            />
            <BlogPost
              title="Post Title"
              date="yesterday"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?"
            />
            <BlogPost
              title="Post Title"
              date="yesterday"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?"
            />
            <BlogPost
              title="Post Title"
              date="yesterday"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim ipsa ut quibusdam ab deserunt repellendus omnis nesciunt
                laboriosam animi adipisci quis maxime, inventore quia dolore delectus aliquid voluptatibus libero?"
            />
          </section>
          <aside className="relative bg-neutral-200 w-full md:w-[200px] h-24 md:h-auto">
            <Image
              src="/images/forest.jpg"
              alt="Forest background"
              className="object-cover"
              fill={true}
              priority
              sizes="(max-width: 768px) 300px, 1000px"
            />
            <div className="relative z-10 w-full h-full flex md:flex-col justify-center md:justify-start items-center py-4 bg-transparent gap-6">
              <div className="flex flex-col md:flex-row w-min p-1 place-items-center gap-1 bg-opacity-20">
                <input name="search" type="text" size={8} className="h-min px-1" />
                <button className="bg-amber-300 rounded-full px-2 font-bold hover:bg-amber-400 border-[1px] border-black border-opacity-30">
                  Search
                </button>
              </div>
              <div className="bg-white md:flex flex-col place-items-center p-3 hidden max-w-[90%] bg-opacity-80 rounded-lg">
                <span>Recent</span>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-black flex-shrink-0 transform rotate-45" />
                    <a href="/blog" className="underline text-sm font-bold">
                      Sample Blog Post
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 mr-2 bg-black flex-shrink-0 transform rotate-45" />
                    <a href="/blog" className="underline text-sm font-bold">
                      Lessons from Sudoku Project
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white md:flex flex-col place-items-center p-3 hidden max-w-[90%] bg-opacity-80 rounded-lg">
                <span>Categories</span>
                <ul className="flex flex-col gap-2 text-center place-items-center">
                  <li className="flex items-center">
                    <a href="/blog" className="underline text-sm font-bold">
                      Project Detail
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a href="/blog" className="underline text-sm font-bold">
                      Tooling
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a href="/blog" className="underline text-sm font-bold">
                      Reflections
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a href="/blog" className="underline text-sm font-bold">
                      Misc.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}
