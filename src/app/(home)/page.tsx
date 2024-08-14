import React from 'react'
import ProductList from "./ProductList"
import styles from './home.module.scss'

export default function PageCatalog() {
  return (
    <div className={styles.home}>
      <ProductList />
    </div>
  )
}