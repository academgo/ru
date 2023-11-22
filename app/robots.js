export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/admin/',
    },
    sitemap: 'https://academgo.com/sitemap.xml',
  }
}