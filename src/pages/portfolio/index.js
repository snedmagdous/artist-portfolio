// src/pages/portfolio/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./portfolio.module.css"

const PortfolioPage = () => {
  const [language, setLanguage] = useState('EN')

  // Gallery items organized by category
  const artGalleryItems = [
    // Paintings
    {
      id: 'ancestral-painting',
      title: 'Ancestral',
      year: '2024',
      image: '/images/paintings/ancestral/ancestral.JPEG',
      link: '/art/paintings',
      size: 'medium'
    },
    {
      id: 'forest-prayers',
      title: 'Forest Prayers',
      year: '2024',
      image: '/images/paintings/ancestral/forest-prayers.JPEG',
      link: '/art/paintings',
      size: 'small'
    },
    {
      id: 'moon-daughter',
      title: 'Moon Daughter',
      year: '2024',
      image: '/images/paintings/ancestral/moon-daughter.JPEG',
      link: '/art/paintings',
      size: 'large'
    },
    // Murals
    {
      id: 'love-rev-mural',
      title: 'Love as Revolution Mural',
      year: '2023',
      image: '/images/murals/love-rev/final.JPEG',
      link: '/art/murals',
      size: 'medium'
    },
    {
      id: 'my-queens-mural',
      title: 'My Queens',
      year: '2023',
      image: '/images/murals/my-queens/final.JPEG',
      link: '/art/murals',
      size: 'small'
    },
    {
      id: 'throne-of-fire',
      title: 'Throne of Fire',
      year: '2024',
      image: '/images/paintings/ancestral/throne-of-fire.JPEG',
      link: '/art/paintings',
      size: 'medium'
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

  const portfolioCategories = [
    {
      id: 'art',
      title: 'Art',
      description: 'Visual expressions of identity and resistance through paintings, murals, illustrations, and collages',
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
      description: 'Cinematic storytelling and visual narratives through documentaries, short films, and micro films',
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
      description: 'Words that heal, resist, and transform through poetry, creative writing, novels, and video essays',
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
        { title: 'Poetry', link: '/writing/poetry' },
        { title: 'Creative Writing', link: '/writing/creative-writing' },
        { title: 'Novel Writing', link: '/writing/novel-writing' },
        { title: 'Video Essays', link: '/writing/video-essays' }
      ],
      stats: 'Published Works'
    }
  ]

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/IMG_3893.MP4"
      videoFilter="brightness(0.55) contrast(1.1) saturate(1.9)"
    >
      <section className={styles.portfolioPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Portfolio Hero */}
        <div className={styles.portfolioHero}>
          <div className={styles.sectionIndicator}>
            <span className={styles.indicatorDot}></span>
            <span className={styles.indicatorText}>Portfolio</span>
          </div>
          <h1 className={styles.portfolioTitle}>My Portfolio</h1>
          <p className={styles.portfolioSubtitle}>
            Where I reimagine ways of living and being through art, film, and writing
          </p>
        </div>

        {/* Portfolio Categories Grid */}
        <div className={styles.categoriesGrid}>
          {portfolioCategories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className={styles.categoryCard}
            >
              <div className={styles.categoryCardInner}>
                <div className={styles.categoryIcon}>
                  {category.icon}
                </div>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
                <p className={styles.categoryDescription}>{category.description}</p>

                {/* Stats badge */}
                <div className={styles.categoryStats}>{category.stats}</div>

                {/* Subcategories list */}
                <div className={styles.subcategoriesList}>
                  {category.subcategories.map((sub, index) => (
                    <span key={index} className={styles.subcategoryTag}>
                      {sub.title}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className={styles.categoryArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
              <div className={styles.categoryGlow}></div>
            </Link>
          ))}
        </div>

        {/* Gallery Section */}
        <div className={styles.verticalGallerySection}>
          <div className={styles.galleryHeader}>
            <div className={styles.sectionIndicator}>
              <span className={styles.indicatorDot}></span>
              <span className={styles.indicatorText}>Recent Works</span>
            </div>
            <h2 className={styles.galleryTitle}>Gallery</h2>
          </div>

          <div className={styles.verticalGalleryGrid}>
            {/* Column 1 - Art */}
            <div className={`${styles.galleryColumn} ${styles.column1}`}>
              {artGalleryItems.concat(artGalleryItems).map((item, index) => (
                <Link
                  key={`art-${item.id}-${index}`}
                  to={item.link}
                  className={`${styles.galleryItem} ${styles[item.size]}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.galleryItemImage}
                  />
                  <div className={styles.galleryItemOverlay}>
                    <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                    <span className={styles.galleryItemYear}>{item.year}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Column 2 - Film */}
            <div className={`${styles.galleryColumn} ${styles.column2}`}>
              {filmGalleryItems.concat(filmGalleryItems).map((item, index) => (
                <Link
                  key={`film-${item.id}-${index}`}
                  to={item.link}
                  className={`${styles.galleryItem} ${styles[item.size]}`}
                >
                  <video
                    className={styles.galleryItemVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className={styles.galleryItemOverlay}>
                    <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                    <span className={styles.galleryItemYear}>{item.year}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Quote */}
        <div className={styles.featuredQuote}>
          <p className={styles.quoteText}>
            "Every piece I create is an act of resistance, a meditation on freedom, and an invitation to imagine worlds where we are not defined by our wounds but by our capacity to dream."
          </p>
          <p className={styles.quoteAuthor}>— Māyā Murry</p>
        </div>
        
      </section>
    </Layout>
  )
}

export default PortfolioPage
