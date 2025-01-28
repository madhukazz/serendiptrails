'use client';
import Image, { StaticImageData } from "next/image";
import GalleryImage1 from "@/public/assets/images/destination.png";
import GalleryImage2 from "@/public/assets/images/subscribe.webp";
import GalleryImage3 from "@/public/assets/images/tourpackage.jpg";
import GalleryImage4 from "@/public/assets/images/destination.png";
import GalleryImage5 from "@/public/assets/images/subscribe.webp";
import GalleryImage6 from "@/public/assets/images/tourpackage.jpg";
import Masonry from 'react-masonry-css';
import { useState } from 'react';

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

const GalleryComponent = () => {

    const [selectedImage, setSelectedImage] = useState<null | StaticImageData>(null);

    const openModal = (image: StaticImageData) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

  return (
    <>
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
                    onClick={() => openModal(image)}
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
    {selectedImage && (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeModal}
        >
            <div className="relative w-[90%] h-[90%]">
                <button
                    className="absolute -top-10 -right-10 text-white text-4xl z-50"
                    onClick={closeModal}
                >
                    &times;
                </button>
                <Image
                    className="w-full h-full rounded-lg object-cover"
                    src={selectedImage}
                    alt="Popup Image"
                />
            </div>
        </div>
    )}
    </>
  )
}

export default GalleryComponent