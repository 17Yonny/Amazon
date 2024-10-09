import React, { useEffect } from 'react'
import {Route} from "react-router"
import "./Home.css";
import Products from "./Products";
import db from "../firebase"

const Home = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your Firestore fetching logic here
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='home'> 
    <div className='home_container'>
      <img
      className='home_image'
       src="https://m.media-amazon.com/images/I/61K6VO7ktZL._SX3000_.jpg"
       alt='Hero image'
       />
       <Products />
    </div> 
    </div>
  )
}

export default Home