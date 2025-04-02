export interface SocialLink {
	name: string;
	icon: string;
	url: string;
	color?: string;
	hoverColor?: string;
}

export interface NavigationLink {
	name: string;
	href: string;
	isTargetBlank?: boolean;
}

export interface Tag {
	name: string;
	color?: string;
}

export interface BaseCard {
	title: string;
	description: string;
	icon: string;
	tags: string[];
}
