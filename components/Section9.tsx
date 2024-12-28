// "use client";
// import React from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { useCart } from "./cartContext";

// export default function Section9() {
//   const { cartItems, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity } = useCart();
//   return (
//     <>
//       <link
//         href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
//         rel="stylesheet"
//       />
//       <div>
//         <div
//           className="w-screen  flex justify-center items-center
//      "
//         >
//           <div className="md:w-[1170px] w-[400px] flex flex-col  ">
//             <h1>Home / Cart</h1>
//             <div className="  w-full mt-20 ">
//               <div className=" md:ml-20 pl-8 md:pl-0 w-full ">
//                 <div className="w-full  h-[72px] ">
//                   <ul className="grid grid-cols-4">
//                     <li>Product</li>
//                     <li>Price</li>
//                     <li>Quantity</li>
//                     <li>Remove</li>
//                   </ul>
//                 </div>
//                 {cartItems.map((item) => (
//                   <div className="grid grid-cols-4 m-5 w-full justify-center items-center">
//                     <div className="img md:flex md:gap-5 gap-2 items-center">
//                       <Image
//                         className=""
//                         src={item.image}
//                         alt={item.title}
//                         width={54}
//                         height={54}
//                       ></Image>
//                       <p className="text-[12px] md:text-[16px]">{item.title}</p>
//                     </div>
//                     <p>${(item.price * item.quantity)}</p>
//                     <div className="quantity flex border w-[72px] h-[44px] border-black justify-center items-center gap-3">
//                       <p >{item.quantity}</p>
//                       <div className="icon grid items-start justify-center">
//                         <i className="bx bx-chevron-up cursor-pointer "
//                         onClick={()=> increaseQuantity(item.id)}
//                         ></i>
//                         <i className="bx 
//                         bx-chevron-down"
//                         onClick={()=> decreaseQuantity(item.id)}
//                         ></i>
//                       </div>
//                     </div>
//                     <div
//                       className="mt-4 w-25 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </div>
//                   </div>
                  
//                 ))}
//               </div>
//               <div className="flex md:w-full h-[72px] justify-between md:mt-10 items-center ">
//                 <Link href={"/home"}>
//                   <Button
//                     variant={"outline"}
//                     className=" md:w-[218px] md:h-[56px] font-medium border border-black"
//                   >
//                     Return To Shop
//                   </Button>
//                 </Link>
//                 <Link href={"/cart"}>
//                   <Button
//                     variant={"outline"}
//                     className="md:w-[218px] md:h-[56px] font-medium border border-black"
//                   >
//                     Update Cart
//                   </Button>
//                 </Link>
//               </div>
//             <div className="w-full lg:mt-32 mt-20  grid gap-5  lg:flex mr-10  lg:mr-0">
//               <div
//                 className="left justify-center items-center lg:items-start
//                 lg:w-2/3 flex gap-3 "
//               >
//                 <Input
//                   placeholder="Coupon Code"
//                   className=" lg:w-[300px] md:w-[260px]  lg:h-[56px] border border-black "
//                 />
//                 <Button
//                   variant="default"
//                   className="bg-[#DB4444]  lg:w-[234px]  lg:h-[56px] font-medium"
//                 >
//                   Apply Coupon
//                 </Button>
//               </div>
//               <div className="right flex justify-center items-center lg:w-1/3 m-5">
//                 {/* <Image
//                           className=''
//                                 src={"/images/img44.svg"}
//                                 alt="hero image"
//                                 width={470}
//                                 height={324}
//                               ></Image> */}
//                 <div className="w-[470px] h-[324px] border-2 border-neutral-800 p-10 ">
//                   <div className="flex flex-col gap-5">
//                     <h1 className="font-bold">Cart Total</h1>
//                     <div className="flex justify-between">
//                       <p className="">Subtotal</p>
//                       <p className="">${totalPrice().toFixed(2)}</p>
//                     </div>
//                     <div className="bg-neutral-900 w-[100%] h-[1px]"></div>
//                     <div className="flex justify-between">
//                       <p className="">Shipping</p>
//                       <p className="">Free</p>
//                     </div>
//                     <div className="bg-neutral-900 w-[100%] h-[1px]"></div>
//                     <div className="flex justify-between">
//                       <p className="">Total</p>
//                       <p className="">${totalPrice().toFixed(2)}</p>
//                     </div>
//                   </div>
//                   <div className="mt-5">
//                     <Button
//                       variant="default"
//                       className="bg-[#DB4444]  lg:w-[234px]  lg:h-[56px] font-medium"
//                     >
//                       Proceed to checkout
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCart } from "./cartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Section9() {
  const { cartItems, removeFromCart, totalPrice, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Shopping Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <i className='bx bx-cart text-6xl text-gray-300 mb-4'></i>
            <p className="text-xl text-gray-600">Your cart is empty</p>
            <Link href="/home">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-gray-100 font-semibold text-gray-700">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
              </div>
              {cartItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 items-center border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="col-span-2 flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.description.slice(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="text-gray-700">${item.price.toFixed(2)}</div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
                    >
                      <i className='bx bx-minus'></i>
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-150"
                    >
                      <i className='bx bx-plus'></i>
                    </button>
                  </div>
                  <div className="font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-150"
                    >
                      <i className='bx bx-trash text-xl'></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:flex lg:space-x-8">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Apply Coupon</h2>
                <div className="flex space-x-4">
                  <Input
                    placeholder="Enter coupon code"
                    className="flex-grow"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Apply Coupon
                  </Button>
                </div>
              </div>

              <motion.div 
                className="lg:w-1/3 bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${totalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-800 font-semibold">Total</span>
                      <span className="text-xl font-bold text-blue-600">${totalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Proceed to Checkout
                </Button>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/home">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}