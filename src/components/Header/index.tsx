import logo from '/logo.svg'

import styles from './index.module.scss'

function Header() {
	return (
		<header className={styles.header}>
			<a href='#' className={styles.logo}>
				<img src={logo} alt='logo' />
				<span>Макс | Wo0zZ1</span>
			</a>
		</header>
	)
}
export default Header
