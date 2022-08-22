import PostContent from "../../components/posts/post-detail/post-content"
import { getPostData } from "../../lib/posts-util"

function PostDetailPage(props) {
	const { postData } = props
	return <PostContent post={postData} />
}

export function getServerSideProps(context) {
	const fileName = context.params.slug
	const postData = getPostData(fileName + ".md")

	return {
		props: {
			postData,
		},
	}
}
export default PostDetailPage
