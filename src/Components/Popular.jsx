import data_product from "../Components/Assets/data"
import { Item } from "./Item"

export default function Popular() {
  return (
    <div className="flex items-center flex-col gap-10 h-[90vh]">
        <h1 className="text-[50px] font-medium">POPULAR IN WOMEN</h1>
        <hr className="w-[200px] h-[6px] rounded-md bg-black"/>
        <div className="flex mt-[50px] gap-5">
            {data_product.map((item, i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
