import { useTranslations } from '../i18n/utils';
import type { ILanguage, INavigationLink } from '../types';

export const getNavigationLinks = (translations: ReturnType<typeof useTranslations>): INavigationLink[] => [
  {
    name: translations('nav.home'),
    href: '#'
  },
  {
    name: translations('nav.experience'),
    href: '#experience'
  },
  {
    name: translations('nav.skills'),
    href: '#technologies'
  },
  {
    name: translations('nav.challenges'),
    href: '#challenges'
  },
  {
    name: translations('nav.certificates'),
    href: '#courses'
  },
  {
    name: translations('nav.contact'),
    href: '#contact'
  }
];

export const getLanguages = (pathPage: string): ILanguage[] => [
  { code: 'en', label: 'English', flag: `${pathPage}images/flag-usa.png` },
  { code: 'es', label: 'Español', flag: `${pathPage}images/flag-spain.png` }
];
