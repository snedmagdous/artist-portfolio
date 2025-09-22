// src/pages/art/collages/monster/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./monster-collage.module.css"

const MonsterCollagePage = () => {
  const [language, setLanguage] = useState('EN')
  const [activeLayer, setActiveLayer] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [evolutionPhase, setEvolutionPhase] = useState(0)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Define thematic layers within the collage
  const thematicLayers = [
    {
      id: 'evolution-timeline',
      title: 'The Arc of Becoming',
      x: 35, y: 25, width: 30, height: 20,
      description: 'Human evolution from primitive to modern - but what have we truly evolved toward?',
      elements: ['Evolution sequence', 'Primitive figures', 'Modern humans'],
      analysis: 'The evolution timeline questions whether our development has been progress or devolution - are we becoming more human or more monstrous?',
      theme: 'biological',
      depth: 'surface',
      zoomImage: '/images/collage/monster/detail.jpg'
    },
    {
      id: 'classical-ideals',
      title: 'Marble Dreams',
      x: 15, y: 15, width: 25, height: 35,
      description: 'Classical sculptures representing idealized humanity and beauty',
      elements: ['Greek/Roman statues', 'Idealized forms', 'Artistic perfection'],
      analysis: 'Classical art embodies our aspirations for perfection, yet these marble figures are frozen, lifeless - beauty without breath.',
      theme: 'aesthetic',
      depth: 'philosophical',
      zoomImage: '/images/collage/monster/final.jpg'
    },
    {
      id: 'modern-decay',
      title: 'Contemporary Fragments',
      x: 65, y: 30, width: 30, height: 40,
      description: 'Modern media, technology, and cultural artifacts',
      elements: ['Magazine covers', 'Digital imagery', 'Consumer culture'],
      analysis: 'Contemporary culture creates new forms of monstrosity - not physical, but psychological and spiritual degradation.',
      theme: 'cultural',
      depth: 'surface',
      zoomImage: '/images/collage/monster/quote.jpg'
    },
    {
      id: 'psychological-landscape',
      title: 'Inner Topography', 
      x: 40, y: 55, width: 35, height: 30,
      description: 'Faces, expressions, and psychological states layered together',
      elements: ['Human faces', 'Emotional expressions', 'Psychological studies'],
      analysis: 'The human face becomes a map of internal struggles - where does the person end and the monster begin?',
      theme: 'psychological',
      depth: 'deep',
      zoomImage: '/images/collage/monster/sketch.jpg'
    },
    {
      id: 'systemic-violence',
      title: 'Institutional Monsters',
      x: 10, y: 45, width: 25, height: 35,
      description: 'Systems, structures, and societal mechanisms that create monstrosity',
      elements: ['Institutional imagery', 'Power structures', 'Systemic representations'],
      analysis: 'Sometimes the monster is not individual but collective - systems that crush humanity while claiming to preserve it.',
      theme: 'political',
      depth: 'deep',
      zoomImage: '/images/collage/monster/detail.jpg'
    },
    {
      id: 'transformation-zones',
      title: 'Becoming Other',
      x: 70, y: 65, width: 25, height: 25,
      description: 'Moments of transformation, change, and metamorphosis',
      elements: ['Transitional imagery', 'Hybrid forms', 'Metamorphosis'],
      analysis: 'The most profound question: in our becoming, what are we becoming? Monster or more fully human?',
      theme: 'existential',
      depth: 'philosophical',
      zoomImage: '/images/collage/monster/final.jpg'
    }
  ]

  const explorationMethods = [
    {
      id: 'archaeological-dig',
      title: 'Psychological Archaeology',
      description: 'Excavating layers of human consciousness through material culture',
      process: 'Each magazine, image, and fragment represents a different stratum of contemporary consciousness - advertising, art, politics, desire.',
      materials: ['Psychology journals', 'Art history books', 'Contemporary magazines', 'Medical illustrations'],
      insight: 'Like an archaeologist, I dig through cultural sediment to find what we bury about ourselves.'
    },
    {
      id: 'evolutionary-mapping',
      title: 'Tracing Development',
      description: 'Following the path from biological to psychological to spiritual evolution',
      process: 'Arranging elements to show not just where we came from, but trajectories of where we might be going.',
      materials: ['Evolution imagery', 'Classical art', 'Contemporary figures', 'Futuristic elements'],
      insight: 'Evolution never stopped - but it moved from bodies to minds to souls. What are we evolving into?'
    },
    {
      id: 'mirror-construction',
      title: 'Building Reflection',
      description: 'Creating a surface that shows viewers their own capacity for monstrosity',
      process: 'The collage becomes a mirror - each viewer sees different aspects of the "monster" based on their own fears and shadows.',
      materials: ['Reflective elements', 'Multi-layered imagery', 'Ambiguous forms'],
      insight: 'The most effective monster is the one we recognize as ourselves.'
    },
    {
      id: 'integration-synthesis',
      title: 'Shadow Integration',
      description: 'Bringing together all aspects of human nature without denial or judgment',
      process: 'Rather than hiding our monstrous aspects, the piece integrates them as necessary parts of complete humanity.',
      materials: ['Light and shadow', 'Beauty and ugliness', 'Creation and destruction'],
      insight: 'Wholeness includes monstrosity. The goal is not to eliminate the monster, but to understand it.'
    }
  ]

  const philosophicalFrameworks = [
    {
      title: 'Jungian Shadow Work',
      description: 'Exploring the rejected aspects of self that we project onto others',
      relevance: 'The "monster" often represents our disowned parts - what we refuse to acknowledge about human nature.'
    },
    {
      title: 'Indigenous Concepts of Balance',
      description: 'Understanding that creation and destruction are necessary cycles',
      relevance: 'In many indigenous cosmologies, "monstrous" forces are not evil but necessary for balance and renewal.'
    },
    {
      title: 'Evolutionary Psychology',
      description: 'How ancient survival mechanisms manifest in modern psychological patterns',
      relevance: 'Our "monsters" may be evolutionary adaptations that no longer serve us in contemporary contexts.'
    },
    {
      title: 'Decolonial Theory',
      description: 'How colonization creates monsters by severing people from wholeness',
      relevance: 'The real monster might be the systems that fragment human beings from their complete selves.'
    }
  ]

  const monsterCollectionImages = [
    {
      id: 'detail',
      src: '/images/collage/monster/detail.jpg',
      title: 'Archeological Detail',
      description: 'Close examination of layered consciousness',
      details: 'This detailed view reveals the intricate layering process of psychological archaeology. Each fragment represents a different aspect of human consciousness - from classical ideals to modern anxieties. The overlapping images create a palimpsest of meaning, where earlier layers show through later additions.',
      medium: 'Mixed media detail',
      size: '12" × 16" (detail)',
      year: '2023',
      theme: 'Process documentation'
    },
    {
      id: 'final',
      src: '/images/collage/monster/final.jpg',
      title: 'Complete Integration',
      description: 'The fully realized monster within',
      details: 'The complete work shows all thematic layers integrated into a cohesive exploration of human shadow. Classical marble figures represent our aspirations, while contemporary fragments show our reality. The juxtaposition asks: what have we become in our evolution from classical ideals to modern complexity?',
      medium: 'Mixed media on paper',
      size: '36" × 48"',
      year: '2023',
      theme: 'Shadow integration'
    },
    {
      id: 'quote',
      src: '/images/collage/monster/quote.jpg',
      title: 'Textual Archaeology',
      description: 'Words as artifacts of consciousness',
      details: 'This piece focuses on the textual elements within the larger work - fragments of psychology texts, philosophical quotes, and contemporary media. The words become archaeological artifacts, revealing how language shapes our understanding of monstrosity and humanity.',
      medium: 'Text and image collage',
      size: '24" × 32"',
      year: '2023',
      theme: 'Language exploration'
    },
    {
      id: 'sketch',
      src: '/images/collage/monster/sketch.jpg',
      title: 'Preliminary Studies',
      description: 'Early explorations of form and meaning',
      details: 'The preliminary sketches and studies that informed the final work. These drawings explore the relationship between human and monstrous forms, showing the evolution of ideas from initial concept to final integration. The sketchy quality maintains the raw, exploratory nature of shadow work.',
      medium: 'Sketches and studies',
      size: '48" × 60"',
      year: '2022',
      theme: 'Process exploration'
    }
  ]

  const openModal = (theme) => {
    setSelectedTheme(theme)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedTheme(null)
    setActiveLayer(null)
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
    setImageModalOpen(true)
  }

  const closeImageModal = () => {
    setImageModalOpen(false)
    setSelectedImage(null)
  }

  // Evolution phase cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setEvolutionPhase(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getEvolutionText = () => {
    const phases = [
      'Biological Evolution',
      'Cultural Development', 
      'Technological Integration',
      'Consciousness Expansion'
    ]
    return phases[evolutionPhase]
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/monster.MP4"
      videoStyle={{
        filter: 'brightness(0.3) contrast(1.3) saturate(1.5)'
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
          <h1 className={styles.collageTitle}>
            An Introduction to the Monster
            <span className={styles.titleAccent}>in all of uS</span>
          </h1>
          <div className={styles.collageMeta}>
            <span className={styles.metaItem}>Mixed Media on Paper • 2023</span>
            <span className={styles.metaItem}>36" × 48" • 4 Pieces Collection</span>
            <span className={styles.metaItem}>Psychological Exploration Series</span>
          </div>
          <p className={styles.collageDescription}>
            A psychological archaeology examining the capacity for both creation and destruction 
            within human nature, questioning whether our evolution has led us toward greater 
            humanity or more sophisticated forms of monstrosity.
          </p>
          
          <div className={styles.evolutionIndicator}>
            <span className={styles.evolutionText}>{getEvolutionText()}</span>
            <div className={styles.evolutionProgress}>
              <div 
                className={styles.progressBar} 
                style={{width: `${((evolutionPhase + 1) / 4) * 100}%`}}
              />
            </div>
          </div>
        </div>

        {/* Interactive Exploration */}
        <div className={styles.explorationSection}>
          <h2 className={styles.sectionTitle}>Layers of Consciousness</h2>
          <p className={styles.sectionSubtitle}>
            Navigate through different levels of human experience and shadow integration
          </p>
          
          <div className={styles.collageExplorer}>
            {/* Left Panel */}
            <div className={styles.leftPanel}>
              {activeLayer && ['classical-ideals', 'systemic-violence', 'psychological-landscape'].includes(activeLayer) && (
                <div className={`${styles.sidePanel} ${styles.active}`}>
                  {(() => {
                    const layer = thematicLayers.find(l => l.id === activeLayer)
                    return (
                      <div>
                        <div className={styles.sidePanelZoom}>
                          <img src={layer.zoomImage} alt={`${layer.title} detail`} />
                        </div>
                        <h3 className={styles.sidePanelTitle}>{layer.title}</h3>
                        <div className={styles.themeHeader}>
                          <span className={`${styles.themeTag} ${styles[layer.theme]}`}>
                            {layer.theme}
                          </span>
                          <span className={styles.depthTag}>{layer.depth}</span>
                        </div>
                        <p className={styles.sidePanelDescription}>{layer.description}</p>
                        <div className={styles.sidePanelElements}>
                          <h4>Visual Elements:</h4>
                          <ul>
                            {layer.elements.map((element, index) => (
                              <li key={index}>{element}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.sidePanelAnalysis}>
                          <h4>Analysis:</h4>
                          <p>{layer.analysis}</p>
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
                src="/images/collage/monster/final.jpg"
                alt="Monster collage - full view"
                className={styles.mainCollageImage}
              />

              {/* Thematic layers overlay */}
              <div className={styles.layeredOverlay}>
                {thematicLayers.map((layer) => (
                  <div
                    key={layer.id}
                    className={`${styles.themeZone} ${activeLayer === layer.id ? styles.activeTheme : ''} ${styles[layer.theme]}`}
                    style={{
                      left: `${layer.x}%`,
                      top: `${layer.y}%`,
                      width: `${layer.width}%`,
                      height: `${layer.height}%`
                    }}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    onMouseLeave={() => setActiveLayer(null)}
                    onClick={() => openModal(layer)}
                  >
                    <div className={styles.themeInfo}>
                      <h4>{layer.title}</h4>
                      <p>{layer.description}</p>
                      <span className={styles.themeDepth}>{layer.depth} layer</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className={styles.rightPanel}>
              {activeLayer && ['evolution-timeline', 'modern-decay', 'transformation-zones'].includes(activeLayer) && (
                <div className={`${styles.sidePanel} ${styles.sidePanelRight} ${styles.active}`}>
                  {(() => {
                    const layer = thematicLayers.find(l => l.id === activeLayer)
                    return (
                      <div>
                        <div className={styles.sidePanelZoom}>
                          <img src={layer.zoomImage} alt={`${layer.title} detail`} />
                        </div>
                        <h3 className={styles.sidePanelTitle}>{layer.title}</h3>
                        <div className={styles.themeHeader}>
                          <span className={`${styles.themeTag} ${styles[layer.theme]}`}>
                            {layer.theme}
                          </span>
                          <span className={styles.depthTag}>{layer.depth}</span>
                        </div>
                        <p className={styles.sidePanelDescription}>{layer.description}</p>
                        <div className={styles.sidePanelElements}>
                          <h4>Visual Elements:</h4>
                          <ul>
                            {layer.elements.map((element, index) => (
                              <li key={index}>{element}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.sidePanelAnalysis}>
                          <h4>Analysis:</h4>
                          <p>{layer.analysis}</p>
                        </div>
                      </div>
                    )
                  })()}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Monster Collection Gallery */}
        <div className={styles.collectionSection}>
          <h2 className={styles.sectionTitle}>Collection Studies</h2>
          <p className={styles.sectionSubtitle}>
            Explore individual pieces and process documentation from the Monster series
          </p>

          <div className={styles.collectionGrid}>
            {monsterCollectionImages.map((image) => (
              <div
                key={image.id}
                className={styles.collectionItem}
                onClick={() => openImageModal(image)}
              >
                <div className={styles.collectionImageContainer}>
                  <img src={image.src} alt={image.title} />
                  <div className={styles.collectionOverlay}>
                    <div className={styles.overlayContent}>
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                      <span className={styles.viewMore}>View Details</span>
                    </div>
                  </div>
                </div>
                <div className={styles.collectionInfo}>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <div className={styles.collectionMeta}>
                    <span>{image.medium}</span>
                    <span>{image.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exploration Methods */}
        <div className={styles.methodsSection}>
          <h2 className={styles.sectionTitle}>Archaeological Methods</h2>
          <p className={styles.sectionSubtitle}>
            How psychological archaeology reveals the layers of human shadow and light
          </p>
          
          <div className={styles.methodsGrid}>
            {explorationMethods.map((method, index) => (
              <div key={method.id} className={styles.methodCard}>
                <div className={styles.methodNumber}>{index + 1}</div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
                  
                  <div className={styles.methodProcess}>
                    <h4>Process:</h4>
                    <p>{method.process}</p>
                  </div>
                  
                  <div className={styles.methodMaterials}>
                    <h4>Materials:</h4>
                    <div className={styles.materialTags}>
                      {method.materials.map((material, i) => (
                        <span key={i} className={styles.materialTag}>{material}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.methodInsight}>
                    <h4>Insight:</h4>
                    <p className={styles.insightText}>{method.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophical Framework */}
        <div className={styles.frameworkSection}>
          <h2 className={styles.sectionTitle}>Theoretical Foundations</h2>
          <p className={styles.sectionSubtitle}>
            Philosophical and psychological frameworks that inform this exploration
          </p>
          
          <div className={styles.frameworkGrid}>
            {philosophicalFrameworks.map((framework, index) => (
              <div key={index} className={styles.frameworkCard}>
                <h3>{framework.title}</h3>
                <p className={styles.frameworkDescription}>{framework.description}</p>
                <div className={styles.frameworkRelevance}>
                  <h4>Relevance to Monster Work:</h4>
                  <p>{framework.relevance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Reflection */}
        <div className={styles.artistReflection}>
          <h3 className={styles.reflectionTitle}>On Befriending Monsters</h3>
          <div className={styles.reflectionContent}>
            <p>
              The monster is not something to be slayed but something to be understood. In Indigenous 
              cosmologies, what Western psychology calls "shadow" is often seen as necessary medicine - 
              the difficult aspects of existence that bring balance and teach essential lessons.
            </p>
            <p>
              This collage emerged from a period of confronting my own capacity for harm, creativity, 
              destruction, and healing. Rather than rejecting these "monstrous" aspects, I began to 
              see them as incomplete without integration. The evolutionary timeline suggests we've 
              always been becoming - but becoming what?
            </p>
            <p>
              Perhaps the real evolution is not biological but consciousness-based: learning to hold 
              the full spectrum of human capacity without being consumed by it. The classical figures 
              represent our aspirations for beauty and perfection, while the contemporary fragments 
              show how we've complicated and corrupted those ideals.
            </p>
            <p>
              Indigenous futurism asks: what if our future evolution involves reclaiming wholeness 
              rather than perfection? What if the path forward requires befriending our monsters 
              rather than banishing them? What if monstrosity, properly understood, is medicine?
            </p>
            <span className={styles.reflectionSignature}>— On shadow integration as spiritual practice, 2023</span>
          </div>
        </div>

        {/* Modal for detailed exploration */}
        {modalOpen && selectedTheme && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <div className={styles.modalLayout}>
                <div className={styles.modalInfo}>
                  <h2>{selectedTheme.title}</h2>
                  <div className={styles.modalMeta}>
                    <span className={`${styles.modalThemeTag} ${styles[selectedTheme.theme]}`}>
                      {selectedTheme.theme} exploration
                    </span>
                    <span className={styles.modalDepthTag}>
                      {selectedTheme.depth} level analysis
                    </span>
                  </div>
                  
                  <p className={styles.modalDescription}>{selectedTheme.description}</p>
                  
                  <div className={styles.modalElements}>
                    <h3>Visual Components</h3>
                    <ul>
                      {selectedTheme.elements.map((element, index) => (
                        <li key={index}>{element}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.modalAnalysis}>
                    <h3>Psychological Interpretation</h3>
                    <p>{selectedTheme.analysis}</p>
                  </div>
                  
                  <div className={styles.modalReflection}>
                    <h3>Personal Reflection</h3>
                    <p>
                      This layer represents a particular aspect of the human experience that we often 
                      try to hide or deny. By bringing it into the light through artistic exploration, 
                      we can begin to understand its purpose and integrate its wisdom.
                    </p>
                  </div>
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
                  <div className={styles.imageModalTheme}>
                    <span className={styles.themeIndicator}>{selectedImage.theme}</span>
                  </div>
                  <p className={styles.imageModalDescription}>{selectedImage.description}</p>
                  <div className={styles.imageModalDetails}>
                    <h3>Artist Analysis</h3>
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

export default MonsterCollagePage