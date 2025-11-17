# System Architecture

## Overview

The Maya Murry portfolio is built on **Gatsby.js**, a React-based static site generator that provides optimal performance through pre-rendering and intelligent code splitting. The architecture emphasizes component modularity, smooth multimedia experiences, and responsive design while maintaining clean separation of concerns.

## Technical Stack

### Core Technologies
- **Gatsby.js 5.14.5** - Static site generation with React
- **React 18.2.0** - Component-based UI framework with modern Hooks API
- **CSS Modules** - Scoped styling preventing namespace pollution
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **PostCSS** - CSS processing with autoprefixer

### Key Dependencies
- `gatsby-plugin-sharp` - Image optimization and transformation
- `gatsby-transformer-sharp` - Image processing pipeline
- `gatsby-source-filesystem` - Static file sourcing from filesystem
- `gatsby-plugin-google-fonts` - Font loading optimization
- `gatsby-plugin-postcss` - PostCSS/Tailwind integration
- `@google-cloud/translate` - Multi-language support (EN/AR)

### Infrastructure
- **Hosting**: Netlify (with form handling integration)
- **CDN**: Cloudflare R2 for video/media delivery
- **Translation**: Google Cloud Translation API

---

## Project Structure

```
khadra/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Layout.js        # Master layout wrapper (794 lines)
│   │   ├── EntrancePage.js  # Animated landing screen
│   │   └── *.module.css     # Component-scoped styles
│   │
│   ├── pages/               # Gatsby file-based routing
│   │   ├── index.js         # Homepage with hero & carousel
│   │   ├── art/             # Visual art portfolio
│   │   │   ├── paintings/   # Categorized by medium
│   │   │   ├── murals/
│   │   │   ├── illustrations/
│   │   │   ├── collages/
│   │   │   ├── installation/
│   │   │   └── performance/
│   │   ├── film/            # Film portfolio
│   │   │   ├── documentaries/
│   │   │   ├── short-films/
│   │   │   └── micro-films/
│   │   ├── writing/         # Written work
│   │   │   ├── poetry/
│   │   │   ├── creative-writing/
│   │   │   ├── novel-writing/
│   │   │   └── video-essays/
│   │   ├── portfolio/       # Masonry gallery of all work
│   │   ├── resume/          # Interactive timeline
│   │   ├── contact/         # Contact form
│   │   ├── commission/      # Commission inquiry
│   │   ├── shop/            # Product showcase
│   │   └── success.js       # Form submission confirmation
│   │
│   ├── styles/
│   │   └── global.css       # Global styles, animations, responsive
│   │
│   └── utils/
│       └── translate.js     # Translation utility with caching
│
├── static/
│   └── images/              # Static image assets
│
├── gatsby-config.js         # Gatsby configuration
├── gatsby-browser.js        # Browser API overrides
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS plugins
```

---

## Core Architecture Patterns

### 1. Layout Wrapper Pattern

Every page in the application uses the `<Layout>` component as a wrapper, ensuring consistent header, footer, and navigation across all routes.

**Benefits:**
- Consistent user experience
- Centralized navigation logic
- Shared video background system
- Global state management (language, pause controls)

**Implementation:**
```jsx
// Every page follows this pattern
const Page = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <Layout
      language={language}
      setLanguage={setLanguage}
      hasVideoBackground={true}
      videoSrc="..."
    >
      {/* Page-specific content */}
    </Layout>
  )
}
```

### 2. File-Based Routing

Gatsby automatically generates routes based on the file structure in `src/pages/`:

```
src/pages/index.js           → /
src/pages/art/index.js       → /art
src/pages/art/murals/index.js → /art/murals
src/pages/film/documentaries/index.js → /film/documentaries
```

**Advantages:**
- Intuitive route structure
- No manual route configuration
- Automatic code splitting per route
- Clear project organization

### 3. Component-Scoped CSS Modules

Each page and component has its own `.module.css` file for scoped styling:

```jsx
import * as styles from './page.module.css'

<div className={styles.container}>
  <h1 className={styles.title}>Content</h1>
</div>
```

**Benefits:**
- No global namespace pollution
- Prevents accidental style conflicts
- Clear component-style relationships
- Better maintainability

**Combined with Global Styles:**
- `src/styles/global.css` handles layout, animations, responsive design
- Module CSS handles component-specific styling
- Tailwind utilities provide quick inline styling

### 4. State Management Strategy

**Current Implementation: Local State Only**

The application uses React Hooks (`useState`, `useEffect`, `useRef`) for all state management:

