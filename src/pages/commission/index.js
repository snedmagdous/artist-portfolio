// src/pages/commission/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./commission.module.css"

const CommissionPage = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/shop.MP4"
      videoFilter="brightness(0.45) contrast(1.2) saturate(1.2)"
    >
      <section className={styles.commissionPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Commission Hero */}
        <div className={styles.commissionHero}>
          <div className={styles.sectionIndicator}>
            <span className={styles.indicatorDot}></span>
            <span className={styles.indicatorText}>Commission</span>
          </div>
          <h1 className={styles.commissionTitle}>Commission Custom Work</h1>
          <p className={styles.commissionSubtitle}>
            Let's collaborate on bringing your vision to life through art, murals, or film
          </p>
        </div>

        {/* Commission Options */}
        <div className={styles.commissionsSection}>
          <div className={styles.commissionGrid}>
            {/* Mural Commission Card */}
            <Link to="/shop/commissions/mural" className={styles.commissionCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15L16 10L5 21"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Mural Commission</h3>
              <p className={styles.cardDescription}>
                Have a wall you'd like painted? Transform your space with a custom mural that tells your story
              </p>
              <div className={styles.cardButton}>
                Request Mural
                <span className={styles.arrow}>→</span>
              </div>
            </Link>

            {/* Film Commission Card */}
            <Link to="/shop/commissions/film" className={styles.commissionCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <path d="M8 21L16 21"/>
                  <path d="M12 17L12 21"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Film Services</h3>
              <p className={styles.cardDescription}>
                Have an event you'd like filmed? Let's capture your story together through cinematic storytelling
              </p>
              <div className={styles.cardButton}>
                Request Services
                <span className={styles.arrow}>→</span>
              </div>
            </Link>

            {/* Custom Art Commission Card */}
            <Link to="/shop/commissions/custom-art" className={styles.commissionCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4M12 18v4M22 12h-4M6 12H2M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83M19.07 19.07l-2.83-2.83M7.76 7.76L4.93 4.93"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Custom Artwork</h3>
              <p className={styles.cardDescription}>
                Commission a custom painting, illustration, or mixed media piece that resonates with your vision
              </p>
              <div className={styles.cardButton}>
                Request Commission
                <span className={styles.arrow}>→</span>
              </div>
            </Link>

            {/* Website Commission Card */}
            <Link to="/shop/commissions/website" className={styles.commissionCard}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M2 7h20"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Website Development</h3>
              <p className={styles.cardDescription}>
                Need a custom website? I hand-code dynamic, interactive sites from scratch as an artist-programmer
              </p>
              <div className={styles.cardButton}>
                Request Website
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className={styles.infoSection}>
          <div className={styles.infoContent}>
            <h2 className={styles.infoTitle}>How It Works</h2>
            <p className={styles.infoText}>
              Each commission is a collaborative process. Click on any service above to share your vision,
              and I'll reach out to discuss your project in detail. Together, we'll bring your ideas to life
              through art that speaks to your unique story and space.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CommissionPage
