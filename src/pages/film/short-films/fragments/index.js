// src/pages/film/short-films/fragments/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "../../film.module.css"

const FragmentsPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
    }
  }, [])

  const filmData = {
    title: 'Fragments',
    duration: '6 min',
    year: '2023',
    genre: 'Supernatural Thriller',
    status: 'Archived',
    videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/lil-bro.MP4',
    description: 'Radio signals from a remote indigenous community begin containing messages from the spirit world, forcing a skeptical radio operator to reconsider their beliefs.',
    synopsis: 'When electromagnetic interference at a radio station starts forming patterns that match traditional spirit communication methods, the operator must bridge two worlds of understanding.',
    awards: [
      'Best Short - Supernatural Film Festival 2023'
    ],
    themes: ['Spiritual Communication', 'Technology', 'Belief Systems'],
    directorStatement: `"Fragments" explores the intersection between traditional spiritual practices and modern technology. The film emerged from conversations with elders about how spiritual communication has evolved in the digital age.

    The radio waves become a metaphor for the invisible connections that exist between the physical and spiritual worlds. Just as radio frequencies exist whether we tune into them or not, spiritual communication operates on its own wavelength, requiring the right kind of attention and respect.

    The film questions the assumption that technology and spirituality are incompatible, instead suggesting that technology can become a bridge when approached with the right understanding and intention.`,
    technicalNotes: `Filmed entirely in a functioning radio station in rural New York, with permission to capture actual radio equipment and transmission processes.

    The "spirit voices" were created using field recordings from traditional ceremonies (used with permission) combined with electromagnetic interference patterns recorded during solar storm activity.

    The visual style emphasizes the liminal space between worlds - using practical lighting effects and minimal digital intervention to create the sense of otherworldly presence.`,
    screenings: [
      {
        venue: 'Supernatural Film Festival',
        location: 'Portland, OR',
        date: 'October 2023',
        note: 'Best Short Winner'
      },
      {
        venue: 'Indigenous Storytelling Circle',
        location: 'Ithaca, NY',
        date: 'November 2023',
        note: 'Community Screening'
      },
      {
        venue: 'Experimental Film Collective',
        location: 'Brooklyn, NY',
        date: 'January 2024',
        note: 'Underground Screening'
      }
    ]
  }

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/short-films.MP4"
      videoStyle={{
        filter: 'brightness(0.35) contrast(1.1) saturate(1.2)'
      }}
    >
      <section className={styles.filmDetailPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/film/short-films" className={styles.backLink}>
            Back to Short Films
          </Link>
        </div>

        {/* Film Hero */}
        <div className={styles.filmHero}>
          <div className={styles.filmVideoContainer}>
            <video
              ref={videoRef}
              controls
              className={styles.filmVideo}
              style={{
                filter: 'brightness(0.9) contrast(1.1) saturate(1.0)'
              }}
            >
              <source src={filmData.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className={styles.filmHeroContent}>
            <h1 className={styles.filmTitle}>{filmData.title}</h1>
            <div className={styles.filmMeta}>
              <span className={styles.filmDuration}>{filmData.duration}</span>
              <span className={styles.filmGenre}>{filmData.genre}</span>
              <span className={styles.filmYear}>{filmData.year}</span>
              <span className={`${styles.filmStatus} ${styles[filmData.status.toLowerCase().replace(/\s+/g, '')]}`}>
                {filmData.status}
              </span>
            </div>
            <p className={styles.filmDescription}>{filmData.description}</p>
          </div>
        </div>

        {/* Film Details */}
        <div className={styles.filmContent}>
          {/* Synopsis */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Synopsis</h3>
            <p className={styles.sectionText}>{filmData.synopsis}</p>
          </div>

          {/* Themes */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Themes</h3>
            <div className={styles.themesContainer}>
              {filmData.themes.map((theme, index) => (
                <span key={index} className={styles.themeTag}>{theme}</span>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Recognition</h3>
            <div className={styles.awardsContainer}>
              {filmData.awards.map((award, index) => (
                <div key={index} className={styles.awardItem}>
                  🏆 {award}
                </div>
              ))}
            </div>
          </div>

          {/* Director Statement */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Director's Statement</h3>
            <div className={styles.statementContent}>
              {filmData.directorStatement.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.sectionText}>{paragraph}</p>
              ))}
              <span className={styles.statementSignature}>— Māyā Murry, Director</span>
            </div>
          </div>

          {/* Technical Notes */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Production Notes</h3>
            <div className={styles.technicalContent}>
              {filmData.technicalNotes.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.sectionText}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Screenings */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Screenings</h3>
            <div className={styles.screeningsContainer}>
              {filmData.screenings.map((screening, index) => (
                <div key={index} className={styles.screeningItem}>
                  <div className={styles.screeningVenue}>{screening.venue}</div>
                  <div className={styles.screeningLocation}>{screening.location}</div>
                  <div className={styles.screeningDate}>{screening.date}</div>
                  {screening.note && (
                    <div className={styles.screeningNote}>{screening.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FragmentsPage