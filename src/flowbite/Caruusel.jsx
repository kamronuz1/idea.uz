import { Carousel } from "flowbite-react";
import React from 'react'
export default function Caruusel() {
  return (
    <div className="h-[550px]  w-[700px] rounded-xl ">
      <Carousel>
    <img src="https://api.idea.uz/storage/offer-promotions/February2026/lwqd2ajZN5DhCJtCrPdT.png"  className=" rounded-xl h-[350px]" alt="IMg" />
    <img src="https://api.idea.uz/storage/promotions/February2026/cEGI7aJoLLBT2eVTovO9.png" className="   rounded-xl" />
    <img src="https://api.idea.uz/storage/promotions/October2025/tSHcjQ6KozQpFj8HJAxW.png"  className="   rounded-xl  h-[350px]"alt="" />
      </Carousel>
    </div>
  );
}
