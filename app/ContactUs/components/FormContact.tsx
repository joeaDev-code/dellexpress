'use client'

import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FormContact() {
    const handleSubmit = ()=>{}
  return (
    <div className='relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-24'>
        <div className='w-full md:w-1/2 min-h-[600px] flex flex-col justify-center items-center shadow-md bg-slate-600'>
        <div className="bg-orange-600 p-3 mb-9">
            <h2 className='text-sm text-zinc-300 font-semibold'>Nous ecrire un message</h2>
            <h2 className='text-lg font-light text-zinc-100  '>Nous serons heureux de vous répondre.</h2>
        </div>
            <form action="" className='flex flex-col w-full h-full gap-4 px-4'>
                <div className='w-full flex items-center gap-2'>
                    <div>
                        <label htmlFor="name" className='text-sm font-light text-zinc-100'> Nom complet</label>
                        <input type="text" name="name" id="name" aria-label='name' className='rounded-2xl w-full py-1 text-base font-light focus:outline-none focus:border-2 focus:border-orange-600 bg-slate-500 px-1' placeholder='Entrez votre nom complet ...'/>
                    </div>
                    <div>
                        <label htmlFor="telephone" className='text-sm font-light text-zinc-100'> Téléphone</label>
                        <input type="tel" name="telephone" id="telephone" aria-label='telephone' className='rounded-2xl w-full py-1 text-base font-light focus:outline-none focus:border-2 focus:border-orange-600 bg-slate-500 px-1' placeholder='Entrez votre numero de téléphone'/>
                    </div>
                </div>
                    <div>
                        <label htmlFor="email" className='text-sm font-light text-zinc-100'> Adresse email</label>
                        <input type="email" name="email" id="email" aria-label='email' className='rounded-2xl w-full py-1 text-base font-light focus:outline-none focus:border-2 focus:border-orange-600 bg-slate-500 px-1' placeholder='Entrez votre adresse email'/>
                    </div>
                    <div>
                        <label htmlFor="message" className='text-sm font-light text-zinc-100'> Adresse email</label>
                        <textarea name="message" id="message" aria-label='message' className='rounded-2xl w-full h-60 py-1 text-base font-light focus:outline-none focus:border-2 focus:border-orange-600 bg-slate-500 px-1 resize-none' placeholder='Entrez votre adresse email'/>
                    </div>

                    <button onSubmit={handleSubmit} className='bg-orange-600 hover:bg-orange-700 text-white py-2 px-7 rounded-2xl'>Envoyer le message </button>
            </form>
        </div>
        <div className='w-full md:w-1/2 h-[450px] flex flex-col justify-center items-center bg-gray-900 rounded-e-3xl'>
        <div>
            <h2 className='text-zinc-50'>Avez vous des questions ?</h2>
            <h2 className='text-zinc-50'>Aimeriez-vous parler au service client ?</h2>
        </div>
        <div className='flex flex-col w-full my-4 p-4'>
            <h6 className='text-zinc-100 text-base'>Nos coordonnées</h6>
            
        <div className='grid grid-cols-1  md:grid-cols-2 gap-3 my-6 items-center'>
        <div className='w-fit h-10 bg-gray-800 rounded-xl p-2 flex gap-2'>
            <FontAwesomeIcon icon={faPhoneVolume} className='text-white '/>
            <p className='text-white'>&#40;225&#41; 05 015 855 38</p>
        </div>
        <div className='w-fit h-10 bg-gray-800 rounded-xl p-2 flex gap-2'>
            <FontAwesomeIcon icon={faWhatsapp} className='text-white '/>
            <p className='text-white'>&#40;225&#41; 05 015 855 38</p>
        </div>
        <div className='w-fit h-10 bg-gray-800 rounded-xl p-2 flex gap-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-white '/>
            <p className='text-white'>joeanetsach@gmail.com</p>
        </div>

        </div>

        </div>
        <div className='w-full items-center justify-cente p-2 flex flex-col gap-2'>
            <h6 className='text-zinc-100 text-base border-b-2'>Nous suivre</h6>
            <div>
            <FontAwesomeIcon icon={faFacebook} className='text-white ' width={'30px'}/>
            <FontAwesomeIcon icon={faInstagram} className='text-white ' width={'30px'}/>
            <FontAwesomeIcon icon={faTwitter} className='text-white ' width={'30px'}/>

            </div>
        </div>
        </div>    
    </div>
  )
}

export default FormContact
