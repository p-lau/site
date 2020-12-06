import {useRouter} from 'next/router'
import {AnchorHTMLAttributes} from "react"
import styles from './menu.module.css'

export default function Path({link, icon, title, className}: AnchorHTMLAttributes<any> & {link: string, icon: JSX.Element, title: string}){
	const router = useRouter()
	const customStyle = router.pathname.startsWith(link) ? styles.active : ''

	const handleClick = (e) => {
		e.preventDefault()
		router.push(link).catch(e => console.error(e))
	}

	return (
		<>
			<a className={[className, customStyle].join(' ')} title={title} onClick={handleClick}>
				{icon}
			</a>
		</>
	)
}