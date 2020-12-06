import { getAllPosts } from '../../lib/api'
import Post from '../../types/post'
import Meta from "../../components/meta"
import Intro from "../../components/intro"
import Hero from "../../components/hero"
import More from "../../components/more"


type Props = {
	allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
	const heroPost = allPosts[0]
	const morePosts = allPosts.slice(1)
	return (
		<>
			<Meta title={'Posts'} />
			<Intro />
			{heroPost && (
				<Hero
					title={heroPost.title}
					coverImage={heroPost.coverImage}
					date={heroPost.date}
					author={heroPost.author}
					slug={heroPost.slug}
					excerpt={heroPost.excerpt}
				/>
			)}
			{morePosts.length > 0 && <More posts={morePosts} />}
		</>
	)
}

export default Index

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	])

	return {
		props: { allPosts },
	}
}