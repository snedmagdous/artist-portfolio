// src/pages/film/short-films/mitla/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./mitla.module.css"

const EchoesOfMitlaPage = () => {
  const [language, setLanguage] = useState('EN')
  const [showVideoModal, setShowVideoModal] = useState(false)
  const openVideoModal = () => {
  setShowVideoModal(true)
  document.body.style.overflow = 'hidden'
}

const closeVideoModal = () => {
  setShowVideoModal(false)
  document.body.style.overflow = 'unset'
}

  const filmData = {
    title: 'Echoes of Mitla',
    duration: '3 min',
    year: '2024',
    genre: 'Poetic Documentary',
    status: 'Festival Circuit',
    videoSrc: 'https://www.youtube.com/embed/9UEWA5Q-0K4?si=tcCD01i_jP3kU_km',
    description: 'A poetic documentary exploring the archaeological site of Mitla in Oaxaca, Mexico, examining how ancient Zapotec spaces hold contemporary meaning for indigenous communities facing linguistic and cultural erasure.',
    synopsis: 'This documentary delves into the sacred spaces of Mitla, connecting ancient Zapotec architecture and spiritual practices with modern indigenous communities\' struggles against cultural assimilation. The film explores how physical spaces can serve as repositories of memory and resistance, documenting the ongoing efforts to preserve Zapotec language and traditions in the face of globalization.',
    awards: [
      'Gilman Scholar Project',
      'Cornell Latin & Caribbean American Studies Grant'
    ],
    themes: ['Cultural Preservation', 'Indigenous Knowledge', 'Archaeological Memory', 'Zapotec Heritage', 'Language Revitalization'],
    directorStatement: `"Echoes of Mitla" was born from my fieldwork as a Gilman Scholar in south Mexico, where I witnessed firsthand the resilience of Zapotec communities working to preserve their language and cultural practices. The film takes its title and inspiration from Felipe H. Lopez's poem "Mitla" (Gueizh Anym in Zapotec), which explores themes of ancestral connection and the spiritual journey to this sacred site. The poem's haunting questions—"How will I cross the river? How will I reach Mitla?"—resonate with the contemporary struggle of Indigenous communities navigating the currents of modernization while maintaining ties to their ancestral lands. Mitla, with its intricate geometric patterns that represent complex mathematical and spiritual concepts, becomes a living metaphor for the interconnectedness of past and present. This film is both an archaeological exploration and a contemporary document, asking what it means to preserve cultural memory in an era of rapid change.`,
    
    productionContext: `Created during my Benjamin A. Gilman Scholarship fieldwork in Oaxaca, Mexico, "Echoes of Mitla" emerged from my research on endangered language preservation among indigenous Zapotec communities. The project allowed me to combine my computational background with documentary practice. The film involved collaboration with local Zapotec historians and community members who shared their knowledge of Mitla's spiritual significance and the ongoing efforts to maintain Zapotec language education in the region.`,
    funding: [
      'U.S. Department of Cultural Affairs',
      'Benjamin A. Gilman Scholarship', 
      'Cornell Latin & Caribbean American Studies Program'
    ],

    screenings: [
      {
        venue: 'Indigenous Film & Media Festival',
        location: 'Oaxaca, Mexico',
        date: 'March 2024',
        note: 'Community Screening'
      },
      {
        venue: 'Gilman Scholar Symposium',
        location: 'Washington, D.C.',
        date: 'April 2024',
        note: 'Research Presentation'
      },
      {
        venue: 'Cornell Latin American Studies',
        location: 'Ithaca, NY',
        date: 'May 2024',
        note: 'Academic Screening'
      }
    ],

    poeticInspiration: {
      title: 'Mitla (Gueizh Anym)',
      author: 'Felipe H. Lopez',
      english: `I saw myself with eyes closed.
It's me that is lying there,
lying still.
I said to myself, "I will not stay here.
I will go back to my pueblo."
People are coming in and out.
There's lots of crying.
"He's already gone," I hear.
I want to move.
My eyes don't open.
I should have gone back sooner.
I should have stayed in my pueblo.
I try to yell.
I look at my face again, my eyes shut.
I don't have my clothes—
Will someone else dare to wear them?
There are no tortillas in my hands—
What will I eat?
I don't see any coins—
How will I cross the river?
How will I reach Mitla?`,

      zapotec: `Bwia lua zhii.
Naani nata ricy.
Nata zhi.
Rnia naa, "Re queitya gyana.
Lazha gyicya."
Buny ze, buny zied.
Gal ruan rac.
"A zeëng," rinydyaga.
Rcaza ynibya.
Queity rzhyeilydi bzilua.
Xini queity nyaga?
Loguezh nyana.
Jwers runya cuzha.
Rgwia lua steiby, niuag bzilua.
Caria ra xaba —
Nu tu gacwri e?
Guet cariainy losnaa —
Xi gaua?
Caria muly gyinylua —
Xu teidya gueu?
Xu yzeinya gueizh anym?`,

      source: 'https://latinamericanliteraturetoday.org/2018/07/seven-poems-felipe-h-lopez/'
    }
  }

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/mitla.MP4"
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

        {/* Film Hero - UPDATED: No video, just title and watch button */}
        <div className={styles.filmHero}>
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
            
            {/* Watch Film Button */}
            <div className={styles.watchFilmSection}>
              <button 
                className={styles.watchFilmBtn}
                onClick={openVideoModal}
              >
                <span>Watch Film</span>
                <span className={styles.playIcon}>▶</span>
              </button>
            </div>
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

          {/* Awards & Funding */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Recognition & Support</h3>
            <div className={styles.awardsContainer}>
              {filmData.awards.map((award, index) => (
                <div key={index} className={styles.awardItem}>
                  🏆 {award}
                </div>
              ))}
              {filmData.funding.map((fund, index) => (
                <div key={`fund-${index}`} className={styles.awardItem}>
                  💫 {fund}
                </div>
              ))}
            </div>
          </div>

          {/* Poetic Inspiration - UPDATED: Two columns with white text */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Poetic Inspiration</h3>
            <div className={styles.sectionContent}>
              <h4 className={styles.sectionSubtitle}>"{filmData.poeticInspiration.title}" by {filmData.poeticInspiration.author}</h4>
              
              <div className={styles.poemContainer}>
                <div className={styles.poemColumn}>
                  <h5 className={styles.poemLanguage}>English</h5>
                  <div className={styles.poemText}>{filmData.poeticInspiration.english}</div>
                </div>
                <div className={styles.poemColumn}>
                  <h5 className={styles.poemLanguage}>Zapotec (Gueizh Anym)</h5>
                  <div className={styles.poemText}>{filmData.poeticInspiration.zapotec}</div>
                </div>
              </div>
              
              <p className={styles.poemSource}>
                Source: <a href={filmData.poeticInspiration.source} target="_blank" rel="noopener noreferrer">Latin American Literature Today</a>
              </p>
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

          {/* Production Context */}
          <div className={styles.filmSection}>
            <h3 className={styles.sectionTitle}>Production Context</h3>
            <div className={styles.technicalContent}>
              {filmData.productionContext.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.sectionText}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Video Modal */}
      {showVideoModal && (
        <div className={styles.videoModal} onClick={closeVideoModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeVideoModal}>
              ×
            </button>
            
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{filmData.title}</h2>
              <div className={styles.modalMeta}>
                <span>{filmData.year}</span>
                <span>•</span>
                <span>{filmData.duration}</span>
                <span>•</span>
                <span>{filmData.genre}</span>
              </div>
            </div>
            
            <div className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src={filmData.videoSrc}
                title={filmData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className={styles.modalDescription}>
              <p>{filmData.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default EchoesOfMitlaPage