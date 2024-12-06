import React from 'react'
import Image from "next/image"

export default function Hero() {
  return (
    <div className='lg:h-[430px]  w-screen'>
      <div className='h-full lg:flex w-full '>

        <div className="left lg:w-1/4 flex lg:justify-end items-center  lg:h-full ">
<div className="sec lg:w-[217px] lg:h-[344px]">
    <ul className='lg:grid hidden  gap-3 mt-3'>
        <li className='flex justify-start items-center'>Womans Fashion
        <i className='bx bx-chevron-right text-xl' ></i>
        </li>
        <li className='flex start items-center'>Mens Fashion
        <i className='bx bx-chevron-right text-xl' ></i>

        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Babys & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
    </ul>
    <ul className='flex w-screen gap-3 md:gap-14 md:text-lg lg:hidden border-2 p-2'>
    <li>Electronics</li>
        <li>Lifestyle</li>
        <li>Medicine</li>
        <li>Sports</li>
        <li>Toys</li>
        <li>Groceries </li>
        <li>Beauty</li> 
        <li>Health </li>
        <li>Accesories</li> 
    </ul>
</div>
        </div>
        <div className="right  lg:w-3/4 flex justify-center items-center lg:h-full">
    <Image src={"/images/img1.svg"} alt='hero image' width={892} height={344}></Image>
        </div>
      </div>
    </div>
  )
}
