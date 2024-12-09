"use client";

import Image from "next/image";
import React, { useState } from "react";
import IMAGE from '@/app/assets/images/contact/quote.jpg'

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    commune: "",
    city: "",
    country: "",
    description: "",
  });

  const communesAbidjan = [
    "Abobo",
    "Adjamé",
    "Attécoubé",
    "Cocody",
    "Marcory",
    "Plateau",
    "Port-Bouët",
    "Treichville",
    "Yopougon",
    "Koumassi",
    "Bingerville",
  ];

  const villesCoteDIvoire = [
    "Bouaké",
    "San-Pédro",
    "Daloa",
    "Korhogo",
    "Man",
    "Yamoussoukro",
    "Abengourou",
    "Bondoukou",
    "Gagnoa",
    "Soubré",
  ];

  const paysFrontaliers = [
    "Ghana",
    "Mali",
    "Burkina Faso",
    "Guinée",
    "Libéria",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
    console.log("Formulaire soumis :", formData);
  };

  return (
    <div className=" w-full py-12 flex fex-col md:flex-row justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center mb-6 text-orange-600">
          Demandez un devis
        </h1>
        <p className="text-center text-sm mb-12 text-zinc-900">
          Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé
          selon vos besoins.
        </p>

        <form
          className="w-full mx-auto bg-white p-6 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-2 items-center w-full">
            {/* Nom */}
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            {/* Téléphone */}
            <div className="mb-4 w-full">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Catégorie */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Catégorie
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="" disabled>
                -- Sélectionnez une catégorie --
              </option>
              <option value="livraison">Livraison</option>
              <option value="expedition_interieure">
                Expédition à l&apos;intérieur
              </option>
              <option value="expedition_exterieure">
                Expédition à l&apos;extérieur
              </option>
            </select>
          </div>

          {/* Commune pour livraison */}
          {formData.category === "livraison" && (
            <div className="mb-4">
              <label
                htmlFor="commune"
                className="block text-sm font-medium text-gray-700"
              >
                Commune (Abidjan)
              </label>
              <select
                id="commune"
                name="commune"
                value={formData.commune}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="" disabled>
                  -- Sélectionnez une commune --
                </option>
                {communesAbidjan.map((commune) => (
                  <option key={commune} value={commune}>
                    {commune}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Ville pour expédition intérieure */}
          {formData.category === "expedition_interieure" && (
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Ville (Côte d&apos;Ivoire)
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="" disabled>
                  -- Sélectionnez une ville --
                </option>
                {villesCoteDIvoire.map((ville) => (
                  <option key={ville} value={ville}>
                    {ville}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Pays pour expédition extérieure */}
          {formData.category === "expedition_exterieure" && (
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Pays frontalier
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              >
                <option value="" disabled>
                  -- Sélectionnez un pays --
                </option>
                {paysFrontaliers.map((pays) => (
                  <option key={pays} value={pays}>
                    {pays}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description du besoin
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={4}
              placeholder="Détaillez vos besoins ou précisez les particularités de votre demande."
              required
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-700"
          >
            Soumettre la demande
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src={IMAGE}
            alt="image of quote"
            className="w-full h-full object-cover"
            priority
          />
      </div>
    </div>
  );
}

export default QuoteForm;
