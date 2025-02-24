import Cards from '../Cards'

import { aboutCards } from '../../constants/data'

import styles from './index.module.scss'

function About() {
	return (
		<section id='about' className='container'>
			<div className={styles.content}>
				<div className={styles.text}>
					<h2>Введение.</h2>
					<p>
						Меня зовут Максим, мне 18 лет, и я учусь на первом курсе
						бакалавриата РТУ МИРЭА по направлению «Программная
						инженерия». Уже сейчас я активно развиваюсь как
						разработчик, специализируясь на создании веб-продуктов. Я
						стремлюсь к совершенству в своей работе, всегда готов
						учиться новому и адаптироваться к задачам, чтобы создавать
						эффективные, масштабируемые и удобные решения. Для меня
						важно не только развивать технические навыки, но и расти
						как личность, чтобы приносить максимальную пользу своим
						проектам и команде.
					</p>
				</div>
				<Cards cardsData={aboutCards} />
			</div>
		</section>
	)
}
export default About
