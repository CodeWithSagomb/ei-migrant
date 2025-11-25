import React from 'react';
import { motion } from 'framer-motion';
import { MISSIONS } from '../constants';
import { Heart, Users, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';

export const Missions: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    heart: <Heart size={24} className="text-white" />,
    users: <Users size={24} className="text-white" />,
    book: <BookOpen size={24} className="text-white" />,
    briefcase: <Briefcase size={24} className="text-white" />,
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nos Missions</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Nous intervenons dans quatre secteurs clés pour répondre aux besoins diversifiés des migrants vulnérables au Sénégal.
          </p>
        </div>
      </div>

      {/* Missions List */}
      <div className="container mx-auto px-4 py-20 space-y-24">
        {MISSIONS.map((mission, index) => (
          <motion.div 
            key={mission.id}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className={`absolute -top-4 ${index % 2 === 1 ? '-right-4' : '-left-4'} w-full h-full border-2 border-primary rounded-2xl z-0`}></div>
                <img 
                  src={mission.image} 
                  alt={mission.title} 
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover relative z-10"
                />
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg z-20">
                  <div className="bg-secondary p-3 rounded-full">
                    {iconMap[mission.iconName]}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-dark mb-4">{mission.title}</h2>
              <p className="text-lg text-primary font-medium mb-6">
                {mission.description}
              </p>
              <div className="space-y-4">
                {mission.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom Banner */}
      <section className="bg-dark py-16 text-center text-white">
        <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">Ensemble, construisons un avenir inclusif</h3>
            <p className="mb-8 max-w-2xl mx-auto text-gray-300">
                L'organisation s'efforce de combler les lacunes existantes dans l'accès aux soins, à l'éducation et à l'emploi.
            </p>
        </div>
      </section>
    </div>
  );
};