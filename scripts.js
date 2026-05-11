/* =============================================
       TYPED.JS
    ============================================= */
new Typed("#typed", {
  strings: ["Basic Cut mulai Rp 40.000.", "King Cut + Hair Wash Rp 50.000.", "Cold Perm &amp; Korean Perm.", "Keratin Treatment Premium.", "Open Daily 10.00 – 20.30 WITA."],
  typeSpeed: 55,
  backSpeed: 30,
  loop: true,
  backDelay: 1800,
});

/* =============================================
       SCROLL FADE-UP ANIMATION
    ============================================= */
const fadeEls = document.querySelectorAll(".fade-up");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // stagger siblings
        const siblings = [...e.target.parentElement.querySelectorAll(".fade-up")];
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add("visible"), idx * 220);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.07, rootMargin: "0px 0px -40px 0px" },
);

fadeEls.forEach((el) => io.observe(el));

/* =============================================
       BARBER TOGGLE
    ============================================= */
function toggleBarber(card) {
  const wasActive = card.classList.contains("active");
  document.querySelectorAll(".barber-card").forEach((c) => c.classList.remove("active"));
  if (!wasActive) card.classList.add("active");
}

/* =============================================
       BOOKING FORM → WHATSAPP
    ============================================= */
function submitBooking() {
  // Gather values
  const name = document.getElementById("bName").value.trim();
  const phone = document.getElementById("bPhone").value.trim();
  const service = document.getElementById("bService").value;
  const barber = document.getElementById("bBarber").value;
  const date = document.getElementById("bDate").value;
  const time = document.getElementById("bTime").value;
  const note = document.getElementById("bNote").value.trim();

  // Validation
  if (!name) {
    alert("Nama wajib diisi.");
    return;
  }
  if (!phone) {
    alert("Nomor WhatsApp wajib diisi.");
    return;
  }
  if (!service) {
    alert("Pilih layanan terlebih dahulu.");
    return;
  }
  if (!date) {
    alert("Pilih tanggal reservasi.");
    return;
  }
  if (!time) {
    alert("Pilih jam reservasi.");
    return;
  }

  // Format date
  const d = new Date(date);
  const formatted = d.toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  // Show modal
  document.getElementById("confirmDetails").innerHTML = `
      <strong>Nama:</strong> ${name}<br>
      <strong>Layanan:</strong> ${service}<br>
      <strong>Barber:</strong> ${barber}<br>
      <strong>Tanggal:</strong> ${formatted}<br>
      <strong>Jam:</strong> ${time} WITA<br>
      ${note ? `<strong>Catatan:</strong> ${note}` : ""}
    `;

  // Build WhatsApp message
  const msg = encodeURIComponent(
    `Halo Forever Barber Bali! 👋\n\n` +
      `Saya ingin melakukan reservasi:\n` +
      `📋 *Nama:* ${name}\n` +
      `✂️ *Layanan:* ${service}\n` +
      `👤 *Barber:* ${barber}\n` +
      `📅 *Tanggal:* ${formatted}\n` +
      `⏰ *Jam:* ${time} WITA\n` +
      (note ? `📝 *Catatan:* ${note}\n` : "") +
      `\nMohon konfirmasinya. Terima kasih! 🙏`,
  );

  // Update WA button link
  document.getElementById("waButton").onclick = () => {
    window.open(`https://wa.me/6282147076324?text=${msg}`, "_blank");
  };

  new bootstrap.Modal(document.getElementById("confirmModal")).show();
}

/* =============================================
       NAVBAR ACTIVE LINK ON SCROLL
    ============================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let cur = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  navLinks.forEach((l) => {
    l.classList.remove("active");
    if (l.getAttribute("href") === `#${cur}`) l.classList.add("active");
  });
});

/* =============================================
       MIN DATE FOR BOOKING
    ============================================= */
document.getElementById("bDate").min = new Date().toISOString().split("T")[0];

/* =============================================
       SERVICE TAB SWITCHER
    ============================================= */
