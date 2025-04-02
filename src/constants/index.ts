import type { SocialLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
	{
		name: 'GitHub',
		icon: 'github.svg',
		url: 'https://github.com/cvelasquezr8',
		color: 'from-gray-800 to-gray-600',
		hoverColor: 'group-hover:from-gray-700 group-hover:to-gray-500',
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin.svg',
		url: 'https://linkedin.com/in/cvelasquezr8',
		color: 'from-blue-700 to-blue-500',
		hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-400',
	},
	{
		name: 'HackerRank',
		icon: 'hacker-rank.svg',
		url: 'https://hackerrank.com/profile/cvelasquezr8',
		color: 'from-green-700 to-green-500',
		hoverColor: 'group-hover:from-green-600 group-hover:to-green-400',
	},
	{
		name: 'LeetCode',
		icon: 'leetcode.svg',
		url: 'https://leetcode.com/u/cvelasquezr8/',
		color: 'from-yellow-700 to-yellow-500',
		hoverColor: 'group-hover:from-yellow-600 group-hover:to-yellow-400',
	},
	{
		name: 'RoadMap',
		icon: 'roadmap.svg',
		url: 'https://roadmap.sh/u/cvelasquezr8',
		color: 'from-purple-700 to-purple-500',
		hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-400',
	},
];

export const LANGUAGES = [
	{ code: 'en', label: 'English', flag: 'images/flag-usa.png' },
	{ code: 'es', label: 'Español', flag: 'images/flag-spain.png' },
];
