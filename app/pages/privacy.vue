<script setup>
const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information that you provide directly to us when using SRLinks:
    
    • Link Data: URLs you shorten, custom slugs, and link metadata
    • Analytics Data: Click counts, geographic locations, device types, browsers, and referrer information
    • Account Information: Email address and authentication tokens (if you create an account)
    • Usage Data: How you interact with our platform, features used, and preferences`
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:
    
    • Provide, maintain, and improve our link shortening services
    • Generate analytics and insights about your shortened links
    • Send you technical notices, updates, and support messages
    • Respond to your comments, questions, and customer service requests
    • Monitor and analyze trends, usage, and activities in connection with our services
    • Detect, prevent, and address technical issues and fraudulent activity`
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
    
    • With your consent or at your direction
    • With service providers who perform services on our behalf
    • To comply with legal obligations or respond to lawful requests
    • To protect the rights, property, and safety of SRLinks, our users, and the public
    • In connection with a merger, acquisition, or sale of assets`
  },
  {
    title: "4. Data Security",
    content: `We take reasonable measures to help protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use:
    
    • Industry-standard encryption (HTTPS/TLS) for data transmission
    • Secure storage on Cloudflare's infrastructure
    • Regular security audits and monitoring
    • Access controls and authentication mechanisms
    
    However, no internet transmission is ever completely secure, and we cannot guarantee absolute security.`
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: `We use cookies and similar tracking technologies to:
    
    • Remember your preferences and settings
    • Analyze traffic and usage patterns
    • Provide analytics for shortened links
    • Improve user experience and platform performance
    
    You can control cookies through your browser settings, but disabling cookies may affect functionality.`
  },
  {
    title: "6. Third-Party Services",
    content: `Our service integrates with third-party services including:
    
    • Cloudflare: For infrastructure, security, and performance
    • Analytics providers: For usage statistics and insights
    • Google AdSense: For displaying advertisements
    
    These services have their own privacy policies governing the use of your information.`
  },
  {
    title: "7. Your Rights and Choices",
    content: `You have the right to:
    
    • Access, update, or delete your personal information
    • Opt-out of marketing communications
    • Request data portability
    • Object to processing of your personal information
    • Lodge a complaint with a supervisory authority
    
    To exercise these rights, please contact us at reddaiahsirigireddy@gmail.com`
  },
  {
    title: "8. Data Retention",
    content: `We retain your information for as long as necessary to:
    
    • Provide our services and maintain your shortened links
    • Comply with legal obligations
    • Resolve disputes and enforce our agreements
    • Generate analytics and improve our services
    
    You may request deletion of your data at any time by contacting us.`
  },
  {
    title: "9. Children's Privacy",
    content: `SRLinks is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information as soon as possible.`
  },
  {
    title: "10. International Data Transfers",
    content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws different from those of your country. We ensure appropriate safeguards are in place to protect your information.`
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of SRLinks after any changes indicates your acceptance of the updated Privacy Policy.`
  },
  {
    title: "12. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us:
    
    • Email: reddaiahsirigireddy@gmail.com
    • Website: https://srlinks.live/contact
    • Location: Mumbai, Maharashtra, India`
  }
]

const lastUpdated = "October 26, 2025"
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24 hero-gradient">
      <div class="container relative z-10 mx-auto px-4">
        <div class="text-center animate-fade-in">
          <div class="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span class="text-sm font-bold text-white">PRIVACY POLICY</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            Your Privacy <span class="text-yellow-300">Matters</span>
          </h1>
          <p class="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            We are committed to protecting your privacy and being transparent about how we collect, use, and share your information.
          </p>
          <p class="text-sm text-white/80 mt-4">
            Last Updated: {{ lastUpdated }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="glass-card rounded-3xl p-8 md:p-12">
          <div class="text-5xl mb-6">🔒</div>
          <h2 class="text-3xl font-black mb-6 text-slate-900 dark:text-white">
            Introduction
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Welcome to SRLinks ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our URL shortening service at srlinks.live (the "Service").
          </p>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Please read this Privacy Policy carefully. By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
          </p>
        </div>
      </div>
    </section>

    <!-- Policy Sections -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="space-y-6">
          <div
            v-for="(section, idx) in sections"
            :key="idx"
            class="glass-card rounded-2xl p-8 feature-card-hover"
          >
            <h3 class="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {{ section.title }}
            </h3>
            <div class="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
              {{ section.content }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Highlights -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl font-black mb-8 text-center text-slate-900 dark:text-white">
          Key Privacy <span class="gradient-text">Highlights</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="glass-card rounded-2xl p-6 text-center feature-card-hover">
            <div class="text-5xl mb-4">🔐</div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Secure Storage
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Your data is encrypted and stored securely on Cloudflare's infrastructure
            </p>
          </div>

          <div class="glass-card rounded-2xl p-6 text-center feature-card-hover">
            <div class="text-5xl mb-4">🚫</div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              No Selling Data
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              We never sell, trade, or rent your personal information to third parties
            </p>
          </div>

          <div class="glass-card rounded-2xl p-6 text-center feature-card-hover">
            <div class="text-5xl mb-4">✅</div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              You're in Control
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Access, update, or delete your information anytime you want
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="hero-gradient rounded-3xl p-12 text-white text-center shadow-2xl max-w-4xl mx-auto">
          <h2 class="text-4xl font-black mb-6 drop-shadow-lg">
            Questions About Privacy?
          </h2>
          <p class="text-xl mb-8 opacity-95">
            If you have any questions or concerns about our privacy practices, we're here to help.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-12 py-5 text-xl font-bold bg-white text-orange-600 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            Contact Us
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
