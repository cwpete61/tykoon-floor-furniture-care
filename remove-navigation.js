const fs = require('fs');
const path = require('path');

// Function to remove navigation from HTML files - FINAL PASS
function removeNavigationFinal(dirPath) {
  const files = fs.readdirSync(dirPath, { recursive: true });

  for (let file of files) {
    if (file.endsWith('.html') && file !== 'index.html') {
      const filePath = path.join(dirPath, file);

      try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Remove any remaining header navigation blocks
        content = content.replace(/<header[\s\S]*?<\/header>/g, '');
        content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/g, '');

        // Clean up loose navigation elements in body that survived regex
        content = content.replace(/<div class="hidden md:flex space-x-8">[\s\S]*?<\/div>/g, '');

        // Remove broken navigation fragments
        content = content.replace(/<img src="[^"]*logo[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
        content = content.replace(/<a href="[^"]*"[^>]*>Services[^<]*<\/a>/g, '');
        content = content.replace(/<a href="[^"]*"[^>]*>About[^<]*<\/a>/g, '');
        content = content.replace(/<a href="[^"]*"[^>]*>Blog[^<]*<\/a>/g, '');
        content = content.replace(/<a href="[^"]*"[^>]*>Contact[^<]*<\/a>/g, '');
        content = content.replace(/<a href="[^"]*"[^>]*>Locations[^<]*<\/a>/g, '');
        content = content.replace(/<svg[\s\S]*?<\/svg>/g, '');

        // Clean up any remaining broken div structures
        content = content.replace(/^\s*<div class="[^"]*">\s*$/gm, '');
        content = content.replace(/^\s*<div class="relative group">\s*$/gm, '');
        content = content.replace(/^\s*<button[\s\S]*?<\/button>\s*$/gm, '');
        content = content.replace(/^\s*<div class="absolute[^"]*">[\s\S]*?<\/div>\s*$/gm, '');

        // Clean up empty lines
        content = content.replace(/^\s*$/gm, '');

        fs.writeFileSync(filePath, content);
        console.log(`Final cleanup: ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

// Run in current directory
removeNavigationFinal('.');

console.log('Final navigation cleanup complete!');
