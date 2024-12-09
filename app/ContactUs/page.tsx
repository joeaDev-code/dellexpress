'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { scroller } from 'react-scroll';
import Banner from './components/Banner';
import FormContact from './components/FormContact';
import QuoteForm from './components/QuoteForm';
import Ccm from '../components/Ccm';

function ContactUsPage() {
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const target = searchParams.get('envoyer');

    if (target === 'devis') {
      scroller.scrollTo('quoteForm', {
        smooth: true,
        duration: 500,
      });
    } else if (target === 'contact') {
      scroller.scrollTo('contactForm', {
        smooth: true,
        duration: 500,
      });
    }
  }, [searchParams]);

  return (
    <div>
      <Banner />
      <div id="contactForm">
        <FormContact />
      </div>
      <div id="quoteForm">
        <QuoteForm />
      </div>
      <Ccm />
    </div>
  );
}

// Encapsulation dans Suspense
export default function PageWrapper() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ContactUsPage />
    </Suspense>
  );
}
