import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Section1() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="w-screen mt-10 md:mt-20 lg:mt-0 lg:h-[750px] flex flex-col justify-center items-center">
        <div className="lg:w-[1170px] w-[350px] md:w-[700px] lg:h-[493px] gap-5 flex flex-col">
          <div className="h-[40px]   md:w-[100px] flex md:justify-center items-center gap-2 ">
            <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
            <div>
              <h1 className="font-semibold text-[#DB4444]">Todays</h1>
            </div>
          </div>
          <div className="new flex justify-between ">
          <div className="flex md:w-[600px] h-[60px] justify-between ">
            <div className="text font-semibold flex md:justify-end lg:items-end text-3xl md:text-4xl">
              Flash Sales
            </div>
            <div className="hidden lg:flex  gap-3">
              <div>
                <p className="font-medium text-[12px]">Days</p>
                <h1 className="text-3xl font-bold">03</h1>
              </div>
              <div className="line text-[#DB4444] h-[full] flex justify-center items-center text-4xl rounded-full">
                :
              </div>
              <div>
                <p className="font-medium text-[12px]">Hours</p>
                <h1 className="text-3xl font-bold">23</h1>
              </div>
              <div className="line text-[#DB4444] h-[full] flex justify-center items-center text-4xl rounded-full">
                :
              </div>
              <div>
                <p className="font-medium text-[12px]">Minutes</p>
                <h1 className="text-3xl font-bold">19</h1>
              </div>
              <div className="line text-[#DB4444] h-[full] flex justify-center items-center text-4xl rounded-full">
                :
              </div>
              <div>
                <p className="font-medium text-[12px]">Seconds</p>
                <h1 className="text-3xl font-bold">56</h1>
              </div>
            </div>
          </div>
          <div className="icon md:w-[100px] lg:mr-20">
          <i className='bx bx-left-arrow-circle text-4xl' ></i>
          <i className='bx bx-right-arrow-circle text-4xl' ></i>
          </div>
          </div>

          <div className="boxes lg:h-[350px] lg:w-full mt-10 gap-10 lg:gap-0 grid lg:grid-cols-4 md:grid-cols-2 justify-center ">
            <div className="box h-full w-[270px] ">
              <div className="img mb-5">
                <Link href={"/cart"}>
               <Image
                  src={"/images/img2.svg"}
                  alt="hero image"
                  width={270}
                  height={250}
                ></Image>
                
               </Link>
              </div>
              <div className="text flex flex-col gap-2">
                <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
                <div className=" flex gap-5">
                  <span className="text-[#DB4444]">$120</span> <span className="line-through">$160</span>
                </div>
                <div className="start flex gap-1  items-center">
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <span>(88)</span>
                </div>
              </div>
            </div>
            <div className="box h-full w-[270px] ">
              <div className="img mb-5">
                <Link href={"/cart"}>
                
               <Image
                  src={"/images/img3.svg"}
                  alt="hero image"
                  width={270}
                  height={250}
                ></Image>
               </Link>
              </div>
              <div className="text flex flex-col gap-2">
                <h1 className="font-medium">AK-900 Wired Keyboard</h1>
                <div className=" flex gap-5">
                  <span className="text-[#DB4444]">$960</span> <span className="line-through">$1160</span>
                </div>
                <div className="start flex gap-1 items-center">
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <span>(75)</span>
                </div>
              </div>
            </div>
            <div className="box h-full w-[270px] ">
              <div className="img mb-5">
                <Link href={"/cart"}>
               <Image
                  src={"/images/img4.svg"}
                  alt="hero image"
                  width={270}
                  height={250}
                ></Image>
                
               </Link>
              </div>
              <div className="text flex flex-col gap-2">
                <h1 className="font-medium">IPS LCD Gaming Monitor</h1>
                <div className=" flex gap-5">
                  <span className="text-[#DB4444]">$370</span> <span className="line-through">$400</span>
                </div>
                <div className="start flex gap-1 items-center">
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <span>(99)</span>
                </div>
              </div>
            </div>
            <div className="box h-full w-[270px] ">
              <div className="img mb-5">
                <Link href={"/cart"}>
               <Image
                  src={"/images/img5.svg"}
                  alt="hero image"
                  width={270}
                  height={250}
                ></Image>
                
               </Link>
              </div>
              <div className="text flex flex-col gap-2">
                <h1 className="font-medium">IPS LCD Gaming Monitor</h1>
                <div className=" flex gap-5">
                  <span className="text-[#DB4444]">$375</span> <span className="line-through">$1160</span>
                </div>
                <div className="start flex gap-1 items-center">
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <i className="bx bxs-star text-[#FFAD33]"></i>
                  <span>(99)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn mt-20">
        <Link href={"#products"}>
          <Button
            variant="default"
            className="bg-[#DB4444] w-[234px] h-[56px] font-medium"
          >
            View All Products
          </Button>
              
              </Link>
        </div>
      </div>
    </>
  );
}
