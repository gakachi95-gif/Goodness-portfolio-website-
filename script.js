/* =====================================================================
   GOODNESS NNENNA DIKE — PORTFOLIO SCRIPT
   ===================================================================== */

/* ---------------------------------------------------------------
   PORTFOLIO DATA
   Add new projects by adding an object to this array. Each project
   needs: title, category (used for the filter chip AND label),
   type ("Concept Project" / "Unofficial Redesign Concept" / a real
   project type if it becomes a paid client project), description,
   features (array of short strings), thumbColor (used to generate
   the placeholder visual — replace `image` with a real screenshot
   path any time and it will be used instead), and link.
--------------------------------------------------------------- */
const PORTFOLIO_PROJECTS = [
  {
    title: "Roofing Company Website",
    category: "Roofing",
    type: "Concept Project",
    description: "Modern roofing website concept focused on lead generation and trust.",
    features: ["Quote request form", "Service areas", "Before/after gallery"],
    palette: ["#3b2412", "#c2703d", "#f2b872"],
    image: "",
    link: "#",
  },
  {
    title: "Construction Company Website",
    category: "Construction",
    type: "Concept Project",
    description: "Construction website concept showcasing projects, services and credibility.",
    features: ["Project portfolio", "Services overview", "Enquiry form"],
    palette: ["#1a2233", "#3e5c8a", "#eab308"],
    image: "",
    link: "#",
  },
  {
    title: "Restaurant Website",
    category: "Business",
    type: "Concept Project",
    description: "Restaurant website concept with online menu, gallery and reservations.",
    features: ["Digital menu", "Photo gallery", "Reservation form"],
    palette: ["#2b1408", "#d9622b", "#f4c95d"],
    image: "",
    link: "#",
  },
  {
    title: "Fashion Brand Website",
    category: "E-commerce",
    type: "Concept Project",
    description: "Fashion brand website concept with product showcase and modern design.",
    features: ["Product catalogue", "Lookbook layout", "Cart-ready structure"],
    palette: ["#1c1c1c", "#8a8a8a", "#e8e2d8"],
    image: "",
    link: "#",
  },
  {
    title: "AI Web App Dashboard",
    category: "AI",
    type: "Concept Project",
    description: "AI web application dashboard concept with clean UI and smart features.",
    features: ["Chat interface", "Analytics panels", "Dark-mode UI"],
    palette: ["#150e2b", "#7c3aed", "#22d3ee"],
    image: "",
    link: "#",
  },
  {
    title: "Poka Ribs Restaurant Website",
    category: "Business",
    type: "Concept Project",
    description: "Restaurant-focused website concept designed to showcase menu highlights and drive orders and reservations.",
    features: ["Menu highlights", "Order/reserve CTA", "Mobile-first layout"],
    palette: ["#2a1810", "#c1440e", "#f6a01a"],
    image: "",
    link: "#",
  },
];

/* ---------------------------------------------------------------
   HELPERS
--------------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Generates a lightweight abstract "browser mockup" SVG placeholder
   for a portfolio thumbnail using a project's palette. Swap the
   project's `image` field for a real screenshot path whenever one
   is available — the renderer will use that instead automatically. */
function buildThumbSVG(project) {
  const [bg, mid, accent] = project.palette;
  const id = project.title.replace(/\s+/g, "-").toLowerCase();
  return `
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(project.title)} concept preview">
    <defs>
      <linearGradient id="grad-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg}"/>
        <stop offset="100%" stop-color="${mid}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad-${id})"/>
    <rect x="0" y="0" width="400" height="26" fill="#00000033"/>
    <circle cx="16" cy="13" r="3.5" fill="#ffffff55"/>
    <circle cx="28" cy="13" r="3.5" fill="#ffffff55"/>
    <circle cx="40" cy="13" r="3.5" fill="#ffffff55"/>
    <rect x="60" y="8" width="180" height="10" rx="5" fill="#ffffff22"/>
    <rect x="24" y="50" width="150" height="14" rx="3" fill="#ffffffcc"/>
    <rect x="24" y="72" width="200" height="8" rx="3" fill="#ffffff77"/>
    <rect x="24" y="86" width="160" height="8" rx="3" fill="#ffffff55"/>
    <rect x="24" y="108" width="90" height="26" rx="13" fill="${accent}"/>
    <rect x="230" y="46" width="146" height="100" rx="10" fill="#ffffff18"/>
    <rect x="24" y="168" width="112" height="90" rx="8" fill="#ffffff14"/>
    <rect x="144" y="168" width="112" height="90" rx="8" fill="#ffffff1f"/>
    <rect x="264" y="168" width="112" height="90" rx="8" fill="#ffffff14"/>
  </svg>`;
}

