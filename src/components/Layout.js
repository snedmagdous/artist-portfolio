// src/components/layout.js
import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby";
import "../styles/global.css" // Your main CSS

const Layout = ({
  children,
  language,
  setLanguage,
  hasVideoBackground = false,
  videoSrc,
  videoStyle = {},
  videoContainerStyle = {},
  overlayStyle = {}, // New prop for custom overlay styling
  playbackRate = 1.0,
  videoFilter = 'brightness(0.55) contrast(1.6) saturate(1.9)' // Default filter
}) => {
  const videoRef = useRef(null);
  const [isBackgroundPaused, setIsBackgroundPaused] = useState(false);
  const [showPauseText, setShowPauseText] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Initialize pause state from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPauseState = localStorage.getItem('globalBackgroundPaused');
      if (savedPauseState === 'true') {
        setIsBackgroundPaused(true);
      }
    }
  }, []);
  console.log('Layout received:', { hasVideoBackground, videoSrc, videoStyle });
  const headerRef = useRef(null); 

  // Video background setup
  useEffect(() => {
    if (videoRef.current && hasVideoBackground && videoSrc) {
      const video = videoRef.current;
      video.defaultMuted = true;
      video.muted = true;
      video.playbackRate = playbackRate;

      // Ensure video plays immediately (unless globally paused)
      const playVideo = async () => {
        try {
          if (!isBackgroundPaused) {
            await video.play();
          }
        } catch (error) {
          console.log('Video autoplay failed:', error);
        }
      };

      // Play video as soon as possible (unless globally paused)
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo);
      }

      return () => {
        video.removeEventListener('loadeddata', playVideo);
      };
    }
  }, [hasVideoBackground, videoSrc, playbackRate, isBackgroundPaused]);

  // Auto-pause all videos when global pause state is active
  useEffect(() => {
    const pauseAllBackgroundVideos = () => {
      // Pause layout background video
      if (videoRef.current) {
        if (isBackgroundPaused) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch(e => console.log("Layout video play failed:", e));
        }
      }

      // Find and pause/unpause all background videos on the page
      const backgroundVideos = document.querySelectorAll(
        '.layout-video-background__video, .video-background video, .background-video, video[autoplay][muted][loop]'
      );

      backgroundVideos.forEach(video => {
        if (isBackgroundPaused) {
          video.pause();
        } else {
          video.play().catch(e => console.log("Background video play failed:", e));
        }
      });
    };

    // Apply pause state immediately and after a short delay to catch late-loading videos
    pauseAllBackgroundVideos();
    const timeoutId = setTimeout(pauseAllBackgroundVideos, 500);
    const timeoutId2 = setTimeout(pauseAllBackgroundVideos, 1500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [isBackgroundPaused]);

  // Optional: Header scroll effects
  useEffect(() => {
    if (typeof window === "undefined" || !headerRef.current) return;

    const header = headerRef.current;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add 'scrolled' class when user scrolls down
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Global background video pause functionality
  const handleGlobalBackgroundPause = () => {
    const newPauseState = !isBackgroundPaused;
    setIsBackgroundPaused(newPauseState);

    // Save state to localStorage for persistence across pages
    if (typeof window !== "undefined") {
      localStorage.setItem('globalBackgroundPaused', newPauseState.toString());
    }

    // The actual video pausing/playing will be handled by the useEffect above
  };

  // Generic function to handle navigation clicks
  const handleNavClick = (targetPath) => (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.pathname.replace(/\/$/, "") === targetPath.replace(/\/$/, "")) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
        navigate(targetPath);
        setTimeout(() => window.scrollTo(0, 0), 50);
        setTimeout(() => window.scrollTo(0, 0), 200);
        setTimeout(() => window.scrollTo(0, 0), 500);
      }
    }
  };

  const handleLogoClick = (e) => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.location.reload();
      }
    }
  };

  // Footer navigation handlers
  const handleFooterHomeClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate("/");
      }
    }
  };

  const handleFooterContactClick = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const contactSection = document.getElementById('contact-section');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleFooterPageClick = (targetPath) => (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      navigate(targetPath);
      setTimeout(() => window.scrollTo(0, 0), 50);
      setTimeout(() => window.scrollTo(0, 0), 200);
      setTimeout(() => window.scrollTo(0, 0), 500);
    }
  };

  return (
    <>
      <div className="page-container" style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        
        {/* Layout Video Background */}
        {hasVideoBackground && videoSrc && (
          <div 
            className="layout-video-background" 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: -1,
              overflow: 'hidden',
              ...videoContainerStyle
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="layout-video-background__video"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                transform: 'translate(-50%, -50%)',
                objectFit: 'cover',
                zIndex: -1,
                filter: videoFilter,
                ...videoStyle
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div 
              className="layout-video-background__overlay" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: overlayStyle.background || 'transparent', // Use custom background or transparent
                zIndex: 1,
                pointerEvents: 'none',
                ...overlayStyle // Allow complete override of overlay styles
              }}
            />
          </div>
        )}

        {/* Header */}
        <header 
          ref={headerRef}
          className="header" 
          style={{
            position: 'static',
            zIndex: 1000,
            background: hasVideoBackground ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
            padding: '1rem 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          {/* Logo section */}
          <button 
            className="logo-section" 
            onClick={handleLogoClick}
            onKeyDown={(e) => e.key === 'Enter' && handleLogoClick(e)}
            style={{ 
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              color: hasVideoBackground ? 'white' : 'inherit',
              textShadow: hasVideoBackground ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
            }}
            aria-label="Home page"
          >
            <div className="logo-placeholder animated-logo">
              <svg width="75" height="75" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" className="logo-outer-circle"/>
                <path d="M15 25 L25 15 L35 25 L25 35 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" className="logo-diamond"/>
                <circle cx="25" cy="25" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.6" className="logo-inner-circle"/>
                <path d="M25 17 L29 21 L25 25 L21 21 Z" fill="white" opacity="0.7" className="logo-center"/>
                <path d="M10 25 Q15 20 20 25 Q15 30 10 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5" className="logo-flow-left"/>
                <path d="M40 25 Q35 20 30 25 Q35 30 40 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5" className="logo-flow-right"/>
              </svg>
            </div>
            <div className="artist-name">
              <div className="name-line">MĀYĀ</div>
              <div className="name-line">MURRY</div>
            </div>
          </button>

          <nav className="main-nav" style={{
            color: hasVideoBackground ? 'white' : 'inherit',
            textShadow: hasVideoBackground ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
          }}>
            <Link 
              to="/" 
              className="nav-link"
              activeClassName="active"
              onClick={handleNavClick("/")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot" />
              Home
            </Link>

            <Link 
              to="/art" 
              className="nav-link" 
              activeClassName="active"
              onClick={handleNavClick("/art")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot"></span> Art
            </Link>

            <Link 
              to="/film" 
              className="nav-link" 
              activeClassName="active"
              onClick={handleNavClick("/film")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot"></span> Film
            </Link>

            <Link 
              to="/writing" 
              className="nav-link" 
              activeClassName="active"
              onClick={handleNavClick("/writing")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot"></span> Writing
            </Link>

            <Link 
              to="/resume" 
              className="nav-link" 
              activeClassName="active"
              onClick={handleNavClick("/resume")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot"></span> Resume
            </Link>

            <Link 
              to="/about" 
              className="nav-link" 
              activeClassName="active"
              onClick={handleNavClick("/about")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot"></span> About
            </Link>

            <Link 
              to="/shop" 
              className="nav-link" 
              activeClassName="active"
              onClick={handleNavClick("/shop")}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <span className="nav-dot"></span> Shop
            </Link>
          </nav>

          <div className="header-controls" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button
              className="global-pause-button"
              onClick={handleGlobalBackgroundPause}
              title=""
              style={{
                background: 'white',
                border: '2px solid white',
                color: 'black',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                minWidth: isHovering ? '180px' : '40px',
                width: isHovering ? '180px' : '40px',
                whiteSpace: 'nowrap',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                setIsHovering(true);
                // Delay text appearance to allow width animation to start
                setTimeout(() => {
                  if (e.target.parentElement) { // Check if still hovering
                    setShowPauseText(true);
                  }
                }, 200);
                e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                setIsHovering(false);
                setShowPauseText(false);
                e.target.style.background = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {showPauseText
                ? `${isBackgroundPaused ? 'Play' : 'Pause'} All Backgrounds`
                : (isBackgroundPaused ? '▶' : '⏸')
              }
            </button>

            <div className="language-toggle" style={{
              color: hasVideoBackground ? 'white' : 'inherit',
              textShadow: hasVideoBackground ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
            }}>
              <button
                className={`lang-button ${language === 'EN' ? 'active' : ''}`}
                onClick={() => setLanguage('EN')}
                aria-label="Switch to English"
                aria-pressed={language === 'EN'}
              >
                EN
              </button>
              <span className="lang-separator">/</span>
              <button
                className={`lang-button ${language === 'AR' ? 'active' : ''}`}
                onClick={() => setLanguage('AR')}
                aria-label="Switch to Arabic"
                aria-pressed={language === 'AR'}
              >
                AR
              </button>
            </div>
          </div>
        </header>

        {/* Page-specific content */}
        <main className="main-content" style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          backgroundColor: hasVideoBackground ? 'transparent' : 'white'
        }}>
          {children}
        </main>

        {/* Footer */}
        <footer className="site-footer" style={{
          position: 'relative',
          zIndex: 10,
          backgroundColor: hasVideoBackground ? 'rgba(44, 24, 16, 0.3)' : 'rgba(44, 24, 16, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          color: 'white'
        }}>
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-placeholder">
                <svg width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
                  <path d="M15 25 L25 15 L35 25 L25 35 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="25" cy="25" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.6"/>
                  <path d="M25 17 L29 21 L25 25 L21 21 Z" fill="white" opacity="0.7"/>
                  <path d="M10 25 Q15 20 20 25 Q15 30 10 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
                  <path d="M40 25 Q35 20 30 25 Q35 30 40 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5"/>
                </svg>
              </div>
              <div className="artist-name">
                <div className="name-line">MĀYĀ</div>
                <div className="name-line">MURRY</div>
              </div>
            </div>

            <div className="footer-links">
              <div className="links-column">
                <h3>Quick Links</h3>
                <a href="/" onClick={handleFooterHomeClick}>Home</a>
                <Link to="/about" onClick={handleFooterPageClick("/about")}>About</Link>
                <Link to="/shop" onClick={handleFooterPageClick("/shop")}>Shop</Link>
                <a href="#contact" onClick={handleFooterContactClick}>Contact</a>
              </div>
            <div className="links-column">
              <h3>Portfolio</h3>
                <Link to="/art" onClick={handleFooterPageClick("/art")}>Art</Link>
                <Link to="/film" onClick={handleFooterPageClick("/film")}>Film</Link>
                <Link to="/writing" onClick={handleFooterPageClick("/writing")}>Writing</Link>
                <Link to="/resume" onClick={handleFooterPageClick("/resume")}>Coding</Link>
              </div>
              <div className="links-column">
                <h3>Contact</h3>
                <a href="mailto:mmm443@cornell.edu">mmm443@cornell.edu</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="social-links">
              <a href="https://linkedin.com/in/maya-murry" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/snedmagdous" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://instagram.com/mayammurry" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@mayamurry" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a href="https://substack.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            <p>Copyright © {new Date().getFullYear()} Māyā Murry - All Rights Reserved.</p>
            <div className="legal-links">
              <Link to="/terms">Terms and Conditions</Link>
              <span> | </span>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout