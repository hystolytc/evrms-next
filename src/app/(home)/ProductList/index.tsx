'use client'

import React, { useEffect } from 'react'
import CardProduct from "../components/CardProduct"
import styles from './product-list.module.scss'
import InfiniteScroll from 'react-infinite-scroller';
import ProductListLoader from "../components/Loader/ProductListLoader"
import productStore from '@/store/product/store'

const ProductList = () => {
  const product = productStore(state => state)

  useEffect(() => {
    product.actions.fetchProducts()
  }, [])

  const loadMore = () => {
    product.actions.fetchProducts(product.pagination.next_cursor || '')
  }

  if (!product.data.length && product.loading) return (
    <div className={styles.catalog_container}>
      {new Array(8).fill(0).map((_, i) => <ProductListLoader key={i} />)}
    </div>
  )

  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={!product.loading && product.pagination.has_next}
      initialLoad={false}
    >
      <div className={styles.catalog_container}>
        {product.data.map((product: any) => (
          <CardProduct
            key={product.id}
            image={product.coverImage}
            name={product.name} 
            price={product.price}
            priceDiscount={product.hasDiscount ? product.discountPrice : 0}
            storeName={product.brandName}
            location={product.districtName} />
        ))}
        {product.loading && <ProductListLoader />}
      </div>
    </InfiniteScroll>
  )
}

export default ProductList