/* ---------------------------------------------------------------
   PORTFOLIO RENDER + FILTER
--------------------------------------------------------------- */
function renderPortfolio(filter = "All") {
  const grid = $("#portfolioGrid");
  if (!grid) return;

  const items = PORTFOLIO_PROJECTS.filter(
    (p) => filter === "All" || p.category === filter
  );

  grid.innerHTML = items
    .map(
      (p) => `
    <article class="project-card">
      <div class="project-thumb">
        ${p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)} screenshot" loading="lazy" />` : buildThumbSVG(p)}
        <span class="project-badge">${escapeHtml(p.type)}</span>
      </div>
      <div class="project-body">
        <p class="project-category">${escapeHtml(p.category)}</p>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="project-features">
          ${p.features.map((f) => `<span>${escapeHtml(f)}</span>`).join("")}
        </div>
        <a href="${p.link}" class="project-link">
          View Project
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </article>`
    )
    .join("");
}

function initPortfolioFilters() {
  const filterBar = $("#portfolioFilters");
  if (!filterBar) return;
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    $$(".filter-chip", filterBar).forEach((c) => {
      c.classList.remove("is-active");
      c.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderPortfolio(btn.dataset.filter);
  });
}

/* ---------------------------------------------------------------
   WHATSAPP LINKS
--------------------------------------------------------------- */
function initWhatsappLinks() {
  $$(".whatsapp-link").forEach((el) => {
    el.href = SITE_CONFIG.whatsappLink;
    el.target = "_blank";
    el.rel = "noopener";
  });
}

function initEmailLinks() {
  const emailTargets = ["contactEmailLink", "sendEmailBtn", "footerEmailLink"];
  emailTargets.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = SITE_CONFIG.emailLink;
  });
  const emailTextEl = $("#contactEmailLink");
  if (emailTextEl) emailTextEl.textContent = SITE_CONFIG.email;
  const waTextEl = $("#contactWhatsappText");
  if (waTextEl) {
    const formatted = "+" + SITE_CONFIG.whatsapp.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1 $2 $3 $4");
    waTextEl.textContent = formatted;
  }
}

function initSocialLinks() {
  $$(".social-link").forEach((el) => {
    const key = el.dataset.social;
    if (SITE_CONFIG.social[key]) el.href = SITE_CONFIG.social[key];
  });
}

/* ---------------------------------------------------------------
   HEADER / MOBILE NAV
--------------------------------------------------------------- */
function initMobileNav() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  $$(".nav-link", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function initActiveNavOnScroll() {
  const links = $$(".nav-link");
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------------------------------------------------------------
   FAQ ACCORDION
--------------------------------------------------------------- */
function initFaq() {
  const list = $("#faqList");
  if (!list) return;
  list.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question");
    if (!btn) return;
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("is-open");

    $$(".faq-item", list).forEach((i) => {
      i.classList.remove("is-open");
      $(".faq-question", i).setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
}

/* ---------------------------------------------------------------
   FORMS (frontend-only — wire up an endpoint in config.js to go live)
--------------------------------------------------------------- */
function initForm(formId, noteId, endpointKey) {
  const form = document.getElementById(formId);
  const note = document.getElementById(noteId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const endpoint = SITE_CONFIG[endpointKey];
    const submitBtn = $('button[type="submit"]', form);
    const originalLabel = submitBtn.innerHTML;
    submitBtn.disabled = true;

    if (endpoint) {
      try {
        const formData = new FormData(form);
        await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        note.textContent = "Thanks — your message has been sent. I'll be in touch soon.";
        form.reset();
      } catch (err) {
        note.textContent = "Something went wrong sending this. Please try WhatsApp or email instead.";
        note.style.color = "#f59e0b";
      }
    } else {
      // Frontend-only demo mode — no backend connected yet.
      await new Promise((r) => setTimeout(r, 500));
      note.textContent =
        "Thanks! This form isn't connected to an inbox yet — please also message me on WhatsApp or email so I see this right away.";
      form.reset();
    }
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalLabel;
  });
}

/* ---------------------------------------------------------------
   AI ASSISTANT WIDGET
--------------------------------------------------------------- */
const AI_GREETING =
  "Hi! 👋 I'm the AI assistant. I can answer questions about Goodness's services, websites, AI integrations and starting a project.";

const AI_SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "Do you build websites for businesses?",
  "Can you redesign my existing website?",
  "Can you build an AI assistant?",
  "How does the process work?",
  "I'd like a free website review",
  "I want to start a project",
];

/* Safe demo response system. Matches on keywords so the widget is
   useful even with no backend connected. When SITE_CONFIG.aiAssistantEndpoint
   is set, real requests are sent there instead (see callAiBackend). */
function getDemoResponse(rawInput) {
  const input = rawInput.toLowerCase();

  const has = (...words) => words.some((w) => input.includes(w));

  if (has("service", "offer", "what do you do", "what can you")) {
    return {
      text:
        "I build business websites, redesign outdated sites, create landing pages, lead-generation websites, e-commerce stores, AI website assistants, and handle website optimization and ongoing maintenance.",
      actions: [{ label: "See all services", href: "#services" }],
    };
  }
  if (has("redesign", "outdated", "old website", "update my site")) {
    return {
      text:
        "Yes — I regularly redesign outdated websites, improving the design, mobile experience, speed and conversion path while keeping what already works for your business.",
      actions: [{ label: "Request a free review", href: "#review" }],
    };
  }
  if (has("business", "company website", "for my business")) {
    return {
      text:
        "Yes, building professional business websites is my core focus — designed around your goals and built to convert visitors into enquiries.",
      actions: [{ label: "View portfolio", href: "#portfolio" }],
    };
  }
  if (has("ai assistant", "chatbot", "ai integration", "ai website")) {
    return {
      text:
        "Yes — I build AI-powered website assistants like this one. They can answer visitor questions, guide people through your services and collect enquiries around the clock.",
      actions: [{ label: "See AI Website Assistants", href: "#services" }],
    };
  }
  if (has("process", "how does it work", "how it works", "steps")) {
    return {
      text:
        "The process has five steps: Discover, Plan, Design, Build and Launch. I'll walk you through timelines and what's needed from you at each stage.",
      actions: [{ label: "See the process", href: "#process" }],
    };
  }
  if (has("free website review", "free review", "review my website", "review")) {
    return {
      text:
        "I'd be glad to review your website. Share the link and I'll point out practical opportunities to improve design, mobile experience and conversions.",
      actions: [{ label: "Open review form", href: "#review" }],
    };
  }
  if (has("start a project", "start project", "hire", "get started", "quote", "price", "cost", "how much")) {
    return {
      text:
        "Great — every project is quoted based on scope, functionality and requirements. The fastest way to start is to message me directly with a short description of what you need.",
      actions: [{ label: "Start a Project", href: "#contact" }, { label: "Chat on WhatsApp", whatsapp: true }],
    };
  }
  if (has("whatsapp", "phone", "call", "number")) {
    return {
      text: "You can reach Goodness directly on WhatsApp — it's usually the fastest way to get a response.",
      actions: [{ label: "Chat on WhatsApp", whatsapp: true }],
    };
  }
  if (has("email")) {
    return {
      text: `You can email Goodness directly at ${SITE_CONFIG.email}.`,
      actions: [{ label: "Send Email", href: SITE_CONFIG.emailLink }],
    };
  }
  if (has("ecommerce", "e-commerce", "online store", "shop", "sell online")) {
    return {
      text:
        "Yes — I build online stores and product-selling experiences designed to make it easy for customers to browse and buy.",
      actions: [{ label: "See E-commerce", href: "#services" }],
    };
  }
  if (has("maintain", "maintenance", "support", "updates after launch")) {
    return {
      text:
        "Yes — ongoing maintenance is available, including updates, content changes, backups and support after your website launches.",
      actions: [{ label: "See FAQ", href: "#faq" }],
    };
  }
  if (has("nigeria", "international", "outside nigeria", "abroad", "worldwide")) {
    return {
      text:
        "Yes — Goodness works with businesses internationally. All communication, planning and delivery happen remotely, so location isn't a barrier.",
      actions: [{ label: "Start a Project", href: "#contact" }],
    };
  }
  if (has("mobile", "phone friendly", "responsive")) {
    return {
      text: "Every website is built mobile-first — designed for phones first, then scaled up for tablets and desktops.",
    };
  }

  return {
    text:
      "I might not have a ready answer for that yet, but Goodness will! Try one of the suggested questions below, or send this over on WhatsApp for a direct answer.",
    actions: [{ label: "Chat on WhatsApp", whatsapp: true }],
  };
}

/* Placeholder for a real backend call. Point SITE_CONFIG.aiAssistantEndpoint
   at your own server-side proxy (never expose an API key in the browser). */
async function callAiBackend(message, history) {
  const res = await fetch(SITE_CONFIG.aiAssistantEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, history }),
  });
  if (!res.ok) throw new Error("AI backend error");
  const data = await res.json();
  return { text: data.reply || data.text || "…", actions: data.actions || [] };
}

function initAiAssistant() {
  const fab = $("#aiFab");
  const heroChip = $("#heroAiChip");
  const panel = $("#aiPanel");
  const closeBtn = $("#aiPanelClose");
  const body = $("#aiPanelBody");
  const suggestedWrap = $("#aiSuggested");
  const form = $("#aiInputForm");
  const input = $("#aiInput");

  if (!panel) return;

  let history = [];
  let hasOpened = false;

  function appendMessage(role, content) {
    const wrap = document.createElement("div");
    wrap.className = "ai-msg " + (role === "user" ? "ai-msg-user" : "ai-msg-bot");

    const text = document.createElement("div");
    text.textContent = content.text;
    wrap.appendChild(text);

    if (content.actions && content.actions.length) {
      const actionsWrap = document.createElement("div");
      actionsWrap.className = "ai-msg-actions";
      content.actions.forEach((a) => {
        const el = document.createElement("a");
        el.textContent = a.label;
        if (a.whatsapp) {
          el.href = SITE_CONFIG.whatsappLink;
          el.target = "_blank";
          el.rel = "noopener";
        } else {
          el.href = a.href || "#";
          if (a.href && a.href.startsWith("#")) {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              document.querySelector(a.href)?.scrollIntoView({ behavior: "smooth" });
              closePanel();
            });
          }
        }
        actionsWrap.appendChild(el);
      });
      wrap.appendChild(actionsWrap);
    }

    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement("div");
    t.className = "typing-indicator";
    t.id = "aiTyping";
    t.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }
  function hideTyping() {
    document.getElementById("aiTyping")?.remove();
  }

  function renderSuggested() {
    suggestedWrap.innerHTML = "";
    AI_SUGGESTED_QUESTIONS.forEach((q) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = q;
      btn.addEventListener("click", () => sendMessage(q));
      suggestedWrap.appendChild(btn);
    });
  }

  async function sendMessage(text) {
    if (!text.trim()) return;
    appendMessage("user", { text });
    history.push({ role: "user", content: text });
    input.value = "";
    showTyping();

    try {
      let response;
      if (SITE_CONFIG.aiAssistantEndpoint) {
        response = await callAiBackend(text, history);
      } else {
        await new Promise((r) => setTimeout(r, 600 + Math.random() * 500));
        response = getDemoResponse(text);
      }
      hideTyping();
      appendMessage("bot", response);
      history.push({ role: "assistant", content: response.text });
    } catch (err) {
      hideTyping();
      appendMessage("bot", {
        text: "I'm having trouble connecting right now. Please reach out on WhatsApp and Goodness will respond directly.",
        actions: [{ label: "Chat on WhatsApp", whatsapp: true }],
      });
    }
  }

  function openPanel() {
    panel.hidden = false;
    fab.setAttribute("aria-expanded", "true");
    if (!hasOpened) {
      hasOpened = true;
      appendMessage("bot", { text: AI_GREETING });
      renderSuggested();
    }
    input.focus();
  }
  function closePanel() {
    panel.hidden = true;
    fab.setAttribute("aria-expanded", "false");
  }

  fab.addEventListener("click", () => (panel.hidden ? openPanel() : closePanel()));
  heroChip?.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) closePanel();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMessage(input.value);
  });
}

/* ---------------------------------------------------------------
   MISC
--------------------------------------------------------------- */
function initFooterYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------------
   INIT
--------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  initPortfolioFilters();
  initWhatsappLinks();
  initEmailLinks();
  initSocialLinks();
  initMobileNav();
  initActiveNavOnScroll();
  initFaq();
  initForm("reviewForm", "reviewFormNote", "reviewFormEndpoint");
  initForm("contactForm", "contactFormNote", "contactFormEndpoint");
  initAiAssistant();
  initFooterYear();
});
