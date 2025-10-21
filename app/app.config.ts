export default defineAppConfig({
  title: 'Srlinks',
  email: 'reddaiahsirigireddy@gmail.com',
  github: 'https://sirigireddyreddaiahh.github.io/',
  telegram: 'https://urlsclickearn.xyz/telegram',
  blog: 'https://srlinks.live/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://urlsclickearn.xyz/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
