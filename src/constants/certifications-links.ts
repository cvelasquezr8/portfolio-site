import type { useTranslations } from "../i18n";
import type { INavigationLink } from "../types";

export const getCertificationsLinks = (
  translations: ReturnType<typeof useTranslations>,
  pathPage: string
): INavigationLink[] => [
  {
    title: translations('certificate.cloud_native_academy.devsecops.title'),
    name: translations('footer.certificates.cloud_native_academy.devsecops'),
    academy: 'Cloud Native Academy',
    description: translations('certificate.cloud_native_academy.devsecops.description'),
    icon: { image: 'github-actions.svg', alt: 'Github Actions CI/CD' },
    tags: ['2026', 'CI/CD', 'Github Actions'],
    pdfUrl: `${pathPage}certificates/devsecops-github-actions.pdf`
  },
  {
    title: translations('certificate.hacker_rank_node_intermediate.title'),
    name: translations('footer.certificates.hacker_rank_node_intermediate'),
    academy: 'HackerRank',
    description: translations('certificate.hacker_rank_node_intermediate.description'),
    icon: { image: 'nodedotjs.svg', alt: 'NodeJs' },
    tags: ['2025', 'NodeJs', 'Middleware', 'Rest API'],
    pdfUrl: `${pathPage}certificates/nodejs-intermediate-certificate.pdf`
  },
  {
    title: translations('certificate.devtalles.nestjs.title'),
    name: translations('footer.certificates.devtalles.nestjs'),
    academy: 'DevTalles',
    icon: { image: 'nestjs.svg', alt: 'NestJs' },
    description: translations('certificate.devtalles.nestjs.description'),
    tags: ['2025', 'NestJs', 'Rest API', 'JWT', 'TypeOrm', 'PostgreSQL', 'WebSockets'],
    pdfUrl: `${pathPage}certificates/nestjs.pdf`
  },
  {
    title: translations('certificate.devtalles.title'),
    name: translations('footer.certificates.devtalles.node_clean_architecture'),
    academy: 'DevTalles',
    icon: { image: 'nodedotjs.svg', alt: 'NodeJs' },
    description: translations('certificate.devtalles.description'),
    tags: ['2024', 'NodeJs', 'Rest API', 'Clean Architecture'],
    pdfUrl: `${pathPage}certificates/node-clean-architecture.pdf`
  },
  {
    title: translations('certificate.hacker_rank_node_basic.title'),
    name: translations('footer.certificates.hacker_rank_node_basic'),
    academy: 'HackerRank',
    icon: { image: 'nodedotjs.svg', alt: 'NodeJs' },
    description: translations('certificate.hacker_rank_node_basic.description'),
    tags: ['2024', 'NodeJs'],
    pdfUrl: `${pathPage}certificates/hackerrank-nodejs.pdf`
  },
  {
    title: translations('certificate.udemy_sql_advance.title'),
    name: translations('footer.certificates.udemy_sql_advance'),
    academy: 'Udemy',
    icon: { image: 'sql-server.svg', alt: 'SQL Server' },
    description: translations('certificate.udemy_sql_advance.description'),
    tags: ['2021', 'SQL Server'],
    pdfUrl: `${pathPage}certificates/sql-advanced.pdf`
  }
];
