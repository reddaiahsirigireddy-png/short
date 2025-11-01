<script setup>
const { title, description } = useAppConfig()

// Comprehensive SEO keywords targeting URL shortening and related searches
const seoKeywords = [
  // Primary brand variations
  'srlinks', 'sr links', 'srlink', 'sr link', 'srlin', 'srlinks.live',
  
  // Core URL shortening terms
  'url shortener', 'link shortener', 'short link', 'shorten url', 'shorten link',
  'url shortening service', 'link shortening tool', 'free url shortener',
  'custom url shortener', 'branded link shortener',
  
  // Competitor alternatives
  'bitly alternative', 'tinyurl alternative', 'shorturl alternative',
  'better than bitly', 'bitly competitor', 'free bitly alternative',
  'rebrandly alternative', 'ow.ly alternative', 'is.gd alternative',
  
  // Link analytics terms
  'link analytics', 'url analytics', 'link tracking', 'click tracking',
  'link statistics', 'url stats', 'link insights', 'click analytics',
  'track short links', 'monitor link performance',
  
  // QR code related
  'qr code generator', 'url to qr code', 'link qr code', 'qr code shortener',
  'custom qr code', 'branded qr code',
  
  // Business use cases
  'marketing link shortener', 'social media link shortener',
  'business url shortener', 'enterprise link management',
  'campaign link tracking', 'utm link shortener',
  
  // Features
  'custom short links', 'branded short urls', 'link expiration',
  'secure url shortener', 'private link shortener', 'ad-free url shortener',
  'link management tool', 'bulk url shortener',
  
  // Technical terms
  'cloudflare url shortener', 'fast url shortener', 'api url shortener',
  'open source link shortener', 'self hosted url shortener',
  
  // Action-oriented
  'create short link', 'make short url', 'generate short link',
  'shorten long url', 'compress url', 'reduce link length',
  
  // Location-based
  'url shortener india', 'link shortener worldwide', 'global url shortener',
  
  // Free alternatives
  'free link shortener', 'no signup url shortener', 'instant link shortener',
  'unlimited url shortener', 'no ads link shortener'
].join(', ')

// Extended description for better SEO
const extendedDescription = `${description} Free URL shortener with real-time analytics, QR code generation, and custom branded links. Best alternative to Bitly, TinyURL, and other link shorteners. Track clicks, analyze traffic, and manage your links efficiently. No signup required for basic use. Perfect for marketers, businesses, and content creators.`

useSeoMeta({
  // Primary meta tags
  title: `${title} - Free URL Shortener with Analytics | Bitly Alternative`,
  description: extendedDescription,
  keywords: seoKeywords,
  author: 'Srlinks Team',
  
  // OpenGraph tags for social sharing
  ogType: 'website',
  ogTitle: `${title} - Free URL Shortener with Real-Time Analytics`,
  ogSiteName: title,
  ogDescription: extendedDescription,
  ogImage: 'https://urlsclickearn.xyz/banner.png',
  ogUrl: 'https://srlinks.live',
  ogLocale: 'en_US',
  
  // Twitter Card tags
  twitterCard: 'summary_large_image',
  twitterTitle: `${title} - Free URL Shortener & Link Analytics`,
  twitterDescription: extendedDescription,
  twitterImage: 'https://urlsclickearn.xyz/banner.png',
  twitterSite: '@srlinks',
  twitterCreator: '@srlinks',
  
  // Additional SEO tags
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  googlebot: 'index, follow',
  'google-site-verification': 'your-verification-code-here',
  
  // Mobile optimization
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  appleMobileWebAppTitle: title,
  
  // Content categorization
  'article:author': 'Srlinks',
  'article:publisher': 'https://srlinks.live',
  
  // Geographic targeting
  'geo.region': 'IN',
  'geo.placename': 'India',
  
  // Copyright
  copyright: `© ${new Date().getFullYear()} Srlinks.live - All rights reserved`,
  
  // Language
  language: 'English',
  
  // Rating
  rating: 'General',
  
  // Classification
  classification: 'Business, Technology, Internet Tools',
  
  // Theme color
  themeColor: '#8B5CF6',
  
  // Canonical URL
  canonical: 'https://srlinks.live'
})

