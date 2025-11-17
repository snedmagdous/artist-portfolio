# Design Decisions

## Overview

This document explains the rationale behind key technical choices made in the Maya Murry portfolio website. Each decision was made with careful consideration of performance, maintainability, user experience, and artistic expression.

---

## Technology Selection

### Why Gatsby over Next.js or Create React App?

**Decision:** Use Gatsby.js as the framework

**Rationale:**

1. **Static Generation Fits Portfolio Use Case**
   - Content changes infrequently (new artwork/projects)
   - No need for server-side rendering on every request
   - Pre-rendered HTML provides best possible performance
   - SEO benefits from static HTML

2. **Performance Out of the Box**
   - Automatic code splitting by route
   - Image optimization via gatsby-plugin-sharp
   - Prefetching for instant page transitions
   - Built-in performance optimizations

3. **Plugin Ecosystem**
   - Google Fonts integration
   - Sharp image processing
   - PostCSS/Tailwind support
   - Easy to extend

**Alternatives Considered:**

- **Next.js**: Overkill for a portfolio site; SSR not needed; more complex deployment
- **Create React App**: Manual optimization required; no built-in routing; slower initial setup
- **Plain HTML/CSS**: Not maintainable for this complexity; no component reusability

**Trade-offs Accepted:**
- Build time increases with content (acceptable for portfolio)
- Requires rebuild for content changes (mitigated by fast builds)
- Learning curve for Gatsby-specific APIs (worth it for benefits)

---

### Why React 18 Hooks over Class Components?

**Decision:** Use functional components with Hooks exclusively

**Rationale:**

1. **Modern Best Practice**
   - React team recommends Hooks for new code
   - Better composition and reusability
   - Easier to understand lifecycle

2. **Simpler State Management**
   ```javascript
   // Hooks approach (cleaner)
   const [isOpen, setIsOpen] = useState(false)

   // vs Class approach (verbose)
   this.state = { isOpen: false }
   this.setState({ isOpen: true })
   ```

3. **Better Performance Potential**
   - Smaller bundle size
   - Easier for React to optimize
   - No `this` binding overhead

**Trade-offs:**
- Requires understanding of Hooks lifecycle
- Closure issues if not careful with `useEffect` dependencies

---

### Why CSS Modules + Tailwind instead of Styled-Components?

**Decision:** Hybrid approach with CSS Modules for components and Tailwind for utilities

**Rationale:**

1. **CSS Modules Benefits**
   - No JavaScript runtime cost
   - Scoped styles prevent conflicts
   - Easy to debug (real CSS classes)
   - Familiar CSS syntax

2. **Tailwind Benefits**
   - Rapid prototyping with utility classes
   - Consistent design system
   - Smaller CSS bundle (PurgeCSS removes unused)
   - Responsive utilities out of the box

3. **No Runtime CSS-in-JS**
   - Styled-components adds ~20KB to bundle
   - Runtime style injection can cause FOUC
   - CSS Modules are build-time only

**Pattern:**
```jsx
// Global utilities from Tailwind
<div className="flex items-center justify-between">

// Component-specific styles from CSS Modules
<div className={styles.heroSection}>
```

**Alternatives Considered:**
- **Styled-Components**: Runtime overhead, larger bundle, FOUC risk
- **Emotion**: Similar issues to styled-components
- **Plain CSS**: Global namespace conflicts, harder to maintain

**Trade-offs:**
- Two styling systems to learn
- Requires discipline to decide when to use which
- Worth it for performance and flexibility

---

## Video System Design

### Why Custom Video Loop System instead of native `loop` attribute?

**Decision:** Manual loop handling with fade transitions

**Code:**
```javascript
// Check if near end
if (video.duration - video.currentTime < 0.5) {
  video.style.opacity = '0.8' // Start fade
}

// Restart at end
if (video.currentTime >= video.duration - 0.1) {
  video.currentTime = 0
  video.play()
  setTimeout(() => { video.style.opacity = '1' }, 100)
}
```

**Rationale:**

1. **User Experience Problem with Native Loop**
   - Native `loop` attribute causes visible jump on restart
   - Breaks immersion in video-heavy portfolio
   - Particularly noticeable on high-quality screens

