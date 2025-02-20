import classNames from 'classnames'

import github from '../../assets/contacts/github.png'
import telegram from '../../assets/contacts/telegram.svg'

import styles from './index.module.scss'

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={classNames(styles.content, 'container')}>
				<a
					href='https://github.com/Wo0zZ1'
					target='_blank'
					className={classNames(styles.link, styles.git)}>
					<img src={github} alt='github' />
					<span>Visit my GitHub</span>
				</a>
				<a
					href='tg://user?id=1749779085'
					target='_blank'
					className={classNames(styles.link, styles.telegram)}>
					<span>Contact me</span>
					<img src={telegram} alt='telegram' />
				</a>
			</div>
		</footer>
	)
}
export default Footer
