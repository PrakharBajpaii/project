'use client';
import productData from '@/productsData';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const ProductDetails = () => {

  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(productData.find(obj => obj.id == id));
  console.log(product);

  return (

    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-#fff9c4-300" style={{ backgroundImage: `url('')` }}>
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img
              className="rounded-xl"
              src={product.image}
              alt="Features Image"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <span className="block text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                {product.brand}
              </span>
              <div className="space-y-6 md:space-y-20">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  {product.title}
                </h2>
                <p className="font-bold text-2xl text-black-500 dark:text-neutral-500">

                  MRP ₹{product.price}


                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow ">
                    <span className="text-sm  sm:text-base text-black-500 dark:text-neutral-500">
                      <span className="font-bold">Inclusive of all taxes</span>
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-black-500 dark:text-neutral-500">
                      Delivery by Tomorrow, 10:00 am - 10:00 pm
                    </span>
                  </div>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                    <svg
                      className="shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="grow">
                    <span className="text-sm sm:text-base text-black-500 dark:text-neutral-500">
                      Best deal
                    </span>
                  </div>
                </li>
              </ul>
              {/* End List */}

             <div><Link href={"/checkout/"+id} className='hover:bg-blue-800 bg-blue-500 m-4 px-5 py-2 rounded-xl text-white'>Buy Now</Link></div> 
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  )
}

export default ProductDetails;