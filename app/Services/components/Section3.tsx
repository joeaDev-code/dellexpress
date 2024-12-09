import Image from 'next/image'
import React from 'react'
import image1 from '@/app/assets/images/service/image4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Section3() {
  return (
    <div className='w-full min-h-screen p-8 md:p-28 flex flex-col md:flex-row justify-between bg-orange-600'>
      <div className='w-full md:w-1/2 flex flex-col items-center p-2 gap-4'>
        <h2 className='text-3xl text-zinc-50 font-medium '>Solutions e-commerce
        </h2>
        <ul className='flex flex-col w-full gap-2'>
            <li>
                <h6 className='text-zinc-100 font-light'><FontAwesomeIcon icon={faCircleCheck} width={"30px"} className='text-zinc-100' />Livraison pour boutiques en ligne : </h6>
                <p className='font-light text-zinc-100'>Partenaire de confiance pour acheminer vos produits vers vos clients.</p>
            </li>
            <li>
                <h6 className='text-zinc-100 font-light'><FontAwesomeIcon icon={faCircleCheck} width={"30px"} className='text-zinc-100' />Paiement à la livraison &#40;POD&#41; :</h6>
                <p className='font-light text-zinc-100'>Une option économique pour les livraisons non urgentes &#40;48h à 72h&#41;.</p>
            </li>
            <li>
                <h6 className='text-zinc-100 font-light'><FontAwesomeIcon icon={faCircleCheck} width={"30px"} className='text-zinc-100' />Gestion des retours :</h6>
                <p className='font-light text-zinc-100'>Simplifiez les retours avec une prise en charge efficace.
                </p>
            </li>
        </ul>
      </div>
      <div className='w=full md:w-1/2 flex justify-center items-center gap-2 bg-white rounded-full overflow-hidden'>
        <Image
            alt='image1'
            src={image1}
            className='w-52 md:w-80 h-full object-cover rounded-3xl'
        />
      </div>
    </div>
  )
}

export default Section3
