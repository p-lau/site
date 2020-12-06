import Image from 'next/image'
import styles from './profile.module.css'

export default function Index(){
	return(
		<div className={styles.profile}>
			<Image className={styles.img} objectFit={"cover"} loading={'eager'} src={'/img/me.jpg'} quality={50} layout={'fill'} alt={'Panhavuth Lau'}/>
		</div>
	)
}