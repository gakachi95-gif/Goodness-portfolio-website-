/* =====================================================================
   SITE CONFIGURATION
   -----------------------------------------------------------------
   Edit the values below to update your contact details, social links
   and business info across the ENTIRE website. Nothing else in the
   code needs to change.
   ===================================================================== */

const SITE_CONFIG = {
  // ---- Identity -------------------------------------------------
  businessName: "Goodness Nnenna Dike | Digital Solutions",
  ownerName: "Goodness Nnenna Dike",
  role: "Web Developer & Digital Solutions Creator",
  initials: "GN",

  // ---- Contact ----------------------------------------------------
  email: "dikegoodnessnnenna@gmail.com",

  // WhatsApp number in international format, digits only (no + or spaces)
  whatsapp: "2347082297468",
  whatsappPrefilledMessage:
    "Hi Goodness, I found your portfolio and I'd like to discuss a website project.",

  // ---- Social links (replace with your real profile URLs) --------
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    x: "https://x.com/",
  },

  // ---- Forms --------------------------------------------------------
  // Replace with a Formspree / FormSubmit / EmailJS endpoint to make
  // forms live. Until then, forms show a friendly confirmation only.
  // Example (Formspree): "https://formspree.io/f/xxxxxxxx"
  // ---- Forms --------------------------------------------------------
contactFormEndpoint: "https://formspree.io/f/mvkpqwgn",
reviewFormEndpoint: "https://formspree.io/f/mvkpqwgn",
  // ---- AI Assistant backend -------------------------------------
  // Leave blank to use the built-in safe demo-response system.
  // When ready, point this at your own backend/proxy endpoint that
  // calls the Anthropic API server-side. NEVER put an API key here.
  aiAssistantEndpoint: "",
};

// Build the WhatsApp link once, everywhere, from the config above.
SITE_CONFIG.whatsappLink = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
  SITE_CONFIG.whatsappPrefilledMessage
)}`;
SITE_CONFIG.emailLink = `mailto:${SITE_CONFIG.email}`;