function switchTab(tab, btn) {
  // Hide all panes
  document.querySelectorAll(".tab-pane").forEach((p) => (p.style.display = "none"));
  // Deactivate all tab buttons
  document.querySelectorAll(".svc-tab").forEach((b) => b.classList.remove("active"));
  // Show selected pane
  document.getElementById("tab-" + tab).style.display = "block";
  btn.classList.add("active");
  // Re-trigger fade-up for newly shown elements
  document.querySelectorAll("#tab-" + tab + " .fade-up").forEach((el) => {
    el.classList.remove("visible");
    setTimeout(() => el.classList.add("visible"), 80);
  });
}

// Trigger fade-up for initially visible tab on load
setTimeout(() => {
  document.querySelectorAll("#tab-haircut .fade-up").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 60);
  });
}, 400);

/* =============================================
       PORTFOLIO LIGHTBOX DATA
    ============================================= */
const portfolioData = [
  {
    style: "Fringe Mullet",
    views: ["img/fringe-mullet/fringe-mullet1.png", "img/fringe-mullet/fringe-mullet2.png", "img/fringe-mullet/fringe-mullet3.png"],
  },
  {
    style: "Messy Wavy Perm",
    views: ["img/messy-wavy-perm/messy-wavy-perm1.png", "img/messy-wavy-perm/messy-wavy-perm2.png", "img/messy-wavy-perm/messy-wavy-perm3.png"],
  },
  {
    style: "Cornrow",
    views: ["img/cornrow/cornrow1.png", "img/cornrow/cornrow2.png", "img/cornrow/cornrow3.png"],
  },
  {
    style: "Curly Perm + Burst Fade",
    views: ["img/curlyperm-burstfade/curlyperm-burstfade1.png", "img/curlyperm-burstfade/curlyperm-burstfade2.png", "img/curlyperm-burstfade/curlyperm-burstfade3.png"],
  },
  {
    style: "Dreadlocks",
    views: ["img/dreadlocks/dreadlocks1.png", "img/dreadlocks/dreadlocks3.png", "img/dreadlocks/dreadlocks2.png"],
  },
  {
    style: "Curly Perm x Fade",
    views: ["img/curlyperm-fade/curlyperm-fade1.png", "img/curlyperm-fade/curlyperm-fade2.png", "img/curlyperm-fade/curlyperm-fade3.png"],
  },
  {
    style: "Buzz Cut",
    views: ["img/buzzcut-mullet-curly/buzzcut-mullet-curly1.png", "img/buzzcut-mullet-curly/buzzcut-mullet-curly2.png", "img/buzzcut-mullet-curly/buzzcut-mullet-curly3.png"],
  },
  {
    style: "Mullet Curly Perm",
    views: ["img/mullet-curly-perm/mullet-curly-perm1.png", "img/mullet-curly-perm/mullet-curly-perm2.png", "img/mullet-curly-perm/mullet-curly-perm3.png"],
  },
];

let currentLbIndex = 0;

function openLightbox(idx) {
  currentLbIndex = idx;
  renderLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
}

function renderLightbox() {
  const item = portfolioData[currentLbIndex];
  document.getElementById("lbStyleName").textContent = item.style;
  document.getElementById("lbImg0").src = item.views[0];
  document.getElementById("lbImg1").src = item.views[1];
  document.getElementById("lbImg2").src = item.views[2];
  document.getElementById("lbCounter").textContent = `${currentLbIndex + 1} / ${portfolioData.length}`;
  // WA book this style
  const msg = encodeURIComponent(`Halo Forever Barber Bali! 👋\nSaya tertarik dengan gaya *${item.style}* dan ingin reservasi. Apakah ada slot tersedia? 🙏`);
  document.getElementById("lbWaBtn").href = `https://wa.me/6282147076324?text=${msg}`;
}

function lbPrev() {
  currentLbIndex = (currentLbIndex - 1 + portfolioData.length) % portfolioData.length;
  renderLightbox();
}

function lbNext() {
  currentLbIndex = (currentLbIndex + 1) % portfolioData.length;
  renderLightbox();
}

// Keyboard navigation for lightbox
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("open")) return;
  if (e.key === "ArrowRight") lbNext();
  if (e.key === "ArrowLeft") lbPrev();
  if (e.key === "Escape") closeLightbox();
});
/* =============================================
   AI HAIRSTYLE ADVISOR — Powered by Groq
============================================= */

// ── Config ──────────────────────────────────────
const AI_API_KEY = "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";