```jsx
// Page-level state
const [language, setLanguage] = useState('EN')
const [currentSection, setCurrentSection] = useState(0)
const [isScrolling, setIsScrolling] = useState(false)

// Ref-based DOM manipulation
const videoRef = useRef(null)
const heroSectionRef = useRef(null)
```

**State Lifting Pattern:**
- Language state managed at page level
- Passed as props to Layout component
- Layout propagates to navigation elements

**Browser Storage for Persistence:**
```javascript
localStorage.setItem('globalBackgroundPaused', pauseState)
```

**No External State Library:**
- No Redux, Context API, or MobX
- Keeps bundle size small
- Sufficient for current app complexity
- Trade-off: Some prop drilling for language state

---

## Component Architecture

### Layout Component (`src/components/Layout.js`)

**Purpose:** Master wrapper providing consistent structure and shared functionality

**Key Responsibilities:**
1. **Navigation System**
   - Desktop horizontal navigation
   - Mobile hamburger menu with backdrop
   - Responsive design (breakpoint: 1024px)

2. **Video Background Management**
   - Seamless loop system with fade transitions
   - Global pause/play controls
   - Cross-page state persistence via localStorage
   - Targets all `video[autoplay][muted]` elements

3. **Language Toggle**
   - EN/AR switching
   - Integrated with Google Translate API
   - Visual toggle in header

4. **Footer**
   - Quick links navigation
   - Portfolio category links
   - Social media links (LinkedIn, GitHub, Instagram, TikTok, YouTube, Substack, Twitter)
   - Contact information

**Props Interface:**
```typescript
{
  children: ReactNode,          // Page content
  language: 'EN' | 'AR',        // Current language
  setLanguage: (lang) => void,  // Language setter
  hasVideoBackground: boolean,  // Enable video bg
  videoSrc: string,             // Video URL
  videoStyle?: object,          // Custom video CSS
  videoContainerStyle?: object, // Container CSS
  overlayStyle?: object,        // Overlay customization
  playbackRate?: number,        // Video speed (default 1.0)
  videoFilter?: string          // CSS filters (brightness, contrast, saturate)
}
```

### EntrancePage Component

**Purpose:** Animated landing screen shown before main site access

**Features:**
- Full-screen video background
- Animated SVG logo with glow effects
- Social links
- Enter button with smooth exit animation (1.8s)
- Scale + opacity transform on exit

**State Flow:**
```jsx
[Initial] → [User clicks Enter] → [isAnimating = true] →
[1.8s animation] → [onEnter callback] → [Main site]
```

### Page Components Pattern

All portfolio pages (Art, Film, Writing, etc.) follow a consistent structure:

**Common Features:**
1. **Scroll Snapping System**
   - Multiple section refs (hero, categories, statement)
   - Wheel event handling with `requestAnimationFrame`
   - Touch gesture support for mobile (50px minimum swipe)
   - 1-second delay between section transitions

2. **Video Integration**
   - Page-specific background videos
   - Custom filters per section
   - Reference to Layout video system

3. **Responsive Design**
   - Mobile-first approach
   - Breakpoint-based styling
   - Touch-optimized interactions

**Standard Structure:**
```jsx
const Page = () => {
  // State
  const [language, setLanguage] = useState('EN')
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Refs
  const heroRef = useRef(null)
  const categoriesRef = useRef(null)
  const videoRef = useRef(null)

  // Scroll snapping logic
  useEffect(() => {
    const handleWheel = (e) => { /* ... */ }
    const handleTouchStart = (e) => { /* ... */ }
    const handleTouchEnd = (e) => { /* ... */ }

    document.addEventListener('wheel', handleWheel, {passive: false})
    // ... cleanup
  }, [currentSection, isScrolling])

  return (
    <Layout {...layoutProps}>
      <div ref={heroRef}>Hero Section</div>
      <div ref={categoriesRef}>Categories</div>
    </Layout>
  )
}
```

---

## Data Flow Architecture

### Unidirectional Data Flow

```
Page Component (index.js, art/index.js, etc.)
  │
  ├── Manages local state
  │   ├── language: 'EN' | 'AR'
  │   ├── currentSection: number
  │   ├── isScrolling: boolean
  │   └── form state, modals, etc.
  │
  ├── Passes props DOWN to Layout
  │   └── Layout receives: language, setLanguage, video config
  │
  └── Layout renders
      ├── Header (receives language from props)
      ├── Navigation (receives language)
      ├── children (page content)
      └── Footer (receives language)
```

### Form Data Flow

**Netlify Forms Integration:**

