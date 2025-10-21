<script setup lang="ts">
const { t } = useI18n()
const isLoading = ref(false)
const error = ref('')
const siteToken = ref('')

// Navigate to server-side OAuth login endpoint
const { previewMode } = useRuntimeConfig().public

async function onSubmit(form) {
  try {
    localStorage.setItem('SinkSiteToken', form.token)
    await useAPI('/api/verify')
    navigateTo('/dashboard')
  }
  catch (e) {
    console.error(e)
    toast.error(t('login.failed'), {
      description: e.message,
    })
  }
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h2 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
        Login
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">
        Enter your site token to login
      </p>

      <div v-if="error" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
        <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
      </div>

      <!-- Site Token Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-900 dark:text-gray-300 mb-2">
          Site Token <span class="text-red-500">*</span>
        </label>
        <input
          v-model="siteToken"
          type="password"
          placeholder="********"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
        />
      </div>

      <!-- Tips Box -->
      <div class="mb-6 p-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-md">
        <div class="flex items-start gap-2">
          <svg class="w-4 h-4 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          <div>
            <p class="text-xs font-medium text-gray-900 dark:text-gray-200 mb-1">Tips</p>
            <p class="text-xs text-gray-700 dark:text-gray-300">
              The site token for preview mode is
            </p>
            <p class="text-xs font-mono text-green-600 dark:text-green-400 mt-0.5">
              Srlinks@29
            </p>
          </div>
        </div>
      </div>

      <!-- Login Button -->
      <button
        @click="handleLogin"
        :disabled="isLoading"
        class="w-full px-4 py-2.5 bg-black dark:bg-gray-900 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        <span v-if="!isLoading">Login</span>
        <div v-else class="flex items-center justify-center">
          <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      </button>
    </div>
  </div>
</template>
