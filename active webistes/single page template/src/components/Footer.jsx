import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flex} ${styles.paddingY} flex-col`}>
    <div
      className={` justify-center flex items-center md:flex-row  flex-col mb-8 w-full`}
    >
      <div className='flex-[10]   '>
        {/* <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        /> */}
        <li className='flex  flex-col'>
          <h1 className='font-poppins mb-2  font-semibold ss:text-[22px] text-[22px] text-white ss:leading-[100.8px] leading-[30px]'>
            <a
              className='flex xs:justify-center md:justify-start '
              href='#home'
            >
              E<span className='text-[80%]'>&#38;</span>D{' '}
              <span className='text-gradient mx-2'> Enterprise</span>
            </a>
          </h1>
          <p
            className={`font-poppins font-normal text-dimWhite text-[18px] text-center leading-[30.8px] flex xs:justify-center md:justify-start`}
          >
            Contact Us Today For Your Free Estimate.
          </p>
        </li>
      </div>

      <div className='flex-[1.5] w-full flex flex-col justify-between flex-wrap md:mt-0 mt-10'>
        <div className={`flex-col flex ss:my-0 my-4 min-w-[150px]`}>
          <ul className='list-none mt-4 '>
            <li
              className={`font-poppins font-normal text-[16px] leading-[0] text-dimWhite mb-4`}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className='text-gradient font-poppins text-center font-normal text-[25px] leading-[40px]  text-dimWhite mb-10'>
                Karla Nunez
              </span>
              <a
                href='tel:561-698-6146'
                className='hover:text-secondary cursor-pointer'
                style={{ textAlign: 'center' }}
              >
                561-698-6146
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        Copyright Ⓒ 2023 E&D Enterprise. All Rights Reserved.
      </p>

      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain z-50 cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
