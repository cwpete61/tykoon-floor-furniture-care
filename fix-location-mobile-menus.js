const fs = require('fs');
const path = require('path');

// List of all location .html files to update
const filesToUpdate = [
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

// Complete mobile menu locations HTML with all location links
const completeLocationsMenu = `                                <div class="text-yellow-500 font-semibold py-2">Westside</div>
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
                                <a href="../../../locations/san-fernando-valley/burbank/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Burbank</a>
                                
                                <div class="text-yellow-500 font-semibold py-2">San Gabriel Valley</div>
                                <a href="../../../locations/san-gabriel-valley/alhambra/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Alhambra</a>
                                <a href="../../../locations/san-gabriel-valley/arcadia/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Arcadia</a>
                                <a href="../../../locations/san-gabriel-valley/monterey-park/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Monterey Park</a>
                                <a href="../../../locations/san-gabriel-valley/pasadena/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Pasadena</a>
                                <a href="../../../locations/san-gabriel-valley/san-marino/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">San Marino</a>
                                <a href="../../../locations/san-gabriel-valley/south-pasadena/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">South Pasadena</a>
                                
                                <div class="text-yellow-500 font-semibold py-2">South LA</div>
                                <a href="../../../locations/south-la/hawthorne/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Hawthorne</a>
                                <a href="../../../locations/south-la/inglewood/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Inglewood</a>
                                <a href="../../../locations/south-la/south-los-angeles/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">South Los Angeles</a>
                                <a href="../../../locations/south-la/torrance/" class="block py-2 pl-4 text-gray-300 hover:text-yellow-500 transition-colors duration-300">Torrance</a>`;

// Function to update a single file
function updateFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Find the mobile menu locations section and replace it with the complete version
      const locationsStartMarker = '<!-- Locations dropdown -->';
      const locationsEndMarker = '</div>';
      
      const startIndex = content.indexOf(locationsStartMarker);
      if (startIndex !== -1) {
        // Find the end of the locations dropdown
        const dropdownStart = content.indexOf('<div class="border-b border-gray-800 pb-4">', startIndex);
        const dropdownEnd = content.indexOf('</div>', dropdownStart);
        const nextSectionStart = content.indexOf('</div>', dropdownEnd + 6);
        
        if (dropdownStart !== -1 && dropdownEnd !== -1 && nextSectionStart !== -1) {
          // Replace the incomplete locations menu with the complete one
          const beforeLocations = content.substring(0, dropdownStart);
          const afterLocations = content.substring(nextSectionStart + 6);
          
          content = beforeLocations + `
                    <div class="border-b border-gray-800 pb-4">
                        <button class="mobile-dropdown-button flex items-center justify-between w-full text-left text-gray-300 hover:text-yellow-500 transition-colors duration-300 py-2">
                            <span class="text-lg font-medium">Locations</span>
                            <svg class="dropdown-icon w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="overflow-hidden transition-all duration-300 max-h-0">
                            <div class="pt-2 pb-4 space-y-2">
` + completeLocationsMenu + `
                            </div>
                        </div>
                    </div>` + afterLocations;
          
          // Write updated content back to file
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`✅ Mobile menu locations updated in: ${filePath}`);
        }
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

console.log('\n✨ Mobile menu locations update completed!');