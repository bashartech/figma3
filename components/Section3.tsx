import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
export default function Section3() {
    return (
        <>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
          <div className="w-screen mt-20 lg:mt-0 lg:h-[600px] flex flex-col items-center">
            <div className="lg:w-[1170px] md:w-[700px]  w-[350px] lg:h-[493px] gap-5 flex flex-col">
              <div className="h-[40px] lg:w-[150px] flex lg:justify-center items-center gap-2 ">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div>
                  <h1 className="font-semibold text-[#DB4444]">This Month</h1>
                </div>
              </div>
              <div className="new flex justify-between items-center ">
              <div className="flex md:w-[600px] h-[60px] justify-between ">
                <div className="text font-semibold flex md:justify-end items-center md:items-end text-2xl md:text-4xl">
                Best Selling Products
                </div>
              </div>
                <div>
                <Link href={"#products"}>
                <Button
            variant="default"
            className="bg-[#DB4444] md:w-[159px] md:h-[56px] font-medium"
          >
            View All
          </Button>
              
              </Link>
                </div>
             
              </div>
    
              <div className="boxes lg:h-[350px] w-full mt-10 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 ">
                <div className="box md:h-full md:w-[270px] ">
                  <div className="img mb-3">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img13.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">The north coat</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$260</span> <span className="line-through">$360</span>
                    </div>
                    <div className="start flex gap-1 items-center">
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <span>(65)</span>
                    </div>
                  </div>
                </div>
                <div className="box h-full w-[270px] ">
                  <div className="img mb-3">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img14.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Gucci duffle bag</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$960</span> <span className="line-through">$1160</span>
                    </div>
                    <div className="start flex gap-1 items-center">
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <span>(65)</span>
                    </div>
                  </div>
                </div>
                <div className="box h-full w-[270px] ">
                  <div className="img mb-3">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img15.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">RGB liquid CPU Cooler</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$160</span> <span className="line-through">$170</span>
                    </div>
                    <div className="start flex gap-1 items-center">
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <span>(65)</span>
                    </div>
                  </div>
                </div>
                <div className="box h-full w-[270px] ">
                  <div className="img mb-3">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img16.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Small BookSelf</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$360</span> <span className="line-through">$1160</span>
                    </div>
                    <div className="start flex gap-1 items-center">
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <span>(65)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
