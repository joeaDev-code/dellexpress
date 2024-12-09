'use client'

import Image from 'next/image'
import React from 'react'
import image1 from '@/app/assets/images/presentation/image1.jpg'
import image2 from '@/app/assets/images/presentation/image2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Presentation() {
  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-2 px-8 py-10 md:p-20'>
      <div className='w-full md:w-1/2 flex flex-col px-5 items-baseline'>
            <h3 className='text-sm font-light text-orange-600'>Qui sommes nous ?</h3>
            <h2 className='text-2xl text-zinc-800'>Un service <span className='text-orange-600'>de livraison rapide</span> pour tous vos besoins professionnels et personnels.</h2>
            <p className="w-full my-6 text-zinc-800 font-extralight">
            Chez dellEXPRESS, nous comprenons que le temps est précieux. Cest pourquoi nous mettons tout en œuvre pour vous offrir un service de livraison rapide, sécurisé et fiable. Que vous soyez une entreprise ou un particulier, nous assurons la livraison de vos colis, documents et produits dans les meilleurs délais, partout où vous en avez besoin. <br />
            Que vous ayez une livraison urgente ou planifiée, nous vous proposons des solutions sur mesure pour répondre à vos attentes. Notre équipe professionnelle et notre flotte de véhicules nous permettent de garantir un service de qualité et une satisfaction optimale à chaque commande.
            </p>
            <ul className='my-6 w-full'>
                <li className='flex gap-2 text-zinc-800 items-center'> <FontAwesomeIcon icon={faCheck} className='text-orange-700' width={'20px'} />Professionalisme</li>
                <li className='flex gap-2 text-zinc-800 items-center'><FontAwesomeIcon icon={faCheck}  className='text-orange-700' width={'20px'}/>Expertise</li>
                <li className='flex gap-2 text-zinc-800 items-center'><FontAwesomeIcon icon={faCheck}  className='text-orange-700' width={'20px'}/>Satisfait ou remboursé</li>
            </ul>

            <button className='hidden md:block px-8 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white'>Savoir plus</button>
      </div>
      <div className='relative max-md:my-6 w-full md:w-1/2 flex h-[500px]'>
        <Image
            alt='image 1'
            src={image1}
            className='w-52 h-80 md:w-80 md:h-96 object-cover rounded-lg z-0'
            priority
        />
        <Image
            alt='image 2'
            src={image2}
            className='w-52 h-80 md:w-60 md:h-80 object-cover rounded-lg absolute z-10 right-6 bottom-3'
            priority
        />
      </div>
      <button className='block md:hidden px-8 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white'>Savoir plus</button>

    </div>
  )
}

export default Presentation
