import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CreditCard, Smartphone, Building, CheckCircle, AlertCircle } from 'lucide-react';
import { SEO, SEO_CONFIG } from '../components/SEO';

export const Donation: React.FC = () => {
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'mobile_money',
      name: 'Mobile Money',
      description: 'Orange Money, Wave, Free Money',
      icon: <Smartphone size={24} />,
      available: true,
    },
    {
      id: 'card',
      name: 'Carte Bancaire',
      description: 'Visa, Mastercard',
      icon: <CreditCard size={24} />,
      available: false, // À activer avec Stripe
    },
    {
      id: 'bank_transfer',
      name: 'Virement Bancaire',
      description: 'Transfert direct',
      icon: <Building size={24} />,
      available: true,
    },
  ];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
  };

  const getSelectedAmountValue = (): number => {
    return parseFloat(customAmount) || 0;
  };

  const handleDonate = () => {
    const amount = getSelectedAmountValue();
    if (amount <= 0) {
      alert('Veuillez entrer un montant valide');
      return;
    }
    if (!selectedPayment) {
      alert('Veuillez sélectionner un mode de paiement');
      return;
    }

    // Simulation de traitement de don
    // TODO: Intégrer vraie solution de paiement (Stripe, Wave API, etc.)
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setCustomAmount('');
      setSelectedPayment(null);
    }, 5000);
  };

  return (
    <>
      <SEO {...SEO_CONFIG.donation} />
      <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heart size={60} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Faites un Don</h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Votre générosité change des vies. Chaque contribution compte pour soutenir les migrants vulnérables au Sénégal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Column - Donation Form */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 text-green-800 p-6 rounded-xl mb-8 flex items-start gap-4"
                >
                  <CheckCircle size={28} className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Merci pour votre générosité!</h3>
                    <p className="mb-2">
                      Votre don de <strong>{getSelectedAmountValue()} FCFA</strong> sera utilisé pour améliorer la vie des migrants vulnérables.
                    </p>
                    <p className="text-sm text-green-700">
                      Un email de confirmation vous sera envoyé sous peu.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Donation Type Toggle */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-4">Type de don</h2>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDonationType('onetime')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                      donationType === 'onetime'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                    }`}
                  >
                    Don ponctuel
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                      donationType === 'monthly'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary'
                    }`}
                  >
                    Don mensuel
                  </button>
                </div>
                {donationType === 'monthly' && (
                  <p className="mt-3 text-sm text-gray-600 flex items-center gap-2">
                    <Heart size={16} className="text-red-500" />
                    Un don mensuel nous aide à planifier nos actions à long terme
                  </p>
                )}
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-6">Montant de votre don</h2>

                {/* Custom Amount Only */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-3">
                    Entrez le montant que vous souhaitez donner (FCFA)
                  </label>
                  <input
                    id="amount"
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Ex: 5000"
                    className={`w-full py-4 px-6 rounded-lg border-2 text-xl font-bold outline-none transition ${
                      customAmount
                        ? 'border-primary ring-4 ring-primary/20 bg-primary/5'
                        : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                    }`}
                  />
                  <p className="mt-3 text-sm text-gray-600">
                    💡 Tout montant compte, quelle que soit sa valeur. Votre générosité fait la différence.
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-4">Mode de paiement</h2>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => method.available && setSelectedPayment(method.id)}
                      disabled={!method.available}
                      className={`w-full p-4 rounded-lg border-2 transition text-left flex items-center gap-4 ${
                        selectedPayment === method.id
                          ? 'border-primary bg-primary/5 shadow-md'
                          : method.available
                          ? 'border-gray-300 hover:border-primary bg-white'
                          : 'border-gray-200 bg-gray-100 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <div className={`p-3 rounded-lg ${
                        selectedPayment === method.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-dark">{method.name}</h3>
                          {!method.available && (
                            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                              Bientôt disponible
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                      {selectedPayment === method.id && (
                        <CheckCircle size={24} className="text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Instructions */}
              {selectedPayment === 'mobile_money' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6"
                >
                  <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <Smartphone size={20} />
                    Instructions Mobile Money
                  </h3>
                  <p className="text-sm text-blue-800 mb-2">
                    Après avoir cliqué sur "Confirmer le don", vous recevrez un SMS avec les instructions pour compléter le paiement via:
                  </p>
                  <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
                    <li>Orange Money: Composez #144#</li>
                    <li>Wave: Ouvrez l'application Wave</li>
                    <li>Free Money: Composez *145#</li>
                  </ul>
                </motion.div>
              )}

              {selectedPayment === 'bank_transfer' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6"
                >
                  <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <Building size={20} />
                    Informations bancaires
                  </h3>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p><strong>Nom du compte:</strong> EI-MIGRANT</p>
                    <p><strong>Banque:</strong> [À compléter]</p>
                    <p><strong>IBAN:</strong> [À compléter]</p>
                    <p><strong>SWIFT/BIC:</strong> [À compléter]</p>
                    <p className="mt-3 text-xs">
                      Merci d'indiquer "DON" et votre nom dans le libellé du virement.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleDonate}
                disabled={getSelectedAmountValue() < 5 || !selectedPayment}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-orange-600 transition transform hover:-translate-y-1 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                <Heart size={24} />
                Confirmer le don de {getSelectedAmountValue()}€
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                🔒 Paiement sécurisé et confidentiel
              </p>
            </motion.div>
          </div>

          {/* Right Column - Impact Info */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Impact of Donation */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-dark mb-4">L'impact de votre don</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Heart size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">10€</p>
                      <p className="text-sm text-gray-600">1 consultation médicale</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Heart size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">50€</p>
                      <p className="text-sm text-gray-600">1 kit scolaire complet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Heart size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">100€</p>
                      <p className="text-sm text-gray-600">1 formation professionnelle</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Heart size={20} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">250€</p>
                      <p className="text-sm text-gray-600">1 mois de soutien familial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Deduction Info */}
              <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Déduction fiscale</h3>
                <p className="text-sm opacity-90 mb-3">
                  En tant qu'association reconnue, vos dons peuvent être déductibles des impôts selon la législation de votre pays.
                </p>
                <p className="text-xs opacity-75">
                  Un reçu fiscal vous sera envoyé par email.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-dark mb-3">Transparence</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span>85% des dons vont directement aux programmes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span>Rapports d'activité annuels publiés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-500" />
                    <span>Paiements sécurisés et traçables</span>
                  </div>
                </div>
              </div>

              {/* Contact for Large Donations */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-300">
                <h3 className="text-lg font-bold text-dark mb-2">Don important?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pour les dons supérieurs à 1000€, contactez-nous pour discuter de projets spécifiques.
                </p>
                <a
                  href="/contact"
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Nous contacter →
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-8">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-dark mb-2">Mon don est-il sécurisé?</h3>
              <p className="text-gray-600 text-sm">
                Oui, tous les paiements sont traités via des plateformes sécurisées et cryptées.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Puis-je annuler mon don mensuel?</h3>
              <p className="text-gray-600 text-sm">
                Absolument. Vous pouvez annuler votre don mensuel à tout moment en nous contactant.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Recevrai-je un reçu?</h3>
              <p className="text-gray-600 text-sm">
                Oui, un reçu fiscal vous sera envoyé par email après chaque don.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Comment sont utilisés les fonds?</h3>
              <p className="text-gray-600 text-sm">
                85% vont directement aux programmes, 15% couvrent les frais administratifs essentiels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
