<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  // In production, send email via API
  console.log('Form submitted:', formData.value)
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    formData.value = { name: '', email: '', subject: '', message: '' }
  }, 3000)
}

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    value: "reddaiahsirigireddy@gmail.com",
    link: "mailto:reddaiahsirigireddy@gmail.com",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "💻",
    title: "GitHub",
    description: "Check out our code and contribute",
    value: "Visit our repository",
    link: "https://sirigireddyreddaiahh.github.io/",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: "📝",
    title: "Blog",
    description: "Read our latest updates and tutorials",
    value: "Read our blog",
    link: "https://srlinks.live/blog",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: "🌍",
    title: "Location",
    description: "Based in India, serving globally",
    value: "Mumbai, Maharashtra, IN",
    link: null,
    color: "from-green-500 to-emerald-500"
  }
]

const faqs = [
  {
    question: "How do I get started?",
    answer: "Simply visit our dashboard and start creating short links immediately. No signup required for basic features!"
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use enterprise-grade encryption and follow best security practices to protect your data."
  },
  {
    question: "Can I use custom domains?",
    answer: "Yes! Premium users can use their own custom domains for branded short links."
  },
  {
    question: "What analytics do you provide?",
    answer: "We provide comprehensive analytics including clicks, locations, devices, browsers, and referrers in real-time."
  }
]
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24 hero-gradient">
      <div class="container relative z-10 mx-auto px-4">
        <div class="text-center animate-fade-in">
          <div class="inline-block mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span class="text-sm font-bold text-white">CONTACT US</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
            Get in <span class="text-yellow-300">Touch</span>
          </h1>
          <p class="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <component
            :is="method.link ? 'a' : 'div'"
            v-for="(method, idx) in contactMethods"
            :key="idx"
            :href="method.link"
            :target="method.link ? '_blank' : undefined"
            :rel="method.link ? 'noopener noreferrer' : undefined"
            :class="`glass-card rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${method.link ? 'cursor-pointer feature-card-hover' : ''}`"
          >
            <div class="text-6xl mb-6">{{ method.icon }}</div>
            <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white">
              {{ method.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {{ method.description }}
            </p>
            <p class="text-orange-500 dark:text-orange-400 font-semibold">
              {{ method.value }}
            </p>
          </component>
        </div>
      </div>
    </section>

    <!-- Contact Form & FAQs -->
    <section class="py-16 bg-slate-50 dark:bg-slate-950">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div class="glass-card rounded-3xl p-8 md:p-12">
            <h2 class="text-3xl font-black mb-6 text-slate-900 dark:text-white">
              Send us a Message
            </h2>
            
            <div
              v-if="submitted"
              class="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500/50 rounded-xl text-green-700 dark:text-green-400"
            >
              Thank you! Your message has been sent successfully.
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-xl btn-gradient-primary"
              >
                <span>✉️</span>
                Send Message
              </button>
            </form>
          </div>

          <!-- FAQs -->
          <div>
            <h2 class="text-3xl font-black mb-8 text-slate-900 dark:text-white">
              Frequently Asked <span class="gradient-text">Questions</span>
            </h2>

            <div class="space-y-4">
              <div
                v-for="(faq, idx) in faqs"
                :key="idx"
                class="glass-card rounded-2xl p-6 feature-card-hover"
              >
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {{ faq.question }}
                </h3>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {{ faq.answer }}
                </p>
              </div>
            </div>

            <div class="mt-8 hero-gradient rounded-2xl p-8 text-white shadow-xl">
              <div class="text-5xl mb-4">⏰</div>
              <h3 class="text-2xl font-bold mb-3">Response Time</h3>
              <p class="opacity-95 leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please email us directly at reddaiahsirigireddy@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Links -->
    <section class="py-16 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-black mb-8 text-slate-900 dark:text-white">
          Connect with Us
        </h2>
        <div class="flex justify-center gap-6">
          <a
            href="mailto:reddaiahsirigireddy@gmail.com"
            class="w-16 h-16 rounded-full btn-gradient-primary flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl text-2xl"
            aria-label="Email"
          >
            📧
          </a>
          <a
            href="https://github.com/sirigireddyreddaiahh"
            target="_blank"
            rel="noopener noreferrer"
            class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl text-2xl"
            aria-label="GitHub"
          >
            💻
          </a>
          <a
            href="https://srlinks.live/blog"
            target="_blank"
            rel="noopener noreferrer"
            class="w-16 h-16 rounded-full btn-gradient-secondary flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl text-2xl"
            aria-label="Blog"
          >
            📝
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
