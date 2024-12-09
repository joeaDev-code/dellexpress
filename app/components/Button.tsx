import Link from 'next/link'
import React from 'react'

function Button({name, link}: {name:string, link:string}) {
  return (
    <Link href={link}>
         <button className='block px-8 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white'>{name}</button>
    </Link>
  )
}

export default Button
