import classes from "./hero.module.css"
import Image from "next/image"

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/minion.jpg"
					alt="show profile"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, jisu</h1>
			<p>blablabla</p>
		</section>
	)
}

export default Hero
