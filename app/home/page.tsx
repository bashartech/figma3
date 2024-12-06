import Footer from '@/components/Footer'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Hero from '@/components/Hero'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'
import React from 'react'

export default function HomePage() {
  return (
    <div className='overflow-hidden '>
      <Header1/>
      <Header2/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
  )
}
