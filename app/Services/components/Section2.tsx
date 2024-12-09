import Image from 'next/image'
import React from 'react'
import image1 from '@/app/assets/images/service/image3.png'

function Section2() {
  return (
    <div className='w-full min-h-screen p-8 md:p-28 flex flex-col md:flex-row-reverse justify-between'>
      <div className='w-full md:w-1/2 flex flex-col items-center p-2 gap-4'>
        <h2 className='text-3xl text-orange-600 font-medium '>Livraison spécialisée</h2>
        <ul className='flex flex-col w-full gap-2'>
            <li>
                <h6 className='text-orange-600 font-light'>Livraison alimentaire :</h6>
                <p className='font-light text-zinc-900'> Livraison de repas et produits frais, directement chez vous.</p>
            </li>
            <li>
                <h6 className='text-orange-600 font-light'>Livraison de médicaments :</h6>
                <p className='font-light text-zinc-900'>Transport rapide et sécurisé de vos médicaments et ordonnances.</p>
            </li>
            <li>
                <h6 className='text-orange-600 font-light'>Livraison de cadeaux :</h6>
                <p className='font-light text-zinc-900'>Offrez un moment spécial à vos proches grâce à notre service de livraison de cadeaux.</p>
            </li>
        </ul>
      </div>
      <div className='w=full md:w-1/2 flex justify-center items-center gap-2'>
        <Image
            alt='image1'
            src={image1}
            className='w-full md:w-96 h-full object-cover rounded-3xl'
        />
      </div>
    </div>
  )
}

export default Section2
