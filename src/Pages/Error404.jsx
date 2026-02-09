import React from 'react'
import { Link } from 'react-router-dom'
import "./Error404.css"


const Error404 = () => {
  return (
    <div className='error-contianer'>
      <div className='error-card'>

        <div className='error-emoji'>🛒</div>

        <h1 className='error-title'>404</h1>

        <h2 className='error-subtitle'>
          This product page doesn't exist
        </h2>

        <p className='error-text'>
          The item you're searching for may have been removed, renamed, or is currently out of stock.
        </p>

        <div className='error-actions'>
          <Link to="/" className='error-btn primary'>
          continue shopping
          </Link>

          <Link to="/contact" className='error-btn outline'>
          contact support
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Error404