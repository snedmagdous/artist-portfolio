// src/pages/art/paintings/index.js
// Create this file in: src/pages/art/paintings/index.js

import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../art.module.css"

const PaintingsPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredSeries, setHoveredSeries] = useState(null)
  const videoRefs = useRef({})
  
  const paintingSeries = [
    {
      id: 'ancestral-visions',
      title: 'Ancestral Visions',
      description: 'A series exploring the connection between past and future through traditional imagery merged with futuristic elements. Each canvas becomes a portal where ancestral wisdom meets technological possibility.',
      pieceCount: 4,
      year: '2024',
      medium: 'Oil on Canvas',
      status: 'completed',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/ancestral-visions.MP4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.seriesIcon}>
          <circle cx="12" cy="12" r="4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1V3" strokeWidth="1" strokeLinecap="round"/>
          <path d="M12 21V23" strokeWidth="1" strokeLinecap="round"/>
          <path d="M4.22 4.22L5.64 5.64" strokeWidth="1" strokeLinecap="round"/>
          <path d="M18.36 18.36L19.78 19.78" strokeWidth="1" strokeLinecap="round"/>
          <path d="M1 12H3" strokeWidth="1" strokeLinecap="round"/>
          <path d="M21 12H23" strokeWidth="1" strokeLinecap="round"/>
          <path d="M4.22 19.78L5.64 18.36" strokeWidth="1" strokeLinecap="round"/>
          <path d="M18.36 5.64L19.78 4.22" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'digital-ceremony',
      title: 'Digital Ceremony',
      description: 'Traditional ceremonies reimagined in digital spaces, questioning the nature of sacred practice in virtual worlds. These works explore how ritual and technology can coexist in harmony.',
      pieceCount: 3,
      year: '2023',
      medium: 'Oil & Acrylic on Canvas',
      status: 'ongoing',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/dig-ceremony.MP4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.seriesIcon}>
          <circle cx="12" cy="12" r="10" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12L10 10L12 12L14 10L16 12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V6" strokeWidth="1" strokeLinecap="round"/>
          <path d="M12 18V22" strokeWidth="1" strokeLinecap="round"/>
          <path d="M4.93 4.93L7.76 7.76" strokeWidth="1" strokeLinecap="round"/>
          <path d="M16.24 16.24L19.07 19.07" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'in-image-queens',
      title: 'In the Image of My Queens, I Stand',
      description: 'Dreamtime stories told through neon colors and cyberpunk aesthetics, bridging ancient wisdom with modern technology. Fluorescent pigments illuminate traditional narratives.',
      pieceCount: 3,
      year: '2025',
      medium: 'Oil on Canvas',
      status: 'ongoing',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/my-queens.MP4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.seriesIcon}>
          <path d="M6 9L12 2L18 9" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 22H19" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 22V18C8 16.8954 8.89543 16 10 16H14C15.1046 16 16 16.8954 16 18V22" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="5.5" r="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="15" cy="7" r="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 12L12 9L17 12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    // {
    //   id: 'take-back-mine',
    //   title: 'I take back what is mine',
    //   description: 'Spiritual beings existing in quantum realms, exploring how indigenous spirituality might manifest in future dimensions. Each painting captures energy in motion.',
    //   pieceCount: 5,
    //   year: '2024',
    //   medium: 'Oil on Canvas',
    //   videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/my-queens.MP4',
    //   icon: (
    //     <svg viewBox="0 0 24 24" fill="none" className={styles.seriesIcon}>
    //       <path d="M12 2L22 12L12 22L2 12L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    //       <path d="M12 8L16 12L12 16L8 12L12 8Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    //       <path d="M12 2V8" strokeWidth="1" strokeLinecap="round"/>
    //       <path d="M12 16V22" strokeWidth="1" strokeLinecap="round"/>
    //       <path d="M2 12H8" strokeWidth="1" strokeLinecap="round"/>
    //       <path d="M16 12H22" strokeWidth="1" strokeLinecap="round"/>
    //     </svg>
    //   )
    // },
    {
      id: 'mamma-im-fine',
      title: 'Mamma, I\'m Fine',
      description: 'A powerful single piece exploring the complex emotions of reassurance and vulnerability, inspired by personal poetry and community murals that speak to the immigrant experience.',
      pieceCount: 1,
      year: '2024',
      medium: 'Oil on Canvas',
      status: 'ongoing',
      comingSoon: true,
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/art.MP4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.seriesIcon}>
          <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.5C14.76 2.5 13.25 3.42 12 4.84C10.75 3.42 9.24 2.5 7.5 2.5A5.5 5.5 0 0 0 3.16 4.61C2.42 5.35 2 6.36 2 7.5C2 8.64 2.42 9.65 3.16 10.39L12 19.23L20.84 10.39C21.58 9.65 22 8.64 22 7.5C22 6.36 21.58 5.35 20.84 4.61Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12" strokeWidth="1" strokeLinecap="round"/>
          <path d="M9 9L15 9" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  const handleMouseEnter = (seriesId) => {
    setHoveredSeries(seriesId)
    const video = videoRefs.current[seriesId]
    if (video) {
      video.play().catch(e => console.log('Video play failed:', e))
    }
  }

  const handleMouseLeave = (seriesId) => {
    setHoveredSeries(null)
    const video = videoRefs.current[seriesId]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <Layout 
        language={language} 
        setLanguage={setLanguage}
        hasVideoBackground={true}
        videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/paintings.MP4"
        videoStyle={{
            filter: 'brightness(0.4) contrast(1.1) saturate(1.15)' // Makes video 40% darker
        }}
    >
      <section className={styles.subPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art" className={styles.backLink}>
            Back to Art Categories
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Paintings</h1>
          <p className={styles.subPageSubtitle}>
            Expressive canvas works exploring identity and tradition through the lens of indigenous futurism
          </p>
        </div>

        {/* Series Grid */}
        <div className={styles.seriesContainer}>
          <h2 className={styles.seriesHeading}>Painting Series</h2>
          <div className={styles.seriesGrid}>
            {paintingSeries.map((series, index) => (
              series.comingSoon ? (
                <div
                  key={series.id}
                  className={`${styles.seriesCard} ${styles.comingSoonCard}`}
                >
                  <div className={styles.seriesImagePlaceholder}>
                    {/* Status Badge */}
                    <span className={`${styles.statusBadge} ${styles[series.status]}`}>
                      {series.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>

                    {/* Series-specific icon */}
                    {series.icon}

                    <div className={styles.imageOverlay}>
                      <span className={styles.pieceCount}>{series.pieceCount} pieces</span>
                      <span className={styles.seriesYear}>{series.year}</span>
                    </div>
                  </div>

                  <div className={styles.seriesContent}>
                    <h3 className={styles.seriesTitle}>{series.title}</h3>
                    <div className={styles.seriesMeta}>
                      <span className={styles.seriesMedium}>{series.medium}</span>
                    </div>
                    <p className={styles.seriesDescription}>{series.description}</p>
                    <p className={styles.comingSoonText}>
                      Coming Soon<span className={styles.blinkingDots}>...</span>
                    </p>
                  </div>
                </div>
              ) : (
                <Link
                  key={series.id}
                  to={`/art/paintings/${series.id}`}
                  className={styles.seriesCard}
                  onMouseEnter={() => handleMouseEnter(series.id)}
                  onMouseLeave={() => handleMouseLeave(series.id)}
                >
                  <div className={styles.seriesImagePlaceholder}>
                    {/* Status Badge */}
                    <span className={`${styles.statusBadge} ${styles[series.status]}`}>
                      {series.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>

                    {/* Video Background */}
                    <video
                      ref={el => videoRefs.current[series.id] = el}
                      className={`${styles.hoverVideo} ${hoveredSeries === series.id ? styles.videoVisible : ''}`}
                      muted
                      loop
                      playsInline
                    >
                      <source src={series.videoSrc} type="video/mp4" />
                    </video>

                    {/* Series-specific icon */}
                    {series.icon}

                    <div className={styles.imageOverlay}>
                      <span className={styles.pieceCount}>{series.pieceCount} pieces</span>
                      <span className={styles.seriesYear}>{series.year}</span>
                    </div>
                  </div>

                  <div className={styles.seriesContent}>
                    <h3 className={styles.seriesTitle}>{series.title}</h3>
                    <div className={styles.seriesMeta}>
                      <span className={styles.seriesMedium}>{series.medium}</span>
                    </div>
                    <p className={styles.seriesDescription}>{series.description}</p>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <div className={styles.statementContent}>
            <h3 className={styles.statementTitle}>Artist Statement</h3>
            <div className={styles.statementText}>
              <p>
                My paintings serve as bridges between worlds—ancestral and futuristic, traditional and technological, 
                sacred and digital. Through canvas and pigment, I explore how indigenous wisdom can inform and 
                transform our understanding of future possibilities.
              </p>
              <p>
                Each brushstroke carries the weight of history while reaching toward tomorrow. In this practice, 
                I find that the oldest stories become the most radical visions of what could be.
              </p>
            </div>
            <div className={styles.statementSignature}>
              <span>— Māyā Murry</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PaintingsPage