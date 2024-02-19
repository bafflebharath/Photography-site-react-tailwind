// Gallery.tsx
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalleryOne from "../galleryConfig/GalleryOne";
import { loadImageUrls } from "../galleryConfig/imageLoader";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Timeline = ({ setSelectedPage }: Props) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        const fetchImageUrls = async () => {
            const urls = await loadImageUrls("timeline");
            setImageUrls(urls);
        };
        fetchImageUrls();
    }, [imageUrls]);

    return (
        <section id="timeline">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Timeline)}
            >
                <div className="w-full h-screen pt-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <GalleryOne
                            galleryImages={imageUrls}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Timeline;
