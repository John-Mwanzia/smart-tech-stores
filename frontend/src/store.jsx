import React, { useReducer } from 'react'
import { createContext } from "react";


export const Store = createContext()

const reducer = (state, action)=>{
    
    switch(action.type){
        //add to cart
        case 'ADD-TO-CART':
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find((item) =>item._id===newItem._id)
            const cartItems = existItem? state.cart.cartItems.map((item) =>item._id === existItem._id? newItem : item
            ) :[...state.cart.cartItems, newItem];
            return {...state, cart: {...state.cart, cartItems}}
        default:
            return state
    }
}

export default function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, {
       cart: {
        cartItems: []
       } 
    })
   
  const value= {state,dispatch}
  return ( <Store.Provider value = {value} >{props.children}</Store.Provider>)
}
