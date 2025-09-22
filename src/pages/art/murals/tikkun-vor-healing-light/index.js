// src/pages/art/murals/tikkun-vor-healing-light/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./tikkun-vor-mural.module.css"

const TikkunVorMuralPage = () => {
  const [language, setLanguage] = useState('EN')
  const [hoveredStep, setHoveredStep] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  
  const timelineSteps = [
    {
      id: 'spiritual-connection',
      date: 'April 2024',
      title: 'Sacred Partnership Begins',
      description: 'Meeting with Michael Margolin, Jewish spiritual leader and Bar Mitzvah teacher at Tikkun V\'or Synagogue, alongside Caleb Thomas, founder of Ithaca Murals.',
      image: '/images/murals/tikkun/prep.jpeg',
      details: 'Deep conversations about reclaiming Jewish identity beyond projected narratives, focusing on justice-oriented interpretations of Jewish spirituality and tradition. Caleb Thomas provided mural expertise while Michael brought spiritual guidance for creating liberation-focused Jewish art.'
    },
    {
      id: 'theological-study',
      date: 'April 20, 2024',
      title: 'Liberation Theology Deep Dive',
      description: 'Intensive study of Jewish liberation theology, tikkun olam principles, and anti-colonial Jewish thought.',
      image: '/images/murals/tikkun/start.jpeg',
      details: 'Exploring how concepts like "repairing the world" can be authentically expressed through solidarity with Palestinian liberation and resistance to all forms of oppression.'
    },
    {
      id: 'concept-development',
      date: 'May 1, 2024',
      title: 'Youth Vision Session',
      description: 'Meeting with Michael\'s Bar Mitzvah students to gather their ideas for lead artist Maya Murry to sketch out a mural design for the synagogue shed wall.',
      image: '/images/murals/tikkun/kids.jpeg',
      details: 'The children shared their visions of Jewish liberation values, contributing ideas that would be incorporated into Maya Murry\'s artistic vision for transforming the synagogue shed wall into a beacon of justice and healing.'
    },
    {
      id: 'community-consultation',
      date: 'May 1, 2024',
      title: 'Liberation as Collective Process',
      description: 'Challenging the children to understand liberation not as individual freedom, but as a collective process that frees all people together.',
      image: '/images/murals/tikkun/almost.jpeg',
      details: 'Teaching sessions focused on how true liberation cannot exist for some while others remain oppressed. The children learned to envision Jewish values as inherently connected to the freedom and dignity of all peoples, including Palestinians.'
    },
    {
      id: 'cultural-research',
      date: 'May 3, 2024',
      title: 'Sephardic Woman & Sacred Text Study',
      description: 'Learning proper Hebrew calligraphy techniques and selecting liberation-focused Jewish texts.',
      image: '/images/murals/tikkun/woman.jpeg',
      details: 'Working with Jewish scholars to ensure accurate Hebrew lettering and meaningful selection of texts that emphasize justice, healing, and resistance to oppression.'
    },
    {
      id: 'fundraising',
      date: 'May 1-10, 2024',
      title: 'Community Fundraising Campaign',
      description: 'Grassroots fundraising within Ithaca\'s Jewish community and allied solidarity networks.',
      image: '/images/murals/tikkun/view.jpeg',
      details: 'Raised over $3,000 through small donations from community members committed to Jewish liberation values and Palestinian solidarity.'
    },
    {
      id: 'base-layers',
      date: 'May 14, 2024',
      title: 'Foundation & Color Sacred Preparation',
      description: 'Laying foundational layers with intentional color choices reflecting Jewish spiritual traditions.',
      image: '/images/murals/tikkun/title.jpeg',
      details: 'Using traditional Jewish color symbolism - deep blues for divine presence, whites for purity of intention, and earth tones for grounding in justice work.'
    },
    {
      id: 'hebrew-calligraphy',
      date: 'May 16, 2024',
      title: 'Sacred Hebrew Text Implementation',
      description: 'Carefully painting the Hebrew phrase "צדק צדק תרדוף" (Tzedek Tzedek Tirdof) - "Justice, Justice You Shall Pursue".',
      image: '/images/murals/tikkun/hebrew.png',
      details: 'This powerful phrase from Deuteronomy 16:20 emphasizes the repetition of "justice" to show its absolute importance in Jewish ethics. The Hebrew calligraphy was formed with spiritual intention, guided by community members fluent in Hebrew to ensure proper sacred lettering techniques.'
    },
    {
      id: 'light-symbolism',
      date: 'May 18, 2024',
      title: 'Unity Through Ancient Symbols',
      description: 'Adding the 8-pointed Star of Ishtar, representing the shared Semitic roots before Judaism and Islam diverged.',
      image: '/images/murals/tikkun/roots.jpeg',
      details: 'The 8-pointed Star of Ishtar hangs from painted trees as a reminder of the common origins of Semitic peoples before the divergence into Judaism and Islam - before the Star of David or Islamic star. This ancient symbol represents the unity that once existed and is destined to manifest wherever it is pursued with intention.'
    },
    {
      id: 'lost-cat-finale',
      date: 'May 20, 2024',
      title: 'Lost Cat Safe Space Marker',
      description: 'The Lost Cat artist of Ithaca had previously visited the synagogue and left a painted license plate as a safe space marker.',
      image: '/images/murals/tikkun/lost-cat.jpeg',
      details: 'To finalize the mural, we drilled the Lost Cat artist\'s signature license plate into the wall, as all the children had requested this element. The plate serves as a symbol that this is a safe space for all people, regardless of background or identity.'
    },
    {
      id: 'sunbirds-resistance',
      date: 'May 21, 2024',
      title: 'Palestinian Sunbirds - Symbols of Resistance',
      description: 'The children chose to add sunbirds throughout the mural - black birds with aqua feathers representing resistance.',
      image: '/images/murals/tikkun/sunbird.png',
      details: 'Palestinian sunbirds have become powerful symbols of resistance and resilience. These small black birds with their distinctive iridescent blue-green feathers represent the enduring connection to the land that cannot be severed by occupation. The children specifically requested these birds as symbols of steadfastness and resistance to colonization.'
    },
    {
      id: 'arabic-signature',
      date: 'May 22, 2024',
      title: 'Artist Signature in Arabic',
      description: 'The mural is completed with Māyā\'s Palestinian last name signed in Arabic at the bottom: مايا مرعي (Maya Mir\'ie).',
      image: '/images/murals/tikkun/name-sign.jpeg',
      details: 'The Arabic signature represents solidarity between Semitic peoples and serves as a bridge between Jewish and Arab communities, emphasizing shared heritage and common struggles for justice and liberation.'
    },
    {
      id: 'documentary-feature',
      date: 'Later in 2024',
      title: 'Featured in "Love as Revolution"',
      description: 'The mural is featured in the documentary "Love as Revolution" by Maya Murry, where Michael Margolin is interviewed about creating Jewish justice murals with children.',
      image: '/images/murals/tikkun/doc.png',
      details: 'The documentary explores how art, spirituality, and liberation theology intersect to create transformative community experiences, capturing the sacred process of reclaiming Jewish identity through values of justice and solidarity.'
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
    src: '/images/murals/tikkun/final.jpeg',
    title: 'Tikkun V\'or - Healing Light',
    subtitle: 'Complete Mural',
    description: 'The completed mural representing Jewish liberation values, spirituality, and solidarity with Palestinian freedom. Created through community collaboration and sacred intention.',
    details: 'This mural stands as a powerful statement that authentic Jewish values align with liberation, not oppression. The Hebrew calligraphy, light symbolism, and community elements all work together to create a visual representation of what Jewish identity looks like when rooted in justice and solidarity rather than nationalism or colonialism.'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/tikkun-vor.MP4"
      videoStyle={{
        filter: 'brightness(0.25) contrast(1.05) saturate(1.15)'
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
          <h1 className={styles.muralTitle}>Tikkun V'or (תיקון אור) - Healing Light</h1>
          <div className={styles.muralMeta}>
            <span className={styles.metaItem}>Tikkun V'or Synagogue, Lansing, NY • 2024</span>
            <span className={styles.metaItem}>12ft × 8ft • Mixed Media on Wall</span>
            <span className={styles.metaItem}>Community-funded: $3,000+</span>
          </div>
          <p className={styles.muralDescription}>
            A collaborative Jewish liberation mural exploring themes of healing, justice, and spiritual 
            resistance. Created in partnership with Jewish spiritual leader Michael Margolin and the 
            Tikkun V'or community to reclaim Jewish identity through values of liberation and solidarity.
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
          <h2 className={styles.timelineTitle}>Sacred Creation Journey</h2>
          <p className={styles.timelineSubtitle}>
            How a community reclaimed Jewish values through art, spiritual resistance, and liberation theology
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
          <h3 className={styles.impactTitle}>Jewish Liberation Impact</h3>
          <div className={styles.impactGrid}>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>$3K+</span>
              <span className={styles.statLabel}>Community Raised</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>35+</span>
              <span className={styles.statLabel}>Jewish Contributors</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Generations Involved</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Sacred Partnership</span>
            </div>
          </div>
          <div className={styles.impactText}>
            <p>
              "Tikkun V'or - Healing Light" represents a profound reclaiming of Jewish identity through 
              values of justice, solidarity, and resistance to all forms of oppression. This mural 
              demonstrates how Jewish liberation theology can be authentically expressed through visual 
              art that honors spiritual tradition while challenging harmful appropriations of Jewish culture.
            </p>
            <p>
              Created in sacred partnership with Michael Margolin and the Tikkun V'or community, this work 
              embodies the principle that authentic Jewish values align with Palestinian liberation and 
              anti-colonial resistance. The mural serves as a beacon for Jews seeking to practice their 
              faith and culture in ways that promote justice, healing, and collective liberation rather 
              than nationalism or oppression.
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

export default TikkunVorMuralPage