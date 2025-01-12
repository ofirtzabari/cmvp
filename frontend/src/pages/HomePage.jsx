import React from 'react'
import Header from '../components/Layout/Header.jsx'
import Hero from '../components/Route/Hero/Hero.jsx'

function HomePage() {
  return (
    <div className='w-full  bg-gray-700'>
        <Header activeHeading={1}/>
        <Hero/>
    </div>
  )
}

export default HomePage