// src/pages/film/documentaries/our-ancestors-are-still-singing/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./still-singing.module.css"

const OurAncestorsAreStillSingingPage = () => {
  const [language, setLanguage] = useState('EN')
  const [showVideoModal, setShowVideoModal] = useState(false)

  const documentaryData = {
    title: 'Our Ancestors Are Still Singing',
    year: '2025',
    duration: '11 minutes',
    format: 'Narrative Documentary',
    role: 'Director, Cinematographer',
    videoUrl: 'https://youtu.be/TaKNJesPXNI',
    synopsis: 'A meditation on intergenerational resilience within Indigenous communities, exploring how ancestral wisdom continues to guide contemporary struggles for sovereignty and cultural preservation in the aftermath of the Cambodian genocide.',
    deeperDescription: 'Through intimate portraits of two Khmer women rebuilding life a generation after the Khmer Rouge genocide, this documentary examines how Indigenous knowledge systems adapt and thrive despite generational adversity. The film challenges static representations of Khmer cultures, showcasing instead a dynamic process of cultural revitalization, healing, and becoming.',
    themes: ['Indigenous Resilience', 'Cultural Preservation', 'Intergenerational Healing', 'Khmer Communities', 'Spiritual Traditions', 'Land Rights'],
    interviewSubjects: [
      {
        name: 'Cindy',
        role: 'Cornell Student Graduate, daughter of Cambodian and Vietnamese immigrant parents',
        description: 'My travel companion to Cambodia for a month-long documentation project. This was Cindy\'s first time visiting Cambodia, a journey that would transform her understanding of her heritage and identity.',
        contribution: 'Opens up about growing up disconnected from her Cambodian roots, having only identified with her Vietnamese heritage for most of her life. She reflects on how certain teachers helped her articulate her identity as a Cambodian-Vietnamese woman, especially as she learned about her father\'s survival of the Khmer Rouge camps and discovered the beautiful aspects of Cambodian culture - the food, dancing, and temples.'
      },
      {
        name: 'Hannah Phan',
        role: 'Cornell Senior Lecturer in Asian Studies, Khmer Rouge Genocide survivor',
        description: 'My Khmer language instructor who taught me basic Khmer for a semester before I traveled to Cambodia. Hannah guided me through not just language learning, but understanding the deeper cultural context I would encounter.',
        contribution: 'Shares her family\'s experiences in the camps, her journey to the United States, and the profound meaning she finds in teaching today - reconnecting both Cambodian and non-Cambodian students with the Khmer language and helping them understand their heritage.'
      }
    ],
    funding: [
      'Cornell American Indian & Indigenous Studies Academic Award',
      'Cornell Einhorn Center for Community Engagement Grant',
      'Cornell Engineering International Research Grant',
      'Cornell Southeast Asia Program Studies Grant',
      'Russo E. Khmer Studies Travel Grant' 
    ],
    artistStatement: 'This documentary emerged from my research on Indigenous resilience and cultural renewel in the aftermath of systematic violence. The film honors the radical evolution of cultures that refuse to be frozen in time through the stories of two women, thriving through dynamic processes of reclamation and renewal.',
    productionNotes: 'Filmed in collaboration with The Bophana Center and the Center for Khmer Studies (CKS) in Cambodia, this project prioritized community partnership and reciprocal storytelling. Every interview and clip filmed was conducted with full consent and editorial input, ensuring their stories remained authentic to their lived experiences.',
    communityImpact: 'This film serves as both documentation and advocacy, supporting ongoing efforts by Khmer communities to preserve their cultural heritage while challenging external narratives that tokenize indigenous cultures as relics of the past.',
    researchContext: 'This work builds on my broader research into intergenerational trauma and resilience within Indigenous communities, connecting Khmer experiences to parallel movements fighting for cultural survival and land rights.'
  }

  const openVideoModal = () => {
    setShowVideoModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/ancestors-still-singing.MP4"
      videoStyle={{
        filter: 'brightness(0.5) contrast(1.1) saturate(1.3)'
      }}
      playbackRate={0.4}
    >
      <section className={styles.documentaryPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/film/documentaries" className={styles.backLink}>
            Back to Documentaries
          </Link>
        </div>

        {/* Hero Section */}
        <div className={styles.documentaryHero}>
          <div className={styles.heroContent}>
            <h1 className={styles.documentaryTitle}>{documentaryData.title}</h1>
            <div className={styles.documentaryMeta}>
              <span className={styles.metaItem}>{documentaryData.year}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.duration}</span>
              <span className={styles.metaSeparator}>•</span>
              <span className={styles.metaItem}>{documentaryData.format}</span>
            </div>
            <div className={styles.roleInfo}>
              <span className={styles.roleLabel}>Role:</span>
              <span className={styles.roleValue}>{documentaryData.role}</span>
            </div>
            
            {/* Watch Film Button */}
            <div className={styles.watchFilmSection}>
              <button onClick={openVideoModal} className={styles.watchFilmBtn}>
                <span className={styles.playIcon}>▶</span>
                Watch Film
              </button>
            </div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className={styles.synopsisSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Synopsis</h2>
            <p className={styles.synopsis}>{documentaryData.synopsis}</p>
            <p className={styles.deeperDescription}>{documentaryData.deeperDescription}</p>
          </div>
        </div>

        {/* Themes */}
        <div className={styles.themesSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Themes Explored</h3>
            <div className={styles.themesList}>
              {documentaryData.themes.map((theme, index) => (
                <span key={index} className={styles.themeTag}>{theme}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Interview Subjects */}
        <div className={styles.interviewSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Featured Voices</h3>
            <div className={styles.interviewGrid}>
              {documentaryData.interviewSubjects.map((subject, index) => (
                <div key={index} className={styles.interviewCard}>
                  <div className={styles.interviewHeader}>
                    <h4 className={styles.interviewName}>{subject.name}</h4>
                    <span className={styles.interviewRole}>{subject.role}</span>
                  </div>
                  <p className={styles.interviewDescription}>{subject.description}</p>
                  <div className={styles.interviewContribution}>
                    <h5 className={styles.contributionTitle}>In the Film:</h5>
                    <p className={styles.contributionText}>{subject.contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Context */}
        <div className={styles.researchSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Research Context</h3>
            <p className={styles.researchText}>{documentaryData.researchContext}</p>
          </div>
        </div>

        {/* Artist Statement */}
        <div className={styles.artistStatement}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Director's Statement</h3>
            <p className={styles.statementText}>{documentaryData.artistStatement}</p>
          </div>
        </div>

        {/* Production Notes */}
        <div className={styles.productionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Production Notes</h3>
            <p className={styles.productionText}>{documentaryData.productionNotes}</p>
            
            <div className={styles.fundingInfo}>
              <h4 className={styles.fundingTitle}>Supported By</h4>
              <div className={styles.fundingList}>
                {documentaryData.funding.map((funder, index) => (
                  <span key={index} className={styles.fundingItem}>{funder}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className={styles.impactSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Community Impact</h3>
            <p className={styles.impactText}>{documentaryData.communityImpact}</p>
            
            <div className={styles.partnerOrganizations}>
              <h4 className={styles.partnersTitle}>Community Partners</h4>
              <div className={styles.partnersList}>
                <span className={styles.partnerItem}>The Bophana Center</span>
                <span className={styles.partnerItem}>Center for Khmer Studies (CKS)</span>
                <span className={styles.partnerItem}>Cornell Southeast Asia Department</span>
                <span className={styles.partnerItem}>Mario Einaudi Center for International Studies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connection to Other Works */}
        <div className={styles.connectionSection}>
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionSubtitle}>Related Research</h3>
            <p className={styles.connectionText}>
              This documentary connects to my broader research on Indigenous resilience and 
              intergenerational healing. It builds on previous work documenting Zapotec 
              linguistic preservation in Oaxaca, Mexico, and informs ongoing research with 
              Indigenous communities exploring epigenetic trauma recovery.
            </p>
            <div className={styles.relatedWorks}>
              <Link to="/film/documentaries/love-rev" className={styles.relatedLink}>
                <span>Explore Love as Revolution</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className={styles.videoModal} onClick={closeVideoModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={closeVideoModal}>
                ×
              </button>
              
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{documentaryData.title}</h2>
                <div className={styles.modalMeta}>
                  <span>{documentaryData.year}</span>
                  <span>•</span>
                  <span>{documentaryData.duration}</span>
                  <span>•</span>
                  <span>{documentaryData.format}</span>
                </div>
              </div>
              
              <div className={styles.videoContainer}>
                <iframe
                  width="100%"
                  height="100%"
                  src={documentaryData.videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                  title={documentaryData.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className={styles.modalDescription}>
                <p>{documentaryData.synopsis}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default OurAncestorsAreStillSingingPage