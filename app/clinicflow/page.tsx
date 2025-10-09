'use client'

import ClinicFlowNewHero from '@/components/ClinicFlowNewHero'
import ClinicFlowProblems from '@/components/ClinicFlowProblems'
import ClinicFlowFeatures from '@/components/ClinicFlowFeatures'
import ClinicFlowHowItWorks from '@/components/ClinicFlowHowItWorks'
import ClinicFlowTestimonials from '@/components/ClinicFlowTestimonials'
import ClinicFlowFinalCTA from '@/components/ClinicFlowFinalCTA'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ClinicFlowPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <ClinicFlowNewHero />
      <ClinicFlowProblems />
      <ClinicFlowFeatures />
      <ClinicFlowHowItWorks />
      <ClinicFlowTestimonials />
      <ClinicFlowFinalCTA />
      <Footer />
    </main>
  )
}