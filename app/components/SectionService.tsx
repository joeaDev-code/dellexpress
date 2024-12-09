import React from 'react'
import { MdDeliveryDining, MdOutlinePayments } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Button from './Button';

function SectionService() {
  return (
    <div className='w-full min-h-screen flex flex-col gap-3 px-8 py-10 md:p-20'>
      <div>
            <h3 className='text-sm font-light text-orange-600'>Ce que nous offrons</h3>
            <h2 className='text-2xl text-zinc-800'>Des <span className='text-orange-600'>solutions</span> de livraison <span className='text-orange-600'>fiables</span> et <span className='text-orange-600'>rapides</span>, adaptées à vos Besoins</h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full items-center justify-center my-6 gap-4 sm:gap-12'>
            <div className='w-full h-80 bg-gradient-to-br from-orange-600 to-orange-800 flex flex-col rounded-3xl items-center justify-center shadow-md p-4'>
                <div>
                    <MdDeliveryDining className='text-[100px] text-zinc-100'/>
                </div>
                <p className='text-base font-light text-white text-center'>Livraison express</p>
                <p className='text-[12px] font-extralight text-white text-center'>Nous livrons vos colis en moins de 24 heures pour répondre à vos besoins urgents, où que vous soyez en Côte d&apos;Ivoire.</p>
            </div>
            <div className='w-full h-80 bg-gradient-to-br from-orange-600 to-orange-800 flex flex-col rounded-3xl items-center justify-center shadow-md p-4'>
                <div className='relative'>
                    <FaHome className='text-[100px] text-zinc-100'/>
                </div>
                <p className='text-base font-light text-white text-center'>Livraison a domicile</p>
                <p className='text-[12px] font-extralight text-white text-center'>Recevez vos colis directement chez vous grâce à notre service fiable et rapide.</p>
            </div>
            <div className='w-full h-80 bg-gradient-to-br from-orange-600 to-orange-800 flex flex-col rounded-3xl items-center justify-center shadow-md p-4'>
                <div className='relative'>
                    <SiHomeassistantcommunitystore className='text-[100px] text-zinc-100'/>
                </div>
                <p className='text-base font-light text-white text-center'>Services pour E-commerce</p>
                <p className='text-[12px] font-extralight text-white text-center'>Partenariats personnalisés pour expédier vos produits rapidement et satisfaire vos clients.</p>
            </div>
            <div className='w-full h-80 bg-gradient-to-br from-orange-600 to-orange-800 flex flex-col rounded-3xl items-center justify-center shadow-md p-4'>
                <div className='relative'>
                    <MdOutlinePayments className='text-[100px] text-zinc-100'/>
                </div>
                <p className='text-base font-light text-white text-center'>Paiement securisé</p>
                <p className='text-[12px] font-extralight text-white text-center'>Payez à la Livraison, pour plus de Tranquillité !
                Profitez du paiement à la réception, un service qui garantit votre satisfaction avant tout ou en ligne</p>
            </div>
      </div>

      <Button name='Plus de services' link='/Services' />
    </div>
  )
}

export default SectionService
