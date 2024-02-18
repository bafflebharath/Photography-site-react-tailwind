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
    const [gridCondition, setGridCondition] = useState(false);
    var categories: SelectedCategory[] = [];

    useEffect(() => {
        // Check if it's a mobile view
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 750); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once initially to set the initial state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Set grid condition based on the number of images
        setGridCondition(galleryImages.length <= 2);
    }, [galleryImages]);

    if (galleryImages.length > 2) {
        categories = [
            SelectedCategory.Wedding,
            SelectedCategory.Bride,
            SelectedCategory.Groom,
            SelectedCategory.OutdoorPhotoshoot,
            SelectedCategory.Events,
            SelectedCategory.BabyPhotoshoot
        ];
    } else {
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
        <div className="flex justify-center items-center h-screen">
            <motion.div
                variants={childVariant}
                className="flex justify-center items-center"
            >
                <div className={
                    gridCondition
                        ? (
                            isMobileView
                                ? "grid grid-cols-1 md:grid-cols-1 gap-5 md:px-0"
                                : "grid grid-cols-2 md:grid-cols-2 gap-5 md:px-0"
                        )
                        : (isMobileView
                            ? "grid grid-cols-2 md:grid-cols-2 gap-5 md:px-0" :
                            "grid grid-cols-3 md:grid-cols-3 gap-5 md:px-32")
                }>
                    {galleryImages.map((url, index) => (
                        <motion.div
                            key={index}
                            className="relative cursor-pointer overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleImageClick(categories[index])}
                        >
                            <img src={url} alt="" />
                            <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30">{categories[index]}</span>
                        </motion.div>
                    ))}
                </div>
                {selectedCategory && <MasonryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />}
            </motion.div>
        </div>
    );
};

export default GalleryOne;
