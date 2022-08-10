import Link from 'next/link'
import { GiSilverBullet } from 'react-icons/gi'
import { AiFillBook } from 'react-icons/ai'
import { BiCoinStack } from 'react-icons/bi'
import { FaCoins, FaChalkboardTeacher } from 'react-icons/fa'


import styles from '../styles/Ourproducts.module.css'

function Ourproducts() {
    return (
            <section className={styles.topsection}>
                <div className={styles.container}>
                    <div className={styles.aligndiv}>
                        <div className={styles.coldiv}>
                            <div className={styles.textsection}> <span className={styles.titletag}>what we do</span>
                                <h2 className={styles.whitetext}>WE PROVIDE ASSET MANAGEMENT SERVICES & TEACH EVERYDAY INVESTORS </h2>
                            </div>
                        </div>
                        <div className={styles.linkcontainer}>
                            <div className={styles.servicelinkdiv}> <Link href="/"><a className={styles.mainbutton}>learn more</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.servicesloop}>
                    <div className={styles.container}>
                        <div className={styles.cardsalignment}>
                            <div className={styles.sizerdiv}>
                                <div className={styles.singleservicecard}>
                                    <div className={styles.icon}>
                                        <FaChalkboardTeacher className={styles.flaticoncigar} />
                                    </div>
                                    <h4>Trading Lessons and Insights</h4>
                                    <p>We provide basic to advanced crypto trading and managment courses. We also provide one on one coaching sessions to take you from zero to hero.</p>
                                    <Link href="/"><a className={styles.serviceslink}>Read More</a></Link>
                                </div>
                            </div>
                            <div className={styles.sizerdiv}>
                                <div className={styles.singleservicecardblack}>
                                    <div className={styles.icon}>
                                        <AiFillBook className={styles.flaticoncigarb} />
                                    </div>
                                    <h4>Portfolio Advisory Services</h4>
                                    <p>Want control of your assets, but don't want to spend thousands of hours on research to maximize returns. We got you covered.</p>
                                    <Link href="/"><a className={styles.serviceslinkblack}>Read More</a></Link>
                                </div>
                            </div>
                            <div className={styles.sizerdiv}>
                                <div className={styles.singleservicecard}>
                                    <div className={styles.icon}>
                                        <FaCoins className={styles.flaticoncigar} />
                                    </div>
                                    <h4>Asset Management Services</h4>
                                    <p>Our funds provide investors a full range of exposure to the crypto space, spanning from liquidity providing managment 
                                    to early-stake tokens.</p>
                                    <Link href="/"><a className={styles.serviceslink}>Read More</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  );
}

export default Ourproducts;