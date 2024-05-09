import React from 'react'
import "./Product.css"
import { Context } from '../ContextProvider';
import { useContext } from 'react';

function Product(props){
    const {laptops, addToCart}=useContext(Context);
    const {name, id, image, price}=props.data;
    const cartAmount=laptops[id] 

    return (
    <div className="product">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={()=>addToCart(id)}>ADD TO CART</button>
    </div>
  )
}
export default Product;
