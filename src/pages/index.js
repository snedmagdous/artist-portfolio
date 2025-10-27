// src/pages/index.js (homepage)
import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby"
import "../styles/global.css"
import "./index.css"
import Layout from "../components/Layout";

export default function Home() {
  const [language, setLanguage] = useState('EN');
  const videoRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Section refs for scroll snapping
  const heroSectionRef = useRef(null);
  const mailingListSectionRef = useRef(null);

  // Section tracking for navigation (non-intrusive)
  const [currentSection, setCurrentSection] = useState(0);

  // Slideshow dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mailing list state
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  // Video background setup
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.defaultMuted = true;
      video.muted = true;
      
      // Ensure video plays immediately  
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
        }
      };
      
      // Play video as soon as possible
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo);
      }
      
      return () => {
        video.removeEventListener('loadeddata', playVideo);
      };
    }
  }, []);

  // Natural scroll behavior - no interference
  useEffect(() => {
    // Remove all scroll intervention - let browser handle natural scrolling
    // Keep section tracking for button navigation only
    const handleScroll = () => {
      const sections = [
        heroSectionRef.current,
        portfolioSectionRef.current,
        mailingListSectionRef.current
      ];

      // Update current section based on natural scroll position (for button states)
      let newCurrentSection = 0;
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            newCurrentSection = index;
          }
        }
      });

      if (newCurrentSection !== currentSection) {
        setCurrentSection(newCurrentSection);
      }
    };

    // Use passive scroll listener for section tracking only
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  // Slideshow dragging functionality
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.classList.add('paused');
  };

  const handleMouseLeave = () => {
    if (!carouselRef.current) return;
    setIsDragging(false);
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('paused');
      }
    }, 2000); // Resume animation after 2 seconds
  };

  const handleMouseUp = () => {
    if (!carouselRef.current) return;
    setIsDragging(false);
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('paused');
      }
    }, 2000); // Resume animation after 2 seconds
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile carousel
  const handleCarouselTouchStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.classList.add('paused');
  };

  const handleCarouselTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCarouselTouchEnd = () => {
    if (!carouselRef.current) return;
    setIsDragging(false);
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('paused');
      }
    }, 2000);
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToMailingList = () => {
    document.getElementById('contact-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Main categories for navigation
  const mainCategories = [
    {
      id: 'art',
      title: 'Art',
      description: 'Visual expressions of identity and resistance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      link: '/art',
      subcategories: [
        {
          id: 'paintings',
          title: 'Paintings',
          link: '/art/paintings'
        },
        {
          id: 'murals',
          title: 'Murals',
          link: '/art/murals'
        },
        {
          id: 'illustrations',
          title: 'Illustrations',
          link: '/art/illustrations'
        },
        {
          id: 'collages',
          title: 'Collages',
          link: '/art/collages'
        }
      ]
    },
    {
      id: 'film',
      title: 'Film',
      description: 'Cinematic storytelling and visual narratives',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21L16 21"/>
          <path d="M12 17L12 21"/>
        </svg>
      ),
      link: '/film',
      subcategories: [
        {
          id: 'documentaries',
          title: 'Documentaries',
          link: '/film/documentaries'
        },
        {
          id: 'shortfilms',
          title: 'Short Films',
          link: '/film/short-films'
        },
        {
          id: 'microfilms',
          title: 'Micro Films',
          link: '/film/micro-films'
        }
      ]
    },
    {
      id: 'writing',
      title: 'Writing',
      description: 'Words that heal, resist, and transform',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      link: '/writing',
      subcategories: [
        {
          id: 'poetry',
          title: 'Poetry',
          link: '/writing/poetry'
        },
        {
          id: 'creative-writing',
          title: 'Creative Writing',
          link: '/writing/creative-writing'
        },
        {
          id: 'novel-writing',
          title: 'Novel Writing',
          link: '/writing/novel-writing'
        },
        {
          id: 'video-essays',
          title: 'Video Essays',
          link: '/writing/video-essays'
        }
      ]
    },
    {
      id: 'coding',
      title: 'Coding',
      description: 'Technology for liberation and social impact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M16 18L22 12L16 6"/>
          <path d="M8 6L2 12L8 18"/>
        </svg>
      ),
      link: '/resume',
      subcategories: [
        {
          id: 'technical-resume',
          title: 'Technical Resume',
          link: '/resume'
        },
        {
          id: 'creative-resume',
          title: 'Creative Resume',
          link: '/resume'
        }
      ]
    }
  ]

  // All portfolio items for slideshow (keeping original structure)
  const portfolioItems = [
    // Art Subcategories
    {
      id: 'paintings',
      title: 'Paintings',
      description: 'Canvas explorations of identity and resistance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      link: '/art/paintings'
    },
    {
      id: 'murals',
      title: 'Murals',
      description: 'Large-scale community art and storytelling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="M21 15L16 10L5 21"/>
        </svg>
      ),
      link: '/art/murals'
    },
    {
      id: 'illustrations',
      title: 'Illustrations',
      description: 'Digital art celebrating divine femininity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21.44 11.05L12.25 21.9C11.84 22.31 11.16 22.31 10.75 21.9L1.56 11.05C1.15 10.64 1.15 9.96 1.56 9.55L10.75 0.7C11.16 0.29 11.84 0.29 12.25 0.7L21.44 9.55C21.85 9.96 21.85 10.64 21.44 11.05Z"/>
        </svg>
      ),
      link: '/art/illustrations'
    },
    {
      id: 'collages',
      title: 'Collages',
      description: 'Mixed media narratives and compositions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      link: '/art/collages'
    },
    // Film Subcategories
    {
      id: 'documentaries',
      title: 'Documentaries',
      description: 'Truth-telling through cinematic storytelling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21L16 21"/>
          <path d="M12 17L12 21"/>
        </svg>
      ),
      link: '/film/documentaries'
    },
    {
      id: 'shortfilms',
      title: 'Short Films',
      description: 'Concise narratives with powerful impact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      ),
      link: '/film/short-films'
    },
    {
      id: 'microfilms',
      title: 'Micro Films',
      description: 'Brief moments of profound meaning',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10,8 16,12 10,16 10,8"/>
        </svg>
      ),
      link: '/film/micro-films'
    },
    // Writing Subcategories
    {
      id: 'poetry',
      title: 'Poetry',
      description: 'Verses of resistance and healing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      link: '/writing/poetry'
    },
    {
      id: 'creative-writing',
      title: 'Creative Writing',
      description: 'Imaginative prose and storytelling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 20H21"/>
          <path d="M16.5 3.5A2.121 2.121 0 0 1 19 6L7 18L3 19L4 15L16.5 3.5Z"/>
        </svg>
      ),
      link: '/writing/creative-writing'
    },
    {
      id: 'novel-writing',
      title: 'Novel Writing',
      description: 'Long-form narratives and world-building',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20"/>
          <path d="M6.5 2H20V22H6.5C5.837 22 5.201 21.737 4.732 21.268C4.263 20.799 4 20.163 4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z"/>
        </svg>
      ),
      link: '/writing/novel-writing'
    },
    {
      id: 'video-essays',
      title: 'Video Essays',
      description: 'Visual analysis and commentary',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M10 9L14 12L10 15V9Z"/>
        </svg>
      ),
      link: '/writing/video-essays'
    },
    // Technology
    {
      id: 'coding',
      title: 'Coding',
      description: 'Technology for liberation and social impact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M16 18L22 12L16 6"/>
          <path d="M8 6L2 12L8 18"/>
        </svg>
      ),
      link: '/resume'
    }
  ]

  /* Homescreen */
  return (
    <Layout language={language} setLanguage={setLanguage}>
    <div className="home-Container">
      {/* Video Background - Separate from content */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.55) contrast(1.1) saturate(1.9)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/about-1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <section className="hero-section" ref={heroSectionRef}>
        {/* Background with overlay */}

        {/* Hero content */}
        <main className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">
              MĀYĀ MURRY<br /><span className="studio-text">STUDIO</span>
            </h1>
            <p className="arabic-text">استوديو مايا مرعي</p>
            <p className="artist-bio">Interdisciplinary Artist • Filmmaker • Writer • Programmer</p>

            <div className="cta-buttons">
              <button onClick={scrollToPortfolio} className="cta-button secondary">
                Portfolio
              </button>
              <Link to="/about" className="cta-button white">
                About
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Contact
              </Link>
            </div>

            <Link to="/shop" className="shop-button">
              <span className="shop-button-text">SHOP</span>
              <div className="shop-button-gloss"></div>
            </Link>
          </div>
        </main>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio-section" 
        className="portfolio-section"
        ref={portfolioSectionRef}
      >
        <div className="portfolio-container">
          <div className="portfolio-header">
            <div className="section-indicator">
              <span className="indicator-dot"></span>
              <span className="indicator-text">Portfolio</span>
            </div>
            <h2 className="portfolio-title">My Portfolio</h2>
            <p className="portfolio-subtitle">
              Where I reimagine ways of living and being
            </p>

            {/* Main Category Navigation with Hover Dropdowns */}
            <div className="portfolio-nav-links">
              {mainCategories.map((category, index) => (
                <div key={category.id} className="portfolio-nav-category">
                  <Link
                    to={category.link}
                    className="portfolio-nav-link"
                  >
                    <div className="portfolio-nav-icon">
                      {category.icon}
                    </div>
                    <span className="portfolio-nav-text">{category.title}</span>
                  </Link>

                  {/* Subcategories Dropdown */}
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="portfolio-subcategories">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Link
                          key={subcategory.id}
                          to={subcategory.link}
                          className="portfolio-subcategory-link"
                        >
                          <span className="subcategory-title">{subcategory.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Slideshow */}
          <div className="portfolio-slideshow">
            <div
              className="portfolio-carousel"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleCarouselTouchStart}
              onTouchMove={handleCarouselTouchMove}
              onTouchEnd={handleCarouselTouchEnd}
            >
              {/* First set of items */}
              {portfolioItems.map((item, index) => (
                <Link
                  key={`first-${item.id}`}
                  to={item.link}
                  className="portfolio-slide"
                  style={{ '--slide-index': index }}
                >
                  <div className="portfolio-slide-content">
                    <div className="portfolio-icon">
                      {item.icon}
                    </div>
                    <h3 className="portfolio-slide-title">{item.title}</h3>
                    <p className="portfolio-slide-description">{item.description}</p>
                  </div>
                  <div className="portfolio-slide-glow"></div>
                </Link>
              ))}
              {/* Duplicate set for seamless loop */}
              {portfolioItems.map((item, index) => (
                <Link
                  key={`second-${item.id}`}
                  to={item.link}
                  className="portfolio-slide"
                  style={{ '--slide-index': index + portfolioItems.length }}
                >
                  <div className="portfolio-slide-content">
                    <div className="portfolio-icon">
                      {item.icon}
                    </div>
                    <h3 className="portfolio-slide-title">{item.title}</h3>
                    <p className="portfolio-slide-description">{item.description}</p>
                  </div>
                  <div className="portfolio-slide-glow"></div>
                </Link>
              ))}
              {/* Third set for extra smooth looping */}
              {portfolioItems.map((item, index) => (
                <Link
                  key={`third-${item.id}`}
                  to={item.link}
                  className="portfolio-slide"
                  style={{ '--slide-index': index + (portfolioItems.length * 2) }}
                >
                  <div className="portfolio-slide-content">
                    <div className="portfolio-icon">
                      {item.icon}
                    </div>
                    <h3 className="portfolio-slide-title">{item.title}</h3>
                    <p className="portfolio-slide-description">{item.description}</p>
                  </div>
                  <div className="portfolio-slide-glow"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mailing List Section */}
      <section id="contact-section" className="mailing-list-section" ref={mailingListSectionRef}>
        <div className="mailing-list-container">
          <div className="mailing-list-header">
            <div className="section-indicator">
              <span className="indicator-dot"></span>
              <span className="indicator-text">Stay Connected</span>
            </div>
            <h2 className="mailing-list-title">Join the Mailing List</h2>
            <p className="mailing-list-subtitle">
              Be the first to know about new artwork, exhibitions, film screenings, and creative projects
            </p>
          </div>

          {!subscribeSuccess ? (
            <form
              className="mailing-list-form"
              name="homepage-newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(new FormData(form)).toString()
                })
                  .then(() => {
                    setSubscribeSuccess(true)
                    setEmail('')
                  })
                  .catch((error) => console.error(error))
              }}
            >
              <input type="hidden" name="form-name" value="homepage-newsletter" />
              <div style={{ display: 'none' }}>
                <label htmlFor="bot-field">Don't fill this out if you're human:</label>
                <input name="bot-field" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mailing-list-input"
              />
              <button type="submit" className="mailing-list-button">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="success-message">
              ✓ Thank you for subscribing! You'll hear from me soon.
            </div>
          )}
        </div>
      </section>
      </div>
    </Layout>
  )
}