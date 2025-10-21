// src/pages/shop/commissions/mural.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "./commission.module.css"

const MuralCommissionPage = () => {
  const [language, setLanguage] = useState('EN')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'mural',
    location: '',
    wallSize: '',
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
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/murals.MP4"
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
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="M21 15L16 10L5 21"/>
            </svg>
          </div>
          <h1 className={styles.commissionTitle}>Mural Commission</h1>
          <p className={styles.commissionSubtitle}>
            Transform your space with a custom mural that tells your story
          </p>
        </div>

        <div className={styles.commissionContent}>
          <div className={styles.contentGrid}>
            {/* Left Column - Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>About Mural Commissions</h2>
                <p className={styles.sectionText}>
                  I create community-centered murals that celebrate liberation, solidarity, and
                  collective power. Each mural is a collaborative process that honors the space
                  and the community it serves.
                </p>
                <p className={styles.sectionText}>
                  Whether you're looking for a public art installation, a community center piece,
                  or a personal wall transformation, I'd love to work with you to bring your vision to life.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>What to Expect</h3>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.stepNumber}>1</span>
                    <div className={styles.stepContent}>
                      <h4>Initial Consultation</h4>
                      <p>We'll discuss your vision, space, timeline, and budget</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>2</span>
                    <div className={styles.stepContent}>
                      <h4>Concept Development</h4>
                      <p>I'll create sketches and mockups for your review</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>3</span>
                    <div className={styles.stepContent}>
                      <h4>Collaborative Refinement</h4>
                      <p>We'll work together to finalize the design</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>4</span>
                    <div className={styles.stepContent}>
                      <h4>Painting</h4>
                      <p>I'll bring the mural to life on your wall</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>5</span>
                    <div className={styles.stepContent}>
                      <h4>Celebration</h4>
                      <p>Community reveal and celebration of the finished work</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Pricing</h3>
                <p className={styles.sectionText}>
                  Mural pricing varies based on size, complexity, location, and timeline.
                  Projects typically range from $2,000 - $15,000+. I'm committed to working
                  with communities through grants, fundraising, and flexible payment structures.
                </p>
                <p className={styles.sectionText}>
                  <strong>Community-funded model:</strong> I believe art should be accessible.
                  I can help you explore grant opportunities and community fundraising options.
                </p>
              </div>

              <div className={styles.pastWork}>
                <h3 className={styles.subsectionTitle}>Recent Murals</h3>
                <div className={styles.workLinks}>
                  <Link to="/art/murals/sun-will-shine-palestine" className={styles.workLink}>
                    The Sun Will Shine (8ft × 36ft) →
                  </Link>
                  <Link to="/art/murals/my-queens" className={styles.workLink}>
                    In the Image of My Queens (37ft × 15ft) →
                  </Link>
                  <Link to="/art/murals/love-as-revolution" className={styles.workLink}>
                    Love as Revolution (10ft × 15ft) →
                  </Link>
                  <Link to="/art/murals" className={styles.viewAllLink}>
                    View all murals →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={styles.formColumn}>
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Request a Commission</h2>
                <p className={styles.formDescription}>
                  Tell me about your project and I'll get back to you within 2-3 business days
                </p>

                {!submitSuccess ? (
                  <form
                    className={styles.commissionForm}
                    name="mural-commission"
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
                    <input type="hidden" name="form-name" value="mural-commission" />
                    <input type="hidden" name="projectType" value="mural" />
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
                      <label htmlFor="location">Project Location *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="City, State"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="wallSize">Approximate Wall Size *</label>
                      <input
                        type="text"
                        id="wallSize"
                        name="wallSize"
                        placeholder="e.g., 10ft × 20ft"
                        value={formData.wallSize}
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
                        <option value="3-6">3-6 months</option>
                        <option value="6-12">6-12 months</option>
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
                        <option value="15k+">$15,000+</option>
                        <option value="grant">Seeking grant/fundraising support</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="concept">Project Vision & Concept *</label>
                      <textarea
                        id="concept"
                        name="concept"
                        rows="5"
                        placeholder="Describe your vision for the mural. What story do you want to tell? What themes matter to you?"
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
                        placeholder="Share links to images, art styles, or other murals that inspire you"
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
                      I've received your mural project inquiry and will review it carefully.
                      You'll hear back from me within 2-3 business days.
                    </p>
                    <p>
                      In the meantime, feel free to explore my <Link to="/art/murals">previous murals</Link>.
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

export default MuralCommissionPage
