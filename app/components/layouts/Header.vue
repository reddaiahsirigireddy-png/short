<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { GitHubIcon } from 'vue3-simple-icons'

const showMenu = ref(false)
const isScrolled = ref(false)

// Enhanced scroll detection for dynamic header styling
function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

// Close mobile menu when clicking outside
function closeMenuOnClickOutside(event) {
  if (!event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
    showMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', closeMenuOnClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', closeMenuOnClickOutside)
})

// Close menu when route changes
watch(() => useRoute().path, () => {
  showMenu.value = false
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300 ease-in-out"
    :class="[
      isScrolled
        ? 'header-scrolled'
        : 'bg-transparent',
    ]"
  >
    <section class="pb-3">
      <nav class="container relative z-50 h-16 select-none">
        <div class="container relative flex flex-wrap items-center justify-between h-16 px-4 mx-auto overflow-hidden font-medium lg:justify-center">
          <!-- Logo Section with enhanced styling -->
          <div class="flex items-center justify-start w-1/4 h-full pr-4">
            <NuxtLink
              to="/"
              title="Srlinks"
              class="flex items-center py-4 space-x-3 text-xl font-black text-slate-900 dark:text-slate-100 md:py-0 group transition-all duration-300 hover:scale-105"
            >
              <div class="relative">
                <span class="flex items-center justify-center w-10 h-10 rounded-xl brand-gradient shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src="/sink.png"
                    alt="Srlinks"
                    class="w-8 h-8 rounded-lg"
                    loading="eager"
                  >
                </span>
                <!-- Animated ring on hover -->
                <div class="absolute inset-0 rounded-xl ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 animate-pulse opacity-0 group-hover:opacity-100" />
              </div>
              <span class="bg-gradient-to-r from-[#FF6B35] via-[#F72B7E] to-[#FF6B35] bg-clip-text text-transparent font-extrabold tracking-tight bg-[length:200%_auto] animate-gradient">
                Srlinks
              </span>
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center w-3/4 h-full">
            <div class="flex-col w-full h-auto overflow-hidden rounded-lg md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
              <div class="w-auto mx-4" />

              <div class="flex flex-row items-center justify-end w-full space-x-6">
                <!-- Dashboard Link -->
                <NuxtLink
                  to="/dashboard"
                  title="Srlinks Dashboard"
                  class="relative px-6 py-2.5 text-white font-semibold bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] hover:from-[#F72B7E] hover:to-[#FF6B35] rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 border border-black/10 group overflow-hidden"
                >
                  <span class="relative z-10">Dashboard</span>
                  <!-- Shine effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </NuxtLink>

                <!-- GitHub Link with enhanced styling -->
                <a
                  href="https://github.com/sirigireddyreddaiahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                  class="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold leading-5 text-white bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] hover:from-[#F72B7E] hover:to-[#FF6B35] rounded-xl hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-0.5 group border border-black/10 overflow-hidden"
                >
                  <GitHubIcon class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span class="relative z-10">GitHub</span>
                  <!-- Shine effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </a>

                <!-- Theme Switch -->
                <div class="flex items-center space-x-3">
                  <SwitchTheme />
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="menu-button md:hidden relative flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF6B35]/10 to-[#F72B7E]/10 hover:from-[#FF6B35]/20 hover:to-[#F72B7E]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 border border-[#FF6B35]/20"
            :aria-expanded="showMenu"
            aria-label="Toggle navigation menu"
            @click="showMenu = !showMenu"
          >
            <!-- Animated hamburger icon -->
            <div class="flex flex-col justify-center items-center w-6 h-6 space-y-1">
              <span
                class="block h-0.5 w-5 bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] transition-all duration-300"
                :class="showMenu ? 'rotate-45 translate-y-1.5' : ''"
              />
              <span
                class="block h-0.5 w-5 bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] transition-all duration-300"
                :class="showMenu ? 'opacity-0' : ''"
              />
              <span
                class="block h-0.5 w-5 bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] transition-all duration-300"
                :class="showMenu ? '-rotate-45 -translate-y-1.5' : ''"
              />
            </div>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 transform -translate-y-4"
          enter-to-class="opacity-100 transform translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 transform translate-y-0"
          leave-to-class="opacity-0 transform -translate-y-4"
        >
          <div
            v-show="showMenu"
            class="mobile-menu md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
          >
            <div class="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden">
              <!-- Mobile Logo -->
              <div class="px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50">
                <NuxtLink
                  to="/"
                  title="Srlinks"
                  class="flex items-center space-x-3 text-lg font-bold"
                >
                  <img src="/sink.png" alt="Srlinks" class="w-8 h-8 rounded-lg">
                  <span class="bg-gradient-to-r from-[#FF6B35] via-[#F72B7E] to-[#FF6B35] bg-clip-text text-transparent font-extrabold">
                    Srlinks
                  </span>
                </NuxtLink>
              </div>

              <!-- Mobile Menu Items -->
              <div class="p-4 space-y-2">
                <NuxtLink
                  to="/dashboard"
                  title="Srlinks Dashboard"
                  class="flex items-center w-full px-4 py-3 text-white bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] hover:from-[#F72B7E] hover:to-[#FF6B35] rounded-xl transition-all duration-300 font-semibold border border-black/10 shadow-md hover:shadow-lg"
                >
                  Dashboard
                </NuxtLink>

                <a
                  href="https://github.com/sirigireddyreddaiahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                  class="flex items-center w-full px-4 py-3 text-white bg-gradient-to-r from-[#FF6B35] to-[#F72B7E] hover:from-[#F72B7E] hover:to-[#FF6B35] rounded-xl transition-all duration-300 font-semibold border border-black/10 shadow-md hover:shadow-lg"
                >
                  <GitHubIcon class="w-5 h-5 mr-3" />
                  GitHub
                </a>

                <!-- Mobile Controls -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Theme</span>
                  <div class="flex items-center space-x-3">
                    <SwitchTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </nav>
    </section>
  </header>
</template>

<style scoped>
/* Custom animations */
@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-shine {
  animation: shine 0.6s ease-out;
}

.animate-gradient {
  animation: gradient 3s ease infinite;
}

/* Brand gradient and color system */
.brand-gradient {
  background: linear-gradient(135deg, #FF6B35 0%, #F72B7E 100%);
}

/* Enhanced button gradients */
.btn-gradient {
  background: linear-gradient(135deg, #FF6B35 0%, #F72B7E 100%);
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(135deg, #F72B7E 0%, #FF6B35 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
}

.header-scrolled {
  background: rgba(255,255,255,0.95);
  box-shadow: 0 8px 24px rgba(26,26,26,0.08);
  border-bottom: 1px solid #e1e8ed;
}

@media (prefers-color-scheme: dark) {
  .header-scrolled {
    background: rgba(26,26,26,0.95);
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
}

/* Enhanced backdrop blur for better browser support */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom focus styles */
.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
</style>
