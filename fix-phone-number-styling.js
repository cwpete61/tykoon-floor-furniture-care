const fs = require('fs');
const path = require('path');

// List of all .html files that might need phone number styling fix
const filesToUpdate = [
  'index.html',
  'about.html',
  'contact.html',
  'blog.html',
  'privacy.html',
  'terms.html',
  'services.html',
  'services/programs/index.html',
  'services/hardwood-floors/index.html',
  'services/hardwood-floors/1-day-screen-recoat/index.html',
  'services/hardwood-floors/full-sanding-refinishing/index.html',
  'services/hardwood-floors/wood-floor-cleaning-polishing/index.html',
  'services/hardwood-floors/gym-floor-refinishing/index.html',
  'services/upholstery-leather/index.html',
  'services/upholstery-leather/fabric-upholstery/index.html',
  'services/upholstery-leather/leather-furniture/index.html',
  'services/tile-grout-concrete/index.html',
  'locations/westside/index.html',
  'locations/westside/beverly-hills/index.html',
  'locations/westside/brentwood/index.html',
  'locations/westside/santa-monica/index.html',
  'locations/westside/westwood/index.html',
  'locations/westside/pacific-palisades/index.html',
  'locations/westside/marina-del-rey/index.html',
  'locations/central/index.html',
  'locations/central/mid-wilshire/index.html',
  'locations/central/koreatown/index.html',
  'locations/central/hancock-park/index.html',
  'locations/central/brookside/index.html',
  'locations/eastside/index.html',
  'locations/eastside/atwater-village/index.html',
  'locations/eastside/eagle-rock/index.html',
  'locations/eastside/echo-park/index.html',
  'locations/eastside/highland-park/index.html',
  'locations/eastside/silver-lake/index.html',
  'locations/harbor-south-bay/index.html',
  'locations/harbor-south-bay/long-beach/index.html',
  'locations/harbor-south-bay/redondo-beach/index.html',
  'locations/harbor-south-bay/san-pedro/index.html',
  'locations/san-fernando-valley/index.html',
  'locations/san-fernando-valley/encino/index.html',
  'locations/san-fernando-valley/north-hollywood/index.html',
  'locations/san-fernando-valley/sherman-oaks/index.html',
  'locations/san-fernando-valley/van-nuys/index.html',
  'locations/san-fernando-valley/burbank/index.html',
  'locations/san-gabriel-valley/index.html',
  'locations/san-gabriel-valley/alhambra/index.html',
  'locations/san-gabriel-valley/arcadia/index.html',
  'locations/san-gabriel-valley/monterey-park/index.html',
  'locations/san-gabriel-valley/pasadena/index.html',
  'locations/san-gabriel-valley/san-marino/index.html',
  'locations/san-gabriel-valley/south-pasadena/index.html',
  'locations/south-la/index.html',
  'locations/south-la/hawthorne/index.html',
  'locations/south-la/inglewood/index.html',
  'locations/south-la/south-los-angeles/index.html',
  'locations/south-la/torrance/index.html'
];

// Function to update a single file
function updateFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let hasChanges = false;
      
      // Fix phone number styling for mobile only (no tablet-specific styling)
      content = content.replace(
        /<a href="tel:\+13233798057" class="md:hidden text-lg font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300">\+1 \(323\) 379-8057<\/a>/g,
        '<a href="tel:+13233798057" class="md:hidden lg:hidden text-lg font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap">+1 (323) 379-8057</a>'
      );
      
      // Add tablet phone number if it doesn't exist
      if (content.includes('md:hidden lg:hidden text-lg') && !content.includes('hidden md:block lg:hidden text-xl')) {
        content = content.replace(
          /(<a href="tel:\+13233798057" class="md:hidden lg:hidden[^>]*>\+1 \(323\) 379-8057<\/a>)/,
          '$1\n                <!-- Phone number for tablet -->\n                <a href="tel:+13233798057" class="hidden md:block lg:hidden text-xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap">+1 (323) 379-8057</a>'
        );
        hasChanges = true;
      }
      
      // Fix desktop phone number styling
      content = content.replace(
        /<a href="tel:\+13233798057" class="hidden md:block text-2xl md:text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300">\+1 \(323\) 379-8057<\/a>/g,
        '<a href="tel:+13233798057" class="hidden lg:block text-2xl md:text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap">+1 (323) 379-8057</a>'
      );
      
      // Check if any changes were made
      if (hasChanges || content !== fs.readFileSync(fullPath, 'utf8')) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Phone number styling updated in: ${filePath}`);
      }
    } else {
      console.log(`❌ File not found: ${filePath}`);
    }
  } catch (error) {
    console.log(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Update all files
filesToUpdate.forEach(filePath => {
  updateFile(filePath);
});

console.log('\n✨ Phone number styling update completed!');