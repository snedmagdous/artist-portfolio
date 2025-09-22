// src/pages/writing/video-essays/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../writing.module.css"

const VideoEssaysPage = () => {
  const [language, setLanguage] = useState('EN')
  
  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/video-essays.MP4"
      videoStyle={{
        filter: 'brightness(0.54) contrast(1.1) saturate(1.1)'
      }}
    >
      <section className={styles.subPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/writing" className={styles.backLink}>
            Back to Writing Categories
          </Link>
        </div>

        {/* Coming Soon Hero */}
        <div className={styles.comingSoonHero}>
          <h1 className={styles.comingSoonTitle}>Video Essays</h1>
          <p className={styles.comingSoonSubtitle}>
            Coming Soon<span className={styles.blinkingDots}>...</span>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default VideoEssaysPage