'use client'

import React, { useState } from 'react'
import { currency } from '@/utils/formatter'
import { FiMinus, FiPlus } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { CiCircleInfo } from "react-icons/ci";
import cartStore from '@/store/cart/store'
import styles from './order-counter.module.scss'

interface Props {
  item: Record<string, any>
}

const OrderCounter: React.FC<Props> = ({ item }) => {
  const cart = cartStore(state => state)
  const [qty, setQty] = useState(1)
  const price = item.discountPrice || item.price

  const onChange = (e: any) => {
    let val = Number(e.target.value.replace(/\D+/g, ''))
    if (val > item.stock) val = item.stock
    if (val < 1) val = 1

    setQty(val)
  }

  const onAdd = () => {
    setQty(prevState => (prevState + 1 <= item.stock) ? prevState + 1 : item.stock)
  }

  const onSub = () => {
    setQty(prevState => prevState > 1 ? prevState - 1 : 1)
  }

  if (cart.actions.hasItem(item.id)) return (
    <div className={styles.itemInCart}>
      <span>
        <CiCircleInfo size={20} />
        Barang ini sudah anda masukkan ke keranjang
      </span>
    </div>
  )

  return (
    <div>
      <div className={styles.order}>
        <div>
          <button onClick={onSub}>
            <FiMinus size={20} />
          </button>
          <input 
            value={qty}
            onChange={onChange}
          />
          <button onClick={onAdd}>
            <FiPlus size={20} />
          </button>
        </div>

        <span className={styles.priceTotal}>
          {currency(price * qty)}
        </span>              
      </div>

      <button 
        className={styles.btnAddToChart}
        onClick={() => cart.actions.add({...item, qty: qty })}
      >
        <SlBasket size={20} />
        Tambahkan ke Keranjang
      </button>
    </div>
  )
}

export default OrderCounter