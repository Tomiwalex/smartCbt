import React from 'react'
import Hero from '../features/Hero/Hero'
import About from '../features/About/About'
import Benefits from '../features/Benefits/Benefits'
import Faqs from '../features/Faqs/Faqs'

function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <Benefits/>
     <Faqs defaultIndices={[0]}/>
    </>
  )
}

export default Home
