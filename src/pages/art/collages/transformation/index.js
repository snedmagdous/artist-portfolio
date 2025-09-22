// src/pages/art/collages/transformation/index.js

import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./transformation-collage.module.css"

const TransformationCollagePage = () => {
  const [language, setLanguage] = useState('EN')
  const [activeConversation, setActiveConversation] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDialogue, setSelectedDialogue] = useState(null)
  const [healingPhase, setHealingPhase] = useState(0)
  const [voicesActive, setVoicesActive] = useState(false)
  
  // Define critical conversations needed for transformation
  const healingConversations = [
    {
      id: 'voices-amplified',
      title: 'Voices Amplified',
      x: 25, y: 45, width: 20, height: 15,
      description: 'Creating space for silenced voices to be heard and valued',
      participants: ['Marginalized communities', 'Youth voices', 'Elder wisdom', 'Survivor narratives'],
      healingType: 'collective',
      analysis: 'True transformation begins when we center the voices that have been systematically excluded. These conversations require us to listen differently - not to debate or defend, but to receive and learn.',
      transformationLevel: 'foundational'
    },
    {
      id: 'generational-trauma',
      title: 'Generational Healing',
      x: 45, y: 20, width: 25, height: 20,
      description: 'Addressing inherited trauma and breaking cycles of harm',
      participants: ['Ancestral wisdom', 'Family systems', 'Community elders', 'Future generations'],
      healingType: 'intergenerational',
      analysis: 'Healing happens across time - we heal backwards into our ancestry and forwards into our descendants. These conversations honor both the wounds and wisdom passed down.',
      transformationLevel: 'deep'
    },
    {
      id: 'repair-justice',
      title: 'Repair and Justice',
      x: 10, y: 25, width: 30, height: 25,
      description: 'Conversations about accountability, repair, and restorative justice',
      participants: ['Harm causers', 'Harm survivors', 'Community witnesses', 'Justice facilitators'],
      healingType: 'restorative',
      analysis: 'Moving beyond punishment toward repair requires conversations that center healing while maintaining accountability. This is the hardest and most necessary work.',
      transformationLevel: 'systemic'
    },
    {
      id: 'identity-belonging',
      title: 'Identity and Belonging',
      x: 60, y: 40, width: 30, height: 30,
      description: 'Exploring authentic identity and creating genuine belonging',
      participants: ['BIPOC communities', 'LGBTQ+ voices', 'Immigrants', 'Indigenous peoples'],
      healingType: 'identity',
      analysis: 'These conversations help us understand that belonging doesn\'t require assimilation - it requires communities brave enough to expand their definitions of who matters.',
      transformationLevel: 'personal'
    },
    {
      id: 'environmental-healing',
      title: 'Earth Relationship',
      x: 35, y: 65, width: 25, height: 20,
      description: 'Healing our relationship with the natural world',
      participants: ['Indigenous knowledge keepers', 'Environmental activists', 'Climate survivors', 'Future species'],
      healingType: 'ecological',
      analysis: 'Environmental healing requires conversations that recognize the Earth as relative, not resource. This means fundamentally changing how we understand our place in the web of life.',
      transformationLevel: 'planetary'
    },
    {
      id: 'economic-transformation',
      title: 'Economic Justice',
      x: 70, y: 15, width: 25, height: 25,
      description: 'Reimagining economic systems that serve life rather than extraction',
      participants: ['Workers', 'Community organizers', 'Alternative economists', 'Cooperative builders'],
      healingType: 'systemic',
      analysis: 'These conversations challenge the myth that extraction-based economics are inevitable. They explore how we can organize society around care rather than profit.',
      transformationLevel: 'structural'
    }
  ]

  const conversationMethods = [
    {
      id: 'circle-practice',
      title: 'Circle Practice',
      description: 'Creating sacred containers for difficult conversations',
      process: 'Using traditional circle methodology to ensure every voice is heard and honored, with talking pieces and community agreements.',
      healing: 'Circles create equality - no one person dominates, everyone has a chance to speak and listen deeply.',
      inspiration: 'Indigenous council traditions, restorative justice circles, feminist consciousness-raising groups'
    },
    {
      id: 'story-medicine',
      title: 'Story as Medicine',
      description: 'Using personal narrative to transform individual and collective trauma',
      process: 'Sharing stories not for entertainment but for healing - witnessing each other\'s truth with presence and care.',
      healing: 'Stories help us understand we\'re not alone in our struggles and that healing is possible.',
      inspiration: 'Oral tradition, trauma-informed storytelling, digital storytelling for social change'
    },
    {
      id: 'somatic-dialogue',
      title: 'Embodied Conversation',
      description: 'Including the body\'s wisdom in dialogue and decision-making',
      process: 'Paying attention to how conversations feel in our bodies, using movement and breath to process difficult emotions.',
      healing: 'Trauma lives in the body - true transformation requires engaging our full embodied intelligence.',
      inspiration: 'Somatic therapy, dance/movement therapy, body-based healing practices'
    },
    {
      id: 'future-visioning',
      title: 'Ancestral Futurism',
      description: 'Conversations that connect ancestral wisdom with future possibilities',
      process: 'Using both ancient knowledge and visionary imagination to create new possibilities for living.',
      healing: 'Connecting to both roots and possibilities gives us strength and direction for transformation.',
      inspiration: 'Indigenous futurism, Afrofuturism, speculative fiction, visionary organizing'
    }
  ]

  const transformationPrinciples = [
    {
      title: 'Center Those Most Impacted',
      description: 'True transformation happens when those most affected by harm lead the healing process',
      practice: 'Follow the leadership of people experiencing the issues firsthand'
    },
    {
      title: 'Go Slow to Go Deep',
      description: 'Surface-level conversations maintain surface-level problems',
      practice: 'Create time and space for conversations that reach root causes'
    },
    {
      title: 'Honor All Relations',
      description: 'Healing happens in relationship - with each other, ancestors, and the Earth',
      practice: 'Consider the impact of decisions on seven generations forward'
    },
    {
      title: 'Transform Conflict into Connection',
      description: 'Conflict often signals where healing is most needed',
      practice: 'Move toward difficulty with curiosity rather than defensiveness'
    },
    {
      title: 'Practice Abundance Thinking',
      description: 'Scarcity thinking keeps us competing instead of collaborating',
      practice: 'Assume there\'s enough - enough time, resources, love, and possibility for everyone'
    }
  ]

  const openModal = (dialogue) => {
    setSelectedDialogue(dialogue)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedDialogue(null)
    setActiveConversation(null)
  }

  // Healing phase cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setHealingPhase(prev => (prev + 1) % 4)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const getHealingPhaseText = () => {
    const phases = [
      'Acknowledging Harm',
      'Creating Safety', 
      'Facilitating Dialogue',
      'Generating Transformation'
    ]
    return phases[healingPhase]
  }

  const toggleVoices = () => {
    setVoicesActive(!voicesActive)
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/trans.MP4"
      videoStyle={{
        filter: 'brightness(0.45) contrast(1.15) saturate(1.5) hue-rotate(10deg)'
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
            Critical Conversations
            <span className={styles.titleAccent}>for Transformation</span>
          </h1>
          <div className={styles.collageMeta}>
            <span className={styles.metaItem}>Mixed Media on Paper • 2022</span>
            <span className={styles.metaItem}>36" × 48" • 9 Pieces Collection</span>
            <span className={styles.metaItem}>Healing Dialogues Series</span>
          </div>
          <p className={styles.collageDescription}>
            A visual meditation on the conversations we need to have - both as individuals and societies - 
            to heal from trauma and create genuine transformation. Inspired by solutions journalism and 
            the belief that dialogue is medicine.
          </p>
          
          <div className={styles.healingIndicator}>
            <span className={styles.healingText}>{getHealingPhaseText()}</span>
            <div className={styles.healingProgress}>
              <div 
                className={styles.progressRing} 
                style={{
                  transform: `rotate(${(healingPhase + 1) * 90}deg)`,
                  opacity: 0.3 + (healingPhase + 1) * 0.2
                }}
              />
            </div>
          </div>

          <div className={styles.voicesToggle}>
            <button 
              onClick={toggleVoices}
              className={`${styles.voicesButton} ${voicesActive ? styles.voicesActive : ''}`}
            >
              {voicesActive ? 'Listening to Voices' : 'Amplify Voices'}
            </button>
          </div>
        </div>

        {/* Interactive Conversations */}
        <div className={styles.conversationsSection}>
          <h2 className={styles.sectionTitle}>Mapping Healing Dialogues</h2>
          <p className={styles.sectionSubtitle}>
            Explore the essential conversations needed for individual and collective transformation
          </p>
          
          <div className={styles.dialogueContainer}>
            <div className={styles.conversationMap}>
              <img 
                src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/final.png" 
                alt="Critical Conversations for Transformation - full view"
                className={styles.mainConversationImage}
              />
              
              {/* Conversation zones overlay */}
              <div className={styles.conversationOverlay}>
                {healingConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`${styles.conversationZone} ${activeConversation === conversation.id ? styles.activeConversation : ''} ${styles[conversation.healingType]} ${voicesActive ? styles.voicesMode : ''}`}
                    style={{
                      left: `${conversation.x}%`,
                      top: `${conversation.y}%`,
                      width: `${conversation.width}%`,
                      height: `${conversation.height}%`
                    }}
                    onMouseEnter={() => setActiveConversation(conversation.id)}
                    onMouseLeave={() => setActiveConversation(null)}
                    onClick={() => openModal(conversation)}
                  >
                    <div className={styles.conversationInfo}>
                      <h4>{conversation.title}</h4>
                      <p>{conversation.description}</p>
                      <span className={styles.transformationLevel}>{conversation.transformationLevel} level</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active conversation analysis */}
            {activeConversation && (
              <div className={styles.conversationAnalysisPanel}>
                {(() => {
                  const conversation = healingConversations.find(c => c.id === activeConversation)
                  return (
                    <div className={styles.conversationAnalysis}>
                      <div className={styles.conversationHeader}>
                        <h3>{conversation.title}</h3>
                        <span className={`${styles.healingTag} ${styles[conversation.healingType]}`}>
                          {conversation.healingType} healing
                        </span>
                      </div>
                      <p className={styles.conversationDescription}>{conversation.description}</p>
                      <div className={styles.participantsList}>
                        <h4>Key Participants:</h4>
                        <ul>
                          {conversation.participants.map((participant, index) => (
                            <li key={index}>{participant}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.healingAnalysis}>
                        <h4>Transformation Insight:</h4>
                        <p>{conversation.analysis}</p>
                      </div>
                      <button 
                        onClick={() => openModal(conversation)}
                        className={styles.dialogueDeepBtn}
                      >
                        Explore This Dialogue
                      </button>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </div>

        {/* Conversation Methods */}
        <div className={styles.methodsSection}>
          <h2 className={styles.sectionTitle}>Healing Methodologies</h2>
          <p className={styles.sectionSubtitle}>
            How we create containers for transformation through intentional dialogue
          </p>
          
          <div className={styles.methodsGrid}>
            {conversationMethods.map((method, index) => (
              <div key={method.id} className={styles.methodCard}>
                <div className={styles.methodNumber}>
                  <div className={styles.numberCircle}>{index + 1}</div>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodDescription}>{method.description}</p>
                  
                  <div className={styles.methodProcess}>
                    <h4>Practice:</h4>
                    <p>{method.process}</p>
                  </div>
                  
                  <div className={styles.healingWisdom}>
                    <h4>Healing Wisdom:</h4>
                    <p className={styles.wisdomText}>{method.healing}</p>
                  </div>
                  
                  <div className={styles.inspirationSources}>
                    <h4>Inspired By:</h4>
                    <p className={styles.inspirationText}>{method.inspiration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Principles */}
        <div className={styles.principlesSection}>
          <h2 className={styles.sectionTitle}>Principles for Transformation</h2>
          <p className={styles.sectionSubtitle}>
            Guiding values for conversations that create lasting change
          </p>
          
          <div className={styles.principlesGrid}>
            {transformationPrinciples.map((principle, index) => (
              <div key={index} className={styles.principleCard}>
                <div className={styles.principleNumber}>{index + 1}</div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
                <div className={styles.principleAction}>
                  <h4>In Practice:</h4>
                  <p>{principle.practice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <h3 className={styles.statementTitle}>On Dialogue as Medicine</h3>
          <div className={styles.statementContent}>
            <p>
              This collage emerged during a time when it felt like we'd forgotten how to talk to each other. 
              Every conversation seemed to end in argument, every difference became a battle line. I started 
              wondering: what would it look like if we approached difficult conversations as opportunities 
              for healing rather than warfare?
            </p>
            <p>
              The inspiration came from Yes! Magazine's approach to solutions journalism - instead of just 
              documenting problems, they highlighted people creating alternatives. What if we applied that 
              same energy to dialogue? What if we got as creative about healing conversations as we do 
              about harmful ones?
            </p>
            <p>
              Indigenous wisdom teaches that conflict often signals where healing is most needed. The places 
              we avoid talking about are precisely where transformation wants to happen. But this requires 
              different skills than debate or argument - it requires the capacity to listen for what wants 
              to heal.
            </p>
            <p>
              The faces in this collage represent all the voices that need to be in the room for true 
              transformation. Not just the loudest or most comfortable voices, but the ones that have been 
              systematically excluded. When we center those most impacted by harm, we create the conditions 
              for solutions that actually work.
            </p>
            <p>
              This is the work of our time: learning to have conversations that heal rather than harm, 
              that transform rather than just vent. It's not easy work, but it's the only work that leads 
              to the world we actually want to live in.
            </p>
            <span className={styles.statementSignature}>— On the revolutionary potential of healing dialogue, 2022</span>
          </div>
        </div>

        {/* Modal for detailed conversation exploration */}
        {modalOpen && selectedDialogue && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
              <div className={styles.modalLayout}>
                <div className={styles.modalInfo}>
                  <h2>{selectedDialogue.title}</h2>
                  <div className={styles.modalMeta}>
                    <span className={`${styles.modalHealingTag} ${styles[selectedDialogue.healingType]}`}>
                      {selectedDialogue.healingType} healing
                    </span>
                    <span className={styles.modalLevelTag}>
                      {selectedDialogue.transformationLevel} transformation
                    </span>
                  </div>
                  
                  <p className={styles.modalDescription}>{selectedDialogue.description}</p>
                  
                  <div className={styles.modalParticipants}>
                    <h3>Essential Voices</h3>
                    <ul>
                      {selectedDialogue.participants.map((participant, index) => (
                        <li key={index}>{participant}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.modalAnalysis}>
                    <h3>Transformation Pathway</h3>
                    <p>{selectedDialogue.analysis}</p>
                  </div>
                  
                  <div className={styles.modalPractice}>
                    <h3>Creating This Conversation</h3>
                    <p>
                      To facilitate this type of healing dialogue, create brave space rather than safe space - 
                      acknowledge that transformation requires risk and discomfort. Center the voices of those 
                      most impacted, go slow enough to go deep, and remember that the goal is not agreement 
                      but understanding and collective healing.
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

export default TransformationCollagePage