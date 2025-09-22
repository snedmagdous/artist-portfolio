// src/pages/art/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./art.module.css"

const ArtPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null);
  
  // Copy the exact video setup from your working homepage
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);
  
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
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/art.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>



      <section className={styles.artCategoriesPage}>
        <div className={styles.artHeroSection}>
          <h1 className={styles.artMainTitle}>Art Portfolio</h1>
          <p className={styles.artSubtitle}>Exploring Indigenous Futurism through visual arts</p>
        </div>

        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesGrid}>
            {artCategories.map((category, index) => (
              category.comingSoon ? (
                <div
                  key={category.id}
                  className={`${styles.categoryCard} ${styles.comingSoonCard}`}
                >
                  <div className={styles.categoryContent}>
                    {category.icon}
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <p className={styles.comingSoonText}>
                      Coming Soon<span className={styles.blinkingDots}>...</span>
                    </p>
                  </div>
                </div>
              ) : (
                <Link
                  key={category.id}
                  to={category.link}
                  className={styles.categoryCard}
                >
                  <div className={styles.categoryContent}>
                    {category.icon}
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ArtPage