import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: Props) => {
    const sourceUrl = "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-";

    // Generate image URLs starting from index 1
    const imageUrls = Array.from({ length: 11 }, (_, i) => `${sourceUrl}${i + 1}.jpg`);

    return (
        <section id="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {/* Display the first image */}
            <img className="h-auto max-w-full rounded-lg" src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg`} alt="" />
            {/* Display the remaining images */}
            {imageUrls.map((url, index) => (
                <div key={index}>
                    <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
                </div>
            ))}
        </div>
        </section>
    );
};

export default Gallery;
