import React from 'react'
import Image from "next/image";

export default function Section16() {
  return (
    <div className='md:h-[400px] mb-10 md:mb-0 w-screen flex justify-center items-center'>
      <div className='md:w-[943px] p-10 mt-10 md:mt-0 md:p-0 md:h-[161px] md:flex grid gap-[88px] lg:gap-[88px] md:gap-[15px] '>
<div className="box gap-2 md:w-[289px] h-full flex flex-col justify-center items-center ">
    <Image
              src={"/images/img30.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
</div>
<div className="box gap-2 w-[249px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img31.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
</div>
<div className="box gap-2 w-[249px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img32.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>MONEY BACK GUARANTEE</h1>
            <p>We reurn money within 30 days</p>
</div>
      </div>
    </div>
  )
}