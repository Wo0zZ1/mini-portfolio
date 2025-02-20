import Card from '../Card'

import { ICardData } from '../../constants/data'

import styles from './index.module.scss'

interface ICardsProps {
	cardsData: ICardData[]
}

function Cards({ cardsData }: ICardsProps) {
	return (
		<div className={styles.root}>
			{cardsData.map(card => {
				return (
					<Card
						key={card.id}
						id={card.id}
						logo={card.logo}
						title={card.title}
					/>
				)
			})}
		</div>
	)
}

export default Cards
