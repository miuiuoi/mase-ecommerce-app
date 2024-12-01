export default function DescriptionBox() {
    return (
      <div className="m-auto max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <div className="flex border-b pb-4 mb-4">
          <div className="flex-1 text-center py-2 border-r text-lg font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
            Description
          </div>
          <div className="flex-1 text-center py-2 text-lg font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer">
            Reviews (122)
          </div>
        </div>
  
        <div>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum
            dignissimos, ad dolorem quam modi corrupti vero! Officia consequatur
            eum id voluptatum ullam, repudiandae quisquam recusandae at
            asperiores maxime cupiditate!
          </p>
        </div>
      </div>
    );
  }