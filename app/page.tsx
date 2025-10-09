'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import LogosCarousel from '@/components/LogosCarousel'
import AIInActionSection from '@/components/AIInActionSection'
import AboutFounderSection from '@/components/AboutFounderSection'
import CalendlySection from '@/components/CalendlySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogosCarousel />
      <ProductGrid />
      <AIInActionSection />
      <AboutFounderSection />
      <CalendlySection />
      <Footer />
    </main>
  )
}