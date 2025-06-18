import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-study-planner',
    title: 'AI-Based Personalized Study Planner using Reinforcement Learning',
    description: 'Full-stack AI-powered study planner with personalized learning schedules and gamification features.',
    technologies: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Reinforcement Learning', 'REST API'],
    highlights: [
      'Developed full-stack application using FastAPI backend and React.js frontend',
      'Implemented reinforcement learning for dynamic study time allocation',
      'Designed gamified reward system (XP, badges, penalties) for user engagement',
      'Integrated AI-driven counseling module for motivational support',
      'Achieved improved study discipline and productivity in pilot testing'
    ],
    date: 'April 2025',
    category: 'Full Stack'
  },
  {
    id: 'bus-booking-system',
    title: 'Online Bus Booking System',
    description: 'Responsive full-stack bus booking application with real-time seat tracking and admin dashboard.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'MySQL'],
    highlights: [
      'Developed responsive full-stack app with real-time seat tracking',
      'Designed and implemented RESTful APIs for user authentication and booking operations',
      'Created relational database schema in MySQL for efficient data management',
      'Built responsive frontend enabling cross-device accessibility'
    ],
    date: 'March 2025',
    category: 'Web Development'
  },
  {
    id: 'smart-attendance',
    title: 'Smart Attendance System',
    description: 'Real-time attendance tracking system using facial detection and recognition technology.',
    technologies: ['Python', 'OpenCV', 'MySQL'],
    highlights: [
      'Built real-time attendance tracking using facial detection and recognition',
      'Integrated MySQL for automatic attendance logging and management',
      'Enabled contactless user verification reducing manual errors',
      'Designed simple GUI for easy operation and real-time status display'
    ],
    date: 'February 2025',
    category: 'AI/Computer Vision'
  },
  {
    id: 'fire-detection-system',
    title: 'Fire Detection and Emergency Alert System',
    description: 'Real-time fire detection system with automated emergency alerts using IoT technology.',
    technologies: ['Arduino', 'C++', 'GSM Module', 'Embedded Systems'],
    highlights: [
      'Designed real-time fire detection using Arduino Uno, flame sensor, and GSM module',
      'Implemented automated call alerts to emergency contacts upon fire detection',
      'Integrated buzzer alarm system for immediate on-site awareness',
      'Optimized sensor responsiveness with non-blocking loop logic',
      'Led end-to-end deployment making system energy-efficient and scalable'
    ],
    date: 'October 2024',
    category: 'IoT/Embedded'
  },
  {
    id: 'object-detection-cnn',
    title: 'Object Detection using CNN',
    description: 'Real-time object detection system using Convolutional Neural Networks for multi-object identification.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas'],
    highlights: [
      'Implemented object detection system using CNN for real-time identification',
      'Used TensorFlow and Keras for model training, OpenCV for image processing',
      'Applied data augmentation and preprocessing for improved model generalization',
      'Fine-tuned CNN architecture for better accuracy across varied environments',
      'Achieved high precision in detecting multiple objects from diverse datasets'
    ],
    date: 'January 2025',
    category: 'AI/Computer Vision'
  },
  {
    id: 'adversarial-image-generation',
    title: 'Adversarial Image Generation using FGSM on CIFAR-100',
    description: 'Implementation of Fast Gradient Sign Method to generate adversarial examples and analyze model vulnerability.',
    technologies: ['Python', 'TensorFlow', 'NumPy'],
    highlights: [
      'Implemented Fast Gradient Sign Method for adversarial example generation',
      'Analyzed model vulnerability by evaluating accuracy drops against adversarial inputs',
      'Used CIFAR-100 dataset for comprehensive testing and evaluation'
    ],
    date: 'November 2024',
    category: 'Machine Learning'
  }
];