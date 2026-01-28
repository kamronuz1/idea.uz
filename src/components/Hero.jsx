import { Carousel } from 'flowbite-react'
import React from 'react'
import Caruusel from '../flowbite/Caruusel'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className=' bg-stone-100 w-full    h-[400px]    py-9  px-16   flex items-center  gap-5  '>
    <Caruusel/>
    <Link to={"rasrochka"}><img src="src\assets\img\6JERcS16oC8kTl2V3aHe.png" alt="" className=' h-[350px] rounded-xl' /></Link>
    <Link to={"rasrochka2"}><img src="src\assets\img\xJ8zBBtLft4ETvwbfU9j.png" alt=""  className=' h-[350px]  rounded-xl' /></Link>
    </div>
  )
}
