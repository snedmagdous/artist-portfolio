// src/pages/art/illustrations/blueprint/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./blueprint-rebellion.module.css"

const BlueprintRebellionPage = () => {
  const [language, setLanguage] = useState('EN')
  const [selectedSketch, setSelectedSketch] = useState(null)

  // Sketch data with new titles based on the illustration analysis
  const sketches = [
    {
      id: 'sketch-013',
      title: 'Intimate Bond',
      year: '2024',
      image: '/images/illustration/blueprint/intimate.jpeg',
      description: 'The sacred space between two souls in perfect understanding.',
      dimensions: '9" x 12"',
      medium: 'Pen and ink',
      brightness: 0.8,
      saturation: 0.8
    },
    {
      id: 'sketch-017',
      title: 'Earth Connection',
      year: '2024',
      image: '/images/illustration/blueprint/earth.jpeg',
      description: 'Drawing strength from the ancient wisdom of the land.',
      dimensions: '9" x 12"',
      medium: 'Mixed media',
      brightness: 0.8,
      contrast: 1.2,
      saturation: 1.1
    },
    {
      id: 'sketch-018',
      title: 'Wild Spirit',
      year: '2024',
      image: '/images/illustration/blueprint/wild-spirit.jpeg',
      description: 'The untamed essence that refuses to be contained.',
      dimensions: '11" x 14"',
      medium: 'Charcoal and conte',
      brightness: 1.0,
      saturation: 1.2
    },
    {
      id: 'sketch-006',
      title: 'Fragments of Memory',
      year: '2024',
      image: '/images/illustration/blueprint/fragments.jpeg',
      description: 'Pieces of the past that shape our present understanding.',
      dimensions: '10" x 14"',
      medium: 'Graphite and charcoal',
      brightness: 0.9,
      saturation: 1.2,
      contrast: 1.2
    },
    // {
    //   id: 'sketch-015',
    //   title: 'Peaceful Rest',
    //   year: '2024',
    //   image: '/images/illustration/blueprint/peaceful-rest.jpeg',
    //   description: 'The restorative power of stillness and surrender.',
    //   dimensions: '11" x 15"',
    //   medium: 'Graphite and wash'
    // },
    {
      id: 'sketch-001',
      title: 'Contemplation in Stillness',
      year: '2024',
      image: '/images/illustration/blueprint/contem.jpeg',
      description: 'A moment of deep inner reflection, gathering wisdom before taking action.',
      dimensions: '9" x 12"',
      medium: 'Charcoal on paper',
      brightness: 1.1,
      saturation: 1.1
    },
    {
      id: 'sketch-012',
      title: 'Her Love',
      year: '2024',
      image: '/images/illustration/blueprint/lov.jpeg',
      description: 'The fierce, unconditional love that shapes and protects.',
      dimensions: '12" x 16"',
      medium: 'Charcoal and pastel',
      saturation: 1.1
    },
    {
      id: 'sketch-019',
      title: 'Warrior\'s Stance',
      year: '2024',
      image: '/images/illustration/blueprint/warrior.jpeg',
      description: 'Ready for battle, armed with truth and conviction.',
      dimensions: '8" x 10"',
      medium: 'Ink and charcoal',
      saturation: 1.2,
      brightness: 0.8
    },
    {
      id: 'sketch-002',
      title: 'Protective Embrace',
      year: '2024',
      image: '/images/illustration/blueprint/embrace.jpeg',
      description: 'The strength found in vulnerability and the power of holding space for others.',
      dimensions: '11" x 14"',
      medium: 'Graphite and ink',
      saturation: 1.2,
      brightness: 1.3
    },
    {
      id: 'sketch-027',
      title: 'Sacred Stories',
      year: '2024',
      image: '/images/illustration/blueprint/sacred.jpeg',
      description: 'The narratives that give meaning to our existence.',
      dimensions: '8" x 10"',
      medium: 'Pen and charcoal',
      brightness: 0.9
    },
    {
      id: 'sketch-003',
      title: 'Guardian\'s Watch',
      year: '2024',
      image: '/images/illustration/blueprint/guardian.jpeg',
      description: 'Standing sentinel over what matters most, fierce in protection.',
      dimensions: '8" x 10"',
      medium: 'Pen and wash',
      saturation: 1.2,
      brightness: 1.3
    },
    {
      id: 'sketch-004',
      title: 'Portrait of Resilience',
      year: '2024',
      image: '/images/illustration/blueprint/resilience.jpeg',
      description: 'The quiet strength that endures through every storm.',
      dimensions: '12" x 16"',
      medium: 'Mixed media',
      saturation: 1.0,
      brightness: 1.2
    },
    {
      id: 'sketch-005',
      title: 'Ancestral Bonds',
      year: '2024',
      image: '/images/illustration/blueprint/ancestral.jpeg',
      description: 'The unbreakable connections that span generations and guide our path.',
      dimensions: '9" x 12"',
      medium: 'Charcoal and conte',
      saturation: 1.3,
      brightness: 1.1
    },
    {
      id: 'sketch-007',
      title: 'Strength in Solitude',
      year: '2024',
      image: '/images/illustration/blueprint/strength.jpeg',
      description: 'Finding power in the quiet moments alone with oneself.',
      dimensions: '11" x 15"',
      medium: 'Ink and watercolor'
    },
    {
      id: 'sketch-008',
      title: 'Cultural Identity',
      year: '2024',
      image: '/images/illustration/blueprint/identity.jpeg',
      description: 'Honoring the traditions and symbols that define who we are.',
      dimensions: '9" x 12"',
      medium: 'Charcoal and pastel'
    },
    {
      id: 'sketch-009',
      title: 'Spiritual Grounding',
      year: '2024',
      image: '/images/illustration/blueprint/spiritual.jpeg',
      description: 'Connection to the earth and the sacred within.',
      dimensions: '9" x 12"',
      medium: 'Charcoal on paper'
    },
    {
      id: 'sketch-010',
      title: 'Words of Wisdom',
      year: '2024',
      image: '/images/illustration/blueprint/words.jpeg',
      description: 'The stories and teachings that carry truth across time.',
      dimensions: '11" x 14"',
      medium: 'Ink and mixed media',
      saturation: 0.8
    },
    {
      id: 'sketch-011',
      title: 'Tender Connection',
      year: '2024',
      image: '/images/illustration/blueprint/tender.jpeg',
      description: 'The gentle intimacy that heals and nurtures the soul.',
      dimensions: '8" x 10"',
      medium: 'Graphite and charcoal'
    },
    {
      id: 'sketch-014',
      title: 'Floral Embrace',
      year: '2024',
      image: '/images/illustration/blueprint/floral.jpeg',
      description: 'Finding beauty and growth even in the midst of struggle.',
      dimensions: '10" x 14"',
      medium: 'Watercolor and ink',
      saturation: 1.3,
      brightness: 0.8
    },
    {
      id: 'sketch-016',
      title: 'Standing Strong',
      year: '2024',
      image: '/images/illustration/blueprint/standing-strong.jpeg',
      description: 'Unwavering in purpose, rooted in authentic power.',
      dimensions: '9" x 12"',
      medium: 'Charcoal on paper',
      saturation: 1.2,
      brightness: 0.95
    },
    {
      id: 'sketch-021',
      title: 'Truth Speaker',
      year: '2024',
      image: '/images/illustration/blueprint/truth-speaker.jpeg',
      description: 'The courage to voice what others fear to acknowledge.',
      dimensions: '9" x 12"',
      medium: 'Pen and watercolor'
    },
    {
      id: 'sketch-022',
      title: 'Joyful Expression',
      year: '2024',
      image: '/images/illustration/blueprint/joyful.jpeg',
      description: 'The radiant energy of unburdened happiness.',
      dimensions: '10" x 14"',
      medium: 'Mixed media'
    },
    {
      id: 'sketch-023',
      title: 'Natural Flow',
      year: '2024',
      image: '/images/illustration/blueprint/natural-flow.jpeg',
      description: 'Moving with the rhythm of life, graceful and free.',
      dimensions: '11" x 15"',
      medium: 'Charcoal and pastel'
    },
    {
      id: 'sketch-024',
      title: 'Ancestral Wisdom',
      year: '2024',
      image: '/images/illustration/blueprint/ancient.jpeg',
      description: 'Carrying forward the knowledge of those who came before.',
      dimensions: '9" x 12"',
      medium: 'Ink and wash'
    },
    {
      id: 'sketch-025',
      title: 'Dreams and Visions',
      year: '2024',
      image: '/images/illustration/blueprint/dreams.jpeg',
      description: 'Glimpses of what could be, painted in hope and possibility.',
      dimensions: '9" x 12"',
      medium: 'Watercolor and ink'
    },
    {
      id: 'sketch-026',
      title: 'Mythic Journey',
      year: '2024',
      image: '/images/illustration/blueprint/mythic.jpeg',
      description: 'The hero\'s path through transformation and self-discovery.',
      dimensions: '11" x 14"',
      medium: 'Mixed media',
      saturation: 1.2,
      brightness: 1.1
    },
    {
      id: 'sketch-028',
      title: 'Ceremonial Dance',
      year: '2024',
      image: '/images/illustration/blueprint/ceremonial.jpeg',
      description: 'Movement as prayer, celebration, and connection to the divine.',
      dimensions: '12" x 16"',
      medium: 'Charcoal and pastel'
    }
  ]

  const openSketchModal = (sketch) => {
    setSelectedSketch(sketch)
    document.body.style.overflow = 'hidden'
  }

  const closeSketchModal = () => {
    setSelectedSketch(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/library.MP4"
      videoStyle={{
        filter: 'brightness(0.35) contrast(1.2) saturate(1.2)'
      }}
    >
      <section className={styles.blueprintRebellionPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/illustrations" className={styles.backLink}>
            Back to Illustrations
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.seriesHero}>
          <h1 className={styles.seriesTitle}>Blueprint Rebellion</h1>
          <div className={styles.seriesInfo}>
            <span className={styles.seriesCount}>{sketches.length} Sketches</span>
            <span className={styles.seriesYear}>2024</span>
            <span className={styles.seriesMedium}>Mixed Drawing Media</span>
          </div>
          <p className={styles.seriesDescription}>
            Raw sketches capturing the full spectrum of human experience and spiritual connection. These drawings serve as
            blueprints for understanding—foundational studies where stories are first conceived,
            where strength is first sketched, where the journey of self-discovery begins with a single line.
            Each piece explores themes of identity, resilience, and the sacred bonds that connect us all.
          </p>
        </div>

        {/* Pinterest-Style Gallery */}
        <div className={styles.sketchGallery}>
          <div className={styles.galleryGrid}>
            {sketches.map((sketch, index) => (
              <div
                key={sketch.id}
                className={`${styles.sketchCard} ${styles[`card-${(index % 4) + 1}`]}`}
                onClick={() => openSketchModal(sketch)}
              >
                <div className={styles.sketchImageContainer}>
                  <img
                    src={sketch.image}
                    alt={sketch.title}
                    className={styles.sketchImage}
                    style={{
                      filter: `brightness(${sketch.brightness || 1.0}) saturate(${sketch.saturation || 1.0}) contrast(${sketch.contrast || 1.0})`
                    }}
                  />
                  <div className={styles.sketchOverlay}>
                    <h3 className={styles.sketchTitle}>{sketch.title}</h3>
                    <span className={styles.sketchYear}>{sketch.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>On Blueprint Rebellion</h3>
          <div className={styles.statementContent}>
            <p>
              Every meaningful work begins with a sketch. Every transformation begins with an honest look inward.
              These drawings capture the essence of human experience in its rawest form—
              the tilt of contemplation, the strength found in vulnerability,
              the quiet power that exists in moments of deep connection.
            </p>
            <p>
              They are blueprints not just for future paintings, but for a way of seeing the sacred
              in the everyday, the profound in the personal. Each line is an act of witnessing,
              each shadow a space where truth can emerge and authenticity can breathe.
              Together, they form a visual diary of resilience, wisdom, and the eternal dance
              between individual identity and collective belonging.
            </p>
            <span className={styles.statementSignature}>— Maya Murry, 2024</span>
          </div>
        </div>

        {/* Modal for Selected Sketch */}
        {selectedSketch && (
          <div className={styles.sketchModal} onClick={closeSketchModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeSketchModal}>
                ×
              </button>

              <div className={styles.modalLayout}>
                <div className={styles.modalImage}>
                  <img
                    src={selectedSketch.image}
                    alt={selectedSketch.title}
                    className={styles.modalSketchImage}
                  />
                </div>

                <div className={styles.modalInfo}>
                  <h2 className={styles.modalTitle}>{selectedSketch.title}</h2>

                  <div className={styles.modalDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Year:</span>
                      <span className={styles.detailValue}>{selectedSketch.year}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Medium:</span>
                      <span className={styles.detailValue}>{selectedSketch.medium}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Dimensions:</span>
                      <span className={styles.detailValue}>{selectedSketch.dimensions}</span>
                    </div>
                  </div>

                  <div className={styles.modalDescription}>
                    <h4>Vision</h4>
                    <p>{selectedSketch.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default BlueprintRebellionPage