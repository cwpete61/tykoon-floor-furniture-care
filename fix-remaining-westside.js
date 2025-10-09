const fs = require('fs');
const path = require('path');

// List of westside pages that still need fixing
const westsidePages = [
  'westwood/index.html',
  'pacific-palisades/index.html',
  'marina-del-rey/index.html'
];

westsidePages.forEach(relativePath => {
  const fullPath = path.join('locations/westside', relativePath);
  if (fs.existsSync(fullPath)) {
    console.log(`Found: ${fullPath}`);
    try {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Remove any nav/header sections
      content = content.replace(/<header[\s\S]*?<\/header>/g, '');
      content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/g, '');

      // Add main tag if missing
      if (!content.includes('<main>') && content.includes('<body class="font-')) {
        content = content.replace(/(<body class="[^"]+")>/, '$1>\n    <main>');
      }

      // Fix hero section structure if missing containers
      if (content.includes('<section class="relative h-[400px]') &&
          !content.includes('<div class="absolute inset-0 bg-black/80">')) {
        content = content.replace(
          /(<section class="relative h-\[400px\] flex items-center justify-center[^>]*>)/,
          '$1\n            <div class="absolute inset-0 bg-black/80"></div>\n            <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">\n                <div class="max-w-4xl mx-auto text-center">'
        );

        // Add closing div for hero title/p container and hero containers
        content = content.replace(
          /(<\/p>\s*\n\s*)(\s*\n\s*<\/section>)/,
          '$1\n                </div>\n            </div>\n        $2'
        );
      }

      // Fix content section
      if (content.includes('<section class="py-24 bg-black">') &&
          !content.includes('<div class="max-w-4xl mx-auto space-y-12">')) {
        content = content.replace(
          /(<section class="py-24 bg-black">)/,
          '$1\n            <div class="container mx-auto px-4 sm:px-6 lg:px-8">\n                <div class="max-w-4xl mx-auto space-y-12">'
        );

        // Add grid layout for service cards if they exist but no grid wrapper
        if (content.includes('<div class="bg-gray-900 rounded-xl') &&
            !content.includes('<div class="grid grid-cols-1 md:grid-cols-2 gap-8">')) {
          const serviceCardStart = content.indexOf('<div class="bg-gray-900 rounded-xl');
          const gridInsertPoint = content.lastIndexOf('<div class="max-w-4xl mx-auto space-y-12">') + '<div class="max-w-4xl mx-auto space-y-12">'.length;
          if (gridInsertPoint > 0) {
            const toInsert = '\n\n                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">';
            content = content.slice(0, gridInsertPoint) + toInsert + content.slice(gridInsertPoint);
          }
        }

        // Close content section
        content = content.replace(
          /(<\/div>\s*\n\s*)(\s*\n\s*)<\/section>/,
          '$1\n                </div>\n            </div>\n        </section>'
        );
      }

      // Fix footer structure
      if (content.includes('<footer class="bg-gray-900 text-gray-300 py-12">') &&
          !content.includes('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">')) {
        content = content.replace(
          /(<footer class="bg-gray-900[^"]*">)/,
          '$1\n        <div class="container mx-auto px-4 sm:px-6 lg:px-8">\n            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">'
        );

        // Add quick links section
        if (!content.includes('Quick Links')) {
          const quickLinksInsert = `
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="../../../services.html" class="hover:text-white transition-colors duration-300">Services</a></li>
                        <li><a href="../../../about.html" class="hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="../../../blog.html" class="hover:text-white transition-colors duration-300">Blog</a></li>
                    </ul>
                </div>`;
          const closingDivIndex = content.lastIndexOf('</div>\n        </div>\n    <footer>');
          if (closingDivIndex > 0) {
            content = content.slice(0, closingDivIndex) + quickLinksInsert + content.slice(closingDivIndex);
          }
        }

        // Close footer
        content = content.replace(
          /(<\/footer>)/,
          '            </div>\n        </div>\n    </footer>'
        );
      }

      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${fullPath}`);
    } catch (err) {
      console.error(`Error fixing ${fullPath}:`, err.message);
    }
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});
