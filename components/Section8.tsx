import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Section8() {
    return (
        <>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
          <div className="w-screen mt-20 lg:mt-0 lg:h-[1100px] flex flex-col items-center justify-center">
            <div className="lg:w-[1170px] md:w-[700px]  w-[350px] lg:h-[493px] gap-5 flex flex-col">
              
              <div className="new flex justify-between items-center ">
              <div className="flex md:w-[600px] h-[60px] justify-between ">
                <div className="text  flex md:justify-end items-center md:items-end text-xl">
                Wishlist (4)
                </div>
              </div>
                <div>
                <Button
            variant="outline"
            className=" md:w-[223px] md:h-[56px] font-medium"
          >
            Move All To Bag
          </Button>
                </div>
             
              </div>
    
              <div className="boxes lg:h-[350px] w-full mt-10 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 ">
                <div className="box md:h-full md:w-[270px] ">
                  <div className="img mb-3">
                    <Image
                      src={"/images/img34.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
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
                    <Image
                      src={"/images/img35.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">RGB liquid CPU Cooler</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$1960</span> 
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
                    <Image
                      src={"/images/img41.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">GP11 Shooter USB Gamepad</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$550</span> 
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
                    <Image
                      src={"/images/img36.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Quilted Satin Jacket</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$750</span> 
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
            <div className="mt-16 lg:w-[1170px] md:w-[700px]  w-[350px] lg:h-[493px] gap-5 flex flex-col">
            
              <div className="new flex justify-between items-center ">
              <div className="flex md:w-[600px] h-[60px] justify-between ">
              <div className="h-[40px] lg:w-[150px] flex lg:justify-center items-center gap-2 ">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div>
                  <h1 className="font-semibold text-[#DB4444]">Just For You</h1>
                </div>
              </div>
              </div>
                <div>
                <Button
            variant="outline"
            className=" md:w-[223px] md:h-[56px] font-medium"
          >
            See All
          </Button>
                </div>
             
              </div>
    
              <div className="boxes lg:h-[350px] w-full mt-10 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 ">
                <div className="box md:h-full md:w-[270px] ">
                  <div className="img mb-3">
                    <Image
                      src={"/images/img37.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">ASUS FHD Gaming Laptop</h1>
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
                    <Image
                      src={"/images/img38.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">IPS LCD Gaming Monitor</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$1160</span> 
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
                    <Image
                      src={"/images/img39.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">HAVIT HV-G92 Gamepad</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$560</span> 
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
                    <Image
                      src={"/images/img40.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">AK-900 Wired Keyboard</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$200</span> 
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
