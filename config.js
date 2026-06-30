/* =============================================================
   PORTFOLIO CONFIG  —  the ONLY file you normally edit.
   All your services live as "tracks" below. Each one shows on the
   page AND becomes a tick-box in the contact form.
============================================================= */

const CONFIG = {

  /* ---- IDENTITY ------------------------------------------------------ */
  brand:    "RABAVA STUDIO",
  logo:     "",                       // optional: "assets/logo.png" (square)
  accent:   "#53FC18",                // the fluoro spot color (re-skins the page)
  kicker:   "Streamer Services",
  tagline:  "// the creator studio for streamers",
  headline: "Everything a streamer needs to look {pro}.",
  intro:    "Branded pages, profiles, overlays, automation and community setup — one studio, the full kit. Built fast, built to convert viewers into supporters, and fully yours.",

  ticker: ["Creator Hubs", "Kick Profiles", "Brand Kits", "Overlays", "AI Clips", "Discord", "Sponsor Kits"],

  stats: [
    { n: "48h",  l: "Avg delivery" },
    { n: "100%", l: "Yours to own" },
    { n: "7",    l: "Service tracks" },
  ],

  /* ---- SERVICES (TRACKS) --------------------------------------------
     Grouped so a client picks fast. `featured:true` = the top pick.
     Edit / reprice freely. `id` must stay unique (drives the mockup).  */
  services: [
    {
      id: "hub",
      icon: "🎮",
      title: "Creator Hub",
      price: "$80–300",
      featured: true,
      tagline: "The flagship — replaces Linktree",
      desc: "A branded mini-site that makes you look like a serious creator: donations, crypto, live status, goals and every link in one fast, mobile-perfect page.",
      includes: ["Custom homepage", "Donations + crypto/QR", "Live status + goals", "All socials + Discord", "Fully branded", "Mobile + fast"],
    },
    {
      id: "kick",
      icon: "⚡",
      title: "Kick Profile Makeover",
      price: "from $40",
      desc: "Turn an empty Kick page into a real channel — banner, avatar, bio, about, panels and an offline screen, all on-brand.",
      includes: ["Banner + avatar", "Bio + about", "Profile panels", "Offline screen", "Branding pass"],
    },
    {
      id: "brand",
      icon: "🎨",
      title: "Brand & Identity Kit",
      price: "from $60",
      desc: "Not just graphics — an identity. Logo, colors, fonts, your creator voice and ready-to-paste bios for every platform.",
      includes: ["Logo", "Colors + fonts", "Creator voice", "Social bios", "Usage guide"],
    },
    {
      id: "overlays",
      icon: "📺",
      title: "Overlays & Stream Assets",
      price: "from $50",
      desc: "A clean, minimal overlay set plus the assets that make a channel feel finished — screens, alerts, panels, emotes and badges.",
      includes: ["Starting / BRB / Offline / Ending", "Webcam frame + alerts", "Panels + chat box", "Emotes + sub badges"],
    },
    {
      id: "content",
      icon: "🤖",
      title: "Content & AI Automation",
      price: "from $70",
      desc: "Turn one stream into a content machine: VOD → Shorts and TikToks with hooks and captions, AI titles and descriptions, and auto social posting.",
      includes: ["VOD → Shorts / TikToks", "Auto captions + hooks", "AI titles + descriptions", "Social auto-posting", "Notify automation"],
    },
    {
      id: "community",
      icon: "💬",
      title: "Community & Links",
      price: "from $20",
      desc: "Where your audience gathers — a set-up Discord server and a Telegram channel that pings on live, plus tracked links you control.",
      includes: ["Discord server setup", "Telegram + live alerts", "Tracked short links", "Monthly clicks report"],
    },
    {
      id: "website",
      icon: "🌐",
      title: "Full Site & Sponsor Kit",
      price: "from $150",
      desc: "When one page isn't enough — a multi-section site with videos, sponsors, merch and a press/media kit that lands real deals.",
      includes: ["Multi-section site", "Videos + live status", "Sponsors + merch", "Press / media kit", "Audience stats"],
    },
  ],

  /* ---- HOW IT WORKS -------------------------------------------------- */
  steps: [
    { t: "Pick your tracks", d: "Tick what you need below and send your handle, links and colors." },
    { t: "I build it",       d: "Branded, tested and ready — usually within 48 hours." },
    { t: "Go live",          d: "Deployed fast, on your own link. You own everything." },
    { t: "I keep it running", d: "Swaps, updates and new assets whenever you need them." },
  ],

  /* ---- WHY ME -------------------------------------------------------- */
  why: ["48h turnaround", "You own everything", "Crypto / USDT friendly", "One studio, full kit", "Anti-Linktree design", "Built by a streamer"],

  /* ---- CONTACT FORM -------------------------------------------------- */
  budgets: ["Under $50", "$50 – $150", "$150 – $400", "$400+", "Not sure yet"],

  /* CONNECT THE FORM TO YOUR EMAIL (once):
     1. https://web3forms.com → enter your email → copy the Access Key
     2. paste it below. Every submission then emails you the client's
        name, contact, the tracks they ticked, budget and message.       */
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  emailSubject: "🎮 New streamer project request",

  /* ---- FOOTER -------------------------------------------------------- */
  footerHandle: "@rabava",
  footerLinks: [
    { label: "Telegram", url: "#" },
    { label: "Discord",  url: "#" },
    { label: "Email",    url: "mailto:you@email.com" },
  ],

};

window.CONFIG = CONFIG;
