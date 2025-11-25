import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, BookOpen, Briefcase } from 'lucide-react';
import { MISSIONS } from '../constants';
import { IMAGES } from '../imageConstants';

export const Home: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    heart: <Heart size={32} className="text-white" />,
    users: <Users size={32} className="text-white" />,
    book: <BookOpen size={32} className="text-white" />,
    briefcase: <Briefcase size={32} className="text-white" />,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.home.hero}
            alt="Communauté et Solidarité"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Une Organisation Engagée <br/> pour les <span className="text-secondary">Migrants Vulnérables</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            Nous œuvrons pour l'équité, l'inclusion et la dignité de chaque individu au Sénégal, quelle que soit son origine.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/missions"
              className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg text-center"
            >
              Découvrir nos missions
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition text-center"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Agir au plus près des besoins</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              EI-MIGRANT est une organisation dynamique née du désir de venir en aide à ceux qui rencontrent des obstacles dans leur parcours migratoire.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre force réside dans notre proximité avec notre cible. Nous intervenons directement sur le terrain, en contact permanent avec les migrants eux-mêmes, pour apporter des réponses concrètes en matière de santé, d'éducation et d'intégration.
            </p>
            <Link
              to="/about"
              className="flex items-center gap-2 text-primary font-bold hover:text-dark transition"
            >
              Lire notre histoire <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="grid grid-cols-2 gap-4"
          >
            <img src={IMAGES.home.community1} className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Soutien" />
            <img src={IMAGES.home.community2} className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Communauté" />
          </motion.div>
        </div>
      </section>

      {/* Pillars Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Nos 4 Piliers d'Intervention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche holistique pour favoriser l'intégration harmonieuse dans la société sénégalaise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MISSIONS.map((mission, index) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to="/missions"
                  className="block bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300 shadow-lg">
                    {iconMap[mission.iconName]}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">{mission.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {mission.description}
                  </p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Soutenez notre action</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Chaque don contribue directement à améliorer l'accès aux soins, à l'éducation et à l'autonomie des migrants vulnérables au Sénégal.
          </p>
          <button className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all">
            Faire un don maintenant
          </button>
        </div>
      </section>
    </div>
  );
};