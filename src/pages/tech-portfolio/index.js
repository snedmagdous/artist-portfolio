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
      tech: ['React', 'Gatsby', 'CSS3', 'JavaScript', 'Responsive Design'],
      features: [
        'Dynamic video backgrounds with glassmorphism UI',
        'Responsive design optimized for all devices',
        'Smooth scroll animations and transitions',
        'Film portfolio with categorized showcase',
        'Integrated contact forms with Netlify',
        'Performance-optimized image and video loading'
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
      description: 'Interactive dashboard analyzing NYC affordable housing violations to identify enforcement gaps and hold repeat offenders accountable',
      longDescription: 'A data-driven tool designed to promote housing justice by analyzing patterns in NYC housing code violations. The dashboard reveals enforcement gaps, tracks repeat offenders, and provides actionable insights for tenant advocacy and policy reform.',
      github: 'https://github.com/snedmagdous/nyc-housing-violations-dashboard',
      demo: null,
      tech: ['Python', 'Pandas', 'React', 'Jupyter', 'FastAPI', 'ML'],
      features: [
        'Analysis of 100,000+ housing violation records',
        'Interactive visualizations of violation patterns',
        'Identification of repeat offender landlords',
        'Geographic mapping of enforcement gaps',
        'Temporal analysis of violation trends',
        'Data pipeline for NYC Open Data integration'
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
      description: 'Hidden Markov Model pipeline for detecting differentially methylated regions in psychiatric epigenetics research',
      longDescription: 'A computational biology research project that uses Hidden Markov Models to detect differentially methylated regions (DMRs) in genomic data. This work contributes to understanding epigenetic mechanisms in psychiatric disorders and trauma response.',
      github: 'https://github.com/snedmagdous/dmr-detection-nhmm',
      demo: null,
      tech: ['Python', 'Markov Models', 'Genomics', 'NumPy'],
      features: [
        'Non-homogeneous Hidden Markov Model implementation',
        'Statistical analysis of methylation patterns',
        'Integration with genomic data processing pipelines',
        'Visualization of DMR regions',
        'Performance optimization for large datasets',
        'Research-grade accuracy and validation'
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
        'Machine learning models for pattern recognition',
        'Integration of social science and biological data',
        'Visualization of multi-dimensional research findings',
        'Contribution to trauma-informed care research'
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
                <div className={styles.comingSoonBadge}>Demo Coming Soon</div>
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
            <svg viewBox="0 0 24 24" fill="none" className={styles.githubIcon} stroke="currentColor">
              <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H16" strokeWidth="1"/>
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default TechPortfolioPage
