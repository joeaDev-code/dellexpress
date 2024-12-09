import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Imagedefault from '@/app/assets/images/banner/image.png'
import Link from 'next/link';

function Header() {
  return (
    <div className='flex w-full flex-col sm:flex-row items-center min-h-[80vh]  sm:justify-between shadow-sm'>
      <div className='px-10 py-4 w-full sm:w-1/2 flex flex-col h-full'>
        <h6 className='font-light text-orange-700 text-sm'> Vos colis, livrés avec soin et rapidité.</h6>
        <h2 className='text-3xl md:text-5xl font-medium text-zinc-700'>
        Nous avons une <span className='text-orange-700'>livraison plus rapide</span> que les autres
        </h2>
        <ul className='my-6 w-full'>
            <li className='flex gap-2 text-zinc-800 items-center'> <FontAwesomeIcon icon={faCheck} className='text-orange-700' width={'20px'} />Livraison express en moins de 24 heures.</li>
            <li className='flex gap-2 text-zinc-800 items-center'><FontAwesomeIcon icon={faCheck}  className='text-orange-700' width={'20px'}/>Couverture nationale et à l&apos;international.</li>
            <li className='flex gap-2 text-zinc-800 items-center'><FontAwesomeIcon icon={faCheck}  className='text-orange-700' width={'20px'}/>Disponible 24/7.</li>
        </ul>
        <div className='flex items-center gap-2'>
          <Link href='/ContactUs?envoyer=devis'>
          <button className='text-sm p-2 border-slate-600 border-2 rounded-lg hover:bg-orange-700 hover:text-white transition-[backgroundColor] ease-in-out'>Demander une livraison</button>
          </Link>
          <Link href='/ContactUs?envoyer=contact'>
          <button className='text-sm p-2 border-slate-600 border-2 rounded-lg hover:bg-orange-700 hover:text-white transition-[backgroundColor] ease-in-out'>Nous contacter</button>
          </Link>
        </div>
      </div>
      <div className='w-full sm:w-1/2 '>
        <Image
          alt='image of banner'
          src={Imagedefault}
          priority
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Header
