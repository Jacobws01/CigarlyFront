import Link from 'next/link'
import { GiCigar, GiSilverBullet } from 'react-icons/gi'

import styles from '../styles/Ourproducts.module.css'

function Ourproducts() {
    return (
            <section className={styles.topsection}>
                <div className={styles.container}>
                    <div className={styles.aligndiv}>
                        <div className={styles.coldiv}>
                            <div className={styles.textsection}> <span className={styles.titletag}>our products</span>
                                <h2 className={styles.whitetext}>we sell cigars and accesories </h2>
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
                                        <GiCigar className={styles.flaticoncigar} />
                                    </div>
                                    <h4>Belicoso Cigars</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
                                    <Link href="/"><a className={styles.serviceslink}>Read More</a></Link>
                                </div>
                            </div>
                            <div className={styles.sizerdiv}>
                                <div className={styles.singleservicecardblack}>
                                    <div className={styles.icon}>
                                        <GiSilverBullet className={styles.flaticoncigarb} />
                                    </div>
                                    <h4>Bullet Punch Cutter</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
                                    <Link href="/"><a className={styles.serviceslinkblack}>Read More</a></Link>
                                </div>
                            </div>
                            <div className={styles.sizerdiv}>
                                <div className={styles.singleservicecard}>
                                    <div className={styles.icon}>
                                        <GiCigar className={styles.flaticoncigar} />
                                    </div>
                                    <h4>Cigars</h4>
                                    <p>Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.</p>
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