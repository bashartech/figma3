"use client"
import Footer from '@/components/Footer'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { useCart } from '@/components/cartContext'
import { motion } from 'framer-motion'

interface ITodos {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }

  export default function Section10({params,}: {params: {item:string}}) {
    const {addToCart} = useCart()
    console.log(params.item)
      const [loading, setLoading] = useState(true);
      const [data, setData] = useState<ITodos | null>(null)
      useEffect(()=>{
        const fetchdata = async () => {
          setLoading(true);
          const parsedData = await fetch(`https://fakestoreapi.com/products/${params.item}`);
          const response:ITodos = await parsedData.json();
          setData(response);
          setLoading(false);
     
         };
        fetchdata();
      
      },[params.item])
      
       if(loading){
           return(
             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
             <div className="relative">
               <motion.div
                 className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               />
               <motion.div
                 className="w-40 h-40 border-r-4 border-l-4 border-purple-500 rounded-full absolute top-0 left-0"
                 animate={{ rotate: -360 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="absolute top-1/2  left-1/4 transform -translate-x-1/2 -translate-y-1/5 text-white text-2xl font-bold"
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
               >
                 Loading
               </motion.div>
             </div>
             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
               <motion.div 
                 className="flex space-x-2"
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5 }}
               >
                 {[0, 1, 2].map((index) => (
                   <motion.div
                     key={index}
                     className="w-3 h-3 bg-blue-500 rounded-full"
                     animate={{ y: [-5, 5] }}
                     transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: index * 0.1 }}
                   />
                 ))}
               </motion.div>
             </div>
           </div>
           )
         
      }
      if (!data) {
        return (
        <div>No product data available.</div>
        );
      }
    
  return (
    <div className='overflow-hidden'>
      <Header1/>
      <Header2/>
      <div>
      <div className="main mb-10 mt-14 w-full grid md:grid-cols-5 gap-5 md:grid-rows-4 ">
            <div className="md:flex hidden">
              <Image
                className=""
                src={data.image}
                alt="hero image"
                width={170}
                height={138}
              ></Image>
            </div>

            <div className="col-span-2 row-span-5 ">
              <Image
                className=""
                src={data.image}
                alt="hero image"
                width={500}
                height={600}
              ></Image>
            </div>
            <div className="col-span-2 row-span-5 flex flex-col justify-center md:items-start items-center">
              <h1 className="text-[24px] font-semibold ">
                {data.title}
              </h1>
              <div className="start flex gap-1  items-center">
                <i className="bx bxs-star text-[#FFAD33]"></i>
                <i className="bx bxs-star text-[#FFAD33]"></i>
                <i className="bx bxs-star text-[#FFAD33]"></i>
                <i className="bx bxs-star text-[#FFAD33]"></i>
                <i className="bx bxs-star text-[#FFAD33]"></i>
                <span>(150 Reciews) | </span>{" "}
                <span className="text-[#00FF66]">In Stock</span>
              </div>
              <p className="text-[24px]">{data.price}</p>
              <p className="mt-4">
                {data.description}
              </p>
              <div className="line mt-4 bg-black w-[400px] h-[1px] "></div>
              <div className="mt-10 ">
                <div className="colors flex gap-2">
                  <h1 className="text-[20px] font-medium">Colours:</h1>

                  <h1 className="w-[20px] h-[20px] bg-[#A0BCE0] border-[#000000] border-2  rounded-full"></h1>
                  <h1 className="w-[20px] h-[20px] bg-[#E07575] rounded-full"></h1>
                </div>
                <div className="mt-7 w-296px h-[32px] flex gap-4 ">
                  <p className="text-[20px] font-medium">Size:</p>
                  <div className="size flex gap-4">
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px] hover:bg-[#DB4444] ">
                      XS
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px] hover:bg-[#DB4444] ">
                      S
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] text-[#111] border-black border-[1px] hover:bg-[#DB4444]">
                      M
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px] hover:bg-[#DB4444] ">
                      L
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px] hover:bg-[#DB4444] ">
                      XL
                    </div>
                  </div>
                </div>
                <div className=" flex gap-4 mt-7">
                  
                  <Button
                    variant="default"
                    className="bg-[#DB4444] w-[165px] h-[44px] font-medium"
                    onClick={() => addToCart({
                    id: data.id,
                    title: data.title,
                    price: data.price,
                    quantity: 1,
                    image: data.image,
                    description: data.description,
                    
                    })}
                  >
                    Add to Cart
                  </Button>

                  <Image
                    className=""
                    src={data.image}
                    alt="hero image"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                
              </div>
            </div>
            
          </div>
      </div>
      <Footer/>
    </div>
  )
}