2. **Fade Transition Solution**
   - 0.5s pre-fade gives seamless transition
   - Opacity reduction is subtle (0.8, not 0)
   - User rarely notices the loop

3. **Control Over Timing**
   - Can adjust fade duration
   - Can extend/shorten overlap window
   - Future enhancement: crossfade to second video

**Alternatives Considered:**
- **Native loop**: Jarring visual jump
- **GIF/Animated WebP**: Much larger file sizes, quality loss
- **Two videos with crossfade**: Double bandwidth, complex logic

**Trade-offs:**
- Requires JavaScript (fallback: native loop if JS disabled)
- More complex than `loop` attribute
- Worth it for polished experience

---

### Why Global Pause Button for All Videos?

**Decision:** Single control in header pauses all background videos

**Rationale:**

1. **Accessibility**
   - Some users find auto-playing videos distracting
   - Motion sensitivity considerations
   - Bandwidth concerns on metered connections

2. **User Control**
   - Empowers users to customize experience
   - Persists preference via localStorage
   - Applies site-wide (not per-page)

3. **Implementation Efficiency**
   ```javascript
   // Single selector targets all background videos
   document.querySelectorAll('video[autoplay][muted]')
   ```

**Trade-offs:**
- Adds UI complexity to header
- Requires localStorage for persistence
- Worth it for inclusivity and user control

---

### Why Cloudflare R2 instead of hosting videos directly?

**Decision:** Use Cloudflare R2 CDN for all video content

**Rationale:**

1. **Performance**
   - Global CDN distribution
   - Lower latency for international users
   - Cloudflare's network is optimized for media

2. **Cost**
   - Free egress (no bandwidth charges)
   - Cheaper than Netlify bandwidth
   - Scalable without cost explosion

3. **Separation of Concerns**
   - Static site build doesn't include videos
   - Faster deployments
   - Can update videos without rebuilding site

**Alternatives Considered:**
- **Netlify direct**: Expensive bandwidth costs
- **YouTube embed**: Branding, autoplay restrictions, UX issues
- **Self-hosted VPS**: Overkill, maintenance burden

**Trade-offs:**
- External dependency (R2 must be available)
- Requires CDN configuration
- Worth it for performance and cost savings

---

## State Management

### Why No Redux/Context API?

**Decision:** Use local state with `useState` and prop passing

**Rationale:**

1. **Simplicity**
   - Current app complexity doesn't warrant state library
   - Language toggle is the main shared state
   - Prop passing is manageable with current structure

2. **Performance**
   - No Redux DevTools overhead
   - No Context re-render issues
   - Smaller bundle size

3. **Maintainability**
   - Easier for new developers to understand
   - Less boilerplate
   - Clear data flow

**When to Introduce Context/Redux:**
```
Current state: 2-3 props passed 2 levels deep
Threshold: 5+ props passed 3+ levels deep
OR: Complex interdependent state
OR: User authentication/sessions needed
```

**Example of Current Pattern:**
```jsx
// Page level
const [language, setLanguage] = useState('EN')

// Pass to Layout
<Layout language={language} setLanguage={setLanguage}>
```

**Trade-offs:**
- Slight prop drilling (2 levels max currently)
- Would need refactor if state complexity grows
- Acceptable for current needs

---

### Why localStorage instead of cookies for pause state?

**Decision:** Use `localStorage.setItem('globalBackgroundPaused', state)`

**Rationale:**

1. **No Server Communication Needed**
   - Purely client-side preference
   - No need to send to server on every request
   - Lighter weight than cookies

2. **Larger Storage Capacity**
   - Cookies limited to 4KB
   - localStorage allows 5-10MB
   - Future preferences can be added

3. **Simpler API**
   ```javascript
   // localStorage (simple)
   localStorage.setItem('key', 'value')

   // vs cookies (complex)
   document.cookie = "key=value; expires=...; path=/; ..."
   ```

**Trade-offs:**
- Not accessible to server (not needed here)
- Synchronous API (acceptable for small data)
- Perfect for this use case

---

## Navigation & Routing

### Why File-Based Routing over React Router?

**Decision:** Use Gatsby's automatic file-based routing

**Rationale:**

1. **Zero Configuration**
   - No route definitions needed
   - File structure IS the route structure
   - Clear mental model

