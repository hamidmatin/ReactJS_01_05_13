import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Error 404</h1>
        <p>Your Page Not Found</p>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default NotFoundPage