import { projectCards } from '../../constants/data'
import { ProjectCard } from '../ProjectCard'

import styles from './index.module.scss'

function Experience() {
	return (
		<section className='container'>
			<div className={styles.content}>
				<div className={styles.text}>
					<h2>Проекты.</h2>
					<p>
						Следующие проекты демонстрируют мои навыки и опыт через
						реальные примеры моей работы. Каждый проект кратко описан
						с ссылками на кодовые репозитории и живые демонстрации.
						Это отражает мою способность решать сложные задачи,
						работать с различными технологиями и эффективно управлять
						проектами.
					</p>
				</div>

				<div className={styles.projects}>
					{projectCards.map(project => {
						return (
							<ProjectCard
								key={project.name}
								name={project.name}
								description={project.description}
								tags={project.tags}
								image={project.image}
								source_code_link={project.source_code_link}
								site_link={project.site_link}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Experience
