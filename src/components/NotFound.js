import React from 'react';
import "./NotFound.css";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='not_found'>
        <div>
            <Link to="/">
              <img src="https://imageio.forbes.com/blogs-images/zarastone/files/2017/05/21Amazon-Barkley-404.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Not Found image"/>
            </Link>
        </div>
    </div>
  )
}

export default NotFound