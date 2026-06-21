# RIE-Edge Portfolio Website Design

## Overview
Modern, sophisticated portfolio website showcasing RIE-Edge's diverse ventures across photography, publishing, and investments.

## Visual Style

### Color Palette (Finance-Inspired Premium)
- **Primary Dark**: `#0A0E27` (deep navy, almost black)
- **Secondary Dark**: `#1a1f3a` (charcoal navy)
- **Accent Gold**: `#D4AF37` (premium gold for highlights)
- **Accent Teal**: `#06B6D4` (modern teal for CTAs)
- **Success Green**: `#10B981` (only for positive indicators)
- **Text Primary**: `#F9FAFB` (off-white)
- **Text Secondary**: `#9CA3AF` (gray)

### Typography
- **Headings**: `font-family: 'Playfair Display', serif` (premium display serif)
- **Body**: `font-family: 'Inter', sans-serif` (clean, modern sans)
- **Numbers/Stats**: `font-variant-numeric: tabular-nums` (monospace alignment)

### Design Principles
- Clean, spacious layouts with generous whitespace
- Subtle gradients and shadows for depth
- Smooth transitions (300ms ease-in-out)
- Card-based content organization
- Premium feel with restrained elegance

## Navigation Structure

### Sticky Header
```
[RIE-Edge Logo] ———————————————— [Home] [About] [Ventures ▾] [Contact]
```

### Ventures Dropdown
- **RouzyVerse** - Photography & Social Media
- **RIE-Edge Books** - Publishing Portfolio
- **RIE-Edge Investments** - Investment Ventures

## Page Structure

### 1. Home (`/`)
**Hero Section**
- Full viewport height
- Gradient background (navy to charcoal)
- Center-aligned company name with tagline
- "Explore Ventures" CTA button
- Subtle scroll indicator

**Featured Ventures Preview**
- 3-column grid showcasing main categories
- Hover effects reveal "Learn More" overlay
- Icons representing each venture type

**Quick Stats** (optional)
- Number of ventures
- Years in operation
- Featured highlight

### 2. About (`/about`)
**Company Story**
- Hero image/gradient banner
- Mission statement (large, prominent)
- Company values in card layout
- Team section (if applicable)

### 3. Ventures

#### 3a. RouzyVerse (`/ventures/rouzyverse`)
**Photography Showcase**
- Hero section with photographer bio
- Gallery grid (masonry or 3-column)
- Prominent social media links with icons:
  - Instagram
  - TikTok
  - YouTube
  - X.com (Twitter)
  - LinkedIn
  - Substack
- Each link as large, hoverable card with platform branding

#### 3b. RIE-Edge Books (`/ventures/books`)
**Publishing Portfolio**
- 2x2 grid of book cards
- Each card features:
  - Book cover placeholder/image
  - Title
  - Brief description
  - "Learn More" / "Visit Site" button
- Books:
  1. Adventures of Leo & Atlas (link to existing site)
  2. Hotel Persia (landing page)
  3. The Trilogy (coming soon)
  4. ByteCalls (landing page)

#### 3c. RIE-Edge Investments (`/ventures/investments`)
**Investment Portfolio**
- Section-based layout
- Each investment venture as prominent card:
  1. **PSA Gear** - gear/equipment focus
  2. **Section 8** - real estate/housing focus
- Cards include brief description, status, "Learn More" CTA

### 4. Contact (`/contact`)
**Contact Form**
- Clean, centered form layout
- Fields:
  - Name (required)
  - Email (required)
  - Message (textarea, required)
- Submit button with loading state

**Contact Information**
- Email address
- Social media links
- Optional address/phone

## Component Architecture

### Core Components
- `Navigation` - Sticky header with dropdown
- `Footer` - Links, copyright, social
- `VentureCard` - Reusable card for ventures
- `SocialLinks` - Icon grid for RouzyVerse
- `ContactForm` - Form with validation

### Layout Components
- `Hero` - Full-height hero sections
- `Section` - Standard page sections with spacing
- `Grid` - Responsive grid containers

## Responsive Design
- **Desktop**: 3-column grids, full navigation
- **Tablet**: 2-column grids, compact navigation
- **Mobile**: 1-column, hamburger menu

## Interactions
- Smooth scroll to sections
- Hover states on all interactive elements
- Dropdown menu with fade-in animation
- Form validation feedback
- Loading states for form submission

## Assets Needed
- RIE-Edge logo
- Book cover placeholders (or actual covers)
- Photography samples for RouzyVerse
- Social media icons (using Lucide React)

## Technical Stack
- **Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## Development Notes
- Use semantic HTML5 elements
- Ensure WCAG AA accessibility
- Optimize images for web
- Mobile-first responsive approach
- No secret keys (static site for now)
