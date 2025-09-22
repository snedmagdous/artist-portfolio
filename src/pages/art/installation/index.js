// src/pages/art/installation/index.js
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../components/Layout"
import * as styles from "./installation.module.css"

const InstallationPage = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/art.MP4"
      videoFilter="brightness(0.67) contrast(1.04) saturate(1.8)"
    >
      <section className={styles.installationPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art" className={styles.backLink}>
            Back to Art Categories
          </Link>
        </div>

        {/* Coming Soon Hero */}
        <div className={styles.comingSoonHero}>
          <h1 className={styles.comingSoonTitle}>Installation</h1>
          <p className={styles.comingSoonSubtitle}>
            Coming Soon<span className={styles.blinkingDots}>...</span>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default InstallationPage