const fs = require('fs');
const path = require('path');

// Last batch of location pages to fix
const finalPages = [
  'locations/central/brookside/index.html',
  'locations/eastside/atwater-village/index.html',
  'locations/eastside/eagle-rock/index.html',
  'locations/eastside/echo-park/index.html',
  'locations/eastside/highland-park/index.html',
  'locations/eastside/silver-lake/index.html',
  'locations/eastside/long-beach/index.html'
];

finalPages.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace the entire file with correct structure
      content = content.replace(/^\s*<body[^>]*>[\s\S]*<\/body>/m, `<body class="font-['Inter'] antialiased bg-black text-white">
    <main>
        <section class="relative h-[400px] flex items-center justify-center" style="background-image: url('../../../images/heroes/locations/eastside/atwater-village/hero.jpg'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black/80"></div>
            <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto text-center">
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 leading-tight mb-6">${path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Refinishing Services</h1>
                    <p class="text-lg md:text-xl text-gray-300 mb-8">Professional floor and furniture restoration for ${path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                </div>
            </div>
        </section>

        <section class="py-24 bg-black">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 class="text-2xl font-bold text-white mb-4">Our Services in ${path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
                        <p class="text-gray-300 leading-relaxed">Tykoon provides professional 1-day refinishing for hardwood floors and furniture throughout ${path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}. Our expert team serves residential homes, apartments, offices, and commercial spaces with eco-friendly techniques and premium finishes.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
                            <h3 class="text-xl font-semibold text-yellow-500 mb-4">Floor Refinishing</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li>• Hardwood sanding and refinishing</li>
                                <li>• Stain matching for any wood type</li>
                                <li>• Eco-friendly sealants and finishes</li>
                                <li>• 1-day turnaround (most projects)</li>
                            </ul>
                        </div>
                        <div class="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
                            <h3 class="text-xl font-semibold text-yellow-500 mb-4">Furniture Restoration</h3>
                            <ul class="space-y-2 text-gray-300">
                                <li>• Upholstery cleaning and repair</li>
                                <li>• Antique furniture restoration</li>
                                <li>• Leather and fabric reupholstering</li>
                                <li>• Custom color matching</li>
                            </ul>
                        </div>
                    </div>

                    <div class="text-center">
                        <h2 class="text-2xl font-bold text-white mb-4">Ready to Schedule?</h2>
                        <p class="text-gray-300 mb-8">Contact us for a free estimate in ${path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
                        <a href="../../../contact.html" class="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">Get Free Quote</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold text-white mb-4">Tykoon</h3>
                    <p class="mb-4">Professional floor and furniture care services.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Contact</h4>
                    <a href="mailto:admin@tykoon.org" class="block hover:text-white transition-colors duration-300">admin@tykoon.org</a>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="../../../services.html" class="hover:text-white transition-colors duration-300">Services</a></li>
                        <li><a href="../../../about.html" class="hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="../../../blog.html" class="hover:text-white transition-colors duration-300">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4">Legal</h4>
                    <ul class="space-y-2">
                        <li><a href="../../../privacy.html" class="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="../../../terms.html" class="hover:text-white transition-colors duration-300">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8 text-center">
                <p>&copy; 2025 Tykoon Floor & Furniture Care. All rights reserved.</p>
            </div>
        </div>
    </footer></body>`);

    // Fix the specific hero image for each location
    const locationName = path.basename(path.dirname(filePath));
    const regionName = path.basename(path.dirname(path.dirname(filePath)));
    const heroImageUrl = `../../../images/heroes/locations/${regionName}/${locationName}/hero.jpg`;
    content = content.replace(/url\('[^']*'\)/, `url('${heroImageUrl}')`);

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (err) {
    console.error(`Error fixing ${filePath}:`, err.message);
  }
} else {
  console.log(`File not found: ${filePath}`);
}
});
