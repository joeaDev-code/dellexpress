import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='w-full bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Section 1: Informations */}
          <div>
            <h3 className='text-2xl font-semibold mb-4'>DellEXPRESS</h3>
            <p className='text-sm font-light'>
              Votre partenaire de livraison rapide et fiable. Nous nous engageons à fournir des services de livraison sûrs, rapides et efficaces pour répondre à tous vos besoins.
            </p>
          </div>

          {/* Section 2: Liens */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Liens utiles</h3>
            <ul className='space-y-3'>
              <li>
                <Link href='/' className='text-sm hover:text-orange-500'>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href='/Services' className='text-sm hover:text-orange-500'>
                  Nos services
                </Link>
              </li>
              <li>
                <Link href='/About' className='text-sm hover:text-orange-500'>
                 À propos de nous
                </Link>
              </li>
              <li>
                <Link href='/ContactUs?envoyer=contact' className='text-sm hover:text-orange-500'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Suivez-nous */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Suivez-nous</h3>
            <div className='flex space-x-6'>
              <Link href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} className='text-2xl hover:text-orange-500' />
              </Link>
              <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faTwitter} className='text-2xl hover:text-orange-500' />
              </Link>
              <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} className='text-2xl hover:text-orange-500' />
              </Link>
              <Link href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} className='text-2xl hover:text-orange-500' />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-12 text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} DellEXPRESS. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
