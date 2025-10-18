// src/pages/art/murals/my-queens/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./my-queens-mural.module.css"

const MyQueensMuralPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredStep, setHoveredStep] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  
  const timelineSteps = [
    {
      id: 'southworks-invitation',
      date: 'June 2025',
      title: 'Southworks Mural Invitational',
      description: 'Invited as artist to Southworks Mural Invitational for factory renovation after receiving major NY state grants.',
      image: '/images/murals/my-queens/invite.jpg',
      details: 'The Southworks factory renovation represents a significant urban development project, and the mural invitational aims to integrate meaningful community art into this transformation of industrial space.'
    },
    {
      id: 'grant-award',
      date: 'July 2025',
      title: 'Grant Funding & Fundraising Model',
      description: 'Receiving grant funding while establishing mural as fundraiser with proceeds split between different local charities.',
      image: '/images/murals/my-queens/grant-funding.jpg',
      details: 'This dual funding model allows for artistic creation while directly supporting humanitarian relief efforts for communities experiencing displacement and occupation.'
    },
    {
      id: 'community-partnerships',
      date: 'July 15, 2025',
      title: 'Cornell Community Partnerships',
      description: 'Partnering with Cornell\'s Black Students United, Pan-African Muslim Student Association, and progressive organizations for authentic representation.',
      image: '/images/murals/my-queens/cornell-partnerships.jpg',
      details: 'These partnerships ensure the mural accurately represents Indigenous Bedouin and Nubian women while incorporating other Indigenous features through community guidance and cultural consultation.'
    },
    {
      id: 'cultural-research',
      date: 'August 2025',
      title: 'Indigenous Cultural Research',
      description: 'Deep research into Bedouin and Nubian traditions, geometries, and ancestral protection symbols with community advisors.',
      image: '/images/murals/my-queens/cultural-research.jpg',
      details: 'Working with cultural advisors to ensure respectful and accurate representation of traditional patterns, spiritual symbolism, and the connection between these Indigenous communities and their ancestral lands.'
    },
    {
      id: 'land-acknowledgment',
      date: 'August 10, 2025',
      title: 'Land Acknowledgment Integration',
      description: 'Incorporating acknowledgment that the mural stands on stolen Haudenosaunee land, connecting Indigenous struggles across continents.',
      image: '/images/murals/my-queens/land-acknowledgment.jpg',
      details: 'This element emphasizes the global nature of Indigenous land displacement and creates solidarity between Haudenosaunee, Bedouin, and Nubian peoples who have all experienced colonization.'
    },
    {
      id: 'design-development',
      date: 'August 20, 2025',
      title: 'Collaborative Design Process',
      description: 'Community-guided design sessions creating surreal geometric light representing ancestral protection and resistance.',
      image: '/images/murals/my-queens/design-process.jpg',
      details: 'The geometric light patterns draw from traditional Bedouin and Nubian art forms while creating a surreal, protective aura that represents ancestors watching over and empowering contemporary Indigenous women.'
    },
    {
      id: 'nature-integration',
      date: 'September 1, 2025',
      title: 'Nature-Infused Resistance Elements',
      description: 'Incorporating indigenous plants, desert landscapes, and Nile imagery as symbols of connection to stolen and threatened lands.',
      image: '/images/murals/my-queens/nature-elements.jpg',
      details: 'Natural elements represent the deep connection Indigenous peoples have to their lands, and how this connection persists despite displacement, occupation, and colonization.'
    },
    {
      id: 'queens-portraits',
      date: 'September 5, 2025',
      title: 'The Queens - Bedouin & Nubian Women',
      description: 'Painting the central figures: Indigenous Bedouin and Nubian women standing close together in fierce solidarity.',
      image: '/images/murals/my-queens/queens-portraits.jpg',
      details: 'These figures represent the strength, resilience, and beauty of Indigenous women who maintain their identity and resistance despite systemic attempts to erase their cultures and claim their lands.'
    },
    {
      id: 'ancestral-light',
      date: 'September 10, 2025',
      title: 'Ancestral Geometric Light',
      description: 'Adding the surreal geometric light patterns representing ancestors protecting and empowering the Queens.',
      image: '/images/murals/my-queens/ancestral-light.jpg',
      details: 'These geometric patterns blend traditional Bedouin and Nubian artistic motifs into flowing, luminous forms that create a spiritual protection around the central figures.'
    },
    {
      id: 'resistance-symbols',
      date: 'September 15, 2025',
      title: 'Symbols of Land & Resistance',
      description: 'Integrating symbols representing connection to land, resistance to occupation, and Indigenous sovereignty.',
      image: '/images/murals/my-queens/resistance-symbols.jpg',
      details: 'These symbols connect the struggles of Bedouin peoples facing Israeli occupation, Nubian communities displaced by dams, and all Indigenous peoples fighting for land rights and cultural survival.'
    },
    {
      id: 'community-additions',
      date: 'September 20, 2025',
      title: 'Community Collaborative Elements',
      description: 'Cornell student organizations and community members add personal touches representing solidarity and shared resistance.',
      image: '/images/murals/my-queens/community-additions.jpg',
      details: 'Community contributors add elements that connect their own liberation struggles to those of the Indigenous women featured, creating a tapestry of intersectional resistance.'
    },
    {
      id: 'final-details',
      date: 'September 25, 2025',
      title: 'Final Details & Protective Elements',
      description: 'Adding final protective elements, traditional patterns, and ensuring accurate cultural representation.',
      image: '/images/murals/my-queens/final-details.jpg',
      details: 'Final touches include intricate traditional patterns, protective amulets, and ensuring every cultural element has been reviewed and approved by community advisors.'
    },
    {
      id: 'october-7-completion',
      date: 'October 7, 2025',
      title: 'Completion on October 7th',
      description: 'Completing the mural on October 7th as a statement of solidarity with all Indigenous peoples facing occupation.',
      image: '/images/murals/my-queens/completion.jpg',
      details: 'The October 7th completion date connects this work to ongoing resistance while honoring all Indigenous peoples fighting for their right to exist on their ancestral lands.'
    },
    {
      id: 'charity-fundraising',
      date: 'October 2025',
      title: 'Ongoing Fundraising for refugee support',
      description: 'Continuing fundraising efforts with proceeds supporting humanitarian aid for local & international Black & Indigenous communities.',
      image: '/images/murals/my-queens/fundraising.jpg',
      details: 'The mural serves as both artistic statement and practical solidarity, with ongoing fundraising demonstrating how art can directly support communities facing displacement and violence.'
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
    src: '/images/murals/my-queens/mural.JPeG',
    title: 'In the Image of My Queens, I Stand',
    subtitle: '2025 • Southworks Factory, Ithaca, NY',
    description: 'A powerful representation of Indigenous Bedouin and Nubian women surrounded by ancestral geometric light, standing in fierce resistance on stolen land while connected to their traditional territories.',
    details: 'This mural aims to create solidarity between Indigenous communities across continents while serving as a fundraiser for humanitarian aid, demonstrating how art can be both resistance and practical support.'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/myqueens.MOV"
      videoStyle={{
        filter: 'brightness(0.2) contrast(1.1) saturate(1.2)'
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
          <h1 className={styles.muralTitle}>In the Image of My Queens, I Stand</h1>
          <div className={styles.muralMeta}>
            <span className={styles.metaItem}>Southworks Factory, Ithaca, NY • 2025</span>
            <span className={styles.metaItem}>20ft × 30ft • Exterior Paint on Industrial Wall</span>
            <span className={styles.metaItem}>Grant-funded + Charity Fundraiser</span>
          </div>
          <p className={styles.muralDescription}>
            A nature-infused mural featuring Indigenous Bedouin and Nubian women protected by ancestral 
            geometric light, standing in fierce resistance on stolen land while maintaining connection 
            to their traditional territories. Created through community collaboration with proceeds 
            benefiting humanitarian efforts.
          </p>

          {/* View Mural Button */}
          <div className={styles.viewMuralButton}>
            <button 
              onClick={() => openModal(mainMuralImage)}
              className={styles.muralViewBtn}
            >
              View Mural
            </button>
          </div>
        </div>

        {/* Funding Section */}
        <div className={styles.fundingSection}>
          <h3 className={styles.fundingTitle}>Funding & Community Support</h3>
          <div className={styles.fundingContent}>
            <p className={styles.fundingText}>
              This mural was made possible by the New York State Ccouncil On the Arts with the support of the Office of the Governor.
              The Mural Jam is also supported by the Ithaca Community Arts Partnership, Meldrims Paint Center, Argos Inn, and Gimmecoffee. 
              This work was commissioned through Ithaca Murals, a project of the Cornell Center For Transformative Action.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>Indigenous Solidarity Creation</h2>
          <p className={styles.timelineSubtitle}>
            How community collaboration and ancestral wisdom guide the creation of resistance art
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
                  onClick={() => openModal({
                    src: step.image,
                    title: step.title,
                    subtitle: step.date,
                    description: step.description,
                    details: step.details
                  })}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.stepDate}>{step.date}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>

                  {hoveredStep === step.id && (
                    <div className={styles.stepDetails}>
                      <p>{step.details}</p>
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
          <h3 className={styles.impactTitle}>Indigenous Solidarity Impact</h3>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Indigenous Communities</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Charity Beneficiaries</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Cornell Organizations</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Ancestral Protection</span>
            </div>
          </div>
          <div className={styles.impactText}>
            <p>
              "In the Image of My Queens, I Stand" creates solidarity between Indigenous Bedouin and 
              Nubian women while acknowledging that the mural itself stands on stolen Haudenosaunee land. 
              This connection across continents demonstrates how Indigenous struggles against colonization, 
              occupation, and displacement are fundamentally linked.
            </p>
            <p>
              The ancestral geometric light that protects these Queens represents the spiritual strength 
              that flows from traditional knowledge and connection to land. Even when physically displaced 
              or occupied, this connection remains unbroken and continues to empower resistance.
            </p>
            <p>
              Completed on October 7th, this work stands as a testament to the ongoing resistance of all 
              Indigenous peoples and the power of community collaboration in creating art that both 
              heals and challenges systems of oppression.
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

export default MyQueensMuralPage