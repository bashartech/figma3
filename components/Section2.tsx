import React from 'react'
import Image from "next/image";

export default function Section2() {
  return (
    <div>
        <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className='lg:h-[500px] mt-20  lg:mt-0 flex  justify-center items-center'>
        <div className='lg:w-[1170px] lg:h-[313px] md:w-[700px]  w-[350px]'>
        <div className="h-[40px] lg:w-[150px] flex lg:justify-center items-center gap-2 ">
            <div className="w-[20px] h-full rounded bg-[#DB4444]"></div>
            <div>
              <h1 className="font-semibold text-[#DB4444]">Categories</h1>
            </div>
          </div>
          <div className="new flex mt-5 lg:mt-0 justify-between">
          <div className="flex md:w-[600px] h-[60px] justify-between ">
            <div className="text font-semibold flex lg:justify-end lg:items-end text-2xl md:text-4xl">
            Browse By Category
            </div>
            
          </div>
          <div className="icon w-[100px] md:mr-20">
          <i className='bx bx-left-arrow-circle text-4xl' ></i>
          <i className='bx bx-right-arrow-circle text-4xl' ></i>
          </div>
          </div>
        <div className="categories  md:mt-14 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
           <div className="box w-[170px] h-[145px] border-[1px] border-slate-400 flex flex-col justify-center items-center"
           >
           <Image
                  src={"/images/img12.svg"}
                  alt="hero image"
                  width={56}
                  height={56}
                ></Image>
                <p>Phones</p>
            </div> 
           <div className="box w-[170px] h-[145px] border-[1px] border-slate-400 flex flex-col justify-center items-center"
           >
           <Image
                  src={"/images/img7.svg"}
                  alt="hero image"
                  width={56}
                  height={56}
                ></Image>
                <p>Phones</p>
            </div> 
           <div className="box w-[170px] h-[145px] border-[1px] border-slate-400 flex flex-col justify-center items-center"
           >
           <Image
                  src={"/images/img8.svg"}
                  alt="hero image"
                  width={56}
                  height={56}
                ></Image>
                <p>Phones</p>
            </div> 
           <div className="box w-[170px] h-[145px] border-[1px] border-slate-400 flex flex-col justify-center items-center"
           >
           <Image
                  src={"/images/img9.svg"}
                  alt="hero image"
                  width={56}
                  height={56}
                ></Image>
                <p>Phones</p>
            </div> 
           <div className="box w-[170px] h-[145px] border-[1px] border-slate-400 flex flex-col justify-center items-center"
           >
           <Image
                  src={"/images/img10.svg"}
                  alt="hero image"
                  width={56}
                  height={56}
                ></Image>
                <p>Phones</p>
            </div> 
           <div className="box w-[170px] h-[145px] border-[1px] border-slate-400 flex flex-col justify-center items-center"
           >
           <Image
                  src={"/images/img11.svg"}
                  alt="hero image"
                  width={56}
                  height={56}
                ></Image>
                <p>Phones</p>
            </div> 
        </div>
        </div>
      </div>
    </div>
  )
}
