import Link from 'next/link'
import Image from 'next/image'
import { FaPaperPlane, FaGlobe } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { GiGears } from 'react-icons/gi'

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
                                        <FaPaperPlane className={styles.icon}/>
                                    </div>
                                    <h4>our mission</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor</p>
                                    <span className={styles.count}>01</span>
                                </div>
                            </div>
                            <div className={styles.singlebox2}>
                                <div className={styles.featurebox}>
                                    <div className={styles.icondiv}>
                                        <FaGlobe className={styles.icon}/>
                                    </div>
                                    <h4>our vision</h4>
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
                                        <GiGears className={styles.icon}/>
                                    </div>
                                    <h4>our strategy</h4>
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
                                <span className={styles.titletag}>know more about cigarely</span>
                                <h2>we have 25 years of experience in this field</h2>
                            </div>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, 
                            lorem quis biben dum auctor, 
                            nisi elit consequat ipsum, nec sagittis sem nibh id elit. 
                            Duis sed odio sit amet nibh vultate cursus a sit amet as well.
                            </p>
                            <ul className={styles.featureicons}>
                                <li>
                                    <Image src='/icon-1.png' width={77} height={80} alt='icon' />
                                    <h6>cigar roll</h6>
                                </li>
                                <li>
                                    <Image src='/icon-3.png' width={80} height={80} alt='icon' />
                                    <h6>cigar roll</h6>
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