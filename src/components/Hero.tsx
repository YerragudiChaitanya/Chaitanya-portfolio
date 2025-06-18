import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/YerragudiChaitanya',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/yerragudi-chaitanya-9730a0301/',
      label: 'LinkedIn'
    },
    {
      icon: ExternalLink,
      href: 'https://www.coursera.org/user/857835f9ede0585cf7a4dc410c8405ab',
      label: 'Coursera'
    }
  ];

  const contactInfo = [
    { icon: Mail, text: 'yerragudichaitanya14@gmail.com' },
    { icon: Phone, text: '+91-8618839339' },
    { icon: MapPin, text: 'Bengaluru, Karnataka 562106' }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 p-1"
              >
                <div className="w-80 h-80 rounded-full bg-white dark:bg-gray-800"></div>
              </motion.div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Yerragudi Chaitanya"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Yerragudi{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Chaitanya
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                AI/ML Engineering Student
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                4th Year BTech CSE (AI/ML Focus) • GPA: 8.1/10.0
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
                Alliance College of Engineering and Design, Alliance University
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Passionate AI/ML student with hands-on experience in developing intelligent systems, computer vision applications, and full-stack solutions. Dedicated to leveraging cutting-edge technologies to solve real-world problems.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2">
                  <info.icon className="text-primary-600 dark:text-primary-400" size={18} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{info.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  <link.icon
                    size={24}
                    className="text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
