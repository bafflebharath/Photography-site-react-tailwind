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
    var gridCondition = false;
    var categories: SelectedCategory[] = [];

    if(galleryImages.length>2){
        gridCondition = true;
        categories = [
            SelectedCategory.Wedding,
            SelectedCategory.Bride,
            SelectedCategory.Groom,
            SelectedCategory.BabyPhotoshoot,
            SelectedCategory.Puberty,
            SelectedCategory.OutdoorPhotoshoot
        ];
    }else{
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
            className="mt-8 rounded-md text-center"
        >
            <div className='max-w-[900px] w-full m-auto relative group flex justify-center'>
            <div className={gridCondition ? "grid grid-cols-2 md:grid-cols-3 gap-1 md:px-0" : "grid grid-cols-2 md:grid-cols-2 gap-1 md:px-0"}>
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
