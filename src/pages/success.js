import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "./index.css"

export default function Success() {
  return (
    <Layout>
      <div className="success-container">
        <section className="success-section">
          <div className="success-content">
            <div className="success-header">
              <div className="section-indicator">
                <span className="indicator-dot"></span>
                <span className="indicator-text">Success</span>
              </div>
              <h1 className="success-title">Message Sent!</h1>
              <p className="success-subtitle">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>

            <div className="success-actions">
              <Link to="/" className="cta-button primary">
                Return Home
              </Link>
              <Link to="/about" className="cta-button secondary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}