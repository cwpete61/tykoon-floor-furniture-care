# Tykoon Landing Page Maintenance Guide

This guide provides detailed instructions for maintaining and customizing the Tykoon Floor & Furniture Care landing page. Whether you're new to web development or need a quick reference, follow these step-by-step instructions.

## Table of Contents
1. [Updating Text and Styling](#updating-text-and-styling)
2. [Managing Links](#managing-links)
3. [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
4. [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains the company name and navigation menu. To modify:

```html
<!-- Located at the top of the page -->
<a href="/" class="text-2xl font-bold text-blue-900">Tykoon</a>
```

To change the company name:
1. Locate this line in the header section
2. Replace "Tykoon" with your desired text
3. Adjust font size by modifying `text-2xl` to `text-xl` (smaller) or `text-3xl` (larger)

### Hero Section
The main headline and subtitle are in the hero section:

```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
    Tykoon Floor & Furniture Care
</h1>
<p class="text-xl md:text-2xl text-gray-600 mb-12">
    The Masters of 1-Day Refinishing & Upholstery Revival
</p>
```

To modify:
1. Change text between the `<h1>` tags for the main headline
2. Update text between the `<p>` tags for the subtitle
3. The responsive text sizes (`md:text-5xl lg:text-6xl`) ensure proper display on different devices

### Feature Cards
Each feature card follows this structure:

```html
<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <!-- Icon container -->
    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <!-- SVG icon here -->
    </div>
    <h3 class="text-xl font-semibold mb-4 text-blue-900">Professional</h3>
    <p class="text-gray-600 leading-relaxed">Expert craftsmen with years of experience...</p>
</div>
```

To modify feature cards:
1. Locate the feature section (identified by `id="features"`)
2. Change the title text between `<h3>` tags
3. Update description text between `<p>` tags
4. Maintain the existing classes to preserve styling

## Managing Links

### Navigation Menu Links
The navigation menu contains internal page links:

```html
<div class="hidden md:flex space-x-8">
    <a href="#services" class="text-gray-600 hover:text-blue-900 transition-colors duration-300">Services</a>
    <a href="#features" class="text-gray-600 hover:text-blue-900 transition-colors duration-300">Features</a>
    <!-- Additional links -->
</div>
```

To update links:
1. Locate the `href` attribute in each `<a>` tag
2. For internal links (same page sections), use `#section-id`
3. For external links, use the full URL (e.g., `https://example.com`)
4. Ensure section IDs match the href values (e.g., `href="#services"` links to `id="services"`)

### Call-to-Action Links
Update the main CTA buttons:

```html
<a href="https://tykoonfloorcare.com" class="inline-block bg-blue-900 text-white px-8 py-4 rounded-full">
    Transform Your Space Today
</a>
```

To modify:
1. Change the `href` attribute to your desired URL
2. Update the button text between the `<a>` tags
3. Maintain the existing classes for consistent styling

## Adding Privacy and Terms Pages

### Footer Link Setup
Locate the legal links section in the footer:

```html
<div>
    <h4 class="text-lg font-semibold text-white mb-4">Legal</h4>
    <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
    </ul>
</div>
```

To add privacy and terms pages:
1. Create `privacy.html` and `terms.html` in your project directory
2. Update the href attributes:
```html
<li><a href="privacy.html" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
<li><a href="terms.html" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
```

## Troubleshooting

Common issues and solutions:

1. **Broken Internal Links**
   - Ensure section IDs match exactly with href values
   - IDs are case-sensitive
   - Example: `href="#Features"` won't link to `id="features"`

2. **Responsive Design Issues**
   - Don't remove `md:` or `lg:` prefixes from classes
   - These ensure proper display on different screen sizes
   - Example: `md:text-5xl` means text will be larger on medium screens

3. **Styling Problems**
   - Keep the `transition-colors duration-300` classes for smooth hover effects
   - Maintain the existing color classes (e.g., `text-blue-900`) for consistency
   - Don't remove `hover:` classes as they provide interactive feedback

Remember to test all changes across different screen sizes using your browser's developer tools (F12 or right-click > Inspect).