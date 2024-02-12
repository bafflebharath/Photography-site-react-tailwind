import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

// Import images from assets
import img1 from '@/assets/wedding/img1.jpg';
import img2 from '@/assets/wedding/img2.jpg';
import img3 from '@/assets/wedding/img3.jpg';
import img4 from '@/assets/wedding/img4.jpg';
import img5 from '@/assets/wedding/img5.jpg';
import img6 from '@/assets/wedding/img6.jpg';
import img7 from '@/assets/wedding/img7.jpg';
import img8 from '@/assets/wedding/img8.jpg';
import img9 from '@/assets/wedding/img9.jpg';
import img10 from '@/assets/wedding/img10.jpg';
import img11 from '@/assets/wedding/img11.jpg';
import img12 from '@/assets/wedding/img12.jpg';
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function First({ setSelectedPage }: Props) {
  // Array to store imported images
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]; // Add more images as needed

  // State to manage modal visibility, selected image, and index
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to toggle modal and set selected image
  const toggleModal = (image: string) => {
    setSelectedImage(image);
    setShowModal(!showModal);
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

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
    return images.slice(startIndex, startIndex + 3).map((image, index) => (
      <div key={startIndex + index}>
        <img
          className="h-auto max-w-full rounded-lg cursor-pointer"
          src={image}
          alt=""
          onClick={() => toggleModal(image)}
        />
      </div>
    ));
  };

  return (
    <section id="first" className="mx-auto w-6/6 pt-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.First)}
      ></motion.div>
      <div className='max-w-[1600px] h-[710px] w-full m-auto px-1 relative group overflow-y-auto'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[0, 3, 6, 9].map((startIndex: number, columnIndex) => (
            <div key={columnIndex} className="grid gap-1">
              {generateImageElements(startIndex)}
            </div>
          ))}
          {/* Modal */}
          {showModal && (
            <div id="modal" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="max-h-full overflow-hidden">
                <img src={selectedImage} alt="" className="w-full max-h-full object-contain" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 mt-4 ml-4 py-2 px-4 bg-gray-800 text-white rounded-lg"
                  onClick={prevImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mt-4 mr-4 py-2 px-4 bg-gray-800 text-white rounded-lg"
                  onClick={nextImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
                <button
                  className="absolute right-0 top-1/4 transform -translate-y-1/2 mr-4 py-2 px-4 bg-gray-800 text-white rounded-lg"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}

export default First;