2. **Automatic Code Splitting**
   - Each page gets its own bundle
   - No manual lazy loading setup
   - Optimal performance out of the box

3. **SEO Benefits**
   - Each route is a real HTML file
   - Better crawlability
   - Works without JavaScript

**Example:**
```
src/pages/art/murals/my-queens/index.js
→ https://mayamurry.com/art/murals/my-queens
```

**Alternatives Considered:**
- **React Router**: Manual configuration, no code splitting by default
- **Reach Router**: Deprecated, merged into React Router v6

**Trade-offs:**
- Less flexible than dynamic routing
- Requires build for new routes
- Perfect for static content portfolio

---

### Why Custom Scroll Behavior instead of default?

**Decision:** Force scroll-to-top on every navigation

**Code (gatsby-browser.js):**
```javascript
export const shouldUpdateScroll = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, 0)
  return false
}
```

**Rationale:**

1. **Consistent User Experience**
   - Users always start at top of new page
   - Prevents confusion from mid-page landings
   - Matches traditional website behavior

2. **Artistic Presentation**
   - Each page designed to be experienced top-down
   - Hero sections should be seen first
   - Scroll snapping works best from top

**Alternatives Considered:**
- **Default Gatsby behavior**: Restores scroll position (confusing for this site)
- **Smooth scroll to top**: Adds delay, less immediate

**Trade-offs:**
- Can't restore position if user clicks back
- Some users prefer scroll restoration
- Design priority: artistic presentation > browser convention

---

### Why Scroll Snapping with JavaScript instead of CSS?

**Decision:** Custom `requestAnimationFrame` scroll handling

**Rationale:**

1. **Cross-Browser Consistency**
   - CSS `scroll-snap-type` has browser inconsistencies
   - iOS Safari particularly problematic
   - JavaScript gives full control

2. **Delay Between Snaps**
   - Prevent rapid section jumping from aggressive scrolling
   - 1-second delay feels intentional, not glitchy
   - CSS can't add temporal delays

3. **Touch Gesture Customization**
   - 50px minimum swipe distance
   - Prevents accidental section changes on mobile
   - Better UX than CSS scroll-snap on touch devices

**Implementation:**
```javascript
useEffect(() => {
  const handleWheel = (e) => {
    if (isScrolling) return // Enforce delay
    e.preventDefault()

    requestAnimationFrame(() => {
      // Calculate target section
      // Smooth scroll
      setIsScrolling(true)
      setTimeout(() => setIsScrolling(false), 1000)
    })
  }

  document.addEventListener('wheel', handleWheel, {passive: false})
  return () => document.removeEventListener('wheel', handleWheel)
}, [currentSection, isScrolling])
```

**Alternatives Considered:**
- **CSS scroll-snap**: Inconsistent, no delay control
- **Third-party library (fullPage.js)**: Overkill, bundle size, inflexible

**Trade-offs:**
- Requires JavaScript (graceful degradation: normal scroll)
- More code to maintain
- Worth it for polished UX

---

## Form Handling

### Why Netlify Forms instead of FormSpree/EmailJS?

**Decision:** Use Netlify's native form handling

**Rationale:**

1. **Zero External Dependencies**
   - Already deployed on Netlify
   - No additional service signup
   - No third-party JavaScript needed

2. **Built-in Spam Protection**
   - Honeypot field automatically filtered
   - Netlify's spam detection
   - No CAPTCHA needed (better UX)

3. **Simple Implementation**
   ```html
   <form data-netlify="true" name="contact">
     <input type="hidden" name="bot-field" />
     <!-- form fields -->
   </form>
   ```

4. **Email Notifications**
   - Netlify sends email on submission
   - No backend code required
   - Free tier supports 100 submissions/month

**Alternatives Considered:**
- **FormSpree**: $10/month for custom redirect
- **EmailJS**: Client-side only, less secure
- **Custom backend**: Overkill for contact form

**Trade-offs:**
- Vendor lock-in to Netlify
- 100 submission/month limit (upgrade available)
- Worth it for simplicity and zero cost

---

## Internationalization

### Why Google Cloud Translation API instead of manual translations?

**Decision:** Use Google Cloud Translation API with caching

**Rationale:**

1. **Rapid Development**
   - No need to manually translate every string
   - Instant language switching
   - Easy to add new languages

