"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
export default function Section17() {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  
    const sanitizeInput = (input: string) => input.trim();

    const validateEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    const validatePhone = (phone: string) =>
      /^[0-9]{10,15}$/.test(phone);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: sanitizeInput(value),
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: any = {};
  
      if (!formData.name) newErrors.name = "Name is required.";
      if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";
      if (!validatePhone(formData.phone)) newErrors.phone = "Invalid phone number.";
      if (!formData.message) newErrors.message = "Message is required.";
  
      setErrors(newErrors);
  
      if (Object.keys(newErrors).length === 0) {
        console.log("Form submitted successfully:", formData); // Debug
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      }
    };
  return (
    // <div className='overflow-hidden'>
    //   <div className='w-screen lg:h-[850px] flex justify-center items-center '>
    //     <div className='md:w-[1300px] p-10 lg:h-[700px] lg:flex grid gap-10 lg:gap-0'>
    //     <div className='left flex  justify-center items-center lg:w-1/3'>
    //     <div className=' lg:w-[270px] grid lg:grid md:flex gap-2 md:gap-16 lg:gap-2 lg:h-[457px] '>
    //         <div className='flex flex-col gap-4'>
    //         <div className="call  items-center flex gap-4">
    //         <Image
    //         className='rounded-full'
    //           src={"/images/img63.svg"}
    //           alt="hero image"
    //           width={40}
    //           height={40}
    //         ></Image>
    //             <h1 className='font-medium'>Call To Us</h1>
    //         </div>
    //         <p>We are available 24/7, 7 days a week.</p>
    //         <p>Phone: +8801611112222</p>
    //         </div>
    //     <div className="line md:hidden lg:flex my-5 bg-[black] w-[270px] h-[1px] "></div>
    //         <div className='flex flex-col gap-4'>
    //         <div className="call items-center flex gap-4">
    //         <Image
    //         className='rounded-full'
    //           src={"/images/img64.svg"}
    //           alt="hero image"
    //           width={40}
    //           height={40}
    //         ></Image>
    //             <h1 className='font-medium'>Write To US</h1>
    //         </div> 
    //         <div className=' flex flex-col gap-[16px] '>
    //         <p>Fill out our form and we will contact you within 24 hours.</p>
    //         <p>Emails: customer@exclusive.com</p>
    //         <p>Emails: support@exclusive.com</p>
    //         </div>
    //         </div>
        

    //     </div>

    //     </div>
    //     <div className="right w-[350px] md:w-[800px] lg:w-2/3 flex justify-center items-center">
    //     <div className='lg:w-[800px] w-[350px] md:w-[800px]  flex flex-col gap-14 lg:h-[457px] '>
    //         <div className='md:flex grid  gap-3'>
    //             <input type="text"
    //             className=' md:w-[235px] h-[50px] pl-2  bg-[#F5F5F5] ' placeholder='Your Name' />
    //             <input type="text"
    //             className=' md:w-[235px] h-[50px]  pl-2 bg-[#F5F5F5] ' placeholder='Your Email' />
    //             <input type="text"
    //             className=' md:w-[235px] h-[50px] pl-2  bg-[#F5F5F5] ' placeholder='Your Phone' />
    //         </div>
    //         <div>
               
    //             <textarea className='md:w-[737px] w-[350px] bg-[#F5F5F5] h-[207px] p-3
    //             ' placeholder='Your Massage'></textarea>
    //         </div>
    //         <div className=' flex justify-end items-end'>
    //         <Link href={"/home"}>
    //         <Button
    //             variant="default"
    //             className="bg-[#DB4444] lg:w-[215px] lg:h-[56px] font-medium"
    //           >
    //             Send Massage
    //           </Button>
                
    //            </Link>
    //         </div>

    //     </div>

    //     </div>
    //     </div>

    //   </div>
    // </div>
    
<div className="overflow-hidden">
  <div className="w-screen lg:h-[850px] flex justify-center items-center p-4">
    <div className="md:w-[1300px] p-10 lg:h-[700px] lg:flex grid gap-10 lg:gap-0">
      <div className="left flex justify-center items-center lg:w-1/3">
        <div className="lg:w-[270px] grid lg:grid md:flex gap-2 md:gap-16 lg:gap-2 lg:h-[457px]">
          <div className="flex flex-col gap-4">
            <div className="call items-center flex gap-4">
              <Image
                className="rounded-full"
                src={"/images/img63.svg"}
                alt="hero image"
                width={40}
                height={40}
              ></Image>
              <h1 className="font-medium">Call To Us</h1>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="line md:hidden lg:flex my-5 bg-[black] w-[270px] h-[1px]"></div>
          <div className="flex flex-col gap-4">
            <div className="call items-center flex gap-4">
              <Image
                className="rounded-full"
                src={"/images/img64.svg"}
                alt="hero image"
                width={40}
                height={40}
              ></Image>
              <h1 className="font-medium">Write To Us</h1>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-[350px] md:w-[800px] lg:w-2/3 flex justify-center items-center">
        <form
          className="lg:w-[800px] w-[350px] md:w-[800px] flex flex-col gap-6 lg:h-[457px]"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const name = formData.get("name") as string;
            const email = formData.get("email") as string;
            const phone = formData.get("phone") as string;
            const message = formData.get("message") as string;

            if (!name || !email || !phone) {
              alert("Please fill in all required fields.");
              return;
            }

            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
              alert("Please enter a valid email address.");
              return;
            }

            console.log({ name, email, phone, message });
            alert("Form submitted successfully!");
          }}
        >
          <div className="md:flex grid gap-3">
            <input
              type="text"
              name="name"
              className="md:w-[235px] h-[50px] pl-2 bg-[#F5F5F5]"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="md:w-[235px] h-[50px] pl-2 bg-[#F5F5F5]"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="phone"
              className="md:w-[235px] h-[50px] pl-2 bg-[#F5F5F5]"
              placeholder="Your Phone"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              className="md:w-[737px] w-[350px] bg-[#F5F5F5] h-[207px] p-3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex justify-end items-end">
            <button
              type="submit"
              className="bg-[#DB4444] w-[215px] h-[56px] font-medium text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
