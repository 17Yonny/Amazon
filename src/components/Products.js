import React from 'react';
import { Link} from "react-router-dom";
import Product from "./Product";
import "./Products.css";


const Products = () => {
  return (   
    <>   
    <div className='products_row'>
       <Product 
       id="112005"
       title="OtterBox Galaxy S23 Ultra Commuter Series Case - INTO THE FUCHSIA (Pink), slim & tough, pocket-friendly, with port protection"
       image="https://m.media-amazon.com/images/I/61JuGS7YWKL._AC_SY300_SX300_.jpg"
       rating={4}  
       price ={330.68}
       />
      <Product 
       id="184057"
       title="Apple Watch SE (2nd Gen, 2023) (GPS 40mm) Smartwatch with Starlight Aluminum Case with Starlight Sport Loop One Size"
       image="https://m.media-amazon.com/images/I/61R+kfxZlgL._AC._SR360,460.jpg"
       rating={5}
       price ={5999.99}
       />
    </div>
    <div className='products_row'>
    <Product
     id="124587"
     title="Beats Solo 4 - Wireless Bluetooth On-Ear Headphones, Apple "
     image="https://m.media-amazon.com/images/I/51sZFm7L2BL._AC_SX679_.jpg"
     rating={5}
     price={3000.99}
    />
    <Product
    id="138973"
    title="bal Tech Parts Compatible Generic Apple"
    image="https://m.media-amazon.com/images/I/31LhkmWDYCL._AC_SX679_.jpg"
    rating={3}
    price={189.99}
    />
    <Product
    id="147829"
    title="iPhone X/xs/11 pro Screen protector guard tempered glass 10D"
    image="https://m.media-amazon.com/images/I/41vHUJg0pHL._AC._SR360,460.jpg"
    rating={5}
    price={90.80}
    />
    </div>
    <div className='products_row'>
      <Product 
      id="916270"
      title="Sparq Active Watch Strap Compatible with Samsung Galaxy Watch 4 / Watch 5 / Watch 6 (Olive Green)"
      image="https://m.media-amazon.com/images/I/41JyoANGAgL._AC._SR360,460.jpg"
      rating={4}
      price={199.00}
      />
    </div>
    </>
  );
}

export default Products