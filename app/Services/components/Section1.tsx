import Image from 'next/image'
import React from 'react'
import image1 from '@/app/assets/images/service/image1.jpg'
import image2 from '@/app/assets/images/service/image2.jpg'

function Section1() {
  return (
    <div className='w-full min-h-screen p-8 md:p-28 flex flex-col md:flex-row justify-between'>
      <div className='w-full md:w-1/2 flex flex-col items-center p-2 gap-4'>
        <h2 className='text-3xl text-orange-600 font-medium '>Livraison rapide et fiable</h2>
        <ul className='flex flex-col w-full gap-2'>
            <li>
                <h6 className='text-orange-600 font-light'>Livraison express :</h6>
                <p className='font-light text-zinc-900'>Recevez vos colis en 24h ou moins dans tout Abidjan et les principales villes de Côte d&apos;Ivoire.</p>
            </li>
            <li>
                <h6 className='text-orange-600 font-light'>Livraison standard :</h6>
                <p className='font-light text-zinc-900'>Une option économique pour les livraisons non urgentes &#40;48h à 72h&#41;.</p>
            </li>
            <li>
                <h6 className='text-orange-600 font-light'>Livraison interurbaine :</h6>
                <p className='font-light text-zinc-900'>Nous connectons les villes ivoiriennes avec un service de livraison pratique et sécurisé.</p>
            </li>
        </ul>
      </div>
      <div className='w=full md:w-1/2 flex justify-center items-center gap-2'>
        <Image
            alt='image1'
            src={image1}
            className='w-52 md:w-80 h-full object-cover rounded-3xl'
        />
        <Image
            alt='image2'
            src={image2}
            className='w-52 md:w-60 h-full object-cover rounded-3xl'
        />
      </div>
    </div>
  )
}

export default Section1
