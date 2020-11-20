import {useRouter} from 'next/router'
import {CSSProperties} from "react"
export default function Path({link, icon, title}: {link: string, icon: JSX.Element, title: string}){
	const router = useRouter()
	const style: CSSProperties = {
		marginRight: 10,
		color: router.pathname === link ? 'red' : 'black'
	}

	const handleClick = (e) => {
		e.preventDefault()
		router.push(link)
	}

	return (
		<a href={link} className={' flex flex-1 items-center justify-center'} title={title} style={style} onClick={handleClick}>
			<span className={'mr-4'}>{icon}</span>
			<span>{title}</span>
		</a>
	)
}