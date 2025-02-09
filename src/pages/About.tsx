import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const fadeInSoft = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const imageScaleSoft = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Qui Sommes-Nous
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            L'Équipe
          </motion.p>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div 
                variants={fadeInSoft}
                className="relative group"
              >
                <motion.div 
                  variants={imageScaleSoft}
                  className="relative h-[32rem] w-full overflow-hidden rounded-lg bg-white"
                >
                  <img
                    src="/le-site-web-la-tu-connais/nael.jpg"
                    alt="Photo de Naël"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <motion.div 
                    variants={fadeInUp}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">Naël Lefur</h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Co-fondateur & Développeur Web
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={fadeInSoft}
                className="relative group"
              >
                <motion.div 
                  variants={imageScaleSoft}
                  className="relative h-[32rem] w-full overflow-hidden rounded-lg bg-white"
                >
                  <img
                    src="/le-site-web-la-tu-connais/IMG_4512.jpeg"
                    alt="Photo de Baptiste"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <motion.div 
                    variants={fadeInUp}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">Baptiste Monge</h3>
                    <p className="mt-2 text-sm text-gray-300">
                      Co-fondateur & Développeur Web
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Cards Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="space-y-12">
            {/* Parcours Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="flow-root bg-gray-50 rounded-lg overflow-hidden">
                <div className="lg:grid lg:grid-cols-5 lg:gap-8">
                  <motion.div 
                    variants={fadeInLeft}
                    className="p-8 lg:col-span-3"
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Parcours</h3>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-500">
                        Nous sommes deux étudiants d'<span className="font-bold">Albert School</span>, en double diplôme avec les <span className="font-bold">Mines Paris</span>, où nous avons acquis une double expertise en <span className="font-bold">code et business</span>. Passionnés par le digital et l'entrepreneuriat, nous lançons ce projet pour mettre nos compétences au service de ceux qui veulent une <span className="font-bold">présence en ligne performante et accessible</span>.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={imageScaleSoft}
                    className="relative lg:col-span-2"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                      alt="Notre équipe au travail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-transparent lg:bg-gradient-to-l"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="flow-root bg-gray-50 rounded-lg overflow-hidden">
                <div className="lg:grid lg:grid-cols-5 lg:gap-8">
                  <motion.div 
                    variants={imageScaleSoft}
                    className="relative lg:col-span-2"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                      alt="Design et développement web"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-gray-50/50 to-transparent lg:bg-gradient-to-r"></div>
                  </motion.div>
                  <motion.div 
                    variants={fadeInRight}
                    className="p-8 lg:col-span-3"
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Vision</h3>
                    <div className="space-y-4">
                      <p className="text-lg text-gray-500">
                        Nous rendons la création de sites web <span className="font-bold">accessible à tous</span>, avec des <span className="font-bold">prix</span> défiant toute concurrence. Parce que la qualité ne doit pas être un luxe, nous concevons des sites <span className="font-bold">modernes</span>, <span className="font-bold">performants et sur-mesure</span>, adaptés aux besoins de chaque client. Alliant <span className="font-bold">design</span>, <span className="font-bold">technique et stratégie</span>, nous offrons des solutions digitales efficaces, sans compromis.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}