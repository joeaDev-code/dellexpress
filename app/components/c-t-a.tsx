import React from 'react';
import Button from './Button';

function CallToAction() {
  return (
    <div className='w-full min-h-96 flex flex-col gap-3 px-8 py-10 md:p-20 bg-gradient-to-bl from-gray-500 to-gray-700'>
      <div className='text-center text-white'>
        <h2 className='text-3xl md:text-5xl font-bold mb-4'>
            Prêt à simplifier vos livraisons ?
            Faites le premier pas vers un service fiable et rapide !
        </h2>
        <p className='text-lg md:text-xl mb-8'>
            DellEXPRESS est là pour répondre à tous vos besoins en livraison avec efficacité et sécurité. Ne perdez plus de temps, profitez dès aujourd&apos;hui de notre expertise !
        </p>
        
      </div>
    <div className="flex flex-col md:flex-row item-center justify-center gap-8">
      <Button name='Demander un devis' link='/ContactUs?envoyer=devis'/>
      <Button name='Nous contacter' link='/ContactUs?envoyer=contact'/>
      <Button name='Rejoindre notre equipe' link='/contactUs?joinUs' />
    </div>
      
    </div>
  );
}

export default CallToAction;
