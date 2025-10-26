<script setup>
const stats = [
  { value: "100K+", label: "Links Shortened" },
  { value: "50K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" }
]

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Powered by Cloudflare's global edge network for instant redirects"
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Track clicks, locations, and devices with beautiful visualizations"
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description: "Bank-level encryption with 99.9% uptime guarantee"
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description: "Serve users worldwide with our distributed infrastructure"
  }
]

const coreValues = [
  {
    name: "Innovation",
    role: "Core Value",
    description: "Constantly improving our platform with cutting-edge technology"
  },
  {
    name: "Reliability",
    role: "Core Value",
    description: "Ensuring your links work 24/7 with maximum uptime"
  },
  {
    name: "Privacy",
    role: "Core Value",
    description: "Your data security is our top priority"
  }
]
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24 hero-gradient">
      <div class="container relative z-10 mx-auto px-4">
        <div class="text-center animate-fade-in">
          <div class="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span class="text-sm font-bold text-white">ABOUT SRLINKS</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            Revolutionizing Link <span class="text-yellow-300">Management</span>
          </h1>
          <p class="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            SRLinks is a modern, powerful URL shortening service built for creators, businesses, 
            and marketers who demand the best in link management and analytics.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="text-center p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="text-4xl md:text-5xl font-black gradient-text mb-2">
              {{ stat.value }}
            </div>
            <div class="text-sm text-slate-600 dark:text-slate-400 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="hero-gradient rounded-3xl p-12 text-white shadow-2xl">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-black mb-6 drop-shadow-lg">Our Mission</h2>
            <p class="text-xl leading-relaxed opacity-95">
              To empower individuals and businesses with the most advanced, reliable, and 
              user-friendly link shortening platform. We believe that every link should be 
              an opportunity to connect, engage, and grow your audience.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
            What Makes Us <span class="gradient-text">Different</span>
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built with modern technology and user experience in mind
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="feature-card-hover glass-card rounded-3xl p-8"
          >
            <div class="text-6xl mb-6">{{ feature.icon }}</div>
            <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {{ feature.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
            Our Core <span class="gradient-text">Values</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(value, idx) in coreValues"
            :key="idx"
            class="text-center glass-card rounded-3xl p-10 feature-card-hover"
          >
            <div class="w-20 h-20 hero-gradient rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-xl">
              {{ value.name.charAt(0) }}
            </div>
            <h3 class="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
              {{ value.name }}
            </h3>
            <p class="text-orange-500 dark:text-orange-400 font-semibold mb-4">
              {{ value.role }}
            </p>
            <p class="text-slate-600 dark:text-slate-400">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="text-6xl mb-6">🏆</div>
            <h2 class="text-4xl font-black mb-6 text-slate-900 dark:text-white">
              Built with Modern Technology
            </h2>
            <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              SRLinks is powered by Cloudflare Workers, ensuring lightning-fast performance 
              and 99.9% uptime. Our infrastructure spans across 150+ countries, delivering 
              your shortened links with minimal latency anywhere in the world.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <span class="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full text-orange-500 dark:text-orange-400 font-semibold">
                Cloudflare Workers
              </span>
              <span class="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full text-orange-500 dark:text-orange-400 font-semibold">
                D1 Database
              </span>
              <span class="px-6 py-3 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full text-orange-500 dark:text-orange-400 font-semibold">
                Analytics Engine
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="hero-gradient rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 class="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p class="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of users who trust SRLinks for their link management needs
          </p>
          <NuxtLink
            to="/dashboard"
            class="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold bg-white text-orange-600 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            Start Shortening Links
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
