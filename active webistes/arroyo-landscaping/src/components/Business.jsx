import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] flex-col flex-center rounded-full bg-dimBlue`} style={{
      position:'relative',
      display:"flex",
      textAlign:'center',
      justifyContent:'center',
      alignItems:'center',
    }} >
      <img src={icon} alt="star" className="w-[50%] h-[50%]  object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 style={{textAlign:'center'}} className="font-poppins font-semibold text-white mt-5 text-[18px] ">
        {title}
      </h4>
      {/* <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p> */}
    </div>
  </div>
);

const Business = () =>  (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} >
        Services <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      {/* <Button styles={`mt-10`} /> */}
      <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] mt-8 outline-none ${styles}`}><a href="#contact">Contact Us</a></button>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
