<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const { t } = useI18n()
const { previewMode } = useRuntimeConfig().public

const LoginSchema = z.object({
  token: z.string().min(1, 'Token is required').describe('SiteToken'),
})

const loginFieldConfig = {
  token: {
    inputProps: {
      type: 'password',
      placeholder: '********',
    },
  },
}

async function onSubmit(form: { token: string }) {
  try {
    localStorage.setItem('SinkSiteToken', form.token)
    await useAPI('/api/verify')  // make sure this endpoint exists
    navigateTo('/dashboard')     // change if your backend route differs
  } catch (e: any) {
    console.error(e)
    toast.error(t('login.failed'), {
      description: e.message || 'Invalid token. Please try again.',
    })
  }
}
</script>

<template>
  <Card class="w-full max-w-sm mx-auto mt-12">
    <CardHeader>
      <CardTitle class="text-2xl font-semibold">
        {{ t('login.title') }}
      </CardTitle>
      <CardDescription>
        {{ t('login.description') }}
      </CardDescription>
    </CardHeader>

    <CardContent class="grid gap-4">
      <AutoForm
        class="space-y-6"
        :schema="LoginSchema"
        :field-config="loginFieldConfig"
        @submit="onSubmit"
      >
        <Alert v-if="previewMode">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>{{ t('login.tips') }}</AlertTitle>
          <AlertDescription>
            {{ t('login.preview_token') }}
            <code class="font-mono text-green-500">Srlinks@29</code>
          </AlertDescription>
        </Alert>

        <Button class="w-full" type="submit">
          {{ t('login.submit') }}
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
