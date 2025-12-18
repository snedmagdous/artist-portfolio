// src/pages/portfolio/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./portfolio.module.css"

const PortfolioPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null)
  const videoRefs = useRef([])

  // Video background setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [])

  // Handle video hover play/pause
  const handleVideoHover = (index, isHovering) => {
    const video = videoRefs.current[index]
    if (video) {
      if (isHovering) {
        video.currentTime = 0
        video.play().catch(e => console.log("Video play failed:", e))
      } else {
        video.pause()
        video.currentTime = 0
      }
    }
  }

  // Set up videos with proper properties
  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.muted = true
        video.loop = false
        video.preload = 'metadata'

        const handleVideoEnd = () => {
          video.currentTime = 0
        }

        video.addEventListener('ended', handleVideoEnd)

        return () => {
          video.removeEventListener('ended', handleVideoEnd)
        }
      }
    })
  }, [])

  // Art categories for card display (like film page)
  const artCategories = [
    {
      id: 'paintings',
      title: 'Paintings',
      description: 'Ancestral wisdom and divine femininity through portraiture',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/paintings.MP4',
      videoFilter: 'brightness(0.8) contrast(1.2) saturate(1.3)',
      count: '25+ Works',
      link: '/art/paintings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="4" y="3" width="16" height="18" rx="1.5" fill="rgba(140, 140, 140, 0.2)"/>
          <circle cx="12" cy="10" r="3" fill="rgba(140, 140, 140, 0.25)"/>
          <path d="M8 16C8 14 10 13 12 13C14 13 16 14 16 16" strokeWidth="0.4" fill="none"/>
          <rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="0.5" fill="none"/>
        </svg>
      )
    },
    {
      id: 'murals',
      title: 'Murals',
      description: 'Large-scale public art celebrating community and resistance',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/myqueens.MOV',
      videoFilter: 'brightness(0.75) contrast(1.0)',
      count: '4 Murals',
      link: '/art/murals',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="2" y="4" width="20" height="16" fill="rgba(140, 140, 140, 0.2)" strokeWidth="0.3"/>
          <path d="M2 8H22" strokeWidth="0.3"/>
          <path d="M2 12H22" strokeWidth="0.3"/>
          <path d="M2 16H22" strokeWidth="0.3"/>
          <path d="M8 4V20" strokeWidth="0.3"/>
          <path d="M16 4V20" strokeWidth="0.3"/>
          <circle cx="12" cy="10" r="1" fill="rgba(140, 140, 140, 0.6)"/>
          <circle cx="12" cy="14" r="1" fill="rgba(140, 140, 140, 0.6)"/>
        </svg>
      )
    },
    {
      id: 'illustrations',
      title: 'Illustrations',
      description: 'Digital art exploring depersonalization through color',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/illust.MP4',
      videoFilter: 'brightness(0.85) contrast(0.95)',
      count: '15+ Works',
      link: '/art/illustrations',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <path d="M17 3H21V7" strokeWidth="0.4"/>
          <path d="M21 3L12 12" strokeWidth="0.4"/>
          <path d="M15 15L21 21" strokeWidth="0.4"/>
          <circle cx="7" cy="7" r="3" fill="rgba(140, 140, 140, 0.2)" strokeWidth="0.3"/>
          <path d="M7 10V16C7 18.2091 8.79086 20 11 20H16" strokeWidth="0.4"/>
          <rect x="15" y="19" width="4" height="2" rx="1" fill="rgba(140, 140, 140, 0.3)"/>
        </svg>
      )
    },
    {
      id: 'collages',
      title: 'Collages',
      description: 'Mixed media confronting the shadow self',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/collage.MP4',
      videoFilter: 'brightness(0.7) contrast(1.1)',
      count: '8+ Works',
      link: '/art/collages',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="3" y="3" width="7" height="7" fill="rgba(140, 140, 140, 0.2)" strokeWidth="0.3"/>
          <rect x="14" y="3" width="7" height="7" fill="rgba(140, 140, 140, 0.25)" strokeWidth="0.3"/>
          <rect x="3" y="14" width="7" height="7" fill="rgba(140, 140, 140, 0.3)" strokeWidth="0.3"/>
          <rect x="14" y="14" width="7" height="7" fill="rgba(140, 140, 140, 0.15)" strokeWidth="0.3"/>
          <path d="M10 6.5H14" strokeWidth="0.3"/>
          <path d="M6.5 10V14" strokeWidth="0.3"/>
        </svg>
      )
    }
  ]

  // Film categories for card display
  const filmCategories = [
    {
      id: 'documentaries',
      title: 'Documentaries',
      description: 'Palestinian solidarity and intersectional liberation',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/documentaries.MP4',
      videoFilter: 'brightness(0.8) contrast(1.0)',
      count: '5 Films',
      duration: '15-45 min',
      link: '/film/documentaries',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="3" y="4" width="18" height="12" rx="1" fill="rgba(140, 140, 140, 0.2)"/>
          <path d="M10 16L14 16" strokeWidth="0.4"/>
          <path d="M12 16L12 18" strokeWidth="0.4"/>
          <rect x="5" y="6" width="1" height="8" fill="rgba(140, 140, 140, 0.4)"/>
          <rect x="18" y="6" width="1" height="8" fill="rgba(140, 140, 140, 0.4)"/>
        </svg>
      )
    },
    {
      id: 'short-films',
      title: 'Short Films',
      description: 'Speculative fiction and indigenous futurism',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/short-films.MP4',
      videoFilter: 'brightness(0.75) contrast(1.05)',
      count: '12 Films',
      duration: '3-15 min',
      link: '/film/short-films',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="3" y="8" width="14" height="10" rx="1.5" fill="rgba(140, 140, 140, 0.2)"/>
          <circle cx="10" cy="13" r="4" fill="rgba(140, 140, 140, 0.25)"/>
          <circle cx="10" cy="13" r="2.5" fill="rgba(140, 140, 140, 0.15)"/>
        </svg>
      )
    },
    {
      id: 'micro-films',
      title: 'Micro Films',
      description: 'Brief visual stories capturing cultural moments',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/micro-films.mp4',
      videoFilter: 'brightness(0.8) contrast(0.95)',
      count: '24 Films',
      duration: '15-60 sec',
      link: '/film/micro-films',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          <rect x="7" y="3" width="10" height="18" rx="2" fill="rgba(140, 140, 140, 0.2)"/>
          <rect x="8" y="5" width="8" height="14" rx="1" fill="rgba(140, 140, 140, 0.15)"/>
          <circle cx="10" cy="7" r="0.3" fill="rgba(180, 80, 80, 0.6)"/>
        </svg>
      )
    }
  ]

  // Poetry category
  const poetryCategory = {
    id: 'poetry',
    title: 'Poetry',
    description: 'Words that heal and transform through verse',
    videoSrc: null, // No video for now
    count: 'Collection',
    link: '/writing/poetry',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
        <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
        <polyline points="14,2 14,8 20,8" strokeWidth="0.4"/>
        <line x1="16" y1="13" x2="8" y2="13" strokeWidth="0.3"/>
        <line x1="16" y1="17" x2="8" y2="17" strokeWidth="0.3"/>
        <polyline points="10,9 9,9 8,9" strokeWidth="0.3"/>
      </svg>
    )
  }

  // OLD Gallery items - keeping for reference, will remove later
  const artGalleryItems = [
    // Where Do You Go When There's Nowhere To Go - Half of gallery
    {
      id: 'where-blue',
      title: 'Blue',
      year: '2024',
      image: '/images/illustration/where/blue.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-green',
      title: 'Green',
      year: '2024',
      image: '/images/illustration/where/green.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-pink',
      title: 'Pink',
      year: '2024',
      image: '/images/illustration/where/pink.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-purple',
      title: 'Purple',
      year: '2024',
      image: '/images/illustration/where/purple.jpg',
      link: '/art/illustrations',
    },
    {
      id: 'where-red',
      title: 'Red',
      year: '2024',
      image: '/images/illustration/where/red.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-yellow',
      title: 'Yellow',
      year: '2024',
      image: '/images/illustration/where/yellow.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-skeleton',
      title: 'Skeleton',
      year: '2024',
      image: '/images/illustration/where/skeleton.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-shawshank',
      title: 'Shawshank',
      year: '2024',
      image: '/images/illustration/where/shawshank.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-skool',
      title: 'Skool',
      year: '2024',
      image: '/images/illustration/where/skool.JPEG',
      link: '/art/illustrations',
    },
    {
      id: 'where-lov',
      title: 'Lov',
      year: '2024',
      image: '/images/illustration/where/lov.JPEG',
      link: '/art/illustrations',
    },
    // Divine Feminine Portraits
    {
      id: 'portrait-ana',
      title: 'Ana',
      year: '2024',
      image: '/images/portraits/ana.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-ashira',
      title: 'Ashira',
      year: '2024',
      image: '/images/portraits/ashira.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-malak',
      title: 'Malak',
      year: '2024',
      image: '/images/portraits/malak.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-mari',
      title: 'Mari',
      year: '2024',
      image: '/images/portraits/mari.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-michelle',
      title: 'Michelle',
      year: '2024',
      image: '/images/portraits/michelle.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-sahiba',
      title: 'Sahiba',
      year: '2024',
      image: '/images/portraits/sahiba.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-sierra',
      title: 'Sierra',
      year: '2024',
      image: '/images/portraits/sierra.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-sokhna',
      title: 'Sokhna',
      year: '2024',
      image: '/images/portraits/sokhna.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'portrait-yas',
      title: 'Yas',
      year: '2024',
      image: '/images/portraits/yas.JPEG',
      link: '/art/paintings',
    },
    // Ancestral Paintings
    {
      id: 'ancestral-painting',
      title: 'Ancestral',
      year: '2024',
      image: '/images/paintings/ancestral/ancestral.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'forest-prayers',
      title: 'Forest Prayers',
      year: '2024',
      image: '/images/paintings/ancestral/forest-prayers.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'moon-daughter',
      title: 'Moon Daughter',
      year: '2024',
      image: '/images/paintings/ancestral/moon-daughter.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'throne-of-fire',
      title: 'Throne of Fire',
      year: '2024',
      image: '/images/paintings/ancestral/throne-of-fire.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'water-love',
      title: 'Water Love',
      year: '2024',
      image: '/images/paintings/ancestral/water-love.JPEG',
      link: '/art/paintings',
    },
    // Ceremony Paintings
    {
      id: 'ceremony-protect',
      title: 'Protect',
      year: '2024',
      image: '/images/paintings/ceremony/protect.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'ceremony-sacred',
      title: 'Sacred',
      year: '2024',
      image: '/images/paintings/ceremony/sacred.JPEG',
      link: '/art/paintings',
    },
    // Queens Paintings
    {
      id: 'queens-mirror',
      title: 'Mirror',
      year: '2024',
      image: '/images/paintings/queens/mirror.JPEG',
      link: '/art/paintings',
    },
    {
      id: 'queens-unborn',
      title: 'Unborn',
      year: '2024',
      image: '/images/paintings/queens/unborn.JPEG',
      link: '/art/paintings',
    },
    // Murals
    {
      id: 'love-rev-mural',
      title: 'Love as Revolution',
      year: '2023',
      image: '/images/murals/love-rev/final.JPEG',
      link: '/art/murals',
    },
    {
      id: 'my-queens-mural',
      title: 'My Queens',
      year: '2023',
      image: '/images/murals/my-queens/final.JPEG',
      link: '/art/murals',
    },
    {
      id: 'sunshine-mural',
      title: 'Sunshine',
      year: '2023',
      image: '/images/murals/sunshine/mural.JPEG',
      link: '/art/murals',
    },
    {
      id: 'tikkun-mural',
      title: 'Tikkun Olam',
      year: '2023',
      image: '/images/murals/tikkun/final.JPEG',
      link: '/art/murals',
    },
    // Collages
    {
      id: 'atlas-collage',
      title: 'Atlas',
      year: '2024',
      image: '/images/collage/atlas/final.jpg',
      link: '/art/collages',
    },
    {
      id: 'monster-collage',
      title: 'Monster',
      year: '2024',
      image: '/images/collage/monster/final.jpg',
      link: '/art/collages',
    },
    {
      id: 'rage-collage',
      title: 'Rage',
      year: '2024',
      image: '/images/collage/rage/final.png',
      link: '/art/collages',
    }
  ]

  const filmGalleryItems = [
    // Documentaries (landscape)
    {
      id: 'love-revolution-doc',
      title: 'Love as Revolution',
      year: '2025',
      video: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/love-rev-doc.mp4',
      link: '/film/documentaries',
      size: 'landscape',
      type: 'documentary'
    },
    {
      id: 'ancestors-singing-doc',
      title: 'Our Ancestors Are Still Singing',
      year: '2025',
      video: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/ancestors-still-singing.MP4',
      link: '/film/documentaries',
      size: 'landscape',
      type: 'documentary'
    },
    {
      id: 'khadra-doc',
      title: 'Khadra',
      year: '2024',
      video: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/khadra.MP4',
      link: '/film/documentaries',
      size: 'landscape',
      type: 'documentary'
    },
    // Microfilms (portrait)
    {
      id: 'digital-prayers',
      title: 'Digital Prayers',
      year: '2024',
      video: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/bloom.MP4',
      link: '/film/micro-films',
      size: 'small',
      type: 'microfilm'
    },
    {
      id: 'quantum-beadwork',
      title: 'Quantum Beadwork',
      year: '2024',
      video: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/julz.MP4',
      link: '/film/micro-films',
      size: 'medium',
      type: 'microfilm'
    },
    {
      id: 'voice-echo',
      title: 'Voice Echo',
      year: '2024',
      video: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/pink.MOV',
      link: '/film/micro-films',
      size: 'small',
      type: 'microfilm'
    }
  ]

  // CURATED GALLERY COLUMNS - Edit these to control exactly which images appear where

  // Left Column Art - Choose exactly which images you want in the left column
  const leftColumnArt = [
    artGalleryItems[0],  // Blue
    artGalleryItems[26], // Mirror
    artGalleryItems[29], // My Queens Mural
    artGalleryItems[9],  // Lov
    artGalleryItems[14], // Michelle
    artGalleryItems[27], // Unborn
    artGalleryItems[2],  // Pink
    artGalleryItems[16], // Sierra
    artGalleryItems[21], // Moon Daughter
    artGalleryItems[22], // Throne of Fire
    artGalleryItems[18], // Yas
    artGalleryItems[32], // Atlas
    artGalleryItems[28], // Love as Revolution Mural
    artGalleryItems[5],  // Yellow
    artGalleryItems[1],  // Green
    artGalleryItems[10], // Ana
    artGalleryItems[20]  // Forest Prayers
  ]

  // Right Column Art - Choose exactly which images you want in the right column
  const rightColumnArt = [
    artGalleryItems[3],  // Purple
    artGalleryItems[19], // Ancestral
    artGalleryItems[31], // Tikkun V'or
    artGalleryItems[12], // Malak
    artGalleryItems[6],  // Skeleton
    artGalleryItems[4],  // Red
    artGalleryItems[8],  // Skool
    artGalleryItems[33], // Monster
    artGalleryItems[24], // Protect
    artGalleryItems[25], // Sacred
    artGalleryItems[11], // Ashira
    artGalleryItems[30], // Sunshine
    artGalleryItems[13], // Mari
    artGalleryItems[23], // Water Love
    artGalleryItems[34], // Rage
    artGalleryItems[7],  // Shawshank
    artGalleryItems[15], // Sahiba
    artGalleryItems[17]  // Sokhna
  ]

  const portfolioCategories = [
    {
      id: 'art',
      title: 'Art',
      description: 'Visual expressions through paintings, murals, and collages',
      link: '/art',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      subcategories: [
        { title: 'Paintings', link: '/art/paintings' },
        { title: 'Murals', link: '/art/murals' },
        { title: 'Illustrations', link: '/art/illustrations' },
        { title: 'Collages', link: '/art/collages' }
      ],
      stats: '50+ Works'
    },
    {
      id: 'film',
      title: 'Film',
      description: 'Cinematic storytelling through documentaries and short films',
      link: '/film',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21L16 21"/>
          <path d="M12 17L12 21"/>
        </svg>
      ),
      subcategories: [
        { title: 'Documentaries', link: '/film/documentaries' },
        { title: 'Short Films', link: '/film/short-films' },
        { title: 'Micro Films', link: '/film/micro-films' }
      ],
      stats: '400+ Viewers'
    },
    {
      id: 'writing',
      title: 'Writing',
      description: 'Words that heal and transform through poetry and prose',
      link: '/writing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      subcategories: [
        { title: 'Poetry', link: '/writing/poetry' }
      ],
      stats: 'Published Works'
    }
  ]

  // Combine all categories into one mixed array for beehive layout
  const allCategories = [
    ...artCategories,
    ...filmCategories,
    poetryCategory
  ]

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
            filter: 'brightness(0.30) contrast(1.1) saturate(1.3)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/IMG_3893.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.portfolioPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Portfolio Hero */}
        <div className={styles.portfolioHero}>
          <h1 className={styles.portfolioMainTitle}>Portfolio</h1>
          <p className={styles.portfolioMainSubtitle}>
            Where I reimagine ways of living and being
          </p>

          {/* Navigation Buttons */}
          <div className={styles.navButtons}>
            <Link to="/art" className={styles.navButton}>
              Art
            </Link>
            <Link to="/film" className={styles.navButton}>
              Film
            </Link>
            <Link to="/writing/poetry" className={styles.navButton}>
              Writing
            </Link>
          </div>
        </div>

        {/* Two Column Square Card Layout */}
        <div className={styles.squareCardsContainer}>
          {allCategories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className={styles.squareCard}
              onMouseEnter={() => category.videoSrc ? handleVideoHover(index, true) : null}
              onMouseLeave={() => category.videoSrc ? handleVideoHover(index, false) : null}
            >
              <div className={styles.squareCardInner}>
                {category.videoSrc ? (
                  <>
                    <video
                      ref={el => videoRefs.current[index] = el}
                      muted
                      playsInline
                      preload="metadata"
                      className={styles.squareVideo}
                      style={{
                        filter: category.videoFilter || 'brightness(0.8) contrast(0.9)'
                      }}
                    >
                      <source src={category.videoSrc} type="video/mp4" />
                    </video>
                    <div className={styles.squareOverlay}>
                      <div className={styles.squareIcon}>
                        {category.icon}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={styles.squarePlaceholder}>
                    <div className={styles.squareIcon}>
                      {category.icon}
                    </div>
                  </div>
                )}

                <div className={styles.squareContent}>
                  <h3 className={styles.squareTitle}>{category.title}</h3>
                  <p className={styles.squareDescription}>{category.description}</p>
                  <div className={styles.squareCount}>{category.count || category.duration || ''}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Quote */}
        <div className={styles.featuredQuote}>
          <p className={styles.quoteText}>
            "Every piece I create is an invitation to imagine worlds where we are not defined by our wounds but our capacity to evolve."
          </p>
          <p className={styles.quoteAuthor}>— Māyā Murry</p>
        </div>

      </section>
    </Layout>
  )
}

export default PortfolioPage
