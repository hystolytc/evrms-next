import React from 'react'
import { currency } from '@/utils/formatter'
import styles from './product.module.scss'
import { IoLocationOutline } from "react-icons/io5"
import { getProduct } from "@/services/products"
import Images from "./components/Images"
import OrderCounter from "./components/OrderCounter"
import NotFoundPage from "@/app/not-found"
import Navigation from "./components/Navigation"

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  const data = await getProduct(slug || '')

  if (!Object.keys(data).length) return <NotFoundPage />

  return (
    <div className={styles.product}>
      
      
      <div className={styles.contentContainer}>
        <Navigation />
        
        <Images images={data.variants[0].images} />

        <div className={styles.info}>
          <div className={styles.store}>
            <span>{data.brandName}</span>
          </div>
          
          <h1>{data.name}</h1>

          <div>
            <span className={`${styles[`price${data.discountPrice ? '--strike' : ''}`]}`}>
              {currency(data.price)}
            </span>
            {data.discountPrice &&
              <span className={styles.price}>
                {currency(data.discountPrice)}
              </span>
            }
          </div>

          <div className={styles.stock}>
            {data.stock} Stock Tersedia
          </div>

          <div>
            <h2>Pengiriman</h2>
            <div className={styles.location}>
              <IoLocationOutline size={16} />
              <span>Dikirim dari <strong>{data.warehouseAddress}</strong></span>
            </div>
          </div>

          <div>
            <h2>Pembelian</h2>
            <OrderCounter item={data} />
          </div>

          <div className={styles.description}>
            <h2>Deskirpsi</h2>
            <div dangerouslySetInnerHTML={{__html: data.description }}/>
          </div>
        </div>
      </div>

    </div>
  )
}