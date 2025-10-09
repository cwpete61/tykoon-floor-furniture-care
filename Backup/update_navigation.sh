#!/bin/bash

# Script to add About link to all location pages navigation menus

# Find all location pages
LOCATION_PATH="tykoon-floor-furniture-care-2025-10-07-f3y6z/locations"

if [ -d "$LOCATION_PATH" ]; then
    find "$LOCATION_PATH" -name "index.html" -type f | while read file; do
        echo "Updating $file"

        # Create backup
        cp "$file" "$file.bak"

        # Use sed to add About link after Services dropdown
        # This assumes the Services dropdown ends with </div></div>
        sed -i 's|</div></div> *</div>|</div></div>                    <a href="../../about.html" class="text-gray-300 hover:text-yellow-500 transition-colors duration-300">About</a>|g' "$file"

        echo "Updated $file"
    done
fi

echo "Navigation update complete"
