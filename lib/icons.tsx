import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const navButtons = [
	{
		title: "Home",
		link: "/home",
		icon: <FontAwesomeIcon icon={['fas', 'home']}/>
	},
	{
		title: "Posts",
		link: "/posts",
		icon: <FontAwesomeIcon icon={['fas', 'pen-square']}/>
	},
	{
		title: "Projects",
		link: "/projects",
		icon: <FontAwesomeIcon icon={['fas', 'briefcase']} />
	},
	{
		title: "About Me",
		link: "/about",
		icon: <FontAwesomeIcon icon={['fas', 'id-card']} />
	},
]