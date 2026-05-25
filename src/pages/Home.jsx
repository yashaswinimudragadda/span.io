//import React from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ServicesGrid from '../components/ServicesGrid';
import VoiceBanner from '../components/VoiceBanner';
const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased pb-12">
      {/* Top Navigation */}
      <Navbar />
      
      {/* Main Hero Showcase */}
      <HeroSection />

      {/*service cards sections*/}
      <ServicesGrid />

      {/*voice banner section */}
      <VoiceBanner/>

      {/* footer section */}
      <Footer />
    </div>
  )
}

export default Home