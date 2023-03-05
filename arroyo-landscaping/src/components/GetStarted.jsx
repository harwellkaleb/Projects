import styles from "../style";
import { arrowDown } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    onClick={() =>
      window.scrollTo({
        top: document.getElementById("services").offsetTop,
        behavior: "smooth",
      })
    }
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Our</span>
        </p>
        <img src={arrowDown} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Services</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
