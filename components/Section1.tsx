"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

// interface ITodo {
//   id: number,
//   title: string,
//   description: string,
//   image: string,
//   // width: number,
//   // height: number,
//   thumbnail: string
//   // rating: number,
//   price: number
// }
// interface IProductResponse {
//   products: ITodo[];
//   total: number;
//   skip: number;
//   limit: number;
// }

interface ITodo {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Section1() {
  const [data, setData] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const parsedData = await fetch("https://fakestoreapi.com/products");
      const response: ITodo[] = await parsedData.json();
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, [setData]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 bg-gradient-to-br from-red-50 to-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-40 h-40">
          <motion.div
            className="absolute inset-0 border-4 border-red-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "40%", "50%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-red-300 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              borderRadius: ["40%", "50%", "40%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500"
            >
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </motion.svg>
          </motion.div>
        </div>
        <div className="ml-4">
          <motion.div
            className="text-red-500 text-2xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Loading
          </motion.div>
          <motion.div
            className="flex space-x-1 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-red-400 rounded-full"
                animate={{ y: [-3, 3] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.1,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div
        id="itemProduct"
        className="w-screen mt-10 md:mt-20 lg:mt-0  flex flex-col justify-center items-center"
      >
        <div className="lg:w-[1170px] w-[350px] md:w-[700px]  gap-5 flex flex-col">
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
              <i className="bx bx-left-arrow-circle text-4xl"></i>
              <i className="bx bx-right-arrow-circle text-4xl"></i>
            </div>
          </div>

          <div className="boxes  lg:w-full mt-10 gap-10 lg:gap-0 grid lg:grid-cols-4 md:grid-cols-2 justify-center ">
            {data.map((items, index) => (
              <div className="box h-full w-[270px] " key={index}>
                <div className="img mb-5">
                  <Link href={`/home/${items.id}`}>
                    <Image
              
              //  className=" w-full h-full object-cover "
               className="transition-transform duration-300 group-hover:scale-110"
                  src={items.image}
                  alt={items.title}
                  width={270}
                  height={250}
                   
                ></Image>
                    {/* <Image
                      src={items.image}
                      alt={items.title}
                      // layout="fill"
                      // objectFit="fill"
                      width={270}
                      height={250}
                      className="transition-transform duration-300 group-hover:scale-110"
                    ></Image> */}
                  </Link>
                </div>
                <div className="text flex flex-col gap-2">
                  <h1 className="font-medium">{items.title}</h1>
                  <div className=" flex gap-5">
                    <span className="text-[#DB4444]">{items.price}</span>{" "}
                    <span className="line-through">$160</span>
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
            ))}
            {/* <div className="box h-full w-[270px] ">
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
            </div> */}
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
