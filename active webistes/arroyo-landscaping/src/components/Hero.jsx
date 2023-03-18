import { useState, useEffect } from "react";
import { UilArrowUp } from "@iconscout/react-unicons";

import styles from "../style";
import { sprout } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <section
      id="home"
      className={`flex md:flex-row z-10 flex-col ${styles.paddingY}`}
    >
      {showScroll && (
        <button
          onClick={scrollTop}
          className="fixed bottom-10 z-100 right-10 p-1 rounded-full bg-gray-500  hover:bg-slate-700 text-white"
        >
          <UilArrowUp size={45} />
        </button>
      )}
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-5 bg-discount-gradient rounded-[10px] mb-2">
          <a className="flex" href="#contact">
            <img src={sprout} alt="discount" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2 cursor-pointer`}>
              <span className="text-white">Get Your </span> Free{" "}
              <span className="text-white">Estimate </span> Today !
            </p>
          </a>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="flex-1 text-center   font-poppins font-semibold xs:text-[49px] sm:text-[112px] md:text-[142px] text-[152px] text-white ss:leading-[140.8px] leading-[75px]">
            Arroyo <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Landscaping</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-center xs:text-[49px] sm:text-[112px] md:text-[142px]  text-[152px] text-white ss:leading-[140.8px] leading-[75px] w-full">
          Service.
        </h1>

        <div className="flex justify-center items-center md:mr-4 mr-0">
          <GetStarted />
        </div>

        <p
          className={`${styles.paragraph} xs:text-center xs:text-[15px] sm:text-[20px]  md:text-[20px] leading-[35px]  text-center max-w-[470px] mt-5`}
        >
          Welcome to Arroyo Landscaping Service, your premier choice for
          professional landscaping services in the Temple, TX area. We are
          committed to providing exceptional quality and customer service to
          meet all of your landscaping needs. Our team of experienced
          professionals specializes in a wide range of services including lawn
          care, tree trimming, irrigation, and much more. We pride ourselves on
          our attention to detail and our ability to turn your vision into
          reality. Contact us today to schedule a consultation and let us help
          you create the outdoor oasis of your dreams!
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-1 p-10 my-10 relative`}
      >
        {/* <img className="xs:w-[80%] h-[50%] xl:w-[100%] h-[50%] rounded-2xl" src={treegrass} alt="treegrass" 
        style={{
          paddingRight:'40px',
          paddingLeft:'40px',
        }} 
        /> */}
        {/* <img
          className="rounded-2xl w-[90%] h-[80%]"
          alt="treegrass"
          src={photo6}
        /> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%]  white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
