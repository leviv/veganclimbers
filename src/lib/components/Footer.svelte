<script>
	import { siteAuthor } from '$lib/config';
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>
	<nav>
		<ul>
			{#each navItems as page}
				<NavItem href={page.route}>
					{page.title}
				</NavItem>
			{/each}
		</ul>
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
</footer>
