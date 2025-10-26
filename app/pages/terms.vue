<script setup>
const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using SRLinks ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
    
    These Terms apply to all visitors, users, and others who access or use the Service.`
  },
  {
    title: "2. Description of Service",
    content: `SRLinks provides a URL shortening service that allows users to:
    
    • Create shortened URLs from long web addresses
    • Customize short link slugs
    • Track analytics for shortened links
    • Generate QR codes for links
    • Manage and organize shortened URLs
    
    We reserve the right to modify, suspend, or discontinue the Service at any time without notice.`
  },
  {
    title: "3. User Accounts and Security",
    content: `When creating an account with us, you must:
    
    • Provide accurate, complete, and current information
    • Maintain the security of your account credentials
    • Notify us immediately of any unauthorized access
    • Be responsible for all activities under your account
    
    You are prohibited from sharing your account credentials with others.`
  },
  {
    title: "4. Acceptable Use Policy",
    content: `You agree NOT to use the Service to:
    
    • Create links to illegal, harmful, or malicious content
    • Distribute malware, viruses, or harmful code
    • Engage in phishing, scams, or fraudulent activities
    • Violate intellectual property rights
    • Harass, abuse, or harm others
    • Spam or send unsolicited messages
    • Bypass security measures or access restrictions
    • Impersonate others or misrepresent affiliation
    • Violate any applicable laws or regulations`
  },
  {
    title: "5. Intellectual Property Rights",
    content: `The Service and its original content, features, and functionality are owned by SRLinks and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
    
    Our trademarks and trade dress may not be used without prior written permission.
    
    You retain ownership of content you submit, but grant us a license to use, display, and distribute it as necessary to provide the Service.`
  },
  {
    title: "6. User-Generated Content",
    content: `You are responsible for:
    
    • All URLs and content you submit to our Service
    • Ensuring you have rights to share the content
    • Compliance with applicable laws regarding content
    • Any consequences resulting from your links
    
    We reserve the right to remove any content that violates these Terms or is otherwise objectionable.`
  },
  {
    title: "7. Analytics and Data Collection",
    content: `By using our Service, you acknowledge that:
    
    • We collect analytics data about link clicks and usage
    • This data includes location, device, browser, and referrer information
    • We use this data to provide analytics features
    • Data collection practices are governed by our Privacy Policy
    
    Users clicking your shortened links will be subject to this data collection.`
  },
  {
    title: "8. Service Availability and Reliability",
    content: `While we strive for 99.9% uptime:
    
    • We do not guarantee uninterrupted or error-free service
    • Maintenance or updates may cause temporary downtime
    • We are not liable for service interruptions
    • Links may become unavailable due to technical issues
    
    We recommend maintaining backup copies of important link information.`
  },
  {
    title: "9. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:
    
    • The Service is provided "AS IS" without warranties
    • We are not liable for any indirect, incidental, or consequential damages
    • Our total liability shall not exceed the amount paid by you (if any)
    • We do not warrant the accuracy or reliability of any information
    • You use the Service at your own risk`
  },
  {
    title: "10. Termination",
    content: `We may terminate or suspend your account and access immediately, without prior notice, for:
    
    • Violation of these Terms
    • Fraudulent or illegal activity
    • Requests by law enforcement
    • Extended periods of inactivity
    • Any other reason at our sole discretion
    
    Upon termination, your right to use the Service will immediately cease.`
  },
  {
    title: "11. Modifications to Terms",
    content: `We reserve the right to modify these Terms at any time. We will notify users of any changes by:
    
    • Posting the new Terms on this page
    • Updating the "Last Updated" date
    • Sending email notifications for material changes
    
    Your continued use of the Service after changes constitutes acceptance of the new Terms.`
  },
  {
    title: "12. Governing Law and Jurisdiction",
    content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
    
    Any disputes arising from these Terms or the Service shall be resolved in the courts of Mumbai, Maharashtra, India.`
  },
  {
    title: "13. Indemnification",
    content: `You agree to indemnify and hold harmless SRLinks, its officers, directors, employees, and agents from any:
    
    • Claims, damages, or losses arising from your use of the Service
    • Violation of these Terms
    • Violation of any rights of another person or entity
    • Content you submit through the Service`
  },
  {
    title: "14. Third-Party Links and Services",
    content: `Our Service may contain links to third-party websites or services that are not owned or controlled by SRLinks.
    
    We have no control over and assume no responsibility for:
    
    • Content of third-party websites
    • Privacy policies of third parties
    • Practices of third-party services
    
    You acknowledge and agree that we are not liable for any damage or loss caused by third-party services.`
  },
  {
    title: "15. Contact Information",
    content: `For questions about these Terms of Service, please contact us:
    
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
            <span class="text-sm font-bold text-white">TERMS OF SERVICE</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            Terms of <span class="text-yellow-300">Service</span>
          </h1>
          <p class="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Please read these terms carefully before using SRLinks. By using our service, you agree to these terms.
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
          <div class="text-5xl mb-6">📜</div>
          <h2 class="text-3xl font-black mb-6 text-slate-900 dark:text-white">
            Welcome to SRLinks
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            These Terms of Service ("Terms") govern your access to and use of SRLinks' URL shortening service, website, and related services (collectively, the "Service").
          </p>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
          </p>
        </div>
      </div>
    </section>

    <!-- Terms Sections -->
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

    <!-- Key Points -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="text-3xl font-black mb-8 text-center text-slate-900 dark:text-white">
          Key <span class="gradient-text">Points</span>
        </h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="glass-card rounded-2xl p-6 text-center feature-card-hover">
            <div class="text-5xl mb-4">✅</div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Fair Use
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Use our service responsibly and legally. No spam, malware, or illegal content
            </p>
          </div>

          <div class="glass-card rounded-2xl p-6 text-center feature-card-hover">
            <div class="text-5xl mb-4">🔒</div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Your Content
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              You own your content and are responsible for what you share
            </p>
          </div>

          <div class="glass-card rounded-2xl p-6 text-center feature-card-hover">
            <div class="text-5xl mb-4">⚖️</div>
            <h3 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
              Legal Compliance
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              We comply with applicable laws and expect the same from users
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
            Questions About Our Terms?
          </h2>
          <p class="text-xl mb-8 opacity-95">
            If you have any questions about these Terms of Service, please don't hesitate to reach out.
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
