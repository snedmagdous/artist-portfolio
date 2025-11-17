# Maya Murry - Artist Portfolio Website

[![Live Site](https://img.shields.io/badge/Live%20Site-mayamurry.com-brightgreen)](https://mayamurry.com)
[![Gatsby](https://img.shields.io/badge/Gatsby-663399?logo=gatsby&logoColor=white)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

A multidimensional portfolio showcasing the intersection of technology, art, and social justice. This website presents documentary filmmaking, large-scale murals, AI research, and poetry through an experimental digital experience.

**Live Site**: [mayamurry.com](https://mayamurry.com)

---

## 🎨 Preview

> **📸 Homepage hero section with video background
<!-- ![Homepage Preview](images\screenshots\homepage.png) -->
---

## 🌟 About This Project

This portfolio website displays my interndiscinplinary work:

- **Documentary Films**: Community-centered stories of resistance and resilience
- **Mural Art**: Large-scale public installations connecting diaspora identity with liberation themes
- **Technical Projects**: AI research in healthcare, computational genomics, and social justice applications
- **Poetry & Writing**: Published works exploring ancestral memory 

---

## 💻 Technical Highlights

### Performance Optimizations
- ⚡ Achieved **95+ Lighthouse performance score**
- 🎥 Implemented lazy loading for video content, **reducing initial load by 60%**
- 🖼️ Custom image optimization pipeline using Sharp and Gatsby Image
- 📦 Code splitting and bundle optimization for faster page loads

### Innovative Features
- **Particle Effect Timeline**: Custom React component using HTML5 Canvas for animated resume presentation
- **Video Background System**: Optimized video delivery with adaptive quality based on connection speed
- **Dynamic Content Loading**: Intersection Observer API for performance-optimized content rendering
- **Accessibility**: WCAG 2.1 AA compliant, fully keyboard navigable, tested with screen readers

### Technical Challenges Solved

#### Challenge 1: Large Video Files
- **Problem**: Video backgrounds causing 8+ second initial load times
- **Solution**: Implemented Cloudflare R2 with adaptive bitrate streaming and lazy loading
- **Result**: 70% reduction in load time while maintaining visual quality

#### Challenge 2: Complex Animations
- **Problem**: Heavy JavaScript animations causing performance issues on mobile
- **Solution**: Migrated to CSS keyframe animations with hardware acceleration
- **Result**: Smooth 60fps animations across all devices

#### Challenge 3: Content Organization
- **Problem**: Diverse content types (film, art, code, writing) needing cohesive navigation
- **Solution**: Developed modular component architecture with narrative-driven routing
- **Result**: Intuitive user experience that maintains artistic coherence

---

## 🛠️ Technical Stack

### Core Technologies
- **Gatsby.js** - React-based static site generator for optimal performance
- **React 18** - Component-based UI framework with Hooks
- **CSS Modules** - Scoped styling system preventing global namespace pollution
- **Cloudflare R2** - High-performance video and media hosting
- **GraphQL** - Efficient data querying for Gatsby's data layer

### Development Tools
- **Webpack** - Module bundling (configured via Gatsby)
- **Babel** - JavaScript transpilation for browser compatibility
- **PostCSS** - CSS processing and optimization
- **ESLint & Prettier** - Code quality and formatting

### Key Features
- **Responsive Design** - Mobile-first approach with fluid layouts and breakpoints
- **Video Backgrounds** - Immersive visual experiences with optimized playback
- **Interactive Timeline** - Dynamic resume presentation with particle effects
- **Modular Architecture** - Reusable components and clean code structure
- **Performance Optimized** - Fast loading with lazy loading and compressed assets
- **SEO Optimized** - Server-side rendering with meta tags and structured data

---

## 📊 Impact & Metrics

- **Live Since**: September 2025
- **Tech Stack**: Gatsby + React + CSS Modules + Cloudflare R2
- **Performance**: 95+ Lighthouse score across all categories
- **Accessibility**: WCAG 2.1 AA compliant
- **Load Time**: < 2 seconds on 3G connection

---

## 🎨 Design Philosophy

This portfolio challenges traditional portfolio conventions by:

- **Narrative-Driven Navigation** - Each section tells part of a larger story
- **Cultural Aesthetic Integration** - Visual elements reflecting Palestinian and Arab heritage
- **Accessibility-First** - Designed for diverse users and assistive technologies
- **Community-Centered Content** - Highlighting collaborative work and social impact
- **Intentional Performance** - Every technical decision balances aesthetics with speed

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/snedmagdous/artist-portfolio.git

# Navigate to project directory
cd artist-portfolio

# Install dependencies
npm install

# Start development server
npm run develop
```

Visit `http://localhost:8000` to view the site locally.

### Build for Production

```bash
# Create optimized production build
npm run build

# Serve production build locally
npm run serve

# Deploy (adjust based on your hosting)
npm run deploy
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout/         # Page layout wrapper
│   ├── Navigation/     # Header and menu components
│   ├── VideoBackground/# Optimized video components
│   └── Timeline/       # Interactive resume timeline
├── pages/              # Gatsby pages and routing
│   ├── index.js       # Homepage
│   ├── art/           # Visual art portfolios
│   ├── film/          # Documentary projects
│   ├── writing/       # Poetry and essays
│   └── resume/        # Interactive timeline
├── styles/            # Global CSS and themes
│   ├── global.css     # Base styles and CSS variables
│   └── modules/       # Component-specific styles
└── images/            # Static assets and media
```

---

## 🆕 Latest Updates

### v2.0 - [Coming Soon]
- Redesigned documentary film section with improved video player
- Added new mural project gallery with lightbox functionality
- Enhanced mobile navigation experience
- Performance improvements (40% faster page loads)
- Improved accessibility features

---

## 📝 Development Process

Interested in how this was built? Check out these technical writeups:

- **Building an Accessible Video-Heavy Portfolio** - Performance optimization strategies
- **Gatsby + React for Artists** - Why static site generation works for creative portfolios  
- **Designing for Cultural Authenticity** - Integrating Palestinian visual language into web design

*Coming soon: Detailed blog posts on technical implementation and design decisions*

---

## 🤝 Contributing & Usage Guidelines

### For Learning & Educational Use
✅ **Encouraged:**
- Study the code to learn Gatsby, React, or CSS techniques
- Use code snippets for your own projects with attribution
- Fork for educational purposes
- Reference implementation patterns

### For Commercial/Portfolio Use
⚠️ **Please:**
- Provide clear attribution to the original design and code
- Modify significantly rather than copying wholesale
- Respect the artistic content and personal narrative elements
- Link back to this repository and [mayamurry.com](https://mayamurry.com)

### Attribution Example
```
Portfolio design and code structure inspired by Maya Murry's portfolio
Original: https://github.com/snedmagdous/artist-portfolio | mayamurry.com
```

---

## 📄 License

**Code**: MIT License - Feel free to use with attribution  
**Artistic Content**: All artwork, photography, videos, and written content remain the intellectual property of Maya Murry and are not covered under the code license.

---

## 🌍 Connect

- **Website**: [mayamurry.com](https://mayamurry.com)
- **LinkedIn**: [linkedin.com/in/maya-murry](https://linkedin.com/in/maya-murry)
- **Email**: [mmm443@cornell.edu](mailto:hello@mayamurry.com)
- **GitHub**: [@snedmagdous](https://github.com/snedmagdous)

---

## 💭 Philosophy

*"Technology should serve liberation. Art should challenge power. Code should build community."*

This portfolio exists at the intersection of technical innovation and social justice, demonstrating how creative coding can amplify marginalized voices and imagine liberated futures.

---

## 🙏 Acknowledgments

Built with intention, care, and the understanding that every line of code is a political act. This project honors the communities, ancestors, and movements that make liberation work possible.

---

**Built with 🖤 by Maya Murry** | Coded from scratch with intention and care

---

## 📚 Additional Resources

For more detailed technical documentation:
- `docs/ARCHITECTURE.md` - Deep dive into system architecture *(coming soon)*
- `docs/DESIGN_DECISIONS.md` - Rationale behind key technical choices *(coming soon)*
- `docs/PERFORMANCE.md` - Performance optimization strategies *(coming soon)*
