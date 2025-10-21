<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon } from 'vue3-simple-icons'
const { email, blog, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-4 bg-gradient-to-br from-slate-900 via-slate-800 to-black border-t-2 border-[#FF6B35]/20 relative overflow-hidden">
    <!-- Subtle gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 via-transparent to-[#F72B7E]/5 pointer-events-none" />
    
    <!-- Floating particles effect (optional) -->
    <div class="absolute top-0 left-1/4 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-3xl" />
    <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F72B7E]/5 rounded-full blur-3xl" />
    
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row relative z-10 px-4">
      <!-- Logo Section -->
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 text-lg font-black leading-none select-none transition-all duration-300 hover:scale-105 group"
        title="Srlinks"
      >
        <div class="relative">
          <span class="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] shadow-lg group-hover:shadow-xl group-hover:shadow-[#FF6B35]/30 transition-all duration-300">
            <img
              src="/sink.png"
              alt="Srlinks"
              class="w-7 h-7 rounded-lg"
              loading="lazy"
            >
          </span>
          <!-- Animated ring on hover -->
          <div class="absolute inset-0 rounded-xl ring-2 ring-[#FF6B35]/20 group-hover:ring-[#FF6B35]/40 transition-all duration-300 animate-pulse opacity-0 group-hover:opacity-100" />
        </div>
        <span class="bg-gradient-to-r from-[#FF6B35] via-[#F72B7E] to-[#FF6B35] bg-clip-text text-transparent font-extrabold tracking-tight bg-[length:200%_auto] animate-gradient">
          Srlinks
        </span>
      </NuxtLink>

      <!-- Copyright -->
      <a
        class="mt-4 text-sm text-slate-400 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#F72B7E] hover:bg-clip-text hover:text-transparent transition-all duration-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[#FF6B35]/30 sm:mt-0 font-medium group"
        href="https://srlinks.xyz"
        target="_blank"
        title="Srlinks"
      >
        <span class="inline-flex items-center gap-2">
          &copy; {{ new Date().getFullYear() }} srlinks.xyz
          <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </a>

      <!-- Social Icons -->
      <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          v-if="email"
          :href="`mailto:${email}`"
          title="Email"
          class="relative text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 transform group"
        >
          <span class="sr-only">Email</span>
          <div class="relative">
            <GmailIcon class="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-glow-orange" />
            <!-- Gradient background on hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 -z-10" />
          </div>
        </a>

        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          title="Blog"
          class="relative text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 transform group"
        >
          <span class="sr-only">Blog</span>
          <div class="relative">
            <BloggerIcon class="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-glow-pink" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#F72B7E] to-[#FF6B35] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 -z-10" />
          </div>
        </a>

        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="relative text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 transform group"
        >
          <span class="sr-only">GitHub</span>
          <div class="relative">
            <GitHubIcon class="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-glow-orange" />
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 -z-10" />
          </div>
        </a>
      </span>
    </div>

    <!-- Decorative border line with gradient -->
    <div class="h-1 w-full bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-30" />
    
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
  filter: drop-shadow(0 0 12px rgba(255, 107, 53, 0.9)) 
          drop-shadow(0 0 20px rgba(255, 107, 53, 0.5))
          drop-shadow(0 0 30px rgba(255, 107, 53, 0.3));
}

.group:hover .drop-shadow-glow-pink {
  filter: drop-shadow(0 0 12px rgba(247, 43, 126, 0.9)) 
          drop-shadow(0 0 20px rgba(247, 43, 126, 0.5))
          drop-shadow(0 0 30px rgba(247, 43, 126, 0.3));
}

/* Smooth transitions for all elements */
a, svg, div {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover effect for icons */
a:hover svg {
  transform: translateY(-3px);
}

/* Pulse animation for hover state */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.group:hover .blur-lg {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Glass morphism effect on hover */
.group:hover::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(247, 43, 126, 0.1));
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
  .backdrop-blur {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    gap: 1rem;
  }
  
  a svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
