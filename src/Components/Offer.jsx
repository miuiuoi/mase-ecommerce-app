import { ArrowForwardSharp } from '@mui/icons-material';
import exclusive_image from '../Components/Assets/exclusive_image.png';

export default function Offer() {
  return (
    <div
      className="m-auto mb-[150px] flex h-[60vh] w-[65%] "
      style={{
        background:
          'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      }}
    >
      <div className="flex flex-1 flex-col justify-center leading-tight p-3">
        <h1 className="text-[80px] font-medium">Exclusive</h1>
        <h1 className="text-[80px] font-medium">Offer for you</h1>
        <p className="text-[20px] font-medium">ONLY ON BEST SELLERS PRODUCTS</p>
        <div className='mt-2'>
          <button className="group relative z-10 flex transform justify-center rounded-md border px-4 py-2 text-gray-800 transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-600 hover:text-white">
            Check Now
            <ArrowForwardSharp className="ml-2 transform transition-transform duration-200 ease-in-out" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center pt-6">
        <img src={exclusive_image} alt="exclusive_image" />
      </div>
    </div>
  );
}
