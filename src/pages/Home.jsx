import React from 'react'
import Hero from '../components/Hero'
import Smartfonlar from '../components/Smartfonlar'
import Big from '../components/big'
import Uy from '../components/Uy'
import { Aksiyalar } from '../components/Aksiyaar'
import AboutIdea from '../components/AboutIdea'
import SizUchunMaxsus from '../components/SizUchunMaxsus'
import Category from '../components/Category'
import Hits from '../components/Hits'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Hits/>
        <Smartfonlar/>
        <Big/>
        <Uy/>
        <Aksiyalar/>
        <SizUchunMaxsus/>
        <AboutIdea/>
        <Category/>
    </div>
  )
}
