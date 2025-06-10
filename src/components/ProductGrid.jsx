
export default function ProductsGrid() {
    const images = [
        "/images/img1.JPG",
        "/images/img2.JPG",
        "/images/img3.JPG",
        "/images/img4.JPG",
        "/images/img5.JPG",
        "/images/img6.JPG",
    ];

    return (
        <div className="m-4 bg-white p-6 min-h-screen rounded-2xl overflow-hidden shadow-md">
            <h2 className="text-[#F47C5A] text-2xl font-semibold mb-4">Featured Products:</h2>
            <div className="
            grid 
            grid-cols-2
            grid-row-3
            gap-4
            h-screen
            lg:grid-cols-6 
            lg:grid-rows-3
            lg:gap-4
            ">

            <div className="h-50 lg:h-auto rounded-2xl overflow-hidden shadow-md  lg:col-span-3 lg:row-span-2 transition-transform duration-300 hover:scale-102 hover:shadow-lg hover:shadow-gray-200">
                <img src={images[0]} className="w-full h-full object-cover" />
            </div>

            <div className="h-50 lg:h-auto rounded-2xl overflow-hidden shadow-md lg:col-span-3 lg:row-span-1 transition-transform duration-300 hover:scale-102 hover:shadow-lg hover:shadow-gray-200">
                <img src={images[1]} className="w-full h-full object-cover" />
            </div>

            <div className="h-50 lg:h-auto rounded-2xl overflow-hidden shadow-md lg:col-span-1 lg:row-span-1 transition-transform duration-300 hover:scale-102 hover:shadow-lg hover:shadow-gray-200">
                <img src={images[2]} className="w-full h-full object-cover" />
            </div>

            <div className="h-50 lg:h-auto rounded-2xl overflow-hidden shadow-md lg:col-span-2 lg:row-span-2 transition-transform duration-300 hover:scale-102 hover:shadow-lg hover:shadow-gray-200">
                <img src={images[3]} className="w-full h-full object-cover" />
            </div>

            <div className="h-50 lg:h-auto rounded-2xl overflow-hidden shadow-md lg:col-span-1 lg:row-span-1 transition-transform duration-300 hover:scale-102 hover:shadow-lg hover:shadow-gray-200">
                <img src={images[4]} className="w-full h-full object-cover" />
            </div>

            <div className="h-50 lg:h-auto rounded-2xl overflow-hidden shadow-md lg:col-span-3 lg:row-span-1 transition-transform duration-300 hover:scale-102 hover:shadow-lg hover:shadow-gray-200">
                <img src={images[5]} className="w-full h-full object-cover" />
            </div>
            </div>
        </div>
    )

}
