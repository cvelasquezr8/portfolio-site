import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const bilingualString = z.object({
	en: z.string(),
	es: z.string(),
});

const icon = z.object({
	image: z.string(),
	alt: z.string(),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: bilingualString,
		summary: bilingualString,
		description: bilingualString,
		images: z.array(z.string()).min(1),
		stack: z.array(z.string()).min(1),
		githubUrl: z.string().url().optional(),
		liveUrl: z.string().url().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const workExperience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work-experience' }),
	schema: z.object({
		company: z.string(),
		name: z.string(),
		role: bilingualString,
		period: bilingualString,
		description: bilingualString,
		summary: bilingualString,
		techs: z.array(z.string()),
		icon: icon.optional(),
		href: z.string().optional(),
		order: z.number().default(0),
	}),
});

const certifications = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
	schema: z.object({
		title: bilingualString,
		name: bilingualString,
		academy: z.string(),
		description: bilingualString,
		icon,
		tags: z.array(z.string()),
		pdfPath: z.string(),
		order: z.number().default(0),
	}),
});

const roadmap = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/roadmap' }),
	schema: z.object({
		name: bilingualString,
		description: bilingualString,
		href: z.string().optional(),
		isTargetBlank: z.boolean().default(false),
		icon: z.object({ image: z.string(), alt: z.string() }),
		status: z.enum(['completed', 'in-progress']),
		tags: z.array(z.string()),
		order: z.number().default(0),
	}),
});

const technologies = defineCollection({
	loader: file('src/content/technologies.json'),
	schema: z.object({
		id: z.string(),
		title: bilingualString,
		eyebrow: bilingualString,
		size: z.enum(['xl', 'lg', 'md', 'sm']).default('md'),
		elements: z.array(
			z.object({
				title: z.string(),
				image: z.string().optional(),
				glyph: z.enum(['server', 'balancer', 'database', 'storage']).optional(),
				color: z.string(),
				primary: z.boolean().default(false),
			}),
		),
		order: z.number().default(0),
	}),
});

const socialLinks = defineCollection({
	loader: file('src/content/social-links.json'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		title: z.string(),
		icon: z.string(),
		url: z.string().url(),
		color: z.string(),
		hoverColor: z.string(),
		order: z.number().default(0),
	}),
});

const navigation = defineCollection({
	loader: file('src/content/navigation.json'),
	schema: z.object({
		id: z.string(),
		name: bilingualString,
		href: z.string(),
		order: z.number().default(0),
	}),
});

export const collections = {
	projects,
	workExperience,
	certifications,
	roadmap,
	technologies,
	socialLinks,
	navigation,
};
