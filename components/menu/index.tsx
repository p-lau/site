import Path from "./path"
import {navButtons} from "../../config/icons"
import styles from './menu.module.css'

export default function Menu(){

	return(
		<header className={styles.menu}>
			{navButtons.map(({title, link, icon}, i) => (
				<Path className={styles.menuItem} key={i} icon={icon} link={link} title={title}/>
			))}
		</header>
	)
}