2. **Cost-Effective**
   - First 500K characters/month free
   - Portfolio text well under limit
   - Caching reduces API calls

3. **Quality**
   - Google Translate quality is high
   - Arabic support is robust
   - Better than amateur manual translation

**Caching Strategy:**
```javascript
const translationCache = new Map()
// Reduces API calls during user session
// Cache key: `${text}_${targetLang}`
```

**Alternatives Considered:**
- **Manual translation**: Time-consuming, expensive for professional translator
- **i18next with JSON files**: Requires maintaining separate translation files
- **No translation**: Excludes Arabic-speaking audience

**Trade-offs:**
- API dependency (fallback to English on error)
- Cache resets on page reload (future: localStorage persistence)
- Worth it for bilingual accessibility

---

### Why Client-Side Translation instead of build-time?

**Decision:** Translate in browser on language toggle

**Rationale:**

1. **Build Performance**
   - Don't need to generate Arabic version of every page
   - Faster builds
   - Smaller static output

2. **Dynamic Switching**
   - Users can toggle EN/AR without reload
   - Better UX than navigating to `/ar/page`
   - Single URL structure (better for sharing)

3. **Cache Efficiency**
   - Only load translations when needed
   - Most users stay in one language
   - API calls only on toggle

**Alternatives Considered:**
- **Build-time generation**: Doubles build time, doubles routes
- **Separate `/ar/*` routes**: Poor UX, URL complexity

**Trade-offs:**
- Requires API key in client (acceptable risk)
- Small delay on first language toggle (mitigated by cache)
- Worth it for UX and build efficiency

---

## Performance Decisions

### Why No Service Worker/PWA?

**Decision:** No offline support or PWA features (currently)

**Rationale:**

1. **Use Case Analysis**
   - Portfolio is online-only content
   - Users unlikely to view offline
   - Video content can't be cached effectively

2. **Complexity vs. Benefit**
   - Service workers add debugging complexity
   - Caching strategy non-trivial for videos
   - Minimal user benefit

3. **Future Enhancement**
   - Can add later if needed
   - Wait for user demand
   - Not critical for MVP

**When to Reconsider:**
- User requests offline access
- Adding blog with text content
- Mobile app functionality needed

---

### Why Lazy Loading for Images but not Videos?

**Decision:** Lazy load images, preload videos

**Rationale:**

1. **Videos are Critical Content**
   - Background videos define the experience
   - Delay would harm first impression
   - `preload="auto"` ensures readiness

2. **Images are Secondary**
   - Gallery images below fold
   - Can defer loading
   - Saves initial bandwidth

3. **Video Optimization Elsewhere**
   - Cloudflare R2 CDN for fast delivery
   - MP4 compression
   - Not about lazy loading, about fast loading

**Implementation:**
```html
<!-- Videos: Aggressive preload -->
<video preload="auto" autoPlay muted>

<!-- Images: Lazy load via gatsby-plugin-sharp -->
<GatsbyImage loading="lazy" />
```

**Trade-offs:**
- Initial page load includes video
- Larger first contentful paint
- Worth it for immediate immersive experience

---

## Component Design

### Why Layout Component Pattern?

**Decision:** Every page wrapped in `<Layout>` component

**Rationale:**

1. **DRY Principle**
   - Header/footer code written once
   - Navigation logic centralized
   - Easy to update site-wide

2. **Consistent UX**
   - Every page feels cohesive
   - Same navigation everywhere
   - Shared video background system

3. **Separation of Concerns**
   ```jsx
   // Layout handles: navigation, footer, video
   // Page handles: content, page-specific state
   ```

**Pattern:**
```jsx
const Page = () => (
  <Layout language={language} setLanguage={setLanguage}>
    {/* Page content */}
  </Layout>
)
```

**Alternatives Considered:**
- **No layout component**: Massive code duplication
- **Multiple layouts**: Over-engineered for this site
- **Layout in gatsby-browser**: Less flexible

**Trade-offs:**
- Small bundle duplication (mitigated by code splitting)
- Worth it for maintainability

---

### Why Refs over State for Video Controls?

**Decision:** Use `useRef` for video element access

