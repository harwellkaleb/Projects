// import React, { useState } from "react";
// import ReactPhotoGallery from "react-photo-gallery";
// import styles from "../style";
// import { gallery01, gallery02, gallery03 } from "../assets";
// import Modal from "react-modal";

// const photos = [  { src: gallery01, width: 4, height: 3, title: "Photo 1" },  { src: gallery02, width: 3, height: 4, title: "Photo 2" },  { src: gallery03, width: 3, height: 4, title: "Photo 3" },];

// const ImageViewer = ({ photo, onClose, onNext, onPrev }) => {
//   const [touchStart, setTouchStart] = useState(0);

//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = (e) => {
//     const touchEnd = e.changedTouches[0].clientX;
//     const touchDiff = touchStart - touchEnd;
//     if (touchDiff > 150) {
//       onNext();
//     } else if (touchDiff < -150) {
//       onPrev();
//     }
//   };

//   return (
//     <Modal
//       isOpen={true}
//       onRequestClose={onClose}
//       style={{
//         overlay: {
//           backgroundColor: "rgba(0, 0, 0, 0.7)",
//           zIndex: 9999,
//         },
//         content: {
//           top: "50%",
//           left: "50%",
//           right: "auto",
//           bottom: "auto",
//           marginRight: "-50%",
//           transform: "translate(-50%, -50%)",
//           border: "none",
//           padding: 0,
//           backgroundColor: "transparent",
//         },
//       }}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "100%",
//         }}
//       >
//         <img src={photo.src} alt={photo.title} />
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             marginTop: "1rem",
//           }}
//         >
//           <div style={{ display: "flex" }}>
//             <button
//               onClick={onPrev}
//               className={`${styles.prevButton} py-4 px-6 font-poppins font-medium text-[18px] text-primary m-3 bg-blue-gradient rounded-[10px] outline-none ${styles}`}
//             >
//               Prev
//             </button>
//             <button
//               onClick={onNext}
//               className={`${styles.nextButton} py-4 px-6 font-poppins font-medium text-[18px] m-3 text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
//             >
//               Next
//             </button>
//           </div>
//           <button
//             onClick={onClose}
//             className={`${styles.closeButton} py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
//             style={{ marginTop: "1px" }}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// const PhotoGallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (event, { photo }) => {
//     setSelectedImage(photo);
//   };

//   const handleModalClose = () => {
//     setSelectedImage(null);
//   };

//   const handleNext = () => {
//     if (!selectedImage) return;
//     const currentIndex = photos.findIndex((p) => p.src === selectedImage.src);
//     if (currentIndex !== -1 && currentIndex < photos.length - 1) {
//       setSelectedImage(photos[currentIndex + 1]);
//     }
//   };

//   const handlePrev = () => {
//     if (!selectedImage) return;
//     const currentIndex = photos.findIndex((p) => p.src === selectedImage.src);
//     if (currentIndex !== -1 && currentIndex > 0) {
//       setSelectedImage(photos[currentIndex - 1]);
//     }
//   };

//   return (
//     <section
//       className={`${styles.flex} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}
//     >
//       <h2 className={`${styles.heading2} mb-8 `}>Recent Projects</h2>
//       <ReactPhotoGallery photos={photos} onClick={handleImageClick} />
//       {selectedImage && (
//         <ImageViewer
//           photo={selectedImage}
//           onClose={handleModalClose}
//           onNext={handleNext}
//           onPrev={handlePrev}
//         />
//       )}
//     </section>
//   );
// };
import React, { useState } from "react";
import { gallery01, gallery02, gallery03, treegrass } from "../assets";
import {
  UilArrowRight,
  UilArrowLeft,
  UilCircle,
} from "@iconscout/react-unicons";

function PhotoGallery() {
  const images = [
    { title: "social-media-1", src: gallery01 },
    { title: "social-media-2", src: gallery02 },
    { title: "social-media-3", src: gallery03 },
    { title: "social-media-4", src: treegrass },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextSlide();
    }

    if (touchStart - touchEnd < -150) {
      prevSlide();
    }
  };

  return (
    <div
      className="max-w-[1400px] h-[780px] mb-20 w-full m-auto py-16 px-4 relative group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <span
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-gradient flex-1 font-poppins mb-10 font-semibold ss:text-[72px] text-[52px] text-white "
      >
        Photo Gallery
      </span>
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "2rem",
        }}
      />
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[75%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
        <UilArrowLeft onClick={prevSlide} size={50} />
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[75%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
        <UilArrowRight onClick={nextSlide} size={50} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            onClick={() => goToSlide(imageIndex )}
            className="text-2xl cursor-pointer  "
          >
            <UilCircle />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
