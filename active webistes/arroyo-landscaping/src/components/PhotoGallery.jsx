import React, { useState } from "react";
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
} from "../assets";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";

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

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div
      id="gallery"
      className="flex justify-center items-center py-16 pl-24 flex-col xs:flex-col  xl:flex-row  "
    >
      {fullscreenImage && (
        <FullscreenViewer image={fullscreenImage} onClose={closeFullscreen} />
      )}

      <div
        id="app__gallery-content"
        className="flex flex-1 justify-center xs:min-w-full xs:p-16 items-start flex-col min-w-[500px] pr-8"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Gallery
        </h1>
        <button className="mt-10 ">
          <a
            className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
            href=""
          >
            Contact Us
          </a>
        </button>
      </div>

      <div
        id="app__gallery-images"
        className="flex justify-center items-center flex-row max-w-[50%] relative"
      >
        <div
          id="app__gallery-images_container"
          className="flex flex-row w-max overflow-hidden  "
          ref={scrollRef}
        >
          {galleryImages.map((image, index) => (
            <div
              id="app__gallery-images_card"
              className="flex justify-center sm:h-80 xs:min-w-[240px] items-center  relative min-w-[301px] h-[447px] mr-8"
              key={`gallery_image-${index + 1}`}
            >
              <img
                className=" w-full h-full object-cover opacity-100 rounded-md transition duration-75 ease-linear hover:opacity-[0.77] cursor-pointer"
                src={image}
                alt="gallery"
                onClick={() => openFullscreen(image)}
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
