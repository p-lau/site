import {useRouter} from 'next/router'
import React, {CSSProperties, AnchorHTMLAttributes} from "react"
export default function Path({link, icon, title, className}: AnchorHTMLAttributes<any> & {link: string, icon: JSX.Element, title: string}){
	const router = useRouter()
	const customStyle: CSSProperties = router.pathname === link ? {
		color: 'salmon',
		filter: `drop-shadow(0 0 0.2em currentColor)`
	} : null

	const handleClick = (e) => {
		e.preventDefault()
		router.push(link).catch(e => console.error(e))
	}

	return (
		<a className={className} title={title} onClick={handleClick}>
			<span style={customStyle}>{icon}</span>
		</a>
	)
}