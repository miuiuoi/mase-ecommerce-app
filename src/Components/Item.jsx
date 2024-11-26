import PropTypes from "prop-types";


export const Item = (props) => {
  return (
    <div className="w-[150px] hover:translate-x-1 duration-75">
        <img src={props.image} alt="" />
        <p className="m-2">{props.name}</p>
        <div className="flex gap-2">
            <div className="text-xs">
                {props.new_price}
            </div>

            <div className="text-xs line-through">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

Item.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    new_price: PropTypes.string.isRequired,
    old_price: PropTypes.string.isRequired,
  };

