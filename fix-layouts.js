const fs = require('fs');
const path = require('path');

function fixLocationPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix common layout issues
    // Add main tag if missing
    if (!content.includes('<main>') && content.includes('<body class="font-')) {
      content = content.replace(/(<body class="[^"]+")>/, '$1>\n    <main>');
    }

    // Fix hero section - add missing opening divs
    if (content.includes('<section class="relative h-[400px]') &&
        !content.includes('<div class="absolute inset-0 bg-black/80">')) {
      content = content.replace(
        /(<section class="relative h-\[400px\] flex items-center justify-center pt-16"[^>]*>)/,
        '$1\n            <div class="absolute inset-0 bg-black/80"></div>\n            <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">'
      );
    }

    // Add container divs for content sections
    if (content.includes('<section class="py-24 bg-black">') &&
        !content.includes('<div class="max-w-4xl mx-auto space-y-12">')) {
      content = content.replace(
        /(<section class="py-24 bg-black">)/,
        '$1\n            <div class="container mx-auto px-4 sm:px-6 lg:px-8">\n                <div class="max-w-4xl mx-auto space-y-12">'
      );
    }

    // Close sections and main properly
    content = content.replace(
      /(<\/section>\n    )(footer)/,
      '$1</main>\n    <$2'
    );

    // Fix footer structure
    if (content.includes('<footer class="bg-gray-900') &&
        !content.includes('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">')) {
      content = content.replace(
        /(<footer class="bg-gray-900[^"]*">)/,
        '$1\n        <div class="container mx-auto px-4 sm:px-6 lg:px-8">\n            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">'
      );
    }

    // Close footer properly
    content = content.replace(
      /(<\/footer>)/,
      '            </div>\n        </div>\n    </footer>'
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (err) {
    console.error(`Error fixing ${filePath}:`, err.message);
  }
}

// Get all location HTML files
const locationsDir = 'locations';
if (fs.existsSync(locationsDir)) {
  function walk(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, callback);
      } else if (file.endsWith('.html')) {
        callback(fullPath);
      }
    });
  }

  walk(locationsDir, function(filePath) {
    fixLocationPage(filePath);
  });
}
