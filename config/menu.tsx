import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faAddressCard,
	faBriefcase,
	faHome,
	faPenSquare
} from "@fortawesome/free-solid-svg-icons"

const navButtons = [
	{
		title: "Home",
		link: "/home",
		icon: <FontAwesomeIcon icon={faHome}/>
	},
	{
		title: "Posts",
		link: "/posts",
		icon: <FontAwesomeIcon icon={faPenSquare}/>
	},
	{
		title: "Projects",
		link: "/projects",
		icon: <FontAwesomeIcon icon={faBriefcase} />
	},
	{
		title: "About Me",
		link: "/about",
		icon: <FontAwesomeIcon icon={faAddressCard} />
	},
]

export default navButtons