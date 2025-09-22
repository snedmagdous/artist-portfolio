// src/pages/art/paintings/digital-ceremony/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./digital-ceremony.module.css"

const DigitalCeremonyPage = () => {
  const [language, setLanguage] = useState('EN')
  const [selectedPainting, setSelectedPainting] = useState(null)

  const paintings = [
    {
      id: 'sacred-connection',
      title: 'Sacred Connection',
      year: '2024',
      medium: 'Acrylic & Mixed Media on Canvas',
      dimensions: '36" x 48"',
      image: '/images/paintings/ceremony/sacred.jpeg',
      description: 'Two souls represented as flowing light forms that intertwine and merge, creating a sacred geometry of love that transcends physical boundaries.',
      symbolism: 'The intertwining light represents the spiritual bond between two people, with geometric patterns symbolizing the mathematical perfection of true connection.',
      inspiration: 'Inspired by the moment when two people recognize each other not just in this life, but across time and space—a digital ceremony of eternal recognition.',
      position: 'left'
    },
    {
      id: 'protected-love',
      title: 'Protected Love',
      year: '2024',
      medium: 'Acrylic & Mixed Media on Canvas',
      dimensions: '30" x 40"',
      image: '/images/paintings/ceremony/protect.jpeg',
      description: 'A sanctuary of light surrounds two figures, creating a protective barrier where love can exist safely in its most vulnerable and authentic form.',
      symbolism: 'The protective barrier represents the sacred space that true love creates—a place where souls can be completely open without fear of harm.',
      inspiration: 'Exploring how love itself becomes a form of protection, creating safe spaces for vulnerability and complete emotional intimacy.',
      position: 'center'
    },
    {
      id: 'eternal-ceremony',
      title: 'Coming soon...',
      year: '2025',
      medium: 'Acrylic & Mixed Media on Canvas',
      dimensions: '42" x 30"',
      image: '/images/paintings/ceremony/eternal-ceremony.jpg',
      description: 'Two souls participating in an eternal marriage ceremony that exists beyond time, where their vows are witnessed by the cosmos itself.',
      symbolism: 'The cosmic witness represents how true love is blessed by the universe itself, with stellar patterns forming the sacred architecture of commitment.',
      inspiration: 'Reimagining marriage as a cosmic event where two souls choose each other not just for this lifetime, but for all existence.',
      position: 'right'
    }
  ]

  const openPaintingModal = (painting) => {
    setSelectedPainting(painting)
    document.body.style.overflow = 'hidden'
  }

  const closePaintingModal = () => {
    setSelectedPainting(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/dig-ceremony.MP4"
      videoStyle={{
        filter: 'brightness(0.15) contrast(1.2) saturate(1.15)'
      }}
    >
      <section className={styles.digitalCeremonyPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/paintings" className={styles.backLink}>
            Back to Paintings
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.seriesHero}>
          <h1 className={styles.seriesTitle}>Digital Ceremony</h1>
          <div className={styles.seriesInfo}>
            <span className={styles.seriesCount}>3 Pieces</span>
            <span className={styles.seriesYear}>2023</span>
            <span className={styles.seriesMedium}>Oil on canvas</span>
          </div>
          <p className={styles.seriesDescription}>
            Traditional ceremonies reimagined in digital spaces, questioning the nature of 
            sacred practice in virtual worlds. These works explore how ritual and technology 
            can coexist to create new forms of spiritual connection between two souls.
          </p>
        </div>

        {/* Sacred Gallery - Triangle Formation */}
        <div className={styles.sacredGallery}>
          <div className={styles.triangleContainer}>
            {/* Sacred geometric background patterns */}
            <div className={styles.geometricPattern}></div>

            {/* Top Circle */}
            <div
              className={`${styles.paintingCircle} ${styles.topCircle}`}
              onClick={() => openPaintingModal(paintings[0])}
            >
              <div className={styles.circleGlow}></div>
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${paintings[0].image})` }}
              ></div>
              <div className={styles.circleOverlay}>
                <h3 className={styles.circleTitle}>{paintings[0].title}</h3>
                <span className={styles.circleYear}>{paintings[0].year}</span>
              </div>
              <div className={styles.loveParticles}></div>
            </div>

            {/* Bottom Left Circle */}
            <div
              className={`${styles.paintingCircle} ${styles.bottomLeftCircle}`}
              onClick={() => openPaintingModal(paintings[1])}
            >
              <div className={styles.circleGlow}></div>
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${paintings[1].image})` }}
              ></div>
              <div className={styles.circleOverlay}>
                <h3 className={styles.circleTitle}>{paintings[1].title}</h3>
                <span className={styles.circleYear}>{paintings[1].year}</span>
              </div>
              <div className={styles.protectionAura}></div>
            </div>

            {/* Bottom Right Circle */}
            <div
              className={`${styles.paintingCircle} ${styles.bottomRightCircle}`}
              onClick={() => openPaintingModal(paintings[2])}
            >
              <div className={styles.circleGlow}></div>
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${paintings[2].image})` }}
              ></div>
              <div className={styles.circleOverlay}>
                <h3 className={styles.circleTitle}>{paintings[2].title}</h3>
                <span className={styles.circleYear}>{paintings[2].year}</span>
              </div>
              <div className={styles.eternitySymbols}></div>
            </div>

            {/* Flowing Connection Lines */}
            <div className={styles.connectionLines}>
              <svg className={styles.triangleConnections} width="100%" height="100%" viewBox="0 0 800 600">
                <defs>
                  <path
                    id="path1"
                    d="M 400 120 Q 200 250 200 380"
                  />
                  <path
                    id="path2"
                    d="M 400 120 Q 600 250 600 380"
                  />
                  <path
                    id="path3"
                    d="M 200 380 Q 400 450 600 380"
                  />
                </defs>

                <path
                  className={styles.connectionPath1}
                  d="M 400 120 Q 200 250 200 380"
                  fill="none"
                  stroke="rgba(255, 182, 193, 0.6)"
                  strokeWidth="2"
                />
                <path
                  className={styles.connectionPath2}
                  d="M 400 120 Q 600 250 600 380"
                  fill="none"
                  stroke="rgba(255, 182, 193, 0.6)"
                  strokeWidth="2"
                />
                <path
                  className={styles.connectionPath3}
                  d="M 200 380 Q 400 450 600 380"
                  fill="none"
                  stroke="rgba(255, 182, 193, 0.6)"
                  strokeWidth="2"
                />

                {/* Animated flowing particles */}
                <circle className={styles.flowingParticle1} r="3" fill="rgba(255, 182, 193, 0.8)">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <mpath href="#path1"/>
                  </animateMotion>
                </circle>
                <circle className={styles.flowingParticle2} r="3" fill="rgba(255, 182, 193, 0.8)">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="1.3s">
                    <mpath href="#path2"/>
                  </animateMotion>
                </circle>
                <circle className={styles.flowingParticle3} r="3" fill="rgba(255, 182, 193, 0.8)">
                  <animateMotion dur="4s" repeatCount="indefinite" begin="2.6s">
                    <mpath href="#path3"/>
                  </animateMotion>
                </circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Love Philosophy */}
        <div className={styles.lovePhilosophy}>
          <div className={styles.philosophyContent}>
            <h3 className={styles.philosophyTitle}>On Sacred Love</h3>
            <div className={styles.philosophyText}>
              <blockquote>
                "In the digital age, we risk losing the sacred nature of human connection. 
                These paintings explore how technology might serve love rather than replace it—
                creating new ceremonies for ancient promises, digital sanctuaries for vulnerable hearts."
              </blockquote>
              <cite>— Artist's Reflection</cite>
            </div>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>Series Statement</h3>
          <div className={styles.statementContent}>
            <p>
              "Digital Ceremony" emerges from a profound question: Can technology create sacred space? 
              As someone who codes algorithms by day and paints by night, I'm fascinated by how 
              digital tools might serve our deepest human needs for connection and spiritual recognition.
            </p>
            <p>
              These three paintings explore love as both vulnerability and strength—two souls who 
              find in each other not just companionship, but sanctuary. Each canvas becomes a 
              meditation on protection: How do we create safe spaces for our most tender emotions? 
              How does love itself become a form of blessing?
            </p>
            <p>
              The "digital ceremony" is not about replacing traditional rituals, but expanding them. 
              In virtual spaces, on screens, through code—everywhere that humans connect, there exists 
              the possibility for sacred recognition between souls who choose each other across 
              time, space, and digital dimensions.
            </p>
            <span className={styles.statementSignature}>— Maya Murry, 2024</span>
          </div>
        </div>

        {/* Modal for Selected Painting */}
        {selectedPainting && (
          <div className={styles.paintingModal} onClick={closePaintingModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closePaintingModal}>
                ×
              </button>
              
              <div className={styles.modalLayout}>
                <div className={styles.modalImage}>
                  <img 
                    src={selectedPainting.image} 
                    alt={selectedPainting.title}
                    className={styles.paintingImage}
                  />
                </div>
                
                <div className={styles.modalInfo}>
                  <h2 className={styles.modalTitle}>{selectedPainting.title}</h2>
                  
                  <div className={styles.modalDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Year:</span>
                      <span className={styles.detailValue}>{selectedPainting.year}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Medium:</span>
                      <span className={styles.detailValue}>{selectedPainting.medium}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Dimensions:</span>
                      <span className={styles.detailValue}>{selectedPainting.dimensions}</span>
                    </div>
                  </div>

                  <div className={styles.modalDescription}>
                    <h4>Description</h4>
                    <p>{selectedPainting.description}</p>
                  </div>

                  <div className={styles.modalSymbolism}>
                    <h4>Symbolism</h4>
                    <p>{selectedPainting.symbolism}</p>
                  </div>

                  <div className={styles.modalInspiration}>
                    <h4>Inspiration</h4>
                    <p>{selectedPainting.inspiration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default DigitalCeremonyPage