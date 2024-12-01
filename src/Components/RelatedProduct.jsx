import data_product from "./Assets/data";
import { Item } from "./Item";

export default function RelatedProduct() {
  return (
    <div className="flex items-center justify-center  flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">Related Products</h1>
      <hr className="w-[250px] h-[6px] rounded-md bg-black mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}