   // Load non-critical scripts after page load
        function loadScript(src, callback) {
            var script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.defer = true;
            if (callback) script.onload = callback;
            document.body.appendChild(script);
        }
        
        // Load these after the page has loaded
        window.addEventListener('load', function() {
            loadScript('https://cdn.jsdelivr.net/npm/typed.js@2.0.12', function() {
                // Typed.js animation
                const typed = new Typed('.multiple-text', {
                    strings: ['Frontend Developer', 'UI/UX Designer', 'Web Designer', 'Creative Coder'],
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 1000,
                    loop: true
                });
            });
            
            loadScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', function() {
                // Particle.js background
                particlesJS("particles-js", {
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#00f7ff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#00f7ff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                });
            });
        });
        
        // Inline critical JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Mobile menu toggle
            const menuBtn = document.querySelector('.menu-btn');
            const navbar = document.querySelector('.navbar');
            
            menuBtn.addEventListener('click', () => {
                const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                menuBtn.setAttribute('aria-expanded', !isExpanded);
                navbar.classList.toggle('active');
                menuBtn.classList.toggle('active');
                
                // Toggle body scroll
                if (navbar.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close menu when clicking on a link
            document.querySelectorAll('.navbar a').forEach(link => {
                link.addEventListener('click', () => {
                    navbar.classList.remove('active');
                    menuBtn.classList.remove('active');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = 'auto';
                });
            });
            
            // Sticky header on scroll
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                header.classList.toggle('sticky', window.scrollY > 0);
                
                if (window.scrollY > 100) {
                    header.style.opacity = '0.95';
                    header.style.transform = 'translateY(0)';
                } else {
                    header.style.opacity = '1';
                }
                
                if (window.scrollY > 50) {
                    header.style.backdropFilter = 'blur(15px)';
                    header.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
                } else {
                    header.style.backdropFilter = 'blur(12px)';
                    header.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
                }
            });
            
            // Scroll reveal animation
            const scrollObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            // Apply different animation directions
            document.querySelectorAll('[class*="hidden-"]').forEach((el) => scrollObserver.observe(el));
            
            // Set floating animation delays
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach(el => {
                const delay = el.classList.contains('delay-1') ? 0.2 : 
                             el.classList.contains('delay-2') ? 0.4 : 
                             el.classList.contains('delay-3') ? 0.6 : 0;
                el.style.animationDelay = `${delay}s`;
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Update URL without page reload
                        if (history.pushState) {
                            history.pushState(null, null, targetId);
                        } else {
                            location.hash = targetId;
                        }
                    }
                });
            });
            
            // Lazy load images that are in viewport
            if ('IntersectionObserver' in window) {
                const lazyImageObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            const lazyImage = entry.target;
                            lazyImage.style.background = 'none';
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
                
                document.querySelectorAll('img').forEach(function(img) {
                    lazyImageObserver.observe(img);
                });
            }
        });