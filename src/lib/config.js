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
		title: 'Gear',
		route: '/gear'
	},
	{
		title: 'Blog',
		route: '/blog'
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

// Icons are from https://icons8.com/icon/set/social-media/doodle
export const socials = [
	{
		title: 'Instagram',
		url: 'https://www.instagram.com/veganclimbers/',
		image: "icons/instagram2.svg"
	},
	{
		title: 'Email',
		url: 'mailto:villarreallevi@gmail.com',
		image: "icons/gmail2.svg"
	},
	{
		title: 'TikTok',
		url: 'https://www.tiktok.com/@soy.shania',
		image: "icons/tiktok.svg"
	}
];
