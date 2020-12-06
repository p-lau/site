import styles from './cover.module.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
	title: string
	src: string
	slug?: string
}

export default function CoverImage ({ title, src, slug }: Props){
	if(!src){return null}
	const image = (
		<Image
			layout={'responsive'}
			width={16}
			height={9}
			quality={50}
			src={src}
			alt={`Cover Image for ${title}`}
			className={styles.img}
		/>
	)
	return (
		<div id={`img-${title}`}>
			{slug ? <Link href={`/posts/${slug}`}><a aria-label={title}>{image}</a></Link> : image}
		</div>
	)
}