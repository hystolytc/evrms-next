'use client' 

import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5"
import Link from "next/link"
import styles from './navigation.module.scss'

const Navigation = () => (
  <Link 
    className={styles.navigation}
    href='/'
  >
    <IoArrowBackOutline size={30} />
  </Link>
)

export default Navigation
