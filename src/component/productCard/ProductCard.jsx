import React, { useContext } from 'react';
import myContext from '../../redux/data/myContext';

function ProductCard() {
    const context = useContext(myContext);
    const { mode } = context;
    const isDarkMode = mode === 'dark';

    return (
        <section className={`body-font ${isDarkMode ? 'bg-gray-800 text-white' : 'text-gray-600'}`}>
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className={`sm:text-3xl text-2xl font-medium title-font mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Items
                    </h1>
                   
                </div>

                <div className="flex flex-wrap -m-4">
                    {Array(4).fill().map((_, index) => (
                        <div key={index} className="p-4 md:w-1/4 ">
                            <div className={`h-full border-2 border-opacity-60 rounded-2xl overflow-hidden
                                ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:shadow-2xl`}>
                                <div className="flex justify-center cursor-pointer">
                                    <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-transform duration-300 ease-in-out" 
                                        src="https://dummyimage.com/720x400" alt="blog" />
                                </div>
                                <div className="p-5 border-t-2">
                                    <h2 className={`tracking-widest text-xs title-font font-medium ${isDarkMode ? 'text-white' : 'text-gray-400'} mb-1`}>
                                        E-Bharat
                                    </h2>
                                    <h1 className={`title-font text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                                        This is title
                                    </h1>
                                    <p className={`leading-relaxed mb-3 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>₹ 500</p>
                                    <div className="flex justify-center">
                                        <button 
                                            type="button" 
                                            className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm w-full py-2">
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
