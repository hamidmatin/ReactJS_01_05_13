import React from 'react'
import CardData from './card-data'
import CardFooter from './card-footer'
import CardTitle from './card-title'
import styles from './card-view.module.css'

const Card = ({user}) => {
  return (
    <div className={styles['card']}>
        <CardTitle value={user.name}/>
        <CardData label={'User Name :'} value={user.username}/>
        <CardData label={'E-Mail :'} value={user.email}/>
        <CardData label={'Phone :'} value={user.phone}/>
        <CardFooter />
    </div>
  )
}

export default Card