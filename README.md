# Pretoria Pet Grooming - WEDE5020 Part 3 POE

Student: BULELWA WILLARD
        ST10531069
Module: WEDE5020 - Web Development

## 1. Changelog - Feedback from Part 2 Implemented
- 2026-11-02: Fixed huge hero image - was taking full screen. Now max-width 350px, centered with margin auto, border-radius 12px, responsive with srcset and <picture> element for mobile, tablet, desktop.
- 2026-11-02: Fixed duplicate </main> and duplicate <img> tags in index.html causing layout break - validated with W3C validator.
- 2026-11-02: Added proper alt text and descriptive image names for SEO image optimisation (dog-small.jpg, dog-medium.jpg, dog-large.jpg with keyword rich alt text).
- 2026-11-02: Implemented responsive hamburger menu (☰) for mobile-friendliness under 480px breakpoint - feedback about navigation on mobile.
- 2026-11-02: Fixed heading structure - now proper H1 (site name) > H2 (page title) > H3 (sections) for SEO.
- 2026-11-02: Added internal linking between pages (e.g. about links to services and enquiry).

## 2. Part 3 Enhancements Implemented

### JavaScript (JS/script.js)
- Hamburger Menu: toggleMenu() for responsive nav
- Accordion: toggleAccordion() for About page - Why Choose Us / Mission
- Modal: openModal(cost) shows cost estimate R150-R350 on enquiry
- Lightbox: openLightbox() click dog to enlarge image - gallery effect
- Dynamic Content: loadServices() loads services from JS array using DOM manipulation (createElement)
- Search/Filter: searchServices() filters services live as you type
- Animations: fadeIn keyframes, hover transitions on service cards
- Leaflet Map: initMap() shows Pretoria location -25.7479, 28.2293 with marker popup
- Form Validation: validateEnquiry() checks name >=3 chars, email contains @, phone 10 digits regex, message >=10 chars, shows error messages, AJAX simulation with setTimeout, mailto compilation. validateContact() for general message.
- Action Attributes: enquiry form action="mailto:info@pretoriapetgrooming.co.za" and contact form with mailto.

### SEO On-Page
- Title tags unique for each page with keywords "Pretoria", "Dog Grooming"
- Meta descriptions, keywords, author, viewport
- H1 H2 H3 hierarchy, canonical tag
- Image optimisation: responsive images with srcset, sizes, picture element, alt text keyword rich, small file size 350px max
- Mobile-friendly: hamburger menu, grid layout, responsive breakpoints
- URL structure: index.html, about.html, services.html, enquiry.html, contact.html
- Internal linking: every page links to services and enquiry

### SEO Off-Page / Technical
- robots.txt allows crawling and points to sitemap
- sitemap.xml lists all 5 pages with priority and lastmod
- Local SEO: mentions Pretoria, Gauteng, coordinates -25.7479,28.2293

### Performance & Security
- Responsive images reduce load, Leaflet CDN, trimmed inputs .trim() to avoid injection, no eval()

## 3. References
- Leaflet.js Documentation https://leafletjs.com - for interactive map
- OpenStreetMap https://openstreetmap.org - map tiles
- MDN Web Docs https://developer.mozilla.org - form validation, responsive images
- W3Schools https://w3schools.com - accordion and modal examples adapted

## 4. Deployment Links
- GitHub Repository: https://github.com/YOURUSERNAME/Pretoria-Pet-Grooming
- Netlify Live Site: https://pretoriapetgrooming.netlify.app

## 5. How to Run
1. Clone GitHub repo
2. Open index.html with Live Server in VS Code
3. Test: click dog for lightbox, accordion in about, search in services, forms in enquiry/contact, map in contact.

