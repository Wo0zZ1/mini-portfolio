import type { ITag } from '../../constants/data'

import github from '../../assets/contacts/github.png'

import styles from './index.module.scss'

interface IProjectCardProps {
	name: string
	description: string
	tags: ITag[]
	image: string
	source_code_link: string
	site_link: string
}

const colorsMap = {
	blue: styles.blue,
	pink: styles.red,
	green: styles.green,
}

export function ProjectCard({
	name,
	description,
	tags,
	image,
	source_code_link,
	site_link,
}: IProjectCardProps) {
	return (
		<div className={styles.root}>
			<div className={styles.f1}>
				<a href={site_link} target='_blank'>
					<img src={image} alt={name} />
				</a>

				<div className={styles.f2}>
					<a href={source_code_link} target='_blank'>
						<img src={github} alt='github' />
					</a>
				</div>
			</div>

			<div className={styles.f5}>
				<div className={styles.f3}>
					<h3>{name}</h3>
					<p>{description}</p>
				</div>

				<div className={styles.f4}>
					{tags.map(tag => (
						<div key={tag.name}>
							<p className={colorsMap[tag.color]}>#{tag.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
