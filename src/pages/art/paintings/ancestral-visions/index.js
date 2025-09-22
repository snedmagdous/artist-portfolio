// src/pages/art/paintings/ancestral-visions/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./ancestral-visions.module.css"

const AncestralVisionsPage = () => {
  const [language, setLanguage] = useState('EN')
  const [selectedPainting, setSelectedPainting] = useState(null)

// Main central painting
  const centralPainting = {
    id: 'ancestral-witness',
    title: 'Ancestral Witness',
    year: '2020-2024',
    medium: 'Oil on Canvas',
    dimensions: '24" x 36"',
    image: '/images/paintings/ancestral/ancestral.jpeg',
    description: 'A self-portrait born from one of the darkest periods of my life—chronic pain, depersonalization, and spiritual disconnection. This painting represents the recognition that even in profound suffering, protective forces aways surround us. The Arabic text "يا من بيدها مفاتيح الكون, اجعلي معاناتي ثواب لتحقيق كل ماتمنيته" translates to "O you who holds the keys to the universe, make my suffering a reward for achieving everything I have wished for."',
    symbolism: 'Completed in 2024 after a 4-year break from its start, this self-portrait features Palestinian tribal tattoos and ancestral butterflies representing all the women who came before, with blue geometric elements as windows to other dimensions of support.',
    inspiration: 'A desperate prayer made tangible—the belief that suffering can be transformed into preparation for what we\'ve asked the universe to provide.',
    isCentral: true
  }

  // Ray paintings around the sun
  const rayPaintings = [
    {
      id: 'water-keeper',
      title: 'Water Keeper',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '18" x 24"',
      image: '/images/paintings/ancestral/water-love.jpeg',
      description: 'The first painting I created after not touching a paintbrush for four years. This marked my return to art and my freedom from the fear of putting brushes down again. The Water Keeper is a spiritual guardian who protects herself, her environment, and those she loves. She embodies the version of myself I was aspiring to become: fierce, sensual, unbothered, patient, and soft all simultaneously, with water as the element that flows through it all.',
      symbolism: 'Water represents fluidity, healing, and the ability to adapt while maintaining essential nature. The figure\'s ornate jewelry and markings suggest both protection and connection to ancestral power.',
      inspiration: 'The breakthrough moment of returning to art, embodying the protective yet flowing energy I wanted to cultivate within myself.',
      angle: 270 // Left
    },
    {
      id: 'fire-bearer',
      title: 'Fire Bearer',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '36" x 48"',
      image: '/images/paintings/ancestral/throne-of-fire.jpeg',
      description: 'Inspired by multi-armed Indian goddesses, this painting shows a woman luminous white eyes, energetically in control of her body and the environment, sunset, and fire around her. This represents a reclamation of rage — allowing oneself to feel anger in order to exorcise it and release all versions of the self once created for survival. The Arabic text "استعيد ما يخصني" translates to "I return what is mine."',
      symbolism: 'Multiple arms suggest the goddess\'s ability to handle multiple aspects of transformation simultaneously. Fire represents purification through destruction, while the swirling background shows reality bending to her will.',
      inspiration: 'The recognition that anger, when properly channeled, becomes a tool for reclaiming what has been lost or stolen from us.',
      angle: 0 // Top
    },
    {
      id: 'forest-sovereign',
      title: 'Forest Sovereign',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '24" x 32"',
      image: '/images/paintings/ancestral/forest-prayers.jpeg',
      description: 'A celebration of reclaimed bodily autonomy after healing from debilitating chronic pain and reproductive trauma. The woman shines in her element—sensual but completely unbothered, alone, and thriving as she navigates this forest of souls. She serves as protector and sovereign of these lands, representing the power that comes from finally feeling at home in one\'s own body.',
      symbolism: 'The lush forest represents fertile ground reclaimed, while blue butterflies symbolize transformation and spiritual guidance. Her golden adornments suggest she has crowned herself sovereign of her own domain.',
      inspiration: 'The profound relief and power that comes with bodily autonomy, the ability to exist sensually without apology or fear.',
      angle: 45 // Top-right
    },
    {
      id: 'moon-daughter',
      title: 'Moon Daughter',
      year: '2024',
      medium: 'Oil on Canvas',
      dimensions: '20" x 28"',
      image: '/images/paintings/ancestral/moon-daughter.jpeg',
      description: 'A reclamation of softness and femininity, representing my journey back to feeling like someone\'s daughter again. This painting counters a poem I once wrote called "Nobody\'s Daughter" during a time when chronic pain left me feeling spiritually mismatched from all earthly and familial ties. Moon Daughter signifies reclaiming my status as daughter—of having come from somewhere and thus going somewhere, reconnecting with my lineage and my right to tenderness.',
      symbolism: 'The sunset landscape suggests transition and new beginnings, while her contemplative pose reflects the quiet strength found in accepting one\'s place in the continuum of generations.',
      inspiration: 'The healing realization that I belonged somewhere, that I was still someone\'s daughter despite feeling abandoned during my darkest healing journey.',
      angle: 135 // Bottom-right
    }
  ]


  // Combine all paintings for modal use
  const allPaintings = [centralPainting, ...rayPaintings]

  const openPaintingModal = (painting) => {
    setSelectedPainting(painting)
    document.body.style.overflow = 'hidden'
  }

  const closePaintingModal = () => {
    setSelectedPainting(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/ancestral-visions.MP4"
      videoStyle={{
        filter: 'brightness(0.24) contrast(1.16) saturate(1.2)'
      }}
    >
      <section className={styles.ancestralVisionsPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/paintings" className={styles.backLink}>
            Back to Paintings
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.seriesHero}>
          <h1 className={styles.seriesTitle}>Ancestral Visions</h1>
          <div className={styles.seriesInfo}>
            <span className={styles.seriesCount}>5 Pieces</span>
            <span className={styles.seriesYear}>2024</span>
            <span className={styles.seriesMedium}>Oil on Canvas</span>
          </div>
          <div className={styles.seriesDescription}>
            <p>
              A five-painting chronicle of transformation spanning four years, documenting
              the journey from spiritual disconnection and chronic pain to reclaimed power
              and embodied presence.
            </p>
            <p>
              Each piece serves as a milestone in healing—from breaking four years of creative
              silence to reclaiming bodily autonomy, from channeling necessary rage to
              reconnecting with ancestral protection.
            </p>
          </div>
        </div>

        {/* Sun Gallery */}
        <div className={styles.sunGallery}>
          <div className={styles.sunContainer}>
            {/* Central Sun Circle - Main Painting */}
            <div
              className={styles.centralSun}
              onClick={() => openPaintingModal(centralPainting)}
            >
              <div className={styles.sunGlow}></div>
              <div
                className={styles.sunImage}
                style={{
                  backgroundImage: `url(${centralPainting.image})`
                }}
              ></div>
              <div className={styles.sunInfo}>
                <h3 className={styles.sunTitle}>{centralPainting.title}</h3>
                <span className={styles.sunYear}>{centralPainting.year}</span>
              </div>
            </div>

            {/* Small Circles Around the Main Circle */}
            <div
              className={styles.smallCircle1}
              onClick={() => openPaintingModal(rayPaintings[0])}
            >
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${rayPaintings[0].image})` }}
              ></div>
              <div className={styles.circleText}>
                <div>{rayPaintings[0].title}</div>
                <div>{rayPaintings[0].year}</div>
              </div>
            </div>

            <div
              className={styles.smallCircle2}
              onClick={() => openPaintingModal(rayPaintings[1])}
            >
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${rayPaintings[1].image})` }}
              ></div>
              <div className={styles.circleText}>
                <div>{rayPaintings[1].title}</div>
                <div>{rayPaintings[1].year}</div>
              </div>
            </div>

            <div
              className={styles.smallCircle3}
              onClick={() => openPaintingModal(rayPaintings[2])}
            >
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${rayPaintings[2].image})` }}
              ></div>
              <div className={styles.circleText}>
                <div>{rayPaintings[2].title}</div>
                <div>{rayPaintings[2].year}</div>
              </div>
            </div>

            <div
              className={styles.smallCircle4}
              onClick={() => openPaintingModal(rayPaintings[3])}
            >
              <div
                className={styles.circleImage}
                style={{ backgroundImage: `url(${rayPaintings[3].image})` }}
              ></div>
              <div className={styles.circleText}>
                <div>{rayPaintings[3].title}</div>
                <div>{rayPaintings[3].year}</div>
              </div>
            </div>

          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>Series Statement</h3>
          <div className={styles.statementContent}>
            <p>
              This series spans four transformative years—beginning in 2020 during my darkest 
              period of chronic pain, depersonalization, and spiritual disconnection following 
              a severe bike accident that left me with a black eye and deeper wounds that couldn't 
              be seen. For four years, I couldn't touch a paintbrush, paralyzed by the fear that 
              if I put it down, I might never pick it up again.
            </p>
            <p>
              The journey began with "Water Keeper" in 2024—my breakthrough painting that broke 
              the four-year silence and freed me from the creative lapse. What followed was 
              a rapid succession of works documenting my healing: "Forest Sovereign" celebrating 
              my reclamation of bodily autonomy after years of debilitating chronic pain and 
              reproductive trauma; "Moon Daughter" reclaiming the softness and status of 
              daughter I had lost when pain made me feel like "nobody's daughter," misunderstood 
              by my inability to articulate the depth of my spiritual, mental, and physical devastation.
            </p>
            <p>
              "Fire Bearer" channels the necessary rage—allowing myself to feel anger in order 
              to exorcise it, to release all versions of myself I had created just to survive. 
              Finally, I returned to complete "Ancestral Witness," begun in 2020 as a desperate 
              prayer during my spiritual untethering, now finished with Palestinian tribal tattoos 
              and ancestral butterflies—a testament that protective forces surrounded me even 
              in my deepest darkness.
            </p>
            <p>
              Each painting represents a different facet of reclamation: rage transformed into 
              power, bodily autonomy restored, femininity and heritage connections renewed, and 
              spiritual protection recognized. Together, they map a journey from survival to 
              sovereignty, from disconnection to embodied presence, from nobody's daughter 
              to a woman who can finally be fierce, sensual, unbothered, patient, and soft 
              simultaneously.
            </p>
            <span className={styles.statementSignature}>— Artist, 2024</span>
          </div>
        </div>

        {/* Modal for Selected Painting */}
        {selectedPainting && (
          <div className={styles.paintingModal} onClick={closePaintingModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closePaintingModal}>
                ×
              </button>

              <div className={styles.modalLayout}>
                <div className={styles.modalImage}>
                  <img
                    src={selectedPainting.image}
                    alt={selectedPainting.title}
                    className={styles.paintingImage}
                  />
                </div>

                <div className={styles.modalInfo}>
                  <h2 className={styles.modalTitle}>{selectedPainting.title}</h2>

                  <div className={styles.modalDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Year:</span>
                      <span className={styles.detailValue}>{selectedPainting.year}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Medium:</span>
                      <span className={styles.detailValue}>{selectedPainting.medium}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Dimensions:</span>
                      <span className={styles.detailValue}>{selectedPainting.dimensions}</span>
                    </div>
                  </div>

                  <div className={styles.modalDescription}>
                    <h4>Description</h4>
                    <p>{selectedPainting.description}</p>
                  </div>

                  <div className={styles.modalSymbolism}>
                    <h4>Symbolism</h4>
                    <p>{selectedPainting.symbolism}</p>
                  </div>

                  <div className={styles.modalInspiration}>
                    <h4>Inspiration</h4>
                    <p>{selectedPainting.inspiration}</p>
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

export default AncestralVisionsPage