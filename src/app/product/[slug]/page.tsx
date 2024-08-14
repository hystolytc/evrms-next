import React from 'react'
import Image from 'next/image'
import { currency } from '@/utils/formatter'
import styles from './product.module.scss'
import { description, images } from './dummy'
import { IoLocationOutline } from "react-icons/io5"
import { FiMinus, FiPlus } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { getProduct } from "@/services/products"

export default async function ProductDetailPage() {
  const data = await getProduct('abc')


  if (!Object.keys(data).length) return <p>Empty</p>

  return (
    <div className={styles.product}>
      <div className={styles.contentContainer}>

        <div className={styles.imageContainer}>
          <div className={styles.imageBanner}>
            <Image
              src="https://assets.evermos.com/public/medium/q:100/evermos-production/brand/gema-insani/product/image/5ef4433e62b67.jpg"
              alt="tes"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.imageList}>
            {images.map((image, i) => (
              <button>
                <Image
                  key={i}
                  src={image}
                  alt="product"
                  width={60}
                  height={60} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.store}>
            <span>Gema Insan</span>
          </div>
          
          <h1>
            Gema Insani - Buku Membidik Karakter Hebat 23 x 15.2 SC
          </h1>

          <div>
            {/* <span className={`${styles[`price${props.priceDiscount ? '--strike' : ''}`]}`}> */}
            <span className={`${styles['price--strike']}`}>
              {currency(9999999)}
            </span>
            {/* {props.priceDiscount && */}
              <span className={styles.price}>
                {currency(800000000)}
              </span>
            {/* } */}
          </div>

          <div className={styles.stock}>
            200 Stock Tersedia
          </div>

          <div>
            <h2>Pengiriman</h2>
            <div className={styles.location}>
              <IoLocationOutline size={16} />
              <span>Dikirim dari <strong>Bandung</strong></span>
            </div>
          </div>

          <div>
            <h2>Pembelian</h2>
            <div className={styles.order}>
              <div>
                <button>
                  <FiMinus size={20} />
                </button>
                <input 
                  value={1}
                />
                <button>
                  <FiPlus size={20} />
                </button>
              </div>

              <span className={styles.priceTotal}>
                {currency(800000000)}
              </span>              
            </div>

            <button className={styles.btnAddToChart}>
              <SlBasket size={20} />
              Tambahkan ke Keranjang
            </button>
          </div>

          <div className={styles.description}>
            <h2>Deskirpsi</h2>
            <div dangerouslySetInnerHTML={{__html: description }}/>
          </div>
        </div>
      </div>

    </div>
  )
}