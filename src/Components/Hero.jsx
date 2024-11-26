import hand_icon from "../Components/Assets/hand_icon.png";
import hero_image from "../Components/Assets/hero_image.png";
import {

  ArrowForwardSharp,
} from "@mui/icons-material";

export default function Hero() {
  return (
    <div
      className=" h-[120vh] flex"
      style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <div className="flex-1 flex-col justify-center pl-[180px] pt-[100px] leading-tight">
        <h2 className="text-[20px] font-medium">NEW ARRIVALS ONLY</h2>
        <div className="">
          <div className="flex items-center gap-2">
            <p className="text-[90px] font-medium">new</p>
            <img src={hand_icon} alt="hand_icon" className="w-[105px]" />
          </div>
          <p className="text-[90px] font-medium">collection</p>
          <p className="text-[90px] font-medium">for everyone</p>
        </div>

        <div className="flex  items-center gap-[15px] mt-8">
          <button className="rounded-md border px-4 py-2 flex items-center justify-center relative z-10 
                        transition duration-300 ease-in-out transform group hover:scale-105 text-gray-800 
                        hover:bg-orange-600 hover:text-white">
            Latest Collection
            <ArrowForwardSharp className="ml-2 transition-transform duration-200 ease-in-out transform " />
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <img src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
}
