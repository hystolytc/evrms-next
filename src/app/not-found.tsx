import React from 'react'
import Link from 'next/link'
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from './not-found.module.scss'

export default function NotFoundPage() {
  return (
    <div className={styles.notFound}>
      <div className={styles.icon}>
        <FaMagnifyingGlass size={100} />
      </div>
      
      <div className={styles.info}>
        <p>
          Halaman yang anda cari tidak dapat ditemukan.
        </p>
        <Link href='/'>
          Yuk, lihat katalog aja
        </Link>
      </div>
    </div>
  )
}