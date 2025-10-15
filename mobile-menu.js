document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            // Close menu
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.remove('opacity-100');
            mobileMenuOverlay.classList.add('opacity-0');
            document.body.classList.remove('overflow-hidden');
        } else {
            // Open menu
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
            mobileMenuOverlay.classList.remove('opacity-0');
            mobileMenuOverlay.classList.add('opacity-100');
            document.body.classList.add('overflow-hidden');
        }
    }
    
    // Add click event to mobile menu button
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Add click event to mobile menu close button
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Close menu after a short delay to allow navigation
                setTimeout(toggleMobileMenu, 100);
            });
        });
    }
    
    // Handle mobile dropdown menus
    const mobileDropdownButtons = document.querySelectorAll('.mobile-dropdown-button');
    
    mobileDropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            const icon = this.querySelector('.dropdown-icon');
            
            if (dropdown) {
                const isOpen = dropdown.classList.contains('max-h-96');
                
                if (isOpen) {
                    // Close dropdown
                    dropdown.classList.remove('max-h-96');
                    dropdown.classList.add('max-h-0');
                    if (icon) {
                        icon.classList.remove('rotate-180');
                    }
                } else {
                    // Open dropdown
                    dropdown.classList.remove('max-h-0');
                    dropdown.classList.add('max-h-96');
                    if (icon) {
                        icon.classList.add('rotate-180');
                    }
                    
                    // Close other dropdowns
                    mobileDropdownButtons.forEach(otherButton => {
                        if (otherButton !== button) {
                            const otherDropdown = otherButton.nextElementSibling;
                            const otherIcon = otherButton.querySelector('.dropdown-icon');
                            if (otherDropdown) {
                                otherDropdown.classList.remove('max-h-96');
                                otherDropdown.classList.add('max-h-0');
                            }
                            if (otherIcon) {
                                otherIcon.classList.remove('rotate-180');
                            }
                        }
                    });
                }
            }
        });
    });
});