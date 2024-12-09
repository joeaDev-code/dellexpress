import React from 'react'

function Valeur() {
  return (
    <section className="px-8 md:px-20 py-10 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">Nos Valeurs</h2>
        <ul className="grid gap-6 md:grid-cols-2 text-lg">
          <li className="flex items-start space-x-4">
            <span className="text-orange-500 text-2xl">✔</span>
            <p>Fiabilité : Nous tenons nos promesses pour chaque livraison.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-orange-500 text-2xl">✔</span>
            <p>Transparence : Vous savez où en est votre colis à chaque étape.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-orange-500 text-2xl">✔</span>
            <p>Innovation : Toujours à la recherche de nouvelles solutions.</p>
          </li>
          <li className="flex items-start space-x-4">
            <span className="text-orange-500 text-2xl">✔</span>
            <p>Satisfaction client : Votre bonheur est notre priorité absolue.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Valeur
