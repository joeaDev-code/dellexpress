import React from 'react';
import FormContact from '../ContactUs/components/FormContact';
import Banner from './components/Banner';
import VMission from './components/VMission';
import OurStory from './components/OurStory';
import WhyChoose from './components/WhyChoose';

function Page() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-orange-500 via-orange-600 to-slate-700 text-white">
      <Banner />
      <OurStory />
      <VMission />
      <WhyChoose />
      <section className="px-8 py-12 bg-slate-800">
        <FormContact />
      </section>
    </div>
  );
}

export default Page;
