# Studio Portfolio (v2) — risograph editorial theme

A second, distinct design for your streamer-services portfolio. Cream/ink/fluoro
"risograph studio" look — deliberately different from your dark arcade landing pages,
so the portfolio reads as a *studio with range*, not a clone of the one product.
Each service shows a little CSS mockup (phone, Telegram, Discord, browser, Kick
profile, link dashboard) so the variety is visible at a glance.

Same data + same email form as the other theme — it reuses the same `config.js`.

## 1. Connect the form to your email (once)
1. Go to https://web3forms.com → enter your email → copy the **Access Key**.
2. In `config.js` set: `web3formsKey: "YOUR-KEY"`.
Done — every submission emails you the client's name, contact, ticked services,
budget and message. Until then the form shows a "not connected yet" notice.

## 2. Make it yours
Edit **`config.js`** only: `brand`, `accent` (the fluoro spot color), `headline`
(wrap the highlight in `{curly braces}`), `intro`, `services`, `steps`, `why`,
`stats`, `footerLinks`.

## 3. Deploy (Cloudflare Pages)
Push to a repo → Cloudflare Pages → Connect to Git → preset **None**, build empty,
output `/`. Or drag-drop the folder to Netlify.

## Files
index.html · studio.css · config.js (shared) · app.js · _headers · netlify.toml
