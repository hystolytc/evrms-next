import React from 'react'
import Image from 'next/image'
import { currency } from '@/utils/formatter'
import { IoLocationOutline } from "react-icons/io5";
import styles from './card-product.module.scss'

interface Props {
  image?: string
  name: string
  price: number
  priceDiscount?: number
  isAvailable?: boolean
  storeName: string
  location: string
  onClick?: () => void
}

const CardProduct: React.FC<Props> = (props) => (
  <div 
    className={styles.card_product}
    onClick={props.onClick}
  >
    <Image 
      className={styles.image}
      src={props.image || ''}
      alt={`product ${props.name}`}
      width={230}
      height={180}
      priority
    />
    
    <div className={styles.content_info}>
      <div>
        <span className={styles.name}>
          {props.name}
        </span>

        <div>
          <span className={`${styles[`price${props.priceDiscount ? '--strike' : ''}`]}`}>
            {currency(props.price)}
          </span>
          {props.priceDiscount &&
            <span className={styles.price}>
              {currency(props.priceDiscount)}
            </span>
          }
        </div>


        <div className={styles.store}>
          <div />
          <span>{props.storeName}</span>
        </div>
      </div>

      <div className={styles.location}>
        <IoLocationOutline size={16} />
        <span>{props.location}</span>
      </div>
    </div>

  </div>
)

export default CardProduct