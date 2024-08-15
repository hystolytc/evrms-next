'use client'

import React, { useEffect, useRef } from 'react'
import cartStore from '@/store/cart/store'
import styles from './modal-cart.module.scss'
import Image from "next/image"
import { BsTrash } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { currency } from "@/utils/formatter"

const ModalCart = () => {
  const cart = cartStore(state => state)
  const cartRef = useRef(null)

  useEffect(() => {
    if (!cart.isOpen) {
      document.body.style.overflow = ''
      return
    }

    const handleClickOutside = (e: any) => {
      if (cartRef.current && !(cartRef.current as any).contains(e.target)) {
        cart.actions.openCart()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [cart.isOpen])

  if (!cart.isOpen) return null

  return (
    <div className={styles.modal}>
      <div 
        ref={cartRef}
        className={styles.cart}
      >
        {cart.data.length ?
          cart.data.map(item => (
            <div 
              key={item.id}
              className={styles.item}
            >
              <Image
                src={item.images[0]}
                alt={item.name}
                width={100}
                height={100} />
              
              <div className={styles.itemRight}>
                <span>{item.name}</span>
                <span>{item.qty} pcs</span>
                <span>{currency(item.qty * (item.discountPrice || item.price))}</span>

                <div className={styles.btnRemove}>
                  <button onClick={() => cart.actions.remove(item.id)}>
                    <BsTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))
          :
          <div className={styles.emptyCart}>
            <SlBasket size={24} />
            Keranjang masih kosong
          </div>
        }
      </div>
    </div>
  )
}

export default ModalCart