import { useState, useEffect } from 'react';
import { SelectedCategory } from "@/shared/types";
import { motion } from "framer-motion";
import MasonryModal from './MasonryModal';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    galleryImages: string[];
};

const GalleryOne = ({ galleryImages }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isMobileView, setIsMobileView] = useState(false);
    var gridCondition = false;
    var categories: SelectedCategory[] = [];

    useEffect(() => {
        // Check if it's a mobile view
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once initially to set the initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (galleryImages.length > 2) {
        categories = [
            SelectedCategory.Wedding,
            SelectedCategory.Bride,
            SelectedCategory.Groom,
            SelectedCategory.BabyPhotoshoot,
            SelectedCategory.Puberty,
            SelectedCategory.OutdoorPhotoshoot
        ];
    } else {
        gridCondition = true;
        categories = [
            SelectedCategory.StreetPhotography,
            SelectedCategory.wildlifePhotography
        ];
    }

    const handleImageClick = (category: SelectedCategory) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedCategory]);

    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md text-center"
        >
            <div className='max-w-[900px] w-full m-auto relative group flex justify-center'>
                <div className={
                    gridCondition
                        ? (
                            isMobileView
                                ? "grid grid-cols-1 md:grid-cols-1 gap-1 md:px-0 justify-center"
                                : "grid grid-cols-2 md:grid-cols-2 gap-1 md:px-0 justify-center"
                        )
                        : (isMobileView
                            ? "grid grid-cols-2 md:grid-cols-2 gap-1 md:px-0 justify-center" :
                            "grid grid-cols-3 md:grid-cols-3 gap-1 md:px-0 justify-center")
                }>
                    {galleryImages.map((url, index) => (
                        <div key={index} className="relative cursor-pointer" onClick={() => handleImageClick(categories[index])}>
                            <img className="h-auto max-w-full" src={url} alt="" />
                            <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30">{categories[index]}</span>
                        </div>
                    ))}
                </div>
            </div>
            {selectedCategory && <MasonryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />}
        </motion.div>
    );
};

export default GalleryOne;
