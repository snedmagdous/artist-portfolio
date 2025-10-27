// src/pages/contact/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./contact.module.css"

const ContactPage = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/about-1.mp4"
      videoFilter="brightness(0.67) contrast(1.1) saturate(1.3)"
    >
      <section className={styles.contactPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Contact Hero */}
        <div className={styles.contactHero}>
          <div className={styles.sectionIndicator}>
            <span className={styles.indicatorDot}></span>
            <span className={styles.indicatorText}>Get In Touch</span>
          </div>
          <h1 className={styles.contactTitle}>Contact Māyā</h1>
          <p className={styles.contactSubtitle}>
            Have a project in mind or want to collaborate? Let's connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className={styles.contactFormSection}>
          <form
            className={styles.contactForm}
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.formGroup} style={{ display: 'none' }}>
              <label htmlFor="bot-field">Don't fill this out if you're human:</label>
              <input name="bot-field" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.contactSubmitBtn}>
              <span className={styles.submitText}>Send Message</span>
            </button>
          </form>
        </div>

        {/* Contact Links */}
        <div className={styles.connectSection}>
          <h3 className={styles.connectTitle}>Other Ways to Connect</h3>
          <div className={styles.connectGrid}>
            <a href="mailto:hello@mayamurry.com" className={styles.connectLink}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.connectIcon}>
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="L22 6L12 13L2 6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>hello@mayamurry.com</span>
            </a>

            <a href="https://www.linkedin.com/in/maya-murry/" target="_blank" rel="noopener noreferrer" className={styles.connectLink}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.connectIcon}>
                <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V9H14V11.5A4 4 0 0 1 16 8Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>LinkedIn Profile</span>
            </a>

            <a href="https://github.com/snedmagdous" target="_blank" rel="noopener noreferrer" className={styles.connectLink}>
              <svg viewBox="0 0 24 24" fill="none" className={styles.connectIcon}>
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H16" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>GitHub Projects</span>
            </a>
          </div>
        </div>

        {/* Commission Callout */}
        <div className={styles.commissionCallout}>
          <h3 className={styles.commissionTitle}>Looking to Commission Work?</h3>
          <p className={styles.commissionText}>
            If you're interested in commissioning a mural, film project, custom artwork, or website,
            please visit the commissions page to fill out a specialized form for your project.
          </p>
          <Link to="/commission" className={styles.commissionButton}>
            Visit Commission Page →
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
