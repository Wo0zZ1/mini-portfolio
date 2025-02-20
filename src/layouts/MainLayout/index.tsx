import { ReactNode } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import styles from './index.module.scss'

interface IMainLayoutProps {
	children: ReactNode
}

function MainLayout({ children }: IMainLayoutProps) {
	return (
		<div className={styles.root}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}

export default MainLayout
