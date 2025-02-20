import { ICardData } from '../../constants/data'

import styles from './index.module.scss'

function Card({ logo, alt, title }: ICardData) {
	return (
		<div className={styles.root}>
			<div className={styles.wrapper}>
				<div className={styles.pic}>
					<img src={logo} alt={alt || 'logo'} />
				</div>
				<p className={styles.title}>{title}</p>
			</div>
		</div>
	)
}

export default Card
