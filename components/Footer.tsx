import React from 'react'
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link"
export default function Footer() {
  return (
    <div className='bg-black'>
         <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
      <div className='w-screen  lg:h-[440px] bg-black flex justify-center items-center mb-20 lg:mb-0 '>
        <div className='lg:w-[1170px] w-[350px] md:w-[700px] lg:h-[236px] text-white lg:flex grid md:grid-cols-2 gap-10 p-10 lg:p-0'>
            <div className="row gap-4 flex flex-col  w-[217px] h-[188px] ">
                <h1 className='font-bold text-[24px]'>Exclusive</h1>
                <p className='text-[20px] font-semibold '>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="input flex justify-center items-center gap-2 ">
                <Input className='w-[180px]  h-[48px] ' placeholder='Enter your email'/>
                <i className='bx bxs-send text-2xl'  ></i>
                </div>

            </div>
            <div className="row gap-4 flex flex-col w-[217px] h-[188px]">
            <h1 className='font-bold text-[24px]'>Support</h1>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
            </div>

            <div className="row gap-4 flex flex-col w-[217px] h-[188px] mb-10 lg:mb-0">
            <h1 className='font-bold text-[24px]'>Account</h1>
            <ul className='flex flex-col gap-3'>
                <li>My Account</li>
                <Link href={"/login"}>
                <li>Login / Register</li>
              </Link>
              <Link href={"/cart"}>
                <li>Cart</li>
               </Link>
               <Link href={"#products"}>
                <li>Products</li>
                
              </Link>
              <Link href={"#itemProduct"}>
                <li>Shop</li>
                
              </Link>
            </ul>
            </div>

            <div className="row gap-4 flex flex-col w-[217px] h-[188px]">
            <h1 className='font-bold text-[24px]'>Quick Link</h1>
            <ul className='flex flex-col gap-3'>
            <Link href={"/cart"}>
                <li>Cart</li>
               </Link>
               <Link href={"/about"}>
                <li>About</li>
                
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
                
              </Link>
            </ul>
            </div>

            <div className="row gap-4 flex flex-col w-[217px] h-[188px]">
            <h1 className='font-bold text-[24px]'>Download App</h1>
            <p>Save $3 with App New User Only</p>
            <Image
              src={"/images/img33.svg"}
              alt="hero image"
              width={198}
              height={84}
            ></Image>
            <div className="link flex gap-[24px] ">
            <i className='bx bxl-facebook'></i>
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-linkedin'  ></i>

            </div>
            </div>
        </div>
      </div>
<p className='bg-black h-[50px] text-white text-center'>Copyright Rimel 2022. All right reserved</p>
    </div>
  )
}
