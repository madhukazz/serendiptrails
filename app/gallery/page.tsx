'use client';
import Image from "next/image"
import GalleryImage1 from "@/public/assets/images/destination.png";
import GalleryImage2 from "@/public/assets/images/subscribe.webp";
import GalleryImage3 from "@/public/assets/images/tourpackage.jpg";
import GalleryImage4 from "@/public/assets/images/destination.png";
import GalleryImage5 from "@/public/assets/images/subscribe.webp";
import GalleryImage6 from "@/public/assets/images/tourpackage.jpg";
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

const page = () => {
  return (
    <section className="bg-background pt-40 pb-20">
        <div className="w">
            <div className="flex flex-col items-center text-center gap-3">
                <span className="cursive">The Unforgettable</span>
                <h1 className="font-bold text-4xl text-secondary">Welcome to Our Tour Gallery!</h1>
                <p>Explore a visual journey through the stunning destinations, unforgettable adventures, and unique experiences we offer. Our gallery captures the essence of each tour, highlighting the beauty, culture, and excitement that await you.</p>
            </div>
            <div className="py-16">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid flex gap-x-5"
                    columnClassName="my-masonry-grid_column"
                >
                    {[GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4, GalleryImage5, GalleryImage6].map((image, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden cursor-pointer group mb-5 ${
                                (index + 1) % 3 === 2 ? 'h-[450px]' : 'h-[300px]'
                            }`}
                        >
                            <div className="opacity-0 group-hover:opacity-[1] bg-[#7dc7cf5a] w-full h-full flex justify-center items-center absolute transition-all duration-300 ease-in-out">
                                <i className="ri-eye-line text-white font-medium text-4xl"></i>
                            </div>
                            <Image
                                className="w-full h-full object-cover rounded-xl"
                                src={image}
                                alt={`GalleryImage${index + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    </section>
  )
}

export default page