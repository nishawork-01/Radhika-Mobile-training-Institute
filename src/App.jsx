import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import Services from './components/Services/Services'
import YouTube from './components/YouTube/YouTube'
import Map from './components/Map/Map'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <WhyChooseUs />
        <YouTube />
        <Gallery />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App