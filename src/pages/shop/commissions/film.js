// src/pages/shop/commissions/film.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "./commission.module.css"

const FilmCommissionPage = () => {
  const [language, setLanguage] = useState('EN')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'film',
    eventType: '',
    eventDate: '',
    location: '',
    timeline: '',
    budget: '',
    concept: '',
    deliverables: ''
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
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/mitla.MP4"
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
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <path d="M8 21L16 21"/>
              <path d="M12 17L12 21"/>
            </svg>
          </div>
          <h1 className={styles.commissionTitle}>Film Services</h1>
          <p className={styles.commissionSubtitle}>
            Capture your story through thoughtful, community-centered filmmaking
          </p>
        </div>

        <div className={styles.commissionContent}>
          <div className={styles.contentGrid}>
            {/* Left Column - Info */}
            <div className={styles.infoColumn}>
              <div className={styles.infoSection}>
                <h2 className={styles.sectionTitle}>About Film Services</h2>
                <p className={styles.sectionText}>
                  I create films that center community voices and tell stories of resistance,
                  resilience, and transformation. Whether you're documenting an event, creating
                  a short film, or producing educational content, I approach every project with
                  care and intentionality.
                </p>
                <p className={styles.sectionText}>
                  My work focuses on amplifying marginalized narratives and creating visual
                  stories that honor the complexity and beauty of our communities.
                </p>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Services Offered</h3>
                <ul className={styles.servicesList}>
                  <li>
                    <h4>Event Documentation</h4>
                    <p>Protests, community gatherings, cultural celebrations, panel discussions</p>
                  </li>
                  <li>
                    <h4>Short Documentary Films</h4>
                    <p>Community stories, oral histories, social justice narratives</p>
                  </li>
                  <li>
                    <h4>Educational Content</h4>
                    <p>Workshops, tutorials, promotional videos for nonprofits</p>
                  </li>
                  <li>
                    <h4>Creative Projects</h4>
                    <p>Short films, experimental video art, visual storytelling</p>
                  </li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>What's Included</h3>
                <ul className={styles.processList}>
                  <li>
                    <span className={styles.stepNumber}>1</span>
                    <div className={styles.stepContent}>
                      <h4>Pre-Production Planning</h4>
                      <p>Concept development, shot lists, and logistics</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>2</span>
                    <div className={styles.stepContent}>
                      <h4>Filming</h4>
                      <p>Professional video capture with attention to storytelling</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>3</span>
                    <div className={styles.stepContent}>
                      <h4>Post-Production</h4>
                      <p>Editing, color grading, sound design, and final delivery</p>
                    </div>
                  </li>
                  <li>
                    <span className={styles.stepNumber}>4</span>
                    <div className={styles.stepContent}>
                      <h4>Revisions</h4>
                      <p>Collaborative review process to ensure your vision is realized</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.infoSection}>
                <h3 className={styles.subsectionTitle}>Pricing</h3>
                <p className={styles.sectionText}>
                  <strong>Event Coverage:</strong> Starting at $500 for half-day shoots<br/>
                  <strong>Short Documentaries:</strong> $2,000 - $8,000+ depending on scope<br/>
                  <strong>Educational Content:</strong> $1,000 - $5,000 per project
                </p>
                <p className={styles.sectionText}>
                  I offer sliding scale rates for grassroots organizations, community projects,
                  and movement work. Let's discuss what works for your budget.
                </p>
              </div>

              <div className={styles.pastWork}>
                <h3 className={styles.subsectionTitle}>Recent Work</h3>
                <div className={styles.workLinks}>
                  <Link to="/film/documentaries/still-singing" className={styles.workLink}>
                    Still Singing (Documentary) →
                  </Link>
                  <Link to="/film/short-films/mitla" className={styles.workLink}>
                    Mitla (Short Film) →
                  </Link>
                  <Link to="/film" className={styles.viewAllLink}>
                    View all films →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className={styles.formColumn}>
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Request Film Services</h2>
                <p className={styles.formDescription}>
                  Tell me about your project and I'll get back to you within 2-3 business days
                </p>

                {!submitSuccess ? (
                  <form
                    className={styles.commissionForm}
                    name="film-commission"
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
                    <input type="hidden" name="form-name" value="film-commission" />
                    <input type="hidden" name="projectType" value="film" />
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
                      <label htmlFor="eventType">Type of Project *</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="event">Event Documentation</option>
                        <option value="documentary">Short Documentary</option>
                        <option value="educational">Educational Content</option>
                        <option value="creative">Creative/Experimental</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="eventDate">Event/Shoot Date *</label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="location">Location *</label>
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
                      <label htmlFor="timeline">Post-Production Timeline *</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a timeline</option>
                        <option value="rush">Rush (1-2 weeks)</option>
                        <option value="standard">Standard (3-4 weeks)</option>
                        <option value="extended">Extended (1-2 months)</option>
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
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-5k">$3,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k+">$10,000+</option>
                        <option value="sliding-scale">Need sliding scale</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="concept">Project Description *</label>
                      <textarea
                        id="concept"
                        name="concept"
                        rows="5"
                        placeholder="What's the story you want to tell? What's the purpose of this film?"
                        value={formData.concept}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="deliverables">Desired Deliverables *</label>
                      <textarea
                        id="deliverables"
                        name="deliverables"
                        rows="3"
                        placeholder="e.g., 5-minute highlight reel, social media clips, full-length documentary"
                        value={formData.deliverables}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className={styles.submitButton}>
                      Submit Request
                    </button>
                  </form>
                ) : (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>✓</div>
                    <h3>Thank you for your film service request!</h3>
                    <p>
                      I've received your project inquiry and will review it carefully.
                      You'll hear back from me within 2-3 business days.
                    </p>
                    <p>
                      In the meantime, feel free to explore my <Link to="/film">previous films</Link>.
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

export default FilmCommissionPage
