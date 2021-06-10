import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Unlimated.module.css'

function Superabout() {
  return (
      <div className={styles.homehero}>
        <div className={styles.container}>
          <div className={styles.rowhome}>
            <div className={styles.col}>
              <div className={styles.homeherotextwrapper}>
                <div className={styles.topline}><p>Exclusive Access</p></div>
                <h1 className={styles.headtext}>
                  Smooth, Heavy, Full-Bodied, Rich and Balanced.
                </h1>
                <p className={styles.homeherosubtitle}
                >
                  Lorem Ipsum Dolor Sit Amet, Consectetur. Lorem Ipsum Dolor Sit Amet, Olister. Lorem Ipsum Dolor Sit Amet.
                </p>
                <Link href='/shop'>
                  <a className={styles.herobutton1}>
                    Order Now
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeheroimgdiv}>
                <Image className={styles.homeheroimg} src="/03.jpg" alt="Picture of credit cards" 
                       width={370} height={480} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Superabout;