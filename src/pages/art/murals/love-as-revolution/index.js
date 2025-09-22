// src/pages/art/murals/love-as-revolution/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./love-revolution-mural.module.css"

const LoveRevolutionMuralPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredStep, setHoveredStep] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  
  const timelineSteps = [
    {
      id: 'initial-planning',
      date: 'January 2025',
      title: 'Executive Partnership Vision',
      description: 'Meeting with CSMA Executive Director and founder of Ithaca Murals to plan a mural for intersectional solidarity, portraying 3 powerful artists and activists.',
      image: '/images/murals/love-rev/start.jpeg',
      details: 'Collaborative planning session focused on using mural art to showcase intersectional solidarity between Black, Indigenous, and Palestinian liberation movements through the stories of powerful women activists.'
    },
    {
      id: 'csma-partnership',
      date: 'February 2025',
      title: 'First CSMA Mural Partnership',
      description: 'Through Community School partnership, creating the very first mural at CSMA with help from Megan Omohundro, Executive Director.',
      image: '/images/murals/love-rev/2.jpeg',
      details: 'Historic collaboration establishing CSMA as a space for liberation art, with Megan Omohundro providing institutional support for politically engaged community murals.'
    },
    {
      id: 'documentary-funding',
      date: 'March 2025',
      title: 'Documentary Integration & Initial Painting',
      description: 'Beginning painting using funds from Maya Murry\'s documentary of the same name - about intersectional solidarity and murals as transformational love decolonizing walls.',
      image: '/images/murals/love-rev/1.5.png',
      details: 'The mural becomes both subject and funding source for a documentary exploring how murals serve as medium for transformational love and decolonizing public spaces.'
    },
    {
      id: 'community-crowdsourcing',
      date: 'March 15-30, 2025',
      title: 'Community Crowdsourcing Campaign',
      description: 'Community crowdsources $2,500+ from local community, CSMA parents, members, Cornell professors and faculty to cover labor and remaining costs.',
      image: '/images/murals/love-rev/3.jpeg',
      details: 'Diverse funding base including school families, university faculty, and community members demonstrated widespread support for intersectional liberation art.'
    },
    {
      id: 'shaden-qous',
      date: 'April 1, 2025',
      title: 'Shaden Qous - Afro-Palestinian Representation',
      description: 'Portraying Shaden Qous, Afro-Palestinian artist and activist, highlighting media silence about her detention in West Bank despite being US citizen and law student.',
      image: '/images/murals/love-rev/shaden.png',
      details: 'Chosen to center Shaden\'s story as media remained relatively silent about her detention, despite her being a US citizen, law school student, artist, and activist advocating for Palestinian liberation.'
    },
    {
      id: 'leanne-simpson',
      date: 'April 3, 2025',
      title: 'Leanne Betasamosake Simpson - Indigenous Solidarity',
      description: 'Depicting Leanne Betasamosake Simpson, Native American photographer and advocate for intersectional solidarity between Indigenous North America and Palestine.',
      image: '/images/murals/love-rev/leanne.png',
      details: 'Honoring Leanne\'s work connecting Indigenous struggles across Turtle Island with Palestinian liberation, emphasizing shared experiences of colonialism and resistance.'
    },
    {
      id: 'kara-walker',
      date: 'April 5, 2025',
      title: 'Kara Walker - Black Body Experience',
      description: 'Featuring Kara Walker and her revolutionary art addressing the Black body experience and challenging narratives about Black womanhood.',
      image: '/images/murals/love-rev/kara.png',
      details: 'Celebrating Kara Walker\'s groundbreaking silhouette work and installations that confront histories of slavery, violence, and the Black experience in America.'
    },
    {
      id: 'ancestral-generation',
      date: 'April 7, 2025',
      title: 'Generation of Ancestors - Fadwa Tuqan',
      description: 'Adding the generation of ancestors watching from behind, starting with Fadwa Tuqan, the legendary poet of Palestine.',
      image: '/images/murals/love-rev/fadwa.png',
      details: 'Fadwa Tuqan, known as the "Poet of Palestine," represents the literary resistance tradition and the voices of Palestinian women who paved the way for contemporary activists.'
    },
    {
      id: 'zitkala-sa',
      date: 'April 9, 2025',
      title: 'Zitkala-Sa - Indigenous Literary Pioneer',
      description: 'Honoring Zitkala-Sa, Dakota writer and activist who bridged traditional Indigenous knowledge with resistance to colonization.',
      image: '/images/murals/love-rev/sa.png',
      details: 'Zitkala-Sa\'s writings and activism in the early 1900s challenged Indian boarding schools and advocated for Indigenous rights, representing literary resistance and cultural preservation.'
    },
    {
      id: 'june-simpson',
      date: 'April 11, 2025',
      title: 'June Simpson - Black & Palestinian Solidarity Pioneer',
      description: 'Featuring June Simpson and her Palestine activism during a time when most Black women activists remained silent about Palestine due to fear of repercussions.',
      image: '/images/murals/love-rev/june.png',
      details: 'June Simpson\'s courageous advocacy for Palestinian liberation during periods when such solidarity was politically risky demonstrates the importance of intersectional courage.'
    },
    {
      id: 'angela-davis-quote',
      date: 'April 13, 2025',
      title: 'Angela Davis Quote Integration',
      description: 'Adding Angela Davis quote from her Cornell talk in February 2025: "There are dimensions of freedom we could have never imagined if we did not start struggling for what we thought was freedom."',
      image: '/images/murals/love-rev/quote.jpeg',
      details: 'This powerful quote from Angela Davis\' recent Cornell visit, painted entirely by one Nico undergraduate, encapsulates the mural\'s message about how struggle itself expands our understanding of what liberation can be.'
    },
    {
      id: 'indigenous-wildlife',
      date: 'April 15, 2025',
      title: 'Indigenous Wildlife & Symbolic Birds',
      description: 'Volunteers add butterflies indigenous to upstate NY, Palestinian sunbirds, African birds from Zulu mythology, and Native American eagles.',
      image: '/images/murals/love-rev/volunteer.png',
      details: 'Each bird species represents the natural heritage of the movements depicted: local butterflies for place-based resistance, sunbirds for Palestinian connection to land, Zulu mythological birds for African diaspora, and eagles for Indigenous spiritual connection.'
    },
    {
      id: 'traditional-clothing',
      date: 'April 17, 2025',
      title: 'Traditional Cultural Patterns',
      description: 'All figures wear traditional clothing: Leanne\'s Anishinaabe patterns, Shaden\'s Palestinian tatreez, and Kara\'s Pan-African patterned dress.',
      image: '/images/murals/love-rev/clothes.png',
      details: 'Cultural clothing patterns honor each tradition: Anishinaabe beadwork and patterns, Palestinian tatreez embroidery representing village heritage, and Pan-African textiles celebrating diaspora unity.'
    },
    {
      id: 'mural-completion',
      date: 'April 20, 2025',
      title: 'Mural Completion & Community Celebration',
      description: 'The completed mural showcases intersectional solidarity through powerful women across movements, celebrating transformational love as resistance.',
      image: '/images/murals/love-rev/final.jpeg',
      details: 'The finished mural serves as a daily reminder that liberation movements are interconnected, and that love - as Angela Davis suggests - opens dimensions of freedom we couldn\'t previously imagine.'
    },
    {
      id: 'documentary-feature',
      date: 'Later in 2025',
      title: 'Featured in "Love as Revolution" Documentary',
      description: 'The mural becomes central to Maya Murry\'s documentary exploring how intersectional solidarity and transformational love decolonize public spaces.',
      image: '/images/murals/love-rev/lettering.png',
      details: 'The documentary captures the entire creative process, interviews with community members, and explores how mural art serves as a medium for intersectional liberation work.'
    }
  ]

  const openModal = (image) => {
    setSelectedImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }

  const mainMuralImage = {
    src: '/images/murals/love-rev/final-1.jpeg',
    title: 'Love as Revolution',
    subtitle: 'Complete Mural',
    description: 'An intersectional solidarity mural celebrating the revolutionary power of love as a force for social change, featuring powerful Black, Indigenous, and Palestinian women activists across generations.',
    details: 'This mural demonstrates that liberation movements are interconnected and that transformational love serves as the foundation for decolonizing public spaces and expanding our understanding of freedom itself.'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/love-rev-mural.MP4"
      videoStyle={{
        filter: 'brightness(0.4) contrast(1.1) saturate(1.1)'
      }}
    >
      <section className={styles.muralPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/murals" className={styles.backLink}>
            Back to Murals
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.muralHero}>
          <h1 className={styles.muralTitle}>Love as Revolution</h1>
          <div className={styles.muralMeta}>
            <span className={styles.metaItem}>Community School of Music & Arts • 2025</span>
            <span className={styles.metaItem}>12ft × 20ft • Mixed Media</span>
            <span className={styles.metaItem}>Community-funded: $2,000+</span>
          </div>
          <p className={styles.muralDescription}>
            An intersectional solidarity mural celebrating powerful Black, Indigenous, and Palestinian 
            women activists across generations, demonstrating how transformational love serves as the 
            foundation for liberation and decolonizing public spaces.
          </p>

          {/* View Mural Button */}
          <div className={styles.viewMuralButton}>
            <button 
              onClick={() => openModal(mainMuralImage)}
              className={styles.muralViewBtn}
            >
              View Complete Mural
            </button>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>Intersectional Creation Journey</h2>
          <p className={styles.timelineSubtitle}>
            How transformational love and solidarity across movements created a mural celebrating liberation
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
                
                <div className={styles.stepCard}>
                  <div className={styles.stepDate}>{step.date}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  {hoveredStep === step.id && (
                    <div className={styles.stepDetails}>
                      <p>{step.details}</p>
                    </div>
                  )}
                  
                  <div 
                    className={styles.stepImageContainer}
                    onClick={() => openModal({
                      src: step.image,
                      title: step.title,
                      subtitle: step.date,
                      description: step.description,
                      details: step.details
                    })}
                  >
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
                  
                  {/* Documentary Watch Button */}
                  {step.id === 'documentary-feature' && (
                    <div className={styles.documentaryAction}>
                      <Link to="/film/documentaries/love-rev" className={styles.watchDocumentaryBtn}>
                        Watch Documentary
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className={styles.impactSection}>
          <h3 className={styles.impactTitle}>Intersectional Liberation Impact</h3>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>$2.5K+</span>
              <span className={styles.statLabel}>Community Raised</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Powerful Women Featured</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Liberation Movements</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Transformational Love</span>
            </div>
          </div>
          <div className={styles.impactText}>
            <p>
              "Love as Revolution" demonstrates that authentic liberation movements are inherently 
              interconnected. By featuring powerful women from Black, Indigenous, and Palestinian 
              liberation movements across generations, this mural shows how transformational love 
              serves as the foundation for all resistance work.
            </p>
            <p>
              As Angela Davis reminds us, "There are dimensions of freedom we could have never imagined 
              if we did not start struggling for what we thought was freedom." This mural embodies that 
              truth, showing how solidarity across movements expands our collective understanding of 
              what liberation can be and how love serves as the revolutionary force that makes it possible.
            </p>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <div className={styles.modalLayout}>
                <div className={styles.modalImage}>
                  <img src={selectedImage.src} alt={selectedImage.title} />
                </div>
                <div className={styles.modalInfo}>
                  <h2>{selectedImage.title}</h2>
                  <h3>{selectedImage.subtitle}</h3>
                  <p className={styles.modalDescription}>{selectedImage.description}</p>
                  {selectedImage.details && (
                    <p className={styles.modalDetails}>{selectedImage.details}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default LoveRevolutionMuralPage