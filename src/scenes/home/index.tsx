import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { loadImageUrls } from "../galleryConfig/imageLoader";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const [slides, setSlides] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        const touchDistance = event.touches[0].clientX - touchStartX;
        if (touchDistance > 50) {
            nextSlide();
            setTouchStartX(event.touches[0].clientX);
        } else if (touchDistance < -50) {
            prevSlide();
            setTouchStartX(event.touches[0].clientX);
        }
    };

    // const goToSlide = (slideIndex: number) => {
    //     setCurrentIndex(slideIndex);
    // };

    useEffect(() => {
        const fetchImageUrls = async () => {
            const urls = await loadImageUrls("slides");
            setSlides(urls);
        };
        fetchImageUrls();
    }, []);

    return (
        <section id="home">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            ></motion.div>
            <div
                className='w-full h-screen pt-14'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {slides.length > 0 && (
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                        className='w-full h-full rounded-1xl bg-center bg-cover duration-500 transition-opacity'
                    ></motion.div>
                )}
                {/* Left Arrow */}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                {/* <div className='flex top-4 justify-center py-2'>
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-white' : 'text-gray-700'}`}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default Home;
