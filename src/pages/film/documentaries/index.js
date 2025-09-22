// src/pages/film/documentaries/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link, navigate } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../film.module.css"

const DocumentariesPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRefs = useRef([])
  
  const documentaries = [
    {
      id: 'love-rev',
      title: 'Love as Revolution',
      year: '2025',
      duration: '11 min',
      status: 'Community Screenings',
      format: 'Short Film, Experimental Documentary',
      role: 'Director, Editor, Producer',
      description: 'An intimate exploration of how love functions as a radical act of resistance within social justice movements. The film weaves together personal narratives and community organizing to examine love as both a healing practice and revolutionary force.',
      snippet: 'The final minutes, where I speak about "letting the dead go home to learn what it means to love again," serve as Khadra\'s opening sequence, triggering deeper ancestral exploration.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/love-rev-doc.mp4',
      fullVideoUrl: 'https://youtu.be/ZAWwKYqlJ-k',
      themes: ['Social Justice', 'Love', 'Resistance', 'Community Organizing'],
      screenings: [
        'Schwartz Performing Center (May 8, 2025, 50+ attendance)',
        'Cinemapolis Theater, Ithaca NY (May 22, 2025, 200+ attendance)', 
        'Community School of Music & Arts (July 10, 2025, 100+ attendance)'
      ],
      funding: ['Cornell Society for the Humanities Award', 'Rural Humanities Seminar Award']
    },
    {
      id: 'still-singing',
      title: 'Our Ancestors Are Still Singing',
      year: '2025',
      duration: '11 min',
      status: 'Festival Circuit',
      format: 'Narrative Documentary',
      role: 'Director, Cinematographer',
      description: 'A meditation on intergenerational resilience within Indigenous communities, exploring how ancestral wisdom continues to guide contemporary struggles for sovereignty and cultural preservation.',
      snippet: 'Following multiple generations as they navigate between traditional practices and modern challenges, revealing the unbroken chain of Khmer knowledge.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/ancestors-still-singing.MP4',
      fullVideoUrl: 'https://youtu.be/TaKNJesPXNI',
      themes: ['Indigenous Sovereignty', 'Intergenerational Wisdom', 'Cultural Preservation', 'Resilience'],
      funding: [
        'American Indian & Indigenous Studies Department',
        'Southeast Asia Program', 
        'Russo E. Khmer Studies Travel Grant',
        'Cornell Community Engagement Grant',
        'Cornell Engineering International Research Grant'
      ],
      festivals: ['Pending submissions'],
      awards: null
    },
    {
      id: 'khadra',
      title: 'Khadra',
      year: '2024',
      duration: '45 min',
      status: 'Pre-Production',
      format: 'Experimental Memoir',
      role: 'Director, Writer, Producer',
      description: 'An experimental memoir tracing a Palestinian-Jordanian\'s spiritual journey across Arab diasporas to Palestine, weaving ancestral memory with magical realism to reimagine liberated futures.',
      snippet: 'A cinematic narrative about Indigenous Futurism that explores the process of letting the dead go home to learn what it means to love again.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/khadra.MP4',
      fullVideoUrl: null, // Still in production
      themes: ['Palestinian Diaspora', 'Ancestral Memory', 'Magical Realism', 'Indigenous Futurism', 'Spiritual Journey'],
      funding: ['Independent Production'],
      festivals: ['Preparing for festival circuit'],
      awards: null
    },
    {
      id: 'nadaam-festival',
      title: 'Mongolian Nadaam Festival',
      year: '2024',
      duration: '5 min',
      status: 'Fulbright Educational Release',
      format: 'Short Documentary',
      role: 'Director, Cinematographer, Editor',
      description: 'A short documentary exploring Mongolian agricultural traditions and cultural preservation in Interlaken, New York, documenting how immigrant communities maintain ancestral practices.',
      snippet: 'Intimate portraits of Mongolian families celebrating the Nadaam festival while adapting traditional agricultural practices to their new environment in upstate New York.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/nadaam.MP4',
      fullVideoUrl: null, // Local screening only
      themes: ['Cultural Preservation', 'Immigration', 'Agricultural Traditions', 'Community'],
      screenings: ['Local community screenings in Interlaken, NY'],
      funding: ['Independent Production', 'Community Support'],
      festivals: ['Regional film festivals'],
      awards: null
    }
  ]

  // Handle video hover play/pause
  const handleVideoHover = (index, isHovering) => {
    const doc = documentaries[index]
    // Skip hover functionality for YouTube embeds
    if (doc.videoSrc.includes('youtube.com/embed')) {
      return
    }

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

  // Handle opening full documentary
  const openDocumentary = (doc, e) => {
    e.preventDefault()
    // Always navigate to individual documentary page first
    navigate(`/film/documentaries/${doc.id}`)
  }

  useEffect(() => {
    // Set up videos with proper properties (skip YouTube embeds)
    videoRefs.current.forEach((video, index) => {
      if (video && !documentaries[index].videoSrc.includes('youtube.com/embed')) {
        video.muted = true
        video.loop = false
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
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/documentaries.MP4"
      videoStyle={{
        filter: 'brightness(0.3) contrast(1.01) saturate(1.3)'
      }}
    >
      <section className={styles.subPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/film" className={styles.backLink}>
            Back to Film Categories
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Documentaries</h1>
          <p className={styles.subPageSubtitle}>
            Intimate explorations of love, resistance, and ancestral wisdom through Indigenous and diasporic lenses
          </p>
        </div>

        {/* Timeline Container */}
        <div className={styles.documentaryContainer}>
          <h2 className={styles.timelineHeading}>Documentary Timeline</h2>
          <div className={styles.documentaryTimeline}>
            <div className={styles.timelineLine}></div>
            {documentaries.map((doc, index) => (
              <div key={doc.id} className={`${styles.documentaryItem} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineYear}>{doc.year}</div>
                </div>
                
                <div
                  className={styles.documentaryCard}
                  onMouseEnter={() => handleVideoHover(index, true)}
                  onMouseLeave={() => handleVideoHover(index, false)}
                  onClick={(e) => openDocumentary(doc, e)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.documentaryVideoArea}>
                    {doc.videoSrc.includes('youtube.com/embed') ? (
                      <iframe
                        src={`${doc.videoSrc}?autoplay=0&mute=1&loop=1&controls=0&showinfo=0&rel=0`}
                        className={styles.documentaryVideo}
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
                        className={styles.documentaryVideo}
                        style={{
                          filter: 'brightness(0.8) contrast(0.9)'
                        }}
                      >
                        <source src={doc.videoSrc} type="video/mp4" />
                      </video>
                    )}
                    
                    <div className={styles.documentaryOverlay}>
                      <div className={styles.docDuration}>{doc.duration}</div>
                      <div className={`${styles.docStatus} ${styles[doc.status.toLowerCase().replace(/\s+/g, '')]}`}>
                        {doc.status}
                      </div>
                    </div>

                    <div className={styles.documentaryHover}>
                      <div className={styles.watchText}>
                        View Details
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.documentaryContent}>
                    <h3 className={styles.documentaryTitle}>{doc.title}</h3>
                    
                    <div className={styles.documentaryMeta}>
                      <div className={styles.documentaryThemes}>
                        {doc.themes.slice(0, 3).map((theme, i) => (
                          <span key={i} className={styles.themeTag}>{theme}</span>
                        ))}
                      </div>
                    </div>
                    
                    <p className={styles.documentaryDescription}>{doc.description}</p>
                    <p className={styles.documentarySnippet}>"{doc.snippet}"</p>
                    
                    {doc.awards && (
                      <div className={styles.awardBadge}>
                        🏆 {doc.awards}
                      </div>
                    )}
                    
                    {doc.funding && (
                      <div className={styles.festivalList}>
                        <span className={styles.festivalLabel}>Funding:</span>
                        {doc.funding.slice(0, 2).join(' • ')}
                        {doc.funding.length > 2 && '...'}
                      </div>
                    )}
                    
                    <div className={styles.viewDocBtn}>
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentary Statement */}
        <div className={styles.documentaryStatement}>
          <h3 className={styles.statementTitle}>Documentary Approach</h3>
          <div className={styles.statementContent}>
            <p>
              My documentary practice centers love as resistance, exploring how personal narratives intersect 
              with collective struggles for justice. Each film serves as both intimate memoir and political 
              act, weaving together ancestral wisdom and contemporary activism.
            </p>
            <p>
              Through experimental forms and community collaboration, these works ask: how do we honor our 
              ancestors while imagining liberated futures? How does love become our most radical tool for transformation?
            </p>
            <span className={styles.statementSignature}>— Māyā Murry, 2025</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DocumentariesPage