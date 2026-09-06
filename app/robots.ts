import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/admin/', '/api/', '/compare/', '/wishlist/'],
    },
    sitemap: 'https://luxury-estate.com/sitemap.xml',
  }
}
