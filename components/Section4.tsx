import React from "react";
import Image from "next/image";

export default function Section4() {
  return (
    <div className="lg:h-[600px] mt-10 lg:mt-0 w-screen flex justify-center items-center">
      <div className=" lg:w-[1170px] lg:h-[500px]">
        <Image
          src={"/images/img17.svg"}
          alt="hero image"
          width={1170}
          height={500}
        ></Image>
      </div>
    </div>
  );
}
