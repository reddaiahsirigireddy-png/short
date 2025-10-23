<script setup>
import { ref } from 'vue'
import { 
  Brain, 
  BarChart3, 
  QrCode, 
  Shield, 
  Clock,
  Link,
  Sparkles,
  Rocket,
  TrendingUp,
  Users,
  Target,
  Award,
  PieChart,
  Smartphone,
  Calendar,
  Instagram,
  Zap,
  ShoppingBag,
  Ticket,
  Bolt,
  Lock,
  CheckCircle2
} from 'lucide-vue-next'

const email = ref('')

const features = [
  {
    icon: Brain,
    title: "AI-Powered Slugs",
    description: "Smart slug suggestions that boost engagement and brand recognition",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track clicks, locations, devices, and referrers in real-time",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Create beautiful, customizable QR codes instantly",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption with DDoS protection and 99.9% uptime",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Clock,
    title: "Link Expiration",
    description: "Set expiry dates and control your campaign lifecycle",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Bolt,
    title: "Lightning Fast",
    description: "Powered by Cloudflare's global edge network for <100ms redirects worldwide",
    color: "from-orange-500 to-red-500"
  }
]

const steps = [
  { title: "Paste Your URL", desc: "Add your long link", icon: Link },
  { title: "Customize Slug", desc: "AI suggests or create your own", icon: Sparkles },
  { title: "Generate & Share", desc: "Get instant short link + QR", icon: Rocket },
  { title: "Track & Optimize", desc: "Monitor real-time performance", icon: TrendingUp }
]

const useCases = [
  { 
    icon: Users,
    title: "Creators & Influencers", 
    desc: "Track bio links, campaigns, and audience engagement across platforms",
    stats: "10K+ Active Users"
  },
  { 
    icon: Target,
    title: "Businesses & Marketers", 
    desc: "Run and measure marketing campaigns with precision analytics",
    stats: "5M+ Links Created"
  },
  { 
    icon: Award,
    title: "Agencies & Teams", 
    desc: "Manage multiple clients with team collaboration tools",
    stats: "99.9% Satisfaction"
  }
]

const analyticsMetrics = [
  {
    icon: BarChart3,
    value: '50M+',
    label: 'Clicks Tracked',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    value: '180+',
    label: 'Countries',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Zap,
    value: '<100ms',
    label: 'Avg Response',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime SLA',
    color: 'from-orange-500 to-red-500'
  }
]

const insights = [
  {
    icon: PieChart,
    title: 'Geographic Insights',
    desc: 'See where your clicks are coming from with detailed country and city-level data',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Device Analytics',
    desc: 'Understand your audience with desktop, mobile, and tablet breakdowns',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Calendar,
    title: 'Time-based Trends',
    desc: 'Identify peak engagement times to optimize your posting schedule',
    color: 'from-green-500 to-emerald-500'
  }
]

const realWorldCases = [
  {
    icon: Instagram,
    title: 'Social Media Campaign',
    scenario: 'A fashion influencer used SRLinks to track her Instagram bio link across 5 campaigns, identifying that evening posts drove 3x more traffic.',
    result: '312% increase in conversions',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Rocket,
    title: 'Product Launch',
    scenario: 'A SaaS company used custom slugs and QR codes for their product launch, tracking offline and online engagement separately.',
    result: '89% attribution accuracy',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Promo',
    scenario: 'An online retailer created time-limited discount links that auto-expired after Black Friday, preventing code abuse.',
    result: '$50K saved in promo abuse',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Ticket,
    title: 'Event Management',
    scenario: 'A conference organizer used QR codes on badges to track session attendance and engagement across 20+ workshops.',
    result: '2,400+ check-ins tracked',
    color: 'from-purple-500 to-indigo-500'
  }
]

const aboutStats = [
  { value: '100K+', label: 'Active Users' },
  { value: '5M+', label: 'Links Created' },
  { value: '50M+', label: 'Clicks Tracked' },
  { value: '99.9%', label: 'Uptime' }
]

const coreValues = [
  {
    icon: Bolt,
    title: 'Speed First',
    desc: 'Built on Cloudflare\'s edge network for instant redirects globally',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Lock,
    title: 'Privacy Focused',
    desc: 'Your data is encrypted, secure, and never sold to third parties',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: CheckCircle2,
    title: 'Enterprise Ready',
    desc: '99.9% uptime SLA, dedicated support, and custom solutions',
    color: 'from-green-500 to-emerald-500'
  }
]
</script>

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
            <Zap :size="16" class="animate-spin" style="animation-duration: 3s" />
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
              <Rocket :size="24" class="group-hover:translate-x-2 transition-transform" />
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
            
            <div :class="`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`">
              <component :is="feature.icon" :size="32" />
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
                <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <component :is="step.icon" :size="40" />
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
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <component :is="useCase.icon" :size="40" />
            </div>
            
            <h3 class="text-2xl font-bold mb-4 text-white">
              {{ useCase.title }}
            </h3>
            
            <p class="text-gray-400 mb-6 text-lg">
              {{ useCase.desc }}
            </p>

            <div class="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400">
              <CheckCircle2 :size="16" />
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
              <div :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white`">
                <component :is="metric.icon" :size="24" />
              </div>
              <div>
                <div class="text-3xl font-black text-white">{{ metric.value }}</div>
                <div class="text-sm text-gray-400">{{ metric.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(insight, idx) in insights" :key="idx" class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500">
            <div :class="`w-14 h-14 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center text-white mb-6 shadow-lg`">
              <component :is="insight.icon" :size="28" />
            </div>
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
              <div :class="`w-16 h-16 rounded-2xl bg-gradient-to-br ${usecase.color} flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`">
                <component :is="usecase.icon" :size="32" />
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold mb-3 text-white">{{ usecase.title }}</h3>
                <p class="text-gray-400 mb-4 leading-relaxed">{{ usecase.scenario }}</p>
                <div class="flex items-center gap-2 text-blue-400 font-semibold">
                  <TrendingUp :size="20" />
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
                  <CheckCircle2 :size="24" class="text-green-400 flex-shrink-0 mt-1" />
                  <span class="text-gray-300 text-lg">Generate your API token in one click</span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle2 :size="24" class="text-green-400 flex-shrink-0 mt-1" />
                  <span class="text-gray-300 text-lg">Use it in any application or script</span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle2 :size="24" class="text-green-400 flex-shrink-0 mt-1" />
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
            <div :class="`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 shadow-lg`">
              <component :is="value.icon" :size="28" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">{{ value.title }}</h3>
            <p class="text-gray-400 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Final CTA -->
    <section class="py-32 px-4 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl"></div>
      </div>
      
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
          Ready to <span class="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Supercharge</span> Your Links?
        </h2>
        
        <p class="text-2xl text-gray-300 mb-12 leading-relaxed">
          Join 100,000+ creators, marketers, and businesses already using SRLinks
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button class="group px-12 py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-2xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
            Get Started Free
            <Rocket :size="28" class="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <p class="text-gray-500">
          No credit card required • Setup in 60 seconds • Cancel anytime
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-4 border-t border-slate-800/50">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold text-white mb-4">SRLinks</h3>
            <p class="text-gray-400 text-sm">
              The most powerful link management platform for modern teams.
            </p>
          </div>
          
          <div>
            <h4 class="text-white font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-white font-semibold mb-4">Legal</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-slate-800/50 text-center text-gray-500 text-sm">
          <p>&copy; 2025 SRLinks. All rights reserved. Built with ❤️ for creators worldwide.</p>
        </div>
      </div>
    </footer>
  </div>
