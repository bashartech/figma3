"use client"
import React,{useState} from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link"

export default function Header2() {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="h-[76px] w-screen flex justify-center items-center">
        <div className="w-[1170px] h-[38px] flex justify-around md:justify-between items-center ">
          <div>
            <h1 className="font-bold text-[24px]">Exclusive</h1>
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-[48px]">
              <Link href={"/home"}>
              <li className="cursor-pointer">Home</li>
              </Link>
              <Link href={"/contact"}>
              <li className="cursor-pointer">Contact</li>
              </Link>
              <Link href={"/about"}>
              <li className="cursor-pointer">About</li>
              </Link>
              <Link href={"/signup"}>
              <li className="cursor-pointer">Sign Up</li>
              </Link>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Input
              placeholder="What are you looking for?"
              className=" hidden md:block"
            />
            <div className="hidden md:block">
              <i className="bx bx-search-alt-2 hidden md:block"></i>
            </div>
            <i className="bx bx-heart text-3xl text-"></i>
            <i className="bx bx-cart text-3xl text-"></i>
            <div className="lg:hidden">
              <i className="bx bx-menu cursor-pointer text-3xl" onClick={handleClick}></i>
            </div>
          </div>

        </div>
      </div>
      <div className={`bg-slate-100 lg:hidden font-bold text-[#DB4444]  z-0 w-screen ${isOpen ? "h-[250px] opacity-100": "h-0 opacity-0" } h-[250px]`}>
      <ul className="text-2xl grid gap-[20px] p-5  justify-center items-center">
      <Link href={"/home"}>
              <li onClick={handleClose} className="cursor-pointer text-[#DB4444] text-center">Home</li>
              </Link>
              <Link href={"/contact"}>
              <li onClick={handleClose} className="cursor-pointer text-[#DB4444] text-center">Contact</li>
              </Link>
              <Link href={"/about"}>
              <li onClick={handleClose} className="cursor-pointer text-[#DB4444] text-center">About</li>
              </Link>
              <Link href={"/signup"}>
              <li onClick={handleClose} className="cursor-pointer text-[#DB4444] text-center">Sign Up</li>
              </Link>
            </ul>

      </div>
    </>
  );
}
