import React, { useContext } from 'react'
import './Product.css'
import ShoppingContext from '../context/shopping/shoppingContext'


const Product = ({ id, image, title, rating, price}) => {
  const shoppingContext = useContext(ShoppingContext)
  const { addToBasket } = shoppingContext
  const addToBasketHandler=()=>{
    addToBasket ({item:{ id, image, title, rating, price} })
  }
  return (
    <div className='product'>
        <img
         src={image}
          alt=''/> 
        <div className='product_info'>
         <p>
            {title}
         </p>
         </div>
         <div className='product_rating'>
          {Array(rating).fill().map((_, i)=>(<p>⭐</p>))}
         </div>
         <div className='product_price'>
           <p> {price}</p>
        </div>
         <button className="product_button"onClick={addToBasketHandler}>Add to basket</button>
    </div>
  )
}

export default Product