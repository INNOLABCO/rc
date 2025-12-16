// ===============================
// MESTER CAR - ENHANCED JAVASCRIPT
// Multi-language + Form Backend
// ===============================

// Language Translations
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_vehicles: "Vehicles",
        nav_how: "How it Works",
        nav_why: "Why Choose Us",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "🚗 Available 24/7 Across Morocco",
        hero_title: "Find Your Perfect",
        hero_title_gradient: "Rental Car",
        hero_description: "Experience the freedom of the road with our premium fleet. From economy to luxury, we have the perfect car for every journey across Morocco.",
        
        // Search Box
        search_pickup: "📍 Pickup Location",
        search_pickup_date: "📅 Pickup Date",
        search_return_date: "📅 Return Date",
        search_button: "Search Cars",
        
        // Stats
        stat1_number: "200+",
        stat1_label: "Happy Clients",
        stat2_number: "50+",
        stat2_label: "Premium Cars",
        stat3_number: "6000+",
        stat3_label: "Completed Trips",
        
        // Buttons
        btn_rent: "Rent Now",
        btn_book: "Book Now",
        btn_view_fleet: "View Fleet",
        btn_contact: "Contact Us",
        
        // Features
        feature1_title: "100% Secure",
        feature1_desc: "Your data is protected with industry-standard encryption",
        feature2_title: "Best Price",
        feature2_desc: "Guaranteed lowest prices with no hidden fees",
        feature3_title: "Wide Selection",
        feature3_desc: "Choose from 50+ premium vehicles",
        feature4_title: "24/7 Support",
        feature4_desc: "Our team is always here to help you",
        
        // Sections
        section_fleet: "Popular Rental Cars",
        section_fleet_desc: "Choose from our diverse fleet of well-maintained vehicles",
        section_how: "How It Works",
        section_how_desc: "Rent a car in 3 simple steps",
        section_why: "Why Choose Us",
        section_why_desc: "We're committed to providing you with the best car rental experience in Morocco",
        section_testimonials: "What Our Customers Say",
        section_testimonials_desc: "Don't just take our word for it",
        
        // Footer
        footer_rights: "© 2025 Mester Car. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service"
    },
    
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_vehicles: "Véhicules",
        nav_how: "Comment ça marche",
        nav_why: "Pourquoi nous choisir",
        nav_reviews: "Avis",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "🚗 Disponible 24h/24 et 7j/7 au Maroc",
        hero_title: "Trouvez votre",
        hero_title_gradient: "Voiture de Location Parfaite",
        hero_description: "Découvrez la liberté de la route avec notre flotte premium. De l'économie au luxe, nous avons la voiture parfaite pour chaque voyage au Maroc.",
        
        // Search Box
        search_pickup: "📍 Lieu de prise en charge",
        search_pickup_date: "📅 Date de prise en charge",
        search_return_date: "📅 Date de retour",
        search_button: "Rechercher des voitures",
        
        // Stats
        stat1_number: "200+",
        stat1_label: "Clients Satisfaits",
        stat2_number: "50+",
        stat2_label: "Voitures Premium",
        stat3_number: "6000+",
        stat3_label: "Voyages Complétés",
        
        // Buttons
        btn_rent: "Louer Maintenant",
        btn_book: "Réserver",
        btn_view_fleet: "Voir la Flotte",
        btn_contact: "Nous Contacter",
        
        // Features
        feature1_title: "100% Sécurisé",
        feature1_desc: "Vos données sont protégées par un cryptage standard",
        feature2_title: "Meilleur Prix",
        feature2_desc: "Prix les plus bas garantis sans frais cachés",
        feature3_title: "Large Sélection",
        feature3_desc: "Choisissez parmi plus de 50 véhicules premium",
        feature4_title: "Support 24/7",
        feature4_desc: "Notre équipe est toujours là pour vous aider",
        
        // Sections
        section_fleet: "Voitures de Location Populaires",
        section_fleet_desc: "Choisissez parmi notre flotte diversifiée de véhicules bien entretenus",
        section_how: "Comment Ça Marche",
        section_how_desc: "Louez une voiture en 3 étapes simples",
        section_why: "Pourquoi Nous Choisir",
        section_why_desc: "Nous nous engageons à vous offrir la meilleure expérience de location de voitures au Maroc",
        section_testimonials: "Ce Que Nos Clients Disent",
        section_testimonials_desc: "Ne nous croyez pas sur parole",
        
        // Footer
        footer_rights: "© 2025 Mester Car. Tous droits réservés.",
        footer_privacy: "Politique de Confidentialité",
        footer_terms: "Conditions d'Utilisation"
    },
    
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_vehicles: "السيارات",
        nav_how: "كيف يعمل",
        nav_why: "لماذا نحن",
        nav_reviews: "التقييمات",
        nav_contact: "اتصل بنا",
        
        // Hero Section
        hero_badge: "🚗 متاح 24/7 في جميع أنحاء المغرب",
        hero_title: "ابحث عن",
        hero_title_gradient: "سيارة الإيجار المثالية",
        hero_description: "استمتع بحرية الطريق مع أسطولنا المتميز. من الاقتصادية إلى الفاخرة، لدينا السيارة المثالية لكل رحلة في المغرب.",
        
        // Search Box
        search_pickup: "📍 موقع الاستلام",
        search_pickup_date: "📅 تاريخ الاستلام",
        search_return_date: "📅 تاريخ الإرجاع",
        search_button: "ابحث عن السيارات",
        
        // Stats
        stat1_number: "+200",
        stat1_label: "عميل سعيد",
        stat2_number: "+50",
        stat2_label: "سيارة فاخرة",
        stat3_number: "+6000",
        stat3_label: "رحلة مكتملة",
        
        // Buttons
        btn_rent: "احجز الآن",
        btn_book: "احجز",
        btn_view_fleet: "عرض الأسطول",
        btn_contact: "اتصل بنا",
        
        // Features
        feature1_title: "آمن 100%",
        feature1_desc: "بياناتك محمية بتشفير معياري",
        feature2_title: "أفضل سعر",
        feature2_desc: "أسعار مضمونة الأقل بدون رسوم خفية",
        feature3_title: "تشكيلة واسعة",
        feature3_desc: "اختر من بين أكثر من 50 سيارة فاخرة",
        feature4_title: "دعم 24/7",
        feature4_desc: "فريقنا دائماً هنا لمساعدتك",
        
        // Sections
        section_fleet: "سيارات الإيجار الشائعة",
        section_fleet_desc: "اختر من أسطولنا المتنوع من السيارات المُصانة جيداً",
        section_how: "كيف يعمل",
        section_how_desc: "استأجر سيارة في 3 خطوات بسيطة",
        section_why: "لماذا تختارنا",
        section_why_desc: "نحن ملتزمون بتزويدك بأفضل تجربة تأجير سيارات في المغرب",
        section_testimonials: "ماذا يقول عملاؤنا",
        section_testimonials_desc: "لا تأخذ كلامنا فقط",
        
        // Footer
        footer_rights: "© 2025 ميستر كار. جميع الحقوق محفوظة.",
        footer_privacy: "سياسة الخصوصية",
        footer_terms: "شروط الخدمة"
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    
    // Load cars first
    loadCars();
    
    // Set initial language
    setLanguage(currentLang);
    
    // Language switcher functionality
    setupLanguageSwitcher();
    
    // All other existing functions
    initializeNavigation();
    initializeFilters();
    initializeSearchBox();
    initializeRentButtons();
    initializeContactForm();
    initializeAnimations();
});

