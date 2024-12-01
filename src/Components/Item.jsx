/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="w-[260px] h-[360px] p-2 border border-gray-300 rounded-lg shadow-md hover:translate-x-1 duration-75 flex flex-col justify-between">
      <Link to={`/product/${props.id}`}><img 
        onClick={window.scrollTo(0,0)}
        src={props.image} 
        alt={props.name} 
        className="w-full h-[260px] object-cover rounded-t-lg" 
      />
      </Link>
      <p className="m-2 text-center">{props.name}</p>
      <div className="flex justify-center gap-2">
        <div className="text-xs font-semibold text-green-600">
          {props.new_price}
        </div>
        <div className="text-xs line-through text-gray-500">
          {props.old_price}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.string.isRequired,
  old_price: PropTypes.string.isRequired,
};