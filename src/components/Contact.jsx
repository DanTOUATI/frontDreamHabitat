import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { 
    MdFacebook, 
    MdEmail,
    MdOutlineWhatsapp,
    MdOutlineAlternateEmail,
    MdShare
  } from 'react-icons/md';
const socialLinks = [
    { icon: <MdFacebook size={24} />, name: 'Facebook', url: 'https://facebook.com' },
    { icon: <MdShare size={24} />, name: 'Twitter', url: 'https://twitter.com' },
    { icon: <MdOutlineAlternateEmail size={24} />, name: 'Email', url: 'mailto:contact@example.com' },
    { icon: <MdOutlineWhatsapp size={24} />, name: 'WhatsApp', url: 'https://wa.me/1234567890' }
  ];
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSending(false);
    alert('Message envoyé avec succès!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphonez-nous",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 765-4321"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Envoyez-nous un email",
      details: [
        "contact@dreamhabitat.com",
        "support@dreamhabitat.com"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Notre adresse",
      details: [
        "123 Avenue du Design",
        "75001 Paris, France"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Heures d'ouverture",
      details: [
        "Lun-Ven: 9h00 - 18h00",
        "Sam-Dim: Fermé"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour vous aider à transformer votre espace. N'hésitez pas à nous contacter !
          </p>
        </motion.div>
      </div>

      {/* Contact Information Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Form Section */}
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre message..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                  disabled={sending}
                >
                  {sending ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Map Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600">
                {/* Ici vous pouvez intégrer une vraie carte si vous le souhaitez */}
                <div className="h-full w-full p-8 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-6">Venez nous rencontrer</h3>
                  <div className="space-y-4">
                    <p className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      123 Avenue du Design, 75001 Paris
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      +1 (555) 123-4567
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      contact@dreamhabitat.com
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      Lun-Ven: 9h00 - 18h00
                    </p>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:text-white"
                          title={social.name}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;