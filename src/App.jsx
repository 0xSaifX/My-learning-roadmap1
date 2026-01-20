import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <div>
      <SpeedInsights />
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What student says' />
        <Testimonial />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
