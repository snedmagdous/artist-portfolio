// src/pages/art/paintings/in-the-image-of-my-queens-i-stand/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./queens-image.module.css"

const QueensImagePage = () => {
  const [language, setLanguage] = useState('EN')
  const [selectedPainting, setSelectedPainting] = useState(null)

  const paintings = [
    {
      id: 'ancestral-throne',
      title: 'COMING SOON...',
      year: '2023',
      medium: 'Oil & Gold Leaf on Canvas',
      dimensions: '48" x 36"',
      image: '/images/paintings/queens/ancestral-throne.jpg',
      description: 'The matriarchs who came before—grandmother figures whose strength carved pathways through impossible circumstances, their wisdom flowing like golden rivers through time.',
      symbolism: 'Gold leaf represents the precious nature of ancestral knowledge, while flowing forms suggest how their strength moves through generations like water finding its course.',
      inspiration: 'Honoring my great-grandmother Khadra and all the women whose names I may never know but whose courage lives in my bones.',
      timeframe: 'Past',
      element: 'Earth'
    },
    {
      id: 'mirror-of-now',
      title: 'Mirror of Now',
      year: '2024',
      medium: 'Oil & Mixed Media on Canvas',
      dimensions: '36" x 48"',
      image: '/images/paintings/queens/mirror.jpeg',
      description: 'The divine feminine within myself and my contemporaries—learning to see our own power, to stand in our truth, to be both warrior and healer in this present moment.',
      symbolism: 'Mirrors reflect not just image but essence, showing how present-moment women carry forward ancestral strength while forging new paths.',
      inspiration: 'For all the women I organize with, learn from, and love alongside—recognizing the divine in our daily acts of resistance and care.',
      timeframe: 'Present',
      element: 'Water'
    },
    {
      id: 'daughters-unborn',
      title: 'Daughters Unborn',
      year: '2024',
      medium: 'Oil & Luminescent Paint on Canvas',
      dimensions: '40" x 32"',
      image: '/images/paintings/queens/unborn.jpeg',
      description: 'The women who will come after us—daughters, granddaughters, and all who will inherit the world we are building, carrying our dreams into realities we can barely imagine.',
      symbolism: 'Luminescent paint suggests the radiant possibility of future generations, while ethereal forms represent potential and infinite possibility.',
      inspiration: 'Painting for the girls who will never doubt their worth, who will inherit our struggles transformed into their strength.',
      timeframe: 'Future',
      element: 'Fire'
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

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/istand.mp4"
      videoStyle={{
        filter: 'brightness(0.57) contrast(1.1) saturate(1.1)'
      }}
    >
      <section className={styles.queensImagePage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/paintings" className={styles.backLink}>
            Back to Paintings
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.seriesHero}>
          <h1 className={styles.seriesTitle}>In the Image of My Queens, I Stand</h1>
          <div className={styles.seriesInfo}>
            <span className={styles.seriesCount}>3 Pieces</span>
            <span className={styles.seriesYear}>2023-2024</span>
            <span className={styles.seriesMedium}>Oil & Mixed Media</span>
          </div>
          <p className={styles.seriesDescription}>
            A meditation on divine feminine lineage—honoring the queens who came before, 
            celebrating the sovereignty of women in this moment, and painting prayers 
            for the daughters who will inherit our dreams transformed into their realities.
          </p>
        </div>

        {/* Sacred Trinity Gallery */}
        <div className={styles.sacredGallery}>
          <div className={styles.trinityContainer}>
            {/* Sacred Circle Background */}
            <div className={styles.sacredCircle}></div>
            
            {/* Past - Ancestral Throne */}
            <div className={styles.timeframePast}>
              <div 
                className={`${styles.paintingCard} ${styles.pastCard}`}
                onClick={() => openPaintingModal(paintings[0])}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${paintings[0].image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <div className={styles.timeLabel}>Past</div>
                  <h3 className={styles.cardTitle}>{paintings[0].title}</h3>
                  <span className={styles.cardElement}>Earth • {paintings[0].year}</span>
                </div>
                <div className={styles.ancestralFlames}></div>
              </div>
            </div>

            {/* Present - Mirror of Now */}
            <div className={styles.timeframePresent}>
              <div 
                className={`${styles.paintingCard} ${styles.presentCard}`}
                onClick={() => openPaintingModal(paintings[1])}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${paintings[1].image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <div className={styles.timeLabel}>Present</div>
                  <h3 className={styles.cardTitle}>{paintings[1].title}</h3>
                  <span className={styles.cardElement}>Water • {paintings[1].year}</span>
                </div>
                <div className={styles.mirrorReflections}></div>
              </div>
            </div>

            {/* Future - Daughters Unborn */}
            <div className={styles.timeframeFuture}>
              <div 
                className={`${styles.paintingCard} ${styles.futureCard}`}
                onClick={() => openPaintingModal(paintings[2])}
              >
                <div className={styles.cardGlow}></div>
                <div 
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${paintings[2].image})` }}
                ></div>
                <div className={styles.cardOverlay}>
                  <div className={styles.timeLabel}>Future</div>
                  <h3 className={styles.cardTitle}>{paintings[2].title}</h3>
                  <span className={styles.cardElement}>Fire • {paintings[2].year}</span>
                </div>
                <div className={styles.luminousAura}></div>
              </div>
            </div>

            {/* Sacred Connecting Lines */}
            <div className={styles.trinityLines}>
              <div className={styles.pastToPresent}></div>
              <div className={styles.presentToFuture}></div>
              <div className={styles.futureToAncestral}></div>
            </div>
          </div>
        </div>

        {/* Divine Feminine Philosophy */}
        <div className={styles.divineFeminine}>
          <div className={styles.feminineContent}>
            <h3 className={styles.feminineTitle}>On Sacred Lineage</h3>
            <div className={styles.feminineText}>
              <p>
                "We are not the first women to dream of freedom, nor will we be the last. 
                In every generation, queens emerge—not born to thrones, but crowned by 
                their courage, their refusal to accept what is for what could be."
              </p>
              <p>
                "Each painting in this series is a prayer, a recognition, a promise. 
                To the ancestors whose strength runs in our blood. To the sisters 
                walking beside us in this moment. To the daughters who will inherit 
                our struggles transformed into their birthright."
              </p>
            </div>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>Series Statement</h3>
          <div className={styles.statementContent}>
            <p>
              "In the Image of My Queens, I Stand" emerges from a spiritual awakening to 
              the divine feminine lineage that flows through all women. As a Palestinian 
              woman in diaspora, I often felt disconnected from the matriarchal wisdom 
              of my heritage. These paintings became a practice of reconnection.
            </p>
            <p>
              Each canvas explores a different dimension of feminine divinity—the earth 
              wisdom of our ancestors, the flowing power of our present moment, and the 
              luminous potential of future generations. They form a trinity not of worship, 
              but of recognition: we are queens because they were queens, because we choose 
              to be queens, because we are raising queens.
            </p>
            <p>
              This series asks: What changes when we see ourselves as part of an unbroken 
              chain of feminine divinity? How do we honor the past, embody the present, 
              and paint the future in the colors of our deepest dreams?
            </p>
            <span className={styles.statementSignature}>— Maya Murry, 2024</span>
          </div>
        </div>

        {/* Poetry Connection */}
        <div className={styles.poetryConnection}>
          <div className={styles.poetryContent}>
            <h3 className={styles.poetryTitle}>Poetic Meditation</h3>
            <p className={styles.poetryDescription}>
              This series was inspired by and created alongside the poem "Good Women"—
              a meditation on the divine feminine that flows through generations.
            </p>
            <div className={styles.poemLink}>
              <span className={styles.poemText}>Good Women Poem Coming Soon</span>
              <div className={styles.poemGlow}></div>
            </div>
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
                      <span className={styles.detailLabel}>Timeframe:</span>
                      <span className={styles.detailValue}>{selectedPainting.timeframe}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Element:</span>
                      <span className={styles.detailValue}>{selectedPainting.element}</span>
                    </div>
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

export default QueensImagePage