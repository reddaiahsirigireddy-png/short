<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon } from 'vue3-simple-icons'
const { email, blog, github } = useAppConfig()
</script>

<template>
  <section class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-[#FF6B35]/20 relative overflow-hidden">
    <!-- Subtle gradient overlay for dark mode only -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent dark:from-[#FF6B35]/5 dark:via-transparent dark:to-[#F72B7E]/5 pointer-events-none" />
    
    <div class="container flex flex-col items-center py-4 mx-auto sm:flex-row relative z-10 px-4">
      <!-- Logo Section -->
      <NuxtLink
        to="/"
        class="flex items-center space-x-2 text-base font-black leading-none select-none transition-all duration-300 hover:scale-105 group"
        title="Srlinks"
      >
        <div class="relative">
          <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] shadow-md group-hover:shadow-lg group-hover:shadow-[#FF6B35]/30 transition-all duration-300">
            <img
              src="/sink.png"
              alt="Srlinks"
              class="w-6 h-6 rounded-md"
              loading="lazy"
            >
          </span>
          <!-- Animated ring on hover -->
          <div class="absolute inset-0 rounded-lg ring-2 ring-[#FF6B35]/20 group-hover:ring-[#FF6B35]/40 transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </div>
        <span class="bg-gradient-to-r from-[#FF6B35] via-[#F72B7E] to-[#FF6B35] bg-clip-text text-transparent font-extrabold tracking-tight bg-[length:200%_auto] animate-gradient">
          Srlinks
        </span>
      </NuxtLink>

      <!-- Copyright -->
      <a
        class="mt-3 text-xs text-slate-600 dark:text-slate-400 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#F72B7E] hover:bg-clip-text hover:text-transparent transition-all duration-300 sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-300 dark:sm:border-[#FF6B35]/30 sm:mt-0 font-medium group"
        href="https://srlinks.xyz"
        target="_blank"
        title="Srlinks"
      >
        <span class="inline-flex items-center gap-1.5">
          &copy; {{ new Date().getFullYear() }} Srlinks.live
          <svg class="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </a>

      <!-- Social Icons -->
      <span class="inline-flex justify-center mt-3 space-x-4 sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          v-if="email"
          :href="`mailto:${email}`"
          title="Email"
          class="relative text-slate-600 dark:text-slate-400 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-all duration-300 hover:scale-110 transform group"
        >
          <span class="sr-only">Email</span>
          <div class="relative">
            <GmailIcon class="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-glow-orange" />
          </div>
        </a>

        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          title="Blog"
          class="relative text-slate-600 dark:text-slate-400 hover:text-[#F72B7E] dark:hover:text-[#F72B7E] transition-all duration-300 hover:scale-110 transform group"
        >
          <span class="sr-only">Blog</span>
          <div class="relative">
            <BloggerIcon class="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-glow-pink" />
          </div>
        </a>

        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="relative text-slate-600 dark:text-slate-400 hover:text-[#FF6B35] dark:hover:text-[#FF6B35] transition-all duration-300 hover:scale-110 hover:rotate-12 transform group"
        >
          <span class="sr-only">GitHub</span>
          <div class="relative">
            <GitHubIcon class="w-5 h-5 transition-all duration-300 group-hover:drop-shadow-glow-orange" />
          </div>
        </a>
      </span>
    </div>
    
    <!-- Social Bar Ad Script - Before closing body tag -->
    <script type='text/javascript' src='//preferablyending.com/b1/c5/45/b1c5454db9d9699cc2f9072a41d2f475.js'></script>
  </section>
</template>

<style scoped>
/* Gradient animation for logo - matching header */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

/* Enhanced glow effects with brand colors - matching header */
.group:hover .drop-shadow-glow-orange {
  filter: drop-shadow(0 0 8px rgba(255, 107, 53, 0.8)) 
          drop-shadow(0 0 12px rgba(255, 107, 53, 0.4));
}

.group:hover .drop-shadow-glow-pink {
  filter: drop-shadow(0 0 8px rgba(247, 43, 126, 0.8)) 
          drop-shadow(0 0 12px rgba(247, 43, 126, 0.4));
}

/* Smooth transitions for all elements */
a, svg, div {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effect for icons */
a:hover svg {
  transform: translateY(-2px);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    gap: 0.75rem;
  }
}
</style>
