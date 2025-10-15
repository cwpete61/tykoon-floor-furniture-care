const fs = require('fs');
const path = require('path');

// List of all .html files to update
const filesToUpdate = [
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

// Mobile menu HTML with relative path adjustments
const mobileMenuHTML = `    <!-- Mobile menu overlay -->
    <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/50 z-40 opacity-0 invisible transition-all duration-300 md:hidden"></div>
    
    <!-- Mobile menu -->
    <div id="mobile-menu" class="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-sm z-50 transform translate-x-full transition-transform duration-300 md:hidden">
        <div class="flex flex-col h-full">
            <!-- Mobile menu header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-800">
                <a href="../../../index.html" class="flex items-center">
                    <img src="../../../images/general/logo/tk-source-file-Black.png" alt="Tykoon Floor & Furniture Care" class="h-8 w-auto">
                </a>
                <button id="mobile-menu-close" class="text-gray-300 hover:text-yellow-500 transition-colors duration-300 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile menu navigation -->
            <nav class="flex-1 overflow-y-auto p-4">
                <div class="space-y-4">
                    <!-- Services dropdown -->
                    <div class="border-b border-gray-800 pb-4">
                        <button class="mobile-dropdown-button flex items-center justify-between w-full text-left text-gray-300 hover:text-yellow-500 transition-colors duration-300 py-2">
                            <span class="text-lg font-medium">Services</span>
                            <svg class="dropdown-icon w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-300 max-h-0">
                            <div class="pt-2 pb-4 space-y-2 pl-4">
                                <a href="../../../services/hardwood-floors/" class="block py-2 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Hardwood Floors</a>
                                <a href="../../../services/upholstery-leather/" class="block py-2 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Upholstery & Leather</a>
                                <a href="../../../services/tile-grout-concrete/" class="block py-2 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Tile, Grout & Concrete</a>
                                <a href="../../../services/programs/" class="block py-2 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Programs</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Other navigation items -->
                    <div class="space-y-2">
                        <a href="../../../about.html" class="block py-3 text-lg text-gray-300 hover:text-yellow-500 transition-colors duration-300 border-b border-gray-800">About</a>
                        <a href="../../../blog.html" class="block py-3 text-lg text-gray-300 hover:text-yellow-500 transition-colors duration-300 border-b border-gray-800">Blog</a>
                        <a href="../../../contact.html" class="block py-3 text-lg text-gray-300 hover:text-yellow-500 transition-colors duration-300 border-b border-gray-800">Contact</a>
                    </div>
                    
                    <!-- Locations dropdown -->
                    <div class="border-b border-gray-800 pb-4">
                        <button class="mobile-dropdown-button flex items-center justify-between w-full text-left text-gray-300 hover:text-yellow-500 transition-colors duration-300 py-2">
                            <span class="text-lg font-medium">Locations</span>
                            <svg class="dropdown-icon w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-300 max-h-0">
                            <div class="pt-2 pb-4 space-y-2">
                                <div class="text-yellow-500 font-semibold py-2">Westside</div>
                                <a href="../../../locations/westside/beverly-hills/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Beverly Hills</a>
                                <a href="../../../locations/westside/brentwood/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Brentwood</a>
                                <a href="../../../locations/westside/santa-monica/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Santa Monica</a>
                                <a href="../../../locations/westside/westwood/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Westwood</a>
                                <a href="../../../locations/westside/pacific-palisades/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Pacific Palisades</a>
                                <a href="../../../locations/westside/marina-del-rey/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Marina del Rey</a>
                                
                                <div class="text-yellow-500 font-semibold py-2">Central</div>
                                <a href="../../../locations/central/mid-wilshire/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Mid-Wilshire</a>
                                <a href="../../../locations/central/koreatown/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Koreatown</a>
                                <a href="../../../locations/central/hancock-park/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Hancock Park</a>
                                <a href="../../../locations/central/brookside/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Brookside</a>
                                
                                <div class="text-yellow-500 font-semibold py-2">Eastside</div>
                                <a href="../../../locations/eastside/atwater-village/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Atwater Village</a>
                                <a href="../../../locations/eastside/eagle-rock/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Eagle Rock</a>
                                <a href="../../../locations/eastside/echo-park/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Echo Park</a>
                                <a href="../../../locations/eastside/highland-park/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Highland Park</a>
                                <a href="../../../locations/eastside/silver-lake/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Silver Lake</a>
                                
                                <div class="text-yellow-500 font-semibold py-2">Harbor / South Bay</div>
                                <a href="../../../locations/harbor-south-bay/long-beach/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Long Beach</a>
                                <a href="../../../locations/harbor-south-bay/redondo-beach/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Redondo Beach</a>
                                <a href="../../../locations/harbor-south-bay/san-pedro/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">San Pedro</a>
                                
                                <div class="text-yellow-500 font-semibold py-2">San Fernando Valley</div>
                                <a href="../../../locations/san-fernando-valley/encino/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Encino</a>
                                <a href="../../../locations/san-fernando-valley/north-hollywood/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">North Hollywood</a>
                                <a href="../../../locations/san-fernando-valley/sherman-oaks/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Sherman Oaks</a>
                                <a href="../../../locations/san-fernando-valley/van-nuys/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Van Nuys</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <!-- Mobile menu footer -->
            <div class="p-4 border-t border-gray-800">
                <a href="tel:+13233798057" class="flex items-center justify-center bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    Call Now
                </a>
            </div>
        </div>
    </div>`;

// Function to update a single file
function updateFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if mobile menu is already added
      if (content.includes('mobile-menu.js')) {
        console.log(`⚠️  Mobile menu already exists in: ${filePath}`);
        return;
      }
      
      // Determine the correct path for mobile-menu.js based on file depth
      let scriptPath = 'mobile-menu.js';
      let logoPath = 'images/general/logo/tk-source-file-Black.png';
      let phoneNumberHref = 'tel:+13233798057';
      
      // Adjust paths for files in subdirectories
      if (filePath.includes('/')) {
        const depth = (filePath.match(/\//g) || []).length;
        scriptPath = '../'.repeat(depth) + 'mobile-menu.js';
        logoPath = '../'.repeat(depth) + 'images/general/logo/tk-source-file-Black.png';
      }
      
      // Add mobile-menu.js script
      content = content.replace(
        /(<link href="https:\/\/fonts\.googleapis\.com\/css[^>]*">)/,
        '$1\n    <script src="' + scriptPath + '" defer></script>'
      );
      
      // Replace the phone number with mobile/tablet/desktop versions
      content = content.replace(
        /<a href="tel:\+13233798057" class="text-2xl md:text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300">\+1 \(323\) 379-8057<\/a>/g,
        `                <!-- Mobile menu button -->
                <button id="mobile-menu-button" class="md:hidden text-gray-300 hover:text-yellow-500 transition-colors duration-300 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                <!-- Phone number for mobile and tablet -->
                <a href="${phoneNumberHref}" class="md:hidden lg:hidden text-lg font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap">+1 (323) 379-8057</a>
                <!-- Phone number for tablet -->
                <a href="${phoneNumberHref}" class="hidden md:block lg:hidden text-xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap">+1 (323) 379-8057</a>
                <!-- Phone number for desktop -->
                <a href="${phoneNumberHref}" class="hidden lg:block text-2xl md:text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 whitespace-nowrap">+1 (323) 379-8057</a>`
      );
      
      // Add mobile menu after the header
      content = content.replace(
        /(<\/header>)/,
        '$1\n' + mobileMenuHTML
      );
      
      // Write updated content back to file
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Mobile menu added to: ${filePath}`);
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

console.log('\n✨ Mobile menu update completed!');