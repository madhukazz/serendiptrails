import BlogCard from "../shared/BlogCard"

const Blog = () => {
  return (
    <section className="bg-background pb-16">
        <div className="w">
            <div className="flex flex-col items-center text-center gap-3">
                <span className="cursive">Blog & News</span>
                <h2 className="font-bold text-2xl text-secondary">Latest News</h2>
                <p>Stay updated with the latest travel news and insights from Sri Lanka. Discover hidden gems, travel tips, and more from Serendip Trails.</p>
            </div>
            <div className="py-10 grid grid-cols-3 gap-5">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    </section>
  )
}

export default Blog