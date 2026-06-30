/* =============================================================
   PORTFOLIO CONFIG  —  the ONLY file you normally edit.
   Change your brand, services, prices and contact email here.
   Everything on the page builds itself from this.
============================================================= */

const CONFIG = {

  /* ---- IDENTITY ------------------------------------------------------ */
  brand:    "RABAVA STUDIO",          // <-- your studio / personal brand name
  logo:     "",                       // optional: "assets/logo.png" (square). Empty = first letter
  accent:   "#53FC18",                // theme color. Try #7C5CFF, #FF4D4D, #18C3FC...
  kicker:   "Streamer Services",      // tiny label above the name
  tagline:  "// pages · bots · servers · profiles",
  headline: "I build the complete streamer {command center}.",
  intro:    "Landing pages, Telegram, Discord and Kick profiles — branded, fast, and built to turn viewers into supporters. One clean setup, fully yours.",

  /* scrolling marquee words (keep short) */
  ticker: ["Landing Pages", "Telegram", "Discord Servers", "Kick Profiles", "Link Systems", "Branding"],

  /* three quick proof stats under the hero */
  stats: [
    { n: "48h",  l: "Avg delivery" },
    { n: "100%", l: "Yours to own" },
    { n: "USDT", l: "Easy payment" },
  ],

  /* ---- SERVICES -----------------------------------------------------
     These render as cards AND as the tick-boxes in the contact form.
     id must be unique. price is just text — write anything.            */
  services: [
    {
      id: "landing",
      icon: "🎮",
      title: "Streamer Landing Page",
      price: "from $25",
      desc: "A premium link-in-bio that beats Linktree — donations, crypto with QR, socials and live alerts, all in your brand.",
      includes: ["Custom branded design", "Crypto wallets + QR codes", "All your links in one place", "Mobile-first, lightning fast"],
    },
    {
      id: "telegram",
      icon: "✈️",
      title: "Telegram Setup",
      price: "from $15",
      desc: "A channel that pings every follower the second you go live, with your links and bonus codes pinned up top.",
      includes: ["Branded channel", "Pinned links + live alerts", "Optional menu bot", "Full setup + handover"],
    },
    {
      id: "discord",
      icon: "💬",
      title: "Discord Server",
      price: "from $20",
      desc: "A full community server — roles, channels, welcome bot and a clean links hub, ready to grow from day one.",
      includes: ["Channel + role layout", "Auto welcome + roles", "Links + announcements", "Moderation ready"],
    },
    {
      id: "fullsite",
      icon: "🌐",
      title: "Full Website",
      price: "from $80",
      desc: "When one page isn't enough — a bigger multi-section site with schedule, sponsors, media and more.",
      includes: ["Multi-section build", "Custom domain setup", "Sponsor / media sections", "Built to scale"],
    },
    {
      id: "kick",
      icon: "⚡",
      title: "Kick Profile Optimization",
      price: "from $15",
      desc: "Make your Kick page actually convert — panels, bio, branding and a layout that turns visitors into followers.",
      includes: ["Profile panels + bio", "Branding pass", "Links + socials wired", "Conversion-first layout"],
    },
    {
      id: "links",
      icon: "🔗",
      title: "Link Management",
      price: "$5 / month",
      desc: "Links rotate or get banned? I swap them everywhere in minutes and send you a monthly clicks report.",
      includes: ["Tracked short links", "Instant swaps when links die", "Monthly clicks report", "Page never re-touched"],
    },
  ],

  /* ---- HOW IT WORKS -------------------------------------------------- */
  steps: [
    { t: "Tell me what you need", d: "Pick your services below and send your links, colors and handle." },
    { t: "I build it",           d: "Branded, tested and ready — usually within 48 hours." },
    { t: "Go live",              d: "Deployed to a fast host with your own link. You own it fully." },
    { t: "I keep it running",    d: "Link swaps and updates whenever you need them." },
  ],

  /* ---- WHY ME (chips) ------------------------------------------------ */
  why: ["48h turnaround", "You own everything", "Crypto / USDT friendly", "Unlimited traffic", "You control your links", "Anti-Linktree design"],

  /* ---- CONTACT FORM -------------------------------------------------- */
  budgets: ["Under $25", "$25 – $60", "$60 – $150", "$150+", "Not sure yet"],

  /* HOW SUBMISSIONS REACH YOU BY EMAIL:
     1. Go to https://web3forms.com  (free, no account)
     2. Type the email you want submissions sent to → you get an Access Key instantly
     3. Paste that key below. Done — every form goes straight to your inbox.        */
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

// expose for app.js (plain <script>, no build step)
window.CONFIG = CONFIG;
