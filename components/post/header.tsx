import Avatar from '../avatar'
import Date from '../date'
import CoverImage from '../cover-image'
import PostTitle from './title'
import Author from '../../types/author'
import styles from './post.module.css'

type Props = {
	title: string
	coverImage: string
	date: string
	author: Author
}

export default function PostHeader ({ title, coverImage, date, author }: Props) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<CoverImage title={title} src={coverImage} />
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar name={author.name} picture={author.picture} />
				</div>
				<div className="mb-6 text-lg">
					<Date dateString={date} />
				</div>
			</div>
		</>
	)
}

