// src/pages/art/murals/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../art.module.css"

const MuralsPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRefs = useRef([])
  
  const muralProjects = [
    {
      id: 'sun-will-shine-palestine',
      title: 'The Sun Will Shine',
      description: 'A powerful statement of solidarity created collectively for Indigenous liberation. This large-scale mural became a beacon of hope and resistance, symbolizing the unwavering belief in Palestinian freedom and the collective power of student activism.',
      location: 'Apartheid Wall, Ithaca, NY',
      year: '2024',
      size: '8ft × 36ft',
      medium: 'Exterior acrylic paint',
      status: 'Complete',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/sun-will-shine.MP4',
      collaborators: 'Ithaca Jewish Voice for Peace, Ithaca Collective for Justice in Palestine, Ithaca Mural Arts, & Various local social justice coalitions',
      funding: 'Community-funded project raising $13,000+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Sun rays */}
          <circle cx="12" cy="12" r="6" fill="rgba(140, 140, 140, 0.25)"/>
          <circle cx="12" cy="12" r="3" fill="rgba(140, 140, 140, 0.35)"/>
          <path d="M12 2V6M12 18V22M22 12H18M6 12H2M20.5 4.5L18 7M8 15L5.5 17.5M20.5 19.5L18 17M8 9L5.5 6.5" strokeWidth="0.4"/>
          {/* Olive branches */}
          <path d="M8 16C8.5 17 9.5 17.5 10.5 17" strokeWidth="0.3" fill="none"/>
          <path d="M16 16C15.5 17 14.5 17.5 13.5 17" strokeWidth="0.3" fill="none"/>
        </svg>
      )
    },
    {
      id: 'tikkun-vor-healing-light',
      title: 'Tikkun V\'or (תיקון אור) - Healing Light',
      description: 'A Jewish liberation mural exploring themes of healing, justice, and spiritual resistance. Created in collaboration with Jewish spiritual leader and rabbi in training, Michael Margolin and Jewish youth, this piece reclaims Jewish identity through values of liberation and solidarity.',
      location: 'Tikkun V\'or Synagogue, Lansing, NY',
      year: '2024',
      size: '10ft × 10ft',
      medium: 'Mixed media',
      status: 'Complete',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/tikkun-vor.MP4',
      collaborators: 'Center for Transformative Action, Ithaca Mural Arts, Michael Margolin, Jewish youth community at the Tikkun V\'or Synagogue',
      funding: 'Community-funded project raising $2,000+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Star of David outline */}
          <path d="M12 2L15 8H21L16.5 12L18 18L12 15L6 18L7.5 12L3 8H9L12 2Z" fill="rgba(140, 140, 140, 0.2)" strokeWidth="0.4"/>
          {/* Healing light rays */}
          <circle cx="12" cy="12" r="2" fill="rgba(140, 140, 140, 0.3)"/>
          <path d="M12 6V10M12 14V18M18 12H14M10 12H6" strokeWidth="0.3"/>
          {/* Geometric healing pattern */}
          <rect x="10" y="10" width="4" height="4" fill="rgba(140, 140, 140, 0.15)" strokeWidth="0.2"/>
        </svg>
      )
    },
    {
      id: 'love-as-revolution',
      title: 'Love as Revolution',
      description: 'An intersectional solidarity mural celebrating the revolutionary power of love as a force for social change. This piece weaves together themes of community care, mutual aid, and the transformative potential of collective love in movements for justice.',
      location: 'Community School of Music & Arts',
      year: '2025',
      size: '10ft × 15ft',
      medium: 'House paints',
      status: 'Complete',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/love-rev-mural.MP4',
      collaborators: 'CSMA, Cornell Society for the Humanities, Ithaca Mural Arts',
      funding: 'Community-funded project raising $3,000+ (including $1,500+ crowdsourced)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Heart shape */}
          <path d="M20.84 4.61C19.5 3.07 17.15 3.05 15.5 4.7L12 8.2L8.5 4.7C6.85 3.05 4.5 3.07 3.16 4.61C1.5 6.5 1.83 9.26 4.08 11.51L12 19.43L19.92 11.51C22.17 9.26 22.5 6.5 20.84 4.61Z" fill="rgba(140, 140, 140, 0.25)"/>
          {/* Revolutionary fist inside */}
          <circle cx="12" cy="10" r="3" fill="rgba(140, 140, 140, 0.15)"/>
          <path d="M10 9L12 11L14 9" strokeWidth="0.4" fill="none"/>
          {/* Unity circles */}
          <circle cx="8" cy="12" r="1" fill="rgba(140, 140, 140, 0.2)"/>
          <circle cx="16" cy="12" r="1" fill="rgba(140, 140, 140, 0.2)"/>
        </svg>
      )
    },
    {
      id: 'my-queens',
      title: 'In the Image of My Queens, I Stand',
      description: 'A nature-infused mural featuring Indigenous Bedouin and Nubian women protected by ancestral geometric light, standing in fierce resistance on stolen land while maintaining connection to their traditional territories.',
      location: 'SouthWorks Factory, Ithaca',
      year: '2025',
      size: '37ft × 15ft',
      medium: 'Exterior acrylic paint',
      status: 'Ongoing',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/queens-mural.mp4',
      collaborators: 'Argos Inn, Ithaca\'s Community Arts Partnership, Center for Transformative Action, Ithaca Mural Arts, Meldrim\'s Paint Center',
      funding: 'Grant-funded community project',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3">
          {/* Geometric crown/headdress */}
          <path d="M6 8L12 4L18 8L16 12L12 10L8 12Z" fill="rgba(140, 140, 140, 0.25)" strokeWidth="0.4"/>
          {/* Figure silhouettes */}
          <circle cx="9" cy="14" r="1.5" fill="rgba(140, 140, 140, 0.3)"/>
          <circle cx="15" cy="14" r="1.5" fill="rgba(140, 140, 140, 0.3)"/>
          <path d="M9 16C9 17 8.5 18 8 19H10C10.5 18 10 17 10 16" fill="rgba(140, 140, 140, 0.2)"/>
          <path d="M15 16C15 17 14.5 18 14 19H16C16.5 18 16 17 16 16" fill="rgba(140, 140, 140, 0.2)"/>
          {/* Geometric light patterns */}
          <path d="M12 6L14 8L12 10L10 8Z" fill="rgba(140, 140, 140, 0.2)"/>
          <circle cx="12" cy="8" r="0.5" fill="rgba(140, 140, 140, 0.4)"/>
        </svg>
      )
    }
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        if (entry.isIntersecting) {
          video.play().catch(e => console.log("Video play failed:", e))
        } else {
          video.pause()
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    videoRefs.current.forEach(video => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach(video => {
        if (video) observer.unobserve(video)
      })
    }
  }, [])
  
  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/murals.MP4"
      videoStyle={{
            filter: 'brightness(0.65) contrast(1.05) saturate(1.2)'
        }}
    >
      <section className={styles.subPage}>
        <div className={styles.backNavigation}>
          <Link to="/art" className={styles.backLink}>
            Back to Art Categories
          </Link>
        </div>

        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Murals</h1>
          <p className={styles.subPageSubtitle}>
            Community-funded public art celebrating liberation, solidarity, and the revolutionary power of collective creation
          </p>
          <button
            onClick={() => {
              document.querySelector(`.${styles.seriesContainer}`).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className={styles.viewMuralsButton}
          >
            View Murals
          </button>
        </div>

        <div className={styles.seriesContainer}>
          <h2 className={styles.seriesHeading}>Mural Projects</h2>
          <div className={styles.muralGrid}>
            {muralProjects.map((mural, index) => (
              <Link 
                key={mural.id} 
                to={`/art/murals/${mural.id}`} 
                className={styles.muralCardLink}
              >
                <div className={styles.muralCard}>
                  <div className={styles.muralVideoContainer}>
                    {/* Background Video that fades in on hover */}
                    <video
                      ref={el => videoRefs.current[index] = el}
                      muted
                      loop
                      playsInline
                      className={styles.muralVideoBackground}
                      style={{
                        filter: 'brightness(0.9) contrast(0.9)'
                      }}
                    >
                      <source src={mural.videoSrc} type="video/mp4" />
                    </video>
                    
                    {/* Content overlay */}
                    <div className={styles.muralVideoContent}>
                      <div className={styles.muralIcon}>
                        {mural.icon}
                      </div>

                      <div className={styles.muralVideoOverlay}>
                        <div className={styles.muralLocation}>{mural.location}</div>
                        <div className={styles.muralSize}>{mural.size}</div>
                        <div className={styles.muralStatus}>
                          <span className={`${styles.statusBadge} ${styles[mural.status.toLowerCase().replace(' ', '')]}`}>
                            {mural.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.muralContent}>
                    <h3 className={styles.muralTitle}>{mural.title}</h3>
                    <div className={styles.muralMeta}>
                      <span className={styles.muralYear}>{mural.year} • {mural.medium}</span>
                      <span className={styles.muralCollaborators}>with {mural.collaborators}</span>
                    </div>
                    <p className={styles.muralDescription}>{mural.description}</p>
                    
                    {mural.funding && (
                      <div className={styles.muralFunding}>
                        <span className={styles.fundingText}>{mural.funding}</span>
                      </div>
                    )}
                    
                    <div className={styles.viewMuralBtn}>
                      View Process
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.communityImpact}>
          <h3 className={styles.impactTitle}>Community Impact & Process</h3>
          <div className={styles.impactContent}>
            <div className={styles.impactStats}>
              <div className={styles.impactStat}>
                <span className={styles.statNumber}>4</span>
                <span className={styles.statLabel}>Murals Completed</span>
              </div>
              <div className={styles.impactStat}>
                <span className={styles.statNumber}>$18K+</span>
                <span className={styles.statLabel}>Community Raised</span>
              </div>
              <div className={styles.impactStat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Community Contributors</span>
              </div>
            </div>
            <div className={styles.impactText}>
              <p>
                Each mural project emerges from deep community collaboration and grassroots funding, 
                ensuring that the work truly serves the people who live with it daily. These aren't 
                just artworks—they're acts of collective resistance, love letters to liberation movements, 
                and beacons of hope in spaces that need them most.
              </p>
              <p>
                Through community-funded models, from small individual donations to organized fundraising 
                campaigns, each project demonstrates the power of collective investment in art that challenges 
                oppression and celebrates our shared humanity. The collaborative creation process transforms 
                both the artists and the community, building relationships that extend far beyond the painted wall.
              </p>
              <p>
                These murals exist at the intersection of art and activism, creating visual anchors for 
                movements while making space for healing, celebration, and revolutionary imagination in 
                public spaces that belong to all of us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MuralsPage