import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Unlimated.module.css'

function SuperSectionB() {
  return (
      <div className={styles.homeherolight}>
        <div className={styles.container}>
          <div className={styles.rowhomereverse}>
            <div className={styles.col}>
              <div className={styles.homeherotextwrappersuper}>
                <div className={styles.topline}><p>Amazing Cigars</p></div>
                <h1 className={styles.headtextdark}>
                  Smooth, Heavy, Full-Bodied, Rich and Balanced.
                </h1>
                <p className={styles.homeherosubtitledark}
                >
                  Lorem Ipsum Dolor Sit Amet, Consectetur. Lorem Ipsum Dolor Sit Amet, Olister. Lorem Ipsum Dolor Sit Amet.
                </p>
                <Link href='/shop'>
                  <a className={styles.herobutton}>
                    Shop Now
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeheroimgdivmargin}>
                <Image className={styles.homeheroimg} src="/skill-img.jpg" alt="cigars" 
                       width={520} height={550} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SuperSectionB;