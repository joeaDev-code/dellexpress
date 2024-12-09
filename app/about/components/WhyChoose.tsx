import React from 'react'

function WhyChoose() {
  return (
    
    <section className="px-8 md:px-20 py-12 bg-orange-600 text-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Pourquoi Nous Choisir ?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Livraisons rapides et sécurisées.</li>
          <li>Tarifs compétitifs et adaptés à votre budget.</li>
          <li>Une couverture nationale et internationale.</li>
          <li>Un service clientèle réactif et à votre écoute.</li>
        </ul>
        <div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">Témoignages</h3>
          <p className="italic">DellEXPRESS m&apos;a impressionné par leur professionnalisme et leur rapidité.</p>
          <p className="text-right mt-2">- Client satisfait</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChoose
