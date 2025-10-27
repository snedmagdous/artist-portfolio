// src/pages/shop/commissions/website.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "./commission.module.css"

const WebsiteCommissionPage = () => {
  const [language, setLanguage] = useState('EN')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'website',
    websiteType: '',
    features: '',
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
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/shop.MP4"
      videoStyle={{
        filter: 'brightness(0.5) contrast(1.05)'
      }}
    >
      <section className={styles.commissionPage}>
        <div className={styles.backNavigation}>
          <Link to="/commission" className={styles.backLink}>
            Back to Commission
          </Link>
        </div>

        <div className={styles.commissionHero}>
          <div className={styles.heroIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
              <path d="M2 7h20"/>
            </svg>
          </div>
          <h1 className={styles.commissionTitle}>Website Development</h1>
          <p className={styles.commissionSubtitle}>
            Custom, hand-coded websites that are dynamic, interactive, and uniquely yours
          </p>
        </div>

        <div className={styles.commissionContent}>
          <div className={styles.contentGrid}>
            {/* Left Column - Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>About Website Development</h2>
                <p className={styles.sectionText}>
                  As an artist-programmer, I create websites that blend creativity with technical excellence.
                  Every site is hand-coded from scratch, ensuring a unique, performant, and responsive design
                  that perfectly captures your vision.
                </p>
                <p className={styles.sectionText}>
                  Whether you're an artist, creative professional, small business, or organization, I specialize
                  in building interactive, visually stunning websites that stand out. My own portfolio was
                  hand-coded to showcase the possibilities of custom web design.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>What to Expect</h3>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.stepNumber}>1</span>
                    <div className={styles.stepContent}>
                      <h4>Discovery & Planning</h4>
                      <p>We'll discuss your goals, target audience, and desired features</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>2</span>
                    <div className={styles.stepContent}>
                      <h4>Design Mockups</h4>
                      <p>I'll create visual designs for your approval</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>3</span>
                    <div className={styles.stepContent}>
                      <h4>Development</h4>
                      <p>Hand-coded, custom development with regular progress updates</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>4</span>
                    <div className={styles.stepContent}>
                      <h4>Testing & Refinement</h4>
                      <p>Thorough testing across devices and browsers</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>5</span>
                    <div className={styles.stepContent}>
                      <h4>Launch & Support</h4>
                      <p>Deployment and ongoing maintenance support</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Services Include</h3>
                <ul className={styles.featuresList}>
                  <li>Custom hand-coded design & development</li>
                  <li>Responsive design (mobile, tablet, desktop)</li>
                  <li>Interactive animations & effects</li>
                  <li>Portfolio & gallery systems</li>
                  <li>E-commerce integration</li>
                  <li>Blog & content management</li>
                  <li>Performance optimization</li>
                  <li>SEO best practices</li>
                  <li>Ongoing maintenance & updates</li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Pricing</h3>
                <p className={styles.sectionText}>
                  Website pricing varies based on complexity, features, and timeline.
                  Projects typically range from $3,000 - $25,000+.
                </p>
                <p className={styles.sectionText}>
                  <strong>Example pricing:</strong>
                </p>
                <ul className={styles.pricingList}>
                  <li>Single-page portfolio: $3,000 - $5,000</li>
                  <li>Multi-page portfolio: $5,000 - $10,000</li>
                  <li>E-commerce site: $8,000 - $15,000+</li>
                  <li>Complex interactive site: $15,000 - $25,000+</li>
                </ul>
              </div>

              <div className={styles.pastWork}>
                <h3 className={styles.subsectionTitle}>Portfolio</h3>
                <div className={styles.workLinks}>
                  <Link to="/" className={styles.workLink}>
                    View My Portfolio Website (hand-coded) →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={styles.formColumn}>
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Request a Website</h2>
                <p className={styles.formDescription}>
                  Tell me about your project and I'll get back to you within 2-3 business days
                </p>

                {!submitSuccess ? (
                  <form
                    className={styles.commissionForm}
                    name="website-commission"
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
                    <input type="hidden" name="form-name" value="website-commission" />
                    <input type="hidden" name="projectType" value="website" />
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
                      <label htmlFor="websiteType">Type of Website *</label>
                      <select
                        id="websiteType"
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a type</option>
                        <option value="portfolio">Portfolio / Personal Site</option>
                        <option value="business">Business Website</option>
                        <option value="ecommerce">E-commerce / Shop</option>
                        <option value="blog">Blog / Content Site</option>
                        <option value="creative">Creative / Interactive Experience</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="features">Desired Features *</label>
                      <textarea
                        id="features"
                        name="features"
                        rows="4"
                        placeholder="e.g., image gallery, contact form, blog, e-commerce, animations, video integration, etc."
                        value={formData.features}
                        onChange={handleChange}
                        required
                      />
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
                        <option value="asap">ASAP (1-2 months)</option>
                        <option value="3-4">3-4 months</option>
                        <option value="4-6">4-6 months</option>
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
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-15k">$10,000 - $15,000</option>
                        <option value="15k-25k">$15,000 - $25,000</option>
                        <option value="25k+">$25,000+</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="concept">Project Vision & Goals *</label>
                      <textarea
                        id="concept"
                        name="concept"
                        rows="5"
                        placeholder="Describe your vision for the website. What's the main purpose? Who is your target audience? What feeling or experience should it create?"
                        value={formData.concept}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="reference">Inspiration & References (optional)</label>
                      <textarea
                        id="reference"
                        name="reference"
                        rows="3"
                        placeholder="Share links to websites you admire or design styles you're drawn to"
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
                      I've received your website development inquiry and will review it carefully.
                      You'll hear back from me within 2-3 business days.
                    </p>
                    <p>
                      In the meantime, feel free to explore <Link to="/">my portfolio</Link> to see what's possible.
                    </p>
                    <Link to="/commission" className={styles.backToShop}>
                      Back to Commission
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

export default WebsiteCommissionPage
