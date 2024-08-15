import React from 'react'
import Cart from "../Cart"
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <a href='/'>evrmst.next</a>
      </div>

      <Cart />
    </div>
  )
}

export default Header