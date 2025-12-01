import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_STORY, NAME_MEANING } from '../constants';
import { IMAGES } from '../imageConstants';
import { Quote, Users, Scale, Shield, TrendingUp, Award, Lightbulb } from 'lucide-react';
import { SEO, SEO_CONFIG } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO {...SEO_CONFIG.about} />
      <div className="bg-white">
      {/* Header */}
      <div className="bg-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">À Propos de Nous</h1>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Découvrez l'histoire, la vision et les valeurs qui animent EI-MIGRANT au quotidien.
          </p>
        </div>
      </div>

      {/* The Concept Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
               className="md:w-1/2"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">La Signification de "EI-MIGRANT"</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="text-4xl font-bold text-secondary opacity-20">E</div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">Émigrer</h3>
                    <p className="text-sm text-gray-600 italic">"{NAME_MEANING.E}"</p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="flex items-start gap-3">
                  <div className="text-4xl font-bold text-secondary opacity-20">I</div>
                  <div>
                    <h3 className="text-lg font-bold text-dark">Immigrer</h3>
                    <p className="text-sm text-gray-600 italic">"{NAME_MEANING.I}"</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
                En unissant ces notions, EI-MIGRANT reflète l'expérience complète de la migration.
                Nous créons un espace où les migrants trouvent aide, soutien et ressources pour surmonter
                les obstacles et réussir leur intégration.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={IMAGES.about.integration}
                alt="Intégration et Diversité"
                loading="lazy"
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
           <motion.div
             className="bg-white p-6 md:p-8 rounded-xl shadow-lg relative"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.4 }}
           >
             <Quote className="absolute top-6 left-6 text-primary opacity-10" size={50} />
             <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 relative z-10">Notre Histoire & Fondation</h2>
             <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <img src={IMAGES.about.founder} alt="Fondatrice" loading="lazy" className="w-full h-auto rounded-full shadow-md border-4 border-gray-100" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
                    {FOUNDER_STORY}
                  </p>
                  <p className="mt-3 text-primary font-semibold text-sm">
                    - La Fondatrice
                  </p>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 md:py-16">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8">Nos Valeurs Fondamentales</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Inclusion', icon: Users },
                { name: 'Équité', icon: Scale },
                { name: 'Protection', icon: Shield },
                { name: 'Autonomisation', icon: TrendingUp },
                { name: 'Leadership', icon: Award },
                { name: 'Excellence', icon: Lightbulb }
              ].map((value, idx) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.name}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md hover:border-primary hover:from-primary/5 hover:to-secondary/5 transition-all cursor-default"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent size={20} className="text-primary" />
                      </div>
                      <span className="font-bold text-gray-800 text-xs md:text-sm">{value.name}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
         </div>
      </section>
    </div>
    </>
  );
};