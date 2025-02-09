import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    promoCode: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [promoStatus, setPromoStatus] = useState<'idle' | 'loading' | 'valid' | 'invalid'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '63d06f67-db79-4b2c-82c0-275419f64b79',
          ...formData,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Réinitialiser le statut du code promo si le champ est vide
    if (name === 'promoCode' && value === '') {
      setPromoStatus('idle');
    }
  };

  const verifyPromoCode = () => {
    if (!formData.promoCode) return;
    
    setPromoStatus('loading');
    
    // Simuler une vérification avec délai
    setTimeout(() => {
      if (formData.promoCode === 'SNAKE10') {
        setPromoStatus('valid');
      } else {
        setPromoStatus('invalid');
      }
    }, 1500); // 1.5 secondes de délai
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
          <motion.div variants={fadeInUp} className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              Contactez-nous
            </h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-base sm:text-lg text-gray-500">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet.
              </p>
            </div>
            <div className="mt-8 sm:mt-9 space-y-6 sm:space-y-7">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-base sm:text-lg text-gray-500">
                  <p>+33 6 52 58 57 71</p>
                  <p className="mt-1">+33 7 81 06 52 13</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-base sm:text-lg text-gray-500">
                  <p>contact@azuracode.fr</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3 text-base sm:text-lg text-gray-500">
                  <p>19 Rue Henri Barbusse</p>
                  <p className="mt-1">13001 Marseille, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 sm:mt-16 md:mt-0 bg-white rounded-lg"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-5 sm:gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700">
                  Code promo
                </label>
                <div className="mt-1 flex space-x-2">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      name="promoCode"
                      id="promoCode"
                      className={`py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md transition-colors ${
                        promoStatus === 'valid' 
                          ? 'border-green-500 focus:ring-green-500 focus:border-green-500' 
                          : promoStatus === 'invalid'
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                          : 'focus:ring-blue-500 focus:border-blue-500'
                      }`}
                      value={formData.promoCode}
                      onChange={handleChange}
                      placeholder="Si vous avez un code promo"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      {promoStatus === 'loading' && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="text-blue-600"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </motion.div>
                      )}
                      {promoStatus === 'valid' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-green-600"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                      )}
                      {promoStatus === 'invalid' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-red-600"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={verifyPromoCode}
                    disabled={!formData.promoCode || promoStatus === 'loading'}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      !formData.promoCode || promoStatus === 'loading'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {promoStatus === 'loading' ? 'Vérification...' : 'Appliquer'}
                  </button>
                </div>
                {promoStatus === 'valid' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-green-600"
                  >
                    Code promo valide ! -10% seront appliqués à votre projet
                  </motion.p>
                )}
                {promoStatus === 'invalid' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-600"
                  >
                    Code promo invalide
                  </motion.p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base sm:text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Envoyer
                </button>
              </div>
              {/* Message de statut */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-md w-full relative"
                  >
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Message envoyé avec succès ! 🎉
                        </h3>
                        <p className="mt-2 text-lg text-gray-600">
                          Merci {formData.name.split(' ')[0]} !
                        </p>
                      </div>
                      <div className="text-gray-600 space-y-2">
                        <p>Notre équipe vous répondra dans les plus brefs délais à l'adresse :</p>
                        <p className="font-medium text-blue-600">{formData.email}</p>
                        {formData.promoCode && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <p className="text-blue-800 font-medium">
                              Votre code promo <span className="font-bold">"{formData.promoCode}"</span> a bien été appliqué !
                            </p>
                            <p className="text-blue-600 text-sm mt-1">
                              Une réduction de 10% sera appliquée à votre projet.
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="mt-6">
                        <button
                          onClick={() => {
                            setSubmitStatus('idle');
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              message: '',
                              promoCode: '',
                            });
                          }}
                          className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                          Fermer
                          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-md w-full relative"
                  >
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Une erreur est survenue
                        </h3>
                        <p className="mt-4 text-gray-600">
                          Nous n'avons pas pu envoyer votre message. Veuillez réessayer ou nous contacter directement à :
                        </p>
                        <p className="mt-2 font-medium text-blue-600">
                          contact@azuracode.fr
                        </p>
                      </div>
                      <div className="mt-6">
                        <button
                          onClick={() => setSubmitStatus('idle')}
                          className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                          Fermer
                          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}