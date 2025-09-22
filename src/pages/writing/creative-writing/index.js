// src/pages/writing/creative-writing/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "../writing.module.css"

const CreativeWritingPage = () => {
  const [language, setLanguage] = useState('EN')
  
  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/creative-writing.MP4"
      videoStyle={{
        filter: 'brightness(0.45) contrast(1.03) saturate(1.45)'
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
          <h1 className={styles.comingSoonTitle}>Creative Writing</h1>
          <p className={styles.comingSoonSubtitle}>
            Coming Soon<span className={styles.blinkingDots}>...</span>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default CreativeWritingPage