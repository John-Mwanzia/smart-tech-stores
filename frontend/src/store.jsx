import React, { useReducer } from 'react'
import { createContext } from "react";


export const Store = createContext()

const initials = {
    userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")) 
    : null,

   cart: {
    cartItems: localStorage.getItem("cartItems")?  
    JSON.parse(localStorage.getItem("cartItems")) 
     : []
   },
 
}

const reducer = (state, action)=>{
    
    switch(action.type){
        //add to cart
        case 'ADD-TO-CART':
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find((item) =>item._id===newItem._id)
            const cartItems = existItem? state.cart.cartItems.map((item) =>item._id === existItem._id? newItem : item
            ) :[...state.cart.cartItems, newItem];
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
            return {...state, cart: {...state.cart, cartItems}}

        case 'REMOVE-CART-ITEM': {
                const cartItems = state.cart.cartItems.filter( (item) => item._id !== action.payload._id);
                localStorage.setItem("cartItems", JSON.stringify(cartItems))
                return  {...state, cart: {...state.cart, cartItems}}
             }

        case 'USER_SIGNIN':
            return {...state, userInfo: action.payload}    
        
        default:
            return state
    }
}

export default function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initials )
   
  const value= {state,dispatch}
  return ( <Store.Provider value = {value} >{props.children}</Store.Provider>)
}
