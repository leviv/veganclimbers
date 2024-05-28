<script>
	import { siteTitle } from '$lib/config';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<main>
	<section id="hero">
		<img
			src="images/hero.png"
			class="hero-image"
			alt="Vintage climbing magazine cover of a climber on big sandstone pillars"
		/>

		<div class="manifesto">
			<h1>Manifesto</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsum hic consequatur
				distinctio libero nisi blanditiis dolores ipsa consequuntur harum, neque laudantium?
				Aspernatur nesciunt, qui eius ipsum perspiciatis ad laboriosam!
			</p>
		</div>
	</section>
</main>

<style>
	main {
		margin: 0 120px;
	}

	/** Hero */
	.hero-image {
		width: 100%;
		height: auto;
		border-radius: 150px;
	}

	/** Mainfesto */
	.manifesto {
		position: relative;
	}
</style>
