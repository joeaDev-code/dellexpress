import React from 'react'
import Banner from './components/Banner'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function page() {
  return (
    <div>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Ccm />
      <CallToAction />
    </div>
  )
}
import CallToAction from '../components/c-t-a'
import Ccm from '../components/Ccm'

export default page
