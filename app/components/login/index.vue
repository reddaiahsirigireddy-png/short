<script setup>
import { AlertCircle } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const { t } = useI18n()

// Add SEO and canonical
useSeoMeta({
  title: 'Login - Srlinks Dashboard',
  description: 'Login to your Srlinks dashboard to manage your short links',
  robots: 'noindex, nofollow', // Don't index login page
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://srlinks.live/dashboard/login'
    }
  ]
})

const LoginSchema = z.object({
  token: z.string().describe('SiteToken'),
})

const loginFieldConfig = {
  token: {
    inputProps: {
      type: 'password',
      placeholder: '********',
    },
  },
}

const { previewMode } = useRuntimeConfig().public

async function onSubmit(form) {
  try {
    localStorage.setItem('SinkSiteToken', form.token)
    await useAPI('/api/verify')
    navigateTo('/dashboard')
  } catch (e) {
    console.error(e)
    toast.error(t('login.failed'), {
      description: e.message,
    })
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <Card class="w-full max-w-md border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle class="text-2xl font-semibold text-gray-900 dark:text-white">
          {{ $t('login.title') || 'Login' }}
        </CardTitle>
        <CardDescription class="text-gray-500 dark:text-gray-400">
          {{ $t('login.description') || 'Enter your site token to login' }}
        </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-5">
        <AutoForm
          class="space-y-6"
          :schema="LoginSchema"
          :field-config="loginFieldConfig"
          @submit="onSubmit"
        >
          <!-- Tips Section -->
          <Alert class="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 rounded-md">
            <div class="flex items-start gap-2">
              <AlertCircle class="w-4 h-4 text-gray-700 dark:text-gray-300 mt-0.5" />
              <div>
                <AlertTitle class="text-sm font-medium text-gray-900 dark:text-gray-100">Tips</AlertTitle>
                <AlertDescription class="text-sm text-gray-600 dark:text-gray-300">
                  The site token for preview mode is
                  <code class="font-mono text-green-600 dark:text-green-400">Srlinks@29</code>.
                </AlertDescription>
              </div>
            </div>
          </Alert>

          <!-- Login Button -->
          <Button
            class="w-full px-4 py-2.5 bg-black dark:bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            {{ $t('login.submit') || 'Login' }}
          </Button>
        </AutoForm>
      </CardContent>
    </Card>
  </div>
</template>
