import React from 'react';
import { motion } from 'framer-motion';
import { MISSIONS } from '../constants';
import { Shield, RefreshCw, Sparkles, Users, Megaphone, CheckCircle2 } from 'lucide-react';
import { SEO, SEO_CONFIG } from '../components/SEO';

export const Missions: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield size={24} className="text-white" />,
    refresh: <RefreshCw size={24} className="text-white" />,
    sparkles: <Sparkles size={24} className="text-white" />,
    users: <Users size={24} className="text-white" />,
    megaphone: <Megaphone size={24} className="text-white" />,
  };

  return (
    <>
      <SEO {...SEO_CONFIG.missions} />
      <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Nos Missions</h1>
          <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto">
            Nous intervenons dans cinq axes stratégiques pour répondre aux besoins diversifiés des migrants vulnérables au Sénégal.
          </p>
        </div>
      </div>

      {/* Missions List */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {MISSIONS.map((mission, index) => (
          <motion.div
            key={mission.id}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <img
                  src={mission.image}
                  alt={mission.title}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md">
                  <div className="bg-secondary p-2 rounded-full">
                    {iconMap[mission.iconName]}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">{mission.title}</h2>
              <p className="text-base md:text-lg text-primary font-medium mb-4">
                {mission.description}
              </p>
              <div className="space-y-3">
                {mission.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom Banner */}
      <section className="bg-dark py-12 text-center text-white">
        <div className="container mx-auto px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Ensemble, construisons un avenir inclusif</h3>
            <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-300">
                L'organisation s'efforce de combler les lacunes existantes dans l'accès aux soins, à l'éducation et à l'emploi.
            </p>
        </div>
      </section>
    </div>
    </>
  );
};