```
Contact/Newsletter Form (page component)
  │
  ├── HTML form with data-netlify="true"
  ├── Honeypot field (bot-field) for spam protection
  │
  └── Submit (method="POST")
      │
      ├── Netlify Form Handler (server-side)
      │   ├── Validates form data
      │   ├── Filters spam via honeypot
      │   └── Stores submission
      │
      └── Redirect to /success page
```

**Form Types:**
- `name="contact"` - Contact form
- `name="homepage-newsletter"` - Homepage mailing list
- `name="shop-newsletter"` - Shop mailing list
- `name="commission-inquiry"` - Commission form

### Translation Data Flow

```
Page Component
  │
  ├── User clicks language toggle (EN → AR)
  │   └── setLanguage('AR')
  │
  ├── Text content needs translation
  │   └── Call translateText(text, 'ar')
  │
  └── src/utils/translate.js
      │
      ├── Check cache: translationCache.get(`${text}_ar`)
      │   ├── Hit → Return cached translation
      │   └── Miss → Continue
      │
      ├── Call Google Cloud Translation API
      │   ├── Send: text, target language
      │   └── Receive: translated text
      │
      ├── Store in cache
      │   └── translationCache.set(`${text}_ar`, translatedText)
      │
      └── Return translated text
```

**Cache Structure:**
```javascript
translationCache = new Map()
// Key: `${originalText}_${targetLang}`
// Value: translatedText
```

---

## Routing Architecture

### Static Route Generation

Gatsby builds static HTML for each route at build time:

**Build Process:**
```
gatsby build
  │
  ├── Scan src/pages/ directory
  ├── Generate HTML for each .js file
  ├── Create route structure
  ├── Optimize assets (images, CSS, JS)
  ├── Code-split by route
  │
  └── Output to public/ directory
      ├── index.html          (/)
      ├── art/index.html      (/art)
      ├── art/murals/index.html (/art/murals)
      └── ...
```

**Client-Side Navigation:**
- Uses Gatsby's `<Link>` component
- Prefetches linked pages on hover
- Instant page transitions (no full reload)
- Maintains SPA experience

**Custom Scroll Behavior:**

Defined in `gatsby-browser.js`:

```javascript
export const shouldUpdateScroll = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, 0)
  return false // Disable Gatsby's default scroll restoration
}
```

**Purpose:** Forces scroll to top on every page navigation

---

## Video System Architecture

### Background Video Management

**Two-Level System:**

1. **Layout-Level Video Background**
   - Managed by `Layout.js`
   - Fixed positioning behind all content
   - Shared across page sections
   - Props: `videoSrc`, `videoFilter`, `playbackRate`

2. **Content-Level Videos**
   - Individual video elements within page content
   - Can be paused/played independently
   - Used for section-specific visual content

### Seamless Loop Implementation

**Challenge:** Video restart causes visible jump

**Solution:** Fade transition system

```javascript
// In Layout.js useEffect
const checkVideoTime = () => {
  const video = videoRef.current
  if (!video) return

  // Start fade 0.5s before end
  if (video.duration - video.currentTime < 0.5) {
    video.style.opacity = '0.8' // Subtle fade
  }

  // Restart at end
  if (video.currentTime >= video.duration - 0.1) {
    video.currentTime = 0
    video.play()
    // Fade back in
    setTimeout(() => { video.style.opacity = '1' }, 100)
  }
}

// Check every animation frame
const animationFrame = setInterval(checkVideoTime, 100)
```

**Benefits:**
- Smooth, nearly imperceptible loop
- No jarring visual jump
- Maintains immersive experience

### Global Pause System

**Requirement:** Single control to pause all background videos

**Implementation:**

```javascript
const toggleGlobalPause = () => {
  const newPauseState = !isBackgroundPaused
  setIsBackgroundPaused(newPauseState)
  localStorage.setItem('globalBackgroundPaused', newPauseState.toString())

  // Target all autoplay videos
  const allVideos = document.querySelectorAll(
    'video[autoplay][muted], ' +
    '.layout-video-background__video, ' +
    '.video-background video, ' +
    '.background-video'
  )

  allVideos.forEach(video => {
    if (newPauseState) {
      video.pause()
    } else {
      video.play()
    }
  })
}
```

**State Persistence:**
- Pause state stored in `localStorage`
- Restored on page load
- Persists across navigation

**UI Indicator:**
- Pause/play icon toggle in header
- Hover shows "Pause all backgrounds" / "Play all backgrounds"
- Visual feedback (icon rotation)

### Video Optimization Strategy

**Delivery:**
- Cloudflare R2 CDN for fast, global delivery
- MP4 format for broad compatibility

