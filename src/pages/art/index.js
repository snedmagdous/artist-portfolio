// src/pages/art/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./art.module.css"

const ArtPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null);

  // Scroll snapping state and refs
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const heroSectionRef = useRef(null);
  const categoriesSectionRef = useRef(null);

  // Copy the exact video setup from your working homepage
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  // Scroll snapping functionality
  useEffect(() => {
    const sections = [
      heroSectionRef.current,
      categoriesSectionRef.current
    ];

    let ticking = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();

      if (!ticking) {
        requestAnimationFrame(() => {
          const deltaY = e.deltaY;
          let newSection = currentSection;

          if (deltaY > 0 && currentSection < sections.length - 1) {
            // Scroll down
            newSection = currentSection + 1;
          } else if (deltaY < 0 && currentSection > 0) {
            // Scroll up
            newSection = currentSection - 1;
          }

          if (newSection !== currentSection) {
            setIsScrolling(true);
            setCurrentSection(newSection);

            // Smooth scroll to section
            if (sections[newSection]) {
              sections[newSection].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }

            // Reset scrolling state after animation
            setTimeout(() => {
              setIsScrolling(false);
            }, 1000); // 1 second delay to allow smooth scroll
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Add wheel event listener
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Handle touch events for mobile
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;

      endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50) { // Minimum swipe distance
        let newSection = currentSection;

        if (deltaY > 0 && currentSection < sections.length - 1) {
          // Swipe up (scroll down)
          newSection = currentSection + 1;
        } else if (deltaY < 0 && currentSection > 0) {
          // Swipe down (scroll up)
          newSection = currentSection - 1;
        }

        if (newSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(newSection);

          if (sections[newSection]) {
            sections[newSection].scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }

          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling]);

  // Featured Art Gallery - Curated selection of best pieces
  const featuredArtworks = [
    {
      id: 'moon-daughter',
      title: 'Moon Daughter',
      year: '2024',
      image: '/images/paintings/ancestral/moon-daughter.JPEG',
      link: '/art/paintings',
      category: 'Paintings'
    },
    {
      id: 'my-queens-mural',
      title: 'My Queens',
      year: '2023',
      image: '/images/murals/my-queens/final.JPEG',
      link: '/art/murals',
      category: 'Murals'
    },
    {
      id: 'where-blue',
      title: 'Blue',
      year: '2024',
      image: '/images/illustration/where/blue.JPEG',
      link: '/art/illustrations',
      category: 'Illustrations'
    },
    {
      id: 'throne-of-fire',
      title: 'Throne of Fire',
      year: '2024',
      image: '/images/paintings/ancestral/throne-of-fire.JPEG',
      link: '/art/paintings',
      category: 'Paintings'
    },
    {
      id: 'atlas-collage',
      title: 'Atlas',
      year: '2024',
      image: '/images/collage/atlas/final.jpg',
      link: '/art/collages',
      category: 'Collages'
    },
    {
      id: 'love-rev-mural',
      title: 'Love as Revolution',
      year: '2023',
      image: '/images/murals/love-rev/final.JPEG',
      link: '/art/murals',
      category: 'Murals'
    },
    {
      id: 'portrait-michelle',
      title: 'Michelle',
      year: '2024',
      image: '/images/portraits/michelle.JPEG',
      link: '/art/paintings',
      category: 'Paintings'
    },
    {
      id: 'where-pink',
      title: 'Pink',
      year: '2024',
      image: '/images/illustration/where/pink.JPEG',
      link: '/art/illustrations',
      category: 'Illustrations'
    },
    {
      id: 'queens-mirror',
      title: 'Mirror',
      year: '2024',
      image: '/images/paintings/queens/mirror.JPEG',
      link: '/art/paintings',
      category: 'Paintings'
    },
    {
      id: 'monster-collage',
      title: 'Monster',
      year: '2024',
      image: '/images/collage/monster/final.jpg',
      link: '/art/collages',
      category: 'Collages'
    },
    {
      id: 'tikkun-mural',
      title: 'Tikkun Olam',
      year: '2023',
      image: '/images/murals/tikkun/final.JPEG',
      link: '/art/murals',
      category: 'Murals'
    },
    {
      id: 'ancestral-painting',
      title: 'Ancestral',
      year: '2024',
      image: '/images/paintings/ancestral/ancestral.JPEG',
      link: '/art/paintings',
      category: 'Paintings'
    }
  ]

  const artCategories = [
    {
      id: 'paintings',
      title: 'Paintings',
      description: 'Expressive canvas works exploring identity and tradition',
      link: '/art/paintings',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 17L12 12L2 17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 7L12 12L22 7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'collages',
      title: 'Collages',
      description: 'Mixed media pieces blending past and future',
      link: '/art/collages',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="7" height="7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="3" width="7" height="7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="14" width="7" height="7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="14" width="7" height="7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 6.5H14" strokeWidth="1" strokeLinecap="round"/>
          <path d="M6.5 10V14" strokeWidth="1" strokeLinecap="round"/>
          <path d="M17.5 10V14" strokeWidth="1" strokeLinecap="round"/>
          <path d="M10 17.5H14" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'illustrations',
      title: 'Illustrations',
      description: 'Digital and traditional storytelling artworks',
      link: '/art/illustrations',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 3H21V7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 3L12 12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15L21 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L3 3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="7" r="3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10V16C7 18.2091 8.79086 20 11 20H16" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'murals',
      title: 'Murals',
      description: 'Large-scale public art celebrating community',
      link: '/art/murals',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="4" width="20" height="16" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 8H22" strokeWidth="1" strokeLinecap="round"/>
          <path d="M2 12H22" strokeWidth="1" strokeLinecap="round"/>
          <path d="M2 16H22" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 4V20" strokeWidth="1" strokeLinecap="round"/>
          <path d="M16 4V20" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="12" cy="10" r="1" fill="currentColor"/>
          <circle cx="12" cy="14" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'installation',
      title: 'Installation',
      description: 'Immersive spatial experiences and environments',
      link: '/art/installation',
      comingSoon: true,
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="7" width="18" height="11" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V18" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 10V15" strokeWidth="1" strokeLinecap="round"/>
          <path d="M16 10V15" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="12" cy="21" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'performance',
      title: 'Performance',
      description: 'Live art exploring movement and presence',
      link: '/art/performance',
      comingSoon: true,
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L12 8L16 12L12 16Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V6" strokeWidth="1" strokeLinecap="round"/>
          <path d="M12 18V22" strokeWidth="1" strokeLinecap="round"/>
          <path d="M2 12H6" strokeWidth="1" strokeLinecap="round"/>
          <path d="M18 12H22" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    }
  ]
  
  return (
    // Remove ALL video background props from Layout - we'll handle it ourselves
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={false} // Turn off layout video system
    >
      {/* Use the EXACT same video system as your working homepage */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.67) contrast(1.04) saturate(1.8)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/art_pingpong_optimized.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>



      <section className={styles.artCategoriesPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/portfolio" className={styles.backLink}>
            Back to Portfolio
          </Link>
        </div>

        <div ref={heroSectionRef} className={styles.artHeroSection}>
          <h1 className={styles.artMainTitle}>Art Portfolio</h1>
          <p className={styles.artSubtitle}>Coming Soon</p>
          <p className={styles.comingSoonMessage}>
            This section is currently being curated. Check back soon to explore my visual artworks.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default ArtPage