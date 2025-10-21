// src/pages/shop/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./shop.module.css"

const ShopPage = () => {
  const [language, setLanguage] = useState('EN')
  const [email, setEmail] = useState('')
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/shop.MP4"
      videoFilter="brightness(0.45) contrast(1.2) saturate(1.2)"
    >
      <section className={styles.shopPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Shop Hero */}
        <div className={styles.shopHero}>
          <div className={styles.sectionIndicator}>
            <span className={styles.indicatorDot}></span>
            <span className={styles.indicatorText}>Shop</span>
          </div>
          <h1 className={styles.shopTitle}>Commission & Shop</h1>
          <p className={styles.shopSubtitle}>
            Support my art practice through commissions and original works
          </p>
        </div>

        {/* Commission Section */}
        <div className={styles.commissionsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Commission Custom Work</h2>
            <p className={styles.sectionDescription}>
              Let's collaborate on bringing your vision to life through art, murals, or film
            </p>
          </div>

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
                Have a wall you'd like painted? Transform your space with a custom mural
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
                Have an event you'd like filmed? Let's capture your story together
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
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Custom Artwork</h3>
              <p className={styles.cardDescription}>
                Commission a custom painting, illustration, or mixed media piece
              </p>
              <div className={styles.cardButton}>
                Request Commission
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <div className={styles.productsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shop Originals & Prints</h2>
            <p className={styles.sectionDescription}>
              Original artwork, prints, and merchandise — coming soon
            </p>
          </div>

          <div className={styles.productsGrid}>
            {/* Original Paintings */}
            <div className={styles.productCard}>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 3v18"/>
                  <path d="M15 3v18"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Original Paintings</h3>
              <p className={styles.cardDescription}>
                One-of-a-kind pieces from my studio
              </p>
            </div>

            {/* Prints */}
            <div className={styles.productCard}>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
                  <polyline points="14,2 14,8 20,8"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Art Prints</h3>
              <p className={styles.cardDescription}>
                High-quality prints of paintings, murals, and illustrations
              </p>
            </div>

            {/* Merchandise */}
            <div className={styles.productCard}>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Merchandise</h3>
              <p className={styles.cardDescription}>
                Stickers, tote bags, hoodies, mugs, and custom journals
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>Get notified when products launch</h3>
            <p className={styles.newsletterDescription}>
              Join the mailing list to be the first to know when originals, prints, and merch become available
            </p>

            {!subscribeSuccess ? (
              <form
                className={styles.newsletterForm}
                name="shop-newsletter"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(new FormData(form)).toString()
                  })
                    .then(() => {
                      setSubscribeSuccess(true)
                      setEmail('')
                    })
                    .catch((error) => console.error(error))
                }}
              >
                <input type="hidden" name="form-name" value="shop-newsletter" />
                <div style={{ display: 'none' }}>
                  <label htmlFor="bot-field">Don't fill this out if you're human:</label>
                  <input name="bot-field" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className={styles.newsletterButton}>
                  Subscribe
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                ✓ Thank you! You'll be notified when products are available.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ShopPage
