// src/pages/art/collages/rage/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./rage-collage.module.css"

const RageCollagePage = () => {
  const [language, setLanguage] = useState('EN')
  const [activeZone, setActiveZone] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedElement, setSelectedElement] = useState(null)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Define interactive zones within the collage
  const collageZones = [
    {
      id: 'political-chaos',
      title: 'Political Theater',
      x: 15, y: 20, width: 30, height: 25,
      description: 'Politicians and media figures create spectacle while systems crumble',
      elements: ['Trump imagery', 'Political talking heads', 'Media personalities'],
      analysis: 'The upper portion centers on political figures as entertainment, highlighting how governance has become performative rather than functional.',
      zoomImage: '/images/collage/rage/sketch.jpg'
    },
    {
      id: 'rage-center',
      title: 'The Heart of Rage',
      x: 40, y: 35, width: 20, height: 30,
      description: 'Central "RAGE" text with classical art fragments',
      elements: ['Bold RAGE typography', 'Classical nude figures', 'Renaissance paintings'],
      analysis: 'Classical beauty intersects with modern fury - the collision of high art ideals with contemporary breakdown.',
      zoomImage: '/images/collage/rage/completed.jpg'
    },
    {
      id: 'media-manipulation',
      title: 'Information Warfare',
      x: 65, y: 15, width: 30, height: 35,
      description: 'Headlines, news clips, and manufactured outrage',
      elements: ['News headlines', 'TV screenshots', 'Sensationalist text'],
      analysis: 'Media fragments show how information becomes weaponized, creating endless cycles of manufactured outrage.',
      zoomImage: '/images/collage/rage/progress.jpg'
    },
    {
      id: 'systemic-violence',
      title: 'Institutional Harm',
      x: 5, y: 50, width: 40, height: 35,
      description: 'Images revealing how systems harm the vulnerable',
      elements: ['Child welfare headlines', 'Prison imagery', 'Surveillance photos'],
      analysis: 'The lower left exposes how institutions designed to protect often become sources of harm, especially for marginalized communities.',
      zoomImage: '/images/collage/rage/start.jpg'
    },
    {
      id: 'consumer-culture',
      title: 'Capitalist Spectacle',
      x: 50, y: 70, width: 45, height: 25,
      description: 'Corporate logos, advertisements, and consumption imagery',
      elements: ['Brand logos', 'Advertisement fragments', 'Consumer goods'],
      analysis: 'Commercial imagery reveals how capitalism commodifies even our anger, turning rage into another product to be consumed.',
      zoomImage: '/images/collage/rage/bed.jpg'
    },
    {
      id: 'historical-echoes',
      title: 'Cyclical History',
      x: 70, y: 45, width: 25, height: 40,
      description: 'Historical figures and events that mirror present crises',
      elements: ['Historical photographs', 'Past political figures', 'Archive imagery'],
      analysis: 'Historical elements suggest these patterns of rage and breakdown are not new - they echo through American history.',
      zoomImage: '/images/collage/rage/final.png'
    }
  ]

  const creationStages = [
    {
      id: 'material-gathering',
      title: 'Material Archaeology',
      description: 'Collecting fragments from magazines, newspapers, and digital prints spanning 2020-2024',
      materials: ['Political magazines', 'News printouts', 'Art history books', 'Digital screenshots'],
      process: 'Like an archaeologist of the present moment, gathering evidence of societal breakdown from multiple media sources.'
    },
    {
      id: 'emotional-mapping',
      title: 'Emotional Cartography',
      description: 'Arranging elements by emotional intensity rather than logical narrative',
      materials: ['Color intensity', 'Image scale', 'Spatial relationships'],
      process: 'Creating zones of feeling - areas where anger builds, peaks, and transforms into different emotional states.'
    },
    {
      id: 'layered-meaning',
      title: 'Meaning Archaeology',
      description: 'Building layers where different time periods and contexts intersect',
      materials: ['Historical overlays', 'Contemporary commentary', 'Classical references'],
      process: 'Each layer reveals new meanings - what appears as chaos on the surface contains deliberate patterns of critique.'
    },
    {
      id: 'visual-synthesis',
      title: 'Synthesis of Rage',
      description: 'Integrating all elements into a cohesive statement about American anger',
      materials: ['Final adhesive layers', 'Protective coating', 'Intentional tears and overlaps'],
      process: 'The final piece becomes a mirror - viewers see their own relationship to rage reflected back.'
    }
  ]

  const seriesImages = [
    {
      id: 'institutional',
      src: '/images/collage/rage/sketch.jpg',
      title: 'Institutional Breakdown',
      description: 'Focusing on educational and healthcare system failures',
      details: 'This piece examines how institutional systems that were designed to support and protect communities often become sources of trauma. Through layered imagery of school hallways, hospital corridors, and bureaucratic documents, it reveals the violence embedded in everyday institutional interactions.',
      medium: 'Mixed media on paper',
      size: '18" × 24"',
      year: '2024'
    },
    {
      id: 'media',
      src: '/images/collage/rage/completed.jpg',
      title: 'Media Saturation',
      description: 'Information overload and attention economy',
      details: 'A dense collage exploring how media consumption shapes our emotional landscape. News headlines, social media fragments, and advertising imagery create a visual cacophony that mirrors the overwhelming nature of digital information streams.',
      medium: 'Digital prints and magazine clippings',
      size: '20" × 30"',
      year: '2024'
    },
    {
      id: 'economic',
      src: '/images/collage/rage/progress.jpg',
      title: 'Economic Violence',
      description: 'How financial systems create and exploit desperation',
      details: 'Using bank statements, eviction notices, and corporate logos, this piece visualizes the ways economic systems extract wealth from vulnerable communities. The composition shows money flowing upward while human dignity flows downward.',
      medium: 'Paper documents and paint',
      size: '24" × 36"',
      year: '2024'
    }
  ]

  const openModal = (element) => {
    setSelectedElement(element)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedElement(null)
    setActiveZone(null)
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
    setImageModalOpen(true)
  }

  const closeImageModal = () => {
    setImageModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/rag.MP4"
      videoStyle={{
        filter: 'brightness(0.3) contrast(1.2) saturate(1.6)'
      }}
    >
      <section className={styles.collagePage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/collages" className={styles.backLink}>
            Back to Collages
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.collageHero}>
          <h1 className={styles.collageTitle}>RAGE</h1>
          <div className={styles.collageMeta}>
            <span className={styles.metaItem}>Mixed Media on Paper • 2024</span>
            <span className={styles.metaItem}>24" × 36" • 7 Pieces Collection</span>
            <span className={styles.metaItem}>Political Commentary Series</span>
          </div>
          <p className={styles.collageDescription}>
            A visceral exploration of American anger, layering political imagery, classical art, and media fragments 
            to examine how rage functions as both destructive force and catalyst for change in contemporary society.
          </p>
        </div>

        {/* Interactive Collage Viewer */}
        <div className={styles.interactiveSection}>
          <h2 className={styles.sectionTitle}>Explore the Layers</h2>
          <p className={styles.sectionSubtitle}>Click on different areas to uncover hidden meanings and artistic choices</p>
          
          <div className={styles.collageViewer}>
            {/* Left Panel */}
            <div className={styles.leftPanel}>
              {activeZone && ['political-chaos', 'systemic-violence', 'rage-center'].includes(activeZone) && (
                <div className={`${styles.sidePanel} ${styles.active}`}>
                  {(() => {
                    const zone = collageZones.find(z => z.id === activeZone)
                    return (
                      <div>
                        <div className={styles.sidePanelZoom}>
                          <img src={zone.zoomImage} alt={`${zone.title} detail`} />
                        </div>
                        <h3 className={styles.sidePanelTitle}>{zone.title}</h3>
                        <p className={styles.sidePanelDescription}>{zone.description}</p>
                        <div className={styles.sidePanelElements}>
                          <h4>Visual Elements:</h4>
                          <ul>
                            {zone.elements.map((element, index) => (
                              <li key={index}>{element}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.sidePanelAnalysis}>
                          {zone.analysis}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              )}
            </div>

            {/* Center - Main Collage */}
            <div className={styles.collageContainer}>
              <img
                src="/images/collage/rage/final.png"
                alt="RAGE collage - full view"
                className={styles.mainCollageImage}
              />

              {/* Interactive zones overlay */}
              <div className={styles.interactiveOverlay}>
                {collageZones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`${styles.zoneMarker} ${activeZone === zone.id ? styles.activeZone : ''}`}
                    style={{
                      left: `${zone.x}%`,
                      top: `${zone.y}%`,
                      width: `${zone.width}%`,
                      height: `${zone.height}%`
                    }}
                    onMouseEnter={() => setActiveZone(zone.id)}
                    onMouseLeave={() => setActiveZone(null)}
                    onClick={() => openModal(zone)}
                  >
                    <div className={styles.zoneInfo}>
                      <h4>{zone.title}</h4>
                      <p>{zone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className={styles.rightPanel}>
              {activeZone && ['media-manipulation', 'consumer-culture', 'historical-echoes'].includes(activeZone) && (
                <div className={`${styles.sidePanel} ${styles.sidePanelRight} ${styles.active}`}>
                  {(() => {
                    const zone = collageZones.find(z => z.id === activeZone)
                    return (
                      <div>
                        <div className={styles.sidePanelZoom}>
                          <img src={zone.zoomImage} alt={`${zone.title} detail`} />
                        </div>
                        <h3 className={styles.sidePanelTitle}>{zone.title}</h3>
                        <p className={styles.sidePanelDescription}>{zone.description}</p>
                        <div className={styles.sidePanelElements}>
                          <h4>Visual Elements:</h4>
                          <ul>
                            {zone.elements.map((element, index) => (
                              <li key={index}>{element}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.sidePanelAnalysis}>
                          {zone.analysis}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Collection Context */}
        <div className={styles.collectionContext}>
          <h3 className={styles.contextTitle}>RAGE Collection Series</h3>
          <div className={styles.seriesGrid}>
            {seriesImages.map((image) => (
              <div
                key={image.id}
                className={styles.seriesPreview}
                onClick={() => openImageModal(image)}
                style={{ cursor: 'pointer' }}
              >
                <img src={image.src} alt={image.title} />
                <div className={styles.seriesContent}>
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/art/collages" className={styles.viewAllBtn}>
            View All Collage Collections
          </Link>
        </div>

        {/* Creation Process */}
        <div className={styles.processSection}>
          <h2 className={styles.sectionTitle}>Archaeology of Anger</h2>
          <p className={styles.sectionSubtitle}>How rage becomes art through methodical deconstruction and reconstruction</p>
          
          <div className={styles.processTimeline}>
            {creationStages.map((stage, index) => (
              <div key={stage.id} className={styles.processStage}>
                <div className={styles.stageNumber}>{index + 1}</div>
                <div className={styles.stageContent}>
                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDescription}>{stage.description}</p>
                  <div className={styles.stageMaterials}>
                    <h4>Materials & Techniques:</h4>
                    <div className={styles.materialsList}>
                      {stage.materials.map((material, i) => (
                        <span key={i} className={styles.materialTag}>{material}</span>
                      ))}
                    </div>
                  </div>
                  <p className={styles.stageProcess}>{stage.process}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>On Rage as Raw Material</h3>
          <div className={styles.statementContent}>
            <p>
              Rage is perhaps the most honest emotion in American politics today. It cuts through pretense, 
              reveals true priorities, and strips away the comfortable myths we tell ourselves about progress 
              and civility. But rage is also dangerous - it can be manufactured, weaponized, and directed 
              toward the wrong targets.
            </p>
            <p>
              This collage excavates the visual language of contemporary American anger. By layering political 
              theater with classical beauty, media manipulation with genuine suffering, I'm asking: What is 
              legitimate rage versus manufactured outrage? When does anger become a tool of oppression versus 
              liberation?
            </p>
            <p>
              The process itself mirrors how rage functions - collecting fragments, building intensity, 
              creating explosive moments where disparate elements collide. The viewer must navigate this 
              emotional landscape just as we navigate the daily bombardment of images designed to provoke reaction.
            </p>
            <p>
              Indigenous futurism asks us to imagine beyond the cycles that have trapped us. Perhaps rage, 
              properly understood and channeled, becomes the energy needed to break free from systems that 
              no longer serve life. But first, we must understand what we're really angry about.
            </p>
            <span className={styles.statementSignature}>— On the necessity of difficult emotions, 2024</span>
          </div>
        </div>

        {/* Modal for detailed analysis */}
        {modalOpen && selectedElement && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <div className={styles.modalLayout}>
                <div className={styles.modalInfo}>
                  <h2>{selectedElement.title}</h2>
                  <p className={styles.modalDescription}>{selectedElement.description}</p>
                  
                  {selectedElement.elements && (
                    <div className={styles.modalElements}>
                      <h3>Visual Elements</h3>
                      <ul>
                        {selectedElement.elements.map((element, index) => (
                          <li key={index}>{element}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {selectedElement.analysis && (
                    <div className={styles.modalAnalysis}>
                      <h3>Artistic Analysis</h3>
                      <p>{selectedElement.analysis}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Detail Modal */}
        {imageModalOpen && selectedImage && (
          <div className={styles.modal} onClick={closeImageModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeImageModal}>×</button>
              <div className={styles.imageModalLayout}>
                <div className={styles.imageModalImage}>
                  <img src={selectedImage.src} alt={selectedImage.title} />
                </div>
                <div className={styles.imageModalInfo}>
                  <h2>{selectedImage.title}</h2>
                  <div className={styles.imageModalMeta}>
                    <span>{selectedImage.medium}</span>
                    <span>{selectedImage.size}</span>
                    <span>{selectedImage.year}</span>
                  </div>
                  <p className={styles.imageModalDescription}>{selectedImage.description}</p>
                  <div className={styles.imageModalDetails}>
                    <h3>Artist Statement</h3>
                    <p>{selectedImage.details}</p>
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

export default RageCollagePage