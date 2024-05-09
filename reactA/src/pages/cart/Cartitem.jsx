import React, { useContext } from 'react'
import "./Cartitem.css"

import { Context } from '../../ContextProvider';

function Cartitem(props){

    const {id, image, name, price}=props.data;
    const {removeFromCart}=useContext(Context);

  return (
    <div className="cartItem">
      <img src={image} alt=""/>
      <div className="info">
        <h2>NAME:{name}</h2>
        <p>PRICE:${price}</p>
            <button onClick={()=>removeFromCart(id)}>REMOVE FROM CART</button>
      </div>
    </div>
  )
}

export default Cartitem;
