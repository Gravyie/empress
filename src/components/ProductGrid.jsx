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
        <div className="mx-2 sm:mx-4 lg:mx-6 xl:mx-8 my-4 bg-white p-3 sm:p-4 lg:p-6 rounded-2xl shadow-md">
            <h2 className="text-[#F47C5A] text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6">
                Featured Products:
            </h2>
            
            <div className="
                grid 
                grid-cols-2 
                grid-rows-6
                gap-2
                h-[60vh]
                sm:grid-cols-4
                sm:grid-rows-4
                sm:gap-3
                sm:h-[65vh]
                md:grid-cols-6
                md:grid-rows-3
                md:gap-3
                md:h-[70vh]
                lg:grid-cols-6 
                lg:grid-rows-3
                lg:gap-4
                lg:h-[75vh]
                xl:h-[80vh]
                2xl:h-[85vh]
            ">
                <div className="
                    col-span-2 
                    row-span-2
                    sm:col-span-2
                    sm:row-span-2
                    md:col-span-3 
                    md:row-span-2
                    lg:col-span-3 
                    lg:row-span-2
                    rounded-xl sm:rounded-2xl 
                    overflow-hidden 
                    shadow-md 
                    transition-transform 
                    duration-300 
                    hover:scale-[1.02] 
                    hover:shadow-lg 
                    hover:shadow-gray-200
                    group
                ">
                    <img 
                        src={images[0]} 
                        alt="Featured Product 1"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>

                <div className="
                    col-span-2 
                    row-span-1
                    sm:col-span-2
                    sm:row-span-1
                    md:col-span-3 
                    md:row-span-1
                    lg:col-span-3 
                    lg:row-span-1
                    rounded-xl sm:rounded-2xl 
                    overflow-hidden 
                    shadow-md 
                    transition-transform 
                    duration-300 
                    hover:scale-[1.02] 
                    hover:shadow-lg 
                    hover:shadow-gray-200
                    group
                ">
                    <img 
                        src={images[1]} 
                        alt="Featured Product 2"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>

                <div className="
                    col-span-1 
                    row-span-1
                    sm:col-span-1
                    sm:row-span-1
                    md:col-span-1 
                    md:row-span-1
                    lg:col-span-1 
                    lg:row-span-1
                    rounded-lg sm:rounded-xl 
                    overflow-hidden 
                    shadow-md 
                    transition-transform 
                    duration-300 
                    hover:scale-[1.02] 
                    hover:shadow-lg 
                    hover:shadow-gray-200
                    group
                ">
                    <img 
                        src={images[2]} 
                        alt="Featured Product 3"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>

                <div className="
                    col-span-1 
                    row-span-2
                    sm:col-span-1
                    sm:row-span-2
                    md:col-span-2 
                    md:row-span-2
                    lg:col-span-2 
                    lg:row-span-2
                    rounded-lg sm:rounded-xl 
                    overflow-hidden 
                    shadow-md 
                    transition-transform 
                    duration-300 
                    hover:scale-[1.02] 
                    hover:shadow-lg 
                    hover:shadow-gray-200
                    group
                ">
                    <img 
                        src={images[3]} 
                        alt="Featured Product 4"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>

                <div className="
                    col-span-1 
                    row-span-1
                    sm:col-span-1
                    sm:row-span-1
                    md:col-span-1 
                    md:row-span-1
                    lg:col-span-1 
                    lg:row-span-1
                    rounded-lg sm:rounded-xl 
                    overflow-hidden 
                    shadow-md 
                    transition-transform 
                    duration-300 
                    hover:scale-[1.02] 
                    hover:shadow-lg 
                    hover:shadow-gray-200
                    group
                ">
                    <img 
                        src={images[4]} 
                        alt="Featured Product 5"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>

                <div className="
                    col-span-2 
                    row-span-1
                    sm:col-span-2
                    sm:row-span-1
                    md:col-span-3 
                    md:row-span-1
                    lg:col-span-3 
                    lg:row-span-1
                    rounded-xl sm:rounded-2xl 
                    overflow-hidden 
                    shadow-md 
                    transition-transform 
                    duration-300 
                    hover:scale-[1.02] 
                    hover:shadow-lg 
                    hover:shadow-gray-200
                    group
                ">
                    <img 
                        src={images[5]} 
                        alt="Featured Product 6"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                </div>
            </div>
        </div>
    );
}