

export default function NewLetter() {
  return (
    <div style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
      }} className="w-[65%] h-[50vh] flex flex-col m-auto justify-center items-center mb-[150px] gap-10 ">
        <h1 className="text-[55px] font-medium">Get Exclusive Offer On Your Email</h1>
        <p className="text-[20px]"> Subscribe to our new letter and stay updated</p>
        <div className="flex gap-2 items-center  bg-white rounded-md" >
            <input type="email" placeholder='email@gmail.com' className="w-[500px] border-none ml-2 rounded-md outline-none"/>
            <button className="rounded-md border px-4 py-2 flex items-center justify-center relative z-10 
                        transition duration-300 ease-in-out transform group hover:scale-105 text-gray-800 
                        hover:bg-orange-600 hover:text-white ">Subscribe</button>
        </div>
    </div>
  )
}
