import React, { useState } from 'react';
import { MenuItems, MenuItems2, MenuItems3 } from './Menuitems';
import Link from 'next/link';

import styles from '../styles/Dropdown.module.css'

export function Dropdown() {
  return (
      <ul
        className={styles.dropdownmenu}
      >
        {MenuItems.map((item, index) => {
          return (
             <Link
                href={item.path}
              >
            <li className={styles.dropdownlink} key={index}>
                {item.title}
                </li>
              </Link>
          );
        })}
      </ul>
  );
}

export function Dropdown2() {
  return (
      <ul
        className={styles.dropdownmenu}
      >
        {MenuItems2.map((item, index) => {
          return (
             <Link
                href={item.path}
              >
            <li className={styles.dropdownlink} key={index}>
                {item.title}
                </li>
              </Link>
          );
        })}
      </ul>
  );
}