**Code:**
```javascript
const videoRef = useRef(null)

useEffect(() => {
  const video = videoRef.current
  video.play()
}, [])
```

**Rationale:**

1. **Performance**
   - Refs don't trigger re-renders
   - Direct DOM manipulation is faster
   - No unnecessary component updates

2. **Imperative API**
   - Video controls are imperative (play, pause)
   - Not declarative like most React state
   - Refs match mental model

3. **Avoid State Churn**
   ```javascript
   // BAD: Re-renders on every time update
   const [videoTime, setVideoTime] = useState(0)
   video.ontimeupdate = () => setVideoTime(video.currentTime)

   // GOOD: No re-renders
   videoRef.current.currentTime
   ```

**Trade-offs:**
- Slightly less "React-y"
- Worth it for performance in video-heavy site

---

## Responsive Design

### Why Mobile-First CSS?

**Decision:** Base styles for mobile, media queries for desktop

**Rationale:**

1. **Performance on Mobile**
   - Mobile devices parse base styles only
   - No media query processing overhead
   - Faster load on constrained devices

2. **Progressive Enhancement**
   - Start with simplest layout
   - Add complexity for larger screens
   - Graceful degradation philosophy

3. **Development Workflow**
   ```css
   /* Base: Mobile */
   .nav { display: block; }

   /* Enhancement: Desktop */
   @media (min-width: 1024px) {
     .nav { display: flex; }
   }
   ```

**Alternatives Considered:**
- **Desktop-first**: Wastes mobile bandwidth on unused styles
- **Separate mobile site**: Maintenance nightmare

**Trade-offs:**
- Slightly counterintuitive for desktop developers
- Worth it for mobile performance

---

### Why Hamburger Menu at 1024px instead of 768px?

**Decision:** Switch to mobile menu at 1024px (tablet breakpoint)

**Rationale:**

1. **Tablet Usage Patterns**
   - Tablets often held in portrait
   - Portrait width closer to mobile than desktop
   - Touch interfaces benefit from larger tap targets

2. **Navigation Spacing**
   - Full nav requires ~900px for comfortable spacing
   - 768px breakpoint causes cramping
   - 1024px gives breathing room

3. **Testing on Real Devices**
   - iPad (768px width) feels cramped with full nav
   - Hamburger menu better UX on tablets

**Trade-offs:**
- Desktop nav shown less often
- Hamburger menu more common
- Worth it for better tablet experience

---

## Future-Proofing Decisions

### Why Build for Change?

**Key Principles:**

1. **Modular Components**
   - Easy to extract and reuse
   - Clear single responsibilities
   - Future refactoring is easier

2. **Minimal External Dependencies**
   - Fewer breaking changes
   - Easier to upgrade
   - Lower maintenance burden

3. **Standard Web APIs**
   - Prefer vanilla JS over libraries where reasonable
   - `localStorage`, `requestAnimationFrame`, `querySelectorAll`
   - Won't break with framework changes

4. **Clear Documentation**
   - This file explains the "why"
   - Future developers can understand decisions
   - Easier to challenge assumptions if needed

---

## Conclusion

Every technical decision in this portfolio was made with careful consideration of:

- **User Experience**: Smooth, immersive, accessible
- **Performance**: Fast load, smooth animations, optimized media
- **Maintainability**: Clear code, minimal dependencies, good documentation
- **Artistic Vision**: Technology serves the art, not the other way around

### Decision-Making Framework

When faced with a technical choice:

1. **User Impact**: How does this affect the user experience?
2. **Performance**: What's the speed/bundle size impact?
3. **Complexity**: How much harder is this to maintain?
4. **Artistic Fit**: Does this serve the portfolio's creative vision?

**Guiding Philosophy:**
*"Choose the simplest solution that delivers the best user experience. Optimize for clarity first, performance second, cleverness last."*

---

## Decisions Open for Reconsideration

As the portfolio evolves, these decisions should be revisited:

1. **State Management** - If language state grows, consider Context API
2. **Translation Strategy** - If content expands significantly, consider i18next
3. **Video Hosting** - Monitor R2 costs as traffic grows
4. **PWA Features** - Add if users request offline access
5. **CMS Integration** - If content updates become frequent

**Change Criteria:**
Don't change for the sake of change. Change when user needs or project complexity genuinely warrant it.
