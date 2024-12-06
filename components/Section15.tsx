import React from 'react'
import Image from "next/image";

export default function Section15() {
  return (
    <div>
         <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
    <div className='md:h-[650px] mb-10 md:mb-0 w-screen flex justify-center items-center'>
      <div className='md:w-[1200px] p-10 mt-10 md:mt-0 md:p-0 md:h-[600px] md:flex grid gap-[88px] lg:gap-[30px] md:gap-[15px] '>

<div className="box gap-2 md:w-[370px] h-full flex flex-col justify-center items-center ">
    <Image
              src={"/images/img60.svg"}
              alt="hero image"
              width={370}
              height={430}
            ></Image>
            <h1 className=' font-bold mt-2'>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="icon w-full h-10 flex gap-3 justify-center items-center ">
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-instagram' ></i>
            <i className='bx bxl-linkedin'  ></i>

            </div>
</div>
<div className="box gap-2 w-[370px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img61.svg"}
              alt="hero image"
              width={370}
              height={430}
            ></Image>
            <h1 className=' font-bold mt-2'>2Emma Watson</h1>
            <p>Managing Director</p>
            <div className="icon w-full h-10 flex gap-3 justify-center items-center ">
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-instagram' ></i>
            <i className='bx bxl-linkedin'  ></i>

            </div>
</div>
<div className="box gap-2 w-[370px] h-full flex flex-col justify-center items-center">
    <Image
              src={"/images/img62.svg"}
              alt="hero image"
              width={370}
              height={430}
            ></Image>
            <h1 className=' font-bold mt-2'>Will Smith</h1>
            <p>Product Designer</p>
            <div className="icon w-full h-10 flex gap-3 justify-center items-center ">
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-instagram' ></i>
            <i className='bx bxl-linkedin'  ></i>

            </div>
</div>
      </div>
    </div>
    </div>
  )
}