// Mapping gaya rambut — ikon, gambar referensi, dan alasan singkat
const STYLE_META = {
  "Fringe Mullet": {
    icon: "bi-wind",
    image: "img/fringe-mullet/fringe-mullet1.png",
    why: "Trendi & modern, cocok untuk wajah oval",
  },
  "Messy Wavy Perm": {
    icon: "bi-water",
    image: "img/messy-wavy-perm/messy-wavy-perm1.png",
    why: "Menambah volume & karakter alami",
  },
  Cornrow: {
    icon: "bi-align-center",
    image: "img/cornrow/cornrow1.png",
    why: "Tegas & presisi, ekspresi diri yang kuat",
  },
  "Curly Perm + Burst Fade": {
    icon: "bi-stars",
    image: "img/curlyperm-burstfade/curlyperm-burstfade1.png",
    why: "Penuh dimensi & karakter gaya",
  },
  Dreadlocks: {
    icon: "bi-textarea-t",
    image: "img/dreadlocks/dreadlocks1.png",
    why: "Statement look yang powerful & unik",
  },
  "Buzz Cut": {
    icon: "bi-square-fill",
    image: "img/buzzcut-mullet-curly/buzzcut-mullet-curly1.png",
    why: "Bersih & minimalis, timeless style",
  },
  "Mullet Curly Perm": {
    icon: "bi-moisture",
    image: "img/mullet-curly-perm/mullet-curly-perm1.png",
    why: "Bold & unik untuk tampilan standout",
  },
  "Curly Perm x Fade": {
    icon: "bi-moisture",
    image: "img/curlyperm-fade/curlyperm-fade1.png",
    why: "Ikal natural dengan tepi yang presisi",
  },
  Undercut: {
    icon: "bi-subtract",
    image: "img/gaya-rambut-tambahan/undercut.jpg",
    why: "Klasik & modern, versatile styling",
  },
  "Modern Quiff": {
    icon: "bi-caret-up-fill",
    image: "img/gaya-rambut-tambahan/modern-quiff.jpg",
    why: "Kesan wajah lebih panjang & elegan",
  },
  "Textured Crop": {
    icon: "bi-grid-fill",
    image: "img/gaya-rambut-tambahan/textured-crop.jpg",
    why: "Clean cut casual, mudah dirawat",
  },
  Pompadour: {
    icon: "bi-triangle-fill",
    image: "img/gaya-rambut-tambahan/pompadour.jpg",
    why: "Karismatik & premium, penuh percaya diri",
  },
  "Side Part": {
    icon: "bi-layout-sidebar",
    image: "img/gaya-rambut-tambahan/side-part.jpg",
    why: "Rapi & profesional, kesan formal",
  },
  "Skin Fade": {
    icon: "bi-layers",
    image: "img/gaya-rambut-tambahan/skin-fade.jpg",
    why: "Gradient halus yang tajam & rapi",
  },
};

// ── Drag & drop helpers ──────────────────────────
function aiDragOver(e) {
  e.preventDefault();
  document.getElementById("aiDropZone").classList.add("drag-over");
}
function aiDragLeave() {
  document.getElementById("aiDropZone").classList.remove("drag-over");
}
function aiDrop(e) {
  e.preventDefault();
  document.getElementById("aiDropZone").classList.remove("drag-over");
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) processImageFile(file);
}

// ── Preview ──────────────────────────────────────
function aiPreviewImage(event) {
  const file = event.target.files[0];
  if (file) processImageFile(file);
}

function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("aiUploadPlaceholder").style.display = "none";
    document.getElementById("aiFacePreview").src = e.target.result;
    document.getElementById("aiPreviewContainer").style.display = "block";
    document.getElementById("aiAnalyzeBtn").disabled = false;
    window._aiImageBase64 = e.target.result.split(",")[1];
    window._aiImageType = file.type;
  };
  reader.readAsDataURL(file);
}

// ── Loading messages ──────────────────────────────
const loaderMsgs = ["Memindai bentuk wajah...", "Menganalisa proporsi wajah...", "Mencocokkan dengan database gaya...", "Menyiapkan rekomendasi terbaik..."];
let _loaderInterval;
function startLoaderAnim() {
  let i = 0;
  document.getElementById("aiLoaderText").textContent = loaderMsgs[0];
  _loaderInterval = setInterval(() => {
    i = (i + 1) % loaderMsgs.length;
    document.getElementById("aiLoaderText").textContent = loaderMsgs[i];
  }, 1400);
}
function stopLoaderAnim() {
  clearInterval(_loaderInterval);
}

