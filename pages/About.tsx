import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_STORY, NAME_MEANING } from '../constants';
import { IMAGES } from '../imageConstants';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez l'histoire, la vision et les valeurs qui animent EI-MIGRANT au quotidien.
          </p>
        </div>
      </div>

      {/* The Concept Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
               className="md:w-1/2"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">La Signification de "EI-MIGRANT"</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-secondary opacity-20">E</div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">Émigrer</h3>
                    <p className="text-gray-600 italic">"{NAME_MEANING.E}"</p>
                  </div>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-secondary opacity-20">I</div>
                  <div>
                    <h3 className="text-xl font-bold text-dark">Immigrer</h3>
                    <p className="text-gray-600 italic">"{NAME_MEANING.I}"</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-gray-700 leading-relaxed">
                En unissant ces notions, EI-MIGRANT reflète l'expérience complète de la migration. 
                Nous créons un espace où les migrants trouvent aide, soutien et ressources pour surmonter 
                les obstacles et réussir leur intégration.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <img
                src={IMAGES.about.integration}
                alt="Intégration et Diversité"
                className="relative z-10 rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
           <motion.div 
             className="bg-white p-10 rounded-2xl shadow-lg relative"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <Quote className="absolute top-8 left-8 text-primary opacity-10" size={60} />
             <h2 className="text-2xl font-bold text-dark mb-6 relative z-10">Notre Histoire & Fondation</h2>
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img src={IMAGES.about.founder} alt="Fondatrice" className="w-full h-auto rounded-full shadow-md border-4 border-gray-100" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    {FOUNDER_STORY}
                  </p>
                  <p className="mt-4 text-primary font-semibold">
                    - La Fondatrice
                  </p>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-dark mb-12">Nos Valeurs Fondamentales</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Équité', 'Inclusion', 'Solidarité', 'Dignité', 'Justice', 'Opportunité'].map((val, idx) => (
                <motion.div 
                  key={val}
                  className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="font-bold text-gray-700">{val}</span>
                </motion.div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
};