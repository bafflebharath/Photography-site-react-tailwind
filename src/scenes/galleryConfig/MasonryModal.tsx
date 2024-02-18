import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { loadImageUrls } from "./imageLoader";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    category: string;
    onClose: () => void; // Function to close the modal
};


const MasonryModal = ({ category, onClose }: Props) => {
    const [tempImgSrc, setTempImgSrc] = useState<{ id: number; imgSrc: string }[]>([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImageUrls = async () => {
            const urls = await loadImageUrls(category);
            setTempImgSrc(urls.map((url, index) => ({ id: index, imgSrc: url })));
        };
        fetchImageUrls();
    }, [category]);

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [showModal]);

    useEffect(() => {
        // Hide navbar when modal is open
        const navbar = document.querySelector('nav');
        if (navbar) {
            navbar.classList.add('hidden');
        }
        // Show navbar when modal is closed
        return () => {
            if (navbar) {
                navbar.classList.remove('hidden');
            }
        };
    }, []);

    //Event listeners for modal close by key press
    useEffect(() => {
        // Event listener for pressing the escape key
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        // Event listener for clicking outside the modal
        const handleClickOutside = (event: MouseEvent) => {
            const modal = document.getElementById('modal');
            if (modal && !modal.contains(event.target as Node)) {
                closeModal();
            }
        };

        // Add event listeners when the modal is shown
        if (showModal) {
            document.addEventListener('keydown', handleEscKey);
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Remove event listeners when the modal is hidden
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    // Function to generate image elements
    const generateImageElements = (startIndex: number) => {
        return tempImgSrc.slice(startIndex, startIndex + 3).map((image, index) => (
            <div key={startIndex + index}>
                <img
                    className="h-auto max-w-full rounded-lg cursor-pointer"
                    src={image.imgSrc}
                    alt=""
                    onClick={() => toggleModal(image.imgSrc)}
                />
            </div>
        ));
    };

    // Function to toggle modal and set selected image
    const toggleModal = (image: string) => {
        setSelectedImage(image);
        setShowModal(!showModal);
    };

    // Function to navigate to the previous image
    const prevImage = () => {
        const newIndex = (currentIndex - 1 + tempImgSrc.length) % tempImgSrc.length;
        setCurrentIndex(newIndex);
        setSelectedImage(tempImgSrc[newIndex].imgSrc); // Update here
    };

    // Function to navigate to the next image
    const nextImage = () => {
        const newIndex = (currentIndex + 1) % tempImgSrc.length;
        setCurrentIndex(newIndex);
        setSelectedImage(tempImgSrc[newIndex].imgSrc); // Update here
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setShowModal(false);
    };

    //Swipe Gestures
    const [touchStartX, setTouchStartX] = useState(0);

    const handleTouchStart = (event: React.TouchEvent) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        const touchDistance = event.touches[0].clientX - touchStartX;
        if (touchDistance > 100) {
            prevImage();
            setTouchStartX(event.touches[0].clientX);
        } else if (touchDistance < -100) {
            nextImage();
            setTouchStartX(event.touches[0].clientX);
        }
    };

    return (
        <motion.div
            variants={childVariant}
            initial="hidden"
            animate="visible"
        >
            <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-100 flex items-center justify-center" onClick={onClose}>
                <div className="max-w-[90%] max-h-[90%] overflow-auto rounded-lg p-8 custom-scrollbar" onClick={(e) => e.stopPropagation()}>
                    <button className="absolute top-4 right-6 text-white" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:px-0 ">
                        {[0, 3, 6, 9].map((startIndex: number, columnIndex) => (
                            <div key={columnIndex} className="grid gap-1">
                                {generateImageElements(startIndex)}
                            </div>
                        ))}
                        {showModal && (
                            <div id="modal" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={closeModal}>
                                <div className="max-h-full overflow-hidden" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onClick={(e) => e.stopPropagation()}>
                                    <img src={selectedImage} alt="" className="w-full max-h-full object-contain" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                                    <button
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 mt-4 ml-4 py-2 px-4 text-white"
                                        onClick={prevImage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 mt-4 mr-4 py-2 px-4 text-white"
                                        onClick={nextImage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <button
                                        className="absolute right-0 top-4 transform -translate-y-1/2 mt-4 mr-6 py-2 text-white"
                                        onClick={closeModal}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MasonryModal;
