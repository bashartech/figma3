import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Section9() {
  return (
    <>
     <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
    <div>
    <div className="w-screen h-[1100px] flex justify-center items-center
     ">
      <div className='md:w-[1170px] w-[400px] h-[940px] flex flex-col  '>
        <h1>Home / Cart</h1>
        <div className='h-[436px]  w-full mt-20 '>
            <div className=' md:ml-20 pl-8 md:pl-0 w-full h-[356px] '>
            <div className='w-full  h-[72px] '>
                <ul className='grid grid-cols-4'>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
            </div>
            <div className='grid grid-cols-4 w-full h-[72px] justify-center items-center'>
                <div className="img md:flex md:gap-5 gap-2 items-center">
                <Image
                className=''
                      src={"/images/img42.svg"}
                      alt="hero image"
                      width={54}
                      height={54}
                    ></Image>
                    <p className='text-[12px] md:text-[16px]'>LCD Monitor</p>
                </div>
                <p>$650</p>
                <div className='quantity flex border w-[72px] h-[44px] border-black justify-center items-center gap-3'>
                    <p>01</p>
                    <div className="icon grid items-start justify-center">
                    <i className='bx bx-chevron-up'></i>
                    <i className='bx bx-chevron-down'  ></i>
                    </div>
                </div>
                <p>$650</p>
            </div>
            <div className='grid grid-cols-4  h-[72px] justify-center mt-10 items-center'>
                <div className="img md:flex gap-5 items-center">
                <Image
                className=''
                      src={"/images/img43.svg"}
                      alt="hero image"
                      width={54}
                      height={54}
                    ></Image>
                    <p className='text-[12px] md:text-[16px]'>H1 Gamepad</p>
                </div>
                <p>$550</p>
                <div className='quantity flex border w-[72px] h-[44px] border-black justify-center items-center gap-3'>
                    <p>02</p>
                    <div className="icon grid items-start justify-center">
                    <i className='bx bx-chevron-up'></i>
                    <i className='bx bx-chevron-down'  ></i>
                    </div>
                </div>
                <p>$1100</p>
            </div>
            </div>
            <div className='flex md:w-full h-[72px] justify-between md:mt-10 items-center '>
            <Link href={"/home"}>
            <Button
                variant={"outline"}
                className=" md:w-[218px] md:h-[56px] font-medium border border-black"
              >
                Return To Shop
              </Button>
                
               </Link>
               <Link href={"/cart"}>
              <Button
                variant={"outline"}
                className="md:w-[218px] md:h-[56px] font-medium border border-black"
              >
                Update Cart
              </Button>
                
               </Link>
            </div>

        </div>
<div className='w-full lg:mt-32 mt-20 lg:h-[324px] grid gap-5  lg:flex mr-10  lg:mr-0'>
    <div className="left justify-center items-center lg:items-start
      lg:w-2/3 flex gap-3 ">
    <Input placeholder='Coupon Code' className=' lg:w-[300px] md:w-[260px]  lg:h-[56px] border border-black '
      />
       <Button
                variant="default"
                className="bg-[#DB4444]  lg:w-[234px]  lg:h-[56px] font-medium"
              >
               Apply Coupon
              </Button>
    </div>
    <div className="right flex justify-center items-center lg:w-1/3">
    <Image
                className=''
                      src={"/images/img44.svg"}
                      alt="hero image"
                      width={470}
                      height={324}
                    ></Image>
    </div>
</div>
      </div>
    </div>
    </div>
    </>
  )
}
