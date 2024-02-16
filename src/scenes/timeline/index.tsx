// Gallery.tsx
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GalleryOne from "../galleryConfig/GalleryOne";
import { loadImageUrls } from "../galleryConfig/imageLoader";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

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
    }, []);

    return (
        <section id="timeline" className="mx-auto w-5/6 py-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Timeline)}
            >
                <motion.div
                    className="md:my-1 md:w-5/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                </motion.div>
                <motion.div
                    className="mt-3 items-center justify-center gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <GalleryOne
                            galleryImages={imageUrls}
                        />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Timeline;
