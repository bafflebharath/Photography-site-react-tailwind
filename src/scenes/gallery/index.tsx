import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

// Import images from assets
import img1 from '@/assets/gallery/img1.jpg';
import img2 from '@/assets/gallery/img2.jpg';
import img3 from '@/assets/gallery/img3.jpg';
import img4 from '@/assets/gallery/img4.jpg';
import img5 from '@/assets/gallery/img5.jpg';
import img6 from '@/assets/gallery/img6.jpg';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: Props) => {
    const imageUrls = [img1, img2, img3, img4, img5, img6];
    const categories = ['Wedding', 'Bride', 'Groom', 'Baby Photoshoot', 'Puberty', 'Outdoor Photoshoot'];

    return (
        <section id="gallery">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}
            ></motion.div>
            <div className='max-w-[1600px] w-full m-auto py-16 px-1 relative group'>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4 md:px-0">
                    {imageUrls.map((url, index) => (
                        <div key={index} className="relative">
                            <img className="h-auto max-w-full" src={url} alt="" />
                            <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">{categories[index]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