**HTML Attributes:**
```html
<video
  autoPlay          // Start on load
  muted             // Required for autoplay
  playsInline       // iOS mobile support
  preload="auto"    // Aggressive preloading
  loop={false}      // Manual loop for seamless transitions
>
```

**CSS Styling:**
```css
.layout-video-background__video {
  position: fixed;
  top: -10px;       /* Extend slightly */
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  object-fit: cover; /* Maintain aspect ratio */
  z-index: -1;       /* Behind content */
}
```

**Filters:**
- Applied via inline styles
- Example: `filter: brightness(0.55) contrast(1.6) saturate(1.9)`
- Customizable per page for visual consistency

---

## Responsive Design Architecture

### Breakpoint Strategy

**Mobile-First Approach:**

1. **Base Styles:** Designed for mobile (< 480px)
2. **Progressive Enhancement:** Add complexity for larger screens

**Breakpoints:**
```css
/* Extra Small Mobile */
@media (max-width: 480px) { /* ... */ }

/* Mobile */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr; /* Single column */
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .desktop-nav { display: none !important; }
  .mobile-menu-button { display: flex !important; }
}

/* Desktop */
@media (min-width: 1025px) {
  /* Full layout */
}
```

### Navigation Responsive Strategy

**Desktop (> 1024px):**
- Horizontal navigation bar
- Full link text
- Logo + nav + controls in grid layout

**Mobile/Tablet (≤ 1024px):**
- Hamburger menu icon
- Full-screen overlay menu
- Backdrop blur effect
- Touch-optimized tap targets

**Implementation:**
```jsx
// Mobile menu toggle
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

// CSS controls visibility
<nav className="desktop-nav"> {/* Hidden on mobile */}
<button className="mobile-menu-button"> {/* Hidden on desktop */}
<div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
```

### Scroll Interaction Responsive Behavior

**Desktop:**
- Mouse wheel scroll for section snapping
- Pixel-perfect scroll detection

**Mobile:**
- Touch gesture support
- 50px minimum swipe distance threshold
- Prevents accidental section changes

```javascript
// Mobile touch handling
let startY = 0
const handleTouchStart = (e) => {
  startY = e.touches[0].clientY
}

const handleTouchEnd = (e) => {
  const endY = e.changedTouches[0].clientY
  const distance = startY - endY

  if (Math.abs(distance) > 50) { // 50px threshold
    // Trigger section change
  }
}
```

---

## Build & Deployment Architecture

### Build Process

**Development:**
```bash
npm run develop
# Starts gatsby develop
# Hot module replacement enabled
# GraphQL explorer at localhost:8000/___graphql
```

**Production Build:**
```bash
npm run build
# Runs gatsby build
# Outputs to public/ directory
# Generates:
#   - Static HTML for each route
#   - Optimized JavaScript bundles (code-split)
#   - Processed CSS files
#   - Optimized images
```

**Gatsby Build Optimizations:**
1. **Code Splitting:** Automatic per-route JavaScript bundles
2. **Asset Optimization:** Image compression via Sharp
3. **CSS Minimization:** PostCSS processes and minifies
4. **Prefetching:** Link prefetching for instant navigation
5. **Service Worker:** (if enabled) for offline support

### Deployment Pipeline

**Target Platform:** Netlify

**Configuration:**
```toml
# netlify.toml (if present)
[build]
  command = "gatsby build"
  publish = "public/"

[build.environment]
  NODE_VERSION = "16"

[[plugins]]
  package = "@netlify/plugin-gatsby"
```

**Netlify Features Used:**
1. **Form Handling**
   - Automatic form submission processing
   - Spam filtering via honeypot
   - Email notifications on submission

2. **Continuous Deployment**
   - Auto-deploy on git push
   - Preview deployments for PRs
   - Instant cache invalidation

3. **Environment Variables**
   - `GATSBY_GOOGLE_TRANSLATE_API_KEY`
   - Injected at build time

**Build Output Structure:**
```
public/
├── index.html
├── art/
│   ├── index.html
│   └── murals/
│       └── index.html
├── static/
├── page-data/
│   └── [route].json (GraphQL query results)
├── webpack-runtime-*.js
└── app-*.js (code-split bundles)
```

---

## Performance Architecture

### Key Performance Strategies

1. **Static Site Generation**
   - Pre-rendered HTML at build time
   - No server-side rendering latency
   - Fast Time to First Byte (TTFB)

2. **Code Splitting**
   - Separate bundles per route
   - Reduces initial JavaScript payload
   - Lazy-loads non-critical routes

