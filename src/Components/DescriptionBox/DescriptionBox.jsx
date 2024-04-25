import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Discover a world of endless possibilities with our user-friendly eCommerce platform.
               Shop your favorite brands and find the perfect products to fit your lifestyle.
            </p>
            <p>
               Experience seamless shopping with our eCommerce website.
               From fashion to electronics, we've got everything you need, just a click away.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
