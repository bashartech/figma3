"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ITodo {
  id: number,
  title: string,
  description: string,
  image: string,
  // width: number,
  // height: number,
  thumbnail: string
  // rating: number,
  price: number
}
interface IProductResponse {
  products: ITodo[];
  total: number;
  skip: number;
  limit: number;
}

interface ITodos {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function Section10({params,}: {params: {item:string}}) {

  const [data, setData] = useState<ITodo[]>([])
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState<ITodos | null>(null)

useEffect(()=>{
  const fetchData = async () => {
    setLoading(true);
    const parsedData = await fetch("https://dummyjson.com/products");
    const response:IProductResponse = await parsedData.json();
    setData(response.products);
    setLoading(false);
  };
  fetchData();

},[setData])

useEffect(()=>{
  const fetchCartData = async () => {
    setLoading(true);
    const parsedData = await fetch(`https://fakestoreapi.com/products/${params.item}`);
    const response:ITodos = await parsedData.json();
    setCartData(response);
    setLoading(false);
  };
  fetchCartData();

},[params.item])
if (!cartData) {
  return (
  <div>No product data available.</div>
  );
}
if (loading) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-turquoise-100 to-lavender-200">
      loading...
    </div>
  );
}
  return (
    <div>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="w-screen  flex justify-center items-center">

        <div className="lg:w-[1170px] ">
          <div>
            <h1>Account / Gaming / Havic HV G-92 Gamepad</h1>
          </div>
          <div className="main mt-14 w-full lg:h-[600px] grid md:grid-cols-5 gap-5 md:grid-rows-4 ">
            <div className="md:flex hidden">
              <Image
                className=""
                src={cartData.image}
                // src={"/images/img46.svg"}
                alt="hero image"
                width={170}
                height={138}
              ></Image>
            </div>

            <div className="col-span-2 row-span-5 ">
              <Image
                className=""
                src={cartData.image}
                alt="hero image"
                width={500}
                height={600}
              ></Image>
            </div>
            <div className="col-span-2 row-span-5 flex flex-col justify-center md:items-start items-center">
              <h1 className="text-[24px] font-semibold ">
                {cartData.title}
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
              <p className="text-[24px]">{cartData.price}</p>
              <p className="mt-4">
                {cartData.description}
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
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px]">
                      XS
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px]">
                      S
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] text-[#FFFFFF] border-black border-[1px] bg-[#DB4444]">
                      M
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px]">
                      L
                    </div>
                    <div className="box flex justify-center items-center w-[32px] h-[32px] border-black border-[1px]">
                      XL
                    </div>
                  </div>
                </div>
                <div className=" flex gap-4 mt-7">
                  <Image
                    className=""
                    src={"/images/img50.svg"}
                    alt="hero image"
                    width={159}
                    height={44}
                  ></Image>
                  <Button
                    variant="default"
                    className="bg-[#DB4444] w-[165px] h-[44px] font-medium"
                  >
                    Buy Now
                  </Button>

                  <Image
                    className=""
                    src={"/images/img51.svg"}
                    alt="hero image"
                    width={40}
                    height={40}
                  ></Image>
                </div>
                <div className="mt-7">
                  <Image
                    className=""
                    src={"/images/img52.svg"}
                    alt="hero image"
                    width={399}
                    height={180}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <Image
                className=""
                src={"/images/img47.svg"}
                alt="hero image"
                width={170}
                height={138}
              ></Image>
            </div>
            <div className="hidden md:flex ">
              <Image
                className=""
                src={"/images/img48.svg"}
                alt="hero image"
                width={170}
                height={138}
              ></Image>
            </div>
            <div className=" hidden md:flex">
              <Image
                className=""
                src={"/images/img49.svg"}
                alt="hero image"
                width={170}
                height={138}
              ></Image>
            </div>
          </div>
          <div className="w-full mt-20 mb-10  flex flex-col items-center">
            <div className="lg:w-[1170px] md:w-[700px]  w-[350px]  gap-5 flex flex-col">
              <div className="h-[40px] lg:w-[150px] flex lg:justify-center items-center gap-2 ">
                <div className="w-[20px] h-[40px] rounded bg-[#DB4444]"></div>
                <div>
                  <h1 className="font-semibold text-[#DB4444]">Related Item</h1>
                </div>
              </div>

              <div className="boxes  w-full mt-10 grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 ">
                {
                  data.map((item, index)=>(
                    
                <div className="box md:h-full md:w-[270px] " key={index} >
                  <div className="img mb-3">
                    <Image
                      src={item.thumbnail}
                      alt="hero image"
                      width={300}
                      height={400}
                    ></Image>
                  </div>
                  <div className="text flex flex-col gap-2">
                    <h1 className="font-medium">{item.title}</h1>
                    <div className=" flex gap-5">
                      <span className="text-[#DB4444]">{item.price}</span>{" "}
                      <span className="line-through">{item.price}</span>
                    </div>
                    <div className="start flex gap-1 items-center">
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <i className="bx bxs-star text-[#FFAD33]"></i>
                      <span>{0}</span>
                    </div>
                  </div>
                </div>
                    
                  ))
                }
                {/* <div className="box h-full w-[270px] ">
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
                      <span className="text-[#DB4444]">$960</span>{" "}
                      <span className="line-through">$1160</span>
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
                      <span className="text-[#DB4444]">$370</span>{" "}
                      <span className="line-through">$400</span>
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
                      <span className="text-[#DB4444]">$160</span>{" "}
                      <span className="line-through">$170</span>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
