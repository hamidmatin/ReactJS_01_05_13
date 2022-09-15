import React from 'react'
import styles from './card-view.module.css'

const CardTitle = ({ value }) => {
  return (
    <h3 className={styles['card-title']}>{value} </h3>
  )
}

export default CardTitle