# Tykoon Floor Care Website Instructions

## Overview
This repository contains a complete static website for Tykoon Floor Care, a professional hardwood floor refinishing, carpet cleaning, and upholstery care service serving Los Angeles and surrounding areas. The site includes all 27 location pages across 7 regions, service descriptions, blog, about, contact, and legal pages. It's built with HTML, Tailwind CSS, and optimized for SEO.

## Deployment Options

### Local Development
**Prerequisites:**
- Node.js (optional, for local server)
- Web browser

**Running the Site:**
1. Open terminal in this directory (c:/Users/crawf/Local Sites/Tykoon_Floor_Care-GITPAGE)
2. Run: `python -m http.server 3000` or use VS Code's Live Server extension
3. Navigate to http://localhost:3000/tykoon-floor-furniture-care-2025-10-07-f3y6z/
4. The site is fully navigable, including all location pages

**Site Structure:**
```
tykoon-floor-furniture-care-2025-10-07-f3y6z/
├── index.html          # Home page with hero and service grid
├── about.html          # Company information
├── services.html       # Services overview
├── contact.html        # Contact form and details
├── blog.html           # Blog listing
├── blog/               # Individual blog posts
│   └── the-complete-guide-to-hardwood-floor-maintenance.html
└── locations/          # 27 location pages across 7 regions
    ├── central/        # 4 pages (complete)
    ├── westside/       # 6 pages (complete)
    ├── eastside/       # 5 pages (complete)
    ├── harbor-south-bay/ # 3 pages (complete)
    ├── san-fernando-valley/ # 5 pages (complete)
    ├── san-gabriel-valley/ # 4 pages (complete)
    └── south-la/       # 4 pages (complete)
└── images/             # All assets (heroes, logos, service images)
```

### Production Deployment

#### GitHub Pages (Recommended for quick static hosting)
1. Commit all files to your repository
2. Create CNAME record with your custom domain (e.g., www.tykoontool.com)
3. In GitHub repo settings, enable GitHub Pages for main branch
4. Site URL: https://username.github.io/tykoon-floor-care

#### Netlify (Free, easy deployment)
1. Drag and drop the entire folder to Netlify dashboard
2. Site deploys to https://amazing-site-name.netlify.app
3. Connect custom domain in domain settings

#### Vercel (Free, git-based deployment)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy
4. Site available at https://project-name.vercel.app

#### AWS S3 Static Hosting
1. Create S3 bucket with static website hosting enabled
2. Upload all files to bucket root
3. Set index document to index.html
4. Configure CloudFront for custom domain (optional)

## WordPress Theme Conversion (Optional)
If you want to use this design as a WordPress block theme:
1. Copy HTML content to PHP files (index.php, page.php, single.php)
2. Create theme.json for block theme configuration
3. Replace static navigation with wp_nav_menu()
4. Move images to wp-content/uploads/
5. Convert sections to Gutenberg blocks or use Advanced Custom Fields
6. Enqueue styles in functions.php
7. Use WordPress hooks for dynamic content (get_the_title(), the_content())
8. Add theme support for title-tag, post-thumbnails, custom-logo

## Editing and Customization
- **Colors**: Modify Tailwind config or CSS variables
- **Content**: Edit HTML directly or use find/replace for global changes
- **Images**: Replace in /images/ folder; add alt text for SEO
- **Navigation**: Update href attributes for new pages
- **SEO**: Each page has meta description; customize for each location
- **Responsive**: Site is mobile-first with Tailwind breakpoints

## Features
- **27 Location Pages**: All Los Angeles neighborhoods covered with unique content
- **Responsive Design**: Works on mobile, tablet, desktop
- **Fast Loading**: Optimized images and minimal JS
- **SEO Optimized**: Unique titles and descriptions per page
- **Accessibility**: Proper heading structure, alt tags, color contrast
- **Navigation**: Dropdown menus for regions with relative links

## Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Tested on Windows, macOS browsers
- No JavaScript dependencies except Tailwind CDN

The site is production-ready and includes all specified pages for Tykoon Floor Care's Los Angeles service areas.
