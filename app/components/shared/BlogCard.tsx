import Image from "next/image"
import Link from "next/link"
import BlogImage from "@/public/assets/images/blog.jpg"

const BlogCard = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden group">
        <Link className="inline-block h-[300px] overflow-hidden relative" href={`/`}>
            <Image className="group-hover:scale-110 h-full w-full object-cover transition-all duration-700" src={BlogImage} alt="Blog" />
            <span className="bg-primary rounded-md p-2 text-white font-raleway font-semibold text-sm flex items-center gap-2 absolute z-[1] left-5 bottom-5"><i className="ri-calendar-2-line"></i>December 14, 2024</span>
        </Link>
        <div className="p-5 bg-white">
            <div className="flex items-center gap-2 mb-3">
                <i className="ri-user-fill text-primary"></i>
                <span className="font-jost text-paragraph font-medium">Madhuka Dilshan</span>
            </div>
            <Link className="hover:text-primary transition-all duration-700 font-raleway text-lg font-semibold text-secondary" href={`/`}><h4>Discover the Wonders of Sri Lanka with Serendip Trails</h4></Link>
        </div>
    </div>
  )
}

export default BlogCard