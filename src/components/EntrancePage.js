// src/components/EntrancePage.js
import React, { useState, useEffect } from "react"
import * as styles from "./EntrancePage.module.css"

const EntrancePage = ({ onEnter, videoSrc }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleEnter = () => {
    setIsAnimating(true)
    // Wait for animation to complete before calling onEnter
    setTimeout(() => {
      onEnter()
    }, 1800) // 1.8 seconds for smooth transition
  }

  return (
    <div className={`${styles.entrancePage} ${isAnimating ? styles.animatingOut : ''}`}>
      {/* Video Background */}
      <div className={styles.videoBackground}>
        <video
          autoPlay
          muted
          playsInline
          preload="metadata"
          className={styles.backgroundVideo}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* Social Links - Top Right */}
      <div className={styles.socialLinks}>
        <a href="https://instagram.com/mayammurry" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://tiktok.com/@mayamurry" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/maya-murry" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>

      {/* Center Content */}
      <div className={styles.centerContent}>
        {/* Animated Logo */}
        <div className={styles.logoContainer}>
          <svg width="120" height="120" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.animatedLogo}>
            <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" className={styles.logoOuterCircle}/>
            <path d="M15 25 L25 15 L35 25 L25 35 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" className={styles.logoDiamond}/>
            <circle cx="25" cy="25" r="8" stroke="white" strokeWidth="1" fill="none" opacity="0.6" className={styles.logoInnerCircle}/>
            <path d="M25 17 L29 21 L25 25 L21 21 Z" fill="white" opacity="0.7" className={styles.logoCenter}/>
            <path d="M10 25 Q15 20 20 25 Q15 30 10 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5" className={styles.logoFlowLeft}/>
            <path d="M40 25 Q35 20 30 25 Q35 30 40 25" stroke="white" strokeWidth="1" fill="none" opacity="0.5" className={styles.logoFlowRight}/>
          </svg>
        </div>

        {/* Studio Name */}
        <h1 className={styles.studioName}>
          MĀYĀ MURRY
          <span className={styles.studioText}>STUDIO</span>
        </h1>

        {/* Enter Button */}
        <button className={styles.enterButton} onClick={handleEnter}>
          <span className={styles.enterText}>ENTER</span>
          <div className={styles.buttonGlow}></div>
        </button>
      </div>
    </div>
  )
}

export default EntrancePage
