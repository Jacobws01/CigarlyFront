import React, { Fragment } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { counter } from './Counteritems';

import styles from '../styles/Counter.module.css'

function Counterup() {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className={styles.countersection}>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <div className={styles.row}>
                        {counter.map((item, i) => (
                            <div key={i} className={styles.mappeditems}>
                                <div className={styles.counterbox}>
                                    <h1>
                                        <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                            {({ countUpRef }) => (
                                                <Fragment>
                                                    <span ref={countUpRef} className={styles.counterreal} />
                                                    <VisibilitySensor
                                                        onChange={isVisible => {
                                                            if (isVisible) {
                                                                setFocus(true);
                                                            }
                                                        }}
                                                    >
                                                        <span>+</span>
                                                    </VisibilitySensor>
                                                </Fragment>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <p className={styles.title}>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <span className={styles.bigtext}>
                        Cigarely
      </span>
                </div>
            </div>
        </section>
    );
}

export default Counterup;