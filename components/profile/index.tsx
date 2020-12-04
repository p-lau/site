import Image from 'next/image'
import styles from './profile.module.css'

export default function Index(){
	return(
		<div className={styles.profile}>
			<Image className={styles.img} objectFit={"cover"} src={'/img/me.jpg'} layout={'fill'} alt={'Panhavuth Lau'}/>
		</div>
	)
}