# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders like Linear, Framer, and Vercel for clean, developer-focused aesthetics that emphasize content and professionalism.

## Core Design Elements

### Color Palette
**Dark Mode Primary** (default):
- Background: 9 5% 3% (deep charcoal)
- Surface: 220 15% 8% (dark slate)
- Primary: 217 91% 60% (vibrant blue)
- Text: 0 0% 95% (near white)
- Muted: 220 9% 46% (medium gray)

**Light Mode**:
- Background: 0 0% 98% (off white)
- Surface: 220 14% 96% (light gray)
- Primary: 217 91% 60% (same blue)
- Text: 220 9% 15% (dark gray)

### Typography
- **Primary**: Inter (Google Fonts) - clean, professional
- **Accent**: JetBrains Mono for code snippets
- **Hierarchy**: Large hero text (4xl-6xl), section headers (2xl-3xl), body text (base-lg)

### Layout System
**Spacing Units**: Consistent use of Tailwind units 4, 8, 12, 16, 24 for harmonious rhythm
- Container max-width: 7xl with proper padding
- Section spacing: py-24 for desktop, py-16 for mobile
- Component spacing: gap-8 between elements

### Component Library
- **Navigation**: Sticky header with subtle blur backdrop
- **Cards**: Subtle borders, rounded-xl, hover lift effects
- **Buttons**: Primary solid blue, secondary outline with blur backgrounds over images
- **Forms**: Clean inputs with focus states, proper validation styling
- **Badges**: Rounded skill tags with category-based colors

## Page Structure (5 sections max)

### 1. Hero Section
Large, impactful single viewport with:
- Prominent name and title
- Compelling tagline about full-stack expertise
- Two CTA buttons (outline variant with blur backgrounds)
- Subtle animated background gradient

### 2. About & Skills Combined
Split layout showcasing:
- Personal story and education
- Technical skills grid with modern icons
- Clean, scannable presentation

### 3. Featured Projects
3-column grid (responsive) displaying:
- Project thumbnails with hover effects
- Tech stack badges
- Brief descriptions with links

### 4. Experience Timeline
Vertical timeline design with:
- Company logos/icons
- Role descriptions
- Achievement highlights

### 5. Contact
Simple, elegant contact form with:
- Social media links
- Professional email
- Clean form validation

## Visual Treatment
**Gradients**: Subtle blue-to-purple gradient in hero background (217 91% 60% to 250 84% 54%)
**Contrast**: High contrast for accessibility, strategic use of subtle shadows
**Background**: Minimal geometric patterns or dot grids for texture

## Images
- **Hero**: No large hero image - focus on typography and gradient
- **Projects**: Screenshot thumbnails (16:9 ratio) for each project
- **About**: Optional professional headshot (small, circular)
- **Experience**: Company logos or simple icons

## Animations
Minimal, purposeful motion:
- Subtle fade-in on scroll
- Gentle hover effects on cards
- Smooth page transitions

This design prioritizes professionalism, readability, and showcasing technical expertise while maintaining visual interest through strategic use of color and spacing.