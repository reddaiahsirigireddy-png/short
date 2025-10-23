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
  Globe,
  MapPin,
  Smartphone,
  Activity,
  Eye,
  MousePointerClick,
  Zap
} from 'lucide-vue-next'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Slugs",
    description: "Smart slug suggestions that boost engagement and brand recognition",
    color: "from-orange-500 to-pink-500"
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
    icon: Zap,
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
  },
  { 
    icon: Target,
    title: "Businesses & Marketers", 
    desc: "Run and measure marketing campaigns with precision analytics",
  },
  { 
    icon: Award,
    title: "Agencies & Teams", 
    desc: "Manage multiple clients with team collaboration tools",
  }
]

const analyticsFeatures = [
  {
    icon: Globe,
    title: "Geographic Tracking",
    description: "See exactly where your clicks are coming from with detailed country, region, and city-level data",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Device Intelligence",
    description: "Understand your audience with desktop, mobile, and tablet breakdowns plus OS and browser details",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: MapPin,
    title: "Referer Analysis",
    description: "Track which websites, social media platforms, and campaigns are driving the most traffic",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Activity,
    title: "Time-based Insights",
    description: "Identify peak engagement times and patterns to optimize your posting schedule",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Eye,
    title: "Visitor vs Visits",
    description: "Distinguish between unique visitors and total visits to understand user behavior",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: MousePointerClick,
    title: "Click-through Rate",
    description: "Monitor engagement metrics and conversion rates in real-time",
    color: "from-pink-500 to-rose-500"
  }
]

const howAnalyticsWork = [
  {
    step: "Link Creation",
    title: "Every Link is Tagged",
    description: "When you create a short link, we automatically assign tracking parameters that work invisibly in the background",
    icon: Link
  },
  {
    step: "Click Detection",
    title: "Real-time Data Capture",
    description: "The moment someone clicks your link, we capture their location, device type, browser, referring source, and timestamp",
    icon: Activity
  },
  {
    step: "Data Processing",
    title: "Intelligent Analysis",
    description: "Our system processes the data instantly, categorizing it by geography, device, time, and traffic source",
    icon: Brain
  },
  {
    step: "Visual Dashboard",
    title: "Actionable Insights",
    description: "View your data through interactive charts, graphs, and maps that update in real-time as clicks come in",
    icon: BarChart3
  }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
    
    <!-- VALUE PROPOSITION -->
    <section class="py-24 px-4 relative">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-full text-orange-500 dark:text-orange-400 text-sm font-semibold mb-4">
            VALUE PROPOSITION
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Why <span class="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">SRLinks?</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Not just another URL shortener — it's your complete link growth platform
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, idx) in features"
            :key="idx"
            class="group relative bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-transparent group-hover:from-orange-500/5 group-hover:via-pink-500/5 rounded-3xl transition-all duration-500" />
            
            <div :class="`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`">
              <component :is="feature.icon" :size="32" />
            </div>
            
            <h3 class="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ feature.title }}
            </h3>
            
            <p class="relative text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-24 px-4 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent dark:via-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-4">
            HOW IT WORKS
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Get Started in <span class="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">60 Seconds</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
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
              
              <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {{ step.title }}
              </h3>
              
              <p class="text-gray-600 dark:text-gray-400">
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
          <div class="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
            WHO IT'S FOR
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Built for <span class="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Everyone</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            From solo creators to enterprise teams
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(useCase, idx) in useCases"
            :key="idx"
            class="group bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-3 text-center hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <component :is="useCase.icon" :size="40" />
            </div>
            
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ useCase.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 text-lg">
              {{ useCase.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How Link Analysis Works -->
    <section class="py-24 px-4 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent dark:via-slate-900/50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            LINK ANALYTICS
          </div>
          <h2 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            How We <span class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Analyze</span> Your Links
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Every click tells a story. Here's how we capture and analyze your link performance
          </p>
        </div>

        <!-- Analytics Process -->
        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div v-for="(process, idx) in howAnalyticsWork" :key="idx" class="group relative bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-500">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <component :is="process.icon" :size="32" />
                </div>
              </div>
              <div class="flex-1">
                <div class="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  STEP {{ idx + 1 }}: {{ process.step }}
                </div>
                <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {{ process.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ process.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Features -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, idx) in analyticsFeatures"
            :key="idx"
            class="group relative bg-white dark:bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-transparent group-hover:from-purple-500/5 group-hover:via-pink-500/5 rounded-3xl transition-all duration-500" />
            
            <div :class="`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`">
              <component :is="feature.icon" :size="32" />
            </div>
            
            <h3 class="relative text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ feature.title }}
            </h3>
            
            <p class="relative text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
