<script setup>
const { title, description, image } = useAppConfig()
const route = useRoute()

// Generate canonical URL dynamically
const canonicalUrl = computed(() => {
  const baseUrl = 'https://srlinks.live'
  const path = route.path.replace(/\/$/, '') || '/' // Remove trailing slash
  return `${baseUrl}${path}`
})

useSeoMeta({
  title: `${title} - ${description}`,
  description,
  ogType: 'website',
  ogTitle: title,
  ogSiteName: title,
  ogDescription: description,
  ogImage: image,
  ogUrl: canonicalUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      tagPosition: 'head',
    },
    // Google AdSense verification meta tag
    {
      name: 'google-adsense-account',
      content: 'ca-pub-3467552815150991',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value,
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-192.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
  ],
  script: [
    // Google AdSense Auto Ads
    {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3467552815150991',
      crossorigin: 'anonymous',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#000" />
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>
