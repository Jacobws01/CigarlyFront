import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Invest.module.css'

function InvestB() {
  return (
      <div className={styles.homeherolight}>
        <div className={styles.container}>
          <div className={styles.rowhomereverse}>
          <div className={styles.col}>
              <div className={styles.contactform}>
      <div className={styles.contacttitle}><h3>Investor Inquiry</h3></div>
      <form name="contact" method="POST" data-netlify="true" className={styles.contactform}>
        <div className={styles.inputcontact}>
          <input type="text" id="name" name="name" required placeholder="Your Full Name *" />
        </div>
        <div className={styles.inputcontact}>
          <input type="email" id="email" name="email" required placeholder="Your Email *" />
        </div>
        <div className={styles.inputtextarea}>
          <textarea id="message" name="message" placeholder="Comments & Questions"></textarea>
        </div>
        
          <input className={styles.button} type="submit"/>
        
      </form>
    </div>
            </div>
            <div className={styles.col}>
              <div className={styles.homeherotextwrappersuper}>
                <h1 className={styles.headtextdark}>
                  Impervious Funds
                </h1>
                <p className={styles.homeherosubtitledark}
                >
                  Our funds provide investors a full range of exposure to the cryptocurrency space,
                   spanning from DeFi, liquidity providing, early-stake tokens and select ecosystem investments. We provide the ability for investors to be significantly diversified or be extremely concentrated. 

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default InvestB;