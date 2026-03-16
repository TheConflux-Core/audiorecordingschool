# BUILD TASK — Audio Recording School MVP

## Objective
Build a complete Next.js + Tailwind CSS content site for audiorecordingschool.net as a staging-ready MVP.

## Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4 with @tailwindcss/typography plugin
- Local content files (no CMS)
- Deploy target: Vercel staging

## Project Structure
```
app/
  layout.tsx          # Root layout with metadata base, fonts
  page.tsx            # Homepage
  not-found.tsx       # Custom 404
  globals.css         # Tailwind directives
  about/page.tsx
  contact/page.tsx
  blog/
    page.tsx          # Article index (lists all articles)
    [slug]/page.tsx   # Dynamic article pages
  topics/
    [slug]/page.tsx   # Topic hub pages
  privacy-policy/page.tsx
  terms/page.tsx
  affiliate-disclosure/page.tsx
  sitemap.ts          # Dynamic sitemap generation
  robots.ts           # Robots.txt generation
components/
  Header.tsx          # Sticky nav with brand, links, mobile menu
  Footer.tsx          # Multi-column footer with legal links
  ArticleCard.tsx     # Card for article listings
  TopicGrid.tsx       # Topic grid display
  Hero.tsx            # Homepage hero section
  Prose.tsx           # Article content wrapper
lib/
  content.ts          # Article/topic loading helpers
  utils.ts            # Shared utilities (date formatting, etc.)
content/
  articles/           # JSON article content files
  topics/             # Topic metadata
```

## Routes Required (15 total)

### Top-level (7)
- `/` — Homepage
- `/about` — About page
- `/contact` — Contact page
- `/blog` — Article index
- `/privacy-policy` — Privacy policy
- `/terms` — Terms and conditions
- `/affiliate-disclosure` — Affiliate disclosure

### Topic hubs (5)
- `/topics/recording-fundamentals`
- `/topics/home-studio-setup`
- `/topics/gear-and-equipment`
- `/topics/podcast-and-voice-recording`
- `/topics/troubleshooting`

### Articles (5)
- `/blog/how-to-start-recording-audio-at-home` — "How to Start Recording Audio at Home: A Beginner's Guide"
- `/blog/home-studio-setup-basics` — "Home Studio Setup Basics: What You Actually Need to Record Better Audio"
- `/blog/usb-vs-xlr-microphones-for-beginners` — "USB vs XLR Microphones for Beginners: Which One Should You Choose?"
- `/blog/why-your-recordings-sound-bad-at-home` — "Why Your Recordings Sound Bad at Home — and How to Fix It"
- `/blog/how-to-record-clear-vocals-at-home` — "How to Record Clear Vocals at Home Without Expensive Gear"

## Homepage Modules
1. Hero section — explain what the site is, CTA to "Start Here" article
2. "Start Here" feature — highlight the beginner guide
3. Topic grid — show all 5 topic hubs
4. Featured articles — show the 5 launch articles
5. About preview — brief mission statement
6. Newsletter placeholder — reserve space (no backend)

## Article Requirements
Each article must include:
- Title, excerpt, date, read time estimate
- Topic assignment
- Structured headings (h2, h3) with real educational content
- At least 2 internal links to related articles
- Affiliate-ready callout zone placeholder (aside element)
- Prose styling via @tailwindcss/typography
- Metadata (title, description, openGraph)

## Content Requirements
- Homepage: brand intro, value proposition, CTAs
- About: educational mission, trust-building
- Contact: simple contact info/form placeholder
- Legal pages: complete, realistic privacy policy, terms, affiliate disclosure
- Articles: 800-1500 words each, genuinely useful educational content, beginner-friendly tone
- Topic pages: intro text, list of articles in that topic

## SEO Requirements
- Every page has generateMetadata() or static metadata export
- Title format: "{Page Name} | Audio Recording School"
- Descriptions: unique, 120-160 chars
- OpenGraph tags on all pages
- Article pages have Article structured data (JSON-LD)
- sitemap.ts generates all routes
- robots.ts allows crawling, points to sitemap
- Canonical URLs via alternates.canonical
- metadataBase set to https://audiorecordingschool.net

## Design System
Use these Tailwind conventions:
- Colors: gray-50/100/200/500/700/900 for neutrals, blue-500/600/50 for brand
- Container: max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
- Section spacing: py-12 sm:py-16 lg:py-24
- Headings: text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight (h1)
- Cards: rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md
- Buttons: rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500
- Article prose: prose prose-lg prose-gray mx-auto max-w-none

## Compliance
- Privacy policy page required
- Terms page required
- Affiliate disclosure page required
- Contact page required
- Footer must link to all legal pages

## Build Steps
1. Initialize Next.js project with TypeScript and Tailwind
2. Install @tailwindcss/typography plugin
3. Create root layout with metadata base, Header, Footer
4. Build all components (Header, Footer, Hero, ArticleCard, TopicGrid, Prose)
5. Create content loading system (lib/content.ts)
6. Write all 5 articles as JSON content files (800-1500 words each, real educational content)
7. Create all topic metadata files
8. Build all page routes with proper metadata
9. Implement sitemap.ts and robots.ts
10. Add structured data to article pages
11. Test build with `npm run build`

## Important Notes
- Use Server Components by default, "use client" only for mobile menu toggle
- All internal links use next/link
- All images would use next/image (placeholder for now)
- Mobile-first responsive design
- Tone: practical, approachable, educational, trustworthy
- This is a controlled MVP test — keep it clean and complete, not bloated

When completely finished, run this command to notify:
openclaw system event --text "Done: Built Audio Recording School MVP site" --mode now
