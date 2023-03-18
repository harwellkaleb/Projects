import styles from "./style";
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
} from "./components";
import { photo6 } from "./assets";

const App = () => (
  <div
    style={{ backgroundImage: photo6 }}
    className="bg-primary w-full overflow-hidden"
  >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div>
      <img
        className="absolute w-[100%] h-[130%] xs:h-[143%] ss:h-[120%] sm:h-[94%]  opacity-50 -z-1"
        src={photo6}
      />
      <div>
        <div className={`  ${styles.flexCenter} `}>
          <Hero />
        </div>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        {/* <Billing /> */}
        <Testimonials />
        <Clients />
        <PhotoGallery />
        <CardDeal />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
