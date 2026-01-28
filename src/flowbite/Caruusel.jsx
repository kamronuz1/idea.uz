import { Carousel } from "flowbite-react";
import React from 'react'
export default function Caruusel() {
  return (
    <div className="h-[550px]  w-[700px] rounded-xl ">
      <Carousel>
    <img src="src\assets\img\bxTejbXR2fY4wu9LRweL.png"  className=" rounded-xl" alt="" />
    <img src="src\assets\img\MkXgnjZ9NOO7VcKKt27B.png " className="   rounded-xl" />
    <img src="src\assets\img\4AOXnjfonJGiDy9qLi7I.png"  className="   rounded-xl  h-[350px]"alt="" />
      </Carousel>
    </div>
  );
}
