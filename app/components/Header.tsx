import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <div className='relative w-full h-10 bg-orange-600 hidden md:flex justify-center items-center'>
      <ul className="w-full flex gap-4 items-center justify-center">
        <li className='flex items-center justify-center text-sm text-white gap-1'><FontAwesomeIcon icon={faPhoneVolume} width={'20px'} className='text-white' /> &#40;+225&#41; 05 015 855 38</li>
        <li className='flex items-center justify-center text-sm text-white gap-1'><FontAwesomeIcon icon={faEnvelope} width={'20px'} className='text-white' />joeanetsach@gmail.com</li>
        <li className='flex items-center justify-center text-sm text-white gap-1'><FontAwesomeIcon icon={faSquareWhatsapp} width={'20px'} className='text-white' />&#40;+225&#41; 05 015 855 38</li>
      </ul>
    </div>
  )
}

export default Header
