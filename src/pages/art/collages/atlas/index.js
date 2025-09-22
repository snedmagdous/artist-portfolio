// src/pages/art/collages/atlas/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./atlas-collage.module.css"

const AtlasCollagePage = () => {
  const [language, setLanguage] = useState('EN')
  const [activeRegion, setActiveRegion] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedMap, setSelectedMap] = useState(null)
  const [bodySystemView, setBodySystemView] = useState('sacred')
  
  // Define body regions and their cultural mappings
  const bodyAtlas = [
    {
      id: 'sacred-center',
      title: 'Sacred Heart',
      x: 45, y: 30, width: 20, height: 25,
      description: 'The classical Pietà representing the sacred body in suffering and compassion',
      elements: ['Michelangelo\'s Pietà', 'Religious iconography', 'Maternal love', 'Divine suffering'],
      culturalMapping: 'sacred',
      analysis: 'The central classical sculpture transforms the collage into a meditation on the sacred body - how Western art has idealized suffering and positioned the maternal figure as bearer of collective pain.',
      bodySystem: 'spiritual'
    },
    {
      id: 'media-consumption',
      title: 'Digestive System of Images',
      x: 70, y: 15, width: 25, height: 40,
      description: 'Contemporary media fragments showing how bodies are consumed as images',
      elements: ['Magazine covers', 'Celebrity photos', 'News imagery', 'Advertising'],
      culturalMapping: 'commodified',
      analysis: 'The right side becomes an organ of media consumption - how we digest endless images of bodies that have been packaged, marketed, and sold back to us.',
      bodySystem: 'digestive'
    },
    {
      id: 'memory-archive',
      title: 'Neural Networks of History',
      x: 10, y: 25, width: 30, height: 35,
      description: 'Historical photographs and archival materials mapping collective memory',
      elements: ['Historical photos', 'Archival documents', 'Black and white imagery', 'Time layers'],
      culturalMapping: 'historical',
      analysis: 'The left region functions as collective memory - how bodies carry histories, traumas, and cultural narratives across generations.',
      bodySystem: 'nervous'
    },
    {
      id: 'violence-circulation',
      title: 'Circulatory Violence',
      x: 35, y: 55, width: 30, height: 30,
      description: 'Images of systemic violence and harm flowing through the body politic',
      elements: ['Violence imagery', 'Systemic harm', 'Power dynamics', 'Institutional damage'],
      culturalMapping: 'political',
      analysis: 'The lower center reveals how violence circulates through social bodies like blood through veins - systemic, necessary for the current system\'s survival, and toxic.',
      bodySystem: 'circulatory'
    },
    {
      id: 'desire-respiratory',
      title: 'Breathing Desire',
      x: 65, y: 60, width: 30, height: 25,
      description: 'Representations of desire, sexuality, and the breath of life',
      elements: ['Intimate imagery', 'Desire representation', 'Sexuality', 'Life force'],
      culturalMapping: 'erotic',
      analysis: 'The lower right becomes the body\'s capacity for desire and life force - how breath, sexuality, and creative energy sustain us despite surrounding violence.',
      bodySystem: 'respiratory'
    },
    {
      id: 'skeletal-structure',
      title: 'Structural Framework',
      x: 5, y: 5, width: 90, height: 15,
      description: 'Newspaper headers and text providing the structural framework',
      elements: ['Cornell Daily Sun', 'News text', 'Information structure', 'Textual skeleton'],
      culturalMapping: 'informational',
      analysis: 'The top band of text creates the skeleton - the informational infrastructure that shapes how we understand bodies, identity, and reality itself.',
      bodySystem: 'skeletal'
    }
  ]

  const mappingMethods = [
    {
      id: 'anatomical-archaeology',
      title: 'Anatomical Archaeology',
      description: 'Excavating how different cultures have mapped, understood, and represented the human body',
      process: 'Layering medical illustrations, classical art, contemporary media, and indigenous knowledge systems to reveal conflicting body maps.',
      materials: ['Medical textbooks', 'Art history reproductions', 'Magazine imagery', 'Cultural artifacts'],
      insight: 'Each culture creates its own atlas of the body - what we think is objective anatomy is actually cultural interpretation.'
    },
    {
      id: 'sacred-profane-mapping',
      title: 'Sacred/Profane Cartography',
      description: 'Mapping the tension between bodies as sacred vessels and commodified objects',
      process: 'Juxtaposing religious iconography with advertising imagery to reveal how the same forms carry opposite meanings.',
      materials: ['Religious art', 'Commercial imagery', 'Fashion photography', 'Spiritual symbols'],
      insight: 'The body exists simultaneously as temple and marketplace - the collision creates both beauty and violence.'
    },
    {
      id: 'trauma-geography',
      title: 'Geography of Trauma',
      description: 'Mapping how collective and personal traumas live in and shape physical bodies',
      process: 'Using historical imagery and contemporary representations to show how trauma moves through generations and communities.',
      materials: ['Historical photographs', 'Medical imagery', 'Personal artifacts', 'Healing symbols'],
      insight: 'Bodies are landscapes where history lives - understanding this geography is necessary for healing.'
    },
    {
      id: 'future-anatomy',
      title: 'Speculative Anatomy',
      description: 'Imagining how bodies might be understood in post-colonial, decolonized futures',
      process: 'Integrating indigenous knowledge systems with speculative elements to envision liberated understandings of embodiment.',
      materials: ['Indigenous healing practices', 'Futuristic elements', 'Non-Western anatomy', 'Visionary imagery'],
      insight: 'Decolonizing the body requires new maps - ones that honor wholeness rather than fragmentation.'
    }
  ]

  const bodySystemViews = {
    sacred: {
      title: 'Sacred Body Map',
      description: 'Understanding the body as a temple and vessel for spirit',
      color: '#DAA520',
      regions: ['Sacred heart', 'Crown chakra', 'Life force centers', 'Prayer hands', 'Grounding feet']
    },
    medical: {
      title: 'Medical Body Map', 
      description: 'Western anatomical understanding focused on systems and pathology',
      color: '#DC143C',
      regions: ['Circulatory system', 'Nervous system', 'Digestive system', 'Respiratory system', 'Skeletal system']
    },
    political: {
      title: 'Political Body Map',
      description: 'How power, violence, and systems shape and control bodies',
      color: '#4169E1',
      regions: ['Sites of control', 'Resistance zones', 'Surveillance points', 'Economic extraction', 'Freedom spaces']
    },
    indigenous: {
      title: 'Indigenous Body Map',
      description: 'Holistic understanding of body as part of larger web of relationships',
      color: '#228B22',
      regions: ['Earth connection', 'Ancestor wisdom', 'Community bonds', 'Natural cycles', 'Healing pathways']
    }
  }

  const openModal = (map) => {
    setSelectedMap(map)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedMap(null)
    setActiveRegion(null)
  }

  const cycleBodyView = () => {
    const views = Object.keys(bodySystemViews)
    const currentIndex = views.indexOf(bodySystemView)
    const nextIndex = (currentIndex + 1) % views.length
    setBodySystemView(views[nextIndex])
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/atlas.MP4"
      videoStyle={{
        filter: 'brightness(0.25) contrast(1.2) saturate(1.3) sepia(0.15)'
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
            Atlas of the Body
          </h1>
          <div className={styles.collageMeta}>
            <span className={styles.metaItem}>Mixed Media on Paper • 2022</span>
            <span className={styles.metaItem}>48" × 36" • 9 Pieces Collection</span>
            <span className={styles.metaItem}>Cultural Anatomy Series</span>
          </div>
          <p className={styles.collageDescription}>
            A cartographic exploration of how different cultures map, understand, and represent the human body - 
            from sacred vessel to commodified object, revealing the violence and beauty in our conflicting anatomies.
          </p>
          
          <div className={styles.bodySystemSelector}>
            <button 
              onClick={cycleBodyView}
              className={styles.systemToggle}
              style={{borderColor: bodySystemViews[bodySystemView].color}}
            >
              <span style={{color: bodySystemViews[bodySystemView].color}}>
                {bodySystemViews[bodySystemView].title}
              </span>
              <span className={styles.toggleHint}>Click to cycle views</span>
            </button>
          </div>
        </div>

        {/* Interactive Atlas */}
        <div className={styles.atlasSection}>
          <h2 className={styles.sectionTitle}>Navigate the Body Maps</h2>
          <p className={styles.sectionSubtitle}>
            Explore how different cultural systems understand and represent embodied experience
          </p>
          
          <div className={styles.atlasContainer}>
            <div className={styles.bodyMap}>
              <img 
                src="/images/collage/atlas/final.jpg" 
                alt="Atlas of the Body - full view"
                className={styles.mainAtlasImage}
              />
              
              {/* Body region overlays */}
              <div className={styles.anatomyOverlay}>
                {bodyAtlas.map((region) => (
                  <div
                    key={region.id}
                    className={`${styles.bodyRegion} ${activeRegion === region.id ? styles.activeRegion : ''} ${styles[region.culturalMapping]}`}
                    style={{
                      left: `${region.x}%`,
                      top: `${region.y}%`,
                      width: `${region.width}%`,
                      height: `${region.height}%`,
                      borderColor: bodySystemViews[bodySystemView].color
                    }}
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                    onClick={() => openModal(region)}
                  >
                    <div className={styles.regionInfo}>
                      <h4>{region.title}</h4>
                      <p>{region.description}</p>
                      <span className={styles.bodySystemLabel}>{region.bodySystem} system</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active region analysis */}
            {activeRegion && (
              <div className={styles.regionAnalysisPanel}>
                {(() => {
                  const region = bodyAtlas.find(r => r.id === activeRegion)
                  return (
                    <div className={styles.regionAnalysis}>
                      <div className={styles.regionHeader}>
                        <h3>{region.title}</h3>
                        <span className={`${styles.mappingTag} ${styles[region.culturalMapping]}`}>
                          {region.culturalMapping} mapping
                        </span>
                      </div>
                      <p className={styles.regionDescription}>{region.description}</p>
                      <div className={styles.anatomyElements}>
                        <h4>Cultural Elements:</h4>
                        <ul>
                          {region.elements.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.culturalAnalysis}>
                        <h4>Cultural Analysis:</h4>
                        <p>{region.analysis}</p>
                      </div>
                      <button 
                        onClick={() => openModal(region)}
                        className={styles.mapDeepBtn}
                      >
                        Deep Map Analysis
                      </button>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </div>

        {/* Mapping Methods */}
        <div className={styles.mappingSection}>
          <h2 className={styles.sectionTitle}>Cartographic Methods</h2>
          <p className={styles.sectionSubtitle}>
            How cultural cartography reveals the politics of embodiment
          </p>
          
          <div className={styles.methodsGrid}>
            {mappingMethods.map((method, index) => (
              <div key={method.id} className={styles.mappingCard}>
                <div className={styles.methodIcon}>
                  <div className={styles.iconCircle}>{index + 1}</div>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
                  
                  <div className={styles.methodProcess}>
                    <h4>Cartographic Process:</h4>
                    <p>{method.process}</p>
                  </div>
                  
                  <div className={styles.methodMaterials}>
                    <h4>Source Materials:</h4>
                    <div className={styles.materialsList}>
                      {method.materials.map((material, i) => (
                        <span key={i} className={styles.materialChip}>{material}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.cartographicInsight}>
                    <h4>Mapping Insight:</h4>
                    <p className={styles.insightText}>{method.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body System Views */}
        <div className={styles.systemsSection}>
          <h2 className={styles.sectionTitle}>Alternative Anatomies</h2>
          <p className={styles.sectionSubtitle}>
            Different cultural systems create entirely different maps of the same body
          </p>
          
          <div className={styles.systemsGrid}>
            {Object.entries(bodySystemViews).map(([key, system]) => (
              <div 
                key={key} 
                className={`${styles.systemCard} ${bodySystemView === key ? styles.activeSystem : ''}`}
                onClick={() => setBodySystemView(key)}
              >
                <div className={styles.systemHeader} style={{borderTopColor: system.color}}>
                  <h3 style={{color: system.color}}>{system.title}</h3>
                </div>
                <p className={styles.systemDescription}>{system.description}</p>
                <div className={styles.systemRegions}>
                  <h4>Key Regions:</h4>
                  <ul>
                    {system.regions.map((region, index) => (
                      <li key={index}>{region}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>On Bodies as Territories</h3>
          <div className={styles.statementContent}>
            <p>
              Every atlas is a form of colonization - it decides which features matter, which boundaries 
              exist, what gets named and what remains invisible. The body is perhaps the most colonized 
              territory of all, mapped and remapped by medical science, religious doctrine, capitalist 
              marketing, and state surveillance.
            </p>
            <p>
              This collage emerged from studying anatomy textbooks alongside indigenous healing practices, 
              classical art alongside contemporary advertising. I realized that what I thought was my 
              body was actually a collection of competing maps - each telling me different stories about 
              what this flesh means, what it's for, where its boundaries are.
            </p>
            <p>
              The Pietà at the center represents perhaps the most powerful Western narrative about bodies: 
              that they are made for suffering, that pain is sacred, that the maternal body exists to 
              hold collective trauma. But what if we mapped differently? What if we started from indigenous 
              understandings of the body as part of a larger web of relationships?
            </p>
            <p>
              Decolonizing the body requires new cartographies - maps that honor the body's capacity for 
              pleasure, healing, resistance, and connection. Maps that understand embodiment as relationship 
              rather than object. This is the atlas we need for liberation: one that shows us how to come 
              home to ourselves.
            </p>
            <span className={styles.statementSignature}>— On reclaiming embodied territory, 2022</span>
          </div>
        </div>

        {/* Modal for detailed mapping */}
        {modalOpen && selectedMap && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <div className={styles.modalLayout}>
                <div className={styles.modalInfo}>
                  <h2>{selectedMap.title}</h2>
                  <div className={styles.modalMeta}>
                    <span className={`${styles.modalMappingTag} ${styles[selectedMap.culturalMapping]}`}>
                      {selectedMap.culturalMapping} territory
                    </span>
                    <span className={styles.modalSystemTag}>
                      {selectedMap.bodySystem} system
                    </span>
                  </div>
                  
                  <p className={styles.modalDescription}>{selectedMap.description}</p>
                  
                  <div className={styles.modalElements}>
                    <h3>Cultural Markers</h3>
                    <ul>
                      {selectedMap.elements.map((element, index) => (
                        <li key={index}>{element}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.modalAnalysis}>
                    <h3>Cartographic Analysis</h3>
                    <p>{selectedMap.analysis}</p>
                  </div>
                  
                  <div className={styles.modalDecolonial}>
                    <h3>Decolonial Possibilities</h3>
                    <p>
                      How might this region of the body be understood differently through Indigenous 
                      knowledge systems? What would it mean to honor this part of embodied experience 
                      as sacred, connected, and whole rather than fragmented and commodified?
                    </p>
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

export default AtlasCollagePage