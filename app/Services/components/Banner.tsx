'use client'

import Image from 'next/image'
import React from 'react'
import IMAGE from '@/app/assets/images/service/imageBanner.jpg'
import Button from '@/app/components/Button'

function Banner() {
  return (
    <div className='relative w-full h-screen flex'>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
            <Image
                alt='image of banner'
                src={IMAGE}
                className='w-full h-full object-cover'
                priority
            />
        </div>
        <div className='w-full h-full flex items-center justify-center z-10 bg-slate-700/90 flex-col p-8 md:p-28'>
            <h2 className='text-orange-600 text-5xl'>Services</h2>
            <h6 className='text-white text-2xl font-light text-center mb-5'>Découvrez les solutions de livraison rapides, fiables et adaptées à vos besoins avec DELLExpress.</h6>

            <Button name='Se faire livrer'  link='/ContactUs?envoyer=devis'/>
        </div>
      
    </div>
  )
}

export default Banner
