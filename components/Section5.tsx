"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { motion } from 'framer-motion'


interface ITodo {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Section5() {
  const [data, setData] = useState<ITodo[]>([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const parsedData = await fetch(
            process.env.API_URL ||"http://localhost:3000/api/productsItem"
             );
          if (!parsedData.ok) {
            throw new Error("Failed to fetch data");
          }
          const response: ITodo[] = await parsedData.json();
          setData(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [data])
  if (!Array.isArray(data) || data.length === 0) {
    return  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-red-50 to-white rounded-lg shadow-lg overflow-hidden">
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
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
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
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: index * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  </div>
    ;
  }
  if(loading){
    return(

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
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
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
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: index * 0.1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
    )
  }
    return (
        <>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
         
          {/* <div id='products' className="w-screen mt-20  flex flex-col justify-center items-center">
            <div className="lg:w-[1170px] w-[350px] md:w-[700px]  gap-5 flex flex-col">
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
    
              <div className="boxes
                
               w-full md:mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 justify-center">
                {
                  data.map((item,index)=>(
                    <div key={index}>
                <div className="box h-full m-5 w-[270px] " >
                  <div className="img mb-5 relative h-64 overflow-hidden group">
                    <Link href={`/home/${item.id}`}>
               <Image
                      src={item.image}
                      // src={"/images/img18.svg"}
                      alt="hero image"
                      width={270}
                      height={250}
                    ></Image>
                
               </Link>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">{item.title}</h1>
                    <div className=" flex gap-3">
                      <span className="text-[#DB4444]">{item.price}</span>
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
                     </div>
                  ))
                }

                 {/* <div className="box h-full w-[270px] ">
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
              
              
          </div> */}

<div id='products' className="w-full mt-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-1 h-8 bg-red-500 rounded"></div>
          <h2 className="text-xl font-semibold text-red-500">Our Products</h2>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Explore Our Products</h1>
          <div className="flex space-x-4">
            <button className="text-3xl text-gray-400 hover:text-gray-600 transition-colors" onClick={() => carousel.current?.scrollBy(-300, 0)}>
              <i className='bx bx-left-arrow-circle'></i>
            </button>
            <button className="text-3xl text-gray-400 hover:text-gray-600 transition-colors" onClick={() => carousel.current?.scrollBy(300, 0)}>
              <i className='bx bx-right-arrow-circle'></i>
            </button>
          </div>
        </div>

        <motion.div ref={carousel} className="overflow-hidden cursor-grab">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex space-x-6"
          >
            {data.map((item) => (
              <motion.div 
                key={item.id} 
                className="min-w-[270px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
              >
                <Link href={`/home/${item.id}`}>
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="fill"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <h3 className="font-medium text-lg mb-2 truncate">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-red-500 font-semibold">${item.price}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bx bxs-star text-yellow-400"></i>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">(88)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="#itemProduct">
            <Button
              variant="default"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
        </>
      );
}
