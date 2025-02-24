import logo from '/logo.svg'

import styles from './index.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<a href='#' className={styles.logo}>
				<img src={logo} alt='logo' />
				<span>Макс | Wo0zZ1</span>
			</a>
			<nav className={styles.nav}>
				<ul>
					<li>
						<a href='#about'>Введение</a>
						<a href='#skills'>Навыки</a>
						<a href='#experience'>Проекты</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
