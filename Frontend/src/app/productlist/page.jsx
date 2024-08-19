'use client';
import HeroSlider from '@/components/slide';
import productData from '@/productsData'
import Link from 'next/link';
import { GiShoppingBag } from "react-icons/gi";
import React, { useState } from 'react'


const productlist = () => {

  const [products, setProducts] = useState(productData);


  return (
    
    


    <div className='bg-cover mt-10  ' style={{ backgroundImage: `url('')` }}>

      <HeroSlider/>
      <div
        className="carousel relative container mx-auto"
        style={{ maxWidth: 1600 }}

        
        
      >
        
        <div className="carousel-inner relative overflow-hidden w-full">
          {/*Slide 1*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            defaultChecked="checked"
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-top"
              style={{
                backgroundImage:
                  'url("https://www.cnet.com/a/img/resize/41653b34dfe625a2379c34cf56765920224eab4e/hub/2022/01/07/fa883212-8dac-4e37-9459-11f0c0b5e59e/baby-clothes-hero-image.jpg?auto=webp&fit=crop&height=900&width=1200")'
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">
                   Clothes Combo
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 2*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0 bg-cover bg-right"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center  bg-left bg-cover"
              style={{
                backgroundImage:
                  "url(https://i0.wp.com/poppi.co.za/wp-content/uploads/2022/09/16442885764edc6f1362bfe44a93408a110fd8eb07.jpg?fit=768%2C1024&ssl=1 )"
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">Babies clothes </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/*Slide 3*/}
          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            className="carousel-item absolute opacity-0"
            style={{ height: "50vh" }}
          >
            <div
              className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://www.rootandsoil.in/cdn/shop/files/tender-coconut-absolute-bathing-bar-for-babies-from-0-months-100-g-root-and-soil-r.jpg?v=1711972652)"
              }}
            >
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">
                    Soap for Baby
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>
          {/* Add additional indicators for each slide*/}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >

              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >

              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >

              </label>
            </li>
          </ol>
        </div>
      </div>
      
      <>
      
        {/* Card Blog */}
        <div className="max-w-[105rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto " style={ { backgroundImage:  ` url('https://png.pngtree.com/background/20211215/original/pngtree-love-on-thanksgiving-mothers-day-hd-background-picture-image_1481878.jpg')` }}>
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-20">

            {
              products.map(product => (
                <div className="hover:shadow-black w-200% group flex flex-col  bg-gray-100 border-6 border-gray-300 shadow-lg rounded-3xl hover:bg-pink-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <img className='rounded-3xl h-60  object-contain' src={product.image} alt="" />
                  <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                      {product.brand}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                      {product.title}
                    </h3>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                     ₹ {product.price}
                    </h2>
                    
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      A baby baby care product
                    </p>
                  </div>
                  <div className="mt-0 flex border-t border-gray-200 divide-y divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                    <Link
                      className="w-full py-3 px-4  inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-3xl bg-blue-200 text-gray-800 shadow-sm hover:bg-blue-300 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href={'/productdetails/' + product.id}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </>

     

    </div>
  )
}

export default productlist