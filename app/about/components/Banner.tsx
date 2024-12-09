import React from 'react'

function Banner() {
  return (
  <div className="relative w-full min-h-[80vh] flex items-center justify-center bg-orange-500 text-center">
    <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-b from-orange-600 to-orange-700"></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">À Propos de DellEXPRESS</h1>
      <p className="mt-4 text-lg font-light text-slate-100 max-w-xl mx-auto">
        Découvrez notre histoire, nos valeurs et notre engagement envers nos clients.
      </p>
    </div>
  </div>
  )
}

export default Banner
