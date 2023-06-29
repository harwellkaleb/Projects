import { Navbar } from '../components';

import {
  AboutUs,
  Events,
  FindUs,
  Footer,
  Gallery,
  Header,
  Laurels,
  SpecialMenu,
} from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Events />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default Page;
