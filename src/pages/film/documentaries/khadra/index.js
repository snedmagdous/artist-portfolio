// src/pages/film/documentaries/khadra/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./khadra.module.css"

const KhadraPage = () => {
  const [language, setLanguage] = useState('EN')
  const [showGraphicModal, setShowGraphicModal] = useState(false)

  const documentaryData = {
    title: 'Khadra',
    subtitle: 'Let the Dead Go Home',
    arabicTitle: 'خَضْرَا: دعي الأموات يعودون إلى بيوتهم',
    year: '2025 - In Development',
    format: 'Experimental Memoir, Magical Realism',
    role: 'Director, Writer',
    status: 'Pre-Production',
    graphicUrl: '/images/film/khadra.jpg',
    synopsis: 'Khadra is an experimental memoir tracing a Palestinian-Jordanian\'s spiritual journey across Arab diasporas to Palestine, weaving ancestral memory with magical realism to reimagine liberated futures. In essence, this film is a cinematic narrative about Indigenous Futurism that explores the process of letting the dead go home to learn what it means to love again.',
    deeperDescription: 'Named in honor of my great grandmother Khadra, a Bedouin who was the first in her lineage to mysteriously appear with green eyes, this biographical film hybridizes documentary storytelling with fictional recreation to explore diasporic identity amid genocide and displacement.',
    themes: ['Indigenous Futurism', 'Magical Realism', 'Palestinian Diaspora', 'Ancestral Memory', 'Spiritual Journey', 'Land-Body Connections', 'Intergenerational Trauma', 'Liberation Futures'],
    collaborators: [
      {
        name: 'Axaraly Ortiz',
        role: 'Co-Producer, US Operations',
        description: 'Leading student interview coordination and domestic filming oversight across Turtle Island.'
      },
      {
        name: 'Iman Ali',
        role: 'Regional Producer, SWANA',
        description: 'Conducting anthropological research and narrative collection across Southwest Asia and North Africa.'
      },
      {
        name: 'Caleb Thomas',
        role: 'Community Liaison',
        description: 'Facilitating connections across artist-activist networks and solidarity communities in the US.'
      }
    ],
    productionPhases: [
      {
        phase: 'Phase I: Turtle Island',
        description: 'Documenting student and community protests, encampments, and Arab diasporas in the US. Collecting stories from Palestinian, Egyptian, Sudanese, and other families across the cinematic greenery of Turtle Island.',
        locations: 'New York, Cornell University, US Arab Communities'
      },
      {
        phase: 'Phase II: Childhood Returns',
        description: 'Journeying to Saudi Arabia, specifically Al Khobar where I spent my childhood, to reconnect with formative landscapes and memories.',
        locations: 'Al Khobar, Saudi Arabia'
      },
      {
        phase: 'Phase III: Ancestral Homelands',
        description: 'Traveling through Palestine, Jordan, and beyond to trace family stories separated after the Nakba, exploring Jordan\'s grazing lands where Palestinians settled after 1948 and 1967.',
        locations: 'Palestine, Jordan, SWANA Region'
      }
    ],
    magicalRealismElements: [
      'Fictional scenes where ancestors and descendants meet at temporal crossroads',
      'Encounters between my future self and great grandmother Khadra in desert landscapes',
      'Visualizations through "Alam al-Malakut" - the realm where time and territory dissolve',
      'Desert pilgrimages on camelback bridging past and future',
      'The concept of "khodr" (green) traced across landscapes from New York fields to Jordanian grazing lands'
    ],
    nameReclamation: 'A central narrative thread explores my family name "Mir\'ie," legally changed to Murry by my father before our US immigration to disconnect from his carceral history, and my process of reclaiming connections to family members separated after the Nakba.',
    inspiration: 'This project takes deep inspiration from activist Angela Davis: "There are dimensions of freedom we could have never imagined if we did not start fighting for what we thought was freedom."',
    filmingBackground: 'My filmmaking foundation includes two 10-minute documentaries and the very first footage I ever captured documented my family\'s migration from Saudi Arabia to the US—raw, intimate material that forms this project\'s documentary backbone alongside family archives spanning multiple generations and countries.'
  }

  const openGraphicModal = () => {
    setShowGraphicModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeGraphicModal = () => {
    setShowGraphicModal(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc='https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/khadra.MP4'
      videoStyle={{
        filter: 'brightness(0.4) contrast(1.1) saturate(1.1)'
      }}
    >
      <section className={styles.documentaryPage}>
        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingDot} style={{top: '20%', left: '10%'}}></div>
          <div className={styles.floatingDot} style={{top: '60%', right: '15%'}}></div>
          <div className={styles.floatingDot} style={{bottom: '30%', left: '20%'}}></div>
        </div>

        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/film/documentaries" className={styles.backLink}>
            Back to Documentaries
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.documentaryHero}>
          <div className={styles.heroContent}>
            <div className={styles.titleContainer}>
              <h1 className={styles.documentaryTitle}>
                <span className={styles.mainTitle}>{documentaryData.title}</span>
                <span className={styles.subtitle}>{documentaryData.subtitle}</span>
              </h1>
              <div className={styles.arabicTitle}>{documentaryData.arabicTitle}</div>
            </div>
            
            <div className={styles.documentaryMeta}>
              <span className={styles.metaItem}>{documentaryData.year}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.format}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.status}</span>
            </div>
            
            <div className={styles.roleInfo}>
              <span className={styles.roleLabel}>Role:</span>
              <span className={styles.roleValue}>{documentaryData.role}</span>
            </div>
            
            {/* See Graphic Button */}
            <div className={styles.graphicSection}>
              <button onClick={openGraphicModal} className={styles.seeGraphicBtn}>
                See Ancestral Collage
              </button>
            </div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className={styles.synopsisSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Project Vision</h2>
            <p className={styles.synopsis}>{documentaryData.synopsis}</p>
            <p className={styles.deeperDescription}>{documentaryData.deeperDescription}</p>
          </div>
        </div>

        {/* Themes */}
        <div className={styles.themesSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Themes & Concepts</h3>
            <div className={styles.themesList}>
              {documentaryData.themes.map((theme, index) => (
                <span key={index} className={styles.themeTag}>{theme}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Magical Realism Section */}
        <div className={styles.magicalRealismSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Magical Realism Elements</h3>
            <div className={styles.magicalElements}>
              {documentaryData.magicalRealismElements.map((element, index) => (
                <div key={index} className={styles.magicalElement}>
                  <div className={styles.elementIcon}>✦</div>
                  <p className={styles.elementText}>{element}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Production Phases */}
        <div className={styles.productionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Production Journey</h3>
            <div className={styles.phasesList}>
              {documentaryData.productionPhases.map((phase, index) => (
                <div key={index} className={styles.phaseCard}>
                  <div className={styles.phaseNumber}>{index + 1}</div>
                  <div className={styles.phaseContent}>
                    <h4 className={styles.phaseTitle}>{phase.phase}</h4>
                    <p className={styles.phaseDescription}>{phase.description}</p>
                    <div className={styles.phaseLocations}>
                      <span className={styles.locationsLabel}>Locations:</span>
                      <span className={styles.locationsText}>{phase.locations}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collaborators
        <div className={styles.collaboratorsSection}>
          <div className={styles.sectionContent}>
            {/* <h3 className={styles.sectionSubtitle}>Primary Collaborators</h3> */}
            {/* <div className={styles.collaboratorsList}>
              {documentaryData.collaborators.map((collaborator, index) => (
                <div key={index} className={styles.collaboratorCard}>
                  <h4 className={styles.collaboratorName}>{collaborator.name}</h4>
                  <span className={styles.collaboratorRole}>{collaborator.role}</span>
                  <p className={styles.collaboratorDescription}>{collaborator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */} 

        {/* Name Reclamation Story */}
        <div className={styles.nameReclamationSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Reclaiming Identity</h3>
            <p className={styles.nameReclamationText}>{documentaryData.nameReclamation}</p>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Director's Vision</h3>
            <blockquote className={styles.inspirationQuote}>
              "{documentaryData.inspiration.split(': "')[1]}"
              <cite>— Angela Davis</cite>
            </blockquote>
            <p className={styles.filmingBackground}>{documentaryData.filmingBackground}</p>
          </div>
        </div>

        {/* Connection to Other Works */}
        <div className={styles.connectionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Cinematic Lineage</h3>
            <p className={styles.connectionText}>
              Khadra builds directly from my recent short documentary "Love as Revolution," 
              where the final moments speak of "letting the dead go home to learn what it means to love again" 
              — a concept that becomes the central exploration of this experimental memoir.
            </p>
            <div className={styles.relatedWorks}>
              <Link to="/film/documentaries/love-as-revolution" className={styles.relatedLink}>
                <span>From Love as Revolution</span>
              </Link>
              <Link to="/film/documentaries/still-singing" className={styles.relatedLink}>
                <span>To Ancestral Wisdom</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Graphic Modal */}
        {showGraphicModal && (
          <div className={styles.graphicModal} onClick={closeGraphicModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeGraphicModal}>
                ×
              </button>
              
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>Ancestral Collage</h2>
                <div className={styles.modalMeta}>
                  <span>Visual Research & Development</span>
                </div>
              </div>
              
              <div className={styles.graphicContainer}>
                <img 
                  src={documentaryData.graphicUrl} 
                  alt="Ancestral collage featuring family photographs and archival materials"
                  className={styles.ancestralGraphic}
                />
              </div>
              
              <div className={styles.modalDescription}>
                <p>
                  This collage weaves together archival family photographs archival that inform
                  the magical realism elements of Khadra. Each image represents a thread in 
                  the tapestry of ancestral memory that the film seeks to honor and reimagine.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default KhadraPage