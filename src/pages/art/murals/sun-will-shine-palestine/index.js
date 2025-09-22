// src/pages/art/murals/sun-will-shine-palestine/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./palestine-mural.module.css"

const PalestineMuralPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredStep, setHoveredStep] = useState(null)
  const [selectedStep, setSelectedStep] = useState(null)
  const videoRef = useRef(null);
  
  // Background video setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);
  
  const timelineSteps = [
    {
      id: 'community-planning',
      date: 'Mid-March 2024',
      title: 'Community Planning',
      description: 'Students gathered to plan the apartheid wall exhibition, registering it officially with Cornell University for the Arts Quad.',
      image: '/images/murals/sunshine/shantytown.jpg',
      details: 'Taking inspiration from the South Africa apartheid "shanty town" protests, students organized to create an educational exhibition that would raise awareness about Palestinian liberation through art and historical parallels.'
    },
    {
      id: 'partnerships-funding',
      date: 'Early April 2024',
      title: 'Partnerships & Material Acquisition',
      description: 'Collaborated with professors, faculty, ewish Voice for Peace, Ithaca Mural Arts, and gallery studios to secure funding and acquire mural materials.',
      image: '/images/murals/sunshine/prep.jpeg',
      details: 'Academic and community partnerships provided both financial support and access to professional-grade paints and studio space for mural preparation.'
    },
    {
      id: 'wall-creation',
      date: 'Mid-April 2024',
      title: 'Apartheid Wall Construction',
      description: 'Led by Maya Murry, the apartheid wall nears completion with volunteer artists from different colleges and areas at Cornell.',
      image: '/images/murals/sunshine/in-a-free.jpeg',
      details: 'The collaborative effort brought together artists from various academic disciplines and backgrounds, creating a truly interdisciplinary artistic statement. Cover art inspired by artist Fuad Alyamani.'
    },
    {
      id: 'haudenosaunee-partnership',
      date: 'May 2024',
      title: 'Indigenous Land Acknowledgment',
      description: 'Partnered with the Haudenosaunee Confederacy to place official "Land Back" acknowledgment and Gayogo̱hó:nǫ sign.',
      image: '/images/murals/sunshine/land.png',
      details: 'An Indigenous Seneca artist and Cornell student painted traditional designs and land back acknowledgment, recognizing that this exhibition stands on stolen Gayogo̱hó:nǫ (Cayuga) land, connecting Palestinian liberation with Indigenous sovereignty.'
    },
    {
      id: 'fundraising-donations',
      date: 'Late May 2024',
      title: 'Community Fundraising',
      description: 'Raised over $13,000 in donations and proceeds, with all funds going entirely to various local and international charities.',
      image: '/images/murals/sunshine/tree.jpeg',
      details: 'The community response was overwhelming, with donations flowing to local Ithaca charities as well as international ones to support refugee relief efforts.'
    },
    {
      id: 'mama-poem',
      date: 'May 2024',
      title: '"Mama I\'m Fine" Poem',
      description: 'Featured poem by Maya Mirie (Murry) displayed on the mural, with imagery dedicated to Wadea Al-Fayoume, 6-year-old victim of anti-Palestinian violence.',
      image: '/images/murals/sunshine/mamma-poem.jpeg',
      details: `This officially published poem by Maya Murry honors the memory of Wadea Al-Fayoume, the 6-year-old Palestinian-American boy who was tragically killed in a hate crime. <br><br><a href="https://www.fikra-magazine.com/article/166" target="_blank" rel="noopener noreferrer" style="color: rgba(255, 255, 255, 0.8); text-decoration: underline;">Read the full poem on Fikra Magazine</a><br><br><em>Excerpt:</em><br><em>"The maps are not what they once were,<br>The surgeon said hovering my naked body.<br><br>The metal table he'd spread us on was a bed<br>of thorns no rose could grow, the only limb<br>my scribe could hold was my wilting palm,<br>like a dying dove god tossed in water, just<br>to hear me ebb away to the ocean wave of:<br><br>mamma I'm fine<br>mamma I'm fine<br>I'm falling asleep<br>in little Palestine"</em>`
    },
    {
      id: 'arabic-love-war-poem',
      date: 'May 2024',
      title: 'Arabic Love & War Poem',
      description: 'Featured "In Arabic, the word for war is similar to love" by Palestinian artist Sara Abou Rashed.',
      image: '/images/murals/sunshine/sara-poem.png',
      details: `This powerful piece by Sara Abou Rashed explores the linguistic connections between love and conflict in Arabic, adding another Palestinian voice to the exhibition.<br><br><a href="https://www.poetryfoundation.org/poetrymagazine/poems/157556/in-arabic-the-word-for-war-is-similar-to-love" target="_blank" rel="noopener noreferrer" style="color: rgba(255, 255, 255, 0.8); text-decoration: underline;">Read the full poem on Poetry Foundation</a><br><br><em>Full poem:</em><br><em>"On his way to a first kiss, a soldier<br>enters a flower shop. He fingers dozens<br>of roses and determines the longevity of each<br>by the number of its petals.<br>When children protested the regime<br>then died in its prisons, officers<br>sent their fathers notes that read:<br>Come pick up the corpse in exchange for the mother,<br>we'll ensure she bears another one.<br>On the table, a bouquet of 24—one for every<br>month in service. His nails tug<br>until the red tissue, lining a sacred opening, unravels,<br>a torn uterus where once a butterfly<br>didn't ask permission."</em>`
    },
    {
      id: 'partition-design',
      date: 'May 2024',
      title: 'The Partition',
      description: 'The mural\'s design reflects Palestinian geography: the first half (3 orange panels) represents Gaza, while the second half depicts the West Bank. Both the Palestinian and Haudenosaunee Confederacy flags were raised for the duration of the exhibition.',
      image: '/images/murals/sunshine/flags.jpeg',
      details: 'The visual partition of the mural mirrors the geographic and political division of Palestinian territories, with Gaza represented in vibrant orange panels and the West Bank in complementary earth tones.'
    },
    {
      id: 'archival-storage',
      date: 'June 2024',
      title: 'Archival Storage',
      description: 'The apartheid wall is carefully dismantled and stored in Cornell campus archives for preservation and future educational use.',
      image: '/images/murals/sunshine/artivism.jpeg',
      details: 'The community recognized the historical and educational significance of the work, ensuring its preservation along with smaller community artworks done afterwards for future generations of students and researchers.'
    },
    {
      id: 'gallery-exhibition',
      date: 'March 2025',
      title: 'Gallery Exhibition',
      description: 'The apartheid wall returns for its first gallery exhibition in Ithaca, featuring the panel reading "In A Free" as the centerpiece.',
      image: '/images/murals/sunshine/gallery.jpeg',
      details: 'The work\'s transition from campus activism to formal gallery space marks its evolution from protest art to recognized cultural artifact, with the "In A Free" panel serving as a powerful standalone piece.'
    },
    {
      id: 'journal-publication',
      date: 'April 2025',
      title: 'Diacritics: A Review of Contemporary Criticism',
      description: 'The apartheid wall receives its first official peer-reviewed academic publication in the acclaimed journal by the Johns Hopkins University Press.',
      image: '/images/murals/sunshine/journal.jpg',
      details: 'This peer-reviewed publication in Diacritics represents the academic legitimization of the apartheid wall as both artistic achievement and scholarly subject. The journal article analyzes the work\'s intersectional approach to resistance art, its connections between anti-apartheid history and Palestinian liberation, and its role in campus activism. This academic recognition validates the project\'s educational mission and ensures its preservation in scholarly discourse.'
    }
  ]

  const openStepModal = (step) => {
    setSelectedStep(step)
    document.body.style.overflow = 'hidden'
  }

  const closeStepModal = () => {
    setSelectedStep(null)
    document.body.style.overflow = 'unset'
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeStepModal()
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
            filter: 'brightness(0.26) contrast(1.03) saturate(1.15)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/encampment-mural.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <section className={styles.muralPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/murals" className={styles.backLink}>
            Back to Murals
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.muralHero}>
          <h1 className={styles.muralTitle}>The Sun Will Shine In A Free Palestine</h1>
          <div className={styles.muralMeta}>
            <span className={styles.metaItem}>Cornell Arts Quad Exhibition • 2024-2025</span>
            <span className={styles.metaItem}>8ft × 36ft • Exterior Acrylic Paint</span>
            <span className={styles.metaItem}>Community-funded: $13,000+ donated to Gaza & Sudan relief</span>
          </div>
          <p className={styles.muralDescription}>
            An apartheid wall exhibition created at Cornell University, drawing inspiration from 
            South African anti-apartheid protests while advocating for Palestinian liberation. 
            This collaborative artwork serves as both educational tool and symbol of solidarity.
          </p>
          
          <div className={styles.viewMuralButton}>
            <button 
              className={styles.muralViewBtn}
              onClick={() => openStepModal({
                id: 'full-mural',
                title: 'The Sun Will Shine In A Free Palestine - Complete Mural',
                date: '2024',
                description: 'The complete apartheid wall exhibition featuring all panels: Gaza (orange), West Bank, poems, and Land Back acknowledgment.',
                image: '/images/murals/sunshine/mural.jpeg',
                details: 'This 8ft × 36ft collaborative artwork brings together Palestinian liberation themes, Indigenous land acknowledgment, poetry, and community solidarity in one powerful visual statement.'
              })}
            >
              Click to See Full Mural
            </button>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>Creation Timeline</h2>
          <p className={styles.timelineSubtitle}>
            From community planning to gallery exhibition: the journey of resistance art
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            
            {timelineSteps.map((step, index) => (
              <div 
                key={step.id}
                className={`${styles.timelineStep} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={styles.stepMarker}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                </div>
                
                <div 
                  className={styles.stepCard}
                  onClick={() => openStepModal(step)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.stepDate}>{step.date}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  {hoveredStep === step.id && (
                    <div className={styles.stepDetails}>
                      <p dangerouslySetInnerHTML={{ __html: step.details }}></p>
                    </div>
                  )}
                  
                  <div className={styles.stepImageContainer}>
                    <div 
                      className={`${styles.stepImage} ${hoveredStep === step.id ? styles.imageZoomed : ''}`}
                      style={{
                        backgroundImage: `url(${step.image})`,
                        backgroundSize: hoveredStep === step.id ? '110%' : '100%',
                        backgroundPosition: 'center'
                      }}
                    />
                    {hoveredStep === step.id && (
                      <div className={styles.imageOverlay}>
                        <span className={styles.viewFullText}>Click to view full image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className={styles.impactSection}>
          <h3 className={styles.impactTitle}>Community Impact</h3>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>$13K+</span>
              <span className={styles.statLabel}>Donated to Relief</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Contributors</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Communities United</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Exhibition Venues</span>
            </div>
          </div>
          <div className={styles.impactText}>
            <p>
              This apartheid wall exhibition represents the power of collaborative resistance art 
              and intersectional solidarity. By drawing connections between South African anti-apartheid 
              struggles, Palestinian liberation, and Indigenous sovereignty, the project created new 
              frameworks for understanding oppression and resistance.
            </p>
            <p>
              The work's journey from campus activism to archival preservation to gallery exhibition 
              demonstrates how protest art can evolve into lasting cultural and educational resources. 
              All funds raised supported refugee relief efforts, embodying the principle that art 
              should serve community needs beyond aesthetic appreciation.
            </p>
          </div>
        </div>
      </section>

      {/* Step Modal */}
      {selectedStep && (
        <div className={styles.modal} onClick={closeStepModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeStepModal}>×</button>
            
            <div className={styles.modalLayout}>
              <div className={styles.modalImage}>
                <img 
                  src={selectedStep.image} 
                  alt={selectedStep.title}
                />
              </div>
              
              <div className={styles.modalInfo}>
                <h2>{selectedStep.title}</h2>
                <h3>{selectedStep.date}</h3>
                <p className={styles.modalDescription}>{selectedStep.description}</p>
                <div 
                  className={styles.modalDetails}
                  dangerouslySetInnerHTML={{ __html: selectedStep.details }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default PalestineMuralPage