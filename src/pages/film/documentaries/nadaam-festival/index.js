// src/pages/film/documentaries/mongolian-nadaam-festival/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./nadaam.module.css"

const MongolianNadaamPage = () => {
  const [language, setLanguage] = useState('EN')
  const [showVideoModal, setShowVideoModal] = useState(false)

  const documentaryData = {
    title: 'Mongolian Nadaam Festival',
    year: '2025',
    duration: 'TBD',
    format: 'Documentary',
    role: 'Director, Cinematographer',
    status: 'In Development',
    videoUrl: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/nadaam.MP4', // Update when available
    synopsis: 'An exploration of Mongolia\'s ancient Nadaam Festival, documenting traditional cuisines and agriculture that have been practiced for over 800 years.',
    deeperDescription: 'Created in collaboration with Khaliunaa (Helen) Enkhbold - Fulbright Humphrey Fellow from Mongolia, this documentary captures the cultural significance and contemporary relevance of the Nadaam Festival, examining how this UNESCO-recognized celebration preserves Mongolian heritage while adapting to modern times.',
    themes: ['Mongolian Culture', 'Cultural Preservation', 'UNESCO Heritage', 'Nomadic Traditions'],
    culturalSignificance: 'The Nadaam Festival, meaning "games" in Mongolian, celebrates the anniversary of the Mongolian Revolution and serves as a vital link to the country\'s nomadic past. These competitions test the skills that were essential for survival on the vast Mongolian steppes.',
    festivalHistory: 'Dating back to the era of Genghis Khan, the Nadaam has evolved from military training exercises to a national celebration that brings together communities across Mongolia every July.',
    productionNotes: 'This documentary aims to capture both the spectacular athletic competitions and the intimate cultural moments that make Nadaam a cornerstone of Mongolian identity.',
    locationInfo: 'Filming will take place during the National Nadaam in Ulaanbaatar as well as smaller local festivals across the Mongolian countryside.'
  }

  const openVideoModal = () => {
    setShowVideoModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc='https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/nadaam.MP4'
      videoStyle={{
        filter: 'brightness(0.4) contrast(1.2) saturate(1.3)'
      }}
      playbackRate={0.5}
    >
      <section className={styles.documentaryPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/film/documentaries" className={styles.backLink}>
            Back to Documentaries
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.documentaryHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.documentaryTitle}>{documentaryData.title}</h1>
            <div className={styles.documentaryMeta}>
              <span className={styles.metaItem}>{documentaryData.year}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.duration}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.format}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.status}</span>
            </div>
            <div className={styles.roleInfo}>
              <span className={styles.roleLabel}>Role:</span>
              <span className={styles.roleValue}>{documentaryData.role}</span>
            </div>
            
            {/* Watch Film Button */}
            <div className={styles.watchFilmSection}>
              <button onClick={openVideoModal} className={styles.watchFilmBtn}>
                <span className={styles.playIcon}>▶</span>
                Watch Film
              </button>
            </div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className={styles.synopsisSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Synopsis</h2>
            <p className={styles.synopsis}>{documentaryData.synopsis}</p>
            <p className={styles.deeperDescription}>{documentaryData.deeperDescription}</p>
          </div>
        </div>

        {/* Themes */}
        <div className={styles.themesSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Documentary Themes</h3>
            <div className={styles.themesList}>
              {documentaryData.themes.map((theme, index) => (
                <span key={index} className={styles.themeTag}>{theme}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Cultural Significance */}
        <div className={styles.culturalSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Cultural Significance</h3>
            <p className={styles.culturalText}>{documentaryData.culturalSignificance}</p>
          </div>
        </div>

        {/* Festival History */}
        <div className={styles.historySection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Historical Context</h3>
            <p className={styles.historyText}>{documentaryData.festivalHistory}</p>
          </div>
        </div>

        {/* Production Information */}
        <div className={styles.productionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Production Notes</h3>
            <p className={styles.productionText}>{documentaryData.productionNotes}</p>
            
            <div className={styles.locationInfo}>
              <h4 className={styles.locationTitle}>Filming Locations</h4>
              <p className={styles.locationText}>{documentaryData.locationInfo}</p>
            </div>
          </div>
        </div>

        {/* Connection to Other Works */}
        <div className={styles.connectionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Documentary Series</h3>
            <p className={styles.connectionText}>
              This documentary continues my exploration of cultural preservation and traditional practices, 
              building on previous work documenting indigenous communities and their relationship with ancestral traditions.
            </p>
            <div className={styles.relatedWorks}>
              <Link to="/film/documentaries/our-ancestors-are-still-singing" className={styles.relatedLink}>
                <span>Our Ancestors Are Still Singing</span>
              </Link>
              <Link to="/film/documentaries/khadra" className={styles.relatedLink}>
                <span>Khadra</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className={styles.videoModal} onClick={closeVideoModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeVideoModal}>
                ×
              </button>
              
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{documentaryData.title}</h2>
                <div className={styles.modalMeta}>
                  <span>{documentaryData.year}</span>
                  <span>•</span>
                  <span>{documentaryData.duration}</span>
                  <span>•</span>
                  <span>{documentaryData.format}</span>
                </div>
              </div>
              
              <div className={styles.videoContainer}>
                <iframe
                  width="100%"
                  height="100%"
                  src={documentaryData.videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                  title={documentaryData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className={styles.modalDescription}>
                <p>{documentaryData.synopsis}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default MongolianNadaamPage