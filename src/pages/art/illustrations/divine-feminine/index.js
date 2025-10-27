// src/pages/art/illustrations/divine-feminine/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./divine-feminine.module.css"

const DivineFemininePage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredPortrait, setHoveredPortrait] = useState(null)
  const [hoveredImage, setHoveredImage] = useState(null)
  const [selectedPortrait, setSelectedPortrait] = useState(null)
  const videoRef = useRef(null);
  
  // Background video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);
  
  const portraits = [
    {
      id: 'michelle',
      name: 'Michelle Wang • 王雪莉',
      title: 'The Ethereal',
      date: 'January 2024',
      description: 'My lifelong best friend Michelle, captured in the ethereal energy I see radiating from her soul - a reminder of the goddess she has always been.',
      relationship: 'Lifelong best friend and kindred spirit',
      qualities: 'Intelligence, kindness, vulnerability, grace under pressure',
      medium: 'Black pen on paper, 9"x12"',
      story: 'Michelle\'s portrait exemplifies the ethereal energy I wanted to remind her of - how I see her moving through the world with such grace. The Chinese jewelry and delicate details reflect her heritage and the luminous spirit she carries.',
      image: '/images/portraits/michelle.jpeg',
      details: 'This was the first portrait in the series, setting the intention of showing the people I love most how beautiful and powerful they are in my eyes.'
    },
    {
      id: 'ashira',
      name: 'Ashira & Rebecca • רבקה ואשירה',
      title: 'The Healers',
      date: 'February 2024',
      description: 'My college best friend Ashira with her mother Rebecca, captured on the eclipse of April 11, 2024 - the day Ashira became a Fulbright scholar.',
      relationship: 'College best friend and her beloved mother',
      qualities: 'Empathy, healing presence, loyalty, indigenous plant medicine wisdom',
      medium: 'Black pen on paper, 9"x12"',
      story: 'Ashira\'s work with indigenous healing plant medicine inspired this portrait. Her mother Rebecca has had such a beautiful impact on my life too. I inscribed a poem by into this portrait, honoring her grandfather - a Holocaust survivor who wrote in Yiddish to preserve the language.',
      poem: {
        title: 'You Have Not Betrayed Me Since the Day We Met',
        author: 'Avrom Sutzkever',
        source: 'https://www.yiddishbookcenter.org/language-literature-culture/pakn-treger/you-have-not-betrayed-me-day-we-met-and-you-olive-tree-night',
        english: `I remember, you brought me green sounds from the fields
when with all my strength I could not reach them,
zigzagging over well-trodden footpaths, to the bottom layer,
to bring me a star, so it would become bright as home.`,
        yiddish: `איך געדענק, דו האָסט מיר געבראַכט גרינע קלאַנגען פֿון די פֿעלדער
ווען מיט אַל מײַן כּוח האָב איך נישט געקענט זיי דערגרײַכן,
זיקזאַקירנדיק איבער באַטרעטענע פֿוסטעפּן, צום אונטערשטן שיכט,
צו ברענגען מיר אַ שטערן, אַז ער זאָל ווערן ליכטיק ווי היים.`
      },
      image: '/images/portraits/ashira.jpeg',
      details: 'The photo was taken on the eclipse - a moment of beautiful connection between mother and daughter, and the day her mother had been manifesting Ashira\'s Fulbright scholarship all along.'
    },
    {
      id: 'sahiba',
      name: 'Sahiba • साहिबा',
      title: 'The Resilient Light',
      date: 'February 2024',
      description: 'My college best friend Sahiba, laughing in 2021 during freshman year - she was my rock during my darkest mental and physical moments.',
      relationship: 'College best friend and sister through struggle',
      qualities: 'Resilience, eloquence, unwavering conviction, deep inner peace',
      medium: 'Black pen on paper, 9"x12"',
      story: 'Although we had a big rift in college, we returned to become friends closer than ever. I will never forget how she was my rock during such a rock bottom. The quote I wrote for her: "Everything I\'m going through is preparing me for what I asked for."',
      image: '/images/portraits/sahiba.jpeg',
      details: 'The Hindu jewelry and Sanskrit script honor her heritage, while capturing that radiant laughter from freshman year that got me through my darkest days.'
    },
    {
      id: 'malak-abuhashin',
      name: 'Malak Abuhashim • ملاك أبو هاشم',
      title: 'The Revolutionary Sun',
      date: 'March 2024',
      description: 'A fellow activist, mentor, and older sister figure whose resilience and cultural strength have deeply inspired my own growth.',
      relationship: 'Mentor, activist, and older sister figure',
      qualities: 'Revolutionary spirit, cultural resilience, unwavering strength',
      medium: 'Black pen on paper, 9"x12"',
      story: 'Malak\'s activism and resilience inspired so much of my own growth. The quote I wrote for her: "Nothing will ever dim my light. I am the sun, I will always rise again." Her cultural resilience as a Palestinian woman guides how I move through the world.',
      image: '/images/portraits/malak.jpeg',
      details: 'Palestinian patterns weave through the composition, honoring her heritage and the revolutionary fire that burns within her spirit.'
    },
    {
      id: 'yasmin',
      name: 'Yasmin • یاسمین',
      title: 'The Rising Phoenix',
      date: 'April 2024',
      description: 'My high school best friend Yasmin, who I\'ve watched rise and shine again and again through her darkest moments - this is how I will always see her.',
      relationship: 'High school best friend and long-time companion',
      qualities: 'Unapologetic power, resilience, quiet strength',
      medium: 'Black pen on paper, 9"x12"',
      story: 'Even though she was going through a dark time, I have seen her rise and shine again and again through her darkest moments. The quote I wrote for her: "I unapologetically step into my power." This portrait reminds her of the goddess I see.',
      image: '/images/portraits/yas.jpeg',
      details: 'Afghan embroidery patterns and hijab details honor her heritage, while the composition shows her stepping into her divine feminine power.'
    },
    {
      id: 'sierra',
      name: 'Sierra',
      title: 'The Musical Soul',
      date: 'March 2024',
      description: 'My college best friend Sierra - "She is still inside me, I carry her with me wherever I go." A portrait celebrating her artwork and musical soul.',
      relationship: 'College best friend and creative companion',
      qualities: 'Artistic healing, musical spirit, trauma transformation through art',
      medium: 'Black pen on paper, 9"x12"',
      story: 'I wanted to remind Sierra of her exploration of art as a medium for healing trauma, and celebrate her musical soul. The quote refers to a photo of her as a baby - that innocent spirit that still lives within her creative work.',
      image: '/images/portraits/sierra.jpeg',
      details: 'Musical and artistic elements weave through the portrait, honoring her journey of healing through creative expression.'
    },
    {
      id: 'anastasiya',
      name: 'Anastasiya • Анастасія',
      title: 'The Keeper of Stories',
      date: 'March 2024',
      description: 'My high school best friend and lifetime companion - a reminder of her ethereal light and the guardians always protecting her family.',
      relationship: 'High school best friend and lifetime companion',
      qualities: 'Ethereal light, spiritual protection, storytelling wisdom',
      medium: 'Black pen on paper, 9"x12"',
      story: 'I wanted to remind Anastasiya of the ethereal light she carries and the guardians always protecting her, even with everything she and her family have been going through physically and spiritually. The quote I wrote for her: "Trust in divine timing, the universe is always guiding me" / "Довіряй божественному часу, всесвіт завжди веде мене".',
      image: '/images/portraits/ana.jpeg',
      details: 'Ukrainian cultural elements and protective symbols reflect her heritage and the spiritual guardianship that surrounds her.'
    },
    {
      id: 'mariama',
      name: 'Mariama • مريامة',
      title: 'The Scholar',
      date: 'April 2024',
      description: 'Brilliant scholar with Fulani heritage - I took this photo while doing her makeup for graduation photos, she didn\'t know what she was posing for.',
      relationship: 'Academic peer and intellectual companion',
      qualities: 'Brilliant mind, fierce spirit, quiet love expressed in her own language',
      medium: 'Black pen on paper, 9"x12"',
      story: 'The quote I wrote for Mariama: "I hold the power to create the life I desire." This captures her brilliant, fierce nature and the quiet love she passes in her own language. The photo was taken during a spontaneous moment of beauty.',
      image: '/images/portraits/mari.jpeg',
      details: 'Fulani tribal tattoo patterns and Arabic script honor her heritage, while capturing the scholarly grace she embodies.'
    },
    {
      id: 'sokhnadiarra',
      name: 'Sokhnadiarra',
      title: 'The River of Abundance',
      date: 'April 2024',
      description: 'A photo she had chosen herself, not knowing what it was for - embodying the abundance that flows through her spirit.',
      relationship: 'Mentor and community elder',
      qualities: 'Nurturing abundance, Senegalese wisdom, spiritual flow',
      medium: 'Black pen on paper, 9"x12"',
      story: 'The quote I wrote for Sokhnadiarra: "A river of abundance flows through me." She chose this photo herself without knowing what I was creating - a perfect embodiment of her trust and the natural abundance she carries.',
      image: '/images/portraits/sokhna.jpeg',
      details: 'Senegalese tribal tattoos, jewelry, and hijab details celebrate her heritage, while the composition flows like the river of abundance within her.'
    }
  ]

  const openPortraitModal = (portrait) => {
    setSelectedPortrait(portrait)
    document.body.style.overflow = 'hidden'
  }

  const closePortraitModal = () => {
    setSelectedPortrait(null)
    document.body.style.overflow = 'unset'
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePortraitModal()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

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
            filter: 'brightness(0.4) contrast(1.1) saturate(1.1)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/divine-fem.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.divineFemininePage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/illustrations" className={styles.backLink}>
            Back to Illustrations
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.portraitHero}>
          <h1 className={styles.portraitTitle}>Divine Feminine</h1>
          <div className={styles.portraitMeta}>
            <span className={styles.metaItem}>Portrait Series • 2024 • 9" × 12"</span>
            </div>
          <p className={styles.portraitDescription}>
            A pen portrait series born from love and healing - my first artworks after a four-year 
            pause from creating, inspired by my love language of reminding the women in my life 
            of their power and beauty as goddesses in perpetual evolution.
          </p>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>Portrait Timeline</h2>
          <p className={styles.timelineSubtitle}>
            Five portraits of divine feminine power
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            
            {portraits.map((portrait, index) => (
              <div
                key={portrait.id}
                className={`${styles.timelineStep} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
                onMouseEnter={() => setHoveredPortrait(portrait.id)}
                onMouseLeave={() => setHoveredPortrait(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={styles.stepMarker}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                </div>

                {/* Portrait Image on Opposite Side */}
                <div
                  className={styles.portraitImageContainer}
                  onClick={() => openPortraitModal(portrait)}
                  onMouseEnter={() => setHoveredImage(portrait.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src={portrait.image}
                    alt={portrait.name}
                    className={styles.portraitImage}
                  />
                  {hoveredImage === portrait.id && (
                    <div className={styles.imageNameOverlay}>
                      <span className={styles.imageName}>{portrait.name}</span>
                    </div>
                  )}
                  <div className={styles.imageGlowEffect}></div>
                </div>

                <div
                  className={styles.stepCard}
                  onClick={() => openPortraitModal(portrait)}
                >
                  <div className={styles.stepDate}>{portrait.date}</div>
                  <h3 className={styles.stepTitle}>{portrait.name}</h3>
                  <h4 className={styles.stepSubtitle}>{portrait.title}</h4>
                  <p className={styles.stepDescription}>{portrait.description}</p>

                  <div className={styles.portraitMeta}>
                    <span className={styles.metaTag}>Relationship: {portrait.relationship}</span>
                    <span className={styles.metaTag}>Qualities: {portrait.qualities}</span>
                  </div>

                  {hoveredPortrait === portrait.id && (
                    <div className={styles.stepDetails}>
                      <p>{portrait.story}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Series Impact */}
        <div className={styles.impactSection}>
          <h3 className={styles.impactTitle}>Returning to Art Through Love</h3>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>9</span>
              <span className={styles.statLabel}>Portraits</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Year Pause</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Languages</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Love</span>
            </div>
          </div>
          <div className={styles.impactText}>
            <p>
              "Divine Feminine" was born from the intersection of healing and love. After four years away from art - 
              dealing with deep chronic pain, spiritual, physical, and emotional struggles - I knew that when I returned 
              to creating, my first works had to be offerings of love.
            </p>
            <p>
              My love language has always been reminding people of their power and beauty as goddesses in perpetual evolution. 
              As I was just remembering how to feel that for myself for the first time in years, I decided that the first 
              art I would create would make the people around me - the people I care most about - feel so loved and so beautiful.
            </p>
            <p>
              Using only black pen on paper, each portrait became a meditation on seeing and celebrating divine feminine energy. 
              These aren't just portraits - they're love letters, mirrors reflecting back the goddess I see in each of these women, 
              reminders of their power written in their ancestral languages, adorned with the cultural symbols that honor their heritage.
            </p>
            <p>
              This series marked my return not just to art, but to the practice of loving others as a pathway back to loving myself. 
              Every line drawn was an act of healing, every portrait a celebration of the women who held me through my darkest times 
              and taught me what divine feminine strength truly looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait Modal */}
{selectedPortrait && (
  <div className={styles.modal} onClick={closePortraitModal}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeButton} onClick={closePortraitModal}>×</button>
      
      <div className={styles.modalLayout}>
        <div className={styles.modalImage}>
          <img 
            src={selectedPortrait.image} 
            alt={`Portrait of ${selectedPortrait.name}`}
          />
        </div>
        
        <div className={styles.modalInfo}>
          <h2>{selectedPortrait.name}</h2>
          <h3>{selectedPortrait.title}</h3>
          <p><strong>Medium:</strong> {selectedPortrait.medium}</p>
          <p><strong>Relationship:</strong> {selectedPortrait.relationship}</p>
          <p><strong>Key Qualities:</strong> {selectedPortrait.qualities}</p>
          <p className={styles.portraitStory}>{selectedPortrait.story}</p>
          {selectedPortrait.poem && (
            <div className={styles.poemSection}>
              <div className={styles.poemAttribution}>
                <h5>"{selectedPortrait.poem.title}"</h5>
                <p>
                  <strong>Written by:</strong> {selectedPortrait.poem.author}<br/>
                  <strong>Source:</strong> <a
                    href={selectedPortrait.poem.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sourceLink}
                  >
                    Yiddish Book Center
                  </a>
                </p>
              </div>
              <div className={styles.poem}>
                <div className={styles.englishPoem}>
                  <pre>{selectedPortrait.poem.english}</pre>
                </div>
              </div>
            </div>
          )}
          <p className={styles.portraitDetails}>{selectedPortrait.details}</p>
        </div>
      </div>
    </div>
  </div>
)}
    </Layout>
  )
}

export default DivineFemininePage