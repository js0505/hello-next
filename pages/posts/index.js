import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

function AllPostsPage(props) {
	const { allPosts } = props
	return <AllPosts posts={allPosts} />
}

export function getStaticProps() {
	const allPosts = getAllPosts()

	return {
		props: {
			allPosts,
		},
	}
}
export default AllPostsPage
