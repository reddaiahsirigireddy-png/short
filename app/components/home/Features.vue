<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-32 px-4">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1.5s" />
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin-slow"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            Powered by AI & Global Edge Network
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span class="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Shorten. Track. Grow.
            </span>
          </h1>
          
          <p class="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            The most powerful link management platform for creators, marketers, and businesses
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button class="group px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              Start Free - No Credit Card
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>

          <p class="text-gray-500 text-sm mt-6">
            ✨ Free forever plan • ⚡ Setup in 60 seconds • 🔒 Enterprise-grade security
          </p>
        </div>
      </div>
    </section>

    <!-- Value Proposition - Why SRLinks -->
    <section class="py-24 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold mb-4">
            VALUE PROPOSITION
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            Why <span class="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">SRLinks?</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Not just another URL shortener — it's your complete link growth platform
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, idx) in features"
            :key="idx"
            class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500" />
            
            <div :class="`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`" v-html="feature.icon">
            </div>
            
            <h3 class="relative text-2xl font-bold mb-4 text-white">
              {{ feature.title }}
            </h3>
            
            <p class="relative text-gray-400 leading-relaxed text-lg">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
            HOW IT WORKS
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            Get Started in <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">60 Seconds</span>
          </h2>
          <p class="text-xl text-gray-400">
            Four simple steps to supercharge your links
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, idx) in steps" :key="idx" class="relative group">
            <div class="text-center">
              <div class="relative mx-auto mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" v-html="step.icon">
                </div>
                <div class="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {{ idx + 1 }}
                </div>
              </div>
              
              <h3 class="text-xl font-bold mb-3 text-white">
                {{ step.title }}
              </h3>
              
              <p class="text-gray-400">
                {{ step.desc }}
              </p>
            </div>

            <div v-if="idx < steps.length - 1" class="hidden md:block absolute top-10 left-[60%] w-[80%] h-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50" />
          </div>
        </div>
      </div>
    </section>

    <!-- Who It's For -->
    <section class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-semibold mb-4">
            WHO IT'S FOR
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            Built for <span class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p class="text-xl text-gray-400">
            From solo creators to enterprise teams
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(useCase, idx) in useCases"
            :key="idx"
            class="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-3 text-center hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" v-html="useCase.icon">
            </div>
            
            <h3 class="text-2xl font-bold mb-4 text-white">
              {{ useCase.title }}
            </h3>
            
            <p class="text-gray-400 mb-6 text-lg">
              {{ useCase.desc }}
            </p>

            <div class="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              {{ useCase.stats }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Analytics & Insights -->
    <section class="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold mb-4">
            ANALYTICS & INSIGHTS
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data-Driven</span> Decisions
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Track every click with real-time analytics and actionable insights
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div v-for="(metric, idx) in analyticsMetrics" :key="idx" class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
            <div class="flex items-center gap-4 mb-3">
              <div :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white`" v-html="metric.icon"></div>
              <div>
                <div class="text-3xl font-black text-white">{{ metric.value }}</div>
                <div class="text-sm text-gray-400">{{ metric.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(insight, idx) in insights" :key="idx" class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500">
            <div :class="`w-14 h-14 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center text-white mb-6 shadow-lg`" v-html="insight.icon"></div>
            <h3 class="text-xl font-bold mb-3 text-white">{{ insight.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ insight.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Real-World Use Cases -->
    <section class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4">
            REAL-WORLD USE CASES
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            See <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SRLinks</span> in Action
          </h2>
          <p class="text-xl text-gray-400">
            How our customers achieve incredible results
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(usecase, idx) in realWorldCases" :key="idx" class="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
            <div class="flex items-start gap-6">
              <div :class="`w-16 h-16 rounded-2xl bg-gradient-to-br ${usecase.color} flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`" v-html="usecase.icon"></div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-3 text-white">{{ usecase.title }}</h3>
                <p class="text-gray-400 mb-4 leading-relaxed">{{ usecase.scenario }}</p>
                <div class="flex items-center gap-2 text-blue-400 font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
                  {{ usecase.result }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple Token-Based Auth -->
    <section class="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div class="max-w-6xl mx-auto">
        <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />
          
          <div class="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold mb-6">
                AUTHENTICATION
              </div>
              <h2 class="text-4xl md:text-5xl font-black mb-6 text-white">
                Simple <span class="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Token-Based</span> Auth
              </h2>
              <p class="text-xl text-gray-400 mb-8 leading-relaxed">
                No complex OAuth flows. No headaches. Just a simple, secure token that works everywhere.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 flex-shrink-0 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  <span class="text-gray-300 text-lg">Generate your API token in one click</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 flex-shrink-0 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  <span class="text-gray-300 text-lg">Use it in any application or script</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 flex-shrink-0 mt-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  <span class="text-gray-300 text-lg">Revoke and regenerate anytime</span>
                </li>
              </ul>
            </div>
            <div class="bg-slate-950/50 rounded-2xl p-6 border border-slate-700/50">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre class="text-green-400 text-sm overflow-x-auto"><code>curl -X POST https://srlinks.io/api/shorten \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}'</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About SRLinks -->
    <section class="py-24 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <div class="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-semibold mb-4">
            ABOUT SRLINKS
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-white">
            Built for <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Modern Teams</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 class="text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <p class="text-xl text-gray-400 leading-relaxed mb-6">
              We're on a mission to make link management simple, powerful, and accessible for everyone. From solo creators to Fortune 500 companies, SRLinks empowers you to create, track, and optimize every link you share.
            </p>
            <p class="text-xl text-gray-400 leading-relaxed">
              Built with cutting-edge technology and powered by Cloudflare's global network, we deliver lightning-fast redirects and real-time analytics at scale.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div v-for="(stat, idx) in aboutStats" :key="idx" class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 text-center hover:scale-105 transition-transform duration-300">
              <div class="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {{ stat.value }}
              </div>
              <div class="text-gray-400 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(value, idx) in coreValues" :key="idx" class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
            <div :class="`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 shadow-lg`" v-html="value.icon"></div>
            <h3 class="text-xl font-bold mb-3 text-white">{{ value.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 px-4 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20" />
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-sm">
          CALL TO ACTION
        </div>
        
        <h2 class="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          Ready to Transform Your
          <span class="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Link Strategy?
          </span>
        </h2>
        
        <p class="text-2xl text-gray-300 mb-12 leading-relaxed">
          Join 100,000+ users who trust SRLinks to power their links
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email address"
            class="px-8 py-5 rounded-2xl text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/50 bg-white text-gray-900 flex-1 font-medium"
          />
          
          <button class="px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap">
            Start Free
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

        <div class="flex items-center justify-center gap-8 text-gray-400 text-sm">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            No credit card required
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            Setup in 60 seconds
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            Free forever plan
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'SRLinksHomepage',
  data() {
    return {
      email: '',
      openFaq: null,
      features: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>',
          title: "AI-Powered Slugs",
          description: "Smart slug suggestions that boost engagement and brand recognition",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
          title: "Real-time Analytics",
          description: "Track clicks, locations, devices, and referrers in real-time",
          color: "from-cyan-500 to-blue-500"
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><rect width="5" height="5" x="16" y="16" rx="1"/></svg>',
          title: "QR Code Generator",
          description: "Create beautiful, customizable QR codes instantly",
          color: "from-green-500 to-emerald-500"
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
          title: "Enterprise Security",
          description: "Bank-level encryption with DDoS protection and 99.9% uptime",
          color: "from-blue-500 to-indigo-500"
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
          title: "Link Expiration",
          description: "Set expiry dates and control your campaign lifecycle",
          color: "from-pink-500 to-rose-500"
        }
      ],
      steps: [
        { title: "Paste Your URL", desc: "Add your long link", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>' },
        { title: "Customize Slug", desc: "AI suggests or create your own", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>' },
        { title: "Generate & Share", desc: "Get instant short link + QR", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>' },
        { title: "Track & Optimize", desc: "Monitor real-time performance", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>' }
      ],
      useCases: [
        { 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
          title: "Creators & Influencers", 
          desc: "Track bio links, campaigns, and audience engagement across platforms",
          stats: "10K+ Active Users"
        },
        { 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
          title: "Businesses & Marketers", 
          desc: "Run and measure marketing campaigns with precision analytics",
          stats: "5M+ Links Created"
        },
        { 
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
          title: "Agencies & Teams", 
          desc: "Manage multiple clients with team collaboration tools",
          stats: "99.9% Satisfaction"
        }
      ],
      analyticsMetrics: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
          value: '50M+',
          label: 'Clicks Tracked',
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          value: '180+',
          label: 'Countries',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
          value: '<100ms',
          label: 'Avg Response',
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>',
          value: '99.9%',
          label: 'Uptime SLA',
          color: 'from-orange-500 to-red-500'
        }
      ],
      insights: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
          title: 'Geographic Insights',
          desc: 'See where your clicks are coming from with detailed country and city-level data',
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
          title: 'Device Analytics',
          desc: 'Understand your audience with desktop, mobile, and tablet breakdowns',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
          title: 'Time-based Trends',
          desc: 'Identify peak engagement times to optimize your posting schedule',
          color: 'from-green-500 to-emerald-500'
        }
      ],
      realWorldCases: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
          title: 'Social Media Campaign',
          scenario: 'A fashion influencer used SRLinks to track her Instagram bio link across 5 campaigns, identifying that evening posts drove 3x more traffic.',
          result: '312% increase in conversions',
          color: 'from-pink-500 to-rose-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/></svg>',
          title: 'Product Launch',
          scenario: 'A SaaS company used custom slugs and QR codes for their product launch, tracking offline and online engagement separately.',
          result: '89% attribution accuracy',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>',
          title: 'E-commerce Promo',
          scenario: 'An online retailer created time-limited discount links that auto-expired after Black Friday, preventing code abuse.',
          result: '$50K saved in promo abuse',
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
          title: 'Event Management',
          scenario: 'A conference organizer used QR codes on badges to track session attendance and engagement across 20+ workshops.',
          result: '2,400+ check-ins tracked',
          color: 'from-purple-500 to-indigo-500'
        }
      ],
      aboutStats: [
        { value: '100K+', label: 'Active Users' },
        { value: '5M+', label: 'Links Created' },
        { value: '50M+', label: 'Clicks Tracked' },
        { value: '99.9%', label: 'Uptime' }
      ],
      coreValues: [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
          title: 'Speed First',
          desc: 'Built on Cloudflare\'s edge network for instant redirects globally',
          color: 'from-orange-500 to-red-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
          title: 'Privacy Focused',
          desc: 'Your data is encrypted, secure, and never sold to third parties',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>',
          title: 'Enterprise Ready',
          desc: '99.9% uptime SLA, dedicated support, and custom solutions',
          color: 'from-green-500 to-emerald-500'
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s ease infinite;
}
</style>.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
          title: "Lightning Fast",
          description: "Powered by Cloudflare's global edge network for <100ms redirects worldwide",
          color: "from-orange-500 to-red-500"
        },
        {
          icon: '<svg xmlns="http://www.w3
