export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: '/admin/',
    },
    sitemap: 'https://ru.academgo.com/sitemap.xml',
  }
}