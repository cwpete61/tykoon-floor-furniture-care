const fs = require('fs');

// Navigation HTML to add
const navigationHTML = `<header class="fixed w-full bg-black/95 backdrop-blur-sm shadow-sm z-50">
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
                            <a href="../../../locations/westside/beverly-hills/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Beverly Hills</a>
                            <a href="../../../locations/westside/brentwood/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Brentwood</a>
                            <a href="../../../locations/westside/santa-monica/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Santa Monica</a>
                            <a href="../../../locations/westside/westwood/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Westwood</a>
                            <a href="../../../locations/westside/pacific-palisades/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Pacific Palisades</a>
                            <a href="../../../locations/westside/marina-del-rey/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Marina del Rey</a>
                            <div class="px-4 py-2 text-yellow-500 font-semibold">Central</div>
                            <a href="../../../locations/central/mid-wilshire/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Mid-Wilshire</a>
                            <a href="../../../locations/central/koreatown/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Koreatown</a>
                            <a href="../../../locations/central/hancock-park/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Hancock Park</a>
                            <div class="px-4 py-2 text-yellow-500 font-semibold">Eastside</div>
                            <a href="../../../locations/eastside/atwater-village/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Atwater Village</a>
                            <a href="../../../locations/eastside/eagle-rock/" class="block px-8 py-2 text-gray-300 hover:text-yellow-500 hover:bg-black/50">Eagle Rock</a>
                            <a href="../../../locations/eastside/echo-park/" class="block px-8 py
