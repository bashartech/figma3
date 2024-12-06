import React from 'react'

export default function Header1() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    <div className='w-screen h-[48px] md:block hidden bg-[#000000] text-white'>
        <div className=' h-full flex justify-around items-center gap-2 '>
<div></div>
            <div className='flex gap-2'>
        <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
        <span className='hover:font-semibold cursor-pointer'>ShopNow</span>
            </div>

     <div className='flex justify-center items-center '>
        <h1>English</h1>
        <i className='bx bx-chevron-down text-white'></i>
     </div>

        </div>
    </div>
    </>
  )
}
