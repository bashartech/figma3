import React from 'react'
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <div className='lg:h-[760px] w-screen p-5 lg:p-0 lg:flex justify-center items-center '>
        <div className='lg:h-[700px] lg:w-[1200px] lg:flex '>
            {/* <div className='lg:flex hidden gap-2 h-[20px]'>
            <h1>Home/ 
            </h1>
                <span className='font-bold'>About</span>
            </div> */}
            <div className="left lg:w-1/2 flex flex-col  justify-center gap-10
            ">
                <h1 className='text-[54px] font-bold'>Our Story</h1>
                <div className='lg:w-[500px]'>
                <p>Launced in 2015, Exclusive is South Asias premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <br />
                <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>

            </div>
            <div className="right mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center">
            <Image
                className=""
                src={"/images/img55.svg"}
                alt="hero image"
                width={805}
                height={609}
              ></Image>
            </div>

        </div>

      </div>
    </div>
  )
}
