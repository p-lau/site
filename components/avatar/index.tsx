import Image from 'next/image'
import styles from './avatar.module.css'

type Props = {
	name: string
	picture: string
}

const Avatar = ({ name, picture }: Props) => {
	return (
		<div>
			<div className={styles.avatar}>
				<Image objectFit={"cover"} layout={'fill'} quality={1} src={picture} className={styles.img} alt={name} />
			</div>
			<p className={styles.name}>{name}</p>
		</div>
	)
}

export default Avatar