import React, { useState } from "react";
import ReactPhotoGallery from "react-photo-gallery";
import styles from "../style";
import { gallery01, gallery02, gallery03 } from "../assets";
import Modal from "react-modal";

const photos = [  { src: gallery01, width: 4, height: 3, title: "Photo 1" },  { src: gallery02, width: 3, height: 4, title: "Photo 2" },  { src: gallery03, width: 3, height: 4, title: "Photo 3" },];

const ImageViewer = ({ photo, onClose, onNext, onPrev }) => {
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchDiff = touchStart - touchEnd;
    if (touchDiff > 150) {
      onNext();
    } else if (touchDiff < -150) {
      onPrev();
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 9999,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          padding: 0,
          backgroundColor: "transparent",
        },
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <img src={photo.src} alt={photo.title} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <button
              onClick={onPrev}
              className={`${styles.prevButton} py-4 px-6 font-poppins font-medium text-[18px] text-primary m-3 bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className={`${styles.nextButton} py-4 px-6 font-poppins font-medium text-[18px] m-3 text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            >
              Next
            </button>
          </div>
          <button
            onClick={onClose}
            className={`${styles.closeButton} py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
            style={{ marginTop: "1px" }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};



const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (event, { photo }) => {
    setSelectedImage(photo);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = photos.findIndex((p) => p.src === selectedImage.src);
    if (currentIndex !== -1 && currentIndex < photos.length - 1) {
      setSelectedImage(photos[currentIndex + 1]);
    }
  };
  
  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = photos.findIndex((p) => p.src === selectedImage.src);
    if (currentIndex !== -1 && currentIndex > 0) {
      setSelectedImage(photos[currentIndex - 1]);
    }
  };

  return (
    <section
      className={`${styles.flex} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}
    >
      <h2 className={`${styles.heading2} mb-8 `}>Recent Projects</h2>
      <ReactPhotoGallery photos={photos} onClick={handleImageClick} />
      {selectedImage && (
        <ImageViewer
          photo={selectedImage}
          onClose={handleModalClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default PhotoGallery;
