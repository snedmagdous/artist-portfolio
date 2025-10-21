// src/pages/shop/commissions/custom-art.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "./commission.module.css"

const CustomArtCommissionPage = () => {
  const [language, setLanguage] = useState('EN')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'custom-art',
    artType: '',
    size: '',
    timeline: '',
    budget: '',
    concept: '',
    reference: ''
  })
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/paintings.MP4"
      videoStyle={{
        filter: 'brightness(0.5) contrast(1.05)'
      }}
    >
      <section className={styles.commissionPage}>
        <div className={styles.backNavigation}>
          <Link to="/shop" className={styles.backLink}>
            Back to Shop
          </Link>
        </div>

        <div className={styles.commissionHero}>
          <div className={styles.heroIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <h1 className={styles.commissionTitle}>Custom Artwork</h1>
          <p className={styles.commissionSubtitle}>
            Commission a one-of-a-kind piece that reflects your story and vision
          </p>
        </div>

        <div className={styles.commissionContent}>
          <div className={styles.contentGrid}>
            {/* Left Column - Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>About Custom Artwork</h2>
                <p className={styles.sectionText}>
                  I create custom artwork that centers themes of liberation, identity, ancestry,
                  and resistance. Each piece is deeply personal and collaborative, weaving together
                  your vision with my artistic practice.
                </p>
                <p className={styles.sectionText}>
                  Whether you're looking for a painting, illustration, mixed media piece, or collage,
                  I approach every commission with care, intention, and a commitment to honoring
                  the story you want to tell.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Mediums Available</h3>
                <ul className={styles.servicesList}>
                  <li>
                    <h4>Paintings</h4>
                    <p>Acrylic, gouache, watercolor on canvas or paper</p>
                  </li>
                  <li>
                    <h4>Illustrations</h4>
                    <p>Digital or traditional pen and ink, mixed media</p>
                  </li>
                  <li>
                    <h4>Collage</h4>
                    <p>Hand-cut paper, magazine collage, mixed media assemblage</p>
                  </li>
                  <li>
                    <h4>Mixed Media</h4>
                    <p>Combining painting, collage, found objects, and text</p>
                  </li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Commission Process</h3>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.stepNumber}>1</span>
                    <div className={styles.stepContent}>
                      <h4>Consultation</h4>
                      <p>We'll discuss your vision, medium preferences, size, and timeline</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>2</span>
                    <div className={styles.stepContent}>
                      <h4>Concept Sketches</h4>
                      <p>I'll create 2-3 concept sketches for your review</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>3</span>
                    <div className={styles.stepContent}>
                      <h4>Refinement</h4>
                      <p>We'll collaborate on refining the chosen concept</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>4</span>
                    <div className={styles.stepContent}>
                      <h4>Creation</h4>
                      <p>I'll create your custom piece with regular progress updates</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>5</span>
                    <div className={styles.stepContent}>
                      <h4>Delivery</h4>
                      <p>Final piece delivered with certificate of authenticity</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Pricing</h3>
                <p className={styles.sectionText}>
                  Pricing varies based on size, medium, and complexity:
                </p>
                <ul className={styles.pricingList}>
                  <li><strong>Small (8" × 10" - 11" × 14"):</strong> $300 - $800</li>
                  <li><strong>Medium (16" × 20" - 24" × 36"):</strong> $800 - $2,500</li>
                  <li><strong>Large (30" × 40"+):</strong> $2,500 - $8,000+</li>
                  <li><strong>Illustrations (digital):</strong> $200 - $1,500</li>
                </ul>
                <p className={styles.sectionText}>
                  <strong>Payment structure:</strong> 50% deposit to begin, 50% upon completion.
                  I'm open to payment plans for larger commissions.
                </p>
              </div>

              <div className={styles.pastWork}>
                <h3 className={styles.subsectionTitle}>Portfolio</h3>
                <div className={styles.workLinks}>
                  <Link to="/art/paintings" className={styles.workLink}>
                    View Paintings →
                  </Link>
                  <Link to="/art/illustrations" className={styles.workLink}>
                    View Illustrations →
                  </Link>
                  <Link to="/art/collages" className={styles.workLink}>
                    View Collages →
                  </Link>
                  <Link to="/art" className={styles.viewAllLink}>
                    View all artwork →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={styles.formColumn}>
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Request a Custom Piece</h2>
                <p className={styles.formDescription}>
                  Tell me about your vision and I'll get back to you within 2-3 business days
                </p>

                {!submitSuccess ? (
                  <form
                    className={styles.commissionForm}
                    name="custom-art-commission"
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
                          setSubmitSuccess(true)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        })
                        .catch((error) => console.error(error))
                    }}
                  >
                    <input type="hidden" name="form-name" value="custom-art-commission" />
                    <input type="hidden" name="projectType" value="custom-art" />
                    <div style={{ display: 'none' }}>
                      <label htmlFor="bot-field">Don't fill this out if you're human:</label>
                      <input name="bot-field" />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone (optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="artType">Type of Artwork *</label>
                      <select
                        id="artType"
                        name="artType"
                        value={formData.artType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select artwork type</option>
                        <option value="painting">Painting</option>
                        <option value="illustration">Illustration</option>
                        <option value="collage">Collage</option>
                        <option value="mixed-media">Mixed Media</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="size">Approximate Size *</label>
                      <select
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select size range</option>
                        <option value="small">Small (8" × 10" - 11" × 14")</option>
                        <option value="medium">Medium (16" × 20" - 24" × 36")</option>
                        <option value="large">Large (30" × 40"+)</option>
                        <option value="flexible">Flexible/Not sure</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="timeline">Desired Timeline *</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a timeline</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="3-4-months">3-4 months</option>
                        <option value="5-6-months">5-6 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="budget">Budget Range *</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a budget range</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1k">$500 - $1,000</option>
                        <option value="1k-2.5k">$1,000 - $2,500</option>
                        <option value="2.5k-5k">$2,500 - $5,000</option>
                        <option value="5k+">$5,000+</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="concept">Your Vision *</label>
                      <textarea
                        id="concept"
                        name="concept"
                        rows="5"
                        placeholder="What story do you want this piece to tell? What themes, imagery, or symbols are important to you?"
                        value={formData.concept}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="reference">Visual References (optional)</label>
                      <textarea
                        id="reference"
                        name="reference"
                        rows="3"
                        placeholder="Share links to artwork, photos, or styles that inspire you"
                        value={formData.reference}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      Submit Request
                    </button>
                  </form>
                ) : (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Thank you for your commission request!</h3>
                    <p>
                      I've received your custom artwork inquiry and will review it carefully.
                      You'll hear back from me within 2-3 business days.
                    </p>
                    <p>
                      In the meantime, feel free to explore my <Link to="/art">portfolio</Link>.
                    </p>
                    <Link to="/shop" className={styles.backToShop}>
                      Back to Shop
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CustomArtCommissionPage
