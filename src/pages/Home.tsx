import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Sparkles, Shield, ChevronRight, Users, Target, Zap, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Snake from '../components/Snake';

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
      staggerChildren: 0.1
    }
  }
};

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  const [showSnake, setShowSnake] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with white background */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
      >
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            variants={fadeInUp}
            className="text-center lg:text-left md:max-w-2xl md:mx-auto lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="lg:py-8">
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-gray-900"
              >
                <span className="block">Votre Présence En Ligne</span>
                <span className="block text-blue-600 mt-2">Commence Ici</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="mt-3 text-base sm:text-lg lg:text-xl text-gray-500 max-w-md mx-auto lg:mx-0"
              >
                Nous créons des sites vitrines élégants et professionnels qui représentent parfaitement votre entreprise sur le web.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="mt-8 sm:mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
                  Commencer
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            variants={imageAnimation}
            className="mt-10 sm:mt-12 lg:mt-0 lg:col-span-6 relative"
          >
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full w-full">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Équipe au travail"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent mix-blend-multiply rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Section with white background */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative bg-white pt-24 sm:pt-32 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={textAnimation}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400">Façonnons</span>
                <br />
                <span className="mt-2 inline-block text-gray-900">Votre Univers Digital</span>
              </h2>
              <div className="mt-4 sm:mt-6">
                <p className="text-lg sm:text-xl font-medium text-gray-600">
                  Transformez votre vision en réalité digitale avec une équipe passionnée et experte.
                </p>
              </div>
            </motion.div>
          </div>
          </div>

        {/* Features Grid in white background */}
        <div className="mt-16 sm:mt-24 lg:mt-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
            {[
              {
                icon: Sparkles,
                title: "Expertise Technique",
                description: "Une maîtrise approfondie des dernières technologies pour créer des sites web robustes et évolutifs.",
              },
              {
                icon: Zap,
                title: "Innovation Créative",
                description: "Des designs uniques et percutants qui captent l'attention et créent une expérience mémorable pour vos visiteurs.",
              },
              {
                icon: Target,
                title: "Vision Stratégique",
                description: "Au-delà du design, nous construisons des solutions digitales qui propulsent votre croissance.",
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.2
                    }
                  }
                }}
                whileHover={{ y: -10, transition: { duration: 0.4 } }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
              ))}
          </div>
        </div>
      </motion.div>

      {/* Dark gradient background section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              La fabrique de sites : Mode d'emploi
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto mb-16 sm:mb-24 lg:mb-32">
            {[
              {
                step: "01",
                title: "Brainstorming",
                description: "Ensemble, nous définissons votre vision et vos objectifs",
                gradient: "from-blue-600 to-blue-700"
              },
              {
                step: "02",
                title: "Design sur-mesure",
                description: "Création d'une identité visuelle unique et impactante",
                gradient: "from-blue-600 to-blue-700"
              },
              {
                step: "03",
                title: "Développement technique",
                description: "Construction robuste avec les dernières technologies",
                gradient: "from-blue-600 to-blue-700"
              },
              {
                step: "04",
                title: "Lancement & suivi",
                description: "Mise en ligne et accompagnement continu du projet",
                gradient: "from-blue-600 to-blue-700"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1.5,
                      delay: index * 0.4,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                whileHover={{ y: -10, transition: { duration: 0.4 } }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                <div className="relative p-8 rounded-2xl border border-blue-500/10 bg-white/5 backdrop-blur-sm">
                  <span className="block text-8xl font-black text-white/10 mb-6 group-hover:text-white/20 transition-colors duration-500">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-blue-100/80">
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

      {/* CTA Section */}
      <motion.div
            variants={fadeInUp}
            className="relative rounded-lg overflow-hidden max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
              <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
                  Prêt à Lancer Votre Projet ?
                </h2>
              <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
                </p>
              <div className="mt-6 sm:mt-8">
                  <Link
                    to="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base sm:text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  >
                    Nous Contacter
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
          </motion.div>

          {/* Footer with hidden button */}
          <div className="mt-16 sm:mt-24 lg:mt-32 text-center">
            <p className="text-blue-100/80 text-sm">
              © 2024 AzuraCode. Tous droits réservés.
            </p>
            <button
              onClick={() => setShowSnake(true)}
              className="w-4 h-4 mt-4 mx-auto opacity-0 hover:opacity-100 transition-opacity duration-300"
              aria-label="Easter egg"
            >
              🎮
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showSnake && (
          <Snake onClose={() => setShowSnake(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}