import React from 'react'
import { LAPTOPS } from '../../LAPTOPS';
import { Context } from '../../ContextProvider';
import Cartitem from './Cartitem';
import { useContext } from 'react';
import "./Cart.css"

function Cart() {


  const {laptops}=useContext(Context);

  return (
    <div className="cart">
      {
        LAPTOPS.map((product)=>{
          if(laptops[product.id] !==0){
            return <Cartitem data={product}/>
          }
        })
      }
    </div>
  )
}

export default Cart;
