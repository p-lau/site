import Path from "./path"
import navLinks from "../../config/menu"

export default function Menu(){


	return(
		<header className={'flex flex-row divide-x divide-solid divide-rose-400'}>
			{navLinks.map(({title, link, icon}, i) => (
				<Path key={i} icon={icon} link={link} title={title}/>
			))}
		</header>
	)
}