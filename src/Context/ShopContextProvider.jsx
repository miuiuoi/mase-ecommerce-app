/* eslint-disable react/prop-types */
import React  from "react"
import all_product from "../Components/Assets/all_product"


export const ShopContext = React.createContext();
const getDefaultCart = () =>{
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
    
  }
  return cart;
}


export default function ShopContextProvider(props) {
  
  const [cartItem, setCartItem] = React.useState(getDefaultCart());
  console.log({cartItem});
  

  const addToCart = (itemId) => {
    setCartItem((prevCartItem) => ({ ...prevCartItem, [itemId]: prevCartItem[itemId] +1}))
  }

  const removeFromCart = (itemId) => {
    setCartItem((prevCartItem) => ({ ...prevCartItem, [itemId]: prevCartItem[itemId] -1}))
  }

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        total += cartItem[item]
      }
      
    }
    return total;
  }

  const contextValue = {getTotalCartItems ,all_product, cartItem, addToCart, removeFromCart}
  

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}  
      </ShopContext.Provider>  
    </div>
  )
}
