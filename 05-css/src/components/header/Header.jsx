import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Dev Doshi</h1>
        <button className={styles.btn}>This is button</button>
    </div>
  )
}

export default Header