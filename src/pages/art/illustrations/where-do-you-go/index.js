// src/pages/art/illustrations/where-do-you-go/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./where-do-you-go.module.css"
import { translateText } from "../../../../utils/translate"

const WhereDoYouGoPage = () => {
  const [language, setLanguage] = useState('EN')
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredImage, setHoveredImage] = useState(null)
  const videoRef = useRef(null)

  // Translation state - stores translated content
  const [translations, setTranslations] = useState({
    backToIllustrations: "Back to Illustrations",
    title: "Where do you go when there's nowhere left to go?",
    seriesMeta: "Dark Illustration Series • 2023-2024",
    description: "A visual investigation into depersonalization and chronic pain. Each piece is a fragment of dissociation, connected by invisible threads of trauma and survival. This series maps the territory of being lost within yourself - the dark spaces between consciousness and disconnection, where pain becomes both anchor and destroyer.",
    webTitle: "The Web of Disconnection",
    contextTitle: "Mapping the Unmappable",
    depersonalizationTitle: "Depersonalization",
    depersonalizationDesc: "The strange territory of watching yourself from outside, unable to recognize the person in the mirror as you.",
    chronicPainTitle: "Chronic Pain",
    chronicPainDesc: "When pain becomes a language, a constant companion that speaks louder than any other sensation.",
    darkIllustrationTitle: "Dark Illustration",
    darkIllustrationDesc: "Using stark imagery and shadow to externalize internal fragmentation and disconnection.",
    connectionTitle: "Connection in Isolation",
    connectionDesc: "These pieces are connected not despite their darkness, but because of it - mapping how trauma links moments together.",
    statementP1: "This series emerged during one of the darkest periods of my life - months of severe depersonalization where I couldn't recognize myself, coupled with chronic pain that made every moment feel like an interrogation of my own existence.",
    statementP2: "I created these illustrations as evidence - proof that I was experiencing something, even if I couldn't feel it. The detective board layout isn't just aesthetic; it mirrors how I tried to make sense of what was happening to me, connecting fragments of consciousness like clues to solve the mystery of where I had gone and how to find my way back.",
    statementP3: "Where do you go when there's nowhere left to go? You go inward, down into the dark, and you map the territory. These illustrations are that map.",
    medium: "Medium:",
    year: "Year:",
    connectedTo: "Connected to:"
  })

  // Original English content (source of truth)
  const originalContent = {
    backToIllustrations: "Back to Illustrations",
    title: "Where do you go when there's nowhere left to go?",
    seriesMeta: "Dark Illustration Series • 2023-2024",
    description: "A visual investigation into depersonalization and chronic pain. Each piece is a fragment of dissociation, connected by invisible threads of trauma and survival. This series maps the territory of being lost within yourself - the dark spaces between consciousness and disconnection, where pain becomes both anchor and destroyer.",
    webTitle: "The Web of Disconnection",
    contextTitle: "Mapping the Unmappable",
    depersonalizationTitle: "Depersonalization",
    depersonalizationDesc: "The strange territory of watching yourself from outside, unable to recognize the person in the mirror as you.",
    chronicPainTitle: "Chronic Pain",
    chronicPainDesc: "When pain becomes a language, a constant companion that speaks louder than any other sensation.",
    darkIllustrationTitle: "Dark Illustration",
    darkIllustrationDesc: "Using stark imagery and shadow to externalize internal fragmentation and disconnection.",
    connectionTitle: "Connection in Isolation",
    connectionDesc: "These pieces are connected not despite their darkness, but because of it - mapping how trauma links moments together.",
    statementP1: "This series emerged during one of the darkest periods of my life - months of severe depersonalization where I couldn't recognize myself, coupled with chronic pain that made every moment feel like an interrogation of my own existence.",
    statementP2: "I created these illustrations as evidence - proof that I was experiencing something, even if I couldn't feel it. The detective board layout isn't just aesthetic; it mirrors how I tried to make sense of what was happening to me, connecting fragments of consciousness like clues to solve the mystery of where I had gone and how to find my way back.",
    statementP3: "Where do you go when there's nowhere left to go? You go inward, down into the dark, and you map the territory. These illustrations are that map.",
    medium: "Medium:",
    year: "Year:",
    connectedTo: "Connected to:"
  }

  // Translate all content when language changes
  useEffect(() => {
    if (language === 'AR') {
      // Translate all content to Arabic
      const translateAll = async () => {
        const translated = {};
        for (const [key, value] of Object.entries(originalContent)) {
          translated[key] = await translateText(value, 'ar');
        }
        setTranslations(translated);
      };
      translateAll();
    } else {
      // Reset to English
      setTranslations(originalContent);
    }
  }, [language])

  // Background video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [])

  // Illustration data with position coordinates for web layout
  const illustrations = [
    {
      id: 'piece-1',
      title: 'Fragment I',
      date: 'December 2023',
      year: '2023',
      medium: 'Digital Illustration',
      description: 'The first fracture - when reality began to splinter and I could no longer recognize my own hands.',
      image: '/images/illustration/where/blue.jpeg',
      position: { x: 18, y: 28 }, // upper left
      size: 'medium',
      orientation: 'portrait',
      connections: ['piece-2', 'piece-3']
    },
    {
      id: 'piece-2',
      title: 'Phantom Pain',
      date: 'December 2023',
      year: '2023',
      medium: 'Digital Illustration',
      description: 'The body remembers what the mind tries to forget. Chronic pain became a constant companion, a ghost that never left.',
      image: '/images/illustration/where/purple.jpg',
      position: { x: 50, y: 12 }, // top center - vortex entry
      size: 'large',
      orientation: 'landscape',
      connections: ['piece-4', 'piece-5']
    },
    {
      id: 'piece-3',
      title: 'Dissolving',
      date: 'January 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'Watching myself from outside, a stranger in my own skin. Where do you go when you cannot find yourself?',
      image: '/images/illustration/where/red.jpeg',
      position: { x: 12, y: 58 }, // left mid-lower
      size: 'small',
      orientation: 'portrait',
      connections: ['piece-4', 'piece-6']
    },
    {
      id: 'piece-4',
      title: 'The In-Between',
      date: 'January 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'Suspended between existence and absence. Neither here nor there, just floating in the dark spaces between moments.',
      image: '/images/illustration/where/lov.jpeg',
      position: { x: 50, y: 50 }, // center - heart of vortex
      size: 'medium',
      orientation: 'portrait',
      connections: ['piece-7', 'piece-8']
    },
    {
      id: 'piece-5',
      title: 'Static',
      date: 'February 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'White noise filling every space where feeling should be. The numbness becomes louder than any scream.',
      image: '/images/illustration/where/shawshank.jpeg',
      position: { x: 82, y: 28 }, // upper right
      size: 'medium',
      orientation: 'landscape',
      connections: ['piece-7']
    },
    {
      id: 'piece-6',
      title: 'Shadow Self',
      date: 'February 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'Meeting the parts of myself I had abandoned in the darkness. They were waiting, patient, knowing I would return.',
      image: '/images/illustration/where/skeleton.jpeg',
      position: { x: 22, y: 85 }, // bottom left
      size: 'medium',
      orientation: 'landscape',
      connections: ['piece-8']
    },
    {
      id: 'piece-7',
      title: 'Tethered',
      date: 'March 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'Finding the threads that still connected me to the world. Fragile, nearly invisible, but present.',
      image: '/images/illustration/where/yellow.jpeg',
      position: { x: 88, y: 65 }, // right lower
      size: 'large',
      orientation: 'portrait',
      connections: ['piece-8']
    },
    {
      id: 'piece-8',
      title: 'Return',
      date: 'March 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'The slow, painful journey back to inhabiting this body. To feeling. To being. To existing as whole.',
      image: '/images/illustration/where/green.jpeg',
      position: { x: 55, y: 85 }, // bottom center-right
      size: 'medium',
      orientation: 'landscape',
      connections: ['piece-9']
    },
    {
      id: 'piece-9',
      title: 'Piece 9',
      date: 'April 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'Placeholder description for the ninth piece.',
      image: '/images/illustration/where/skool.jpeg',
      position: { x: 8, y: 42 }, // far left mid
      size: 'small',
      orientation: 'landscape',
      connections: ['piece-3', 'piece-10']
    },
    {
      id: 'piece-10',
      title: 'Piece 10',
      date: 'April 2024',
      year: '2024',
      medium: 'Digital Illustration',
      description: 'Placeholder description for the tenth piece.',
      image: '/images/illustration/where/pink.jpeg',
      position: { x: 92, y: 45 }, // far right mid
      size: 'medium',
      orientation: 'landscape',
      connections: ['piece-5', 'piece-7']
    }
  ]

  const openModal = (illustration) => {
    setSelectedImage(illustration)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={false}
    >
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.3) contrast(1.3) saturate(0.8)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/where.MOV" type="video/mp4"/>
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.wherePage} dir={language === 'AR' ? 'rtl' : 'ltr'}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/illustrations" className={styles.backLink}>
            {translations.backToIllustrations}
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.title}>{translations.title}</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>{translations.seriesMeta}</span>
          </div>
          <p className={styles.description}>
            {translations.description}
          </p>
        </div>

        {/* Detective Board / Web Layout */}
        <div className={styles.boardContainer}>
          <div className={styles.boardTitle}>
            <div className={styles.redString}></div>
            <h2>{translations.webTitle}</h2>
            <div className={styles.redString}></div>
          </div>

          {/* Canvas for connection threads */}
          <svg className={styles.connectionCanvas} preserveAspectRatio="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {illustrations.map((illust) =>
              illust.connections.map((targetId) => {
                const target = illustrations.find(i => i.id === targetId)
                if (!target) return null
                return (
                  <line
                    key={`${illust.id}-${targetId}`}
                    x1={`${illust.position.x}%`}
                    y1={`${illust.position.y}%`}
                    x2={`${target.position.x}%`}
                    y2={`${target.position.y}%`}
                    className={`${styles.thread} ${
                      (hoveredImage === illust.id || hoveredImage === targetId)
                        ? styles.threadHighlight
                        : ''
                    }`}
                    filter="url(#glow)"
                  />
                )
              })
            )}
          </svg>

          {/* Detective Board with Images */}
          <div className={styles.detectiveBoard}>
            {illustrations.map((illust, index) => (
              <div
                key={illust.id}
                className={`${styles.evidenceCard} ${styles[illust.size]} ${styles[illust.orientation]}`}
                style={{
                  left: `${illust.position.x}%`,
                  top: `${illust.position.y}%`,
                  animationDelay: `${index * 0.15}s`
                }}
                onMouseEnter={() => setHoveredImage(illust.id)}
                onMouseLeave={() => setHoveredImage(null)}
                onClick={() => openModal(illust)}
              >
                {/* Pin/Tack */}
                <div className={styles.pin}></div>

                {/* Image with tape effect */}
                <div className={styles.imageWrapper}>
                  <div className={styles.tape}></div>
                  <img
                    src={illust.image}
                    alt={illust.title}
                    className={styles.evidenceImage}
                  />
                  <div className={styles.tape} style={{ bottom: 0, top: 'auto' }}></div>
                </div>

                {/* Label underneath */}
                <div className={styles.evidenceLabel}>
                  <span className={styles.evidenceNumber}>#{index + 1}</span>
                  <span className={styles.evidenceTitle}>{illust.title}</span>
                  <span className={styles.evidenceDate}>{illust.date}</span>
                </div>

                {/* Hover info */}
                {hoveredImage === illust.id && (
                  <div className={styles.hoverInfo}>
                    <p>{illust.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Series Context */}
        <div className={styles.contextSection}>
          <h3 className={styles.contextTitle}>{translations.contextTitle}</h3>
          <div className={styles.contextGrid}>
            <div className={styles.contextCard}>
              <h4>{translations.depersonalizationTitle}</h4>
              <p>{translations.depersonalizationDesc}</p>
            </div>
            <div className={styles.contextCard}>
              <h4>{translations.chronicPainTitle}</h4>
              <p>{translations.chronicPainDesc}</p>
            </div>
            <div className={styles.contextCard}>
              <h4>{translations.darkIllustrationTitle}</h4>
              <p>{translations.darkIllustrationDesc}</p>
            </div>
            <div className={styles.contextCard}>
              <h4>{translations.connectionTitle}</h4>
              <p>{translations.connectionDesc}</p>
            </div>
          </div>

          <div className={styles.artistStatement}>
            <p>{translations.statementP1}</p>
            <p>{translations.statementP2}</p>
            <p>{translations.statementP3}</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal} dir={language === 'AR' ? 'rtl' : 'ltr'}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>

            <div className={styles.modalLayout}>
              <div className={styles.modalImage}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                />
              </div>

              <div className={styles.modalInfo}>
                <h2>{selectedImage.title}</h2>
                <div className={styles.modalMeta}>
                  <p className={styles.modalMetaItem}>
                    <span className={styles.modalLabel}>{translations.medium}</span> {selectedImage.medium}
                  </p>
                  <p className={styles.modalMetaItem}>
                    <span className={styles.modalLabel}>{translations.year}</span> {selectedImage.year}
                  </p>
                </div>
                <p className={styles.modalDescription}>{selectedImage.description}</p>

                {selectedImage.connections.length > 0 && (
                  <div className={styles.connections}>
                    <h4>{translations.connectedTo}</h4>
                    <ul>
                      {selectedImage.connections.map(connId => {
                        const conn = illustrations.find(i => i.id === connId)
                        return <li key={connId}>{conn?.title}</li>
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default WhereDoYouGoPage
