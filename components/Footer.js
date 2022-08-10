import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import { GiCigar } from 'react-icons/gi'

import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.footercontainer}>
      <section className={styles.footersubscription}>
        <Image className={styles.footerheadinglogo} src='/logo-white.png' width={150} height={60} />
      </section>
      <div className={styles.footerlinks}>
        <div className={styles.footerlinkwrapper}>
          <div className={styles.footerlinkitems}>
            <h3>About Us</h3>
            <p>Impervious uses traditional fund management tactics coupled with new age technologists to provide investors with an advanced crypto portfolio. 
             We give you the ability to be significantly diversified or be extremely concentrated. 
            </p>
          </div>
          <div className={styles.footerlinkitems2}>
            <h3>Get in Touch</h3>
            <p>Invest@Panoramic.com</p>
            <p>Support@Panoramic.com</p>
            <p>Services@Panoramic.com</p>
            <Link href="/Contact">
              <a className={styles.dirbtn}>Get in Touch</a>
            </Link>
          </div>
        </div>
          <div className={styles.footerlinkitems}>
            <h3>Our Pages</h3>
             <Link href="/OurServices">
              <a className={styles.footerlinkitemslink}>Our Services</a>
             </Link>
             <Link href="/Invest">
              <a className={styles.footerlinkitemslink}>Invest</a>
              </Link>
             <Link href="/Funds">
              <a className={styles.footerlinkitemslink}>Funds</a>
              </Link>
             <Link href="/About">
              <a className={styles.footerlinkitemslink}>About</a>
              </Link>
             <Link href="/Contact">
              <a className={styles.footerlinkitemslink}>Contact</a>
              </Link>
        </div>
      </div>
      <section className={styles.socialmedia}>
        <div className={styles.socialmediawrap}>
          <div className={styles.footerlogo}>
            <a  className={styles.sociallogo}>
              Impervious Capital
            </a>
          </div>
          <small className={styles.websiterights}>© 2022 Impervious Capital</small>
          <div className={styles.socialicons}>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </a>
            <a
              className={styles.socialiconlink}
              href="/"
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;