import { Certification, Achievement } from '../types';

export const certifications: Certification[] = [
  { name: 'C++ Object Basics Certificate', issuer: 'Coursera', platform: 'Coursera' },
  { name: 'Machine Learning with Python', issuer: 'IBM', platform: 'Coursera' },
  { name: 'Advanced Deep Learning Methods for Healthcare', issuer: 'UC San Diego', platform: 'Coursera' },
  { name: 'Data Privacy & Security', issuer: 'University of California, Irvine', platform: 'Coursera' },
  { name: 'CertNexus Certified Artificial Intelligence Practitioner', issuer: 'CertNexus', platform: 'Coursera' },
  { name: 'Introduction to Java', issuer: 'SoloLearn', platform: 'SoloLearn' },
  { name: 'Data Structures', issuer: 'UC San Diego', platform: 'Coursera' },
  { name: 'Generative AI with Large Language Models', issuer: 'AWS', platform: 'Coursera' },
  { name: 'Fundamentals of Reinforcement Learning', issuer: 'University of Alberta', platform: 'Coursera' }
];

export const achievements: Achievement[] = [
  {
    title: 'Alliance Technology Conference (ATCON-1)',
    organization: 'IEEE',
    date: 'December 2024',
    description: 'Participated in the premier technology conference showcasing latest innovations'
  },
  {
    title: 'Flipkart Runway: Season 4 Online Quiz',
    organization: 'Flipkart',
    date: 'November 2024',
    description: 'Participated in competitive online quiz competition'
  },
  {
    title: 'AI & ML Webinars Participation',
    organization: 'Various Organizations',
    date: 'January 2025',
    description: 'Active participation in multiple AI/ML focused webinars and workshops'
  },
  {
    title: 'NXT Wave Webinar on Gen AI',
    organization: 'NXT Wave',
    date: 'December 2024',
    description: 'Participated in specialized webinar on Generative AI technologies'
  },
  {
    title: 'Microsoft Introduction to Machine Learning Badge',
    organization: 'Microsoft',
    date: 'May 2025',
    description: 'Earned badge for completing foundational training in ML concepts'
  }
];