import MainLayout from '../../layouts/MainLayout'

import Intro from '../../components/Intro'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'

// import styles from './index.module.scss'

function MainPage() {
	return (
		<MainLayout>
			<Intro />
			<About />
			<Skills />
			<Experience />
		</MainLayout>
	)
}
export default MainPage
