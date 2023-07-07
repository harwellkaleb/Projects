import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section
    id='about'
    className={`${styles.flex} ${styles.flexCenter} py-20 flex-col md:flex-row relative `}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient bottom-40' />

    <div className='w-full md:w-full text-center md:text-left relative z-[1]'>
    <h1 className="font-poppins font-semibold  ss:text-[72px] text-[52px] text-white">
        About Us
      </h1>
      {/* <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Hear what are clients have to say
        </p>
      </div> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>

    {/* <div className='flex flex-col  text-center  items-center relative z-[1]'>
      <p className={`${styles.paragraph} mt-10 w-[65%]`}>
        We have 13 years of experience cleaning Houses, Apartments, Offices, Beauty Salons, Medical Clinics, and New House Construction cleaning as well. We are licensed and insured.
      </p>
    </div> */}
  </section>
);

export default Testimonials;
