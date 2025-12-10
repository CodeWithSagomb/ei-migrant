import React from 'react';
import { motion } from 'framer-motion';
import { FATHER_STORY, FOUNDER_PERSONAL_JOURNEY, FOUNDER_BIO, EI_MEANING, NAME_MEANING, ORGANIZATION_TODAY } from '../constants';
import { IMAGES } from '../imageConstants';
import { Quote, Users, Scale, Shield, TrendingUp, Award, Lightbulb, Heart, ArrowRight, GraduationCap } from 'lucide-react';
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

      {/* Notre Essence & Notre Vision */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Notre Essence */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark">
                  Notre essence
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Nous existons pour une raison simple et puissante :
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-xl md:text-2xl font-bold text-primary text-center">
                    Que personne ne marche seul.
                  </p>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Notre mission est d'accompagner, soutenir, protéger et valoriser les migrants en situation de vulnérabilité.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  À travers des actions concrètes, des partenariats solides et une présence humaine, EI-Migrant s'engage à transformer la détresse en possibilités, et le silence en voix.
                </p>
              </div>
            </motion.div>

            {/* Notre Vision */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Lightbulb size={24} className="text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark">
                  Notre vision
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Nous rêvons d'un monde où la migration n'est plus une épreuve de survie, mais une opportunité.
                </p>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Un monde où chaque migrant peut s'intégrer, s'élever, reconstruire sa dignité, et contribuer pleinement à la société qui l'accueille.
                </p>

                <div className="mt-6 flex items-center justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
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
          </div>
        </div>
      </section>

      {/* Notre Histoire : des récits d'hier à l'engagement d'aujourd'hui */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Notre histoire : des récits d'hier à l'engagement d'aujourd'hui
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
               className="md:w-1/2 space-y-5"
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.4 }}
            >
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {FATHER_STORY.introduction}
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {FATHER_STORY.journey}
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {FATHER_STORY.stories}
              </p>

              {/* Citation encadrée */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <p className="text-base md:text-lg font-semibold text-dark italic">
                  Sa vision était simple et puissante :
                </p>
                <p className="text-lg md:text-xl font-bold text-primary mt-2">
                  « {FATHER_STORY.vision} »
                </p>
              </div>
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
                alt="Un homme debout, voyageur inlassable"
                loading="lazy"
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Transmission */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
           <motion.div
             className="bg-white p-6 md:p-10 rounded-xl shadow-lg"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.4 }}
           >
             <h2 className="text-xl md:text-2xl font-bold text-dark mb-6 text-center">
               La transmission d'une vision
             </h2>

             <div className="space-y-4 mb-8">
               <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                 {FOUNDER_PERSONAL_JOURNEY.transmission}
               </p>
               <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                 {FOUNDER_PERSONAL_JOURNEY.experience}
               </p>
               <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-secondary">
                 <p className="text-base md:text-lg font-semibold text-dark italic">
                   {FOUNDER_PERSONAL_JOURNEY.legacy}
                 </p>
               </div>
             </div>

             {/* Biographie de la fondatrice */}
             <div className="border-t-2 border-gray-100 pt-8">
               <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="md:w-1/3">
                   <img
                     src={IMAGES.about.founder}
                     alt={FOUNDER_BIO.name}
                     loading="lazy"
                     className="w-full h-auto rounded-xl shadow-lg border-4 border-primary/10"
                   />
                   <div className="mt-4 text-center">
                     <h3 className="text-lg md:text-xl font-bold text-dark">
                       {FOUNDER_BIO.name}
                     </h3>
                     <p className="text-sm text-primary font-semibold mt-1">
                       Fondatrice & Directrice
                     </p>
                   </div>
                 </div>

                 <div className="md:w-2/3 space-y-4">
                   <div className="flex items-start gap-3">
                     <Heart className="text-primary flex-shrink-0 mt-1" size={24} />
                     <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                       {FOUNDER_BIO.introduction}
                     </p>
                   </div>

                   <div className="flex items-start gap-3">
                     <GraduationCap className="text-secondary flex-shrink-0 mt-1" size={24} />
                     <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                       {FOUNDER_BIO.education}
                     </p>
                   </div>

                   <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border-l-4 border-primary">
                     <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold">
                       {FOUNDER_BIO.vision}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Notre Signification : pourquoi "EI-MIGRANT" ? */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              Notre signification : pourquoi "EI-MIGRANT" ?
            </h2>
          </motion.div>

          {/* Équité & Inclusion */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Scale size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark">{EI_MEANING.equity.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic">
                {EI_MEANING.equity.description}
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Users size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark">{EI_MEANING.inclusion.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 italic">
                {EI_MEANING.inclusion.description}
              </p>
            </motion.div>
          </div>

          {/* Le mot Migrant */}
          <motion.div
            className="bg-white border-2 border-gray-200 p-6 md:p-8 rounded-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <Heart className="text-primary flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  {EI_MEANING.migrantMeaning}
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight size={20} />
                  <p className="text-sm md:text-base font-semibold">
                    {EI_MEANING.bridge}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Émigrer / Immigrer */}
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg md:text-xl font-bold text-dark mb-5 text-center">
              Le parcours complet de la migration
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-4xl font-bold text-primary opacity-30">E</div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-2">Émigrer</h4>
                  <p className="text-sm text-gray-600 italic">"{NAME_MEANING.E}"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-4xl font-bold text-secondary opacity-30">I</div>
                <div>
                  <h4 className="text-lg font-bold text-dark mb-2">Immigrer</h4>
                  <p className="text-sm text-gray-600 italic">"{NAME_MEANING.I}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aujourd'hui : deux ans d'existence */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
           <motion.div
             className="text-center space-y-5"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.4 }}
           >
             <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
               Aujourd'hui : deux ans d'existence, une histoire qui continue
             </h2>
             <Quote className="text-primary opacity-20 mx-auto" size={60} />
             <p className="text-base md:text-lg text-gray-700 leading-relaxed">
               {ORGANIZATION_TODAY.years}
             </p>
             <p className="text-base md:text-lg text-gray-700 leading-relaxed">
               {ORGANIZATION_TODAY.reflection}
             </p>
             <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
               {ORGANIZATION_TODAY.continuation}
             </p>

             {/* Citation finale */}
             <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8 border-t-4 border-primary">
               <p className="text-lg md:text-xl font-bold text-dark italic">
                 {ORGANIZATION_TODAY.conclusion}
               </p>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-12 md:py-16 bg-white">
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