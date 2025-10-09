const fs = require('fs');
const path = require('path');

function fixFooterLinks(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix empty footer quick links
    content = content.replace(
      /<h4 class="text-lg font-semibold text-white mb-4">Quick Links<\/h4>\s*<ul class="space-y-2">\s*<li><\/li>\s*<li><\/li>\s*<li><\/li>\s*<\/ul>/g,
      '<h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>\n                    <ul class="space-y-2">\n                        <li><a href="../../../services.html" class="hover:text-white transition-colors duration-300">Services</a></li>\n                        <li><a href="../../../about.html" class="hover:text-white transition-colors duration-300">About</a></li>\n                        <li><a href="../../../blog.html" class="hover:text-white transition-colors duration-300">Blog</a></li>\n                    </ul>'
    );

    // Fix any other footer structure issues
    content = content.replace(
      /<p>&copy; 2025 Tykoon\./g,
      '<p>&copy; 2025 Tykoon Floor & Furniture Care.'
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed footer links: ${filePath}`);
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

  walk(locationsDir, fixFooterLinks);
}
