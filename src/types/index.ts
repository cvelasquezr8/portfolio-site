export interface ISocialLink {
  name: string;
  title?: string;
  icon: string;
  url: string;
  color?: string;
  hoverColor?: string;
}

export interface Tag {
  name: string;
  color?: string;
}

export interface BaseCard {
  title: string;
  description: string;
  summary?: string;
  icon: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description?: string;
  techs?: string[];
  title?: string;
  summary?: string;
}

export interface ILanguage {
  code: string;
  label: string;
  flag: string;
}

export interface INavigationLink {
  name?: string;
  href?: string;
  isTargetBlank?: boolean;
  pdfUrl?: string;
  title?: string;
  academy?: string;
  icon?: {
    image?: string;
    alt?: string;
  };
  description?: string;
  tags?: string[];
  status?: string;
}

export interface IFooterNavigationLink {
  title: string;
  elements: INavigationLink[];
}

export interface IWorkExperience {
  company: string;
  name: string;
  role: string;
  period: string;
  description: string;
  techs: string[];
  summary: string;
	href?: string;
  icon?: {
    image: string;
    alt: string;
  };
}

export interface ITechnology {
  title: string;
  alt: string;
  image: string;
  elements: {
    title: string;
    image: string;
    alt: string;
  }[];
}
