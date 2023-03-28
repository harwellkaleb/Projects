import React, { useState, useRef } from "react";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
} from "../assets";
import {
  UilArrowLeft,
  UilArrowRight,
  UilExpandArrowsAlt,
} from "@iconscout/react-unicons";

const galleryImages = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
];

const FullscreenViewer = ({ image, onClose }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
      <div className="w-[80%] h-[80%]">
        <img
          src={image}
          alt="fullscreen"
          className="w-full h-full object-contain cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const scrollRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      setScrollLeft((prev) => prev - current.offsetWidth);
      current.scrollLeft -= current.offsetWidth;
    } else {
      setScrollLeft((prev) => prev + current.offsetWidth);
      current.scrollLeft += current.offsetWidth;
    }
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const container = scrollRef.current;
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    let startScrollLeft = container.scrollLeft;

    function handleTouchMove(e) {
      const touchCurrentX = e.touches[0].clientX;
      const dx = touchStartX - touchCurrentX;
      const sensitivity = 10; // adjust as needed
      if (Math.abs(dx) > sensitivity) {
        e.preventDefault();
        container.style.scrollBehavior = "unset"; // disable smooth scrolling during swipe
        container.scrollLeft = startScrollLeft + dx;
      }
    }

    function handleTouchEnd(e) {
      const touchEndX = e.changedTouches[0].clientX;
      const dx = touchStartX - touchEndX;
      const threshold = container.clientWidth / 2; // adjust as needed
      if (Math.abs(dx) > threshold) {
        container.style.scrollBehavior = "smooth"; // enable smooth scrolling for animation
        if (dx > 0) {
          container.scrollLeft = startScrollLeft + container.clientWidth;
        } else {
          container.scrollLeft = startScrollLeft - container.clientWidth;
        }
      }
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    }
  };

  return (
    <div
      id="gallery"
      className="flex justify-end items-center py-16  flex-col xs:px-0 xs:flex-col xl:pl-32  xl:flex-row  "
    >
      <div
        id="app__gallery-content"
        className="flex flex-1  xs:min-w-full text-center xs:p-16 items-center flex-col min-w-[500px] pr-8"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Gallery
        </h1>
        {/* <button className="mt-10 ">
          <a
            className="py-4 px-6 font-poppins font-medium justify-center items-center text-center text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
            href=""
          >
            Contact Us
          </a>
        </button> */}
      </div>

      <div
        id="app__gallery-images"
        className="flex flex-row max-w-[50%] xs:max-w-[100%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[50%] relative"
      >
        {fullscreenImage && (
          <FullscreenViewer image={fullscreenImage} onClose={closeFullscreen} />
        )}
        <div
          id="app__gallery-images_container"
          className="flex flex-row rounded-lg w-max overflow-hidden  "
          ref={scrollRef}
          onTouchStart={handleTouchStart}
        >
          {galleryImages.map((image, index) => (
            <div
              id="app__gallery-images_card"
              className="flex justify-center sm:h-80 xs:min-w-[240px] items-center  relative min-w-[301px] h-[447px] mr-8"
              key={`gallery_image-${index + 1}`}
            >
              <UilExpandArrowsAlt
                id="gallery__expansion-icon"
                className="cursor-pointer z-10 absolute bg-white rounded-md hover:bg-slate-300 "
                size={40}
                onClick={() => openFullscreen(image)}
              />
              <img
                className=" w-full h-full object-cover opacity-100 rounded-lg transition duration-75 ease-linear hover:opacity-[0.77] "
                src={image}
                alt="gallery"
              />
            </div>
          ))}
        </div>
        <div
          id="app__gallery-images-arrows"
          className="w-full flex justify-between items-center pb-[1rem] absolute bottom-[5%]"
        >
          <UilArrowLeft
            className="cursor-pointer bg-white rounded-md hover:bg-slate-300 "
            size={40}
            id="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />

          <UilArrowRight
            className="cursor-pointer bg-white rounded-md hover:bg-slate-300 "
            size={40}
            id="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
