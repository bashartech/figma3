import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Section5() {
    return (
        <>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
          <div id='products' className="w-screen mt-20 lg:h-[1100px] flex flex-col justify-center items-center">
            <div className="lg:w-[1170px] w-[350px] md:w-[700px] lg:h-[1000px] gap-5 flex flex-col">
              <div className="h-[40px] lg:w-[150px] flex lg:justify-center items-center gap-2 ">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div>
                  <h1 className="font-semibold text-[#DB4444]">Our Products</h1>
                </div>
              </div>
              <div className="new flex justify-between">
              <div className="flex md:w-[600px] h-[60px] justify-between ">
                <div className="text font-semibold flex justify-end lg:items-end text-2xl md:text-4xl">
                Explore Our Products
                </div>
                
              </div>
              <div className="icon md:w-[100px] lg:mr-20">
              <i className='bx bx-left-arrow-circle text-4xl' ></i>
              <i className='bx bx-right-arrow-circle text-4xl' ></i>
              </div>
              </div>
    
              <div className="boxes lg:h-[350px] w-full md:mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 justify-center">
                <div className="box h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img18.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Breed Dry Dog Food</h1>
                    <div className=" flex gap-3">
                      <span className="text-[#DB4444]">$100</span>
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
                </div>
                <div className="box h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img19.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">CANON EOS DSLR Camera</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$360</span> 
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
                </div>
                <div className="box h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img20.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">ASUS FHD Gaming Laptop</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$700</span> 
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
                </div>
                <div className="box h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img21.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Curology Product Set </h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$500</span> 
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
                </div>
                <div className="box mt-10 h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img22.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Kids Electric Car</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$960</span> 
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
                </div>
                <div className="box mt-10 h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img23.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Jr. Zoom Soccer Cleats</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$1160</span> 
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
                </div>
                <div className="box mt-10 h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img24.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">GP11 Shooter USB Gamepad</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$660</span> 
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
                <div className="box mt-10 h-full w-[270px] ">
                  <div className="img mb-5">
                    <Link href={"/cart"}>
               <Image
                      src={"/images/img25.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">Quilted Satin Jacket</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">$660</span> 
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
            </div>
            <div className="btn mt-10 lg:mt-0 ">
            <Link href={"/wishlist"}>
              <Button
                variant="default"
                className="bg-[#DB4444] md:w-[234px] md:h-[56px] font-medium"
              >
                View All Products
              </Button>
              </Link>
            </div>
              
              
          </div>
        </>
      );
}
