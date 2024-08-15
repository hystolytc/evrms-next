'use client'

import React from 'react'
import cartStore from '@/store/cart/store'
import styles from './cart.module.scss'
import { SlBasket } from "react-icons/sl";

const Cart = () => {
  const cart = cartStore(state => state)

  return (
    <button 
      className={styles.cart}
      onClick={cart.actions.openCart}
    >
      {cart.total > 0 &&
        <span>1</span>
      }
      <SlBasket size={20} />
    </button>
  )
}

export default Cart