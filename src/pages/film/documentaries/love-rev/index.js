// src/pages/film/documentaries/love-as-revolution/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./love-rev.module.css"

const LoveAsRevolutionPage = () => {
  const [language, setLanguage] = useState('EN')
  const [showVideoModal, setShowVideoModal] = useState(false)

  const documentaryData = {
    title: 'Love as Revolution',
    year: '2025',
    duration: '11 minutes',
    format: 'Short Film, Experimental Documentary',
    role: 'Director, Editor, Producer',
    videoUrl: 'https://youtu.be/ZAWwKYqlJ-k',
    synopsis: 'An intimate exploration of how love functions as a radical act of resistance within social justice movements. The film weaves together mural narratives and community organizing to examine love as both a healing practice and revolutionary force.',
    deeperDescription: 'The final minutes of this film, where I speak about "letting the dead go home to learn what it means to love again," serve as Khadra\'s opening sequence, triggering the deeper ancestral exploration of the documentary that follows. Screened strategically before The Encampments movie locally, in solidarity with Palestinian, Black, Indigenous, & Jewish Liberation movements.',
    themes: ['Social Justice', 'Love as Resistance', 'Community Organizing', 'Healing Practices', 'Solidarity'],
    screenings: [
      {
        venue: 'Schwartz Performing Center',
        date: 'May 8, 2025',
        attendance: '50+ attendance',
        notes: 'University premiere screening'
      },
      {
        venue: 'Cinemapolis Theater, Ithaca NY',
        date: 'May 22, 2025',
        attendance: '200+ attendance',
        notes: 'Community screening with panel discussion'
      },
      {
        venue: 'Community School of Music & Arts',
        date: 'July 10, 2025',
        attendance: '100+ attendance',
        notes: 'Upcoming screening with Q&A'
      }
    ],
    funding: [
      'The Cornell Society for the Humanities Award',
      'The Rural Humanities Seminar Award'
    ],
    artistStatement: 'This film emerged from my own journey of understanding love not as a passive emotion, but as an active choice to resist systems of oppression. Through intimate conversations with organizers and activists, I discovered that love—for community, for justice, for our ancestors—becomes the fuel that sustains movements when everything else feels impossible, and that murals can become a medium to project and manifest this radical future we imagine.',
    productionNotes: 'Shot over 8 months across multiple communities, this film prioritized consent and collaboration at every stage. Participants maintained editorial control over their segments, ensuring their stories remained authentic to their experiences.',
    quotes: [
      {
        text: "'Love as Liberation' is crucial because it's only through love that you can truly free people or experience freedom. And I believe that the mural artists that paint or create things on walls are doing the exact same thing. They are moving through time and space and learning more about themselves and putting something beautiful that's reflective of themselves on a canvas. To me, that is love in action, which leads to liberation - for the artist and for the people in the space.",
        speaker: "Megan Omohundro, Executive Director of the Community School of music & Arts"
      },

    ]
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
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/love-rev-doc.mp4"
      videoStyle={{
        filter: 'brightness(0.45) contrast(1.14) saturate(1.2)'
      }}
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
            <h3 className={styles.sectionSubtitle}>Themes Explored</h3>
            <div className={styles.themesList}>
              {documentaryData.themes.map((theme, index) => (
                <span key={index} className={styles.themeTag}>{theme}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Screenings */}
        <div className={styles.screeningsSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Screenings</h3>
            <div className={styles.screeningsList}>
              {documentaryData.screenings.map((screening, index) => (
                <div key={index} className={styles.screeningItem}>
                  <div className={styles.screeningHeader}>
                    <h4 className={styles.screeningVenue}>{screening.venue}</h4>
                    <span className={styles.screeningDate}>{screening.date}</span>
                  </div>
                  <div className={styles.screeningDetails}>
                    <span className={styles.screeningAttendance}>{screening.attendance}</span>
                    <span className={styles.screeningNotes}>{screening.notes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Director's Statement</h3>
            <p className={styles.statementText}>{documentaryData.artistStatement}</p>
          </div>
        </div>

        {/* Production Notes */}
        <div className={styles.productionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Production Notes</h3>
            <p className={styles.productionText}>{documentaryData.productionNotes}</p>
            
            <div className={styles.fundingInfo}>
              <h4 className={styles.fundingTitle}>Supported By</h4>
              <div className={styles.fundingList}>
                {documentaryData.funding.map((funder, index) => (
                  <span key={index} className={styles.fundingItem}>{funder}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quotes/Reviews */}
        <div className={styles.quotesSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Interview Highlight</h3>
            <div className={styles.quotesList}>
              {documentaryData.quotes.map((quote, index) => (
                <blockquote key={index} className={styles.quote}>
                  <p className={styles.quoteText}>"{quote.text}"</p>
                  <cite className={styles.quoteSpeaker}>— {quote.speaker}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

        {/* Mural Connection Section */}
        <div className={styles.muralConnectionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>From Film to Mural</h3>
            <p className={styles.muralConnectionText}>
              The themes explored in this documentary found physical expression in a community-funded 
              mural project at the Community School of Music & Arts - produced by the same director,
              Māyā Murry. In a way, the mural and documentary are the same brainchild, both titled 
              'Love as Revolution.' This large-scale collaborative artwork brings the revolutionary 
              power of love into public space, creating a lasting visual reminder of our collective 
              capacity for radical healing and transformation.
            </p>
            <div className={styles.muralLinkSection}>
              <Link to="/art/murals/love-as-revolution" className={styles.muralLink}>
                <span className={styles.muralIcon}>🎨</span>
                <div className={styles.muralLinkContent}>
                  <span className={styles.muralLinkTitle}>Explore the Mural</span>
                  <span className={styles.muralLinkSubtext}>See the community art project inspired by this film</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Connection to Other Works */}
        <div className={styles.connectionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Part of a Larger Story</h3>
            <p className={styles.connectionText}>
              This film serves as the emotional and conceptual bridge to my upcoming work "Khadra," 
              where the exploration of love and ancestral healing continues through the lens of 
              Palestinian diaspora and magical realism.
            </p>
            <Link to="/film/documentaries/khadra" className={styles.connectionLink}>
              <span>Explore Khadra</span>
            </Link>
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

export default LoveAsRevolutionPage