
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
      className="max-w-[1400px] h-[780px]    w-full m-auto py-16 px-4 relative group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
    
      {/* <span
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-gradient flex-1 font-poppins  mb-10 font-semibold ss:text-[72px] text-[52px] text-white "
      >
        Photo Gallery
      </span> */}
      
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
        className="w-full h-full rounded-2xl  shadow-2xl bg-center bg-cover duration-500"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "2rem",
        }}
      />
      <div className="white__gradient w-full -z-50 h-[35%]"/>
      
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
            className="text-2xl relative translate-y-[-900%] cursor-pointer   "
          >
            <UilCircle />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
