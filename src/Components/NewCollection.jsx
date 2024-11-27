import new_collections from "../Components/Assets/new_collections"
import { Item } from "./Item"

export default function NewCollection() {
  return (
    <div className="flex items-center justify-center gap-10 flex-col h-[90vh]">
        <h1 className="text-[50px] font-medium">NEW COLLECTIONS</h1>
        <hr className="w-[200px] h-[6px] rounded-md bg-black"/>
        <div className="flex mt-[50px] gap-5">
            {new_collections.map((item,i) => {
                return (<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
            })}
        </div>
    </div>
  )
}
