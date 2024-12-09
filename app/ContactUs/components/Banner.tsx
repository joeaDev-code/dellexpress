'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '@/app/assets/images/contact/banner.png'

function Banner() {
  return (
    <div className='relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center'>
        <div className=' w-96 h-96 md:h-[80vh] flex flex-col items-center justify-center bg-orange-600'> 
          <h2 className='text-4xl text-zinc-50'> Nous contacter </h2>
          <p className='flex flex-row gap-2 items-center justify-center'>
            <Link  href='/' className='text-sm font-medium text-zinc-200'>Accueil</Link> / <Link href='/ContactUs' className='text-sm font-semibold text-zinc-200 border-b-2'>Nous contacter</Link>
          </p>
        </div>
        <div className='w-2/3'>
          <Image
            className='w-full h-full object-cover'
            src={image}
            alt='image of banner'
          />
        </div>
    </div>
  )
}

export default Banner
