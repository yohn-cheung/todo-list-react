"use client"
import Image from 'next/image'
import styles from './page.module.css'

import App from './app'
import {StoreProvider} from '../utils/store'

export default function Home() {
  return (
    <StoreProvider>
      <App/>
    </StoreProvider>
  )
}
