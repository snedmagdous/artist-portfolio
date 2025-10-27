// src/pages/about/index.js
import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./about.module.css"

const AboutPage = () => {
  const [language, setLanguage] = useState('EN')
  const [activeSection, setActiveSection] = useState(0)
  const videoRef = useRef(null);

  // video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  // Handle scroll to contact section from URL hash
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#contact') {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Auto-cycle through different aspects of Maya
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const mayaAspects = [
    {
      title: "Technologist",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.aspectIcon}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21L16 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17L12 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7L10 10L7 13" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 13H17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'rgba(157, 0, 255, 0.8)'
    },
    {
      title: "Artist",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.aspectIcon}>
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 3V7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 17V21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 5H7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 19H21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'rgba(255, 140, 0, 0.8)'
    },
    {
      title: "Bridge Builder",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className={styles.aspectIcon}>
          <circle cx="12" cy="12" r="3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1V3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V23" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 4.22L5.64 5.64" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 18.36L19.78 19.78" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 12H3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H23" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 19.78L5.64 18.36" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 5.64L19.78 4.22" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'rgba(255, 255, 255, 0.8)'
    }
  ]

  // Firefly component
  const Fireflies = () => {
    return (
      <div className={styles.firefliesContainer}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={styles.firefly}
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${8 + Math.random() * 4}s`,
              '--start-x': `${Math.random() * 100}%`,
              '--start-y': `${70 + Math.random() * 20}%`,
              '--mid-x': `${Math.random() * 100}%`,
              '--mid-y': `${60 + Math.random() * 30}%`,
              '--end-x': `${Math.random() * 100}%`,
              '--end-y': `${80 + Math.random() * 15}%`,
            }}
          >
            <div className={styles.fireflyGlow}></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={false} // Turn off layout video system
    >
       {/* Add this video background structure */}
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-tag"
        ref={videoRef}
        style={{
          filter: 'brightness(0.67) contrast(1.1) saturate(1.3)'
        }}
      >
        <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/about-1.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>

      <section className={styles.aboutPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Fireflies Animation */}
        <Fireflies />
        
        {/* Hero Section */}
        <div className={styles.aboutHero}>
          <h1 className={styles.aboutTitle}>About MĀYĀ</h1>
          
          {/* Floating Identity Aspects */}
          <div className={styles.identityAspects}>
            {mayaAspects.map((aspect, index) => (
              <div 
                key={aspect.title}
                className={`${styles.aspectCard} ${activeSection === index ? styles.active : ''}`}
                style={{ '--aspect-color': aspect.color }}
              >
                {aspect.icon}
                <span className={styles.aspectTitle}>{aspect.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Biography */}
        <div className={styles.biographySection}>
          <h2 className={styles.bioSectionTitle}>About MĀYĀ Murry</h2>
          <div className={styles.bioCard}>
            <div className={styles.bioContent}>
              <p className={styles.bioText}>
                Māyā Murry exists at the intersection of worlds that rarely meet. As a Computer Science graduate from Cornell University
                and full-time software engineer at a healthcare venture for social equity, she programs with the aim to dismantle systems 
                that do not serve the collective. Her technical mastery spans from adversarial machine learning to full-stack development, 
                but her code carries something beyond—a vision of technology as a pathway to liberation.
              </p>
              
              <p className={styles.bioText}>
                Behind the algorithms and neural networks lives an artist whose documentaries screen to hundreds, whose murals 
                transform communities, and whose poetry bridges the intimate and the political. Her films like "Love as Revolution" 
                and "Our Ancestors Are Still Singing" weave stories of resistance across cultures, while her large-scale public 
                art projects have raised over funds for different grass-roots and liberation movements.
              </p>
    
              <p className={styles.bioText}>
                In every line of code she writes, every frame she films, every artwork she labors into, Māyā strives to ask and 
                answer the same question again and again: How can we move closer to the freedom we dream of through what we put out into the world? 
                How do we create futures that carry the past forward—transformed and transforming?
              </p>
            </div>
          </div>
        </div>

        {/* Creative Elements */}
        <div className={styles.creativeShowcase}>
          <h3 className={styles.showcaseTitle}>Where Code Meets Canvas</h3>
          
          <div className={styles.creativeFacts}>
            <div className={styles.factCard}>
              <div className={styles.factNumber}>400+</div>
              <div className={styles.factLabel}>People reached through film screenings</div>
            </div>
            
            <div className={styles.factCard}>
              <div className={styles.factNumber}>$18K+</div>
              <div className={styles.factLabel}>Community funding raised through art</div>
            </div>
            
            <div className={styles.factCard}>
              <div className={styles.factNumber}>3</div>
              <div className={styles.factLabel}>Countries documented for cultural preservation</div>
            </div>
          </div>
        </div>

        {/* Indigenous Futurism Philosophy Section */}
        <div className={styles.philosophySection}>
          <div className={styles.philosophyCard}>
            <h3 className={styles.philosophyTitle}>
              <a
                href="https://lithub.com/writing-toward-a-definition-of-indigenous-futurism/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                Indigenous Futurism
              </a>
            </h3>
            <blockquote className={styles.philosophyQuote}>
              Originally introduced to me through science-fiction, Indigenous Futurism (المستقبلية الأصيلة) is a
              movement that centers Indigenous ways of being as the architecture for tomorrow. It is a daily practice of
              carving out time to reimagine what freedom should look like. Through art and writing, we open real, tangible
              routes that guide us toward this future—creating small spaces each day for worlds that
              should and will exist.
              <br/><br/>
              Each day, we must dream of building worlds where we lose the identities we built around our wounds,
              worlds where liberation becomes a state of being, not just imagining. In my creative work, I explore
              how this daily reimagining transforms resistance into regeneration, turning our visions into
              inevitable realities that must be reckoned with.
              <br/><br/>
              As Walidah Imarisha puts it, "whenever we try to envision a world without war, without violence,
              without prisons, without capitalism, we are engaging in speculative fiction. All organizing is
              science fiction."
            </blockquote>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p className={styles.philosophyQuote} style={{ fontSize: '1.4rem', fontStyle: 'normal' }}>
                "We are not vanishing. We are becoming."
              </p>
              <p className={styles.philosophyQuote} style={{ fontSize: '1.3rem', direction: 'rtl', fontStyle: 'normal' }}>
                "نحنا ننولد من جديد ولا نختفي في الأفق"
              </p>
            </div>
          </div>
        </div>

        {/* Digital Ancestralism Philosophy Section */}
        <div className={styles.philosophySection}>
          <div className={styles.philosophyCard}>
            <h3 className={styles.philosophyTitle}>Digital Ancestralism</h3>
            <blockquote className={styles.philosophyQuote}>
              "Technology isn't neutral—it carries the values of its creators.
              I choose to build systems that remember where they came from and
              know where they're going. Every algorithm is an ancestor, every dataset a story,
              every application an act of cultural preservation or destruction."
            </blockquote>
            <cite className={styles.philosophyCite}>— Māyā, 2025</cite>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div id="contact" className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Get in Touch</h3>
          <p className={styles.contactSubtitle}>
            Have a project in mind or want to collaborate? Let's connect.
          </p>
          <Link to="/contact" className={styles.contactPageButton}>
            Go to Contact Page
          </Link>
        </div>

        {/* Contact Links */}
        <div className={styles.connectSection}>
          <h3 className={styles.connectTitle}>Connect Across Dimensions</h3>
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
      </section>
    </Layout>
  )
}

export default AboutPage