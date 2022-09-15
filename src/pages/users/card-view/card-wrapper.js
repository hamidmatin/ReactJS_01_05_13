import React from 'react'
import styles from './card-view.module.css'

const CardWrapper = ({ children}) => {
  return (
    <div className={styles['card-wrapper']}>{children}</div>
  )
}

export default CardWrapper