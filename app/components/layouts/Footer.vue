<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon } from 'vue3-simple-icons'
const { email, blog, github } = useAppConfig()
</script>

<template>
  <section class="md:pt-4 bg-black border-t border-[#FF6B35]/20">
    <div class="container flex flex-col items-center py-5 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-lg font-black leading-none select-none logo transition-all duration-300 hover:scale-105"
        title="Srlinks"
      >
        <span class="bg-gradient-to-r from-[#FF6B35] via-[#F72B7E] to-[#FF6B35] bg-clip-text text-transparent font-extrabold tracking-tight bg-[length:200%_auto] animate-gradient">
          Srlinks
        </span>
      </a>
      <a
        class="mt-3 text-xs text-slate-400 hover:bg-gradient-to-r hover:from-[#FF6B35] hover:to-[#F72B7E] hover:bg-clip-text hover:text-transparent transition-all duration-300 sm:ml-4 sm:pl-4 sm:border-l sm:border-[#FF6B35]/30 sm:mt-0 font-medium"
        href="https://srlinks.xyz"
        target="_blank"
        title="Srlinks"
      >
        &copy; {{ new Date().getFullYear() }} srlinks.xyz
      </a>
      <span
        class="inline-flex justify-center mt-3 space-x-4 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          v-if="email"
          :href="`mailto:${email}`"
          title="Email"
          class="text-slate-400 hover:text-[#FF6B35] transition-all duration-300 hover:scale-110 transform group"
        >
          <span class="sr-only">Email</span>
          <GmailIcon class="w-5 h-5 group-hover:drop-shadow-glow-orange transition-all duration-300" />
        </a>
        <a
          v-if="blog"
          :href="blog"
          target="_blank"
          title="Blog"
          class="text-slate-400 hover:text-[#F72B7E] transition-all duration-300 hover:scale-110 transform group"
        >
          <span class="sr-only">Blog</span>
          <BloggerIcon class="w-5 h-5 group-hover:drop-shadow-glow-pink transition-all duration-300" />
        </a>
        <a
          v-if="github"
          :href="github"
          target="_blank"
          title="GitHub"
          class="text-slate-400 hover:text-[#FF6B35] transition-all duration-300 hover:scale-110 hover:rotate-12 transform group"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon class="w-5 h-5 group-hover:drop-shadow-glow-orange transition-all duration-300" />
        </a>
      </span>
    </div>
    
    <!-- Social Bar Ad Script - Before closing body tag -->
    <script type='text/javascript' src='//preferablyending.com/b1/c5/45/b1c5454db9d9699cc2f9072a41d2f475.js'></script>
  </section>
</template>

<style scoped>
/* Gradient animation for logo */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

/* Enhanced glow effects with brand colors */
.group:hover .drop-shadow-glow-orange {
  filter: drop-shadow(0 0 12px rgba(255, 107, 53, 0.8)) drop-shadow(0 0 20px rgba(255, 107, 53, 0.4));
}

.group:hover .drop-shadow-glow-pink {
  filter: drop-shadow(0 0 12px rgba(247, 43, 126, 0.8)) drop-shadow(0 0 20px rgba(247, 43, 126, 0.4));
}

/* Smooth transitions */
a {
  transition: all 0.3s ease;
}

/* Enhanced hover effect for icons */
a:hover svg {
  transform: translateY(-2px);
}
</style>
