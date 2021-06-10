
import Link from 'next/link'

import styles from '../styles/Sections.module.css'


function Teamsection() {
  return (
      <div className={styles.pricingsection}>
        <div className={styles.pricingwrapper}>
          <div className={styles.pricingcontainer}>
           <div className={styles.pricingcontainercard}>
            <div className={styles.pdisplayimage}>
             <div className={styles.imgbuttonwrap}>
                <Link href="/">
                  <a className={styles.btnwide}>Malachi Boyan</a>
                </Link>
              </div>
             </div>
            </div>
            <div className={styles.pricingcontainercard}>
            <div className={styles.pdisplayimage}>
             <div className={styles.imgbuttonwrap}>
                <Link href="/">
                  <a className={styles.btnwide}>Ferdinanda Nathalie</a>
                </Link>
              </div>
             </div>
            </div>
            <div className={styles.pricingcontainercard}>
            <div className={styles.pdisplayimage}>
             <div className={styles.imgbuttonwrap}>
                <Link href="/">
                  <a className={styles.btnwide}>Ime Vendelín</a>
                </Link>
              </div>
             </div>
            </div>
            <div className={styles.pricingcontainercard}>
            <div className={styles.pdisplayimage}>
             <div className={styles.imgbuttonwrap}>
                <Link href="/">
                  <a className={styles.btnwide}>Sonja Lilia</a>
                </Link>
              </div>
             </div>
            </div>
            <div className={styles.pricingcontainercard}>
            <div className={styles.pdisplayimage}>
             <div className={styles.imgbuttonwrap}>
                <Link href="/">
                  <a className={styles.btnwide}>Aleksey Gudbrand</a>
                </Link>
              </div>
             </div>
            </div>
           </div>
        </div>
      </div>
  );
}

export default Teamsection;