import Avatar from '../avatar'
import DateFormatter from '../date'
import CoverImage from '../cover-image'
import Link from 'next/link'
import Author from '../../types/author'
import styles from './hero.module.css'

type Props = {
	title: string
	coverImage: string
	date: string
	excerpt: string
	author: Author
	slug: string
}

const HeroPost = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: Props) => {
	return (
		<section className={styles.section}>
			<CoverImage title={title} src={coverImage} slug={slug} />
			<div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
						<Link href={`/posts/${slug}`}>
							<a>{title}</a>
						</Link>
					</h3>
					<DateFormatter dateString={date} />
					<p>{excerpt}</p>
				</div>
				<Avatar name={author.name} picture={author.picture} />
			</div>
		</section>
	)
}

export default HeroPost