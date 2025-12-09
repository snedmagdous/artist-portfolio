// src/pages/index.js (homepage)
import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby"
import "../styles/global.css"
import "./index.css"
import "./constellation.css"
import Layout from "../components/Layout";

// Constellation Highlights Component
const ConstellationHighlights = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Highlight pieces data with organic star map positioning
  const highlights = [
    {
      id: 'my-queens',
      title: 'In the Image of My Queens, I Stand',
      type: 'Mural',
      description: 'Monumental mural honoring divine feminine lineage across past, present, and future',
      link: '/art/murals/my-queens',
      image: '/images/constellation/my-queens.jpg',
      position: { x: 50, y: 30 }, // Central upper - largest node
      size: 'large',
      connections: ['ancestral-visions', 'divine-feminine', 'monster-collage', 'love-revolution']
    },
    {
      id: 'ancestral-visions',
      title: 'Ancestral Visions',
      type: 'Painting Series',
      description: 'Exploration of inherited wisdom and cultural memory through portraiture',
      link: '/art/paintings',
      image: '/images/constellation/ancestral-visions.jpg',
      position: { x: 25, y: 45 }, // Left mid
      size: 'medium',
      connections: ['my-queens', 'divine-feminine', 'where-do-you-go', 'monster-collage']
    },
    {
      id: 'divine-feminine',
      title: 'Divine Feminine Portraits',
      type: 'Portrait Series',
      description: 'Celebrating sacred femininity through powerful portraiture',
      link: '/art/paintings',
      image: '/images/constellation/divine-feminine.jpg',
      position: { x: 75, y: 40 }, // Right mid
      size: 'medium',
      connections: ['my-queens', 'ancestral-visions', 'mamma-im-fine', 'love-revolution']
    },
    {
      id: 'where-do-you-go',
      title: 'Where Do You Go When There\'s Nowhere Left to Go?',
      type: 'Illustration Series',
      description: 'Dark illustrations mapping depersonalization and chronic pain',
      link: '/art/illustrations/where-do-you-go',
      image: '/images/constellation/where-do-you-go.jpg',
      position: { x: 20, y: 75 }, // Lower left
      size: 'medium',
      connections: ['ancestral-visions', 'monster-collage']
    },
    {
      id: 'monster-collage',
      title: 'The Monster in All of Us',
      type: 'Collage Series',
      description: 'Confronting the shadow self through mixed media collage',
      link: '/art/collages',
      image: '/images/constellation/monster-collage.jpg',
      position: { x: 45, y: 70 }, // Lower center
      size: 'small',
      connections: ['my-queens', 'ancestral-visions', 'where-do-you-go', 'love-revolution']
    },
    {
      id: 'love-revolution',
      title: 'Love as Revolution',
      type: 'Documentary Film',
      description: 'A documentary exploring Palestinian solidarity and intersectional liberation',
      link: '/film/documentaries',
      image: '/images/constellation/love-revolution.jpg',
      position: { x: 70, y: 75 }, // Lower right
      size: 'large',
      connections: ['my-queens', 'divine-feminine', 'monster-collage', 'mamma-im-fine']
    },
    {
      id: 'mamma-im-fine',
      title: 'Mamma, I\'m Fine',
      type: 'Poetry',
      description: 'A powerful poem on generational trauma and healing',
      link: '/writing',
      image: '/images/constellation/mamma-im-fine.jpg',
      position: { x: 85, y: 55 }, // Right mid-lower
      size: 'small',
      connections: ['divine-feminine', 'love-revolution']
    }
  ];

  return (
    <section className="constellation-section">
      <div className="constellation-container">
        {/* Section Header */}
        <div className="constellation-header">
          <div className="section-indicator">
            <span className="indicator-dot"></span>
            <span className="indicator-text">Featured Works</span>
          </div>
          <h2 className="constellation-title">Constellation of Creations</h2>
          <p className="constellation-subtitle">
            Navigate through my most significant works — each piece a star in an interconnected universe of liberation, healing, and creative resistance
          </p>
        </div>

        {/* Constellation Map */}
        <div className="constellation-map">
          {/* SVG Canvas for Connection Lines */}
          <svg className="constellation-canvas" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              {/* Glow filter */}
              <filter id="constellationGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Draw connection lines */}
            {highlights.map((node) =>
              node.connections.map((targetId) => {
                const target = highlights.find(h => h.id === targetId);
                if (!target) return null;

                const isHighlighted = hoveredNode === node.id || hoveredNode === targetId;

                return (
                  <line
                    key={`${node.id}-${targetId}`}
                    x1={node.position.x}
                    y1={node.position.y}
                    x2={target.position.x}
                    y2={target.position.y}
                    className={`constellation-line ${isHighlighted ? 'highlighted' : ''}`}
                    filter="url(#constellationGlow)"
                  />
                );
              })
            )}

            {/* Decorative constellation branches - mini web constellations unfurling */}
            {/* From My Queens (central node) - largest constellation */}
            <line x1="50" y1="30" x2="52" y2="18" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="50" y1="30" x2="58" y2="22" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="50" y1="30" x2="42" y2="22" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="50" y1="30" x2="48" y2="18" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="52" y1="18" x2="55" y2="12" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="52" y1="18" x2="50" y2="10" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="58" y1="22" x2="62" y2="18" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="58" y1="22" x2="60" y2="26" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="42" y1="22" x2="38" y2="18" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="42" y1="22" x2="40" y2="26" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="55" cy="12" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} />
            <circle cx="50" cy="10" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} />
            <circle cx="62" cy="18" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} />
            <circle cx="38" cy="18" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} />
            <circle cx="60" cy="26" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} />
            <circle cx="40" cy="26" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'my-queens' ? 'highlighted' : ''}`} />

            {/* From Ancestral Visions - web unfurling to left */}
            <line x1="25" y1="45" x2="18" y2="42" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="25" y1="45" x2="20" y2="50" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="25" y1="45" x2="18" y2="48" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="18" y1="42" x2="14" y2="38" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="18" y1="42" x2="12" y2="42" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="20" y1="50" x2="16" y2="54" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="18" y1="48" x2="14" y2="50" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="14" cy="38" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} />
            <circle cx="12" cy="42" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} />
            <circle cx="16" cy="54" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} />
            <circle cx="14" cy="50" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'ancestral-visions' ? 'highlighted' : ''}`} />

            {/* From Divine Feminine - web unfurling to right */}
            <line x1="75" y1="40" x2="82" y2="38" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="75" y1="40" x2="80" y2="32" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="75" y1="40" x2="82" y2="44" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="82" y1="38" x2="88" y2="36" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="82" y1="38" x2="86" y2="42" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="80" y1="32" x2="84" y2="28" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="82" y1="44" x2="86" y2="48" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="88" cy="36" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} />
            <circle cx="84" cy="28" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} />
            <circle cx="86" cy="42" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} />
            <circle cx="86" cy="48" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'divine-feminine' ? 'highlighted' : ''}`} />

            {/* From Love as Revolution (larger node) - elaborate web downward */}
            <line x1="70" y1="75" x2="72" y2="82" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="70" y1="75" x2="78" y2="78" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="70" y1="75" x2="68" y2="82" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="70" y1="75" x2="76" y2="82" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="72" y1="82" x2="74" y2="88" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="72" y1="82" x2="70" y2="88" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="68" y1="82" x2="65" y2="88" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="78" y1="78" x2="82" y2="80" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="76" y1="82" x2="78" y2="88" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="74" cy="88" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} />
            <circle cx="70" cy="88" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} />
            <circle cx="65" cy="88" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} />
            <circle cx="78" cy="88" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} />
            <circle cx="82" cy="80" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'love-revolution' ? 'highlighted' : ''}`} />

            {/* From Where Do You Go - web unfurling lower left */}
            <line x1="20" y1="75" x2="14" y2="78" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="20" y1="75" x2="18" y2="82" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="20" y1="75" x2="14" y2="84" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="14" y1="78" x2="10" y2="80" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="14" y1="78" x2="8" y2="76" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="18" y1="82" x2="16" y2="88" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="14" y1="84" x2="10" y2="88" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="10" cy="80" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} />
            <circle cx="8" cy="76" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} />
            <circle cx="16" cy="88" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} />
            <circle cx="10" cy="88" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'where-do-you-go' ? 'highlighted' : ''}`} />

            {/* From Mamma I'm Fine */}
            <line x1="85" y1="55" x2="90" y2="52" className={`constellation-branch ${hoveredNode === 'mamma-im-fine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="85" y1="55" x2="92" y2="58" className={`constellation-branch ${hoveredNode === 'mamma-im-fine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="90" y1="52" x2="94" y2="48" className={`constellation-branch ${hoveredNode === 'mamma-im-fine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="92" y1="58" x2="95" y2="62" className={`constellation-branch ${hoveredNode === 'mamma-im-fine' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="94" cy="48" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'mamma-im-fine' ? 'highlighted' : ''}`} />
            <circle cx="95" cy="62" r="0.2" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'mamma-im-fine' ? 'highlighted' : ''}`} />

            {/* From Monster Collage (center lower) */}
            <line x1="45" y1="70" x2="42" y2="78" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="45" y1="70" x2="48" y2="77" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="45" y1="70" x2="38" y2="72" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="42" y1="78" x2="40" y2="84" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <line x1="48" y1="77" x2="50" y2="82" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} filter="url(#constellationGlow)" />
            <circle cx="40" cy="84" r="0.3" fill="rgba(255, 255, 255, 0.6)" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} />
            <circle cx="50" cy="82" r="0.25" fill="rgba(255, 255, 255, 0.5)" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} />
            <circle cx="38" cy="72" r="0.2" fill="rgba(255, 255, 255, 0.4)" className={`constellation-branch ${hoveredNode === 'monster-collage' ? 'highlighted' : ''}`} />
          </svg>

          {/* Constellation Nodes */}
          {highlights.map((node, index) => (
            <Link
              key={node.id}
              to={node.link}
              className={`constellation-node ${node.size} ${hoveredNode === node.id ? 'active' : ''}`}
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                '--node-delay': `${index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Node Glow */}
              <div className="node-glow"></div>

              {/* Node Core */}
              <div className="node-core">
                <div className="node-image-wrapper">
                  <img
                    src={node.image}
                    alt={node.title}
                    className="node-image"
                  />
                </div>
                <div className="node-pulse"></div>
              </div>

              {/* Node Info (appears on hover) */}
              <div className="node-info">
                <span className="node-type">{node.type}</span>
                <h3 className="node-title">{node.title}</h3>
                <p className="node-description">{node.description}</p>
              </div>
            </Link>
          ))}

          {/* Floating particles/stars */}
          <div className="constellation-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  '--particle-delay': `${Math.random() * 5}s`,
                  '--particle-duration': `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [language, setLanguage] = useState('EN');
  const videoRef = useRef(null);
  const portfolioSectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Section refs for scroll snapping
  const heroSectionRef = useRef(null);
  const mailingListSectionRef = useRef(null);

  // Section tracking for navigation (non-intrusive)
  const [currentSection, setCurrentSection] = useState(0);

  // Slideshow dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mailing list state
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  // Video background setup with ping-pong loop
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.defaultMuted = true;
      video.muted = true;
      let playDirection = 1; // 1 for forward, -1 for reverse
      let animationFrameId = null;

      // Manually control reverse playback since negative playbackRate isn't supported
      const updateVideoTime = () => {
        if (playDirection === -1 && video.currentTime > 0.033) {
          video.currentTime -= 0.033; // Approximately 30fps
          animationFrameId = requestAnimationFrame(updateVideoTime);
        } else if (playDirection === -1 && video.currentTime <= 0.033) {
          // Reached the beginning, switch to forward
          playDirection = 1;
          video.currentTime = 0;
          video.play().catch(e => console.log("Play failed:", e));
        }
      };

      // Ping-pong loop: play forward then reverse
      const handleTimeUpdate = () => {
        // Check if we've reached the end (forward)
        if (playDirection === 1 && video.currentTime >= video.duration - 0.1) {
          playDirection = -1;
          video.pause();
          animationFrameId = requestAnimationFrame(updateVideoTime);
        }
      };

      // Ensure video plays immediately
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
        }
      };

      // Play video as soon as possible
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo);
      }

      // Add ping-pong listener
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        video.removeEventListener('loadeddata', playVideo);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  // Natural scroll behavior - no interference
  useEffect(() => {
    // Remove all scroll intervention - let browser handle natural scrolling
    // Keep section tracking for button navigation only
    const handleScroll = () => {
      const sections = [
        heroSectionRef.current,
        portfolioSectionRef.current,
        mailingListSectionRef.current
      ];

      // Update current section based on natural scroll position (for button states)
      let newCurrentSection = 0;
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            newCurrentSection = index;
          }
        }
      });

      if (newCurrentSection !== currentSection) {
        setCurrentSection(newCurrentSection);
      }
    };

    // Use passive scroll listener for section tracking only
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  // Slideshow dragging functionality
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.classList.add('paused');
  };

  const handleMouseLeave = () => {
    if (!carouselRef.current) return;
    setIsDragging(false);
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('paused');
      }
    }, 2000); // Resume animation after 2 seconds
  };

  const handleMouseUp = () => {
    if (!carouselRef.current) return;
    setIsDragging(false);
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('paused');
      }
    }, 2000); // Resume animation after 2 seconds
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile carousel
  const handleCarouselTouchStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.classList.add('paused');
  };

  const handleCarouselTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCarouselTouchEnd = () => {
    if (!carouselRef.current) return;
    setIsDragging(false);
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove('paused');
      }
    }, 2000);
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollToMailingList = () => {
    document.getElementById('contact-section').scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Main categories for navigation
  const mainCategories = [
    {
      id: 'art',
      title: 'Art',
      description: 'Visual expressions of identity and resistance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      link: '/art',
      subcategories: [
        {
          id: 'paintings',
          title: 'Paintings',
          link: '/art/paintings'
        },
        {
          id: 'murals',
          title: 'Murals',
          link: '/art/murals'
        },
        {
          id: 'illustrations',
          title: 'Illustrations',
          link: '/art/illustrations'
        },
        {
          id: 'collages',
          title: 'Collages',
          link: '/art/collages'
        }
      ]
    },
    {
      id: 'film',
      title: 'Film',
      description: 'Cinematic storytelling and visual narratives',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21L16 21"/>
          <path d="M12 17L12 21"/>
        </svg>
      ),
      link: '/film',
      subcategories: [
        {
          id: 'documentaries',
          title: 'Documentaries',
          link: '/film/documentaries'
        },
        {
          id: 'shortfilms',
          title: 'Short Films',
          link: '/film/short-films'
        },
        {
          id: 'microfilms',
          title: 'Micro Films',
          link: '/film/micro-films'
        }
      ]
    },
    {
      id: 'writing',
      title: 'Writing',
      description: 'Words that heal, resist, and transform',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      link: '/writing',
      subcategories: [
        {
          id: 'poetry',
          title: 'Poetry',
          link: '/writing/poetry'
        },
        {
          id: 'creative-writing',
          title: 'Creative Writing',
          link: '/writing/creative-writing'
        },
        {
          id: 'novel-writing',
          title: 'Novel Writing',
          link: '/writing/novel-writing'
        },
        {
          id: 'video-essays',
          title: 'Video Essays',
          link: '/writing/video-essays'
        }
      ]
    },
    {
      id: 'coding',
      title: 'Coding',
      description: 'Technology for liberation and social impact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M16 18L22 12L16 6"/>
          <path d="M8 6L2 12L8 18"/>
        </svg>
      ),
      link: '/resume',
      subcategories: [
        {
          id: 'technical-resume',
          title: 'Technical Resume',
          link: '/resume'
        },
        {
          id: 'creative-resume',
          title: 'Creative Resume',
          link: '/resume'
        }
      ]
    }
  ]

  // All portfolio items for slideshow (keeping original structure)
  const portfolioItems = [
    // Art Subcategories
    {
      id: 'paintings',
      title: 'Paintings',
      description: 'Canvas explorations of identity and resistance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      link: '/art/paintings'
    },
    {
      id: 'murals',
      title: 'Murals',
      description: 'Large-scale community art and storytelling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="M21 15L16 10L5 21"/>
        </svg>
      ),
      link: '/art/murals'
    },
    {
      id: 'illustrations',
      title: 'Illustrations',
      description: 'Digital art celebrating divine femininity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21.44 11.05L12.25 21.9C11.84 22.31 11.16 22.31 10.75 21.9L1.56 11.05C1.15 10.64 1.15 9.96 1.56 9.55L10.75 0.7C11.16 0.29 11.84 0.29 12.25 0.7L21.44 9.55C21.85 9.96 21.85 10.64 21.44 11.05Z"/>
        </svg>
      ),
      link: '/art/illustrations'
    },
    {
      id: 'collages',
      title: 'Collages',
      description: 'Mixed media narratives and compositions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      link: '/art/collages'
    },
    // Film Subcategories
    {
      id: 'documentaries',
      title: 'Documentaries',
      description: 'Truth-telling through cinematic storytelling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M8 21L16 21"/>
          <path d="M12 17L12 21"/>
        </svg>
      ),
      link: '/film/documentaries'
    },
    {
      id: 'shortfilms',
      title: 'Short Films',
      description: 'Concise narratives with powerful impact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      ),
      link: '/film/short-films'
    },
    {
      id: 'microfilms',
      title: 'Micro Films',
      description: 'Brief moments of profound meaning',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10,8 16,12 10,16 10,8"/>
        </svg>
      ),
      link: '/film/micro-films'
    },
    // Writing Subcategories
    {
      id: 'poetry',
      title: 'Poetry',
      description: 'Verses of resistance and healing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      ),
      link: '/writing/poetry'
    },
    {
      id: 'creative-writing',
      title: 'Creative Writing',
      description: 'Imaginative prose and storytelling',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 20H21"/>
          <path d="M16.5 3.5A2.121 2.121 0 0 1 19 6L7 18L3 19L4 15L16.5 3.5Z"/>
        </svg>
      ),
      link: '/writing/creative-writing'
    },
    {
      id: 'novel-writing',
      title: 'Novel Writing',
      description: 'Long-form narratives and world-building',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20"/>
          <path d="M6.5 2H20V22H6.5C5.837 22 5.201 21.737 4.732 21.268C4.263 20.799 4 20.163 4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z"/>
        </svg>
      ),
      link: '/writing/novel-writing'
    },
    {
      id: 'video-essays',
      title: 'Video Essays',
      description: 'Visual analysis and commentary',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <path d="M10 9L14 12L10 15V9Z"/>
        </svg>
      ),
      link: '/writing/video-essays'
    },
    // Technology
    {
      id: 'coding',
      title: 'Coding',
      description: 'Technology for liberation and social impact',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M16 18L22 12L16 6"/>
          <path d="M8 6L2 12L8 18"/>
        </svg>
      ),
      link: '/resume'
    }
  ]

  /* Homescreen */
  return (
    <Layout language={language} setLanguage={setLanguage}>
    <div className="home-Container">
      {/* Video Background - Separate from content */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-tag"
          ref={videoRef}
          style={{
            filter: 'brightness(0.35) contrast(1.2) saturate(2.0)'
          }}
        >
          <source src="https://pub-3f206994e69e42408f7908b2177b9ed9.r2.dev/about.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <section className="hero-section" ref={heroSectionRef}>
        {/* Background with overlay */}

        {/* Hero content */}
        <main className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">
              MĀYĀ MURRY<br /><span className="studio-text">STUDIO</span>
            </h1>
            <p className="arabic-text">استوديو مايا مرعي</p>
            <p className="artist-bio">Artist • Filmmaker • Programmer</p>

            <div className="cta-buttons">
              <button onClick={scrollToPortfolio} className="cta-button secondary">
                Portfolio
              </button>
              <Link to="/about" className="cta-button white">
                About
              </Link>
              <Link to="/contact" className="cta-button secondary">
                Contact
              </Link>
            </div>

            <Link to="/shop" className="shop-button">
              <span className="shop-button-text">SHOP</span>
              <div className="shop-button-gloss"></div>
            </Link>
          </div>
        </main>
      </section>

      {/* Portfolio Section */}
      <section 
        id="portfolio-section" 
        className="portfolio-section"
        ref={portfolioSectionRef}
      >
        <div className="portfolio-container">
          <div className="portfolio-header">
            <div className="section-indicator">
              <span className="indicator-dot"></span>
              <span className="indicator-text">Portfolio</span>
            </div>
            <Link to="/portfolio" className="portfolio-title-link">
              <h2 className="portfolio-title">My Portfolio</h2>
            </Link>
            <p className="portfolio-subtitle">
              Where I reimagine ways of living and being
            </p>

            {/* Main Category Navigation with Hover Dropdowns */}
            <div className="portfolio-nav-links">
              {mainCategories.map((category, index) => (
                <div key={category.id} className="portfolio-nav-category">
                  <Link
                    to={category.link}
                    className="portfolio-nav-link"
                  >
                    <div className="portfolio-nav-icon">
                      {category.icon}
                    </div>
                    <span className="portfolio-nav-text">{category.title}</span>
                  </Link>

                  {/* Subcategories Dropdown */}
                  {category.subcategories && category.subcategories.length > 0 && (
                    <div className="portfolio-subcategories">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Link
                          key={subcategory.id}
                          to={subcategory.link}
                          className="portfolio-subcategory-link"
                        >
                          <span className="subcategory-title">{subcategory.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Slideshow */}
          <div className="portfolio-slideshow">
            <div
              className="portfolio-carousel"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleCarouselTouchStart}
              onTouchMove={handleCarouselTouchMove}
              onTouchEnd={handleCarouselTouchEnd}
            >
              {/* First set of items */}
              {portfolioItems.map((item, index) => (
                <Link
                  key={`first-${item.id}`}
                  to={item.link}
                  className="portfolio-slide"
                  style={{ '--slide-index': index }}
                >
                  <div className="portfolio-slide-content">
                    <div className="portfolio-icon">
                      {item.icon}
                    </div>
                    <h3 className="portfolio-slide-title">{item.title}</h3>
                    <p className="portfolio-slide-description">{item.description}</p>
                  </div>
                  <div className="portfolio-slide-glow"></div>
                </Link>
              ))}
              {/* Duplicate set for seamless loop */}
              {portfolioItems.map((item, index) => (
                <Link
                  key={`second-${item.id}`}
                  to={item.link}
                  className="portfolio-slide"
                  style={{ '--slide-index': index + portfolioItems.length }}
                >
                  <div className="portfolio-slide-content">
                    <div className="portfolio-icon">
                      {item.icon}
                    </div>
                    <h3 className="portfolio-slide-title">{item.title}</h3>
                    <p className="portfolio-slide-description">{item.description}</p>
                  </div>
                  <div className="portfolio-slide-glow"></div>
                </Link>
              ))}
              {/* Third set for extra smooth looping */}
              {portfolioItems.map((item, index) => (
                <Link
                  key={`third-${item.id}`}
                  to={item.link}
                  className="portfolio-slide"
                  style={{ '--slide-index': index + (portfolioItems.length * 2) }}
                >
                  <div className="portfolio-slide-content">
                    <div className="portfolio-icon">
                      {item.icon}
                    </div>
                    <h3 className="portfolio-slide-title">{item.title}</h3>
                    <p className="portfolio-slide-description">{item.description}</p>
                  </div>
                  <div className="portfolio-slide-glow"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Constellation Highlights Section */}
      <ConstellationHighlights />

      {/* Mailing List Section */}
      <section className="mailing-list-section" ref={mailingListSectionRef}>
        <div className="mailing-list-container">
          <div className="mailing-list-header">
            <div className="section-indicator">
              <span className="indicator-dot"></span>
              <span className="indicator-text">Stay Connected</span>
            </div>
            <h2 className="mailing-list-title">Join the Mailing List</h2>
            <p className="mailing-list-subtitle">
              Be the first to know about new artwork, exhibitions, and creative projects
            </p>
          </div>

          {!subscribeSuccess ? (
            <form
              className="mailing-list-form"
              name="homepage-newsletter"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(new FormData(form)).toString()
                })
                  .then(() => {
                    setSubscribeSuccess(true)
                    setEmail('')
                  })
                  .catch((error) => console.error(error))
              }}
            >
              <input type="hidden" name="form-name" value="homepage-newsletter" />
              <div style={{ display: 'none' }}>
                <label htmlFor="bot-field">Don't fill this out if you're human:</label>
                <input name="bot-field" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mailing-list-input"
              />
              <button type="submit" className="mailing-list-button">
                Subscribe
              </button>
            </form>
          ) : (
            <div className="success-message">
              ✓ Thank you for subscribing! You'll hear from me soon.
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <div className="section-indicator">
              <span className="indicator-dot"></span>
              <span className="indicator-text">Get in Touch</span>
            </div>
            <h2 className="contact-title">Contact</h2>
            <p className="contact-subtitle">
              Let's create something meaningful together
            </p>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            name="homepage-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="homepage-contact" />
            <div style={{ display: 'none' }}>
              <label htmlFor="bot-field">Don't fill this out if you're human:</label>
              <input name="bot-field" />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="1" required></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
            </button>
          </form>

          {/* Commission Callout */}
          <div className="commission-callout">
            <h3 className="commission-callout-title">Interested in a Commission?</h3>
            <Link to="/commission" className="commission-callout-btn">
              Click Here
            </Link>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  )
}