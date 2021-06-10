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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.footerlinkitems2}>
            <h3>Get in Touch</h3>
            <p>206-200-1961</p>
            <p>info@webexample.com</p>
            <p>3717 Stone Ave</p>
            <p>Seattle, Washington</p>
            <Link href="/">
              <a className={styles.dirbtn}>Directions</a>
            </Link>
          </div>
        </div>
          <div className={styles.footerlinkitems}>
            <h3>Our Cigars</h3>
             <Link href="/">
              <a className={styles.footerlinkitemslink}>Gordito Cigar</a>
             </Link>
             <Link href="/">
              <a className={styles.footerlinkitemslink}>Robusto Cigar</a>
              </Link>
             <Link href="/">
              <a className={styles.footerlinkitemslink}>Cigar Roll</a>
              </Link>
             <Link href="/">
              <a className={styles.footerlinkitemslink}>Cigar Accesories</a>
              </Link>
             <Link href="/">
              <a className={styles.footerlinkitemslink}>Cigar cutter</a>
              </Link>
             <Link href="/">
              <a className={styles.footerlinkitemslink}>Cigar Vallet</a>
              </Link>
        </div>
      </div>
      <section className={styles.socialmedia}>
        <div className={styles.socialmediawrap}>
          <div className={styles.footerlogo}>
            <a  className={styles.sociallogo}>
              <GiCigar className={styles.navbaricon} />
              Cigarely
            </a>
          </div>
          <small className={styles.websiterights}>Cigarly © 2021</small>
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