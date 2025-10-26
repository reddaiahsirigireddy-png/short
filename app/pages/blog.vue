<script setup>
import { ref } from 'vue'

const categories = ['All', 'Tutorials', 'Features', 'Updates', 'Tips']
const selectedCategory = ref('All')

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with SRLinks: A Complete Guide",
    excerpt: "Learn how to create your first shortened link, customize slugs, and track analytics with our comprehensive beginner's guide.",
    image: "📚",
    category: "Tutorials",
    author: "SRLinks Team",
    date: "October 25, 2025",
    readTime: "5 min read",
    tags: ["Getting Started", "Tutorial", "Basics"]
  },
  {
    id: 2,
    title: "10 Creative Ways to Use Short Links in Marketing",
    excerpt: "Discover innovative strategies to leverage shortened URLs in your marketing campaigns for better tracking and engagement.",
    image: "🎯",
    category: "Tips",
    author: "SRLinks Team",
    date: "October 20, 2025",
    readTime: "7 min read",
    tags: ["Marketing", "Strategy", "Tips"]
  },
  {
    id: 3,
    title: "New Feature: AI-Powered Slug Suggestions",
    excerpt: "We've introduced AI-powered slug generation that creates memorable, SEO-friendly short links automatically.",
    image: "🤖",
    category: "Features",
    author: "SRLinks Team",
    date: "October 15, 2025",
    readTime: "4 min read",
    tags: ["AI", "Features", "Innovation"]
  },
  {
    id: 4,
    title: "Understanding Link Analytics: Metrics That Matter",
    excerpt: "A deep dive into the analytics features of SRLinks and how to use data to improve your link performance.",
    image: "📊",
    category: "Tutorials",
    author: "SRLinks Team",
    date: "October 10, 2025",
    readTime: "8 min read",
    tags: ["Analytics", "Data", "Metrics"]
  },
  {
    id: 5,
    title: "October 2025 Platform Update",
    excerpt: "Exciting new features including real-time analytics, QR code customization, and improved dashboard performance.",
    image: "🚀",
    category: "Updates",
    author: "SRLinks Team",
    date: "October 5, 2025",
    readTime: "3 min read",
    tags: ["Updates", "Features", "Performance"]
  },
  {
    id: 6,
    title: "Best Practices for Creating Memorable Short Links",
    excerpt: "Learn the art of creating short links that are easy to remember, share, and track across all your marketing channels.",
    image: "✨",
    category: "Tips",
    author: "SRLinks Team",
    date: "September 28, 2025",
    readTime: "6 min read",
    tags: ["Best Practices", "Tips", "Branding"]
  },
  {
    id: 7,
    title: "How SRLinks Ensures Your Data Security",
    excerpt: "An inside look at our security infrastructure, encryption methods, and privacy measures to protect your data.",
    image: "🔒",
    category: "Features",
    author: "SRLinks Team",
    date: "September 20, 2025",
    readTime: "5 min read",
    tags: ["Security", "Privacy", "Infrastructure"]
  },
  {
    id: 8,
    title: "QR Codes: The Ultimate Guide for 2025",
    excerpt: "Everything you need to know about generating, customizing, and using QR codes with your shortened links.",
    image: "📱",
    category: "Tutorials",
    author: "SRLinks Team",
    date: "September 15, 2025",
    readTime: "10 min read",
    tags: ["QR Codes", "Tutorial", "Mobile"]
  },
  {
    id: 9,
    title: "Link Management Tips for Content Creators",
    excerpt: "Optimize your bio links, track engagement, and grow your audience with these essential link management strategies.",
    image: "🎨",
    category: "Tips",
    author: "SRLinks Team",
    date: "September 10, 2025",
    readTime: "7 min read",
    tags: ["Content Creation", "Social Media", "Growth"]
  }
]

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return blogPosts
  }
  return blogPosts.filter(post => post.category === selectedCategory.value)
})

const featuredPost = blogPosts[0]
const recentPosts = blogPosts.slice(1, 4)
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24 hero-gradient">
      <div class="container relative z-10 mx-auto px-4">
        <div class="text-center animate-fade-in">
          <div class="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span class="text-sm font-bold text-white">SRLINKS BLOG</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            Insights & <span class="text-yellow-300">Updates</span>
          </h1>
          <p class="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Stay updated with the latest features, tips, and best practices for link management
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="glass-card rounded-3xl overflow-hidden feature-card-hover">
            <div class="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div>
                <div class="text-8xl mb-6">{{ featuredPost.image }}</div>
                <div class="flex items-center gap-3 mb-4">
                  <span class="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full text-orange-500 dark:text-orange-400 text-sm font-semibold">
                    Featured
                  </span>
                  <span class="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 text-sm font-semibold">
                    {{ featuredPost.category }}
                  </span>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <h2 class="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {{ featuredPost.excerpt }}
                </p>
                <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <span class="font-semibold">{{ featuredPost.author }}</span>
                  <span>•</span>
                  <span>{{ featuredPost.date }}</span>
                  <span>•</span>
                  <span>{{ featuredPost.readTime }}</span>
                </div>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tag in featuredPost.tags"
                    :key="tag"
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400"
                  >
                    {{ tag }}
                  </span>
                </div>
                <a
                  :href="`https://srlinks.live/blog/${featuredPost.id}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-xl btn-gradient-primary w-fit"
                >
                  Read More
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Filter -->
    <section class="py-8 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap justify-center gap-3">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              :class="[
                'px-6 py-3 rounded-full font-semibold transition-all duration-300',
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:scale-105 hover:shadow-lg'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="post in filteredPosts"
              :key="post.id"
              class="glass-card rounded-3xl overflow-hidden feature-card-hover"
            >
              <div class="p-8">
                <div class="text-6xl mb-6">{{ post.image }}</div>
                
                <div class="flex items-center gap-2 mb-4">
                  <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {{ post.category }}
                  </span>
                  <span class="text-xs text-slate-500 dark:text-slate-400">
                    {{ post.readTime }}
                  </span>
                </div>

                <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white line-clamp-2">
                  {{ post.title }}
                </h3>

                <p class="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
                  {{ post.excerpt }}
                </p>

                <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span class="font-semibold">{{ post.author }}</span>
                  <span>•</span>
                  <span>{{ post.date }}</span>
                </div>

                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tag in post.tags.slice(0, 2)"
                    :key="tag"
                    class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400"
                  >
                    {{ tag }}
                  </span>
                </div>

                <a
                  :href="`https://srlinks.live/blog/${post.id}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-orange-500 dark:text-orange-400 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Read Article
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="hero-gradient rounded-3xl p-12 text-white text-center shadow-2xl">
            <div class="text-6xl mb-6">📬</div>
            <h2 class="text-4xl font-black mb-4 drop-shadow-lg">
              Subscribe to Our Newsletter
            </h2>
            <p class="text-xl mb-8 opacity-95">
              Get the latest updates, tips, and features delivered to your inbox
            </p>
            <div class="max-w-md mx-auto">
              <div class="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button class="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
              <p class="text-sm mt-4 opacity-80">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-black mb-6 text-slate-900 dark:text-white">
            Ready to Get Started with <span class="gradient-text">SRLinks?</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Create your first shortened link and start tracking your success
          </p>
          <NuxtLink
            to="/dashboard"
            class="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold text-white rounded-2xl btn-gradient-primary"
          >
            Start Free
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
