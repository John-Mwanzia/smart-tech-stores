import React, { useReducer } from 'react'
import { createContext } from "react";


export const Store = createContext()

const reducer = (state, action)=>{
    
    switch(action.type){
        //add to cart
        case 'ADD-TO-CART':
            return {...state,cart:{...state.cart, cartItems:[...state.cart.cartItems, action.payload]}}
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
