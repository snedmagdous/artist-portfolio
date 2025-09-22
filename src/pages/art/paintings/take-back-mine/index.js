// src/pages/art/paintings/i-take-back-what-is-mine/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./take-back-mine.module.css"

const TakeBackMinePage = () => {
  const [language, setLanguage] = useState('EN')
  const [selectedPainting, setSelectedPainting] = useState(null)

  const paintings = [
    {
      id: 'earth-witness',
      title: 'Earth Witness',
      year: '2024',
      medium: 'Oil & Natural Pigments on Canvas',
      dimensions: '36" x 48"',
      image: '/images/paintings/take-back-mine/earth-witness.jpg',
      description: 'A figure stands rooted like an ancient tree, cesarean scars transformed into sacred markings that connect her to the earth. Her body tells stories of creation and survival, tribal tattoos weaving through skin like rivers of ancestral memory.',
      symbolism: 'The earth beneath her feet cracks and blooms simultaneously, representing how trauma can become the ground from which new growth emerges. Her stance is both vulnerable and unshakeable.',
      inspiration: 'For every woman who has been told her scars make her less beautiful, when they actually make her more fierce.',
      position: 'center'
    },
    {
      id: 'moon-daughter',
      title: 'Moon Daughter',
      year: '2024',
      medium: 'Oil & Silver Leaf on Canvas',
      dimensions: '30" x 40"',
      image: '/images/paintings/take-back-mine/moon-daughter.jpg',
      description: 'Bathed in moonlight, laparoscopy scars become constellations across her abdomen. She holds her belly not in shame but in recognition—these marks are proof of battles fought, of medical journeys that tried to silence her body but only made her voice stronger.',
      symbolism: 'The moon phases reflected in her scars represent cycles of healing, the natural rhythm of breaking down and rebuilding that women know intimately.',
      inspiration: 'Dedicated to the sisters who have fought endometriosis, PCOS, and reproductive struggles—your scars are galaxies.',
      position: 'leftTube'
    },
    {
      id: 'forest-sovereign',
      title: 'Forest Sovereign',
      year: '2024',
      medium: 'Oil & Copper Leaf on Canvas',
      dimensions: '42" x 30"',
      image: '/images/paintings/take-back-mine/forest-sovereign.jpg',
      description: 'She emerges from ancient woodland, vines and flowers growing from cesarean scars like she is both garden and gardener. Her tribal markings spiral up her arms like the bark of sacred trees, each line a prayer, each curve a declaration of sovereignty over her own flesh.',
      symbolism: 'The forest grows from her scars, showing how our deepest wounds can become our most fertile ground. She is both nurtured by nature and nurturing it.',
      inspiration: 'For the mothers who chose themselves, who made impossible decisions, who know that love sometimes looks like letting go.',
      position: 'rightTube'
    },
    {
      id: 'fire-bearer',
      title: 'Fire Bearer',
      year: '2024',
      medium: 'Oil & Gold Leaf on Canvas',
      dimensions: '38" x 44"',
      image: '/images/paintings/take-back-mine/fire-bearer.jpg',
      description: 'Flames dance across her skin, not consuming but illuminating. Surgical scars become lightning bolts of power, while traditional tattoos mark her as carrier of ancient wisdom. She holds fire in her hands—the same energy that others tried to extinguish, now burning brighter than ever.',
      symbolism: 'Fire represents the transformative power of rage channeled into healing, the alchemy of turning pain into purpose.',
      inspiration: 'To the women who refused to be quiet about their trauma, who turned their healing into advocacy, who became the fire they needed to see in the world.',
      position: 'bottomLeft'
    },
    {
      id: 'water-keeper',
      title: 'Water Keeper',
      year: '2024',
      medium: 'Oil & Pearl Dust on Canvas',
      dimensions: '34" x 46"',
      image: '/images/paintings/take-back-mine/water-keeper.jpg',
      description: 'Water flows around and through her, surgical scars transformed into rivers of healing. Her tattoos ripple like waves, telling stories of ancestors who survived floods and droughts. She is both the storm and the calm after, the deluge and the gentle rain.',
      symbolism: 'Water represents cleansing, renewal, and the fluid nature of healing—sometimes rushing, sometimes still, but always moving toward wholeness.',
      inspiration: 'For those who have learned that healing is not linear, that some days you are the hurricane and some days you are the peaceful lake, and both are sacred.',
      position: 'bottomRight'
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

  const getPaintingByPosition = (position) => {
    return paintings.find(painting => painting.position === position)
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/my-queens.MP4"
      videoStyle={{
        filter: 'brightness(0.45) contrast(1.2) saturate(1.2)'
      }}
    >
      <section className={styles.takeBackMinePage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/paintings" className={styles.backLink}>
            Back to Paintings
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.seriesHero}>
          <h1 className={styles.seriesTitle}>I Take Back What Is Mine</h1>
          <div className={styles.seriesInfo}>
            <span className={styles.seriesCount}>5 Pieces</span>
            <span className={styles.seriesYear}>2024</span>
            <span className={styles.seriesMedium}>Oil & Mixed Media</span>
          </div>
          <p className={styles.seriesDescription}>
            Coming soon...
            {/* A powerful reclamation of the feminine form—celebrating women in their 
            natural state, adorned with sacred tattoos and bearing the marks of their 
            journeys. These works transform surgical scars into symbols of strength, 
            honoring bodies that have been medicalized, judged, and controlled, now 
            standing sovereign in nature's embrace. */}
          </p>
        </div>

        {/* Sacred Anatomy Gallery */}
        <div className={styles.sacredAnatomyGallery}>
          <div className={styles.anatomyContainer}>
            {/* Sacred Anatomical Outline */}
            <div className={styles.sacredAnatomy}>
              <div className={styles.uterusBody}></div>
              <div className={styles.leftTube}></div>
              <div className={styles.rightTube}></div>
              <div className={styles.cervicalOpening}></div>
            </div>
            
            {/* Center Position - Earth Witness */}
            <div className={styles.paintingPosition1}>
              <div 
                className={styles.empowermentCard}
                onClick={() => openPaintingModal(getPaintingByPosition('center'))}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${getPaintingByPosition('center').image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{getPaintingByPosition('center').title}</h3>
                  <span className={styles.cardDetails}>{getPaintingByPosition('center').year} • {getPaintingByPosition('center').dimensions}</span>
                </div>
                <div className={styles.strengthAura}></div>
              </div>
            </div>

            {/* Left Tube Position - Moon Daughter */}
            <div className={styles.paintingPosition2}>
              <div 
                className={styles.empowermentCard}
                onClick={() => openPaintingModal(getPaintingByPosition('leftTube'))}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${getPaintingByPosition('leftTube').image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{getPaintingByPosition('leftTube').title}</h3>
                  <span className={styles.cardDetails}>{getPaintingByPosition('leftTube').year} • {getPaintingByPosition('leftTube').dimensions}</span>
                </div>
                <div className={styles.strengthAura}></div>
              </div>
            </div>

            {/* Right Tube Position - Forest Sovereign */}
            <div className={styles.paintingPosition3}>
              <div 
                className={styles.empowermentCard}
                onClick={() => openPaintingModal(getPaintingByPosition('rightTube'))}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${getPaintingByPosition('rightTube').image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{getPaintingByPosition('rightTube').title}</h3>
                  <span className={styles.cardDetails}>{getPaintingByPosition('rightTube').year} • {getPaintingByPosition('rightTube').dimensions}</span>
                </div>
                <div className={styles.strengthAura}></div>
              </div>
            </div>

            {/* Bottom Left Position - Fire Bearer */}
            <div className={styles.paintingPosition4}>
              <div 
                className={styles.empowermentCard}
                onClick={() => openPaintingModal(getPaintingByPosition('bottomLeft'))}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${getPaintingByPosition('bottomLeft').image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{getPaintingByPosition('bottomLeft').title}</h3>
                  <span className={styles.cardDetails}>{getPaintingByPosition('bottomLeft').year} • {getPaintingByPosition('bottomLeft').dimensions}</span>
                </div>
                <div className={styles.strengthAura}></div>
              </div>
            </div>

            {/* Bottom Right Position - Water Keeper */}
            <div className={styles.paintingPosition5}>
              <div 
                className={styles.empowermentCard}
                onClick={() => openPaintingModal(getPaintingByPosition('bottomRight'))}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${getPaintingByPosition('bottomRight').image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{getPaintingByPosition('bottomRight').title}</h3>
                  <span className={styles.cardDetails}>{getPaintingByPosition('bottomRight').year} • {getPaintingByPosition('bottomRight').dimensions}</span>
                </div>
                <div className={styles.strengthAura}></div>
              </div>
            </div>

            {/* Sacred Connection Lines */}
            <div className={styles.sacredConnections}>
              <div className={`${styles.connectionLine} ${styles.line1}`}></div>
              <div className={`${styles.connectionLine} ${styles.line2}`}></div>
              <div className={`${styles.connectionLine} ${styles.line3}`}></div>
              <div className={`${styles.connectionLine} ${styles.line4}`}></div>
              <div className={`${styles.connectionLine} ${styles.line5}`}></div>
            </div>
          </div>
        </div>

        {/* Reclamation Statement */}
        <div className={styles.reclamationStatement}>
          <div className={styles.reclamationContent}>
            <h3 className={styles.reclamationTitle}>On Reclamation</h3>
            <div className={styles.reclamationText}>
              <p>
                "They told us our scars made us broken. They told us our bodies 
                were battlefields, sites of failure, things to be fixed. They 
                were wrong. Our scars are proof of our survival, our strength, 
                our refusal to disappear quietly."
              </p>
              <p>
                "Every mark on our skin tells a story of endurance. Every tattoo 
                is a choice to adorn ourselves on our own terms. Every curve and 
                line is a declaration: this body is mine, has always been mine, 
                will always be mine."
              </p>
            </div>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>Series Statement</h3>
          <div className={styles.statementContent}>
            <p>
              "I Take Back What Is Mine" was born from my own journey through 
              reproductive trauma and the medical industrial complex that so often 
              treats women's bodies as problems to be solved rather than sacred 
              vessels to be honored. After my own surgeries, I found myself ashamed 
              of the marks left behind—until I realized that shame was not mine to carry.
            </p>
            <p>
              These paintings reclaim the narrative around women's bodies, particularly 
              those marked by medical intervention. The women in these works stand nude 
              not for the pleasure of viewers, but for their own sovereignty. Their tribal 
              tattoos and surgical scars create a new mythology—one where our marks become 
              our armor, our wounds become our wisdom, our bodies become our temples.
            </p>
            <p>
              Each figure is positioned within nature because that is where we belong—not 
              in sterile medical rooms being poked and prodded, but in the wild spaces 
              where our bodies can breathe, where our scars can catch sunlight, where we 
              can remember that we are not broken but beautifully, powerfully whole.
            </p>
            <span className={styles.statementSignature}>— Maya Murry, 2024</span>
          </div>
        </div>

        {/* Healing Journey */}
        <div className={styles.healingJourney}>
          <div className={styles.healingContent}>
            <h3 className={styles.healingTitle}>The Healing Journey</h3>
            <p className={styles.healingDescription}>
              This series is dedicated to every woman who has felt disconnected from 
              her own body, who has been told her natural form is somehow wrong, who 
              carries scars both visible and invisible from a world that seeks to 
              control rather than celebrate the feminine.
            </p>
            <blockquote className={styles.healingQuote}>
              "Healing is not about returning to who you were before. It's about 
              becoming who you were always meant to be—scars, stories, strength and all. 
              Your body is not your enemy. Your body is your home. Welcome yourself back."
            </blockquote>
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

export default TakeBackMinePage