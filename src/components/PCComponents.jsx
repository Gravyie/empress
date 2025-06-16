import ComponentModel from "./ComponentModel";

export default function PCComponents() {
    return (
        <div className="bg-white m-12 p-4 lg:p-6 min-h-screen rounded-2xl overflow-hidden shadow-md">
            <h2 className="text-black text-2xl text-center font-semibold mb-8">
                Get to know our Components:
            </h2>

            <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4">
                <div className="flex flex-col flex-row items-center justify-around gap-4">
                    <ComponentModel i={1} bgColor="bg-[#E6F4EA]"/>
                    <div className="bg-[#E6F4EA] p-4 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-green-200 w-1/2 md:w-1/3 h-full md:h-1/2 flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#76B900]">Nvidia GPUs</h2>
                            <p className="text-gray-500 text-sm sm:text-md">Visuals Beyond Imagination</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-row-reverse md:flex-row items-center justify-around gap-6">
                    <ComponentModel i={2} bgColor="bg-[#E5F0FB]"/>
                    <div className="bg-[#E5F0FB] p-4 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-blue-200 w-1/2 md:w-1/3 h-full md:h-1/2 flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#1E90FF]">CPU Coolers</h2>
                            <p className="text-gray-500 text-sm sm:text-md">Cool. Quiet. Consistent. Performance.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-row md:flex-row-reverse items-center justify-around gap-6">
                    <ComponentModel i={3} bgColor="bg-[#F1F1F3]"/>
                    <div className="bg-[#F1F1F3] p-4 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-slate-200 w-1/2 md:w-1/3 h-full md:h-1/2 flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#64748B]">PC Cases</h2>
                            <p className="text-gray-400 text-sm sm:text-md">Airflow. Armour. ts tuff.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-row-reverse items-center justify-around gap-6">
                    <ComponentModel i={4} bgColor="bg-[#F3EDFB]"/>
                    <div className="bg-[#F3EDFB] p-4 rounded-2xl text-gray-300 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-md hover:shadow-purple-200 w-1/2 md:w-1/3 h-full md:h-1/2 flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#5D3FA6]">RAMs</h2>
                            <p className="text-gray-400 text-sm sm:text-md">Power Your Multitasking Beast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
