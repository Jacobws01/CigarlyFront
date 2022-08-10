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
                <div className={styles.topline}><p>- Invest Today - </p></div>
                <h1 className={styles.headtextdark}>
                  Panoramic Funds
                </h1>
                <p className={styles.homeherosubtitledark}
                >
                  Our funds provide investors a full range of exposure to the cryptocurrency space, spanning from liquidity providing, early-stake tokens and select ecosystem investments.
                </p>
                <Link href='/shop'>
                  <a className={styles.herobutton}>
                    Invest Today
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeheroimgdivmargin}>
                <Image className={styles.homeheroimg} src="/J60.jpg" alt="charts" 
                       width={500} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SuperSectionB;