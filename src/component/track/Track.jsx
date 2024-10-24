import React, { useContext } from 'react'
import myContext from '../../redux/data/myContext'

function Track() {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    const isDarkMode = mode == 'dark'
    return (
       <>
       <section className={`body-font ${isDarkMode ? 'bg-gray-800 text-white' : 'text-gray-600'}`}>
  <div className="mx-24 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">What Makes Us Special</h2>

      <p className={`mt-4 body-font ${isDarkMode ? 'bg-black-800 text-white' : 'text-black'}`}>
        At our store, we are committed to offering the best car parts that ensure your vehicle runs smoothly and safely. With a wide range of high-quality products, expert support, and a dedication to customer satisfaction, we provide a shopping experience like no other.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Quality Assurance</h2>
          <p className={`mt-1 text-sm ${isDarkMode ? ' text-white' : 'text-black'}`}>
            We source only the best-in-class parts from trusted manufacturers, ensuring every product meets the highest quality standards for durability and performance.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665-6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Expert Support</h2>
          <p className={`mt-1 text-sm ${isDarkMode ? ' text-white' : 'text-black'}`}>
            Our team of automotive experts is here to guide you every step of the way, ensuring you find the perfect part for your vehicle and providing professional installation advice.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665-6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Fast & Reliable Shipping</h2>
          <p className={`mt-1 text-sm ${isDarkMode ? ' text-white' : 'text-black'}`}>
            Enjoy fast, reliable, and secure shipping on all orders, so you can get your car back on the road without delay.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665-6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Affordable Pricing</h2>
          <p className={`mt-1 text-sm ${isDarkMode ? ' text-white' : 'text-black'}`}>
            Get the best deals on car parts without compromising on quality. Our competitive prices make maintaining your vehicle more accessible.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg  p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Customer Satisfaction</h2>
          <p className={`mt-1 text-sm ${isDarkMode ? ' text-white' : 'text-black'}`}>
            We prioritize our customers’ satisfaction by offering hassle-free returns, reliable support, and a secure shopping experience every time.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

       </>
    )
}

export default Track