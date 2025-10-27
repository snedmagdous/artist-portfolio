// src/pages/art/illustrations/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../art.module.css"

const IllustrationsPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredProject, setHoveredProject] = useState(null)
  const videoRef = useRef(null);
  const projectVideoRefs = useRef({})

  // Background video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  // Video hover effect handlers for project cards
  const handleProjectMouseEnter = (projectId) => {
    console.log('Mouse enter:', projectId)
    setHoveredProject(projectId)
    const video = projectVideoRefs.current[projectId]
    console.log('Video element:', video)
    if (video) {
      console.log('Playing video for:', projectId)
      video.play().catch(e => console.log('Video play failed:', e))
    } else {
      console.log('No video found for:', projectId)
    }
  }

  const handleProjectMouseLeave = (projectId) => {
    console.log('Mouse leave:', projectId)
    setHoveredProject(null)
    const video = projectVideoRefs.current[projectId]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }
  
  const getProjectIcon = (projectId) => {
    const icons = {
      'divine-feminine': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="8" r="5" strokeWidth="1.5"/>
          <path d="M12 13c-3 0-5 1.5-5 3v2h10v-2c0-1.5-2-3-5-3z" strokeWidth="1.5"/>
          <circle cx="9" cy="7" r="0.5" fill="currentColor" opacity="0.6"/>
          <circle cx="15" cy="7" r="0.5" fill="currentColor" opacity="0.6"/>
          <path d="M10 9c0.5 0.5 1.5 0.5 2 0 0.5 0.5 1.5 0.5 2 0" strokeWidth="1" opacity="0.7"/>
        </svg>
      ),
      'blueprint-rebellion': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" strokeDasharray="3,3"/>
          <path d="M9 9h6v6H9z" strokeWidth="1.5"/>
          <path d="M12 9V3M12 21v-6M9 12H3M21 12h-6" strokeWidth="1" opacity="0.7"/>
        </svg>
      ),
      'where-do-you-go': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" opacity="0.3" strokeDasharray="2,2"/>
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
          <path d="M8 8l-3-3M16 8l3-3M8 16l-3 3M16 16l3 3" strokeWidth="1" opacity="0.4"/>
          <line x1="9" y1="12" x2="15" y2="12" strokeWidth="0.5" opacity="0.6"/>
          <line x1="12" y1="9" x2="12" y2="15" strokeWidth="0.5" opacity="0.6"/>
        </svg>
      ),
      'constellation-code': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="2" strokeWidth="1.5"/>
          <circle cx="6" cy="6" r="1.5" strokeWidth="1.5"/>
          <circle cx="18" cy="6" r="1.5" strokeWidth="1.5"/>
          <circle cx="6" cy="18" r="1.5" strokeWidth="1.5"/>
          <circle cx="18" cy="18" r="1.5" strokeWidth="1.5"/>
          <path d="M12 10L6 6M12 10l6-4M12 14l-6 4M12 14l6 4" strokeWidth="1" opacity="0.6"/>
        </svg>
      )
    }
    return icons[projectId] || icons['divine-feminine']
  }

  const illustrationProjects = [
    {
      id: 'divine-feminine',
      title: 'Divine Feminine',
      description: 'A series of pen portraits celebrating the power of the women around me, capturing their strength, wisdom, and unique energy.',
      pieceCount: 12,
      year: '2024',
      medium: 'Pen on Paper',
      type: 'Portrait Series',
      status: 'Complete',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/divine-fem.MP4',
      videoBrightness: 0.6,
      videoSaturation: 1.2,
      videoContrast: 1.1,
      previewImage: '/images/portraits/michelle.jpeg'
    },
    {
      id: 'blueprint-rebellion',
      title: 'Blueprint Rebellion',
      description: 'Raw sketches capturing women in their moments of reclaiming power. These drawings serve as blueprints for larger paintings—foundational studies where rebellion is first conceived.',
      pieceCount: 28,
      year: '2024',
      medium: 'Mixed Drawing Media',
      type: 'Sketch Series',
      status: 'Complete',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/library.MP4',
      videoBrightness: 0.6,
      videoSaturation: 1.1,
      videoContrast: 1.3,
      previewImage: '/images/illustration/blueprint/intimate.jpeg'
    },
    {
      id: 'where-do-you-go',
      title: 'Where do you go when there\'s nowhere left to go?',
      description: 'A dark illustration series mapping depersonalization and chronic pain through interconnected fragments of dissociation.',
      pieceCount: 8,
      year: '2023-2024',
      medium: 'Dark Illustration',
      type: 'Investigation Series',
      status: 'Complete',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/my-queens.MP4',
      videoBrightness: 0.4,
      videoSaturation: 0.8,
      videoContrast: 1.3
    },
    {
      id: 'constellation-code',
      title: 'Constellation Code',
      description: 'Astronomical illustrations that reframe traditional star knowledge as programming languages for navigation in both physical and virtual space.',
      pieceCount: 16,
      year: '2023',
      medium: 'Digital & Print',
      type: 'Conceptual Series',
      status: 'In Progress',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/art.MP4'
    }
  ]
  
  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={false}
    >
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.7) contrast(1.2) saturate(1.2)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/illust.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.subPage}>
        <div className={styles.backNavigation}>
          <Link to="/art" className={styles.backLink}>
            Back to Art Categories
          </Link>
        </div>

        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Illustrations</h1>
          <p className={styles.subPageSubtitle}>
            Digital and traditional storytelling artworks that visualize Indigenous futurism across multiple mediums
          </p>
        </div>

        <div className={styles.seriesContainer}>
          <h2 className={styles.seriesHeading}>Illustration Projects</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine}></div>
            {illustrationProjects.map((project, index) => (
              <div key={project.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineYear}>{project.year}</div>
                </div>

                {/* Preview Image on Opposite Side */}
                {project.previewImage && (
                  <div className={`${styles.previewImageContainer} ${hoveredProject === project.id ? styles.previewVisible : ''}`}>
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      className={styles.previewImage}
                    />
                  </div>
                )}

                {index < 3 ? (
                  <Link
                    to={`/art/illustrations/${project.id}`}
                    className={styles.timelineCard}
                    onMouseEnter={() => handleProjectMouseEnter(project.id)}
                    onMouseLeave={() => handleProjectMouseLeave(project.id)}
                  >
                    <div className={styles.timelineImageArea}>
                      {/* Hover Video */}
                      <video
                        ref={el => projectVideoRefs.current[project.id] = el}
                        className={`${styles.hoverVideo} ${hoveredProject === project.id ? styles.videoVisible : ''}`}
                        style={{
                          filter: `brightness(${project.videoBrightness || 0.8}) saturate(${project.videoSaturation || 1.1}) contrast(${project.videoContrast || 1.1})`
                        }}
                        muted
                        loop
                        playsInline
                      >
                        <source src={project.videoSrc} type="video/mp4" />
                      </video>

                      {/* Project Icon */}
                      {getProjectIcon(project.id)}

                      <div className={styles.timelineStatus}>
                        <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className={styles.timelineContent}>
                      <h3 className={styles.timelineTitle}>{project.title}</h3>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineType}>{project.type}</span>
                        <span className={styles.timelineMedium}>{project.medium}</span>
                        <span className={styles.timelineCount}>{project.pieceCount} pieces</span>
                      </div>
                      <p className={styles.timelineDescription}>{project.description}</p>

                      <div className={styles.viewProjectBtn}>
                        View Project
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={styles.timelineCard}
                    onMouseEnter={() => handleProjectMouseEnter(project.id)}
                    onMouseLeave={() => handleProjectMouseLeave(project.id)}
                  >
                    <div className={styles.timelineImageArea}>
                      {/* Hover Video */}
                      <video
                        ref={el => projectVideoRefs.current[project.id] = el}
                        className={`${styles.hoverVideo} ${hoveredProject === project.id ? styles.videoVisible : ''}`}
                        style={{
                          filter: `brightness(${project.videoBrightness || 0.8}) saturate(${project.videoSaturation || 1.1}) contrast(${project.videoContrast || 1.1})`
                        }}
                        muted
                        loop
                        playsInline
                      >
                        <source src={project.videoSrc} type="video/mp4" />
                      </video>

                      {/* Project Icon */}
                      {getProjectIcon(project.id)}

                      <div className={styles.timelineStatus}>
                        <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase().replace(' ', '')]}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className={styles.timelineContent}>
                      <h3 className={styles.timelineTitle}>{project.title}</h3>
                      <div className={styles.timelineMeta}>
                        <span className={styles.timelineType}>{project.type}</span>
                        <span className={styles.timelineMedium}>{project.medium}</span>
                        <span className={styles.timelineCount}>{project.pieceCount} pieces</span>
                      </div>
                      <p className={styles.timelineDescription}>{project.description}</p>

                      <div className={styles.comingSoonBtn}>
                        Coming Soon<span className={styles.blinkingDots}>...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mediumExploration}>
          <h3 className={styles.explorationTitle}>Medium Exploration</h3>
          <div className={styles.explorationGrid}>
            <div className={styles.explorationItem}>
              <h4>Digital Tools</h4>
              <p>Procreate, Photoshop, Illustrator, and emerging AI collaboration tools</p>
            </div>
            <div className={styles.explorationItem}>
              <h4>Traditional Methods</h4>
              <p>Watercolor, ink, charcoal, and techniques</p>
            </div>
            <div className={styles.explorationItem}>
              <h4>Hybrid Approaches</h4>
              <p>Combining hand-drawn elements with digital finishing and interactive elements</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IllustrationsPage