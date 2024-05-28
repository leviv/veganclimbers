/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'Vegan Climbing';
export const siteDescription = 'Crimping ledges and eating veggies.';
export const siteURL = 'veganclimbing.com';
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter';
export const siteAuthor = 'Levi Villarreal';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Gear',
		route: '/gear'
	},
	{
		title: 'About',
		route: '/about'
	},
	{
		title: 'Contact',
		route: '/contact'
	}
];

export const socials = [
	{
		title: 'Instagram',
		url: 'https://www.instagram.com/veganclimbers/'
	},
	{
		title: 'Email',
		url: 'mailto:villarreallevi@gmail.com'
	}
];
