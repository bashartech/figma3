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
            <div className='w-[371px] md:h-[530px] flex flex-col gap-5 '>
                <h1 className='font-medium text-[36px] '>Create an account</h1>
                <p>Enter your details below</p>
                <div className=' my-[20px] flex flex-col gap-[15px]'>
                <input type="text" placeholder='Name' className='w-[370px] h-[32px] ' />
                <input type="text" className='w-[370px] h-[32px] ' placeholder='Email or Phone Number' />
                <input type="text" className='w-[370px] h-[32px] ' placeholder='Password' />
                </div>
                <div className='flex flex-col gap-3'>
                <Link href={"/login"}>
                <Button
                    variant="default"
                    className="bg-[#DB4444] w-[371px] h-[56px] font-medium"
                  >
                  Create Account
                  </Button>
              </Link>
                  <div className='w-[371px] h-[56px] flex justify-center items-center gap-3 border-zinc-600 border-2 '>
                  <Image
                className=""
                src={"/images/img54.svg"}
                alt="hero image"
                width={24}
                height={24}
              ></Image>
                    <h1 className=''>Sign up with Google</h1> 
                  </div>
                  <div className='mt-10 flex gap-3 justify-center items-center'>
                    <span >Already have account?</span> 
                    <Link href={"/login"}>
                    <span>Log in</span>
                
              </Link>
                  </div>
                </div>

            </div>


            </div>

        </div>

      </div>
    </div>
  )
}
