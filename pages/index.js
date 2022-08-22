import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
import { getFeaturedPosts } from "../lib/posts-util"

function HomePage(props) {
	const { featuredPosts } = props
	return (
		<>
			<Hero />
			<FeaturedPosts posts={featuredPosts} />
		</>
	)
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts()

	return {
		props: {
			featuredPosts,
		},
	}
}

export default HomePage
