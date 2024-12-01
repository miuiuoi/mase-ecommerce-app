/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import star_dull_icon from "../Components/Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContextProvider";

export default function ProductDisplay(props) {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className="flex m-10 bg-white shadow-lg rounded-lg p-6">
            <div className="flex gap-5">
                <div className="flex flex-col gap-4">
                    <img className="h-[120px] w-[200px] rounded-md object-cover" src={product.image} alt="" />
                    <img className="h-[120px] rounded-md object-cover" src={product.image} alt="" />
                    <img className="h-[120px] rounded-md object-cover" src={product.image} alt="" />
                    <img className="h-[120px] rounded-md object-cover" src={product.image} alt="" />
                </div>

                <div className="flex">
                    <img className="w-[800px] rounded-lg object-cover" src={product.image} alt="" />
                </div>
            </div>

            <div className="flex flex-col ml-10">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center mb-2">
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <img key={index} className="h-5 w-5" src={star_dull_icon} alt="Star" />
                        ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-600">12 reviews</p>
                </div>
                <div className="flex gap-4 mb-4">
                    <div className="text-lg line-through text-gray-400">${product.old_price}</div>
                    <div className="text-xl font-semibold text-red-600">${product.new_price}</div>
                </div>

                <div className="mb-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem magnam doloribus a dolore, dicta quibusdam harum sunt explicabo saepe numquam mollitia excepturi vero repellendus ipsam voluptate labore. Libero, quisquam?
                </div>

                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Select size</h2>
                    <div className="flex gap-2">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div key={size} className="border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-200 text-center">
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={() => {addToCart(product.id)}} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">ADD TO CART</button>
                <p className="mt-4 text-gray-600"><span className="font-semibold">Category:</span> Women, T-shirt, Crop Top</p>
                <p className="text-gray-600"><span className="font-semibold">Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
}