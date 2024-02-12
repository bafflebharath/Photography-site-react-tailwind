import { useState, useEffect } from 'react';
import { SelectedPage, SelectedSpecialCategory } from "@/shared/types";
import { motion } from "framer-motion";

// Import images from assets
import img1 from '@/assets/gallery/img1.jpg';
import img2 from '@/assets/gallery/img2.jpg';

//Import wedding Images
import specimg1 from '@/assets/wedding/img1.jpg';
import specimg2 from '@/assets/wedding/img2.jpg';
import specimg3 from '@/assets/wedding/img3.jpg';
import specimg4 from '@/assets/wedding/img4.jpg';
import specimg5 from '@/assets/wedding/img5.jpg';
import specimg6 from '@/assets/wedding/img6.jpg';
import specimg7 from '@/assets/wedding/img7.jpg';
import specimg8 from '@/assets/wedding/img8.jpg';
import specimg9 from '@/assets/wedding/img9.jpg';
import specimg10 from '@/assets/wedding/img10.jpg';
import specimg11 from '@/assets/wedding/img11.jpg';
import specimg12 from '@/assets/wedding/img12.jpg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const First = ({ setSelectedPage }: Props) => {
  const [showMasonryModal, setShowMasonryModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilename, setSelectedFilename] = useState('');

  const imageUrls = [img1, img2];

  const categories = [
    SelectedSpecialCategory.StreetPhotography,
    SelectedSpecialCategory.wildlifePhotography
  ];

  const handleImageClick = (category: SelectedSpecialCategory) => {
    // set filename for masonry title
    setSelectedFilename(category);
    const filename = category.toString().replace(/\s/g, '').toLowerCase(); // Call toString() before replace
    // dynamic import wrt category
    console.log(filename);
    setShowMasonryModal(true);
  };

  // Modal Implementation
  const specImages = [specimg1, specimg2, specimg3, specimg4, specimg5, specimg6, specimg7, specimg8, specimg9, specimg10, specimg11, specimg12];

  // State to manage modal visibility, selected image, and index
  //   const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to toggle modal and set selected image
  const toggleModal = (image: string) => {
    setSelectedImage(image);
    setShowModal(!showModal);
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + specImages.length) % specImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(specImages[newIndex]);
  };

  // Function to navigate to the next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % specImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(specImages[newIndex]);
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
    return specImages.slice(startIndex, startIndex + 3).map((image, index) => (
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
    <section id="first" className="mx-auto w-5/6 pt-20 pb-44">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.First)}
      ></motion.div>
      <div className='max-w-[1000px] w-full m-auto relative group'>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-1 md:px-0">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative" onClick={() => handleImageClick(categories[index])}>
              <img className="h-auto max-w-full" src={url} alt="" />
              <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30">{categories[index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showMasonryModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="max-w-[90%] max-h-[90%] overflow-auto bg-white rounded-lg p-8">
            <button className="absolute top-4 right-4 text-white" onClick={() => setShowMasonryModal(false)}>Close</button>
            <h2 className="text-xl font-bold mb-4">{selectedFilename}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {[0, 3, 6, 9].map((startIndex: number, columnIndex) => (
                <div key={columnIndex} className="grid gap-1">
                  {generateImageElements(startIndex)}
                </div>
              ))}
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
            {/* You can add additional content or customize the modal here */}
          </div>
        </div>
      )}
    </section>
  );
};

export default First;
