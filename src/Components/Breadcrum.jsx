/* eslint-disable react/prop-types */

import arrow_icon from "../Components/Assets/breadcrum_arrow.png"

export default function Breadcrum(props) {
const {product} = props;

  return (
    <div className="flex gap-2">
        Home <img src={arrow_icon} alt="arrow_icon" />
        Shop <img src={arrow_icon} alt="arrow_icon" />
        {product.category} <img src={arrow_icon} alt="arrow_icon" />
        {product.name}
        
    </div>
  )
}
