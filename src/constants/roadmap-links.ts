import { useTranslations } from '../i18n/utils';
import type { INavigationLink } from '../types';

export const getRoadmapLinks = (translations: ReturnType<typeof useTranslations>): INavigationLink[] => [
  {
    name: translations('roadmap.fitness_tracker.title'),
    href: '',
    isTargetBlank: false,
    description: translations('roadmap.fitness_tracker.description'),
    icon: {
      image: '🏋️‍♂️',
      alt: 'Fitness Tracker'
    },
    status: 'in-progress',
    tags: [
			'2025',
			'API',
			'Node.js',
			'Postgres',
			'Docker',
			'Typescrypt',
			'JWT',
			'Unit Testing',
			'Swagger',
			'Fitness',
		],
  },
  {
    name: translations('roadmap.url_shortener.title'),
    href: 'https://github.com/cvelasquezr8/url-shortening-service.git',
    isTargetBlank: true,
    description: translations('roadmap.url_shortener.description'),
    icon: {
      image: '🔗',
      alt: 'URL Shortener'
    },
    status: 'completed',
    tags: ['2025', 'API', 'Node.js', 'Postgres', 'Docker', 'Typescrypt', 'URL Shortener']
  },
  {
    name: translations('roadmap.task_tracker.title'),
    href: 'https://github.com/cvelasquezr8/task-tracker-cli.git',
    isTargetBlank: true,
    description: translations('roadmap.task_tracker.description'),
    icon: {
      image: '📋',
      alt: 'Task Tracker CLI'
    },
    status: 'completed',
    tags: ['2025', 'CLI', 'Node.js', 'Task Management']
  }
];
