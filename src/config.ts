import type { SocialObjects } from "./types";
import type { ManifestOptions } from "vite-plugin-pwa"
export const SITE = {
  website: "https://curiousengineer.dev/",
  author: "Suraj Kumar",
  desc: "A Place to learn about my latest experiments and findings as a software engineer.",
  title: "Curious Engineer",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 9,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/howdysuraj",
    linkTitle: `Follow on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/surajsugga",
    linkTitle: `Connect on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/faceless_sugga/",
    linkTitle: `Follow on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/surajsuggasingh/",
    linkTitle: `Follow on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/SurajSugga",
    linkTitle: `Follow on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919162984200",
    linkTitle: `Chat on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];


/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Astro PWA Starter", // Change this to your website's name.
	short_name: "Astro PWA Starter", // Change this to your website's short name.
	description:
		"Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicon.svg",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicon.svg",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicon.svg",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}