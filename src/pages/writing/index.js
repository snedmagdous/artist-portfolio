// src/pages/writing/index.js
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./writing.module.css"

const WritingPage = () => {
  const [language, setLanguage] = useState('EN')
  const videoRef = useRef(null);

  // Typewriter state for poems
  const [playingPoem, setPlayingPoem] = useState(null);
  const [typedText, setTypedText] = useState({});
  const [currentLineIndex, setCurrentLineIndex] = useState({});

  // Scroll snapping state and refs
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const heroSectionRef = useRef(null);
  const categoriesSectionRef = useRef(null);

  // Background video setup - copy from working homepage
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  // Scroll snapping functionality
  useEffect(() => {
    const sections = [
      heroSectionRef.current,
      categoriesSectionRef.current
    ];

    let ticking = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      e.preventDefault();

      if (!ticking) {
        requestAnimationFrame(() => {
          const deltaY = e.deltaY;
          let newSection = currentSection;

          if (deltaY > 0 && currentSection < sections.length - 1) {
            // Scroll down
            newSection = currentSection + 1;
          } else if (deltaY < 0 && currentSection > 0) {
            // Scroll up
            newSection = currentSection - 1;
          }

          if (newSection !== currentSection) {
            setIsScrolling(true);
            setCurrentSection(newSection);

            // Smooth scroll to section
            if (sections[newSection]) {
              sections[newSection].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }

            // Reset scrolling state after animation
            setTimeout(() => {
              setIsScrolling(false);
            }, 1000); // 1 second delay to allow smooth scroll
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Add wheel event listener
    document.addEventListener('wheel', handleWheel, { passive: false });

    // Handle touch events for mobile
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling) return;

      endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50) { // Minimum swipe distance
        let newSection = currentSection;

        if (deltaY > 0 && currentSection < sections.length - 1) {
          // Swipe up (scroll down)
          newSection = currentSection + 1;
        } else if (deltaY < 0 && currentSection > 0) {
          // Swipe down (scroll up)
          newSection = currentSection - 1;
        }

        if (newSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(newSection);

          if (sections[newSection]) {
            sections[newSection].scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }

          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling]);

  // Poem data
  const selectedPoems = [
    {
      id: 'mamma-im-fine',
      title: 'mamma im fine',
      lines: [
        'they ask me how im doing',
        'i tell them mamma im fine',
        'but the silence between us',
        'speaks louder than words',
        '',
        'in her eyes i see',
        'the weight of oceans crossed',
        'the stories left untold',
        'the dreams deferred',
        '',
        'mamma im fine, i say',
        'but we both know',
        'fine is just another word',
        'for learning to carry',
        'what cannot be put down'
      ]
    },
    {
      id: 'let-the-dead-go-home',
      title: 'let the dead go home',
      lines: [
        'let the dead go home',
        'they have wandered long enough',
        'through these streets that',
        'never learned their names',
        '',
        'let them return to soil',
        'that remembers their footsteps',
        'to winds that carry',
        'their mothers songs',
        '',
        'we have held them here',
        'in our guilt and grief',
        'but they are tired',
        'of being monuments',
        '',
        'let the dead go home',
        'so the living can finally',
        'learn to rest'
      ]
    }
  ];

  // Typewriter effect
  useEffect(() => {
    if (!playingPoem) return;

    const poem = selectedPoems.find(p => p.id === playingPoem);
    if (!poem) return;

    const currentLine = currentLineIndex[playingPoem] || 0;
    const currentText = typedText[playingPoem] || '';
    const targetLine = poem.lines[currentLine] || '';

    if (currentLine >= poem.lines.length) {
      return;
    }

    if (currentText.length < targetLine.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => ({
          ...prev,
          [playingPoem]: targetLine.slice(0, currentText.length + 1)
        }));
      }, 50); // Typing speed

      return () => clearTimeout(timer);
    } else {
      // Move to next line after a pause
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => ({
          ...prev,
          [playingPoem]: currentLine + 1
        }));
        setTypedText(prev => ({
          ...prev,
          [playingPoem]: ''
        }));
      }, 800); // Pause between lines

      return () => clearTimeout(timer);
    }
  }, [playingPoem, typedText, currentLineIndex]);

  const handlePlayPoem = (poemId) => {
    if (playingPoem === poemId) {
      // Reset poem
      setPlayingPoem(null);
      setTypedText({});
      setCurrentLineIndex({});
    } else {
      // Start new poem
      setPlayingPoem(poemId);
      setTypedText({ [poemId]: '' });
      setCurrentLineIndex({ [poemId]: 0 });
    }
  };

  const renderPoemDisplay = (poem) => {
    const isPlaying = playingPoem === poem.id;
    const currentLine = currentLineIndex[poem.id] || 0;
    const currentText = typedText[poem.id] || '';

    return (
      <div className={styles.poemDisplayCard}>
        <div className={styles.poemDisplayHeader}>
          <h3 className={styles.poemDisplayTitle}>{poem.title}</h3>
          <button
            className={styles.playButton}
            onClick={() => handlePlayPoem(poem.id)}
            aria-label={isPlaying ? 'Stop poem' : 'Play poem'}
          >
            {isPlaying ? (
              // Pause icon
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.playIcon}>
                <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
              </svg>
            ) : (
              // Play icon
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.playIcon}>
                <polygon points="5,3 19,12 5,21" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
        <div className={styles.poemDisplayContent}>
          {isPlaying ? (
            <div className={styles.typingContainer}>
              {poem.lines.slice(0, currentLine).map((line, idx) => (
                <div key={idx} className={styles.typedLine}>
                  {line || '\u00A0'}
                </div>
              ))}
              {currentLine < poem.lines.length && (
                <div className={styles.typedLine}>
                  {currentText}
                  <span className={styles.typingCursor}>|</span>
                </div>
              )}
            </div>
          ) : (
            <p className={styles.poemPreview}>
              Click play to experience this poem unfold...
            </p>
          )}
        </div>
      </div>
    );
  };

  const writingCategories = [
    {
      id: 'poetry',
      title: 'Poetry',
      description: 'Verses exploring identity, heritage, and transformation',
      link: '/writing/poetry',
      icon: (
        <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 13H16" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 17H12" strokeWidth="1" strokeLinecap="round"/>
          <path d="M10 9H12" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="8" cy="9" r="1" fill="currentColor"/>
        </svg>
      )
    }
  ]
  
  return (
    // Turn off layout video system, use homepage system instead
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={false} // Turn off layout video system
    >
      {/* Use the EXACT same video system as your working homepage */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.45) contrast(1.1) saturate(1.1)'
          }}
        >
          {/* Using the writing video URL from your index.js */}
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/writing.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.writingCategoriesPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/portfolio" className={styles.backLink}>
            Back to Portfolio
          </Link>
        </div>

        <div className={styles.writingHeroSection}>
          <h1 className={styles.writingMainTitle}>Writing Portfolio</h1>
          <p className={styles.writingSubtitle}>Stories that bridge worlds through words and vision</p>
        </div>

        {/* Selected Works Section */}
        <div className={styles.selectedWorksSection}>
          <h2 className={styles.selectedWorksTitle}>Selected Works</h2>
          <div className={styles.selectedWorksGrid}>
            {selectedPoems.map((poem) => (
              <div key={poem.id}>
                {renderPoemDisplay(poem)}
              </div>
            ))}
          </div>
        </div>

        {/* Poetry Category Card - Pushed Down */}
        <div className={styles.categoriesContainer}>
          <div className={styles.singleCategoryGrid}>
            <Link
              to="/writing/poetry"
              className={styles.categoryCard}
            >
              <div className={styles.categoryContent}>
                <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13H16" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M8 17H12" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M10 9H12" strokeWidth="1" strokeLinecap="round"/>
                  <circle cx="8" cy="9" r="1" fill="currentColor"/>
                </svg>
                <h3 className={styles.categoryTitle}>Full Poetry Collection</h3>
                <p className={styles.categoryDescription}>Explore all poems</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WritingPage