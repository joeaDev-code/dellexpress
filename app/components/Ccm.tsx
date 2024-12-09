import React from 'react'
import { ccm } from '../utils/data/ccm'
import Button from './Button'

function Ccm() {
  return (
    <div className='w-full min-h-screen flex flex-col gap-3 px-8 py-10 md:p-20 bg-gradient-to-bl from-slate-600 to-slate-800'>
      <div>
            <h3 className='text-sm font-light text-zinc-50'>Comment ça marche ?</h3>
            <h2 className='text-2xl text-zinc-100'>Suivez ces étapes simples pour planifier et recevoir votre livraison en toute tranquillité.</h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-8'>
        {ccm.map((item, index)=>
            <div key={index} className='w-full h-fit text-zinc-200 flex flex-col'>
                <h6 className='flex flex-row gap-2 items-center '>
                    <span className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center">{index+1}</span>
                    {item.title}
                </h6>
                <p className='text-sm font-light text-zinc-300'>{item.description}</p> 
            </div>
        )}
      </div>
      <Button link='/ContactUs?envoyer=devis' name='Demander une livraison '/>
    </div>
  )
}

export default Ccm