// ── Main analysis (Groq API) ──────────────────────
async function runAIAnalysis() {
  if (!window._aiImageBase64) return;

  document.getElementById("aiStep1").style.display = "none";
  document.getElementById("aiStep2").style.display = "block";
  startLoaderAnim();

  const prompt = `Kamu adalah AI konsultan gaya rambut profesional untuk Forever Barber Bali.
Analisa foto wajah ini dengan cermat. Tentukan bentuk wajah, lalu rekomendasikan TEPAT 3 gaya rambut pria yang paling cocok dari daftar berikut:
[Fringe Mullet, Messy Wavy Perm, Cornrow, Curly Perm + Burst Fade, Dreadlocks, Undercut, Buzz Cut, Modern Quiff, Mullet Curly Perm, Curly Perm x Fade, Textured Crop, Pompadour, Side Part, Skin Fade]

Balas HANYA dalam format JSON murni (tanpa markdown, tanpa backtick, langsung objek JSON):
{
  "faceShape": "nama bentuk wajah dalam Bahasa Indonesia (Oval / Bulat / Persegi / Hati / Berlian / Lonjong)",
  "faceShapeDesc": "deskripsi singkat 1 kalimat ciri khas bentuk wajah tersebut",
  "analysis": "penjelasan 2-3 kalimat mengapa gaya-gaya tersebut cocok, bahasa Indonesia, hangat dan profesional",
  "recommendations": [
    {
      "name": "Nama Gaya Persis Seperti Di Daftar",
      "description": "Penjelasan 2 kalimat: mengapa gaya ini sangat cocok untuk bentuk wajah kamu dan apa yang membuatnya menarik"
    },
    {
      "name": "Nama Gaya Kedua",
      "description": "Penjelasan 2 kalimat untuk gaya kedua"
    },
    {
      "name": "Nama Gaya Ketiga",
      "description": "Penjelasan 2 kalimat untuk gaya ketiga"
    }
  ]
}`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        max_tokens: 700,
        temperature: 0.4,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: {
                  url: `data:${window._aiImageType || "image/jpeg"};base64,${window._aiImageBase64}`,
                },
              },
              {
                type: "text",
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const rawText = data.choices?.[0]?.message?.content || "";
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const result = JSON.parse(cleaned);

    stopLoaderAnim();
    renderAIResult(result);
  } catch (err) {
    stopLoaderAnim();
    renderAIError(err.message);
  }
}

