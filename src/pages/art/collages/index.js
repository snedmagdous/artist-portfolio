// src/pages/art/collages/index.js

import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../art.module.css"

const CollagesPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredCard, setHoveredCard] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  const videoRefs = useRef({})
  
  const collageCollections = [
    {
      id: 'transformation',
      title: 'Critical Conversations for Transformation',
      description: 'Multilingual collages incorporating text in indigenous languages alongside programming code, exploring communication across cultures and technologies.',
      year: '2025',
      medium: 'Paper, Text & Digital Prints',
      status: 'Available',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/trans.MP4',
      videoFilter: 'brightness(0.55) contrast(1.2) saturate(1.5)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="4" width="8" height="6" rx="1" fill="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          <rect x="14" y="12" width="8" height="8" rx="1" fill="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
          <path d="M4 6h4M4 7h3M4 8h5" strokeWidth="0.2" opacity="0.7"/>
          <path d="M16 14h4M16 15h2M16 16h5M16 17h3" strokeWidth="0.2" opacity="0.7"/>
          <circle cx="6" cy="15" r="0.5" fill="rgba(255,255,255,0.3)"/>
          <path d="M8 14c1 0 2 1 2 2s-1 2-2 2" strokeWidth="0.3" fill="none" opacity="0.6"/>
          <path d="M11 15h2M11 16h1" strokeWidth="0.2" opacity="0.5"/>
          <path d="M10 7l4 5" strokeWidth="0.2" opacity="0.4" strokeDasharray="1,1"/>
        </svg>
      )
    },
    {
      id: 'atlas',
      title: 'Atlas of the Body',
      description: 'Piecing together cultural memories through layered materials, photographs, and traditional elements. Each collage reconstructs stories that bridge generations.',
      year: '2022',
      medium: 'Mixed Media on Paper',
      status: 'Available',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/atlas.MP4',
      videoFilter: 'brightness(0.45) contrast(1.1) saturate(1.15)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Memory fragments - scattered photo pieces */}
          <rect x="3" y="4" width="6" height="4" rx="1" fill="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <rect x="15" y="2" width="5" height="3" rx="0.5" fill="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
          <rect x="2" y="11" width="4" height="6" rx="0.5" fill="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          <rect x="12" y="8" width="7" height="5" rx="1" fill="rgba(255,255,255,0.25)" strokeWidth="0.5"/>
          <rect x="8" y="16" width="5" height="4" rx="0.5" fill="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
          {/* Connection lines showing memories linking */}
          <path d="M6 8L12 11" strokeWidth="0.3" opacity="0.6"/>
          <path d="M17 5L15 8" strokeWidth="0.3" opacity="0.6"/>
          <path d="M6 14L8 16" strokeWidth="0.3" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 'monster',
      title: 'An Introduction to the Monster in all of uS',
      description: 'Excavating meaning from discarded technology, weaving circuit boards with traditional textiles to explore the relationship between old and new.',
      year: '2022',
      medium: 'Magazines & prisma colors',
      status: 'Available',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/monster.MP4',
      videoFilter: 'brightness(0.45) contrast(1.2) saturate(1.1)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Circuit board pattern */}
          <rect x="4" y="4" width="16" height="16" rx="2" fill="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          {/* Circuit traces */}
          <path d="M6 8h4M14 8h4M6 12h2M10 12h8M6 16h6M14 16h4" strokeWidth="0.4" opacity="0.8"/>
          {/* Components */}
          <rect x="8" y="7" width="2" height="2" fill="rgba(255,255,255,0.3)" strokeWidth="0.3"/>
          <circle cx="16" cy="12" r="1" fill="rgba(255,255,255,0.25)"/>
          <rect x="12" y="15" width="2" height="2" fill="rgba(255,255,255,0.2)" strokeWidth="0.3"/>
          {/* Traditional textile pattern overlay */}
          <path d="M2 2l4 4M18 2l4 4M2 18l4-4M18 18l4-4" strokeWidth="0.3" opacity="0.4"/>
        </svg>
      )
    },
    {
      id: 'rage',
      title: 'Rage',
      description: 'A visceral exploration of American anger, layering political imagery, classical art, and media fragments to examine how rage functions as both destructive force and catalyst for change in contemporary society.',
      year: '2023',
      medium: 'Maps, Photos & Pen',
      status: 'Available',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/rag.MP4',
      videoFilter: 'brightness(0.7) contrast(1.5) saturate(1.4) sepia(0.1)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          {/* Map base */}
          <path d="M3 6l6-3l6 3l6-3v15l-6 3l-6-3l-6 3V6z" fill="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          {/* Temporal layers */}
          <circle cx="8" cy="10" r="2" fill="rgba(255,255,255,0.15)" strokeWidth="0.4"/>
          <circle cx="16" cy="8" r="1.5" fill="rgba(255,255,255,0.2)" strokeWidth="0.3"/>
          <circle cx="12" cy="14" r="1.8" fill="rgba(255,255,255,0.12)" strokeWidth="0.4"/>
          {/* Time lines connecting territories */}
          <path d="M8 12c2-1 4 1 6-2" strokeWidth="0.3" opacity="0.6" fill="none"/>
          <path d="M10 8c1 2 3 0 5 3" strokeWidth="0.3" opacity="0.6" fill="none"/>
          {/* Indigenous markers */}
          <path d="M7 9l2 2M15 7l2 2M11 13l2 2" strokeWidth="0.2" opacity="0.7"/>
        </svg>
      )
    }
  ]

  // Handle hover effects and image cycling
  useEffect(() => {
    let interval = null
    if (hoveredCard) {
      const collection = collageCollections.find(c => c.id === hoveredCard)
      if (collection && collection.images && collection.images.length > 1) {
        interval = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [hoveredCard]: ((prev[hoveredCard] || 0) + 1) % collection.images.length
          }))
        }, 1500) // Change image every 1500ms
      }
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [hoveredCard, collageCollections])

  const handleCardEnter = (collectionId) => {
    setHoveredCard(collectionId)
    setCurrentImageIndex(prev => ({
      ...prev,
      [collectionId]: 0
    }))

    // Play video on hover
    const video = videoRefs.current[collectionId]
    if (video) {
      video.play().catch(e => console.log('Video play failed:', e))
    }
  }

  const handleCardLeave = () => {
    setHoveredCard(null)

    // Pause and reset all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    })
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/collage.MP4"
      videoStyle={{
      filter: 'brightness(0.64) contrast(1.01) saturate(1.3)' 
    }}
    >
      <section className={styles.subPage}>
        <div className={styles.backNavigation}>
          <Link to="/art" className={styles.backLink}>
            Back to Art Categories
          </Link>
        </div>

        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Collages</h1>
          <p className={styles.subPageSubtitle}>
            Mixed media pieces blending past and future through layered storytelling and material exploration
          </p>
        </div>

        <div className={styles.techniqueSpotlight}>
          <h3 className={styles.spotlightTitle}>When the Body Remembers What the Mind Cannot</h3>
          <div className={styles.spotlightContent}>
            <p>
              When chronic pain consumed my body in 2020, creativity became a foreign language I could no longer speak.
              For years, chronic pain made all familiar forms of expression completely inaccessible—
              my body yearning for creation while simultaneously rejecting every attempt to reach toward it.
            </p>
            <p>
              Yet in this void, an alternative practice emerged: collaging. When I couldn't pick up anything else,
              collaging became my only means to document what I was experiencing when everything else had shut down. 
              In my state of bodily and spritiual pain, collaging allowed me to create outside of time.
            </p>
          </div>
        </div>

        <div className={styles.seriesContainer}>
          <h2 className={styles.seriesHeading}>Collage Collections</h2>
          <div className={styles.collageGrid}>
            {collageCollections.map((collection, index) => (
              <React.Fragment key={collection.id}>
                {collection.status === 'Available' ? (
                  <Link
                    to={`/art/collages/${collection.id}`}
                    className={`${styles.collageCard} ${styles[`collageCard${(index % 3) + 1}`]}`}
                    onMouseEnter={() => handleCardEnter(collection.id)}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className={styles.collageImageArea}>
                      {/* Video (always rendered, opacity controlled) */}
                      {collection.videoSrc && (
                        <video
                          ref={el => videoRefs.current[collection.id] = el}
                          muted
                          loop
                          playsInline
                          className={styles.hoverVideo}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 2,
                            opacity: hoveredCard === collection.id ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out',
                            filter: collection.videoFilter || 'brightness(0.8) contrast(1.1) saturate(1.2)'
                          }}
                        >
                          <source src={collection.videoSrc} type="video/mp4" />
                        </video>
                      )}

                      {/* Icon (hidden when video is showing) */}
                      <div
                        className={styles.collageIcon}
                        style={{
                          opacity: hoveredCard === collection.id && collection.videoSrc ? 0 : 1,
                          transition: 'opacity 0.8s ease-in-out'
                        }}
                      >
                        {collection.icon}
                      </div>

                      <div className={styles.collageOverlay}>
                        <span className={styles.collageSize}>{collection.size}</span>
                        <span className={styles.collageCount}>{collection.pieceCount}</span>
                      </div>
                    </div>

                    <div className={styles.collageContent}>
                      <h3 className={styles.collageTitle}>{collection.title}</h3>
                      <div className={styles.collageMeta}>
                        <span className={styles.collageMedium}>{collection.medium}</span>
                        <span className={styles.collageYear}>{collection.year}</span>
                      </div>
                      <p className={styles.collageDescription}>{collection.description}</p>

                      <div className={styles.viewCollectionBtn}>
                        View Collection
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`${styles.collageCard} ${styles[`collageCard${(index % 3) + 1}`]}`}
                    onMouseEnter={() => handleCardEnter(collection.id)}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className={styles.collageImageArea}>
                      {/* Video (always rendered, opacity controlled) */}
                      {collection.videoSrc && (
                        <video
                          ref={el => videoRefs.current[collection.id] = el}
                          muted
                          loop
                          playsInline
                          className={styles.hoverVideo}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 2,
                            opacity: hoveredCard === collection.id ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out',
                            filter: collection.videoFilter || 'brightness(0.8) contrast(1.1) saturate(1.2)'
                          }}
                        >
                          <source src={collection.videoSrc} type="video/mp4" />
                        </video>
                      )}

                      {/* Icon (hidden when video is showing) */}
                      <div
                        className={styles.collageIcon}
                        style={{
                          opacity: hoveredCard === collection.id && collection.videoSrc ? 0 : 1,
                          transition: 'opacity 0.8s ease-in-out'
                        }}
                      >
                        {collection.icon}
                      </div>

                      <div className={styles.collageOverlay}>
                        <span className={styles.collageSize}>{collection.size}</span>
                        <span className={styles.collageCount}>{collection.pieceCount}</span>
                      </div>
                    </div>

                    <div className={styles.collageContent}>
                      <h3 className={styles.collageTitle}>{collection.title}</h3>
                      <div className={styles.collageMeta}>
                        <span className={styles.collageMedium}>{collection.medium}</span>
                        <span className={styles.collageYear}>{collection.year}</span>
                      </div>
                      <p className={styles.collageDescription}>{collection.description}</p>

                      <button className={styles.comingSoonBtn} disabled>
                        Coming Soon<span className={styles.blinkingDots}>...</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Insert second part of technique spotlight after first two cards */}
                {index === 1 && (
                  <div className={styles.techniqueSpotlight} style={{gridColumn: '1 / -1', margin: '2rem auto', maxWidth: '800px'}}>
                    <div className={styles.spotlightContent}>
                      <p>
                        In many of these pieces, I exist outside of my body and thus outside of time—watching, watching, watching,
                        and sometimes remembering to breathe before diving back up for air. Every collage was almost always completed
                        in one sitting, until again, I could come up for air, having finally captured the image I was seeing in this
                        realm, trying to process the world I was living in versus the world I yearned to see built.
                      </p>
                      <span className={styles.spotlightSignature}>— On surviving through making, 2020-2025</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default CollagesPage