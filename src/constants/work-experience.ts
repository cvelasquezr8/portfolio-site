import { useTranslations } from '../i18n/utils';
import type { IWorkExperience } from '../types';

export const getWorkExperience = (translations: ReturnType<typeof useTranslations>): IWorkExperience[] => [
  {
    company: 'EquaSystems S.A.S',
    name: 'EquaSystems S.A.S',
    role: translations('experience.equasystems.role'),
    period: translations('experience.equasystems.period'),
    description: translations('experience.equasystems.description'),
    techs: [
      'Node.js',
      'Next.js',
      'AWS',
      'MySQL',
      'TypeScript',
      'Sequelize',
      'JQuery',
      'Bootstrap',
      'Git',
      'Github',
      'JWT',
      'InsureTech'
    ],
    summary: translations('experience.equasystems.summary'),
    icon: {
      image: 'equasystems.png',
      alt: 'EquaSy,stems Logo'
    },
    href: '#experience'
  },
  {
    company: 'Softdaniv S.A',
    name: 'Softdaniv S.A',
    role: translations('experience.softdaniv.role'),
    period: translations('experience.softdaniv.period'),
    description: translations('experience.softdaniv.description'),
    techs: ['PHP', '.NET', 'SQL Server', 'C#', 'Visual Basic .NET', 'Git', 'Github', 'ERP', 'Call Center', 'Security'],
    summary: translations('experience.softdaniv.summary'),
    icon: {
      image: 'softdaniv.png',
      alt: 'Softdaniv Logo'
    },
    href: '#experience'
  }
];
