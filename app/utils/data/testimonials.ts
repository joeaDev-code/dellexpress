import image1 from '@/app/assets/images/testimonials/image1.jpg'
import image2 from '@/app/assets/images/testimonials/image2.jpg'
import image3 from '@/app/assets/images/testimonials/image3.jpg'
import image4 from '@/app/assets/images/testimonials/image4.jpg'
import image5 from '@/app/assets/images/testimonials/image5.jpg'
import { StaticImageData } from 'next/image'
interface Testimonial {
    id: number;
    name: string;
    rating: number;
    comment: string;
    image?: StaticImageData;
  }
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aïcha K.",
      rating: 5,
      comment: "DellEXPRESS a révolutionné notre manière de livrer nos produits ! Fiabilité et rapidité sont au rendez-vous.",
      image: image4,
    },
    {
      id: 2,
      name: "Jean P.",
      rating: 4.8,
      comment: "Un service impeccable, je suis impressionné par leur professionnalisme. Je recommande vivement !",
      image: image1,
    },
    {
      id: 3,
      name: "Elvis L",
      rating: 4.9,
      comment: "Depuis que j'ai découvert DellEXPRESS, mes livraisons sont devenues un jeu d'enfant. Merci pour cette simplicité !",
      image: image2
    },
    {
      id: 4,
      name: "Mamadou S.",
      rating: 5,
      comment: "Excellent service de livraison, rapide et sûr. Mes colis arrivent toujours à temps !",
      image: image5,
    },
    {
      id: 5,
      name: "Sylvie B.",
      rating: 4.7,
      comment: "Une équipe professionnelle et attentionnée. DellEXPRESS a répondu à toutes mes attentes.",
      image: image3,
    },
  ];
  
  export default testimonials;
  