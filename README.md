# Streamer Services — Portfolio

Your sales page. Shows what you build (landing pages, Telegram, Discord, full sites,
Kick profile optimization, link management) and ends with a contact form where a
client **ticks the services they want** and it lands **in your email inbox**.

Same arcade-terminal brand as your client landing pages. Pure static — hosts free
on Cloudflare Pages, no backend, no database.

---

## 1. Connect the contact form to your email (60 seconds, do this once)

The form uses **Web3Forms** (free, no account needed) to email you submissions.

1. Go to **https://web3forms.com**
2. Type the email address where you want submissions to arrive.
3. They instantly email you an **Access Key** (looks like `a1b2c3d4-....`).
4. Open **`config.js`** and paste it here:

   ```js
   web3formsKey: "PASTE-YOUR-ACCESS-KEY-HERE",
   ```

That's it. Every form submission now goes straight to that inbox, with the client's
name, contact, the services they ticked, budget and message.

> Until you add a real key, the form shows a friendly "not connected yet" notice
> instead of failing. So you can test the page safely first.

---

## 2. Make it yours

Everything lives in **`config.js`** — edit only that file:

- `brand` — your studio / personal name (shows as the big title)
- `logo` — optional square image path, e.g. `"assets/logo.png"` (empty = first letter)
- `accent` — your theme color (re-skins the whole page). Try `#7C5CFF`, `#FF4D4D`
- `headline` / `intro` / `tagline` — your pitch
- `services` — add / remove / reprice your offers (these also become the form tick-boxes)
- `steps`, `why`, `stats` — process, selling points, proof numbers
- `footerLinks` — your Telegram / Discord / email

To add a logo image: drop the file in an `assets/` folder and set
`logo: "assets/logo.png"`.

---

## 3. Deploy on Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare → **Pages** → **Connect to Git** → pick the repo.
3. Build settings: **Framework preset = None**, build command **empty**,
   output directory **`/`** (root).
4. Deploy. You get a live `*.pages.dev` link, or attach your own domain.

Updates later = `git push`, redeploys in ~60s.

(`netlify.toml` is included too if you ever want to drag-drop to Netlify as a backup.)

---

## Files

| File | What it is |
|------|-----------|
| `index.html` | page shell |
| `config.js` | **the only file you edit** — brand, services, prices, email key |
| `app.js` | renders everything + handles the form (don't edit) |
| `styles.css` | arcade-terminal base theme |
| `portfolio.css` | portfolio-specific styles |
| `_headers` | Cloudflare caching + security |
| `netlify.toml` | backup-host config |
