// src/pages/writing/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./writing.module.css"

const WritingPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null);
  
  // Background video setup - copy from working homepage
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);
  
  const writingCategories = [
    {
      id: 'poetry',
      title: 'Poetry',
      description: 'Verses exploring identity, heritage, and transformation',
      link: '/writing/poetry',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 17H12" strokeWidth="1" strokeLinecap="round"/>
          <path d="M10 9H12" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="8" cy="9" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 'creative-writing',
      title: 'Creative Writing',
      description: 'Short stories and experimental narratives',
      link: '/writing/creative-writing',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7H16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 11H16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 15H12" strokeWidth="1" strokeLinecap="round"/>
          <path d="M15 13L17 15L15 17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'novel-writing',
      title: 'Novel Writing',
      description: 'Long-form fiction blending tradition and future',
      link: '/writing/novel-writing',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6H16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M9 10H16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M9 14H13" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'video-essays',
      title: 'Video Essays',
      description: 'Visual storytelling and cultural commentary',
      link: '/writing/video-essays',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21L16 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17L12 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <polygon points="10,8 16,12 10,16" fill="currentColor"/>
          <path d="M6 19H18" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    }
  ]
  
  return (
    // Turn off layout video system, use homepage system instead
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
            filter: 'brightness(0.45) contrast(1.1) saturate(1.1)'
          }}
        >
          {/* Using the writing video URL from your index.js */}
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/writing.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.writingCategoriesPage}>
        <div className={styles.writingHeroSection}>
          <h1 className={styles.writingMainTitle}>Writing Portfolio</h1>
          <p className={styles.writingSubtitle}>Stories that bridge worlds through words and vision</p>
        </div>

        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesGrid}>
            {writingCategories.map((category, index) => (
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
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WritingPage