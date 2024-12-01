import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider';
import remove_icon from '../Components/Assets/cart_cross_icon.png';

export default function CartItem() {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((total, product) => {
    if (cartItem[product.id] > 0) {
      return total + product.new_price * cartItem[product.id];
    }
    return total;
  }, 0);

  const shippingFee = 0; // Assuming free shipping
  const total = subtotal + shippingFee;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-5 text-lg font-semibold mb-2">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr className="mb-4" />
      {all_product.map((product) => {
        if (cartItem[product.id] > 0) {
          return (
            <div key={product.id} className="grid grid-cols-5 items-center border-b py-4">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
              <p className="text-lg">{product.name}</p>
              <p className="text-lg">${product.new_price.toFixed(2)}</p>
              <div className="flex items-center">
                <button className="border rounded-md px-2 py-1">{cartItem[product.id]}</button>
              </div>
              <p className="text-lg font-semibold text-red-600">
                ${(product.new_price * cartItem[product.id]).toFixed(2)}
              </p>
              <img
                className="cursor-pointer w-6 h-6"
                src={remove_icon}
                alt="Remove"
                onClick={() => {
                  removeFromCart(product.id);
                }}
              />
            </div>
          );
        }
        return null; 
      })}

      <div className="mt-6 border-t pt-4">
        <h1 className="text-xl font-bold mb-2">Cart Totals</h1>
        <div className="flex justify-between mb-2">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex justify-between mb-2">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <h3>Total</h3>
          <h3>${total.toFixed(2)}</h3>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
          PROCEED TO CHECKOUT
        </button>
      </div>

      <div className="mt-6">
        <p>If you have a promo code, enter it here:</p>
        <div className="flex mt-2">
          <input type="text" placeholder="Promo code" className="border rounded-md p-2 flex-grow" />
          <button className="ml-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}