import Cards from '../Cards'

import { skillCards } from '../../constants/data'

import styles from './index.module.scss'

function Skills() {
	return (
		<section className='container'>
			<div className={styles.content}>
				<div className={styles.text}>
					<h2>Навыки.</h2>
					<p>
						Мой стек — это баланс между мощным бэкендом и стильным
						фронтендом. Я работаю с <strong>HTML5</strong>,&nbsp;
						<strong>CSS3</strong> и <strong>TypeScript</strong>,
						создаю динамичные интерфейсы на <strong>React</strong>
						&nbsp;и <strong>Redux Toolkit</strong>, а также
						разрабатываю серверные решения на <strong>Node.js</strong>
						&nbsp;и <strong>Express</strong>. Для работы с данными я
						использую <strong>Prisma</strong>
						&nbsp;и <strong>PostgreSQL</strong>, а для стилизации —
						современные инструменты, такие как&nbsp;
						<strong>Tailwind</strong>. В своей работе я уделяю
						внимание деталям, используя <strong>Figma</strong> для
						проектирования интерфейсов, и всегда держу код под
						контролем с помощью <strong>Git</strong>.
					</p>
				</div>
				<Cards cardsData={skillCards} />
			</div>
		</section>
	)
}
export default Skills
