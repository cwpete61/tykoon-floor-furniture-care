# Tykoon Floor & Furniture Care - Global Menu Structure

## Main Navigation

### Logo
- **Image**: images/general/logo/tk-source-file-Black.png
- **Alt Text**: Tykoon Floor & Furniture Care
- **Link**: / (homepage)

### Primary Menu Items

#### Services (Dropdown)
- **Link**: services/
- **Sub-items**:
  - Hardwood Floors (services/hardwood-floors/)
  - Upholstery & Leather (services/upholstery-leather/)
  - Tile, Grout & Concrete (services/tile-grout-concrete/)
  - Programs (services/programs/)

#### About
- **Link**: about.html

#### Blog
- **Link**: blog.html

#### Contact
- **Link**: contact.html

#### Locations (Dropdown)
- **Link**: locations/
- **Sub-items organized by region**:

##### Westside
- Beverly Hills (locations/westside/beverly-hills/)
- Brentwood (locations/westside/brentwood/)
- Santa Monica (locations/westside/santa-monica/)
- Westwood (locations/westside/westwood/)
- Pacific Palisades (locations/westside/pacific-palisades/)
- Marina del Rey (locations/westside/marina-del-rey/)

##### Central
- Mid-Wilshire (locations/central/mid-wilshire/)
- Koreatown (locations/central/koreatown/)
- Hancock Park (locations/central/hancock-park/)
- Brookside (locations/central/brookside/)

##### Eastside
- Atwater Village (locations/eastside/atwater-village/)
- Eagle Rock (locations/eastside/eagle-rock/)
- Echo Park (locations/eastside/echo-park/)
- Highland Park (locations/eastside/highland-park/)
- Silver Lake (locations/eastside/silver-lake/)

##### Harbor / South Bay
- Long Beach (locations/harbor-south-bay/long-beach/)
- Redondo Beach (locations/harbor-south-bay/redondo-beach/)
- San Pedro (locations/harbor-south-bay/san-pedro/)

##### San Fernando Valley
- Encino (locations/san-fernando-valley/encino/)
- North Hollywood (locations/san-fernando-valley/north-hollywood/)
- Sherman Oaks (locations/san-fernando-valley/sherman-oaks/)
- Van Nuys (locations/san-fernando-valley/van-nuys/)

### Contact Information
- **Phone**: +1 (323) 379-8057
- **Link**: tel:+13233798057

## Styling Classes

### Header
- **Class**: `fixed w-full bg-black/95 backdrop-blur-sm shadow-sm z-50`

### Navigation Container
- **Class**: `container mx-auto px-4 sm:px-6 lg:px-8 py-4`

### Navigation Items
- **Class**: `text-gray-300 hover:text-yellow-500 transition-colors duration-300`

### Dropdown Menu
- **Class**: `absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`

### Phone Number
- **Class**: `text-4xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300`

## Notes
- All dropdown menus use hover functionality
- The menu is responsive and hides on mobile devices
- The menu uses a dark theme with yellow accent colors
- All location pages should follow the same navigation structure