3. **Asset Optimization**
   - Sharp image processing (WebP, AVIF support)
   - Cloudflare R2 CDN for videos
   - Google Fonts CDN for typography

4. **Prefetching**
   - Gatsby Link prefetches on hover
   - Instant perceived navigation
   - Background data loading

5. **CSS Optimization**
   - CSS Modules prevent unused styles
   - PostCSS minification
   - Critical CSS inlining

### Current Performance Metrics (from README)
- **Lighthouse Score:** 95+ across all categories
- **Load Time:** < 2 seconds on 3G connection
- **Accessibility:** WCAG 2.1 AA compliant

---

## Internationalization Architecture

### Translation System

**API Integration:**
```javascript
// src/utils/translate.js
import { Translate } from '@google-cloud/translate/build/src/v2'

const translate = new Translate({
  key: process.env.GATSBY_GOOGLE_TRANSLATE_API_KEY
})
```

**Functions:**

1. **Single Translation:**
```javascript
async function translateText(text, targetLang = 'ar') {
  const cacheKey = `${text}_${targetLang}`

  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)
  }

  try {
    const [translation] = await translate.translate(text, targetLang)
    translationCache.set(cacheKey, translation)
    return translation
  } catch (error) {
    console.error('Translation error:', error)
    return text // Fallback to original
  }
}
```

2. **Batch Translation:**
```javascript
async function translateBatch(texts, targetLang = 'ar') {
  const uncached = texts.filter(t => !translationCache.has(`${t}_${targetLang}`))

  if (uncached.length > 0) {
    const [translations] = await translate.translate(uncached, targetLang)
    uncached.forEach((text, i) => {
      translationCache.set(`${text}_${targetLang}`, translations[i])
    })
  }

  return texts.map(t => translationCache.get(`${t}_${targetLang}`))
}
```

**Cache Strategy:**
- In-memory Map for session persistence
- No database/localStorage caching (resets on page reload)
- Reduces API calls during session
- Future enhancement: Persist to localStorage

**Language Toggle UI:**
- EN/AR button group in header
- Active language highlighted
- Instant switching (no reload)

---

## Security Considerations

### Form Security

**Netlify Forms Spam Protection:**
1. **Honeypot Field:**
   ```html
   <input type="hidden" name="bot-field" />
   ```
   - Hidden from users
   - Bots auto-fill hidden fields
   - Netlify filters submissions with honeypot data

2. **Server-Side Validation:**
   - Netlify validates on server
   - Client-side validation for UX only

### API Key Security

**Environment Variables:**
- `GATSBY_GOOGLE_TRANSLATE_API_KEY` stored in Netlify
- Never committed to git
- Build-time injection only
- Prefix `GATSBY_` exposes to client (acceptable for this use case)

**Future Hardening:**
- Consider server-side translation endpoint
- Rate limiting on translation calls
- API key rotation policy

### Content Security

**Static Site Benefits:**
- No server-side code execution
- No database injection vectors
- No authentication vulnerabilities
- Limited attack surface

---

## Future Architecture Considerations

### Scalability

**Current State:** Static site scales infinitely via CDN

**Potential Growth:**
1. **CMS Integration**
   - Contentful, Sanity, or Strapi
   - Manage artwork/portfolio via admin panel
   - Rebuild on content changes

2. **GraphQL Data Layer**
   - Already present via Gatsby
   - Expand for dynamic data sourcing
   - Query optimization for large datasets

### State Management Evolution

**When to Introduce Context API:**
- Language state in 5+ components
- User authentication/sessions
- Shopping cart functionality

**When to Consider Redux:**
- Complex state interdependencies
- Time-travel debugging needs
- Large team with state conventions

### Progressive Web App (PWA)

**Enhancement Path:**
1. Add `gatsby-plugin-offline`
2. Generate service worker
3. Enable offline access
4. Add to home screen functionality

### Performance Monitoring

**Recommended Tools:**
- Sentry for error tracking
- Google Analytics for user behavior
- Lighthouse CI for continuous performance checks
- Web Vitals monitoring

---

## Conclusion

The portfolio architecture balances technical sophistication with maintainability, leveraging Gatsby's static generation for performance while maintaining React's component flexibility. The modular structure supports rapid iteration while the video-heavy design showcases artistic work without sacrificing user experience.

**Key Architectural Strengths:**
- Clean component separation
- Consistent layout patterns
- Optimized multimedia delivery
- Responsive, accessible design
- Simple yet effective state management

**Architecture Philosophy:**
*"Build for the user first, optimize for the developer second."* Every architectural decision prioritizes the end-user experience while maintaining code clarity and maintainability.
