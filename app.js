/* =============================================================
   PORTFOLIO  —  render logic + contact form (no build step)
   Renders everything from config.js and submits the form to your
   inbox via Web3Forms. Don't edit per client — edit config.js.
============================================================= */
(function () {
  "use strict";
  var C = window.CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var selected = {}; // service id -> true

  /* ---------- theme + text ---------- */
  if (C.accent) document.documentElement.style.setProperty("--accent", C.accent);
  setText("#brand", C.brand);
  setText("#kicker", C.kicker);
  setText("#headline", C.headline);
  setText("#tagline", C.tagline);
  setText("#intro", C.intro);
  if (document.title !== undefined) document.title = (C.brand || "Portfolio") + " — Streamer Services";

  var av = $("#avatar");
  if (av) {
    if (C.logo) { av.style.backgroundImage = 'url("' + C.logo + '")'; av.textContent = ""; }
    else av.textContent = ((C.brand || "?").trim().charAt(0) || "?").toUpperCase();
  }

  renderStats();
  renderTicker();
  renderServices();
  renderSteps();
  renderWhy();
  renderFormOptions();
  renderBudgets();
  renderFooter();
  wireForm();

  /* ---------- renderers ---------- */
  function renderStats() {
    var wrap = $("#stats"); if (!wrap || !C.stats) return;
    wrap.innerHTML = C.stats.map(function (s) {
      return '<div class="stat"><div class="n">' + esc(s.n) + '</div><div class="l">' + esc(s.l) + '</div></div>';
    }).join("");
  }

  function renderTicker() {
    var t = $("#ticker"); if (!t || !C.ticker || !C.ticker.length) return;
    var one = C.ticker.map(function (w) { return '<span class="seg">' + esc(w) + "  ✦  </span>"; }).join("");
    t.innerHTML = '<div class="track">' + one + one + "</div>"; // doubled for seamless loop
  }

  function renderServices() {
    var grid = $("#services"); if (!grid || !C.services) return;
    grid.innerHTML = C.services.map(function (s) {
      var inc = (s.includes || []).map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
      return '' +
        '<article class="svc">' +
          '<div class="svc-top"><span class="svc-ic">' + esc(s.icon || "▸") + '</span>' +
            (s.price ? '<span class="svc-price">' + esc(s.price) + "</span>" : "") + "</div>" +
          '<h3 class="svc-title">' + esc(s.title) + "</h3>" +
          '<p class="svc-desc">' + esc(s.desc || "") + "</p>" +
          (inc ? '<ul class="svc-inc">' + inc + "</ul>" : "") +
        "</article>";
    }).join("");
  }

  function renderSteps() {
    var wrap = $("#steps"); if (!wrap || !C.steps) return;
    wrap.innerHTML = C.steps.map(function (s, i) {
      return '' +
        '<div class="step">' +
          '<div class="step-n">' + pad(i + 1) + "</div>" +
          '<div class="step-b"><div class="step-t">' + esc(s.t) + "</div>" +
            '<div class="step-d">' + esc(s.d || "") + "</div></div>" +
        "</div>";
    }).join("");
  }

  function renderWhy() {
    var wrap = $("#why"); if (!wrap || !C.why) return;
    wrap.innerHTML = C.why.map(function (w) { return '<span class="chip">' + esc(w) + "</span>"; }).join("");
  }

  function renderFormOptions() {
    var wrap = $("#opts"); if (!wrap || !C.services) return;
    wrap.innerHTML = C.services.map(function (s) {
      return '' +
        '<button type="button" class="opt" data-id="' + esc(s.id) + '">' +
          '<span class="opt-ic">' + esc(s.icon || "▸") + "</span>" +
          '<span class="opt-t">' + esc(s.title) + "</span>" +
          '<span class="opt-check" aria-hidden="true">✓</span>' +
        "</button>";
    }).join("");
    Array.prototype.forEach.call(wrap.querySelectorAll(".opt"), function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-id");
        if (selected[id]) { delete selected[id]; b.classList.remove("on"); }
        else { selected[id] = true; b.classList.add("on"); }
        var err = $("#optErr"); if (err) err.textContent = "";
      });
    });
  }

  function renderBudgets() {
    var sel = $("#budget"); if (!sel || !C.budgets) return;
    sel.innerHTML = '<option value="">Budget (optional)</option>' +
      C.budgets.map(function (b) { return '<option value="' + esc(b) + '">' + esc(b) + "</option>"; }).join("");
  }

  function renderFooter() {
    setText("#footHandle", C.footerHandle);
    setText("#footBrand", C.brand);
    var fl = $("#footLinks");
    if (fl && C.footerLinks) {
      fl.innerHTML = C.footerLinks.map(function (l) {
        return '<a class="chip" href="' + esc(l.url || "#") + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
      }).join("");
    }
  }

  /* ---------- form submit (Web3Forms) ---------- */
  function wireForm() {
    var form = $("#contactForm"); if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = val("#fName"), contact = val("#fContact"), msg = val("#fMsg"), budget = val("#budget");
      var picks = Object.keys(selected).map(function (id) {
        var s = (C.services || []).filter(function (x) { return x.id === id; })[0];
        return s ? s.title : id;
      });

      // validation
      var ok = true;
      ok = req("#fName", name) && ok;
      ok = req("#fContact", contact) && ok;
      if (!picks.length) { var er = $("#optErr"); if (er) er.textContent = "Pick at least one service."; ok = false; }
      if (!ok) return;

      var key = C.web3formsKey || "";
      var statusEl = $("#formStatus");

      // not connected yet — guide the owner, don't fail silently
      if (!key || key.indexOf("YOUR_") === 0) {
        if (statusEl) {
          statusEl.className = "form-status warn";
          statusEl.textContent = "⚠ Form not connected yet. Add your Web3Forms key in config.js to receive submissions by email.";
        }
        return;
      }

      var btn = $("#submitBtn"); if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      if (statusEl) { statusEl.className = "form-status"; statusEl.textContent = ""; }

      var payload = {
        access_key: key,
        subject: C.emailSubject || "New streamer project request",
        from_name: (C.brand || "Portfolio") + " — Contact Form",
        "Name / Handle": name,
        "Best contact": contact,
        "Services wanted": picks.join(", "),
        "Budget": budget || "—",
        "Message": msg || "—"
      };

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data && data.success) { showSuccess(name); }
        else { fail(statusEl, (data && data.message) || "Something went wrong. Try again."); restoreBtn(btn); }
      })
      .catch(function () { fail(statusEl, "Network error. Please try again."); restoreBtn(btn); });
    });
  }

  function showSuccess(name) {
    var card = $("#formCard"); if (!card) return;
    card.innerHTML =
      '<div class="success">' +
        '<div class="success-ic">✓</div>' +
        '<h3>Request sent' + (name ? ", " + esc(name.split(" ")[0]) : "") + "!</h3>" +
        "<p>Got it. I'll get back to you shortly with the next steps.</p>" +
      "</div>";
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- tiny helpers ---------- */
  function setText(sel, v) { var n = $(sel); if (n && v != null) n.textContent = v; }
  function val(sel) { var n = $(sel); return n ? String(n.value || "").trim() : ""; }
  function req(sel, v) {
    var n = $(sel); if (!n) return true;
    if (!v) { n.classList.add("invalid"); return false; }
    n.classList.remove("invalid"); return true;
  }
  function fail(el, m) { if (el) { el.className = "form-status err"; el.textContent = m; } }
  function restoreBtn(b) { if (b) { b.disabled = false; b.textContent = "Send request"; } }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
