import classes from "./post-content.module.css"
import PostHeader from "./post-header"
import ReactMarkdown from "react-markdown"

function PostContent(props) {
	const { post } = props
	const imagePath = `/images/posts/${post.image}`
	return (
		<article className={classes.content}>
			<PostHeader image={imagePath} title={post.title} />
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</article>
	)
}
export default PostContent
