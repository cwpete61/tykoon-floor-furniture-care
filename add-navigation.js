const fs = require('fs');

const pagesToUpdate = [
  'locations/central/brookside/index.html',
  'locations/harbor-south-bay/long-beach/index.html',
  'locations/eastside/eagle-rock/index.html',
  'locations/eastside/echo-park/index.html',
  'locations/eastside/highland-park/index.html',
  'locations/eastside/silver-lake/index.html',
  'locations/eastside/long-beach/index.html',
  'locations/central/hancock-park/index.html',
  'locations/central/mid-wilshire/index.html',
  'locations/central/koreatown/index.html',
  'locations/harbor-south-bay/redondo-beach/index.html',
  'locations/harbor-south-bay/san-pedro/index.html',
  'locations/san-fernando-valley/encino/index.html',
  'locations/san-fernando-valley/north-hollywood/index.html',
  'locations/san-fernando-valley/sherman-oaks/index.html',
  'locations/san-fernando-valley/van-nuys/index.html'
];

// Navigation HTML from homepage
const navigationHTML = `    <header class="fixed w-full bg-black/95 backdrop-blur-sm shadow-sm z-50">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                <a href="../../../index.html" class="flex items-center">
                    <img src="../../../images/general/logo/tk-source-file-Black.png" alt="Tykoon Floor & Furniture Care" class="h-8 w-auto">
                </a>
                <div class="hidden md:flex space-x-8">
                    <div class="relative group">
                        <button class="text-gray-300 hover:text-yellow-500 transition-colors duration-300 flex items-center">
                            Services <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div class="py-2">
                                <a href="../../../services/hardwood-floors/index.html" class="block px-4 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Hardwood Floors</a>
                                <a href="../../../services/upholstery-leather/index.html" class="block px-4 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Upholstery & Leather</a>
                                <a href="../../../services/tile-grout-concrete/index.html" class="block px-4 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Tile, Grout & Concrete</a>
                                <a href="../../../services/programs/index.html" class="block px-4 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Programs</a>
                            </div>
                        </div>
                    </div>
                    <a href="../../../about.html" class="text-gray-300 hover:text-yellow-500 transition-colors duration-300">About</a>
                    <a href="../../../blog.html" class="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Blog</a>
                    <a href="../../../contact.html" class="text-gray-300 hover:text-yellow-500 transition-colors duration-300">Contact</a>
                    <div class="relative group">
                        <button class="text-gray-300 hover:text-yellow-500 transition-colors duration-300 flex items-center">
                            Locations <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div class="py-2">
                                <div class="px-4 py-2 text-yellow-500 font-semibold">Westside</div>
                                <a href="../../../locations/westside/beverly-hills/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Beverly Hills</a>
                                <a href="../../../locations/westside/brentwood/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Brentwood</a>
                                <a href="../../../locations/westside/santa-monica/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Santa Monica</a>
                                <a href="../../../locations/westside/westwood/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Westwood</a>
                                <a href="../../../locations/westside/pacific-palisades/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Pacific Palisades</a>
                                <a href="../../../locations/westside/marina-del-rey/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Marina del Rey</a>
                                <div class="px-4 py-2 text-yellow-500 font-semibold">Central</div>
                                <a href="../../../locations/central/mid-wilshire/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Mid-Wilshire</a>
                                <a href="../../../locations/central/koreatown/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Koreatown</a>
                                <a href="../../../locations/central/hancock-park/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Hancock Park</a>
                                <a href="../../../locations/central/brookside/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Brookside</a>
                                <div class="px-4 py-2 text-yellow-500 font-semibold">Eastside</div>
                                <a href="../../../locations/eastside/atwater-village/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Atwater Village</a>
                                <a href="../../../locations/eastside/eagle-rock/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Eagle Rock</a>
                                <a href="../../../locations/eastside/echo-park/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Echo Park</a>
                                <a href="../../../locations/eastside/highland-park/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Highland Park</a>
                                <a href="../../../locations/eastside/silver-lake/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Silver Lake</a>
                                <div class="px-4 py-2 text-yellow-500 font-semibold">Harbor / South Bay</div>
                                <a href="../../../locations/harbor-south-bay/long-beach/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Long Beach</a>
                                <a href="../../../locations/harbor-south-bay/redondo-beach/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Redondo Beach</a>
                                <a href="../../../locations/harbor-south-bay/san-pedro/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">San Pedro</a>
                                <div class="px-4 py-2 text-yellow-500 font-semibold">San Fernando Valley</div>
                                <a href="../../../locations/san-fernando-valley/encino/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Encino</a>
                                <a href="../../../locations/san-fernando-valley/north-hollywood/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">North Hollywood</a>
                                <a href="../../../locations/san-fernando-valley/sherman-oaks/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Sherman Oaks</a>
                                <a href="../../../locations/san-fernando-valley/van-nuys/index.html" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Van Nuys</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://wa.me/13233798057?text=Hi%20Tykoon!%20I'd%20like%20to%20get%20a%20free%20quote%20for%20your%20professional%20floor%20and%20furniture%20care%20services." target="_blank" class="hidden md:block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400 transition-colors duration-300 font-semibold">Get a Quote</a>
            </div>
        </nav>
    </header>
`;

pagesToUpdate.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');

      // Insert navigation after body tag and before main
      content = content.replace(/(<body[^>]*>)/, '$1' + navigationHTML);

      fs.writeFileSync(filePath, content);
      console.log(`Navigation added to: ${filePath}`);
    } catch (err) {
      console.error(`Error adding navigation to ${filePath}:`, err.message);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
