'use client'

import React, { useState } from 'react'
import Image from "next/image"
import styles from './images.module.scss'

interface Props {
  images: string[]
}

const Images: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const onSelectedImage = (image: string) => {
    setSelectedImage(image)
  } 

  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageBanner}>
        <Image
          src={selectedImage}
          alt="Product Images"
          width={400}
          height={400}
          layout="responsive" />
      </div>
      <div className={styles.imageList}>
        {images.map((image: string, i: number) => (
          <button
            key={i}
            onClick={() => onSelectedImage(image)}
          >
            <Image
              src={image}
              alt="product"
              width={60}
              height={60} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Images
