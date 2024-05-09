import React, { createContext } from 'react'
import { LAPTOPS } from './LAPTOPS';
import { useState } from 'react';

export const Context=createContext(null);

const getDefault=()=>{
    let cart={}
    for(let i=1; i<LAPTOPS.length + 1; i++){
  cart[i]=0;
    }
    return cart;
}

export const ContextProvider = (props) => {
    const [laptops, setLaptops]=useState(getDefault());

    
const addToCart=(itemId)=>{
    setLaptops((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
}
const removeFromCart=(itemId)=>{
    setLaptops((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
}

const updateCart=(newAmount, itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: newAmount}))
}
const contextValue={
    laptops, 
    addToCart,
    removeFromCart,
    updateCart
}

  return (
    <Context.Provider value={contextValue}>
{props.children}
    </Context.Provider>
  )
}


