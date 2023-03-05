import styles from "../style";
import { treegrass,sprout } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={sprout} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Get Your </span> Free{" "}
            <span className="text-white">Estimate </span> Today !
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Arroyo <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Landscaping</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Service.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to Arroyo Landscaping Service, your premier choice for professional landscaping services in the Temple, TX area. We are committed to providing exceptional quality and customer service to meet all of your landscaping needs. Our team of experienced professionals specializes in a wide range of services including lawn care, tree trimming, irrigation, and much more. We pride ourselves on our attention to detail and our ability to turn your vision into reality. Contact us today to schedule a consultation and let us help you create the outdoor oasis of your dreams!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-1 my-10 relative`}>
        <img className="xs:w-[80%] h-[50%] xl:w-[100%] h-[50%]" src={treegrass} alt="treegrass" 
        style={{
          paddingRight:'40px',
          paddingLeft:'40px',
          borderRadius: '40px !important'
        }} 
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%]  white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
