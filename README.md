# Henk Roor Static Website

This is a static version of [henkroor.nl](https://www.henkroor.nl/), converted from WordPress and built with **Astro** SSG framework, deployed to GitHub Pages.

> **Note:** This site is based on the original henkroor.nl WordPress site. Always validate design and layout changes against the original site to maintain consistency.

## 🏗️ Built With

- **SSG:** [Astro](https://astro.build/) v5.15.5
- **CMS:** [Drikus CMS](https://github.com/studioroor/drikus-cms)
- **Runtime:** [Bun](https://bun.sh/) v1.3.0
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions (automated)

## 📁 Project Structure

```
├── .drikus/config.yml        # What Drikus CMS lets editors change (fields, labels, media folder)
├── src/
│   ├── content.config.ts     # Astro content collections (keep in sync with .drikus/config.yml)
│   ├── content/
│   │   ├── home.md           # Homepage
│   │   └── pages/*.md        # Menu pages; `order` sets their place in the menu
│   ├── data/settings.json    # Contact details and sidebar (logo, photo, map)
│   ├── layouts/BaseLayout.astro
│   ├── lib/                  # Base-path helpers and the rehype plugin for CMS content
│   └── pages/                # index.astro (home) and [slug].astro (all other pages)
├── public/
│   ├── uploads/              # Images, uploaded through the CMS
│   └── wp-content/, wp-includes/  # Original WordPress theme CSS, fonts and favicon
└── astro.config.mjs
```

## 🚀 Development

### Prerequisites

- [Bun](https://bun.sh/) installed

### Install Dependencies

```bash
bun install
```

### Development Server

```bash
bun start
# or
bun dev
```

This starts Astro's dev server with hot reload at `http://localhost:4321`

### Build for Production

```bash
bun run build
```

Generates the static site in the `_site` directory and optimizes CSS.

### Preview Production Build

```bash
bun run preview
```

Previews the production build locally.

### Clean Build

```bash
bun run clean
```

Removes the `_site` directory.

## 📄 Site Pages

- **Homepage** (`/`) - Main landing page
- **Over Ons** (`/over-ons/`) - About us page
- **Financiële Administratie** (`/financiele-administratie/`) - Financial administration services
- **Salarisadministratie** (`/salarisadministratie/`) - Payroll administration services
- **Netwerken** (`/netwerken/`) - Networks page
- **Startende Ondernemers** (`/startende-ondernemers/`) - Starting entrepreneurs page

## 🎨 Features

- ✅ **Content Management System** with Drikus CMS for easy editing, including image uploads
- ✅ **Astro-powered** with component-based architecture
- ✅ **Type-safe content collections** for structured content
- ✅ **Proper path handling** for GitHub Pages deployment
- ✅ **Active navigation state** highlighting
- ✅ **Responsive design** from original WordPress theme
- ✅ **Two-column layout** with sidebar (2/3 content, 1/3 sidebar on desktop)
- ✅ **Mobile-responsive** stacking layout for small screens
- ✅ **SEO-friendly** meta tags and structure with automatic sitemap
- ✅ **Lightning-fast builds** with Astro and Bun
- ✅ **Automated deployment** via GitHub Actions

## 🌐 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL:** <https://studioroor.github.io/henk-roor-static/>

### GitHub Actions Workflow

The deployment workflow:

1. Checks out the repository
2. Sets up Bun
3. Installs dependencies
4. Builds the site with Astro
5. Optimizes CSS with PostCSS
6. Deploys to GitHub Pages

## 📝 Original Site

The original WordPress site was located at <https://www.henkroor.nl/>

## 🔧 Configuration

### Path Prefix

The site is configured with a base path for GitHub Pages in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://studioroor.github.io',
  base: '/henk-roor-static',
  // ...
});
```

This ensures all links work correctly when deployed to GitHub Pages.

### Content and images

Content paths in Markdown and `settings.json` are written without the base path (`/uploads/foto.webp`,
`/over-ons/`). `src/lib/urls.ts` (`withBase`) and `src/lib/rehype-site-urls.mjs` add `/henk-roor-static`
when the site is built, so content keeps working if the site moves to its own domain: then only
`base` in `astro.config.mjs` changes.

An image style picked in the CMS is stored after `#` in the path (`foto.webp#right`) and becomes the
class `align-right` (also `align-left`, `align-wide`), styled in `BaseLayout.astro`.

## 📦 Assets

All WordPress assets (CSS, JavaScript, images, fonts) are preserved in the `public/` directory:

- `public/wp-content/` - Theme and plugin assets
- `public/wp-includes/` - WordPress core assets
- `public/uploads/` - Images managed through the CMS

These are served as-is from the public directory.

## 🛠️ Maintenance

### Content Management with Drikus CMS

Henk edits the site in [Drikus CMS](https://github.com/studioroor/drikus-cms), which commits to `main`
through the Studio Roor CMS GitHub App; GitHub Actions then deploys as usual. What can be edited is
described in [`.drikus/config.yml`](.drikus/config.yml). Changing a field means updating that file,
`src/content.config.ts` and the template that shows it.

### Manual Content Updates

To update content manually:

1. Edit the markdown files in `src/content/` or `src/data/settings.json`
2. Run `bun run build` to verify changes locally
3. Commit and push to `main` branch
4. GitHub Actions will automatically rebuild and deploy

To update page structure or layouts:

1. Edit Astro components in `src/pages/` or `src/layouts/`
2. Astro's component syntax is similar to JSX with frontmatter
3. All pages using the base layout will be updated on next build

To update styles:

1. Edit CSS files in `public/wp-content/themes/wp-advocate-child/css/`
2. `custom-layout.css` contains custom flexbox layout overrides
3. Always test against the original henkroor.nl site for consistency

### Workflow Best Practices

When making changes to this site:
1. **Validate** against the original site (henkroor.nl)
2. **Build** locally with `bun run build`
3. **Test** the changes in `_site/`
4. **Commit** with descriptive messages
5. **Deploy** automatically via push to main
6. **Update** this README if adding new features or changing structure

## 📊 Benefits Over WordPress

- 🚀 **Faster load times** - No database queries, pure static HTML
- 🔒 **Better security** - No server-side code execution
- 💰 **Lower costs** - Free hosting on GitHub Pages
- 📝 **Modern CMS** - Drikus CMS for user-friendly content management
- 🔄 **Version control** - All changes tracked in Git
- � **Easier maintenance** - Component-based architecture
- ⚡ **Quick builds** - Astro + Bun for fast development

## 📅 Conversion Date

October 25, 2025

## 📄 License

This project maintains the content from the original henkroor.nl website.
