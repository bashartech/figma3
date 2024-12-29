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
    <Header1 />
    <Header2 />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="main my-8 md:my-14 w-full">
        <div className="grid md:grid-cols-5 gap-5 md:grid-rows-4">
          <div className="hidden md:block">
            <Image
              src={data.image}
              alt="Product thumbnail"
              width={170}
              height={138}
              className="object-cover rounded-lg"
            />
          </div>

          <div className="col-span-full md:col-span-2 md:row-span-5">
            <Image
              src={data.image}
              alt={data.title}
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="col-span-full md:col-span-2 md:row-span-5 flex flex-col justify-center items-start space-y-4">
            <h1 className="text-2xl md:text-3xl font-semibold">{data.title}</h1>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="bx bxs-star text-yellow-400"></i>
              ))}
              <span className="text-sm text-gray-600">(150 Reviews) | </span>
              <span className="text-sm text-green-500">In Stock</span>
            </div>
            <p className="text-2xl font-bold text-red-600">{data.price}</p>
            <p className="text-gray-700">{data.description}</p>
            <div className="w-full h-px bg-gray-200 my-4"></div>
            <div className="space-y-4 w-full">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-medium">Colors:</h2>
                <div className="flex space-x-2">
                  <button className="w-6 h-6 bg-blue-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                  <button className="w-6 h-6 bg-red-300 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"></button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-medium">Size:</h2>
                <div className="flex space-x-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="default"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200"
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
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <Image
                    src={data.image}
                    alt="Favorite"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}
