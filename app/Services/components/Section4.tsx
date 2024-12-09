import { faBolt, faCheckDouble, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Section4() {
  return (
    <div className='w-full min-h-[60vh] p-8 md:p-28 flex flex-col md:flex-row justify-between items-center'>
      <div className='w-full md:w-1/2 flex flex-col items-center p-2 gap-4'>
        <h2 className='text-3xl text-orange-600 font-medium '>Nos engagements</h2>
        
      </div>
      <div className='w=full md:w-1/2 flex justify-center items-center gap-2'>
      <ul className='flex flex-col w-full gap-2'>
            <li className='flex flex-col md:flex-row md:items-center gap-2 text-lg'>
                <h6 className='text-orange-600 font-light'><FontAwesomeIcon icon={faCheckDouble} width={'30px'} className='text-orange-600' />Fiabilité</h6>
                <p className='font-light text-zinc-900'>Vos colis arrivent toujours en bon état.</p>
            </li>
            <li className='flex flex-col md:flex-row md:items-center gap-2 text-lg'>
                <h6 className='text-orange-600 font-light'><FontAwesomeIcon icon={faClock} width={'30px'} className='text-orange-600' />Ponctualité :</h6>
                <p className='font-light text-zinc-900'>Nous respectons les délais annoncés.</p>
            </li>
            <li className='flex flex-col md:flex-row md:items-center gap-2 text-lg'>
                <h6 className='text-orange-600 font-light'><FontAwesomeIcon icon={faBolt} width={'30px'} className='text-orange-600' />Flexibilité :</h6>
                <p className='font-light text-zinc-900'>Des services adaptés à vos besoins spécifiques.</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Section4
