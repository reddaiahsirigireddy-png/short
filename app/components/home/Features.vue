import React, { useState } from 'react';
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
} from 'lucide-react';

export default function SRLinksHomepage() {
  const [email, setEmail] = useState('');

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
  ];

  const steps = [
    { title: "Paste Your URL", desc: "Add your long link", icon: Link },
    { title: "Customize Slug", desc: "AI suggests or create your own", icon: Sparkles },
    { title: "Generate & Share", desc: "Get instant short link + QR", icon: Rocket },
    { title: "Track & Optimize", desc: "Monitor real-time performance", icon: TrendingUp }
  ];

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
  ];

  const analyticsMetrics = [
    { icon: BarChart3, value: '50M+', label: 'Clicks Tracked', color: 'from-purple-500 to-pink-500' },
    { icon: Target, value: '180+', label: 'Countries', color: 'from-cyan-500 to-blue-500' },
    { icon: Zap, value: '<100ms', label: 'Avg Response', color: 'from-green-500 to-emerald-500' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime SLA', color: 'from-orange-500 to-red-500' }
  ];

  const insights = [
    { icon: PieChart, title: 'Geographic Insights', desc: 'See where your clicks are coming from with detailed country and city-level data', color: 'from-purple-500 to-pink-500' },
    { icon: Smartphone, title: 'Device Analytics', desc: 'Understand your audience with desktop, mobile, and tablet breakdowns', color: 'from-cyan-500 to-blue-500' },
    { icon: Calendar, title: 'Time-based Trends', desc: 'Identify peak engagement times to optimize your posting schedule', color: 'from-green-500 to-emerald-500' }
  ];

  const realWorldCases = [
    { icon: Instagram, title: 'Social Media Campaign', scenario: 'A fashion influencer used SRLinks to track her Instagram bio link across 5 campaigns, identifying that evening posts drove 3x more traffic.', result: '312% increase in conversions', color: 'from-pink-500 to-rose-500' },
    { icon: Rocket, title: 'Product Launch', scenario: 'A SaaS company used custom slugs and QR codes for their product launch, tracking offline and online engagement separately.', result: '89% attribution accuracy', color: 'from-blue-500 to-cyan-500' },
    { icon: ShoppingBag, title: 'E-commerce Promo', scenario: 'An online retailer created time-limited discount links that auto-expired after Black Friday, preventing code abuse.', result: '$50K saved in promo abuse', color: 'from-green-500 to-emerald-500' },
    { icon: Ticket, title: 'Event Management', scenario: 'A conference organizer used QR codes on badges to track session attendance and engagement across 20+ workshops.', result: '2,400+ check-ins tracked', color: 'from-purple-500 to-indigo-500' }
  ];

  const aboutStats = [
    { value: '100K+', label: 'Active Users' },
    { value: '5M+', label: 'Links Created' },
    { value: '50M+', label: 'Clicks Tracked' },
    { value: '99.9%', label: 'Uptime' }
  ];

  const coreValues = [
    { icon: Bolt, title: 'Speed First', desc: 'Built on Cloudflare\'s edge network for instant redirects globally', color: 'from-orange-500 to-red-500' },
    { icon: Lock, title: 'Privacy Focused', desc: 'Your data is encrypted, secure, and never sold to third parties', color: 'from-blue-500 to-indigo-500' },
    { icon: CheckCircle2, title: 'Enterprise Ready', desc: '99.9% uptime SLA, dedicated support, and custom solutions', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-300 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Zap className="w-4 h-4 animate-spin" style={{animationDuration: '3s'}} />
              Powered by AI & Global Edge Network
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Shorten. Track. Grow.
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              The most powerful link management platform for creators, marketers, and businesses
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Start Free - No Credit Card
                <Rocket className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              ✨ Free forever plan • ⚡ Setup in 60 seconds • 🔒 Enterprise-grade security
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold mb-4">
              VALUE PROPOSITION
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Why <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">SRLinks?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Not just another URL shortener — it's your complete link growth platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-orange-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500" />
                
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="relative text-2xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                
                <p className="relative text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Get Started in <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">60 Seconds</span>
            </h2>
            <p className="text-xl text-gray-400">
              Four simple steps to supercharge your links
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-semibold mb-4">
              WHO IT'S FOR
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Built for <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Everyone</span>
            </h2>
            <p className="text-xl text-gray-400">
              From solo creators to enterprise teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-10 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-3 text-center hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <useCase.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-lg">
                  {useCase.desc}
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  {useCase.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold mb-4">
              ANALYTICS & INSIGHTS
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data-Driven</span> Decisions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Track every click with real-time analytics and actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {analyticsMetrics.map((metric, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-white`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  <insight.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{insight.title}</h3>
                <p className="text-gray-400 leading-relaxed">{insight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4">
              REAL-WORLD USE CASES
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              See <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SRLinks</span> in Action
            </h2>
            <p className="text-xl text-gray-400">
              How our customers achieve incredible results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {realWorldCases.map((usecase, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${usecase.color} flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <usecase.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">{usecase.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{usecase.scenario}</p>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      <TrendingUp className="w-5 h-5" />
                      {usecase.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-sm">
            READY TO GET STARTED?
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Link Strategy?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Join 100,000+ users who trust SRLinks to power their links
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
              className="px-8 py-5 rounded-2xl text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/50 bg-white text-gray-900 flex-1 font-medium"
            />
            
            <button className="px-10 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap">
              Start Free
              <Rocket className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-gray-400 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Setup in 60 seconds
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Free forever plan
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
