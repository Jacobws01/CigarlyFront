import Link from 'next/link'
import Image from 'next/image'
import { GrNotes } from 'react-icons/gr'
import { BiCoinStack, BiLineChart } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi'
import { GiGears, GiPapers } from 'react-icons/gi'
import { FcLineChart } from 'react-icons/fc'
import { RiFileList2Line } from 'react-icons/ri'

import styles from '../styles/Experienced.module.css'

function Experienced() {
    return (
        <section className={styles.experiencedsection}>
            <div className={styles.container}>
                <div className={styles.rowalignjustify}>
                    <div className={styles.xpfeatures}>
                        <div className={styles.rowft}>
                          <div className={styles.rowftmasonry}>
                            <div className={styles.singlebox1}>
                                <div className={styles.featurebox}>
                                    <div className={styles.icondiv}>
                                        <RiFileList2Line className={styles.icon}/>
                                    </div>
                                    <h4>OUR SERVICES</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor</p>
                                    <span className={styles.count}>01</span>
                                </div>
                            </div>
                            <div className={styles.singlebox2}>
                                <div className={styles.featurebox}>
                                    <div className={styles.icondiv}>
                                        <BiCoinStack className={styles.icon1}/>
                                    </div>
                                    <h4>OUR FUNDS</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor</p>
                                    <span className={styles.count}>02</span>
                                </div>
                            </div>
                            <div className={styles.singlebox3}>
                                <div className={styles.featurebox}>
                                    <div className={styles.icondiv}>
                                        <HiUsers className={styles.icon}/>
                                    </div>
                                    <h4>our approach</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor</p>
                                    <span className={styles.count}>03</span>
                                </div>
                            </div>
                            <div className={styles.singlebox4}>
                                <div className={styles.featurebox}>
                                    <div className={styles.icondiv}>
                                        <BiLineChart className={styles.icon}/>
                                    </div>
                                    <h4>ANALYSIS</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor</p>
                                    <span className={styles.count}>04</span>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className={styles.rightdiv}>
                        <div className={styles.rightfttext}>
                            <div className={styles.sectitle}>
                                <span className={styles.titletag}>know more about Panoramic</span>
                                <h2>Investing in cryptocurrencies since 2013</h2>
                            </div>
                            <p>Panoramic uses a traditional fund management approach coupled with new age technologists to provide investors with an advanced crypto portfolio.
                            We provide the ability for investors to be significantly diversified or be extremely concentrated.</p>
                            <ul className={styles.featureicons}>
                                <li>
                                    <Image src='/icon-1.png' width={77} height={80} alt='icon' />
                                </li>
                                <li>
                                    <Image src='/icon-3.png' width={80} height={80} alt='icon' />
                                </li>
                            </ul>
                            <a className={styles.rightmainbtn} href="/">explore more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
  );
}

export default Experienced;