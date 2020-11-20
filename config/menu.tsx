import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faQuestionCircle,
	faMicrophone,
	faHome
} from "@fortawesome/free-solid-svg-icons"

const navButtons = [
	{
		title: "Home",
		link: "/home",
		icon: <FontAwesomeIcon icon={faHome}/>
	},
	{
		title: "Blog",
		link: "/posts",
		icon: <FontAwesomeIcon icon={faMicrophone} />
	},
	{
		title: "About Me",
		link: "/about",
		icon: <FontAwesomeIcon icon={faQuestionCircle} />
	},
]

export default navButtons