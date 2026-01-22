// src/pages/art/murals/my-queens/index.js

import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../../../../components/Layout"
import * as styles from "./my-queens-mural.module.css"

const MyQueensMuralPage = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/myqueens.MOV"
      videoStyle={{
        filter: 'brightness(0.2) contrast(1.1) saturate(1.2)'
      }}
    >
      <section className={styles.muralPage}>
        {/* Back Navigation */}
        <div className={styles.backNavigation}>
          <Link to="/art/murals" className={styles.backLink}>
            Back to Murals
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className={styles.muralHero} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center'
        }}>
          <h1 className={styles.muralTitle}>In the Image of My Queens, I Stand</h1>
          <p style={{
            fontSize: '2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '2rem',
            fontStyle: 'italic'
          }}>
            Coming Soon
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default MyQueensMuralPage