import styles from './style';
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  PhotoGallery,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from './components';
import { photo6 } from './assets';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <div>
        <div
          className={` bg-mop bg-no-repeat md:bg-fixed xs:bg-[length:100%_86.3%] md:bg-center  ${styles.flexCenter} `}
        >
          {/* <img
        className="absolute h-full w-full opacity-50 -z-1"
        src={photo6}
      /> */}
          <Hero />
        </div>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Testimonials />
        <Business />
        {/* <Billing /> */}
        <Clients />
        <PhotoGallery />
        <CardDeal />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
