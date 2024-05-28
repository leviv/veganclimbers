<script>
	import { currentPage } from '../assets/js/store';

	export let href;

	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<li>
	<a {href} class:active={isCurrentPage} aria-current={isCurrentPage ? 'page' : false}>
		<slot />
	</a>
</li>

<style>
	li {
		list-style: none;
		display: inline;
		text-transform: uppercase;
		font-size: 28px;
		padding-right: 40px;
	}
</style>
