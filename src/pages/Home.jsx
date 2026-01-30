import React from 'react'
import Hero from '../components/Hero'
import Hits from '../components/hits'
import Smartfonlar from '../components/Smartfonlar'
import Big from '../components/big'
import Uy from '../components/Uy'
import { Aksiyalar } from '../components/Aksiyaar'
import AboutIdea from '../components/AboutIdea'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Hits/>
        <Smartfonlar/>
        <Big/>
        <Uy/>
        <Aksiyalar/>
        <AboutIdea/>
    </div>
  )
}
