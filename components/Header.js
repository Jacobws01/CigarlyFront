import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Dropdown, Dropdown2 } from './Dropdown';

import styles from '../styles/Header.module.css'

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
    const router = useRouter()

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };

    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
      <div className={styles.navbar}>
          <div className={styles.navbarcontainer}>
                <Link href="/"><div className={styles.navbarlogo}>
                    <Image className={styles.navbaricon} src="/logo1.png" width={60} height={60} />
                  </div></Link>
                  <div className={styles.menuicon} onClick={handleClick} >
          {click ? <FaTimes /> : <FaBars />}
          </div>
           {click ? ( <Dropdown2 /> ): ('')}
                <ul className={styles.navmenu}>
                  <li className={styles.navitem}>
          <Link href="/" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>HOME</a>
          </Link>
          </li>
          <li className={styles.navitem}>
          <Link href="/OurServices" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>Our Services</a>
          </Link>
          </li>
          <li className={styles.navitem}>
          <Link href="/Invest" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>Invest</a>
          </Link>
          </li>
          <li className={styles.navitem}>
          <Link href="/Funds" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>FUNDS</a>
          </Link>
          </li>
          <li className={styles.navitem}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <Link href="/about" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>ABOUT ↴</a>
          </Link>
          {dropdown && <Dropdown />}
          </li>
        </ul>
            </div>
            </div>   
    )
}

export default Header;