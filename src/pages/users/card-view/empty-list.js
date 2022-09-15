import React from 'react'
import styles from './card-view.module.css'

const EmptyList = ({message}) => {
  return (
    <div className={styles['empty-list']}>{message}</div>
  )
}

export default EmptyList