<script setup>
import { onMounted, ref } from 'vue'

const recentList = ref([])

function formatTime(timestamp) {
  if (!timestamp)
    return 'Just now'
  const date = new Date(timestamp)
  const now = new Date()
  const diff = Math.floor((now - date) / 1000)

  if (diff < 60)
    return 'Just now'
  if (diff < 3600)
    return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400)
    return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

function shortLinkText(item) {
  if (!item)
    return ''
  if (item?.link?.slug)
    return item.link.slug
  if (item?.slug)
    return item.slug
  if (item?.name?.startsWith('link:'))
    return item.name.replace(/^link:/, '')
  if (item?.key)
    return item.key
  return ''
}

function formatShortLink(item) {
  if (!item)
    return '#'
  const slug = shortLinkText(item)
  return slug ? `/${slug}` : '#'
}

function originalLinkText(item) {
  if (!item)
    return ''
  if (item?.link?.url)
    return item.link.url
  if (item?.metadata?.url)
    return item.metadata.url
  if (item?.original)
    return item.original
  return item?.url ?? ''
}

function formatClicks(item) {
  const c = item?.link?.clicks ?? item?.metadata?.clicks ?? item?.clicks ?? 0
  if (c > 1000)
    return `${(c / 1000).toFixed(1)}k`
  return c.toString()
}

async function loadRecent() {
  try {
    const res = await fetch('/api/link/list?limit=6')
    if (!res.ok)
      return

    const data = await res.json()
    if (Array.isArray(data))
      recentList.value = data
    else if (data?.keys)
      recentList.value = data.keys
    else if (data?.list)
      recentList.value = data.list
    else recentList.value = []
  }
  catch (_e) {
    recentList.value = []
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  loadRecent()
})
</script>

<template>
  <div>
    <Header />
    <main>
      <!-- HERO SECTION -->
      <section class="hero-gradient min-h-screen relative overflow-hidden">
        <!-- Animated Background -->
        <div class="absolute inset-0">
          <div class="floating-circle circle-1" />
          <div class="floating-circle circle-2" />
          <div class="floating-circle circle-3" />
        </div>

        <div class="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div class="text-center mb-12 animate-fade-in">
            <h1 class="hero-title">
              <span class="gradient-text">Shorten</span> Your Links,
              <span class="gradient-text">Amplify</span> Your Reach
            </h1>
            <p class="hero-subtitle">
              Transform long URLs into powerful short links with real-time analytics
            </p>
          </div>

          <!-- MAIN CTA - GO TO DASHBOARD -->
          <div class="max-w-2xl mx-auto mb-16">
            <div class="glass-card text-center py-12 px-8">
              <h2 class="text-3xl font-bold mb-4 bg-gradient-to-r from-[#FF6B35] via-[#F72B7E] to-[#FF6B35] bg-clip-text text-transparent">
                Start Shortening Links Now
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Access your dashboard to create, manage, and track all your short links
              </p>
              
              <NuxtLink 
                to="/dashboard" 
                class="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold text-white rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group relative overflow-hidden"
                style="background: linear-gradient(135deg, #FF6B35 0%, #F72B7E 100%)"
              >
                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                
                <span class="relative z-10 flex items-center gap-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Go to Dashboard
                  <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </NuxtLink>

              <!-- Trust badges -->
              <div class="flex items-center justify-center gap-8 mt-8 flex-wrap">
                <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span class="text-xl">⚡</span>
                  <span class="font-semibold">Instant Setup</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span class="text-xl">🔒</span>
                  <span class="font-semibold">Secure</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span class="text-xl">📊</span>
                  <span class="font-semibold">Real-time Analytics</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Benefits - Value Propositions -->
          <div class="quick-stats">
            <div class="stat-item">
              <div class="stat-icon-large">⚡</div>
              <span class="stat-number">Shorten Instantly</span>
              <span class="stat-label">Transform any URL in seconds</span>
            </div>
            <div class="stat-item">
              <div class="stat-icon-large">📱</div>
              <span class="stat-number">QR Code Ready</span>
              <span class="stat-label">Print & share anywhere</span>
            </div>
            <div class="stat-item">
              <div class="stat-icon-large">🎯</div>
              <span class="stat-number">Track Everything</span>
              <span class="stat-label">Clicks, location, devices</span>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURES SECTION -->
      <section class="features-section">
        <div class="container mx-auto px-4">
          <div class="section-header">
            <span class="section-badge">FEATURES</span>
            <h2 class="section-title">
              Everything you need to manage links
            </h2>
            <p class="section-subtitle">
              Powerful tools to shorten, share, and track your URLs
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">⚡</div>
              </div>
              <h3 class="feature-title">Lightning Fast</h3>
              <p class="feature-desc">
                Create short links instantly with our optimized infrastructure
              </p>
              <div class="feature-hover-effect" />
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">📊</div>
              </div>
              <h3 class="feature-title">Real-time Analytics</h3>
              <p class="feature-desc">
                Track clicks, locations, devices, and more in real-time
              </p>
              <div class="feature-hover-effect" />
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🎨</div>
              </div>
              <h3 class="feature-title">Custom Aliases</h3>
              <p class="feature-desc">
                Create memorable branded short links with custom aliases
              </p>
              <div class="feature-hover-effect" />
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">📱</div>
              </div>
              <h3 class="feature-title">QR Codes</h3>
              <p class="feature-desc">
                Generate QR codes for your links instantly
              </p>
              <div class="feature-hover-effect" />
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🔒</div>
              </div>
              <h3 class="feature-title">Secure & Reliable</h3>
              <p class="feature-desc">
                Enterprise-grade security with 99.9% uptime guarantee
              </p>
              <div class="feature-hover-effect" />
            </div>

            <div class="feature-card group">
              <div class="feature-icon-wrapper">
                <div class="feature-icon">🤖</div>
              </div>
              <h3 class="feature-title">AI-Powered</h3>
              <p class="feature-desc">
                Smart slug suggestions powered by artificial intelligence
              </p>
              <div class="feature-hover-effect" />
            </div>
          </div>
        </div>
      </section>

      <!-- RECENT LINKS -->
      <section class="recent-section" v-if="recentList.length > 0">
        <div class="container mx-auto px-4">
          <div class="section-header">
            <span class="section-badge">TRENDING</span>
            <h2 class="section-title">Recently Created Links</h2>
          </div>

          <div class="links-container">
            <div v-for="(link, idx) in recentList" :key="idx" class="link-card">
              <div class="link-header">
                <a :href="formatShortLink(link)" target="_blank" class="link-short">
                  <span class="link-icon">🔗</span>
                  {{ shortLinkText(link) }}
                </a>
                <span class="link-badge">{{ formatTime(link.createdAt) }}</span>
              </div>
              <div class="link-original">
                {{ originalLinkText(link) }}
              </div>
              <div class="link-stats">
                <span class="stat-item">
                  <span class="stat-icon">👁</span>
                  {{ formatClicks(link) }}
                </span>
                <span class="stat-item">
                  <span class="stat-icon">📍</span>
                  {{ link.country || 'Global' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA SECTION -->
      <section class="cta-section">
        <div class="container mx-auto px-4 text-center">
          <h2 class="cta-title">Start shortening links today</h2>
          <p class="cta-subtitle">
            Join thousands of users who trust us with their links
          </p>
          <div class="cta-buttons">
            <NuxtLink to="/dashboard" class="btn-primary btn-large">
              Get Started Free
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.6; 
  }
  50% { 
    transform: translateY(-100vh) rotate(360deg); 
    opacity: 0; 
  }
}

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

