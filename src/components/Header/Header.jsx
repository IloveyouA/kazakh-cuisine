import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Taste the
            Heart of Kazakh Cuisine</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <Link to={"/food"}><a>Explore Dishes</a></Link>
        </div>
    </div>
  )
}

export default Header
