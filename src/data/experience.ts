import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'edunet-ai-intern',
    role: 'AI Intern',
    company: 'Edunet Foundation',
    duration: 'June 2025 - July 2025',
    location: 'Remote',
    description: 'Selected for the Shell-Edunet Skills4Future Internship by Edunet Foundation in collaboration with AICTE and Shell.',
    projects: [
      'Garbage Collection Optimization using AI - Built ML model using TensorFlow to optimize garbage collection routes',
      'Participated in mentorship sessions covering data pre-processing, visualization, model building, and evaluation',
      'Presented project to industry experts and improved solution based on feedback'
    ],
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Data Visualization', 'Machine Learning']
  },
  {
    id: 'istudio-ml-intern',
    role: 'Machine Learning Intern',
    company: 'iStudio',
    duration: 'June 2025 - July 2025',
    location: 'Remote',
    description: 'Selected for 1-month ML Internship via Internship Common Aptitude Test (iCAT) with practical exposure to Python and ML techniques.',
    projects: [
      'Developed supervised and unsupervised machine learning models',
      'End-to-end model deployment experience',
      'Real-world problem-solving through live project work and mentorship'
    ],
    technologies: ['Python', 'Machine Learning', 'Model Deployment']
  },
  {
    id: 'ybi-ai-intern',
    role: 'AI & Machine Learning Intern',
    company: 'YBI Foundation',
    duration: 'August 2024 - September 2024',
    location: 'Remote',
    description: 'Contributed to AI/ML projects demonstrating strong learning ability, technical involvement, and professionalism.',
    projects: [
      'Fake News Detection using NLP techniques and machine learning',
      'Object Detection using CNN with TensorFlow and Keras',
      'Online Bus Booking System with Python, Flask, and SQL',
      'Smart Attendance System using face detection and recognition',
      'Adversarial Image Generation using FGSM on CIFAR-100 dataset'
    ],
    technologies: ['Python', 'NLP', 'TensorFlow', 'Keras', 'OpenCV', 'Flask', 'SQL']
  },
  {
    id: 'codsoft-ml-intern',
    role: 'Machine Learning Intern',
    company: 'Codsoft',
    duration: '1 Month',
    location: 'Bangalore, India',
    description: 'Developed machine learning models for various business applications including customer churn prediction and fraud detection.',
    projects: [
      'SMS Spam Detection model using TF-IDF and Naive Bayes',
      'Customer Churn Prediction using behavioral and demographic data',
      'Credit Card Fraud Detection using supervised learning on real-world datasets'
    ],
    technologies: ['Python', 'Scikit-learn', 'TF-IDF', 'Naive Bayes', 'Logistic Regression', 'Random Forest']
  }
];