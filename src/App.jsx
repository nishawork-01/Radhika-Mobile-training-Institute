import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import StatsCounters from './components/StatsCounters/StatsCounters'
import Courses from './components/Courses/Courses'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Testimonials from './components/Testimonials/Testimonials'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import Services from './components/Services/Services'
import YouTube from './components/YouTube/YouTube'
import Map from './components/Map/Map'
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <StatsCounters />
        <About />
        <Services />
        <Courses />
        <WhyChooseUs />
        <Testimonials />
        <YouTube />
        <Gallery />
        <Map />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App