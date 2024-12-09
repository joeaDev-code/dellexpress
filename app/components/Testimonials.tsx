'use client'

import Image from 'next/image'
import React from 'react'
import testimonials from '../utils/data/testimonials'


function Testimonials() {
  return (
    <div className='w-full min-h-screen flex flex-col gap-3 px-8 py-10 md:p-20'>
      <div>
            <h3 className='text-sm font-light text-orange-600'>Témoignages</h3>
            <h2 className='text-2xl text-zinc-800'>Vos <span className='text-orange-600'>témoignages</span>, notre fierté</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 bg-white shadow-lg rounded-lg flex flex-row-reverse items-center justify-center w-full h-60">
            <div className='flex flex-col'>
            {testimonial.image && (
              <Image
                src={testimonial.image}
                alt={`Photo de ${testimonial.name}`}
                className="w-16 h-16 rounded-full mx-auto"
              />
            )}
            <p className="mt-2 text-center text-sm text-orange-600">– {testimonial.name}</p>
            <p className="mt-2 text-center text-orange-600">{'⭐'.repeat(Math.round(testimonial.rating))}</p>
                
            </div>
            <div>
            <p className="text-sm text-zinc-700 font-extralight">{testimonial.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
