import classNames from 'classnames'

import mern from '../../assets/intro/mern.jpg'

import { globalData } from '../../constants/data'

import styles from './index.module.scss'

function Intro() {
	return (
		<section className={classNames(styles.root, 'container')}>
			<div className={styles.intro}>
				<h1>
					Привет, я <strong>{globalData.firstName}</strong>.
				</h1>
				<p>
					Я разрабатываю крутые{' '}
					<strong style={{ textWrap: 'nowrap' }}>
						WEB-приложения
					</strong>
					,
					<br /> используя современные технологии.
				</p>
			</div>
			<div className={styles.picture}>
				<img src={mern} alt='mern stack' />
			</div>
		</section>
	)
}
export default Intro
