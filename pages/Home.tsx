import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, RefreshCw, Sparkles, Users, Megaphone, Heart, Quote } from 'lucide-react';
import { MISSIONS } from '../constants';
import { IMAGES } from '../imageConstants';
import { SEO, SEO_CONFIG, ORGANIZATION_STRUCTURED_DATA } from '../components/SEO';

export const Home: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield size={40} className="text-white" />,
    refresh: <RefreshCw size={40} className="text-white" />,
    sparkles: <Sparkles size={40} className="text-white" />,
    users: <Users size={40} className="text-white" />,
    megaphone: <Megaphone size={40} className="text-white" />,
  };

  return (
    <>
      <SEO
        {...SEO_CONFIG.home}
        structuredData={ORGANIZATION_STRUCTURED_DATA}
      />
      <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.home.hero}
            alt="Communauté et Solidarité"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Une Association Engagée <br/> pour les <span className="text-secondary">Migrants Vulnérables</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-light"
          >
              Nous œuvrons pour "Promouvoir l'équité, la protection, l'autonomisation et l'inclusion durable des migrants et jeunes vulnérable en mobilité à travers l'accompagnement psychosocial, économique et communautaire."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/missions"
              className="bg-white text-primary px-6 py-2.5 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Découvrir nos missions
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-2.5 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-colors text-center"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Agir au plus près des besoins</h2>
            <p className="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
              EI-MIGRANT est une organisation dynamique née du désir de venir en aide à ceux qui rencontrent des obstacles dans leur parcours migratoire.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
              Notre force réside dans notre proximité avec notre cible. Nous intervenons directement sur le terrain, en contact permanent avec les migrants eux-mêmes, pour apporter des réponses concrètes en matière de santé, d'éducation et d'intégration.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-dark transition-colors"
            >
              Lire notre histoire <ArrowRight size={18} />
            </Link>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.4 }}
             className="grid grid-cols-2 gap-3"
          >
            <img src={IMAGES.home.community1} loading="lazy" className="rounded-xl shadow-lg w-full h-48 md:h-64 object-cover mt-6" alt="Soutien" />
            <img src={IMAGES.home.community2} loading="lazy" className="rounded-xl shadow-lg w-full h-48 md:h-64 object-cover" alt="Communauté" />
          </motion.div>
        </div>
      </section>

      {/* Slogan Section - "Personne ne marche seul" */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>

        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Icône décorative en haut */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="flex items-center gap-3">
                <Heart size={32} className="text-white/80" fill="currentColor" />
                <Users size={32} className="text-white/80" />
                <Heart size={32} className="text-white/80" fill="currentColor" />
              </div>
            </motion.div>

            {/* Guillemet ouverture */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="flex justify-start mb-4"
            >
              <Quote size={48} className="text-white/30" />
            </motion.div>

            {/* Slogan principal */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Personne ne marche seul
            </motion.h2>

            {/* Guillemet fermeture */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex justify-end mb-8"
            >
              <Quote size={48} className="text-white/30 rotate-180" />
            </motion.div>

            {/* Ligne décorative */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 h-1 bg-white/60 mx-auto mb-6"
            ></motion.div>

            {/* Texte contextuel */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Cette vision, transmise par le père de notre fondatrice, est au cœur de notre mission.
              Ensemble, nous accompagnons chaque migrant sur son chemin vers la protection et l'autonomie.
            </motion.p>

            {/* CTA subtil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors border-b-2 border-white/40 hover:border-white pb-1"
              >
                Découvrir notre histoire <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Summary */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">Nos axes d'interventions </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Une approche holistique pour favoriser l'intégration harmonieuse dans la société sénégalaise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {MISSIONS.map((mission, index) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to="/missions"
                  className="block bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 group cursor-pointer h-full"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 group-hover:from-secondary group-hover:to-secondary/80 transition-colors duration-200 shadow-md mx-auto">
                    {iconMap[mission.iconName]}
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2 text-center leading-tight min-h-[3rem]">{mission.title}</h3>
                  <p className="text-gray-600 text-xs mb-3 text-center leading-relaxed">
                    {mission.description}
                  </p>
                  <span className="text-primary text-xs font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Soutenez notre action</h2>
          <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base opacity-90">
            Chaque don contribue directement à améliorer l'accès aux soins, à l'éducation et à l'autonomie des migrants vulnérables au Sénégal.
          </p>
          <Link
            to="/donation"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-orange-600 transition-colors"
          >
            Faire un don maintenant
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};