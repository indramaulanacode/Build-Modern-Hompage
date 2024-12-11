import React from 'react'
import Brand from '../commponent/Brand'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'
import Options from '../Options/Optipns'
import Solutions from '../Solutions/Solutions'
import Strategy from '../Strategy/Strategy'
import ProjectViews from '../ProjectViews/ProjectViews'
import Navbar from '../commponent/Navbar'
import Choose from '../Choose/Choose'
import Explance from '../Explance/Explance'
import Testimonials from '../Testimonials/Testimonials'




const Hero = () => {
  return (
    <>
    <Navbar/>
    <Landing />
    <Brand />
    <Options />
    <Explance/>
    <Solutions/>
    <Strategy/>
    <ProjectViews/>
    <Testimonials />
    <Choose/>
    <Footer />
    </>

  )

}

export default Hero
