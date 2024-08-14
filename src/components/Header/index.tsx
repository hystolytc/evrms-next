import React from 'react'
import styles from './header.module.scss'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <h1>Evrmst.Next</h1>
        
        {/* <div className={styles.search}>
          <CiSearch size={20} />
          <input
            placeholder="Search by product name"
          />
        </div> */}
      </div>

      <button className={styles.basket}>
        <span>1</span>
        <SlBasket size={20} />
      </button>
    </div>
  )
}

export default Header