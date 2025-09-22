// src/pages/art/paintings/mamma-im-fine/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./mamma-im-fine.module.css"

const MammaImFinePage = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/art.MP4"
      videoStyle={{
        filter: 'brightness(0.46) contrast(1.2)'
      }}
    >
      <section className={styles.mammaImFinePage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/paintings" className={styles.backLink}>
            Back to Paintings
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.seriesHero}>
          <h1 className={styles.seriesTitle}>Mamma, I'm Fine</h1>
          <div className={styles.seriesInfo}>
            <span className={styles.seriesCount}>1 Piece</span>
            <span className={styles.seriesYear}>2024</span>
            <span className={styles.seriesMedium}>Oil on Canvas</span>
          </div>
          <p className={styles.seriesDescription}>
            A powerful single piece exploring the complex emotions of reassurance and vulnerability,
            inspired by personal poetry and community murals that speak to the immigrant experience.
          </p>
        </div>

        {/* Single Painting Display */}
        <div className={styles.singlePaintingContainer}>
          <div className={styles.paintingCard}>
            <div className={styles.paintingImagePlaceholder}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.paintingIcon}>
                <path d="M20.84 4.61A5.5 5.5 0 0 0 16.5 2.5C14.76 2.5 13.25 3.42 12 4.84C10.75 3.42 9.24 2.5 7.5 2.5A5.5 5.5 0 0 0 3.16 4.61C2.42 5.35 2 6.36 2 7.5C2 8.64 2.42 9.65 3.16 10.39L12 19.23L20.84 10.39C21.58 9.65 22 8.64 22 7.5C22 6.36 21.58 5.35 20.84 4.61Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12" strokeWidth="1" strokeLinecap="round"/>
                <path d="M9 9L15 9" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>

            <div className={styles.paintingContent}>
              <h3 className={styles.paintingTitle}>Coming soon...</h3>
              <div className={styles.paintingDetails}>
                <span className={styles.paintingYear}>2025</span>
                <span className={styles.paintingMedium}>Oil on Canvas</span>
                <span className={styles.paintingDimensions}>36" x 48"</span>
              </div>
              <p className={styles.paintingDescription}>
                This painting captures the bittersweet moment of telling your mother you're okay
                when you're struggling—a universal experience in the immigrant diaspora. The work
                bridges personal vulnerability with collective resilience, drawing from both intimate
                poetry and the bold statements of community murals.
              </p>
            </div>
          </div>
        </div>

        {/* Related Works Navigation */}
        <div className={styles.relatedWorks}>
          <h3 className={styles.relatedTitle}>Related Works</h3>
          <div className={styles.relatedLinks}>
            <Link to="/writing/poetry" className={styles.relatedLink}>
              <div className={styles.relatedIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div className={styles.relatedContent}>
                <h4>Read the Poem</h4>
                <p>Experience the original poetry that inspired this painting</p>
              </div>
            </Link>

            <Link to="/art/murals/sun-will-shine-palestine" className={styles.relatedLink}>
              <div className={styles.relatedIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="20" height="16"/>
                  <path d="M2 8H22"/>
                  <path d="M2 12H22"/>
                  <path d="M2 16H22"/>
                  <path d="M8 4V20"/>
                  <path d="M16 4V20"/>
                </svg>
              </div>
              <div className={styles.relatedContent}>
                <h4>View the Mural</h4>
                <p>See the community mural that shares this theme</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>Artist Statement</h3>
          <div className={styles.statementContent}>
            <p>
              "Mamma, I'm Fine" began as a poem written during a particularly difficult period
              when I found myself repeatedly reassuring my mother across continents. This phrase—
              so simple yet loaded with complexity—became the cornerstone for exploring how we
              protect our loved ones through selective truth-telling.
            </p>
            <p>
              The painting technique mirrors this emotional complexity: layers of oil paint build
              upon each other, some transparent, some opaque, creating depth that shifts depending
              on the viewer's perspective. Just as our words carry multiple meanings, the visual
              elements reveal different truths from different angles.
            </p>
            <p>
              This work connects to the broader community through its relationship to public murals
              that address similar themes of displacement, family bonds, and survival. The intimate
              scale of the canvas contrasts with the public scale of murals, yet both serve as
              vessels for stories that need telling.
            </p>
            <span className={styles.statementSignature}>— Maya Murry, 2024</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MammaImFinePage