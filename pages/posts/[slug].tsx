import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import markdownToHtml from '../../lib/convertMDtoHTML'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostType from '../../types/post'
import Post from "../../components/post"

type Props = {
	post: PostType
}

export default function Slug({ post }: Props){
	const router = useRouter()

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return router.isFallback ?
		<h1>Loading…</h1>
		:
		<Post post={post}/>
}

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage',
	])
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map((posts) => {
			return {
				params: {
					slug: posts.slug,
				},
			}
		}),
		fallback: false,
	}
}