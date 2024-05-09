import React from 'react'
import { LAPTOPS } from '../../LAPTOPS';
import Product from '../../components/Product';
import "./Shop.css"

function Shop() {
  return (
    <div className="shop">
    <h1>OUR PRODUCTS</h1>
    <div className="products">
        {
            LAPTOPS.map((product)=><Product  data={product}/>)
        }
    </div>
    </div>
  )
}

export default Shop;
