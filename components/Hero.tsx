import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="lg:h-[430px]  w-screen">
      <div className="h-full lg:flex w-full ">
        <div className="left lg:w-1/4 flex lg:justify-end items-center  lg:h-full ">
          <div className="sec lg:w-[217px] lg:h-[344px]">
            <ul className="lg:grid hidden  gap-3 mt-3">
              <Link href={"#itemProduct"}>
                <li className="flex justify-start items-center">
                  Womans Fashion
                  <i className="bx bx-chevron-right text-xl"></i>
                </li>
              </Link>
              <Link href={"#itemProduct"}>
                <li className="flex start items-center">
                  Mens Fashion
                  <i className="bx bx-chevron-right text-xl"></i>
                </li>
              </Link>
              <Link href={"#itemProduct"}>
                <li>Electronics</li>
              </Link>

              <Link href={"#itemProduct"}>
                <li>Home & Lifestyle</li>
              </Link>
              <Link href={"#itemProduct"}>
                <li>Medicine</li>
              </Link>

              <Link href={"#itemProduct"}>
                <li>Sports & Outdoor</li>
              </Link>

              <Link href={"#itemProduct"}>
                <li>Babys & Toys</li>
              </Link>

              <Link href={"#itemProduct"}>
                <li>Groceries & Pets</li>
              </Link>

              <Link href={"#itemProduct"}>
                <li>Health & Beauty</li>
              </Link>
            </ul>
            <ul className="flex w-screen gap-3 md:gap-14 md:text-lg lg:hidden border-2 p-2">
              
             <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Electronics</li>
             </Link>

              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Lifestyle</li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Medicine</li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Sports</li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Toys</li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Groceries </li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Beauty</li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Health </li>
              </Link>
              <Link href={"#itemProduct"}>
              <li className="cursor-pointer">Accesories</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="right  lg:w-3/4 flex justify-center items-center lg:h-full">
          <Image
            src={"/images/img1.svg"}
            alt="hero image"
            width={892}
            height={344}
          ></Image>
        </div>
      </div>
    </div>
  );
}
