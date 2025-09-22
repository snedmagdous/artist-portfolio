// src/pages/film/short-films/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../film.module.css"

const ShortFilmsPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRefs = useRef([])
  
  const shortFilms = [
     {
    id: 'mitla',
    title: 'Echoes of Mitla',
    duration: '3 min',
    year: '2024',
    genre: 'Poetic Documentary',
    description: 'A poetic exploration of the archaeological site of Mitla in Oaxaca, Mexico, examining how ancient Zapotec spaces hold contemporary meaning for indigenous communities facing linguistic and cultural erasure.',
    synopsis: 'This documentary delves into the sacred spaces of Mitla, connecting ancient Zapotec architecture and spiritual practices with modern indigenous communities\' struggles against cultural assimilation. The film explores how physical spaces can serve as repositories of memory and resistance.',
    videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/mitla.MP4',
    awards: ['Gilman Scholar Project', 'Cornell Latin & Caribbean American Studies'],
    themes: ['Cultural Preservation', 'Indigenous Knowledge', 'Archaeological Memory', 'Zapotec Heritage'],
    productionContext: 'Created during Gilman Scholar fieldwork in south Mexico, focusing on endangered language preservation among Indigenous Zapotec communities',
    funding: 'U.S. Department of Cultural Affairs, Benjamin A. Gilman Scholarship, Cornell Latin & Caribbean American Studies',
    status: 'Completed',
    videoFilter: 'brightness(0.6) contrast(1.0) saturate(1.3)'
  },
  {
    id: 'the-sister-archive',
    title: 'The Sister Archive',
    duration: '10 min',
    year: '2025',
    genre: 'Documentary Portrait',
    description: 'An intimate documentary following four Arab sisters embarking on their first trip together abroad, exploring healing, reconnection, and the complexities of immigrant family bonds.',
    synopsis: 'For some sisters, this marks their first international travel since immigrating to the United States. The film captures their journey of rebuilding relationships, navigating cultural identities between their Arab heritage and American lives, and discovering new dimensions of sisterhood through shared experience.',
    videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/sis.MP4',
    awards: ['In Production'],
    themes: ['Immigrant Experience', 'Sisterhood', 'Healing Journeys', 'Arab Diaspora', 'Family Reconciliation'],
    productionContext: 'Personal documentary exploring the dynamics of Arab sisterhood and the immigrant family experience',
    status: 'In Production',
    comingSoon: true
  },
  {
  id: 'fragments',
  title: 'Fragments',
  duration: '2 min',
  year: '2023',
  genre: 'Experimental Documentary',
  description: 'An intimate experimental short film serving as a message to my younger brother\'s future self, preserving fragments of his childhood innocence before the world shapes his understanding.',
  synopsis: 'Through layered soundscapes and fragmented visuals, this film captures fleeting moments of my brother\'s childhood - his laughter, curiosity, and unburdened joy. It\'s a time capsule of Palestinian boyhood, a love letter from his present self to the man he will become, preserving the sounds and images of innocence before awareness settles in.',
  videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/fragment.MP4',
  awards: ['College Art Exhibition Selection'],
  themes: ['Childhood Innocence', 'Palestinian Identity', 'Memory Preservation', 'Intergenerational Hope'],
  productionContext: 'Created as part of a college sound design course, experimenting with audio layering and visual fragmentation techniques',
  artisticStatement: `This film emerged from watching my younger brother navigate childhood with a Palestinian heritage I knew would shape his future in ways neither of us could predict. In his laughter, I heard echoes of resilience; in his questions, the beginnings of understanding.

The "fragments" are both literal and metaphorical - pieces of sound, glimpses of moments, shards of cultural identity that will eventually form his whole self. As his older sibling, I wanted to preserve the purity of his current perspective before the world inevitably complicates it.

The experimental approach reflects how memory itself works - not as linear narrative, but as sensory fragments that accumulate meaning over time.`,
  status: 'Archived',
  comingSoon: true
}
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        if (entry.isIntersecting) {
          video.play().catch(e => console.log("Video play failed:", e))
        } else {
          video.pause()
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    videoRefs.current.forEach(video => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach(video => {
        if (video) observer.unobserve(video)
      })
    }
  }, [])
  
  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/short-films.MP4"
      videoStyle={{
        filter: 'brightness(0.27) contrast(1.1) saturate(1.2)'
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
          <h1 className={styles.subPageTitle}>Short Films</h1>
          <p className={styles.subPageSubtitle}>
            Narrative and experimental works exploring indigenous futurism through compelling storytelling
          </p>
        </div>

        {/* Short Films Grid */}
        <div className={styles.shortFilmsContainer}>
          <div className={styles.shortFilmsGrid}>
            {shortFilms.map((film, index) => (
              film.comingSoon ? (
                <div key={film.id} className={`${styles.shortFilmCard} ${styles.comingSoonCard}`}>
                  <div className={styles.shortFilmVideoContainer}>
                    <video
                      ref={el => videoRefs.current[index] = el}
                      muted
                      loop
                      playsInline
                      className={styles.shortFilmVideo}
                      style={{
                        filter: 'brightness(0.4) contrast(0.8) saturate(1.4)'
                      }}
                    >
                      <source src={film.videoSrc} type="video/mp4" />
                    </video>

                    <div className={styles.shortFilmVideoOverlay}>
                      <div className={styles.shortFilmDuration}>{film.duration}</div>
                      <div className={`${styles.shortFilmStatus} ${styles[film.status.toLowerCase().replace(/\s+/g, '')]}`}>
                        {film.status}
                      </div>
                    </div>

                    <div className={styles.shortFilmHover}>
                      <div className={styles.playButton}>▶</div>
                      <div className={styles.watchText}>Coming Soon</div>
                    </div>
                  </div>

                  <div className={styles.shortFilmContent}>
                    <div className={styles.shortFilmHeader}>
                      <h3 className={styles.shortFilmTitle}>{film.title}</h3>
                      <div className={styles.shortFilmMeta}>
                        <span className={styles.shortFilmGenre}>{film.genre}</span>
                        <span className={styles.shortFilmYear}>{film.year}</span>
                      </div>
                    </div>

                    <p className={styles.shortFilmDescription}>{film.description}</p>

                    <div className={styles.shortFilmThemes}>
                      {film.themes.slice(0, 2).map((theme, i) => (
                        <span key={i} className={styles.themeTag}>{theme}</span>
                      ))}
                    </div>

                    {film.awards && film.awards.length > 0 && (
                      <div className={styles.shortFilmAward}>
                        🏆 {film.awards[0]}
                      </div>
                    )}

                    <div className={styles.comingSoonText}>
                      Coming Soon<span className={styles.blinkingDots}>...</span>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={film.id} to={`/film/short-films/${film.id}`} className={styles.shortFilmCard}>
                  <div className={styles.shortFilmVideoContainer}>
                    <video
                      ref={el => videoRefs.current[index] = el}
                      muted
                      loop
                      playsInline
                      className={styles.shortFilmVideo}
                      style={{
                        filter: film.videoFilter
                      }}
                    >
                      <source src={film.videoSrc} type="video/mp4" />
                    </video>

                    <div className={styles.shortFilmVideoOverlay}>
                      <div className={styles.shortFilmDuration}>{film.duration}</div>
                      <div className={`${styles.shortFilmStatus} ${styles[film.status.toLowerCase().replace(/\s+/g, '')]}`}>
                        {film.status}
                      </div>
                    </div>

                    <div className={styles.shortFilmHover}>
                      <div className={styles.playButton}>▶</div>
                      <div className={styles.watchText}>Watch Film</div>
                    </div>
                  </div>

                  <div className={styles.shortFilmContent}>
                    <div className={styles.shortFilmHeader}>
                      <h3 className={styles.shortFilmTitle}>{film.title}</h3>
                      <div className={styles.shortFilmMeta}>
                        <span className={styles.shortFilmGenre}>{film.genre}</span>
                        <span className={styles.shortFilmYear}>{film.year}</span>
                      </div>
                    </div>

                    <p className={styles.shortFilmDescription}>{film.description}</p>

                    <div className={styles.shortFilmThemes}>
                      {film.themes.slice(0, 2).map((theme, i) => (
                        <span key={i} className={styles.themeTag}>{theme}</span>
                      ))}
                    </div>

                    {film.awards && film.awards.length > 0 && (
                      <div className={styles.shortFilmAward}>
                        🏆 {film.awards[0]}
                      </div>
                    )}

                    <div className={styles.viewShortFilmBtn}>
                      <span>View Details</span>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Filmmaker Statement */}
        <div className={styles.filmmakerStatement}>
          <h3 className={styles.statementTitle}>Short Film Philosophy</h3>
          <div className={styles.statementContent}>
            <p>
              Short films allow for concentrated storytelling that can pack powerful messages 
              into brief experiences. Each film serves as a thought experiment: what happens 
              when indigenous wisdom meets speculative technology?
            </p>
            <p>
              These stories prioritize character development and emotional resonance while 
              exploring complex themes of cultural identity, technological ethics, and 
              indigenous futurism in accessible, engaging narratives.
            </p>
            <span className={styles.statementSignature}>— Creative Process Notes</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ShortFilmsPage