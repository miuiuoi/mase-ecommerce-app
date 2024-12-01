import logo from "../Components/Assets/logo.png";
import cart_icon from "../Components/Assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContextProvider";

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    console.log({getTotalCartItems});
    

    return (
      <div className="flex justify-around p-10 shadow-md h-3">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo" />
          <p className="text-[30px] font-medium">SHOPPER</p>
        </div>
  
        <ul className="flex items-center gap-14">
          <li onClick={()=>{setMenu("shop")}} className="flex flex-col items-center justify-center gap-3 cursor-pointer">
            <Link to="/">Shop</Link>  {menu === "shop"?<hr className="w-[80%] h-[4px] bg-[red] rounded-xl" />:<></>} 
          </li>
          <li onClick={()=>{setMenu("men")}} className="flex flex-col items-center justify-center gap-3 cursor-pointer">
            <Link to="/men">Men</Link> {menu === "men"?<hr className="w-[80%] h-[4px] bg-[red] rounded-xl" />:<></>}
          </li>
          <li onClick={()=>{setMenu("women")}} className="flex flex-col items-center justify-center gap-3 cursor-pointer ">
            <Link to="/women">Women</Link> {menu === "women"?<hr className="w-[80%] h-[4px] bg-[red] rounded-xl" />:<></>}
          </li>
          <li onClick={()=>{setMenu("kid")}} className="flex flex-col items-center justify-center gap-3 cursor-pointer">
            <Link to="/kid">Kid</Link> {menu === "kid"?<hr className="w-[80%] h-[4px] bg-[red] rounded-xl" />:<></>}
          </li>
        </ul>
  
        <div className="flex items-center gap-8">
          <button className="flex justify-center items-center rounded-[75px] border-2 p-2 w-[130px] h-[40px] border-[#515151] cursor-pointer bg-[white] border-1 active:bg-[#f3f3f3]">
            <Link to="/login">Login</Link>
          </button>
          
          <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
          <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-45px] rounded-lg bg-[red] text-[#ffffff] ">{getTotalCartItems()}</div>
        </div>
      </div>
    );
}


