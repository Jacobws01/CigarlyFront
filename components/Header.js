import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AuthContext from '../context/AuthContext'
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

    const { user } = useContext(AuthContext)

    return (
      <div className={styles.navbar}>
          <div className={styles.navbarcontainer}>
                <Link href="/"><div className={styles.navbarlogo}>
                    <Image className={styles.navbaricon} src="/logo.png" width={150} height={60} />
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
          <Link href="/shop" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>SHOP</a>
          </Link>
          </li>
          <li className={styles.navitem}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <Link href="/about" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>ABOUT US</a>
          </Link>
          {dropdown && <Dropdown />}
          </li>
          <li className={styles.navitem}>
          <Link href="/contact" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>CONTACT</a>
          </Link>
          </li>
        </ul>
        <div className={styles.clockholder}>
        <div className={styles.clockdiv}>
          <Image src="/clock-icon.png" width={60} height={60} />
        </div>
        <div className={styles.clocktext}>
          <h5>BUY NOW</h5>
          <p>206-200-1961</p>
        </div>
        </div>
        <div className={styles.auth}>
          {user ? (
            <Link href="/account">
              <a className={styles.navlinkslog}>{user.email}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a className={styles.navlinkslog}>Login</a>
            </Link>
          )}
        </div>
            </div>
            </div>   
    )
}

export default Header;