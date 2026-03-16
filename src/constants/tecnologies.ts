import type { ITechnology } from "../types";

export const getTecnologies = (): ITechnology[] => [
  {
    title: 'FRONTEND',
    alt: 'FRONTEND',
    image: 'laptop.png',
    elements: [
      {
        title: 'React & NextJs',
        image: 'react.svg',
        alt: 'React & NextJs'
      },
      { title: 'Angular', image: 'angular.svg', alt: 'Angular' },
      { title: 'TypeScript', image: 'typescript.svg', alt: 'TypeScript' },
      {
        title: 'Tailwind CSS',
        image: 'tailwindcss.svg',
        alt: 'Tailwind CSS'
      }
    ]
  },
  {
    title: 'BACKEND',
    alt: 'BACKEND',
    image: 'gear.png',
    elements: [
      {
        title: 'NodeJs & Express',
        image: 'nodedotjs.svg',
        alt: 'Node.js'
      },
      { title: '.NET', image: 'dotnet.svg', alt: '.NET' },
      { title: 'GraphQL', image: 'graphql.svg', alt: 'GraphQL' },
      { title: 'NestJs', image: 'nestjs.svg', alt: 'NestJs' }
    ]
  },
  {
    title: 'DATABASE',
    alt: 'DATABASE',
    image: 'card-file-box.png',
    elements: [
      { title: 'PostgreSQL', image: 'postgresql.svg', alt: 'PostgreSQL' },
      { title: 'MySql', image: 'mysql.svg', alt: 'MySql' },
      { title: 'MongoDB', image: 'mongodb.svg', alt: 'MongoDB' },
      { title: 'Redis', image: 'redis.svg', alt: 'Redis' }
    ]
  },
  {
    title: 'DEVOPS',
    alt: 'DEVOPS',
    image: 'hammer-and-wrench.png',
    elements: [
      { title: 'Docker', image: 'docker.svg', alt: 'Docker' },
      { title: 'Kubernetes', image: 'kubernetes.svg', alt: 'Kubernetes' },
      { title: 'AWS', image: 'amazonwebservices.svg', alt: 'AWS' },
      { title: 'Jenkins', image: 'jenkins.svg', alt: 'Jenkins' }
    ]
  }
];
