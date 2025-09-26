// src/pages/resume/index.js
import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "./resume.module.css"

const ResumePage = () => {
  const [language, setLanguage] = useState('EN')
  const [activeTimeline, setActiveTimeline] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [viewMode, setViewMode] = useState('both') // 'technical', 'creative', 'both'
  const videoRef = useRef(null);
  
  // Background video setup - copy from working homepage
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  // Handle scroll progress for timeline animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const timelineData = [
    {
      id: 'southworks-mural',
      year: '2025',
      era: 'Recent Recognition',
      title: 'Southworks Gallery Mural Commission',
      organization: 'Southworks Gallery',
      location: 'Gallery District',
      type: 'creative',
      category: 'current',
      description: 'Invited to create large-scale mural adaptation of "In the Image of My Queens, I Stand" painting series—a meditation on divine feminine lineage honoring ancestral wisdom, present sovereignty, and future generations.',
      achievements: [
        'Selected for prestigious gallery mural commission based on painting portfolio',
        'Translating 3-piece painting series into large-scale public art installation',
        'Expanding divine feminine narrative themes through collaborative gallery partnership',
        'Creating accessible public art connecting diaspora identity with universal themes'
      ],
      skills: ['Large-Scale Mural Art', 'Gallery Collaboration', 'Divine Feminine Themes', 'Public Art Installation', 'Cultural Storytelling'],
      color: 'rgba(255, 215, 0, 0.9)',
      particles: 'stellar'
    },
    {
      id: 'present-tech',
      year: '2025',
      era: 'Present',
      title: 'AI Engineer & Full-Stack Developer',
      organization: 'PainTrust Technologies & Cornell Labs',
      location: 'New York, NY',
      type: 'technical',
      category: 'current',
      description: 'Developing revolutionary healthcare AI technology for objective pain assessment while conducting cutting-edge research in computational neuroscience.',
      achievements: [
        'Architecting Deep Artificial Denoising Auto-Encoder-Decoder for ECG-based pain detection (86% accuracy)',
        'Building full-stack React/Node.js application for real-time medical data modeling',
        'Leading patent development for automated pain biomarking algorithms',
        'Collaborating with cross-functional teams of engineers and medical researchers'
      ],
      skills: ['Python', 'Deep Learning', 'React', 'Node.js', 'TensorFlow', 'ECG Analysis', 'Healthcare AI', 'Patent Development'],
      color: 'rgba(0, 255, 255, 0.8)',
      particles: 'tech'
    },
    {
      id: 'present-creative',
      year: '2025',
      era: 'Present',
      title: 'Documentary Filmmaker & Visual Artist',
      organization: 'Independent Practice & Community Collaborations',
      location: 'Ithaca, New York',
      type: 'creative',
      category: 'current',
      description: 'Creating powerful documentaries and public art that explore intersectional liberation, solidarity, and Indigenous resilience.',
      achievements: [
        '"Love as Revolution" screened at Cinemapolis (200+ attendance) and Schwartz Center',
        '"Our Ancestors Are Still Singing" - Indigenous resilience documentary screening at Cornell AIIS',
        'Three major murals raising $18,000+ in community funding for social justice themes',
        'Published poetry in Fikra Magazine, ArabLit Quarterly, and Diacritics Journal'
      ],
      skills: ['Documentary Filmmaking', 'Mural Art', 'Poetry', 'Community Organizing', 'Digital Media', 'Cultural Research'],
      color: 'rgba(255, 140, 0, 0.8)',
      particles: 'quantum'
    },
    {
      id: 'education',
      year: '2021-2025',
      era: 'Academic Excellence',
      title: 'B.Sc Computer Science',
      organization: 'Cornell University College of Engineering',
      location: 'Ithaca, New York',
      type: 'both',
      category: 'education',
      description: 'Dean\'s List honors student bridging computational science with social justice, combining technical mastery with creative expression and activism.',
      achievements: [
        'Dean\'s List (2022, 2024, 2025) with 3.62 GPA in Computer Science',
        'McMullen Dean\'s Scholar, Sphinx Head Honor Society, WE LEAD Scholar',
        'Advanced coursework in ML, AI, Computational Genomics, and Documentary Filming',
        'Portfolio website coded entirely from scratch using React and Gatsby (github.com/snedmagdous/portfolio)'
      ],
      skills: ['Computer Science', 'Machine Learning', 'Research', 'Leadership', 'Academic Writing', 'Cross-Cultural Organizing'],
      color: 'rgba(128, 255, 0, 0.8)',
      particles: 'stellar'
    },
    {
      id: 'pwc-experience',
      year: '2024',
      era: 'Enterprise Innovation',
      title: 'Advanced Software Engineering Intern',
      organization: 'PricewaterhouseCoopers LLP',
      location: 'New York, NY',
      type: 'technical',
      category: 'experience',
      description: 'Developed AI-enabled cybersecurity frameworks for healthcare data protection, integrating RAG systems and presenting to clients.',
      achievements: [
        'Launched high-performance Generative AI frameworks with CI/CD cybersecurity pipelines',
        'Integrated RAG systems using Langchain/Azure OpenAI for semantic chunking',
        'Improved compliance efficiency by 25% through privacy protocol implementation',
        'Presented software solutions to clients and stakeholders at engineering symposium'
      ],
      skills: ['Generative AI', 'Azure', 'Cybersecurity', 'RAG Systems', 'CI/CD', 'Healthcare Compliance', 'Client Presentation'],
      color: 'rgba(0, 255, 255, 0.8)',
      particles: 'tech'
    },
    {
      id: 'research-genomics',
      year: '2023-2025',
      era: 'Computational Research',
      title: 'Healthcare Software Developer & AI Researcher',
      organization: 'Cornell Life History Lab & Multiple Research Centers',
      location: 'Ithaca, NY',
      type: 'technical',
      category: 'experience',
      description: 'Leading interdisciplinary research combining computational genomics, machine learning, and social justice to understand health disparities.',
      achievements: [
        'Designed computational pipelines analyzing 10K+ epigenetic datasets (90% accuracy)',
        'Developed Non-Homogeneous Hidden Markov Models for psychiatric trauma markers',
        'Created NLP meta-analysis connecting social trauma to epigenetic changes',
        'Published research on algorithmic bias and cybersecurity protocols'
      ],
      skills: ['Computational Genomics', 'Python', 'Statistical Modeling', 'NLP', 'Data Visualization', 'Public Health Research'],
      color: 'rgba(0, 255, 255, 0.8)',
      particles: 'quantum'
    },
    {
      id: 'artistic-evolution',
      year: '2022-2025',
      era: 'Creative Emergence',
      title: 'Social Justice Artist & Cultural Organizer',
      organization: 'Community Collaborations & Academic Institutions',
      location: 'International',
      type: 'creative',
      category: 'experience',
      description: 'Creating intersectional art connecting liberation, Indigenous rights, and anti-colonial resistance through film, murals, and poetry.',
      achievements: [
        'Three documentary films screening at major venues (400+ total attendance)',
        '"The Sun Will Shine" mural (8x36ft, $13K+ community funding)',
        '"Tikkun V\'or" Jewish liberation mural collaboration with spiritual leaders',
        'Poetry published in multiple journals exploring themes of resistance and healing'
      ],
      skills: ['Documentary Film', 'Large-Scale Murals', 'Poetry', 'Community Fundraising', 'Cultural Collaboration', 'Visual Storytelling'],
      color: 'rgba(255, 140, 0, 0.8)',
      particles: 'bio'
    },
    {
      id: 'early-research',
      year: '2021-2023',
      era: 'Research Foundation',
      title: 'Machine Learning Researcher',
      organization: 'UMD, UPenn, University of Miami',
      location: 'Multi-Institutional',
      type: 'technical',
      category: 'experience',
      description: 'Building foundational expertise in computer vision, deep learning, and privacy-preserving ML across prestigious research programs.',
      achievements: [
        'Developed adversarial ML algorithms for privacy protection (92% effectiveness)',
        'Created CNNs for sleep pattern analysis contributing to Nature publication',
        'Programmed computer vision systems for spinal cord injury research (67% improvement)',
        'Authored comprehensive computer vision guidebook for lab-wide use'
      ],
      skills: ['Computer Vision', 'Deep Learning', 'TensorFlow', 'DeepLabCut', 'Adversarial ML', 'Data Poisoning', 'Medical AI'],
      color: 'rgba(0, 255, 255, 0.8)',
      particles: 'tech'
    },
    {
      id: 'international-work',
      year: '2023-2025',
      era: 'Global Impact',
      title: 'International Researcher & Cultural Documentarian',
      organization: 'Gilman Scholar & Cornell Programs',
      location: 'Ecuador, Cambodia, Mexico',
      type: 'creative',
      category: 'leadership',
      description: 'Conducting fieldwork documenting Indigenous resilience, language preservation, and intergenerational healing across multiple cultures.',
      achievements: [
        'Gilman Scholar documenting Zapotec language preservation in Oaxaca, Mexico',
        'AIIS Scholar filming "Our Ancestors Are Still Singing" in Cambodia',
        'Researching educational inequities and trauma-informed algorithms in Ecuador',
        'Creating digital reconstructions of historical spaces using computational techniques'
      ],
      skills: ['Ethnographic Research', 'Documentary Production', 'Cultural Preservation', 'International Collaboration', 'Digital Reconstruction'],
      color: 'rgba(255, 215, 0, 0.8)',
      particles: 'stellar'
    },
    {
      id: 'early-leadership',
      year: '2022-2024',
      era: 'Emerging Leadership',
      title: 'Student Leader & Advocacy Organizer',
      organization: 'Multiple Cornell Organizations',
      location: 'Ithaca, NY',
      type: 'both',
      category: 'leadership',
      description: 'Leading campus organizing for social justice while excelling in technical research and building bridges across communities.',
      achievements: [
        'NAIC Lead Paradigm Changer Intern advancing equity in investment sectors',
        'Theta Tau Professional Chair organizing technical workshops for engineers',
        'Cross-cultural justice organizing across multiple student associations',
        'Women in Computing mentor supporting underrepresented minorities in STEM'
      ],
      skills: ['Leadership', 'Community Organizing', 'Financial Analysis', 'Cross-Cultural Communication', 'STEM Mentorship'],
      color: 'rgba(255, 215, 0, 0.8)',
      particles: 'neon'
    },
    {
      id: 'future-vision',
      year: '2025+',
      era: 'Future Vision',
      title: 'Technology for Liberation',
      organization: 'Emerging Ventures & Social Impact',
      location: 'Global & Virtual',
      type: 'both',
      category: 'future',
      description: 'Pioneering the intersection of advanced AI, creative storytelling, and social justice to build technology that serves liberation movements.',
      achievements: [
        'Launch healthcare AI startup democratizing pain assessment technology',
        'Establish documentary film collective focusing on resistance and resilience stories',
        'Develop AI systems trained on traditional ecological and cultural knowledge',
        'Create digital platforms for Indigenous cultural preservation'
      ],
      skills: ['Startup Leadership', 'AI Ethics', 'Cultural Technology', 'Social Impact', 'Documentary Distribution', 'Liberation Technology'],
      color: 'rgba(255, 255, 255, 0.8)',
      particles: 'quantum'
    }
  ]

  // Filter timeline data based on view mode
  const getFilteredTimeline = () => {
    if (viewMode === 'both') return timelineData
    return timelineData.filter(item => item.type === viewMode || item.type === 'both')
  }

  // Mode Toggle Component
  const ModeToggle = () => (
    <div className={styles.modeToggle}>
      <div className={styles.toggleHeader}>
        <h3 className={styles.toggleTitle}>Navigate My Dimensions</h3>
        <p className={styles.toggleSubtitle}>Explore different facets of my journey</p>
      </div>
      <div className={styles.toggleButtons}>
        <button 
          className={`${styles.toggleBtn} ${viewMode === 'technical' ? styles.active : ''}`}
          onClick={() => setViewMode('technical')}
          style={{ '--btn-color': 'rgba(0, 255, 255, 0.8)' }}
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 21L16 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17L12 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 7L10 10L7 13" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 13H17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.btnText}>Technical</span>
          <div className={styles.btnGlow} />
        </button>
        <button 
          className={`${styles.toggleBtn} ${viewMode === 'creative' ? styles.active : ''}`}
          onClick={() => setViewMode('creative')}
          style={{ '--btn-color': 'rgba(255, 140, 0, 0.8)' }}
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 3V7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 17V21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 5H7" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 19H21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.btnText}>Creative</span>
          <div className={styles.btnGlow} />
        </button>
        <button 
          className={`${styles.toggleBtn} ${viewMode === 'both' ? styles.active : ''}`}
          onClick={() => setViewMode('both')}
          style={{ '--btn-color': 'rgba(255, 255, 255, 0.8)' }}
        >
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
          <span className={styles.btnText}>Unified</span>
          <div className={styles.btnGlow} />
        </button>
      </div>
    </div>
  )

  // Particle component for timeline items
  const TimelineParticles = ({ type, color, isActive }) => {
    if (!isActive) return null
    
    return (
      <div className={styles.timelineParticles}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`${styles.timelineParticle} ${styles[`particle${type.charAt(0).toUpperCase() + type.slice(1)}`]}`}
            style={{
              '--particle-color': color,
              '--delay': `${i * 0.2}s`,
              '--duration': `${2 + Math.random()}s`
            }}
          />
        ))}
      </div>
    )
  }

  // Skill constellation component
  const SkillConstellation = ({ skills, color }) => (
    <div className={styles.skillConstellation}>
      {skills.map((skill, index) => (
        <div 
          key={skill}
          className={styles.skillStar}
          style={{
            '--star-color': color,
            '--delay': `${index * 0.1}s`
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  )

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
            filter: 'brightness(0.24) contrast(1.3) saturate(1.9)'
          }}
        >
          {/* Using the coding video URL from your index.js */}
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/coding.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.resumePage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/" className={styles.backLink}>
            Back to Homepage
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.resumeHero}>
          <h1 className={styles.resumeTitle}>Journey Through Time</h1>
          <p className={styles.resumeSubtitle}>
            A multidimensional navigation through parallel worlds of code and creativity
          </p>

          {/* Technical Portfolio Button */}
          <div className={styles.portfolioButtonContainer}>
            <button 
              className={styles.portfolioButton}
              type="button"
              aria-label="Scroll to technical portfolio section"
              onClick={() => {
                const portfolioSection = document.querySelector(`.${styles.portfolioSection}`);
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className={styles.portfolioButtonText}>TECHNICAL PORTFOLIO</span>
              <div className={styles.portfolioButtonGlow} />
            </button>
          </div>
          
          {/* Mode Toggle */}
          <ModeToggle />
          
          {/* Progress Indicator */}
          <div className={styles.progressIndicator}>
            <div 
              className={styles.progressBar}
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Timeline Container */}
        <div className={styles.timelineContainer}>
          {/* Central Timeline Axis */}
          <div className={styles.timelineAxis}>
            <div 
              className={styles.timelineProgress}
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Timeline Items */}
          {getFilteredTimeline().map((item, index) => (
            <div 
              key={item.id}
              className={`${styles.timelineItem} ${styles[`timeline${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`]} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
              onMouseEnter={() => setActiveTimeline(item.id)}
              onMouseLeave={() => setActiveTimeline(null)}
              style={{
                '--item-color': item.color,
                '--item-delay': `${index * 0.2}s`
              }}
            >
              {/* Timeline Marker */}
              <div className={styles.timelineMarker}>
                <div className={styles.markerCore} style={{ background: item.color }}>
                  <span className={styles.markerYear}>
                    {item.year.includes('-') ? (
                      <>
                        <span>{item.year.split('-')[0]}</span>
                        <span>—</span>
                        <span>{item.year.split('-')[1]}</span>
                      </>
                    ) : (
                      item.year
                    )}
                  </span>
                </div>
                
                {/* Type Indicator */}
                <div className={styles.typeIndicator} style={{ background: item.color }}>
                  {item.type === 'technical' && (
                    <svg viewBox="0 0 24 24" fill="none" className={styles.typeIcon} stroke="currentColor">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 21L16 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 17L12 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7L10 10L7 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M13 13H17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.type === 'creative' && (
                    <svg viewBox="0 0 24 24" fill="none" className={styles.typeIcon} stroke="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 3V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 17V21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 5H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 19H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.type === 'both' && (
                    <svg viewBox="0 0 24 24" fill="none" className={styles.typeIcon} stroke="currentColor">
                      <circle cx="12" cy="12" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 1V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 21V23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.22 4.22L5.64 5.64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.36 18.36L19.78 19.78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M1 12H3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12H23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.22 19.78L5.64 18.36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.36 5.64L19.78 4.22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                
                {/* Particle Effects */}
                <TimelineParticles 
                  type={item.particles}
                  color={item.color}
                  isActive={activeTimeline === item.id}
                />
              </div>

              {/* Timeline Card */}
              <div
                className={`${styles.timelineCard} ${styles[`card${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`]} ${item.id === 'southworks-mural' ? styles.clickableCard : ''}`}
                onClick={item.id === 'southworks-mural' ? () => window.open('/art/murals/my-queens', '_blank') : undefined}
                style={item.id === 'southworks-mural' ? { cursor: 'pointer' } : {}}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardEra}>{item.era}</div>
                  <div className={styles.cardLocation}>{item.location}</div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <h4 className={styles.cardOrganization}>{item.organization}</h4>
                  <p className={styles.cardDescription}>{item.description}</p>

                  {/* Achievements */}
                  <div className={styles.achievementsList}>
                    {item.achievements.map((achievement, i) => (
                      <div 
                        key={i}
                        className={styles.achievement}
                        style={{ '--achievement-delay': `${i * 0.1}s` }}
                      >
                        <div className={styles.achievementBullet} style={{ background: item.color }} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Constellation */}
                  <SkillConstellation skills={item.skills} color={item.color} />
                </div>

                {/* Card Glow Effect */}
                <div 
                  className={styles.cardGlow}
                  style={{ background: `radial-gradient(circle, ${item.color}20, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Section */}
        <div className={styles.downloadSection}>
          <div className={styles.downloadCard}>
            <h3 className={styles.downloadTitle}>Access Full Documentation</h3>
            <p className={styles.downloadDescription}>
              Download the complete temporal record in traditional format
            </p>
            <div className={styles.downloadOptions}>
              <a
                href="/maya-murry-technical-resume-2025.pdf"
                download="Maya-Murry-Technical-Resume.pdf"
                className={styles.downloadBtn}
              >
                <span className={styles.downloadText}>Technical Resume</span>
                <div className={styles.downloadGlow} />
              </a>
              <button
                className={`${styles.downloadBtn} ${styles.comingSoonBtn}`}
                disabled
              >
                <span className={styles.downloadText}>Creative Resume (Coming Soon)</span>
                <div className={styles.downloadGlow} />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Portfolio Section */}
        <div className={styles.portfolioSection}>
          <div className={styles.portfolioHeader}>
            <h3 className={styles.portfolioTitle}>Technical Portfolio</h3>
            <p className={styles.portfolioSubtitle}>
              Explore computational projects across different domains
            </p>
          </div>

          <div className={styles.portfolioGrid}>
            <Link to="/portfolio/healthcare-ai" className={styles.portfolioCard}>
              <div className={styles.portfolioIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 5.42 19.58 3 16.5 3C14.76 3 13.26 3.94 12.62 5.36C12.26 5.94 11.74 5.94 11.38 5.36C10.74 3.94 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 10.79 3.51 12.54 5 14L12 21L19 14Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H15" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.portfolioCardTitle}>Healthcare AI</h4>
              <p className={styles.portfolioCardDescription}>
                Deep learning for pain detection, sleep analysis, and medical data processing
              </p>
              <div className={styles.portfolioTechStack}>
                <span>Python</span>
                <span>TensorFlow</span>
                <span>React</span>
                <span>ECG Analysis</span>
              </div>
            </Link>

            <Link to="/portfolio/research-computing" className={styles.portfolioCard}>
              <div className={styles.portfolioIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 11H15" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15H12" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="1" width="8" height="4" rx="1" ry="1" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="11" r="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.portfolioCardTitle}>Research Computing</h4>
              <p className={styles.portfolioCardDescription}>
                Computational genomics, NLP analysis, and epigenetic research algorithms
              </p>
              <div className={styles.portfolioTechStack}>
                <span>Python</span>
                <span>R</span>
                <span>NLP</span>
                <span>Genomics</span>
              </div>
            </Link>

            <Link to="/portfolio/cybersecurity" className={styles.portfolioCard}>
              <div className={styles.portfolioIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22S8 18 8 13V7L12 5L16 7V13C16 18 12 22 12 22Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 11L12 13L15 10" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.portfolioCardTitle}>Security & Privacy</h4>
              <p className={styles.portfolioCardDescription}>
                Adversarial ML, data poisoning, and privacy-preserving algorithms
              </p>
              <div className={styles.portfolioTechStack}>
                <span>Python</span>
                <span>Azure</span>
                <span>Adversarial ML</span>
                <span>RAG Systems</span>
              </div>
            </Link>

            <Link to="/portfolio/full-stack" className={styles.portfolioCard}>
              <div className={styles.portfolioIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 21L16 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17L12 21" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7L10 10L7 13" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 13H17" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className={styles.portfolioCardTitle}>Full-Stack Applications</h4>
              <p className={styles.portfolioCardDescription}>
                Web applications, mobile development, and cloud deployment
              </p>
              <div className={styles.portfolioTechStack}>
                <span>React</span>
                <span>Node.js</span>
                <span>AWS</span>
                <span>PostgreSQL</span>
              </div>
            </Link>
          </div>

          <div className={styles.portfolioFooter}>
            <a 
              href="https://github.com/snedmagdous" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <svg viewBox="0 0 24 24" fill="none" className={styles.githubIcon} stroke="currentColor">
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H16C15.4696 24 14.9609 23.7893 14.5858 23.4142C14.2107 23.0391 14 22.5304 14 22V18.13C14.0375 17.6532 13.9731 17.1738 13.811 16.7238C13.6489 16.2738 13.3929 15.8634 13.06 15.52C16.2 15.17 19.5 13.98 19.5 8.52C19.4997 7.12383 18.9627 5.7812 18 4.77C18.4559 3.54851 18.4236 2.19835 17.91 0.999999C17.91 0.999999 16.73 0.649999 14 2.48C11.708 1.85882 9.29196 1.85882 7 2.48C4.27 0.649999 3.09 0.999999 3.09 0.999999C2.57638 2.19835 2.54414 3.54851 3 4.77C2.03013 5.7887 1.49252 7.14328 1.5 8.55C1.5 13.97 4.8 15.16 7.94 15.55C7.611 15.89 7.35726 16.2954 7.19531 16.7399C7.03335 17.1844 6.96681 17.6581 7 18.13V22C7 22.5304 7.21071 23.0391 7.58579 23.4142C7.96086 23.7893 8.46957 24 9 24H13C13.5304 24 14.0391 23.7893 14.4142 23.4142C14.7893 23.0391 15 22.5304 15 22V16" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>

        {/* Contact Dimensions */}
        <div className={styles.contactDimensions}>
          <h3 className={styles.contactTitle}>Open Communication Channels</h3>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📧</div>
              <span>mmm443@cornell.edu</span>
            </div>
            <a
              href="https://linkedin.com/in/mayamurry"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}>🌐</div>
              <span>linkedin.com/in/mayamurry</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ResumePage