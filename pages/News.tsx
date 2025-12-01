import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, User, ArrowRight } from 'lucide-react';
import {
  getNewsArticles,
  getFeaturedNews,
  formatDate,
  CATEGORY_COLORS,
  type NewsArticle,
} from '../data/newsData';
import { SEO, SEO_CONFIG } from '../components/SEO';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsArticle['category'] | 'Toutes'>('Toutes');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const allNews = getNewsArticles();
  const featuredNews = getFeaturedNews();
  const categories: Array<NewsArticle['category'] | 'Toutes'> = ['Toutes', 'Programme', 'Événement', 'Témoignage', 'Partenariat', 'Annonce'];

  const filteredNews = selectedCategory === 'Toutes'
    ? allNews
    : allNews.filter(article => article.category === selectedCategory);

  const handleReadMore = (article: NewsArticle) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  // If an article is selected, show full article view
  if (selectedArticle) {
    return (
      <div className="bg-white min-h-screen">
        <SEO {...SEO_CONFIG.news} />

        {/* Article Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              ← Retour aux actualités
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${CATEGORY_COLORS[selectedArticle.category]} bg-white/20 backdrop-blur`}>
                  {selectedArticle.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedArticle.title}</h1>

              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(selectedArticle.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{selectedArticle.author}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Article Image */}
        <div className="container mx-auto px-4 -mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: '#374151',
              }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-primary hover:text-secondary font-semibold transition"
              >
                ← Retour aux actualités
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // News list view
  return (
    <div className="bg-gray-50">
      <SEO {...SEO_CONFIG.news} />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Actualités</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Suivez nos dernières nouvelles, événements et histoires inspirantes de notre communauté.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition shadow-md ${
                  selectedCategory === category
                    ? 'bg-primary text-white scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured News (if "Toutes" is selected) */}
        {selectedCategory === 'Toutes' && featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">À la une</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer group"
                  onClick={() => handleReadMore(article)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${CATEGORY_COLORS[article.category]}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Lire la suite <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All News */}
        <div>
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">
            {selectedCategory === 'Toutes' ? 'Toutes les actualités' : `Actualités - ${selectedCategory}`}
          </h2>

          {filteredNews.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl">
              <p className="text-gray-500 text-lg">Aucune actualité dans cette catégorie pour le moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group"
                  onClick={() => handleReadMore(article)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[article.category]}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Lire la suite <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