.hero-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #fda085 100%);
  position: relative;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite ease-in-out;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  left: -150px;
  animation-delay: 0s;
}

.circle-2 {
  width: 400px;
  height: 400px;
  bottom: -200px;
  right: -200px;
  animation-delay: 5s;
}

.circle-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  animation-delay: 10s;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 3rem auto 0;
}

.stat-item {
  text-align: center;
  color: white;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-icon-large {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  text-shadow: none;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.95;
  letter-spacing: 0.3px;
  line-height: 1.4;
  display: block;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  background: linear-gradient(135deg, #FF6B35 0%, #F72B7E 100%);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.feature-icon-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.feature-desc {
  font-size: 1rem;
  color: #718096;
  line-height: 1.7;
}

.feature-hover-effect {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.feature-card:hover .feature-hover-effect {
  opacity: 1;
}

/* Recent Links Section */
.recent-section {
  padding: 5rem 0;
  background: white;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.link-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: white;
}

.link-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.link-short {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.link-short:hover {
  color: #764ba2;
}

.link-icon {
  font-size: 1.2rem;
}

.link-badge {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.link-original {
  color: #718096;
  font-size: 0.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 1rem;
}

.link-stats {
  display: flex;
  gap: 1.5rem;
}

.link-stats .stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-size: 0.875rem;
  background: transparent;
  padding: 0;
  border: none;
}

.link-stats .stat-item:hover {
  transform: none;
  background: transparent;
  box-shadow: none;
}

.stat-icon {
  font-size: 1rem;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #FF6B35 0%, #F72B7E 100%);
  position: relative;
  overflow: hidden;
}

.cta-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.cta-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: #FF6B35;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .quick-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-number {
    font-size: 1.25rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .links-container {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }
}
</style>
