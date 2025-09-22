// src/pages/film/micro-films/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../film.module.css"

const MicroFilmsPage = () => {
  const [language, setLanguage] = useState('EN')
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRefs = useRef([])
  const slideContainerRef = useRef(null)
  
  const microFilms = [
    {
      id: 'digital-prayers',
      title: 'Digital Prayers',
      duration: '45 sec',
      year: '2024',
      description: 'Traditional prayers translated into visual code patterns, exploring spirituality in digital spaces.',
      videoSrc: 'https://www.youtube.com/embed/SJ9G-d174aA',
      hashtags: ['#IndigenousTech', '#DigitalSpirituality', '#CodePrayers']
    },
    {
      id: 'quantum-beadwork',
      title: 'Quantum Beadwork',
      duration: '30 sec',
      year: '2024',
      description: 'Time-lapse of traditional beadwork that morphs into quantum particle patterns.',
      videoSrc: 'https://www.youtube.com/embed/SJ9G-d174aA',
      hashtags: ['#TraditionalCrafts', '#QuantumArt', '#TimeLapse']
    },
    {
      id: 'voice-echo',
      title: 'Voice Echo',
      duration: '60 sec',
      year: '2024',
      description: 'Indigenous language phrases create visual ripples in augmented reality space.',
      videoSrc: 'https://www.youtube.com/embed/SJ9G-d174aA',
      hashtags: ['#LanguageRevitalization', '#AR', '#SoundVisualization']
    },
    {
      id: 'data-seeds',
      title: 'Data Seeds',
      duration: '40 sec',
      year: '2023',
      description: 'Seeds growing into circuit trees, representing how traditional knowledge feeds technology.',
      videoSrc: 'https://www.youtube.com/embed/SJ9G-d174aA',
      hashtags: ['#TraditionalKnowledge', '#TechGrowth', '#NatureDigital']
    },
    {
      id: 'urban-totems',
      title: 'Urban Totems',
      duration: '50 sec',
      year: '2023',
      description: 'City infrastructure reimagined as modern totems through AR overlay.',
      videoSrc: 'https://www.youtube.com/embed/SJ9G-d174aA',
      hashtags: ['#UrbanIndigenous', '#ModernTotems', '#CityLife']
    },
    {
      id: 'memory-pixels',
      title: 'Memory Pixels',
      duration: '35 sec',
      year: '2023',
      description: 'Family photographs dissolving and reforming as digital memories.',
      videoSrc: 'https://www.youtube.com/embed/SJ9G-d174aA',
      hashtags: ['#DigitalMemories', '#FamilyStories', '#PixelArt']
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % microFilms.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + microFilms.length) % microFilms.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (slideContainerRef.current) {
      slideContainerRef.current.scrollTo({
        left: currentSlide * 320, // Adjust based on slide width
        behavior: 'smooth'
      })
    }
  }, [currentSlide])
  
  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/micro-films.mp4"
      videoStyle={{
        filter: 'brightness(0.4) saturate(0.95) saturate(1.2)'
      }}
    >
      <section className={styles.subPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/film" className={styles.backLink}>
            Back to Film Categories
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Micro Films</h1>
          <p className={styles.subPageSubtitle}>
            Brief visual stories capturing moments of cultural significance in digital formats
          </p>
          {/* Add this Coming Soon text */}
          <div className={styles.comingSoonText}>
            Coming Soon<span className={styles.blinkingDots}>...</span>
          </div>
        </div>

        {/* Film Roll Interface */}
        <div className={styles.filmRollContainer}>
          <h2 className={styles.filmRollHeading}>Film Roll Exhibition</h2>
          
          {/* Film Roll Header */}
          <div className={styles.filmRollHeader}>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
          </div>

          {/* Main Exhibition Area */}
          <div className={styles.exhibitionContainer}>
            {/* Navigation Controls */}
            <button className={styles.filmNavBtn} onClick={prevSlide}>
              <span>‹</span>
            </button>

            {/* Film Slides Container */}
            <div className={styles.filmSlidesContainer} ref={slideContainerRef}>
              <div 
                className={styles.filmSlides} 
                style={{ transform: `translateX(-${currentSlide * 320}px)` }}
              >
                {microFilms.map((film, index) => (
                  <div key={film.id} className={styles.phoneCard}>
                    {/* iPhone-style frame */}
                    <div className={styles.phoneFrame}>
                      <div className={styles.phoneNotch}></div>
                      <div className={styles.phoneScreen}>
                        <video
                          ref={el => videoRefs.current[index] = el}
                          muted
                          loop
                          playsInline
                          className={styles.microVideo}
                          style={{
                            filter: 'brightness(0.9) contrast(1.0)'
                          }}
                        >
                          <source src={film.videoSrc} type="video/mp4" />
                        </video>
                        
                        {/* Video overlay info */}
                        <div className={styles.microVideoOverlay}>
                          <div className={styles.microTitle}>{film.title}</div>
                          <div className={styles.microDuration}>{film.duration}</div>
                        </div>
                      </div>
                    </div>

                    {/* Film details below phone */}
                    <div className={styles.microFilmDetails}>
                      <h3 className={styles.microFilmTitle}>{film.title}</h3>
                      <p className={styles.microDescription}>{film.description}</p>
                      <div className={styles.microHashtags}>
                        {film.hashtags.map((tag, i) => (
                          <span key={i} className={styles.hashtagLabel}>{tag}</span>
                        ))}
                      </div>
                      <div className={styles.microYear}>{film.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.filmNavBtn} onClick={nextSlide}>
              <span>›</span>
            </button>
          </div>

          {/* Film Roll Dots Navigation */}
          <div className={styles.filmRollDots}>
            {microFilms.map((_, index) => (
              <button
                key={index}
                className={`${styles.filmDot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Film Roll Footer */}
          <div className={styles.filmRollFooter}>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
            <div className={styles.filmRollSpocket}></div>
          </div>
        </div>

        {/* Platform Note */}
        <div className={styles.platformNote}>
          <h3 className={styles.noteTitle}>Digital Storytelling</h3>
          <div className={styles.noteContent}>
            <p>
              These micro films explore how diasporic stories can thrive in digital spaces, 
              using the intimate format of mobile screens to create personal connections with cultural narratives.
            </p>
            <p>
              Each piece is designed to be shared, discussed, and experienced as part of a larger 
              conversation about our presence in digital media.
            </p>
            <span className={styles.noteSignature}>— Digital Strategy Notes</span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default MicroFilmsPage