// ── Render result ─────────────────────────────────
function renderAIResult(result) {
  document.getElementById("aiStep2").style.display = "none";
  document.getElementById("aiStep3").style.display = "block";

  document.getElementById("aiFaceShapeName").textContent = result.faceShape || "—";
  document.getElementById("aiFaceShapeDesc").textContent = result.faceShapeDesc || "";
  document.getElementById("aiAnalysisText").textContent = result.analysis || "";

  const grid = document.getElementById("aiStylesGrid");
  grid.innerHTML = "";

  const recs = (result.recommendations || []).slice(0, 3);
  recs.forEach((rec, index) => {
    // Support both old string format & new object format
    const styleName = typeof rec === "string" ? rec : rec.name;
    const description = typeof rec === "object" && rec.description ? rec.description : "";
    const meta = STYLE_META[styleName] || {
      icon: "bi-scissors",
      image: "img/fringe-mullet/fringe-mullet1.png",
      why: "",
    };

    const card = document.createElement("div");
    card.className = "ai-reco-card fade-in-card";
    card.style.animationDelay = `${index * 0.15}s`;

    card.innerHTML = `
      <div class="ai-reco-img-wrap">
        <img
          src="${meta.image}"
          alt="${styleName} hairstyle"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.classList.add('img-fallback')"
        />
        <div class="ai-reco-num">0${index + 1}</div>
      </div>
      <div class="ai-reco-body">
        <div class="ai-reco-icon"><i class="bi ${meta.icon}"></i></div>
        <h5 class="ai-reco-name">${styleName}</h5>
        ${description ? `<p class="ai-reco-desc">${description}</p>` : ""}
        ${meta.why ? `<div class="ai-reco-why"><i class="bi bi-check-circle-fill me-1"></i>${meta.why}</div>` : ""}
        <button class="ai-reco-book-btn" onclick="document.querySelector('#booking').scrollIntoView({behavior:'smooth'})">
          <i class="bi bi-calendar-check me-1"></i>Book Gaya Ini
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Render error ──────────────────────────────────
function renderAIError(msg) {
  document.getElementById("aiStep2").style.display = "none";
  document.getElementById("aiStep1").style.display = "block";
  alert(`Analisa gagal: ${msg}\n\nPastikan API key sudah diisi di scripts.js dan koneksi internet aktif.`);
}

// ── Reset ─────────────────────────────────────────
function aiReset() {
  document.getElementById("aiStep3").style.display = "none";
  document.getElementById("aiStep1").style.display = "block";
  document.getElementById("aiUploadPlaceholder").style.display = "block";
  document.getElementById("aiPreviewContainer").style.display = "none";
  document.getElementById("aiFaceInput").value = "";
  document.getElementById("aiAnalyzeBtn").disabled = true;
  window._aiImageBase64 = null;
}

/* =============================================
   CS CHATBOT — Customer Service 
============================================= */

// ── System Prompt (pengetahuan barbershop) ──
const CS_SYSTEM_PROMPT = `Kamu adalah customer service AI yang ramah, profesional, dan helpful untuk Forever Barber Bali.
Nama kamu: "FB Assistant". Gunakan bahasa Indonesia yang santai namun sopan. Jawab SINGKAT, JELAS, dan padat.
Selalu tutup setiap jawaban dengan ajakan ramah (misal: ada yang bisa dibantu lagi? atau book sekarang lewat form di atas!).

=== DATA FOREVER BARBER BALI ===

📍 LOKASI: Jl. WR Supratman No. 81, Denpasar, Bali 80236
🕐 JAM BUKA: Open Daily 10.00 – 20.30 WITA (buka setiap hari, tidak ada hari libur rutin)
📞 WHATSAPP: 082147076324
📸 INSTAGRAM: @foreverbarberbali
🎵 TIKTOK: @foreverbarbershop
🗺️ GOOGLE MAPS: https://maps.app.goo.gl/Qb58qPqpmRnaWNde9

=== LAYANAN & HARGA ===

HAIRCUT:
- Basic Cut (hair cut + styling) → Rp 40.000 (~30 menit)
- King Cut (hair cut + hair wash + cold towel + styling) → Rp 50.000 (~45 menit) ★ Best Value
- Long Trim / Long Hair → Rp 50.000–70.000 (~45 menit, harga sesuai panjang & ketebalan)
  * Bisa request / pilih barber untuk hair cut

OTHERS:
- Trimming (kumis & jenggot) → Rp 10.000
- Hair Color Black (Loreal) → Rp 90.000
- Hairwash → Rp 20.000
- Head Massage → Rp 10.000
- Hair Spa (massage + hairmask + hot towel) → Rp 50.000
- Home Service (barber datang ke lokasi) → mulai Rp 150.000

COLD PERM (CURLY):
- Cold Perm Basic (atas saja) → Rp 250.000 (2–3 jam)
- Cold Perm Mullet (atas + belakang) → Rp 350.000 (2–3 jam) ★ Popular
- Cold Perm Full (semua sisi) → Rp 450.000 (3–4 jam)

KOREAN / DESIGN PERM (WAVY):
- Korean Perm Basic → Rp 300.000
- Korean Perm Mullet → Rp 430.000
- Korean Perm Full → Rp 550.000

TREATMENT & COLOR:
- Keratin Treatment Premium → Rp 400.000
- Smoothing → Rp 400.000
- Highlight Color → Rp 300.000–350.000

=== TIM BARBER ===
- Made Arya — Head Barber (spesialis klasik & precision cut)
- Wayan Dika — Senior Barber (spesialis perm & modern style)
- Kadek Rio — Barber Artist (spesialis desain & highlight)

=== CARA BOOKING ===
- Lewat website: isi form booking di bagian "Reservasi" di website ini, pilih layanan, barber, tanggal & jam, lalu konfirmasi via WhatsApp.
- Langsung WA ke 082147076324
- Atau langsung datang ke barbershop (walk-in welcome, tergantung antrean)

=== KEBIJAKAN ===
- Bisa request barber pilihan untuk haircut
- Walk-in tersedia tergantung ketersediaan slot
- Home service tersedia dengan min. order dan area tertentu (konfirmasi via WA)
- Pembayaran: Cash & Transfer (konfirmasi di tempat)

=== PENTING ===
- Jika ditanya soal ketersediaan slot spesifik / pertanyaan yang perlu jawaban real-time, arahkan ke WhatsApp: 082147076324
- Jangan berikan informasi di luar konteks barbershop ini
- Selalu gunakan format yang rapi dan mudah dibaca
- Jika user ingin booking, arahkan ke form booking di website atau WA`;

// ── State ──────────────────────────────────
let _csOpen = false;
let _csHistory = []; // {role, content}[]
let _csTyping = false;
let _csGreeted = false;

// ── Toggle Panel ───────────────────────────
function csToggle() {
  _csOpen = !_csOpen;
  document.getElementById("cs-chatbot").classList.toggle("open", _csOpen);

  if (_csOpen) {
    // Hide notification dot
    document.getElementById("cs-notif-dot").classList.add("hidden");
    // Greet on first open
    if (!_csGreeted) {
      _csGreeted = true;
      setTimeout(() => csAddBotMessage(`Halo! 👋 Selamat datang di <strong>Forever Barber Bali</strong>.\n\nSaya FB Assistant, siap bantu kamu soal layanan, harga, booking, dan info lainnya.\n\nAda yang bisa saya bantu? 😊`), 350);
    }
    // Focus input
    setTimeout(() => document.getElementById("cs-input")?.focus(), 400);
  }
}

// ── Add message to UI ───────────────────────
function csAddMessage(role, text) {
  const container = document.getElementById("cs-messages");

  const wrapper = document.createElement("div");
  wrapper.className = `cs-msg ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "cs-bubble";

  // Bot  → teks dipercaya (hardcoded atau dari Groq), render HTML + markdown
  // User → escape HTML dulu sebelum render agar aman
  bubble.innerHTML = role === "bot" ? csBotFormat(text) : csUserFormat(text);

  const time = document.createElement("div");
  time.className = "cs-msg-time";
  time.textContent = csNowTime();

  wrapper.appendChild(bubble);
  wrapper.appendChild(time);
  container.appendChild(wrapper);
  csScrollBottom();
}

function csAddBotMessage(text) {
  csAddMessage("bot", text);
}
function csAddUserMessage(text) {
  csAddMessage("user", text);
}

// ── Typing indicator ────────────────────────
function csShowTyping() {
  const container = document.getElementById("cs-messages");
  const el = document.createElement("div");
  el.className = "cs-msg bot";
  el.id = "cs-typing-indicator";
  el.innerHTML = `<div class="cs-typing-bubble"><span></span><span></span><span></span></div>`;
  container.appendChild(el);
  csScrollBottom();
}
function csHideTyping() {
  document.getElementById("cs-typing-indicator")?.remove();
}

// ── Format: bot messages (trusted — HTML & markdown diizinkan) ──
function csBotFormat(text) {
  return (
    text
      // markdown bold & italic → HTML
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // bullet list shorthand
      .replace(/\n- /g, "\n• ")
      // newlines → <br>
      .replace(/\n/g, "<br>")
      // auto-link URLs (skip jika sudah di dalam href)
      .replace(/(https?:\/\/[^\s<"]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
  );
}

// ── Format: user messages (tidak dipercaya — escape HTML dulu) ──
function csUserFormat(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}

// ── Send message ────────────────────────────
async function csSend() {
  const input = document.getElementById("cs-input");
  const text = (input.value || "").trim();
  if (!text || _csTyping) return;

  input.value = "";
  csAddUserMessage(text);

  // Hide quick replies after first real message
  document.getElementById("cs-quick-wrap").style.display = "none";

  // Push to history
  _csHistory.push({ role: "user", content: text });

  await csCallGroq();
}

function csSendQuick(text) {
  document.getElementById("cs-input").value = text;
  csSend();
}

function csKeydown(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    csSend();
  }
}

// ── Groq API call ───────────────────────────
async function csCallGroq() {
  _csTyping = true;
  document.getElementById("cs-send-btn").disabled = true;
  csShowTyping();

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 500,
        temperature: 0.55,
        messages: [
          { role: "system", content: CS_SYSTEM_PROMPT },
          ..._csHistory.slice(-10), // kirim max 10 pesan terakhir
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Maaf, saya tidak bisa menjawab saat ini. Silakan hubungi kami via WhatsApp ya! 😊";

    csHideTyping();
    csAddBotMessage(reply);
    _csHistory.push({ role: "assistant", content: reply });
  } catch (err) {
    csHideTyping();
    csAddBotMessage(`Maaf, terjadi gangguan koneksi. 😔\nSilakan hubungi kami langsung via WhatsApp: **082147076324** atau klik tombol WA di bawah ya!`);
  } finally {
    _csTyping = false;
    document.getElementById("cs-send-btn").disabled = false;
    document.getElementById("cs-input")?.focus();
  }
}

// ── Helpers ─────────────────────────────────
function csScrollBottom() {
  const el = document.getElementById("cs-messages");
  if (el)
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 60);
}
function csNowTime() {
  return new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
}

// ── Show notif dot after 3 seconds if not opened ──
setTimeout(() => {
  if (!_csOpen) {
    document.getElementById("cs-notif-dot")?.classList.remove("hidden");
  }
}, 3000);

/* =============================================
   CAMERA & MODE SWITCHER
============================================= */
let _cameraStream = null;
let _currentMode = 'upload';

function switchMode(mode) {
  _currentMode = mode;

  // Toggle buttons
  document.getElementById('modeUploadBtn').classList.toggle('active', mode === 'upload');
  document.getElementById('modeCameraBtn').classList.toggle('active', mode === 'camera');

  // Toggle panels
  document.getElementById('uploadMode').style.display = mode === 'upload' ? 'block' : 'none';
  document.getElementById('cameraMode').style.display = mode === 'camera' ? 'block' : 'none';

  if (mode === 'camera') {
    startCamera();
  } else {
    stopCamera();
  }
}

async function startCamera() {
  try {
    _cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    });
    const video = document.getElementById('aiCameraVideo');
    video.srcObject = _cameraStream;

    // Show live view, hide preview
    document.getElementById('cameraLiveWrap').style.display = 'block';
    document.getElementById('cameraPreviewWrap').style.display = 'none';
    document.getElementById('cameraBtns').style.display = 'flex';
    document.getElementById('retakeBtn').style.display = 'none';
    document.getElementById('aiAnalyzeBtn').disabled = true;
  } catch (err) {
    alert('Kamera tidak bisa dibuka. Pastikan browser punya izin akses kamera, lalu coba lagi.');
    switchMode('upload');
  }
}

function stopCamera() {
  if (_cameraStream) {
    _cameraStream.getTracks().forEach(t => t.stop());
    _cameraStream = null;
  }
  const video = document.getElementById('aiCameraVideo');
  if (video) video.srcObject = null;
}

function capturePhoto() {
  const video = document.getElementById('aiCameraVideo');
  const canvas = document.getElementById('aiCameraCanvas');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext('2d');
  // Flip horizontally (mirror) to match what user sees
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0);

  const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
  window._aiImageBase64 = dataUrl.split(',')[1];
  window._aiImageType = 'image/jpeg';

  // Show preview
  document.getElementById('aiCameraPreview').src = dataUrl;
  document.getElementById('cameraLiveWrap').style.display = 'none';
  document.getElementById('cameraPreviewWrap').style.display = 'block';
  document.getElementById('cameraBtns').style.display = 'none';
  document.getElementById('retakeBtn').style.display = 'block';
  document.getElementById('aiAnalyzeBtn').disabled = false;

  // Stop stream to save battery
  stopCamera();
}

function retakePhoto() {
  window._aiImageBase64 = null;
  window._aiImageType = null;
  document.getElementById('aiAnalyzeBtn').disabled = true;
  document.getElementById('cameraPreviewWrap').style.display = 'none';
  document.getElementById('retakeBtn').style.display = 'none';
  startCamera();
}
