# ⚡ Srlinks

**A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.**

![Cloudflare](https://img.shields.io/badge/Cloudflare-F69652?style=flat&logo=cloudflare&logoColor=white)
![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=flat&logo=nuxtdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white)

---

## 🌟 Overview

**Srlinks** is a modern, feature-rich URL shortener built entirely on Cloudflare's edge infrastructure. Transform long URLs into clean, memorable short links while gaining powerful analytics insights—all without managing servers.

Visit us at [**srlinks.live**](https://srlinks.live)

---

## ✨ Features

### Core Functionality
- **🔗 URL Shortening**: Convert lengthy URLs into compact, shareable links
- **📊 Advanced Analytics**: Comprehensive tracking with real-time statistics and visualizations
- **⚡ Serverless Architecture**: 100% serverless deployment on Cloudflare's global network
- **🎨 Custom Slugs**: Create branded, memorable short links with case-sensitive support
- **🤖 AI-Powered Slugs**: Automatic intelligent slug generation using AI
- **⏰ Link Expiration**: Set custom expiration dates for temporary links
- **📱 QR Code Generation**: Instant QR code creation for any short link
- **🌍 Global Performance**: Lightning-fast redirects powered by Cloudflare's edge network

### Analytics & Insights
- **Real-time Dashboard**: Live traffic monitoring and analytics
- **Geographic Tracking**: Detailed location data with interactive maps
- **Device & Browser Analytics**: Comprehensive user agent analysis
- **Referrer Tracking**: Monitor traffic sources and campaigns
- **Time-based Reports**: Customizable date ranges and time intervals
- **Export Capabilities**: Download analytics data for external analysis

### Security & Privacy
- **🔒 Token-based Authentication**: Secure dashboard access
- **🛡️ Bot Detection**: Built-in protection against automated abuse
- **🔐 Privacy-focused**: Minimal data collection, respects user privacy
- **⚖️ Compliance Ready**: GDPR-friendly analytics approach

---

## 🚀 Quick Start

### Prerequisites
- [Cloudflare Account](https://dash.cloudflare.com/sign-up) (Free tier works!)
- [Node.js](https://nodejs.org/) v18+ installed
- [Git](https://git-scm.com/) for cloning the repository

### Installation

```bash
# Clone the repository
git clone https://github.com/sirigireddyreddaiahh/srlinks.git
cd srlinks

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your local instance.

---

## 🏗️ Deployment

Srlinks supports deployment to **Cloudflare Workers** (recommended) and **Cloudflare Pages**.

### Deploy to Cloudflare Workers (Recommended)

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Configure wrangler.toml**
   ```toml
   name = "srlinks"
   compatibility_date = "2024-01-01"
   
   [vars]
   NUXT_SITE_TOKEN = "your-secure-token-here"
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Deploy to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.output/public`
3. Add environment variables in Pages dashboard
4. Deploy!

For detailed deployment instructions, see our [deployment documentation](./docs/deployment/).

---

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Required: Authentication token for dashboard access
NUXT_SITE_TOKEN=your-secret-token-here

# Optional: Custom home page URL
NUXT_HOME_URL=https://srlinks.live

# Optional: Enable case-sensitive slugs (default: false)
NUXT_CASE_SENSITIVE=false

# Optional: Redirect behavior
NUXT_REDIRECT_STATUS_CODE=302
NUXT_REDIRECT_WITH_QUERY=true

# Optional: AI configuration (if using AI slug generation)
NUXT_AI_MODEL=@cf/meta/llama-2-7b-chat-int8
NUXT_AI_PROMPT="Generate a short, memorable slug for this URL: {url}"

# Cloudflare Analytics (for advanced analytics)
NUXT_CF_ACCOUNT_ID=your-account-id
NUXT_CF_API_TOKEN=your-api-token
NUXT_CF_DATASET=your-dataset-name
```

### Slug Configuration

Customize slug patterns in `app/app.config.ts`:

```typescript
export default defineAppConfig({
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: ['dashboard', 'api', 'admin'], // Reserved slugs
  previewTTL: 300, // Preview mode link expiration (seconds)
})
```

For complete configuration options, see [Configuration Documentation](./docs/configuration.md).

---

## 📡 API Documentation

Srlinks provides a RESTful API for programmatic link management.

### Authentication

Include your site token in the Authorization header:

```bash
Authorization: Bearer your-site-token
```

### Create Short Link

```bash
POST /api/link/create
Content-Type: application/json

{
  "url": "https://example.com/very-long-url",
  "slug": "custom-slug",
  "expiration": 1735689600,
  "comment": "Campaign link"
}
```

### Get Link Analytics

```bash
GET /api/stats/counters?slug=custom-slug&startAt=1704067200&endAt=1735689600
```

### List All Links

```bash
GET /api/link/list?limit=50&cursor=optional-cursor
```

For complete API documentation, visit the [API Reference](./docs/api.md) or check the interactive docs at `https://your-domain.com/_docs`.

---

## 🧰 Integration Options

### Browser Extensions
- Install the [Srlinks Browser Extension](https://github.com/sirigireddyreddaiahh/srlinks-extension) for quick link shortening

### Mobile Shortcuts
- **iOS**: Use [Srlinks Shortcuts](https://srlinks.live/shortcuts) for Apple Shortcuts integration
- **Android**: Coming soon!

### API Clients
```javascript
// Node.js example
const response = await fetch('https://srlinks.live/api/link/create', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com',
    slug: 'my-link'
  })
});

const { shortLink } = await response.json();
console.log(shortLink); // https://srlinks.live/my-link
```

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Nuxt 3](https://nuxt.com/) - Vue.js framework |
| **Database** | [Cloudflare Workers KV](https://developers.cloudflare.com/kv/) |
| **Analytics** | [Cloudflare Analytics Engine](https://developers.cloudflare.com/analytics/) |
| **UI Library** | [shadcn-vue](https://www.shadcn-vue.com/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Deployment** | [Cloudflare Workers/Pages](https://www.cloudflare.com/) |
| **Charts** | [Unovis](https://unovis.dev/) |

---

## 📊 Dashboard Features

### Analytics Dashboard
- **Real-time Metrics**: Live visitor counts and click tracking
- **Geographic Insights**: Interactive world map showing visitor locations
- **Traffic Sources**: Detailed referrer analysis
- **Device Analytics**: Browser, OS, and device type breakdown
- **Time Series**: Customizable date ranges with hourly/daily/monthly views
- **Link Management**: Bulk operations and advanced filtering

### Link Management
- **Quick Create**: One-click link shortening with optional customization
- **Batch Operations**: Create, edit, or delete multiple links at once
- **Search & Filter**: Advanced search across all your links
- **QR Codes**: Instant QR code generation with customization
- **Sorting Options**: Sort by date, popularity, or alphabetically
- **Link Preview**: See metadata and preview before sharing

---

## 🔐 Security Best Practices

1. **Strong Tokens**: Use long, random tokens (minimum 16 characters)
   ```bash
   # Generate secure token
   openssl rand -base64 32
   ```

2. **Environment Variables**: Never commit tokens to version control
   ```bash
   # Add to .gitignore
   .env.local
   .env
   ```

3. **Regular Updates**: Keep dependencies updated
   ```bash
   npm update
   ```

4. **Bot Protection**: Enable built-in bot detection
   ```bash
   NUXT_DISABLE_BOT_ACCESS_LOG=true
   ```

---

## 🚀 Roadmap

- [x] Core URL shortening functionality
- [x] Real-time analytics dashboard
- [x] QR code generation
- [x] Custom slug support
- [x] AI-powered slug generation
- [x] Link expiration
- [x] Browser extension
- [x] Mobile shortcuts (iOS)
- [ ] Enhanced link management with Cloudflare D1
- [ ] Advanced analytics filtering
- [ ] Link password protection
- [ ] Custom domains support
- [ ] Team collaboration features
- [ ] API rate limiting
- [ ] Webhook integrations
- [ ] Android app

---

## 🙋 Frequently Asked Questions

<details>
<summary><b>How many links can I create?</b></summary>

Cloudflare Workers KV has generous limits. The free tier supports up to 100,000 reads/day and 1,000 writes/day.
</details>

<details>
<summary><b>Can I use my own domain?</b></summary>

Yes! Configure your custom domain in Cloudflare and update the `NUXT_HOME_URL` environment variable.
</details>

<details>
<summary><b>Is analytics data private?</b></summary>

Yes, Srlinks collects minimal data and doesn't use third-party trackers. All analytics are stored in your Cloudflare account.
</details>

<details>
<summary><b>How do I backup my links?</b></summary>

Use the API to export all links:
```bash
curl -H "Authorization: Bearer your-token" https://srlinks.live/api/link/list
```
</details>

<details>
<summary><b>Can I migrate from another URL shortener?</b></summary>

Yes! Use the bulk import API or create a migration script using our API documentation.
</details>

For more FAQs, visit our [documentation](./docs/faqs.md).

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone and install
git clone https://github.com/sirigireddyreddaiahh/srlinks.git
cd srlinks
npm install

# Run tests
npm run test

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 💖 Acknowledgments

- [Cloudflare](https://www.cloudflare.com/) - Infrastructure and services
- [NuxtHub](https://hub.nuxt.com/) - Nuxt deployment platform
- [shadcn-vue](https://www.shadcn-vue.com/) - Beautiful UI components
- All our [contributors](https://github.com/sirigireddyreddaiahh/srlinks/graphs/contributors)

---

## 📧 Contact & Support

- **Website**: [srlinks.live](https://srlinks.live)
- **Email**: [reddaiahsirigireddy@gmail.com](mailto:reddaiahsirigireddy@gmail.com)
- **GitHub Issues**: [Report bugs or request features](https://github.com/sirigireddyreddaiahh/srlinks/issues)
- **Telegram**: [Join our community](https://urlsclickearn.xyz/telegram)
- **Blog**: [Latest updates](https://srlinks.live/blog)

---

## ⭐ Star History

If you find Srlinks useful, please consider giving it a star on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=sirigireddyreddaiahh/srlinks&type=Date)](https://star-history.com/#sirigireddyreddaiahh/srlinks&Date)

---

<div align="center">

**Built with ❤️ using Cloudflare Workers**

[Website](https://srlinks.live) • [Documentation](./docs) • [API](./docs/api.md) • [GitHub](https://github.com/sirigireddyreddaiahh/srlinks)

</div>
