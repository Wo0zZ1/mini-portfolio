// About images
import frontend from '../assets/about/frontend.webp'
import backend from '../assets/about/backend.svg'

// Import skills images
import html5 from '../assets/skills/html.png'
import css3 from '../assets/skills/css.png'
import reactJs from '../assets/skills/react.svg'
import javaScript from '../assets/skills/javascript.png'
import typeScript from '../assets/skills/typescript.png'
import nodeJs from '../assets/skills/nodejs.png'
import expressJs from '../assets/skills/express.png'
import reduxToolkit from '../assets/skills/redux.png'
import prisma from '../assets/skills/prisma.png'
import tailwind from '../assets/skills/tailwind.png'
import git from '../assets/skills/git.png'
import figma from '../assets/skills/figma.png'

// Import projects images
import notes from '../assets/projects/notes.jpg'
import define_limit from '../assets/projects/define-limit.png'
import web_calculator from '../assets/projects/web-calculator.png'

interface IGlobalData {
	firstName: string
}

export const globalData: IGlobalData = {
	firstName: 'Макс',
}

export interface ICardData {
	id: number
	logo: string
	alt?: string
	title: string
}

export const aboutCards: ICardData[] = [
	{
		id: 0,
		logo: frontend,
		alt: 'Frontend pic',
		title: 'Frontend',
	},
	{
		id: 1,
		logo: backend,
		alt: 'Backend pic',
		title: 'Backend',
	},
]

export const skillCards: ICardData[] = [
	{
		id: 0,
		logo: html5,
		alt: 'HTML 5',
		title: 'HTML 5',
	},
	{
		id: 1,
		logo: css3,
		alt: 'CSS 3',
		title: 'CSS 3',
	},
	{
		id: 2,
		logo: reactJs,
		alt: 'React',
		title: 'React',
	},
	{
		id: 3,
		logo: javaScript,
		alt: 'JavaScript',
		title: 'JavaScript',
	},
	{
		id: 4,
		logo: typeScript,
		alt: 'TypeScript',
		title: 'TypeScript',
	},
	{
		id: 5,
		logo: nodeJs,
		alt: 'NodeJS',
		title: 'NodeJS',
	},
	{
		id: 6,
		logo: expressJs,
		alt: 'Express',
		title: 'Express',
	},
	{
		id: 7,
		logo: reduxToolkit,
		alt: 'Redux Toolkit',
		title: 'Redux Toolkit',
	},
	{
		id: 8,
		logo: prisma,
		alt: 'Prisma',
		title: 'Prisma',
	},
	{
		id: 9,
		logo: tailwind,
		alt: 'Tailwind',
		title: 'Tailwind',
	},
	{
		id: 10,
		logo: git,
		alt: 'Git',
		title: 'Git',
	},
	{
		id: 11,
		logo: figma,
		alt: 'Figma',
		title: 'Figma',
	},
]

export interface ITag {
	name: string
	color: 'pink' | 'blue' | 'green'
}

export interface IProjectData {
	name: string
	description: string
	tags: ITag[]
	image: string
	source_code_link: string
	site_link: string
}

export const projectCards: IProjectData[] = [
	{
		name: 'Notes',
		description:
			'Простое, но мощное веб-приложение для управления задачами, которое помогает пользователям организовать свои задачи и повысить производительность.',
		tags: [
			{
				name: 'React',
				color: 'blue',
			},
			{
				name: 'Scss',
				color: 'pink',
			},
		],
		image: notes,
		source_code_link: 'https://github.com/Wo0zZ1/notes',
		site_link: 'https://notes-wo0zz1.vercel.app/',
	},
	{
		name: 'Web Calculator',
		description:
			'Онлайн веб-калькулятор со стильным дизайом для вычисления простейших математических операций.',
		tags: [
			{
				name: 'Native JavaScript',
				color: 'pink',
			},
			{
				name: 'OOP',
				color: 'green',
			},
		],
		image: web_calculator,
		source_code_link: 'https://github.com/Wo0zZ1/web-calculator',
		site_link: 'https://webcalculator-tan.vercel.app/',
	},
	{
		name: 'Define Limit',
		description:
			'Образовательное веб-приложение, предназначенное для помощи студентам в изучении и практике написания определений для пределов в математике.',
		tags: [
			{
				name: 'TypeScript',
				color: 'blue',
			},
			{
				name: 'LaTeX',
				color: 'green',
			},
			{
				name: 'Tailwind',
				color: 'pink',
			},
		],
		image: define_limit,
		source_code_link: 'https://github.com/Wo0zZ1/define-limit',
		site_link: 'https://define-limit.vercel.app/',
	},
]