// ===== LOAD CARS FROM JSON =====
async function loadCars() {
    try {
        const response = await fetch('cars-data.json');
        const cars = await response.json();
        
        const grid = document.getElementById('vehiclesGrid');
        if (!grid) return;
        
        cars.forEach(car => {
            const badge = car.badge ? `<div class="vehicle-badge ${car.badge.toLowerCase()}">${car.badge}</div>` : '';
            
            const cardHTML = `
                <div class="vehicle-card" data-category="${car.category}">
                    ${badge}
                    <div class="vehicle-image">
                        <img src="${car.image}" alt="${car.name} ${car.year}">
                    </div>
                    <div class="vehicle-info">
                        <div class="vehicle-header">
                            <h3>${car.name}</h3>
                            <div class="rating">
                                <span class="stars">⭐⭐⭐⭐⭐</span>
                                <span class="rating-text">4.8</span>
                            </div>
                        </div>
                        <p class="vehicle-type">${car.transmission} • ${car.engine}</p>
                        
                        <div class="vehicle-features">
                            <span>👥 ${car.seats} Seats</span>
                            <span>🎒 ${car.bags} Bags</span>
                            <span>❄️ AC</span>
                        </div>

                        <div class="vehicle-footer">
                            <div class="price">
                                <span class="price-amount">${car.price} MAD</span>
                                <span class="price-period">/day</span>
                            </div>
                            <a href="car-${car.id}.html" class="btn-rent">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            
            grid.innerHTML += cardHTML;
        });
        
        console.log(`✅ Loaded ${cars.length} cars`);
    } catch (error) {
        console.error('Error loading cars:', error);
    }
}

// Setup language switcher
function setupLanguageSwitcher() {
    const langBtn = document.getElementById('langBtn');
    if (!langBtn) return;
    
    // Create language dropdown
    const langDropdown = document.createElement('div');
    langDropdown.className = 'lang-dropdown';
    langDropdown.innerHTML = `
        <button class="lang-option" data-lang="en">🇬🇧 English</button>
        <button class="lang-option" data-lang="fr">🇫🇷 Français</button>
        <button class="lang-option" data-lang="ar">🇲🇦 العربية</button>
    `;
    langDropdown.style.cssText = 'display:none; position:absolute; top:100%; right:0; background:white; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.1); margin-top:8px; overflow:hidden; z-index:1000;';
    
    langBtn.parentElement.style.position = 'relative';
    langBtn.parentElement.appendChild(langDropdown);
    
    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.style.display = langDropdown.style.display === 'none' ? 'block' : 'none';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.style.display = 'none';
    });
    
    // Language selection
    langDropdown.querySelectorAll('.lang-option').forEach(btn => {
        btn.style.cssText = 'display:block; width:100%; padding:12px 20px; border:none; background:white; text-align:left; cursor:pointer; font-size:14px; transition:background 0.3s;';
        
        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#f0f0f0';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'white';
        });
        
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.style.display = 'none';
        });
    });
    
    // Update badge based on current language
    updateLanguageBadge();
}

// Set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update direction for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    updateTranslations();
    
    // Update language badge
    updateLanguageBadge();
}

// Update language badge
function updateLanguageBadge() {
    const badge = document.querySelector('.badge');
    if (!badge) return;
    
    const langMap = { en: 'En', fr: 'Fr', ar: 'ع' };
    badge.textContent = langMap[currentLang];
}

// Update all translations
function updateTranslations() {
    const t = translations[currentLang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            }
        });
    });

    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// ===== FILTERS =====
function initializeFilters() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            vehicleCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== SEARCH BOX =====
function initializeSearchBox() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };
    
    const pickupDateInput = document.getElementById('pickupDate');
    const returnDateInput = document.getElementById('returnDate');
    
    if (pickupDateInput && returnDateInput) {
        pickupDateInput.value = formatDate(today);
        pickupDateInput.min = formatDate(today);
        
        returnDateInput.value = formatDate(tomorrow);
        returnDateInput.min = formatDate(tomorrow);
        
        pickupDateInput.addEventListener('change', () => {
            const selectedDate = new Date(pickupDateInput.value);
            const nextDay = new Date(selectedDate);
            nextDay.setDate(nextDay.getDate() + 1);
            
            returnDateInput.min = formatDate(nextDay);
            
            if (new Date(returnDateInput.value) <= selectedDate) {
                returnDateInput.value = formatDate(nextDay);
            }
        });
    }

    const searchButton = document.querySelector('.btn-search');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const vehiclesSection = document.getElementById('vehicles');
            if (vehiclesSection) {
                vehiclesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ===== RENT BUTTONS =====
function initializeRentButtons() {
    const rentButtons = document.querySelectorAll('.btn-rent');
    
    rentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const vehicleCard = this.closest('.vehicle-card');
            const vehicleName = vehicleCard.querySelector('h3').textContent;
            const vehiclePrice = vehicleCard.querySelector('.price-amount').textContent;
            
            const message = `Hello! I'm interested in renting the ${vehicleName} at ${vehiclePrice}/day. Can you provide more details?`;
            const whatsappURL = `https://wa.me/212662186949?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappURL, '_blank');
        });
    });
}

// ===== CONTACT FORM WITH BACKEND =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Submit to Formspree (free backend service)
            try {
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        message: message
                    })
                });
                
                if (response.ok) {
                    alert('✅ Thank you! Your message has been sent. We will contact you soon.');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Fallback to WhatsApp
                const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
                const whatsappURL = `https://wa.me/212662186949?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
            }
        });
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .vehicle-card, .step-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Update active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===== CTA BUTTONS =====
document.querySelectorAll('.btn-primary-large, .btn-primary').forEach(button => {
    if (button.textContent.includes('Book') || button.textContent.includes('Get Started') || button.textContent.includes('Réserver') || button.textContent.includes('احجز')) {
        button.addEventListener('click', function(e) {
            if (!this.getAttribute('href')) {
                e.preventDefault();
                const vehiclesSection = document.getElementById('vehicles');
                if (vehiclesSection) {
                    vehiclesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    if (button.textContent.includes('Contact') || button.textContent.includes('Contacter') || button.textContent.includes('اتصل')) {
        button.addEventListener('click', function(e) {
            if (!this.getAttribute('href')) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
});

console.log('🚗 Mester Car Website Loaded - Multi-language Enabled!');
console.log(`Current Language: ${currentLang}`);
