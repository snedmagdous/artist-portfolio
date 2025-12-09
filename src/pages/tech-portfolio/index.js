// src/pages/tech-portfolio/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./tech-portfolio.module.css"

const TechPortfolioPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null);

  // Video background setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  // GitHub Projects Data
  const projects = [
    {
      id: 'artist-portfolio',
      title: 'Artist Portfolio Website',
      description: 'Full-stack artist portfolio built with Gatsby/React showcasing documentary film, murals, and technical projects',
      longDescription: 'A comprehensive digital portfolio that bridges art and technology, featuring dynamic video backgrounds, smooth animations, and responsive design. Built as a platform to showcase multidisciplinary creative work including documentary filmmaking, large-scale murals, poetry, and technical projects.',
      github: 'https://github.com/snedmagdous/artist-portfolio',
      demo: 'https://mayamurry.com',
      screenshot: '/images/screenshots/resume.png',
      tech: ['React', 'Gatsby', 'CSS3', 'JavaScript', 'Responsive Design'],
      features: [
        'Dynamic video backgrounds with glassmorphism UI',
        'Responsive design optimized for all devices',
        'Film portfolio with categorized showcase',
        'Integrated contact forms with Netlify'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" strokeWidth="1"/>
          <path d="M5 3V7" strokeWidth="1"/>
          <path d="M19 17V21" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'nyc-housing',
      title: 'NYC Housing Violations Dashboard',
      description: 'Interactive NYC housing violations dashboard to identify enforcement gaps and hold offenders accountable',
      longDescription: 'A data-driven tool designed to promote housing justice by analyzing patterns in NYC housing code violations. The dashboard reveals enforcement gaps, tracks repeat offenders, and provides actionable insights for tenant advocacy and policy reform.',
      github: 'https://github.com/snedmagdous/nyc-housing-violations-dashboard',
      demo: null,
      tech: ['Python', 'Pandas', 'React', 'Jupyter', 'FastAPI', 'ML'],
      features: [
        'Analysis of 100,000+ housing violation records',
        'Interactive visualizations of violation patterns',
        'Identification of repeat offender landlords',
        'Geographic mapping of enforcement gaps'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1"/>
          <path d="M7 7L10 10L7 13" strokeWidth="1"/>
          <path d="M13 13H17" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'dmr-detection',
      title: 'DMR Detection with Hidden Markov Models',
      description: 'Markov Model pipeline for detecting differentially methylated regions in psychiatric epigenetics research',
      longDescription: 'A computational biology research project that uses Hidden Markov Models to detect differentially methylated regions (DMRs) in genomic data. This work contributes to understanding epigenetic mechanisms in psychiatric disorders and trauma response.',
      github: 'https://github.com/snedmagdous/dmr-detection-nhmm',
      demo: null,
      tech: ['Python', 'Markov Models', 'Genomics', 'NumPy'],
      features: [
        'Non-homogeneous Hidden Markov Model implementation',
        'Statistical analysis of methylation patterns',
        'Integration with genomic data processing pipelines'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 11H15" strokeWidth="1"/>
          <path d="M9 15H12" strokeWidth="1"/>
          <rect x="8" y="1" width="8" height="4" rx="1" strokeWidth="1"/>
          <circle cx="12" cy="11" r="2" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'epigenomics-nlp',
      title: 'Epigenomics & Trauma NLP Research',
      description: 'Natural language processing and epigenomics research exploring intergenerational trauma mechanisms',
      longDescription: 'An interdisciplinary research project combining NLP and computational biology to analyze how traumatic experiences may influence gene expression across generations. This work bridges computer science, neuroscience, and social justice.',
      github: 'https://github.com/snedmagdous/epigenomics-trauma-nlp',
      demo: null,
      tech: ['Python', 'NLP', 'TensorFlow', 'Epigenetics', 'Trauma Research'],
      features: [
        'NLP analysis of trauma narratives and research literature',
        'Epigenetic data processing and analysis',
        'Machine learning models for pattern recognition'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="1"/>
          <path d="M2 17L12 22L22 17" strokeWidth="1"/>
          <path d="M2 12L12 17L22 12" strokeWidth="1"/>
        </svg>
      )
    }
  ];

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={false}
    >
      {/* Video Background - Same as resume page */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.24) contrast(1.3) saturate(1.9)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/coding.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.techPortfolioPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/resume" className={styles.backLink}>
            Back to Resume
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.portfolioHero}>
          <h1 className={styles.portfolioTitle}>Technical Portfolio</h1>
          <p className={styles.portfolioSubtitle}>
            Computational projects across AI, data science, and web development
          </p>
          <div className={styles.heroButtons}>
            <a
              href="https://github.com/snedmagdous"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroGithubButton}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.heroGithubIcon}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View GitHub</span>
            </a>
            <a
              href="#featured-projects"
              className={styles.heroProjectsButton}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.heroProjectsIcon}>
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/>
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeWidth="1.5"/>
              </svg>
              <span>Featured Projects</span>
            </a>
          </div>
        </div>

        {/* GitHub Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <div className={styles.projectIcon}>{project.icon}</div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <span className={styles.viewGithub}>View on GitHub →</span>
                {project.demo && (
                  <span className={styles.viewDemo}>Live Demo</span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Detailed Project Showcases - Alternating Layout */}
        <div className={styles.projectShowcases}>
          <h2 className={styles.showcaseHeader}>Featured Projects</h2>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectShowcase} ${index % 2 === 0 ? styles.showcaseLeft : styles.showcaseRight}`}
            >
              <div className={styles.showcaseContent}>
                <div className={styles.showcaseIcon}>{project.icon}</div>
                <h3 className={styles.showcaseTitle}>{project.title}</h3>
                <p className={styles.showcaseLongDescription}>{project.longDescription}</p>

                <div className={styles.showcaseFeatures}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {project.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.showcaseTech}>
                  <h4 className={styles.techTitle}>Technologies:</h4>
                  <div className={styles.showcaseTechStack}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.showcaseTechBadge}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.showcaseActions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.showcaseButton}
                  >
                    View on GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.showcaseDemoButton}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.showcaseVisual}>
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} preview`}
                    className={styles.showcaseImage}
                  />
                ) : (
                  <div className={styles.comingSoonBadge}>Demo Coming Soon</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className={styles.githubSection}>
          <a
            href="https://github.com/snedmagdous"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.githubIcon}>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default TechPortfolioPage
