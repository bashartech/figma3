import React from 'react'
import Image from "next/image";

export default function Section14() {
  return (
    <div className='md:h-[400px] mb-10 md:mb-0 w-screen flex justify-center items-center'>

      <div className='md:w-[1200px] p-10 mt-10 md:mt-0 md:p-0 md:h-[161px] md:flex grid gap-[88px] lg:gap-[88px] md:gap-[15px] '>
<div className="box  gap-2 border-black border-[1px] md:w-[289px] h-full flex flex-col justify-center items-center ">
    <Image
              src={"/images/img56.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>10.5k </h1>
            <p>Sallers active our site</p>
</div>
<div className="box gap-2 p-3 rounded bg-[#DB4444] text-[white] w-[249px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img57.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>33k</h1>
            <p>Mopnthly Produduct Sale</p>
</div>
<div className="box  gap-2 border-black border-[1px] w-[249px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img58.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>45.5k</h1>
            <p>Customer active in our site</p>
</div>
<div className="box  gap-2 border-black border-[1px] w-[249px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img59.svg"}
              alt="hero image"
              width={80}
              height={80}
            ></Image>
            <h1 className=' font-bold mt-2'>25k</h1>
            <p>Anual gross sale in our site</p>
</div>
      </div>
    </div>
  )
}