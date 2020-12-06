import Avatar from '../avatar'
import Date from '../date'
import CoverImage from '../cover-image'
import Link from 'next/link'
import Author from '../../types/author'

import styles from './post.module.css'

type Props = {
	title: string
	coverImage: string
	date: string
	excerpt: string
	author: Author
	slug: string
}

export default function PostPreview({
		title,
		coverImage,
		date,
		excerpt,
		author,
		slug,
	}: Props){
	return (
		<div className={styles.preview}>
			<div className={styles.cover}>
				<CoverImage slug={slug} title={title} src={coverImage} />
			</div>
			<h3 className={styles.title}>
				<Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
					<a>{title}</a>
				</Link>
			</h3>
			<div className={styles.date}>
				<Date dateString={date} />
			</div>
			<small className={styles.excerpt}>{excerpt}</small>
			<Avatar name={author?.name} picture={author?.picture} />
		</div>
	)
}