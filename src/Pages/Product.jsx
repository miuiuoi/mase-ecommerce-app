import { useContext } from "react"
import { ShopContext } from "../Context/ShopContextProvider";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct";


export default function Product() {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((product) => product.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}
