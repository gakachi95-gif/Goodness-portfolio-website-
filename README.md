# Goodness Nnenna Dike — Portfolio Website

A premium, dark-themed portfolio/agency website for **Goodness Nnenna Dike**,
Web Developer & Digital Solutions Creator. Built with plain **HTML, CSS and
vanilla JavaScript** — no build tools, no npm, no terminal required. Works by
simply opening `index.html`, and is ready to publish on GitHub Pages.

---

## 1. Folder Structure

```
portfolio/
├── index.html              ← the whole site (all sections)
├── style.css                ← all styling / design system
├── script.js                 ← all interactivity (portfolio, forms, AI chat, nav)
├── config.js                  ← YOUR editable settings (contact info, socials, etc.)
├── README.md                   ← this file
└── assets/
    └── images/
        ├── goodness-hero-portrait.jpg    ← large hero photo (right side of homepage)
        ├── goodness-about-portrait.jpg   ← photo used in the About section
        └── goodness-avatar-square.jpg    ← small square photo (header logo, contact card, favicon)
```

Open `index.html` in any browser (double-tap it, or use a browser's
"Open file" option) and the entire site works — no server or install needed.

---

## 2. How to Add / Replace Your Portrait

Your real photo is already in place, cropped from the reference image you
supplied, at:

- `assets/images/goodness-hero-portrait.jpg` — tall hero photo
- `assets/images/goodness-about-portrait.jpg` — About section photo
- `assets/images/goodness-avatar-square.jpg` — small square photo (header + favicon)

**To replace any of these with a new photo:**
1. Rename your new photo file to match one of the three names above exactly
   (or update the `src` path in `index.html` if you use a different name).
2. Copy it into `assets/images/`, overwriting the old file.
3. Recommended sizes: hero portrait ~1000×1400px (portrait orientation),
   about portrait ~1000×950px, avatar ~512×512px (square). Slightly different
   sizes still work fine — the CSS handles cropping automatically.

---

## 3. How to Change Your WhatsApp Number or Email

Open **`config.js`** and edit these two lines:

```js
email: "dikegoodnessnnenna@gmail.com",
whatsapp: "2347082297469", // digits only, country code, no + or spaces
```

Every WhatsApp button, the floating WhatsApp bubble, the footer, and the
contact section update automatically from this one file — you never need to
touch `index.html` for this.

You can also edit the pre-filled WhatsApp message here:

```js
whatsappPrefilledMessage: "Hi Goodness, I found your portfolio and I'd like to discuss a website project.",
```

---

## 4. How to Add New Portfolio Projects

Open **`script.js`** and find the `PORTFOLIO_PROJECTS` array near the top.
Add a new object like this:

```js
{
  title: "Your Project Name",
  category: "Business",              // must match one of the filter chips:
                                       // All / Business / Roofing / Construction / E-commerce / AI / Other
  type: "Concept Project",            // or "Unofficial Redesign Concept",
                                       // or a real type once it's a paid project
  description: "Short one-sentence description of the project.",
  features: ["Feature one", "Feature two", "Feature three"],
  palette: ["#1a1a1a", "#444444", "#8b5cf6"], // 3 hex colors used for the placeholder thumbnail
  image: "",                           // leave blank to use the generated placeholder,
                                       // or set to "assets/images/portfolio/your-screenshot.jpg"
                                       // once you have a real screenshot
  link: "#",                           // link to the live project or case study
},
```

**To use a real screenshot** instead of the generated placeholder graphic,
save your screenshot into `assets/images/portfolio/` and set the `image`
field to that path — the card will use it automatically.

**Important — honesty rule built into this site:** always keep `type` as
`"Concept Project"` or `"Unofficial Redesign Concept"` unless the project was
a real, paid client engagement. Never attribute a concept project to a real
company that didn't commission it.

---

## 5. How to Change Social Links

Open **`config.js`** and edit the `social` object:

```js
social: {
  facebook: "https://facebook.com/your-page",
  instagram: "https://instagram.com/your-handle",
  linkedin: "https://linkedin.com/in/your-profile",
  x: "https://x.com/your-handle",
},
```

These links automatically update in the Contact section and the footer.

---

## 6. How to Connect the AI Assistant to a Real Backend Later

Right now the AI Assistant widget runs on a **safe, built-in demo response
system** (see `getDemoResponse()` in `script.js`) — it recognizes common
questions about services, pricing, process, redesigns, AI, WhatsApp, etc.,
and replies instantly with no API key or backend needed. This is intentional
so the chatbot works immediately with zero setup, and safely, since no API
key can ever be exposed in frontend code.

**When you're ready to connect a real AI backend** (e.g. one that calls the
Anthropic API from your own server):

