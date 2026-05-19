// Placeholder featured projects — easy to swap with real content later.
export const projects = [
  {
    slug: "lumen-commerce",
    index: "01",
    title: "Lumen Commerce",
    subtitle: "A headless storefront for a luxury fragrance house",
    year: "2024",
    role: "Lead Frontend Engineer",
    client: "Maison Lumen",
    stack: ["Next.js 14", "TypeScript", "Shopify Hydrogen", "GSAP", "Sanity"],
    cover:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
    accent: "#C9A86A",
    tagline:
      "Reimagining the digital boutique with quiet motion and editorial typography.",
    metrics: [
      { value: "+38%", label: "Conversion rate" },
      { value: "98", label: "Lighthouse score" },
      { value: "1.1s", label: "LCP, P75" },
    ],
    challenge:
      "Maison Lumen wanted to translate the intimacy of their physical boutiques into a digital experience that felt unhurried, tactile, and unmistakably their own.",
    approach:
      "We rebuilt the storefront on Next.js App Router with a custom theme system, replaced Shopify's stock checkout with a bespoke flow, and choreographed every transition with GSAP and Framer Motion.",
    outcome:
      "A storefront that loads under a second on 4G, ranks in the top 1% of Lighthouse scores in its category, and lifted conversions across all flagship lines.",
    gallery: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "atlas-analytics",
    index: "02",
    title: "Atlas Analytics",
    subtitle: "Real-time observability for fintech infrastructure teams",
    year: "2024",
    role: "Senior Frontend Engineer",
    client: "Atlas",
    stack: ["React 19", "TanStack Query", "D3", "WebSockets", "Tailwind"],
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    accent: "#3B82F6",
    tagline:
      "A dense, keyboard-first dashboard that respects the engineers who live inside it.",
    metrics: [
      { value: "12k", label: "Daily active engineers" },
      { value: "60fps", label: "On 50k row tables" },
      { value: "-72%", label: "Time to insight" },
    ],
    challenge:
      "The previous dashboard buckled under the weight of streaming data. Engineers had to wait, scroll, and refresh — three things engineers should never have to do.",
    approach:
      "Virtualised everything. Built a custom websocket layer with backpressure handling. Designed a command palette so every workflow lived a single keystroke away.",
    outcome:
      "A tool engineers actually open without sighing — and a 72% reduction in mean time to incident resolution.",
    gallery: [
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1551288049-9a3a1a05cd25?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "voyage-booking",
    index: "03",
    title: "Voyage",
    subtitle: "A boutique travel platform with cinematic itineraries",
    year: "2023",
    role: "Frontend Architect",
    client: "Voyage Travel Co.",
    stack: ["Next.js", "Framer Motion", "Mapbox GL", "Stripe", "Contentful"],
    cover:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
    accent: "#0F766E",
    tagline:
      "Booking a holiday should feel like the holiday itself — slow, beautiful, considered.",
    metrics: [
      { value: "4.9★", label: "App store rating" },
      { value: "+52%", label: "Avg. session time" },
      { value: "22", label: "Countries live" },
    ],
    challenge:
      "Travel sites are loud. Voyage wanted the opposite — a digital concierge that whispered, with itineraries that read like editorial features.",
    approach:
      "We built a chapter-based itinerary engine, integrated Mapbox with hand-drawn map styles, and tuned every page transition to feel cinematic without ever feeling slow.",
    outcome:
      "Bookings doubled in six months. Users now describe the experience as 'reading a magazine that books your trip'.",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "north-design-system",
    index: "04",
    title: "North Design System",
    subtitle: "A composable design system shipped across 14 product teams",
    year: "2023",
    role: "Design Systems Lead",
    client: "Internal",
    stack: ["React", "Radix UI", "Storybook", "Style Dictionary", "Figma"],
    cover:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
    accent: "#9333EA",
    tagline:
      "120 components. Three brands. One source of truth — and zero tickets about button padding.",
    metrics: [
      { value: "120+", label: "Components" },
      { value: "14", label: "Product teams" },
      { value: "-65%", label: "UI bug reports" },
    ],
    challenge:
      "Three product brands, fourteen teams, and a Figma library that disagreed with the code in ten different ways.",
    approach:
      "Tokens in, semantic in the middle, components out. We wrote a single design token pipeline, taught the components to be polymorphic, and got out of every team's way.",
    outcome:
      "A 65% drop in UI-bug tickets and the kind of velocity that lets engineers ship features instead of arguing about radii.",
    gallery: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "echo-podcast",
    index: "05",
    title: "Echo",
    subtitle: "A podcast platform built around the transcript",
    year: "2022",
    role: "Senior Frontend Engineer",
    client: "Echo Media",
    stack: ["Next.js", "WebAudio API", "Whisper", "GraphQL", "Tailwind"],
    cover:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80",
    accent: "#DC2626",
    tagline:
      "Treating the transcript as the product — searchable, sharable, beautifully set.",
    metrics: [
      { value: "2.4M", label: "Monthly listeners" },
      { value: "0.4s", label: "Search latency" },
      { value: "+41%", label: "Share rate" },
    ],
    challenge:
      "Podcast players treat audio as a black box. Echo wanted to make every word findable, quotable, and beautiful enough to screenshot.",
    approach:
      "Built a streaming audio player tied frame-perfect to a typeset transcript. Designed quote cards that look hand-crafted. Indexed two million minutes of speech.",
    outcome:
      "Shares went up by 41%, search became the primary discovery channel, and the typography won a Communication Arts nod.",
    gallery: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