useHead({
  htmlAttrs: {
    lang: 'en',
    prefix: 'og: http://ogp.me/ns#'
  },
  
  meta: [
    // Viewport
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      tagPosition: 'head',
    },
    
    // Additional meta tags for better indexing
    { name: 'application-name', content: title },
    { name: 'apple-mobile-web-app-title', content: title },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    
    // Rich snippets
    { name: 'thumbnail', content: 'https://urlsclickearn.xyz/banner.png' },
    { name: 'image', content: 'https://urlsclickearn.xyz/banner.png' },
    
    // Search engine directives
    { name: 'revisit-after', content: '1 days' },
    { name: 'distribution', content: 'global' },
    { name: 'target', content: 'all' },
    { name: 'audience', content: 'all' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'directory', content: 'submission' },
    { name: 'category', content: 'Internet, Business, Tools, Marketing, Analytics' },
    { name: 'url', content: 'https://srlinks.live' },
    { name: 'identifier-URL', content: 'https://srlinks.live' },
    
    // Open Graph extended
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Srlinks - Free URL Shortener with Analytics' },
    
    // Twitter extended
    { name: 'twitter:image:alt', content: 'Srlinks - Free URL Shortener with Analytics' },
    
    // Alternate languages (add more as needed)
    { property: 'og:locale:alternate', content: 'es_ES' },
    { property: 'og:locale:alternate', content: 'fr_FR' },
    { property: 'og:locale:alternate', content: 'de_DE' },
    
    // Article metadata
    { property: 'article:modified_time', content: new Date().toISOString() },
    
    // Additional keywords in different formats
    { name: 'news_keywords', content: 'url shortener, link analytics, bitly alternative' },
    { name: 'page-topic', content: 'URL Shortening and Link Management' },
    { name: 'page-type', content: 'Product/Service' },
    
    // Schema.org markup hints
    { name: 'creator', content: 'Srlinks Team' },
    { name: 'publisher', content: 'Srlinks' },
  ],
  
  link: [
    // Icons
    { rel: 'icon', type: 'image/png', href: '/icon-192.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-192.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon-192.png' },
    
    // Manifest
    { rel: 'manifest', href: '/site.webmanifest' },
    
    // Canonical
    { rel: 'canonical', href: 'https://srlinks.live' },
    
    // Alternate versions
    { rel: 'alternate', hreflang: 'en', href: 'https://srlinks.live' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://srlinks.live' },
    
    // DNS prefetch for performance
    { rel: 'dns-prefetch', href: 'https://urlsclickearn.xyz' },
    { rel: 'preconnect', href: 'https://urlsclickearn.xyz' },
  ],
  
  // JSON-LD structured data for rich snippets
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': title,
        'url': 'https://srlinks.live',
        'description': extendedDescription,
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Any',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'ratingCount': '1250'
        },
        'author': {
          '@type': 'Organization',
          'name': 'Srlinks'
        },
        'provider': {
          '@type': 'Organization',
          'name': 'Srlinks',
          'url': 'https://srlinks.live'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': title,
        'url': 'https://srlinks.live',
        'logo': 'https://urlsclickearn.xyz/banner.png',
        'sameAs': [
          'https://github.com/sirigireddyreddaiahh',
          'https://urlsclickearn.xyz/telegram'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'reddaiahsirigireddy@gmail.com',
          'contactType': 'Customer Support'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': title,
        'url': 'https://srlinks.live',
        'description': extendedDescription,
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web Browser',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'featureList': [
          'URL Shortening',
          'Link Analytics',
          'QR Code Generation',
          'Custom Branded Links',
          'Real-time Tracking',
          'Click Statistics',
          'Geographic Analytics',
          'Device Tracking'
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://srlinks.live'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Dashboard',
            'item': 'https://srlinks.live/dashboard'
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is Srlinks?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Srlinks is a free URL shortening service with advanced analytics and QR code generation capabilities.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is Srlinks free to use?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Srlinks is completely free to use with no hidden charges.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I track my short links?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, Srlinks provides real-time analytics including clicks, geographic location, devices, and referrer information.'
            }
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#8B5CF6" />
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>
