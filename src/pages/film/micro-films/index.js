// src/pages/film/micro-films/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../film.module.css"

const MicroFilmsPage = () => {
  const [language, setLanguage] = useState('EN')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [videosArePaused, setVideosArePaused] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [modalVideoPaused, setModalVideoPaused] = useState(true)
  const [modalVideoMuted, setModalVideoMuted] = useState(true)
  const [backgroundVideoPaused, setBackgroundVideoPaused] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState(new Set())
  const [highlightVideosLoaded, setHighlightVideosLoaded] = useState(new Set())
  const videoRefs = useRef([])
  const highlightVideoRefs = useRef([])
  const modalVideoRef = useRef(null)
  const slideContainerRef = useRef(null)
  const observerRef = useRef(null)
  const highlightObserverRef = useRef(null)
  
  const microFilms = [
    {
      id: 'digital-prayers',
      title: 'Digital Prayers',
      duration: '45 sec',
      year: '2024',
      description: 'Traditional prayers translated into visual code patterns, exploring spirituality in digital spaces.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/bloom.MP4',
      hashtags: ['#IndigenousTech', '#DigitalSpirituality', '#CodePrayers'],
      isHighlight: false
    },
    {
      id: 'quantum-beadwork',
      title: 'Quantum Beadwork',
      duration: '30 sec',
      year: '2024',
      description: 'Time-lapse of traditional beadwork that morphs into quantum particle patterns.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/julz.MP4',
      hashtags: ['#TraditionalCrafts', '#QuantumArt', '#TimeLapse']
    },
    {
      id: 'voice-echo',
      title: 'Voice Echo',
      duration: '60 sec',
      year: '2024',
      description: 'Indigenous language phrases create visual ripples in augmented reality space.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/pink.MOV',
      hashtags: ['#LanguageRevitalization', '#AR', '#SoundVisualization']
    },
    {
      id: 'data-seeds',
      title: 'Data Seeds',
      duration: '40 sec',
      year: '2023',
      description: 'Seeds growing into circuit trees, representing how traditional knowledge feeds technology.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/dc.MOV',
      hashtags: ['#TraditionalKnowledge', '#TechGrowth', '#NatureDigital']
    },
    {
      id: 'urban-totems',
      title: 'Urban Totems',
      duration: '50 sec',
      year: '2023',
      description: 'City infrastructure reimagined as modern totems through AR overlay.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/skool.MOV',
      hashtags: ['#UrbanIndigenous', '#ModernTotems', '#CityLife']
    },
    {
      id: 'memory-pixels',
      title: 'Memory Pixels',
      duration: '35 sec',
      year: '2023',
      description: 'Family photographs dissolving and reforming as digital memories.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/sunset.MOV',
      hashtags: ['#DigitalMemories', '#FamilyStories', '#PixelArt']
    },
    {
      id: 'memory-pixels',
      title: 'Memory Pixels',
      duration: '35 sec',
      year: '2023',
      description: 'Family photographs dissolving and reforming as digital memories.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/umd.MOV',
      hashtags: ['#DigitalMemories', '#FamilyStories', '#PixelArt']
    },
    {
      id: 'memory-pixels',
      title: 'Memory Pixels',
      duration: '35 sec',
      year: '2023',
      description: 'Family photographs dissolving and reforming as digital memories.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/bojak.MOV',
      hashtags: ['#DigitalMemories', '#FamilyStories', '#PixelArt']
    }
  ]

  const highlightFilms = [
    {
      id: 'highlight-digital-prayers',
      title: 'Digital Prayers',
      description: 'Traditional prayers translated into visual code patterns, exploring spirituality in digital spaces. This piece bridges ancient wisdom with contemporary digital expression, creating a sacred space where technology becomes a vessel for spiritual connection.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/Download.mp4',
      duration: '45 sec',
      year: '2024',
      hashtags: ['#IndigenousTech', '#DigitalSpirituality', '#CodePrayers'],
      tiktokUrl: 'https://www.tiktok.com/@mayamurry/video/6911104651635084550',
      isHighlight: true
    },
    {
      id: 'highlight-quantum-beadwork',
      title: 'Quantum Beadwork',
      description: 'Time-lapse of traditional beadwork that morphs into quantum particle patterns. This micro-film explores the intersection of ancestral craft traditions and quantum physics, revealing the universal patterns that connect indigenous knowledge systems with modern science.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/Download%20(3).mp4',
      duration: '30 sec',
      year: '2024',
      hashtags: ['#TraditionalCrafts', '#QuantumArt', '#TimeLapse'],
      tiktokUrl: 'https://www.tiktok.com/@mayamurry/video/6921907734635891973',
      isHighlight: true
    },
    {
      id: 'highlight-voice-echo',
      title: 'Voice Echo',
      description: 'Indigenous language phrases create visual ripples in augmented reality space. Each word becomes a living entity, transforming the digital realm into a landscape where ancestral languages breathe new life through immersive technology and visual poetry.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/Download%20(1).mp4',
      duration: '60 sec',
      year: '2024',
      hashtags: ['#LanguageRevitalization', '#AR', '#SoundVisualization'],
      tiktokUrl: 'https://www.tiktok.com/@mayamurry/video/6915959571450236165',
      isHighlight: true
    },
    {
      id: 'highlight-data-seeds',
      title: 'Data Seeds',
      description: 'Seeds growing into circuit trees, representing how traditional knowledge feeds technology. This visual metaphor explores the organic relationship between indigenous wisdom and technological innovation, showing how ancestral knowledge systems can nurture and guide digital evolution.',
      videoSrc: 'https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/Download%20(2).mp4',
      duration: '40 sec',
      year: '2023',
      hashtags: ['#TraditionalKnowledge', '#TechGrowth', '#NatureDigital'],
      tiktokUrl: 'https://www.tiktok.com/@mayamurry/video/6919661682700684550',
      isHighlight: true
    }
  ]

  // Optimized intersection observer for micro films
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Reduced threshold for earlier loading
      rootMargin: '100px 0px 100px 0px' // Load videos before they come into view
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        const videoIndex = parseInt(video.dataset.videoIndex, 10)

        if (entry.isIntersecting) {
          // Lazy load video source if not already loaded
          if (!videosLoaded.has(videoIndex)) {
            const filmData = microFilms[videoIndex]
            if (filmData && !video.src) {
              video.src = filmData.videoSrc
              video.load()
              setVideosLoaded(prev => new Set([...prev, videoIndex]))
            }
          }

          // Play video with error handling
          if (video.readyState >= 2) { // HAVE_CURRENT_DATA
            video.play().catch(e => {
              console.log("Video play failed:", e)
              // Retry after a short delay
              setTimeout(() => {
                video.play().catch(() => {})
              }, 500)
            })
          }
        } else {
          video.pause()
        }
      })
    }

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.dataset.videoIndex = index
        observerRef.current.observe(video)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [microFilms, videosLoaded])

  // Optimized intersection observer for highlight videos
  useEffect(() => {
    const highlightObserverOptions = {
      threshold: 0.2,
      rootMargin: '150px 0px 150px 0px'
    }

    const highlightObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target
        const videoIndex = parseInt(video.dataset.highlightIndex, 10)

        if (entry.isIntersecting) {
          // Lazy load highlight video source if not already loaded
          if (!highlightVideosLoaded.has(videoIndex)) {
            const filmData = highlightFilms[videoIndex]
            if (filmData && !video.src) {
              video.src = filmData.videoSrc
              video.load()
              setHighlightVideosLoaded(prev => new Set([...prev, videoIndex]))
            }
          }

          // Play video
          if (video.readyState >= 2) {
            video.play().catch(e => console.log("Highlight video play failed:", e))
          }
        } else {
          video.pause()
        }
      })
    }

    if (highlightObserverRef.current) {
      highlightObserverRef.current.disconnect()
    }

    highlightObserverRef.current = new IntersectionObserver(highlightObserverCallback, highlightObserverOptions)

    highlightVideoRefs.current.forEach((video, index) => {
      if (video) {
        video.dataset.highlightIndex = index
        highlightObserverRef.current.observe(video)
      }
    })

    return () => {
      if (highlightObserverRef.current) {
        highlightObserverRef.current.disconnect()
      }
    }
  }, [highlightFilms, highlightVideosLoaded])

  // Preload videos near current slide
  useEffect(() => {
    const preloadRange = 2 // Preload 2 videos before and after current slide

    for (let i = Math.max(0, currentSlide - preloadRange);
         i <= Math.min(microFilms.length - 1, currentSlide + preloadRange);
         i++) {
      if (!videosLoaded.has(i) && videoRefs.current[i]) {
        const video = videoRefs.current[i]
        const filmData = microFilms[i]
        if (filmData && !video.src) {
          video.src = filmData.videoSrc
          video.preload = 'metadata'
          video.load()
          setVideosLoaded(prev => new Set([...prev, i]))
        }
      }
    }
  }, [currentSlide, microFilms, videosLoaded])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % microFilms.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + microFilms.length) % microFilms.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const toggleAllVideos = () => {
    const allVideos = [...videoRefs.current, ...highlightVideoRefs.current]

    if (videosArePaused) {
      // Play all videos
      allVideos.forEach(video => {
        if (video) {
          video.play().catch(e => console.log("Video play failed:", e))
        }
      })
      setVideosArePaused(false)
    } else {
      // Pause all videos
      allVideos.forEach(video => {
        if (video) {
          video.pause()
        }
      })
      setVideosArePaused(true)
    }
  }

  const openModal = (film) => {
    setSelectedFilm(film)
    setModalOpen(true)
    setModalVideoPaused(true)
    setModalVideoMuted(true)
    // Pause all background videos when modal opens
    const allVideos = [...videoRefs.current, ...highlightVideoRefs.current]
    allVideos.forEach(video => {
      if (video) {
        video.pause()
      }
    })

    // Load modal video
    setTimeout(() => {
      if (modalVideoRef.current && film.videoSrc) {
        modalVideoRef.current.src = film.videoSrc
        modalVideoRef.current.load()
      }
    }, 100)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedFilm(null)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
  }

  const toggleModalVideo = () => {
    if (modalVideoRef.current) {
      if (modalVideoPaused) {
        modalVideoRef.current.play().catch(e => console.log("Modal video play failed:", e))
      } else {
        modalVideoRef.current.pause()
      }
      setModalVideoPaused(!modalVideoPaused)
    }
  }

  const toggleModalVideoMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoMuted
      setModalVideoMuted(!modalVideoMuted)
    }
  }

  const toggleBackgroundVideo = () => {
    // Target the background video element more specifically
    const backgroundVideo = document.querySelector('.video-background video, .background-video, video[autoplay][muted][loop]')

    if (backgroundVideo) {
      if (backgroundVideoPaused) {
        // Play background video
        backgroundVideo.play().catch(e => console.log("Background video play failed:", e))
        setBackgroundVideoPaused(false)
      } else {
        // Pause background video
        backgroundVideo.pause()
        setBackgroundVideoPaused(true)
      }
    } else {
      console.log("Background video element not found")
    }
  }

  // Optimized slide scrolling with requestAnimationFrame
  useEffect(() => {
    if (slideContainerRef.current) {
      // Use requestAnimationFrame for smoother animations
      requestAnimationFrame(() => {
        if (slideContainerRef.current) {
          slideContainerRef.current.scrollTo({
            left: currentSlide * 320, // Adjust based on slide width
            behavior: 'smooth'
          })
        }
      })
    }
  }, [currentSlide])

  // Cleanup observers on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (highlightObserverRef.current) {
        highlightObserverRef.current.disconnect()
      }
    }
  }, [])
  
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
          <button
            className={styles.sidebarPauseBtn}
            onClick={toggleAllVideos}
          >
            {videosArePaused ? 'Play Videos' : 'Pause Videos'}
          </button>
          <button
            className={styles.sidebarBackgroundBtn}
            onClick={toggleBackgroundVideo}
          >
            {backgroundVideoPaused ? 'Play Background' : 'Pause Background'}
          </button>
        </div>

        {/* Floating Pause Button */}
        <div className={styles.floatingControls}>
          <button
            className={styles.floatingPauseBtn}
            onClick={toggleAllVideos}
            title={videosArePaused ? 'Play All Videos' : 'Pause All Videos'}
          >
            {videosArePaused ? '▶' : '⏸'}
          </button>
        </div>

        {/* Hero Section */}
        <div className={styles.subPageHero}>
          <h1 className={styles.subPageTitle}>Micro Films</h1>
          <p className={styles.subPageSubtitle}>
            Brief visual stories capturing moments of cultural significance in digital formats
          </p>
          {/* Action Buttons */}
          <div className={styles.heroButtons}>
            <button
              className={styles.viewHighlightsBtn}
              onClick={() => document.getElementById('highlights-section').scrollIntoView({ behavior: 'smooth' })}
            >
              View Highlights
            </button>
            <a
              href="https://www.tiktok.com/@mayamurry"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mayaTikTokBtn}
            >
              MĀYĀ's TikTok
            </a>
            <button
              className={styles.pauseVideosBtn}
              onClick={toggleAllVideos}
            >
              {videosArePaused ? 'Play Videos' : 'Pause Videos'}
            </button>
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
                  <div key={film.id} className={styles.phoneCard} onClick={() => openModal(film)}>
                    {/* iPhone-style frame */}
                    <div className={styles.phoneFrame}>
                      <div className={styles.phoneNotch}></div>
                      <div className={styles.phoneScreen}>
                        <video
                          ref={el => videoRefs.current[index] = el}
                          muted
                          loop
                          playsInline
                          preload="none"
                          className={styles.microVideo}
                          style={{
                            filter: 'brightness(0.9) contrast(1.0)'
                          }}
                          onLoadStart={() => {
                            // Set loading state
                          }}
                          onCanPlay={() => {
                            // Video is ready to play
                          }}
                          onError={(e) => {
                            console.log('Video load error:', e)
                          }}
                        >
                          {/* Source will be added dynamically by intersection observer */}
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

        {/* Filmmaker's Tribute Section */}
        <section className={styles.filmmakerTribute}>
          <h3 className={styles.tributeTitle}>Filmmaker's Tribute</h3>
          <div className={styles.tributeContent}>
            <p>
              During the early months of COVID-19, when the world shifted into isolation and uncertainty,
              I found myself drawn to the intimate format of micro films. What started as a way to document
              fleeting moments during lockdown evolved into a deeper exploration of how diasporic stories
              could find new life in digital spaces.
            </p>
            <p>
              The constraint of brief formats—30 to 60 seconds—forced me to distill complex cultural narratives
              into their most essential elements. Each micro film became a meditation on presence, memory, and
              the ways technology can serve as a bridge between ancestral wisdom and contemporary expression.
            </p>
            <p>
              This collection represents not just artistic experimentation, but a personal journey of reconnection—
              with community, with storytelling traditions, and with the profound power of brief moments to
              carry entire worlds of meaning.
            </p>
            <span className={styles.tributeSignature}>— Created during the pandemic, 2020-2024</span>
          </div>
        </section>

        {/* Highlights Section */}
        <section id="highlights-section" className={styles.highlightsSection}>
          <h2 className={styles.highlightsHeading}>Highlights</h2>

          {highlightFilms.map((film, index) => (
            <div key={film.id} className={`${styles.highlightItem} ${index % 2 === 1 ? styles.highlightItemReverse : ''}`}>
              <div className={styles.highlightContent}>
                <div className={styles.highlightText}>
                  <h3 className={styles.highlightTitle}>{film.title}</h3>
                  <p className={styles.highlightDescription}>
                    {film.description}
                  </p>
                  <a
                    href={film.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewTikTokBtn}
                  >
                    View TikTok
                  </a>
                </div>
                <div className={styles.highlightPhone} onClick={() => openModal(film)}>
                  <div className={styles.phoneFrame}>
                    <div className={styles.phoneNotch}></div>
                    <div className={styles.phoneScreen}>
                      <video
                        ref={el => highlightVideoRefs.current[index] = el}
                        muted
                        loop
                        playsInline
                        preload="none"
                        className={styles.highlightVideo}
                        onLoadStart={() => {
                          // Set loading state
                        }}
                        onCanPlay={() => {
                          // Video is ready to play
                        }}
                        onError={(e) => {
                          console.log('Highlight video load error:', e)
                        }}
                      >
                        {/* Source will be added dynamically by intersection observer */}
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

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

        {/* Modal */}
        {modalOpen && selectedFilm && (
          <div className={styles.filmModal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>

              <div className={styles.modalBody}>
                {/* Title above video */}
                <h2 className={styles.modalTitle}>{selectedFilm.title}</h2>
                <div className={styles.modalMeta}>
                  <span className={styles.modalDuration}>{selectedFilm.duration}</span>
                  <span className={styles.modalYear}>{selectedFilm.year}</span>
                </div>

                {/* Phone - Full width with padding */}
                <div className={styles.modalPhone}>
                  <div className={styles.modalPhoneFrame}>
                    <div className={styles.modalPhoneNotch}></div>
                    <div className={styles.modalPhoneScreen}>
                      <video
                        ref={modalVideoRef}
                        muted={modalVideoMuted}
                        loop
                        playsInline
                        preload="metadata"
                        className={styles.modalVideo}
                        onLoadStart={() => {
                          // Modal video loading
                        }}
                        onCanPlay={() => {
                          // Modal video ready
                        }}
                        onError={(e) => {
                          console.log('Modal video error:', e)
                        }}
                      >
                        {/* Source will be added dynamically in openModal */}
                      </video>
                    </div>
                  </div>
                </div>

                {/* Video Controls below phone */}
                <div className={styles.modalControls}>
                  <button
                    className={styles.modalControlBtn}
                    onClick={toggleModalVideo}
                  >
                    {modalVideoPaused ? '▶ Play' : '⏸ Pause'}
                  </button>
                  <button
                    className={styles.modalControlBtn}
                    onClick={toggleModalVideoMute}
                  >
                    {modalVideoMuted ? '🔊 Unmute' : '🔇 Mute'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default MicroFilmsPage