1. Build a small backend/server (Node, Python, a serverless function, etc.)
   that receives `{ message, history }` and calls the AI API **server-side**,
   where your API key stays safely hidden.
2. In `config.js`, set:
   ```js
   aiAssistantEndpoint: "https://your-backend.com/api/chat",
   ```
3. That's it — `script.js` will automatically detect the endpoint and start
   sending real requests to it (see the `callAiBackend()` function), instead
   of using the demo responses.

**Never** put an API key directly in `config.js`, `script.js`, or any other
file that ships to the browser — it would be publicly visible to anyone who
views the page source.

---

## 7. How to Deploy on GitHub Pages

1. Create a free GitHub account if you don't have one: https://github.com
2. Create a new repository (e.g. `my-portfolio`).
3. Upload all the files in this folder (`index.html`, `style.css`,
   `script.js`, `config.js`, the `assets/` folder) to that repository.
   - On GitHub.com, you can do this from your phone: open the repository →
     "Add file" → "Upload files" → select everything → Commit.
4. In the repository, go to **Settings → Pages**.
5. Under "Source", choose the branch (usually `main`) and folder `/ (root)`,
   then Save.
6. GitHub will give you a live link, usually:
   `https://your-username.github.io/my-portfolio/`
7. It can take a minute or two to go live the first time.

You can later connect a custom domain (e.g. `goodnessdike.com`) under the
same Settings → Pages screen.

---

## 8. How to Test Everything on Android

You don't need a computer — everything can be tested on your phone:

1. **Preview locally:** download/copy the whole `portfolio` folder onto your
   phone, then open `index.html` with a file manager app — it will open in
   your browser and the whole site will work, including the AI assistant and
   WhatsApp buttons.
2. **Preview online (recommended):** once uploaded to GitHub (Section 7),
   just open the GitHub Pages link in Chrome on your phone. This is the most
   accurate way to test, since it behaves exactly like it will for visitors.
3. **Check the essentials:**
   - Tap the hamburger menu (top right) — it should open a full-screen menu.
   - Tap **Chat on WhatsApp** anywhere — it should open WhatsApp with your
     number and pre-filled message.
   - Tap the **AI Assistant** button (bottom right) — it should open the
     chat panel and respond to the suggested questions.
   - Try the **Free Website Review** and **Contact** forms — since no
     endpoint is connected yet (Section 9), they'll show a friendly message
     confirming this, without losing any of your entered information.
   - Scroll through every section to confirm text and images look right on
     your specific screen size.

---

## 9. Connecting the Contact / Review Forms (so submissions reach you)

Right now, both forms are **frontend-only** — they show a confirmation
message but don't send anywhere yet, so nothing gets lost silently. To make
them deliver real submissions to your inbox:

1. Sign up for a free form backend such as:
   - **Formspree** — https://formspree.io
   - **FormSubmit** — https://formsubmit.co
   - **EmailJS** — https://www.emailjs.com
2. Create a form endpoint pointed at `dikegoodnessnnenna@gmail.com`.
3. Open `config.js` and paste the endpoint URL here:
   ```js
   contactFormEndpoint: "https://formspree.io/f/xxxxxxxx",
   reviewFormEndpoint: "https://formspree.io/f/yyyyyyyy",
   ```
4. Both forms will now submit for real — no other code changes needed.

---

## 10. How to Download This Project as a ZIP

If you received this project as a ZIP file already, just extract it on your
phone or computer — you're done, the folder structure above is preserved.

If you're working from GitHub and want a ZIP copy:
1. Open your repository on GitHub.com.
2. Click the green **Code** button.
3. Choose **Download ZIP**.

---

## Design Notes

- **Palette:** near-black background, deep navy panels, violet/purple accent
  (`#7c3aed`), warm gold used sparingly for your signature detail in the
  hero.
- **Typography:** Fraunces (serif, display headings) paired with Manrope
  (sans-serif, body text) for a premium editorial feel.
- **Portfolio thumbnails:** projects without a real screenshot use a
  lightweight, generated "browser mockup" SVG graphic (colored per project)
  rather than a fabricated screenshot — clearly labeled **Concept Project**.
  Replace with real screenshots any time using Section 4 above.
- **No fabricated content:** no fake testimonials, client counts, awards, or
  years of experience are included anywhere in this site, in line with your
  brief. Add real testimonials or stats yourself whenever you have them.
- **Accessibility:** semantic HTML, visible focus states, alt text on all
  images, a skip-to-content link, keyboard-operable navigation and forms,
  and `prefers-reduced-motion` support are all built in.

---

## Questions / Edits

Everything in this site is plain HTML/CSS/JS, so any further edits (new
sections, different colors, more services, etc.) can be made directly in
`index.html`, `style.css`, and `script.js` using any text editor — including
mobile code editor apps.
