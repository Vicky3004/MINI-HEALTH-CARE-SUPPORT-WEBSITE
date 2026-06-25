import React from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RegistrationSection from './components/RegistrationSection'
import ChatAssistant from './components/ChatAssistant'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function App() {
    useEffect(() => {
        // Force scroll to top after everything renders
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0)
      }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <RegistrationSection />
      <ChatAssistant />
      <HowItWorks />
      <Footer />
    </>
  )
}