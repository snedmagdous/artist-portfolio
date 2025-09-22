// src/pages/film/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./film.module.css"

const FilmPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null); // Background video ref
  const videoRefs = useRef([]) // Content video refs
  
  // Background video setup - copy from working homepage
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);
  
  const filmCategories = [
    {
      id: 'documentaries',
      title: 'Documentaries',
      description: 'Long-form explorations of indigenous communities, environmental justice, and cultural preservation in the digital age.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/documentaries.MP4',
      count: '5 Films',
      duration: '15-45 min',
      link: '/film/documentaries',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Monitor/Screen */}
          <rect x="3" y="4" width="18" height="12" rx="1" fill="rgba(140, 140, 140, 0.2)"/>
          {/* Stand */}
          <path d="M10 16L14 16" strokeWidth="0.4"/>
          <path d="M12 16L12 18" strokeWidth="0.4"/>
          <rect x="10" y="18" width="4" height="1" rx="0.5" fill="rgba(140, 140, 140, 0.3)"/>
          {/* Film strip edges */}
          <rect x="5" y="6" width="1" height="8" fill="rgba(140, 140, 140, 0.4)"/>
          <rect x="18" y="6" width="1" height="8" fill="rgba(140, 140, 140, 0.4)"/>
          {/* Screen content area */}
          <rect x="8" y="7" width="8" height="6" rx="0.5" fill="rgba(140, 140, 140, 0.15)"/>
        </svg>
      )
    },
    {
      id: 'short-films',
      title: 'Short Films',
      description: 'Narrative and experimental works that blend traditional storytelling with speculative fiction and indigenous futurism.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/short-films.MP4',
      count: '12 Films',
      duration: '3-15 min',
      link: '/film/short-films',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Camera body - centered and larger */}
          <rect x="3" y="8" width="14" height="10" rx="1.5" fill="rgba(140, 140, 140, 0.2)"/>
          {/* Camera lens - centered */}
          <circle cx="10" cy="13" r="4" fill="rgba(140, 140, 140, 0.25)"/>
          <circle cx="10" cy="13" r="2.5" fill="rgba(140, 140, 140, 0.15)"/>
          <circle cx="10" cy="13" r="1" fill="rgba(140, 140, 140, 0.3)"/>
          {/* Film reel */}
          <circle cx="7" cy="5" r="2" fill="rgba(140, 140, 140, 0.3)"/>
          <circle cx="7" cy="5" r="0.5" fill="rgba(140, 140, 140, 0.4)"/>
          {/* Film strip */}
          <rect x="17" y="10" width="4" height="6" fill="rgba(140, 140, 140, 0.3)"/>
          <line x1="18" y1="11" x2="18" y2="15" stroke="rgba(140, 140, 140, 0.5)" strokeWidth="0.2"/>
          <line x1="20" y1="11" x2="20" y2="15" stroke="rgba(140, 140, 140, 0.5)" strokeWidth="0.2"/>
        </svg>
      )
    },
    {
      id: 'micro-films',
      title: 'Micro Films',
      description: 'Brief visual stories and digital experiments that capture moments of cultural significance in bite-sized formats.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/micro-films.mp4',
      count: '24 Films',
      duration: '15-60 sec',
      link: '/film/micro-films',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Phone frame */}
          <rect x="7" y="3" width="10" height="18" rx="2" fill="rgba(140, 140, 140, 0.2)"/>
          {/* Screen */}
          <rect x="8" y="5" width="8" height="14" rx="1" fill="rgba(140, 140, 140, 0.15)"/>
          {/* Video content area */}
          <rect x="9" y="8" width="6" height="8" rx="0.5" fill="rgba(140, 140, 140, 0.25)"/>
          {/* Record indicator */}
          <circle cx="10" cy="7" r="0.3" fill="rgba(180, 80, 80, 0.6)"/>
          {/* Progress bar */}
          <rect x="9" y="16" width="6" height="0.5" rx="0.25" fill="rgba(140, 140, 140, 0.3)"/>
        </svg>
      )
    }
  ]

  // Handle video hover play/pause (only for non-YouTube videos)
  const handleVideoHover = (index, isHovering) => {
    const category = filmCategories[index]
    if (category.videoSrc.includes('youtube.com/embed')) {
      return // Skip hover functionality for YouTube embeds
    }
    
    const video = videoRefs.current[index]
    if (video) {
      if (isHovering) {
        // Reset video to beginning and play
        video.currentTime = 0
        video.play().catch(e => console.log("Video play failed:", e))
      } else {
        // Pause and reset to beginning
        video.pause()
        video.currentTime = 0
      }
    }
  }

  // Set up videos with proper properties
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        // Ensure videos are muted for autoplay policies
        video.muted = true
        video.loop = false // We'll control looping manually
        video.preload = 'metadata'
        
        // Add event listener for when video ends
        const handleVideoEnd = () => {
          video.currentTime = 0
        }
        
        video.addEventListener('ended', handleVideoEnd)
        
        // Cleanup event listener
        return () => {
          video.removeEventListener('ended', handleVideoEnd)
        }
      }
    })
  }, [])
  
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
            filter: 'brightness(0.40) contrast(1.0) saturate(1.2)'
          }}
        >
          {/* Using the film video URL from your index.js */}
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/film.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.filmCategoriesPage}>
        <div className={styles.filmHeroSection}>
          <h1 className={styles.filmMainTitle}>Film Portfolio</h1>
          <p className={styles.filmSubtitle}>
            Visual storytelling that weaves indigenous narratives with futuristic possibilities
          </p>
        </div>

        <div className={styles.categoriesContainer}>
          <div className={styles.filmGrid}>
            {filmCategories.map((category, index) => (
              <Link 
                key={category.id}
                to={category.link}
                className={styles.filmCard}
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
              >
                <div className={styles.filmVideoContainer}>
                  {category.videoSrc.includes('youtube.com/embed') ? (
                    <iframe
                      src={`${category.videoSrc}?autoplay=0&mute=1&loop=1&controls=0&showinfo=0&rel=0`}
                      className={styles.filmVideo}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      style={{
                        filter: 'brightness(0.8) contrast(0.9)',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  ) : (
                    <video
                      ref={el => videoRefs.current[index] = el}
                      muted
                      playsInline
                      preload="metadata"
                      className={styles.filmVideo}
                      style={{
                        filter: 'brightness(0.8) contrast(0.9)'
                      }}
                    >
                      <source src={category.videoSrc} type="video/mp4" />
                    </video>
                  )}

                  <div className={styles.filmVideoContent}>
                    <div className={styles.filmIcon}>
                      {category.icon}
                    </div>

                    <div className={styles.filmVideoOverlay}>
                      <div className={styles.filmCount}>{category.count}</div>
                      <div className={styles.filmDuration}>{category.duration}</div>
                    </div>

                  </div>
                </div>
                
                <div className={styles.filmContent}>
                  <h3 className={styles.filmTitle}>{category.title}</h3>
                  <p className={styles.filmDescription}>{category.description}</p>
                  
                  <div className={styles.filmCTA}>
                    <span className={styles.viewFilmsBtn}>
                      Explore Films
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.filmStatement}>
          <h3 className={styles.statementTitle}>Director's Vision</h3>
          <div className={styles.statementContent}>
            <p>
              Through film, I explore how indigenous stories can reshape our understanding of time, 
              technology, and possibility. Each project is an invitation to reimagine the future 
              through the lens of ancestral wisdom.
            </p>
            <p>
              My work spans from intimate documentaries that preserve cultural knowledge to 
              speculative narratives that envision indigenous-led futures, always asking: 
              what worlds become possible when we center generations of resiliences in our storytelling?
            </p>
            <span className={styles.statementSignature}>— Māyā Murry, Director</span>
          </div>
        </div>

        <div className={styles.collaborationNote}>
          <div className={styles.noteContent}>
            <h4 className={styles.noteTitle}>Collaboration & Community</h4>
            <p>
              Every film project prioritizes community collaboration, ensuring that stories are told 
              with consent, respect, and shared ownership. 
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FilmPage