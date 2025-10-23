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

    <!-- Final CTA -->
    <section class="py-32 px-4 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20" />
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-sm">
          READY TO GET STARTED?
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
            <Rocket :size="20" />
          </button>
        </div>

        <div class="flex items-center justify-center gap-8 text-gray-400 text-sm flex-wrap">
          <div class="flex items-center gap-2">
            <CheckCircle2 :size="16" class="text-green-400" />
            No credit card required
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle2 :size="16" class="text-green-400" />
            Setup in 60 seconds
          </div>
          <div class="flex items-center gap-2">
            <CheckCircle2 :size="16" class="text-green-400" />
            Free forever plan
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
