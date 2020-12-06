import styles from "./post.module.css"
import Head from "next/head"

import PostHeader from "./header"
import PostBody from "./body"



export default function Post({post}){
	return(
		<article className={styles.article}>
			<Head>
				<title>
					{post.title}
				</title>
				<meta property="og:image" content={post.ogImage.url} />
			</Head>
			<PostHeader
				title={post.title}
				coverImage={post.coverImage}
				date={post.date}
				author={post.author}
			/>
			<PostBody content={post.content} />
		</article>
	)
}