import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaBookReader, FaLaptop} from 'react-icons/fa'
import { GiBlackBook } from 'react-icons/gi'
import Ourproducts from '../components/Ourproducts'
import Experienced from '../components/Experienced'
import styles from '../styles/Shop.module.css'
import SuperSectionB from '../components/Super'
import Counterup from '../components/Counterup'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Panoramic Capital</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      <Ourproducts />
      <Experienced />

       <section className={styles.shopsection}>
            <div className={styles.container}>
                <div className={styles.sectitle}>
                   <span className={styles.titletag}>Offerings</span> 
                   <h2>Our Services</h2>
                </div>
                <div className={styles.shopholder}>
                    <ul className={styles.selector}>
                        <li className={styles.selectoritem}>
                            <a className={styles.selectorlink}>Crypto Course</a>
                        </li>
                        <li className={styles.selectoritem}>
                            <a className={styles.selectorlinkcenter}>Portfolio Consulting</a>
                        </li>
                        <li className={styles.selectoritem}>
                            <a className={styles.selectorlink}>One-on-One Coaching</a>
                        </li>
                    </ul>
                    <div className={styles.pricingsection}>
        <div className={styles.pricingwrapper}>
          <div className={styles.pricingcontainer}>
           <div>
            <div className={styles.pricingcontainercard}>
              <div className={styles.pricingcontainercardinfo}>
                <div className={styles.icon}>
                  <FaBookReader />
                </div>
                <h3>Zero to Hero Course</h3>
                <h4>$89</h4>
                <ul className={styles.pricingcontainerfeatures}>
                  <li>- Technical Analysis</li>
                  <li>- What We Invest In</li>
                  <li>- Crypto Basics Lessons</li>
                  <li>- Portfolio Setup Guide</li>
                  <li>- Liquidity Providing</li>
                  <li>& Staking Maximization</li>
                  <li>- Exclusive Research</li>
                  <li>- DeFi darknode setup</li>
                </ul>
              </div>
             </div>
             </div>
           <div>
            <div className={styles.pricingcontainercardmiddle}>
              <div className={styles.pricingcontainercardinfomiddle}>
                <div className={styles.iconm}>
                  <GiBlackBook />
                </div>
                <h3 className={styles.bigboy}>Complete Portfolio Advisory</h3>
                <h4>$119</h4>
                <p className={styles.parap}>/month</p>
                <ul className={styles.pricingcontainerfeaturesm}>
                  <li>- Full Advisory Services</li>
                  <li>- Everything from Zero to Hero</li>
                  <li>- Exclusive access to early stage investments</li>
                  <li>- Complete Personalized Portfolio</li>
                  <p>We do a full breakdown of your crypto assets & planned future investments. We then do a risk assessment survey to customize your portfolio.</p>
                  <li>- Portfolio Monitoring</li>
                  <p> 
We track your portfolio and this allows us to give you precise updates on how much to buy or how much to sell.
</p>
<li>- Personal Manager</li><p>Get a personal telegram contact who can provide you real time updates and answer all questions you may or may not have.
</p>
                </ul>
              </div>
             </div>
             </div>
           <div>
            <div className={styles.pricingcontainercard}>
              <div className={styles.pricingcontainercardinfo}>
                <div className={styles.icon}>
                  <FaLaptop />
                </div>
                <h3>One-on-One Coaching</h3>
                <h4>$1249</h4>
                <ul className={styles.pricingcontainerfeatures1}>
                  <li>Recommended for Beginners. This is one on one coaching sessions from a personal agent. 
                  Join a call with an agent who will walk you step by step through the entire process.
                   Buying, Trading, Hot Wallets, Cold Storage, Staying Protected, Staking, 
                  Liquidity Providing, Portfolio Optimization and Much More.</li>
                </ul>
              </div>
             </div>
             </div>
            </div>
           </div>
          </div>
                     </div>
                     </div>
                    </section>
                    <SuperSectionB />
                    <Counterup />

    </div>
  )
}