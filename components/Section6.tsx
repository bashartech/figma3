import React from "react";
import Image from "next/image";

export default function Section6() {
  return (
    <div>
      <div className="lg:h-[800px] mt-20 lg:mt-0 flex  justify-center items-center">
        <div className="lg:w-[1170px] w-[350px] md:w-[700px] lg:h-[768px]">
          <div className="h-[40px] lg:w-[150px] flex  items-center gap-2 ">
            <div className="w-[20px] h-full rounded bg-[#DB4444]"></div>
            <div>
              <h1 className="font-semibold text-[#DB4444]">Featured</h1>
            </div>
          </div>
          <div className="new flex justify-between">
            <div className="flex mb-10 md:w-[600px] h-[60px] justify-between ">
              <div className="text font-semibold flex justify-end items-end text-4xl">
                New Arrival
              </div>
            </div>
          </div>

          <div className="images w-full lg:h-[600px] grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-2 ">
            <div className="col-span-2 row-span-2 ">
            <Image
            className="md:w-[700px] lg:w-[570px]"
              src={"/images/img26.svg"}
              alt="hero image"
              width={570}
              height={600}
            ></Image>
            </div>
            <div className="col-span-2 row-span-1 ">
            <Image
            className="md:w-[700px] lg:w-[570px]"
              src={"/images/img27.svg"}
              alt="hero image"
              width={570}
              height={284}
            ></Image>
            </div>
            <div className="">
            <Image
            className="md:w-[350px] lg:w-[270px]"
              src={"/images/img28.svg"}
              alt="hero image"
              width={270}
              height={284}
            ></Image>
            </div>
            <div className=" ">
            <Image
            className="md:w-[350px] lg:w-[270px]"
              src={"/images/img29.svg"}
              alt="hero image"
              width={270}
              height={284}
            ></Image>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
