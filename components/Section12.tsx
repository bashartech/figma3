import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"


export default function Section11() {
  return (
    <div className=' overflow-hidden'>
      <div className='lg:h-[980px] w-screen flex justify-center items-center '>
        <div className='lg:h-[780px] lg:w-[1305px] lg:flex mb-10 lg:mb-0'>
            <div className="left lg:h-[781px] lg:w-2/3 ">
            <Image
                className=""
                src={"/images/img53.svg"}
                alt="hero image"
                width={805}
                height={781}
              ></Image>
            </div>
            <div className="right m-10 lg:m-0 mb-10 lg:w-1/3 flex justify-center items-center">
            <div className='w-[371px] md:h-[326px] flex flex-col gap-5 '>
                <h1 className='font-medium text-[36px] '>Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <div className=' my-[20px] flex flex-col gap-[15px]'>
                <input type="text" placeholder='Email or Phone Number' className='w-[370px] h-[32px] ' />
                <input type="text" className='w-[370px] h-[32px] ' placeholder='Password' />
                
                </div>
                <div className='flex justify-between items-center w-[371px] h-[56px] '>
                <Link href={"/home"}>
                <Button
                    variant="default"
                    className="bg-[#DB4444] w-[143px] h-[56px] font-medium"
                  >
                  Log In
                  </Button>
                </Link>
                  <div className=' '>
                  
                    <h1 className='text-[#DB4444]'>Forget Password?</h1> 
                  </div>
                 
                </div>

            </div>


            </div>

        </div>

      </div>
    </div>
  )
}
