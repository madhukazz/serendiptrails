import GalleryComponent from "../components/gallery/GalleryComponent";

const Page = () => {
    return (
        <section className="bg-background pt-40 pb-20">
            <div className="w">
                <div className="flex flex-col items-center text-center gap-3">
                    <span className="cursive">The Unforgettable</span>
                    <h1 className="font-bold text-4xl text-secondary">Welcome to Our Tour Gallery!</h1>
                    <p>Explore a visual journey through the stunning destinations, unforgettable adventures, and unique experiences we offer. Our gallery captures the essence of each tour, highlighting the beauty, culture, and excitement that await you.</p>
                </div>
                <GalleryComponent />
            </div>
        </section>
    );
};

export default Page;