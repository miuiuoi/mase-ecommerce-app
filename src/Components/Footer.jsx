import footer_logo from "../Components/Assets/logo_big.png"
import ig_logo from "../Components/Assets/instagram_icon.png"
import pintester_icon from "../Components/Assets/pintester_icon.png"
import whatsapp_logo from "../Components/Assets/whatsapp_icon.png"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-5">
            <img src={footer_logo} alt="footer_logo" />
            <p className="text-[46px] font-medium">SHOPPER</p>
        </div>

        <ul className="flex list-none gap-10 text-[20px]">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>

        <div className="flex gap-5 p-4">
            <div  className="p-3">
                <img src={ig_logo} alt="ig_logo" />
            </div>

            <div  className="p-3">
                <img src={pintester_icon} alt="pintester_icon" />
            </div>

            <div  className="p-3">
                <img src={whatsapp_logo} alt="whatsapp_logo" />
            </div>
        </div>

        <div className="flex flex-col items-center gap-5 w-[100%] mb-4">
            <hr className="w-[80%] border-none rounded-md h-[3px] bg-[#c7c7c7]"/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
