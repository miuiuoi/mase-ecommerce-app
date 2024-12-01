/* eslint-disable react/prop-types */
import all_product from "../Components/Assets/all_product";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Item } from "../Components/Item";

export default function ShopCategory(props) {
  return (
    <div>
      <img className="block w-[85%] m-auto" src={props.banner} alt="" />
      <div className="flex justify-between items-center mx-[170px] my-4">
        <p>
          <span  className="font-medium">Showing 1-12</span> Out of 36 products
        </p>
        <div className="p-2 rounded-md border border-s-neutral-400 flex items-center cursor-pointer  hover:bg-gray-100">
          Sort by <img src={dropdown_icon} alt="" className="ml-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-4 max-w-screen-xl gap-x-2">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          }
          return null;
        })}
      </div>

      <div className="flex justify-center items-center mt-[50px] mb-[100px]">
        <button className="rounded-md border px-4 py-2 flex items-center justify-center relative z-10 
                        transition duration-300 ease-in-out transform group hover:scale-105 text-gray-800 
                        hover:bg-orange-600 hover:text-white ">
          Explore More
        </button>
      </div>
    </div>
  );
}