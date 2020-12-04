import Path from "./path"
import navLinks from "../../config/menu"
import styles from './menu.module.css'

export default function Menu(){

	return(
		<header className={styles.menu}>
			{navLinks.map(({title, link, icon}, i) => (
				<Path className={styles.menuItem} key={i} icon={icon} link={link} title={title}/>
			))}
		</header>
	)
}