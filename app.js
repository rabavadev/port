/* =============================================================
   STUDIO portfolio — render logic + contact form (no build step)
   Same config.js + same tested Web3Forms submit as the other theme.
   Adds per-service CSS mockups so the range is visible.
============================================================= */
(function () {
  "use strict";
  var C = window.CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var selected = {};

  if (C.accent) document.documentElement.style.setProperty("--spot", C.accent);

  // headline supports a {highlight} marker -> wraps in the spot block
  setHTML("#headline", hi(C.headline));
  setText("#intro", C.intro);
  setText("#brandMark", C.brand);
  setText("#topMeta", C.tagline);
  if (document.title !== undefined) document.title = (C.brand || "Studio") + " — Streamer Services";

  renderStats();
  renderBand();
  renderCaps();
  renderSteps();
  renderWhy();
  renderOpts();
  renderBudgets();
  renderFooter();
  wireForm();

  /* ---------- renderers ---------- */
  function renderStats() {
    var w = $("#stats"); if (!w || !C.stats) return;
    w.innerHTML = C.stats.map(function (s) {
      return '<div class="stat"><div class="n">' + esc(s.n) + '</div><div class="l">' + esc(s.l) + "</div></div>";
    }).join("");
  }

  function renderBand() {
    var b = $("#band"); if (!b || !C.ticker) return;
    var one = C.ticker.map(function (w) { return '<span class="seg">' + esc(w) + "&nbsp;&nbsp;✦&nbsp;&nbsp;</span>"; }).join("");
    b.innerHTML = '<div class="track">' + one + one + "</div>";
  }

  function renderCaps() {
    var w = $("#caps"); if (!w || !C.services) return;
    w.innerHTML = C.services.map(function (s, i) {
      var inc = (s.includes || []).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
      return '' +
        '<article class="cap">' +
          '<div class="cap-body">' +
            '<div class="cap-num">' + pad(i + 1) + " / " + pad(C.services.length) + "</div>" +
            '<h3 class="cap-title">' + esc(s.title) +
              (s.price ? '<span class="cap-price">' + esc(s.price) + "</span>" : "") + "</h3>" +
            '<p class="cap-desc">' + esc(s.desc || "") + "</p>" +
            (inc ? '<div class="cap-inc">' + inc + "</div>" : "") +
          "</div>" +
          '<div class="cap-mock">' + mock(s.id) + "</div>" +
        "</article>";
    }).join("");
  }

  // CSS-built mini mockups per service id (visual proof of range)
  function mock(id) {
    switch (id) {
      case "landing": return '<div class="mock m-phone"><div class="av"></div><div class="nm"></div><div class="bar fill"></div><div class="bar"></div><div class="bar"></div></div>';
      case "telegram": return '<div class="mock m-tg"><div class="hd"><div class="c"></div><div class="t"></div></div><div class="pin"><div class="l"></div><div class="l s"></div></div><div class="live">🔴 LIVE NOW</div></div>';
      case "discord": return '<div class="mock m-dc"><div class="side"><i class="on"></i><i></i><i></i></div><div class="main"><div class="ch h"></div><div class="ch"></div><div class="ch a"></div><div class="ch"></div><div class="ch"></div></div></div>';
      case "fullsite": return '<div class="mock m-web"><div class="top"><i></i><i></i><i></i><div class="url"></div></div><div class="body"><div class="hh"></div><div class="row"><b class="s"></b><b></b></div><div class="row"><b></b><b></b></div></div></div>';
      case "kick": return '<div class="mock m-kick"><div class="ban"></div><div class="pf"><div class="av"></div><div class="nm"></div></div><div class="pan"><b class="s"></b><b></b><b></b><b></b></div></div>';
      case "links": return '<div class="mock m-dash"><div class="r"><div class="k"></div><div class="b" style="--w:78%"></div></div><div class="r"><div class="k"></div><div class="b" style="--w:54%"></div></div><div class="r"><div class="k"></div><div class="b" style="--w:91%"></div></div><div class="r"><div class="k"></div><div class="b" style="--w:36%"></div></div></div>';
      default: return '<div class="mock m-web"><div class="top"><i></i><i></i><i></i></div><div class="body"><div class="hh"></div></div></div>';
    }
  }

  function renderSteps() {
    var w = $("#steps"); if (!w || !C.steps) return;
    w.innerHTML = C.steps.map(function (s, i) {
      return '<div class="step"><div class="step-n">' + pad(i + 1) + "</div>" +
        '<div class="step-t">' + esc(s.t) + "</div>" +
        '<div class="step-d">' + esc(s.d || "") + "</div></div>";
    }).join("");
  }

  function renderWhy() {
    var w = $("#why"); if (!w || !C.why) return;
    w.innerHTML = C.why.map(function (x) { return '<div class="tag">' + esc(x) + "</div>"; }).join("");
  }

  function renderOpts() {
    var w = $("#opts"); if (!w || !C.services) return;
    w.innerHTML = C.services.map(function (s) {
      return '<button type="button" class="opt" data-id="' + esc(s.id) + '">' +
        '<span class="opt-ic">' + esc(s.icon || "▸") + "</span>" +
        '<span class="opt-t">' + esc(s.title) + "</span>" +
        '<span class="opt-check" aria-hidden="true">✓</span></button>';
    }).join("");
    Array.prototype.forEach.call(w.querySelectorAll(".opt"), function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-id");
        if (selected[id]) { delete selected[id]; b.classList.remove("on"); }
        else { selected[id] = true; b.classList.add("on"); }
        var e = $("#optErr"); if (e) e.textContent = "";
      });
    });
  }

  function renderBudgets() {
    var sel = $("#budget"); if (!sel || !C.budgets) return;
    sel.innerHTML = '<option value="">Select a range…</option>' +
      C.budgets.map(function (b) { return '<option value="' + esc(b) + '">' + esc(b) + "</option>"; }).join("");
  }

  function renderFooter() {
    setText("#footBrand", C.brand);
    setText("#footHandle", C.footerHandle);
    var fl = $("#footLinks");
    if (fl && C.footerLinks) {
      fl.innerHTML = C.footerLinks.map(function (l) {
        return '<a href="' + esc(l.url || "#") + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
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

      var ok = true;
      ok = req("#fName", name) && ok;
      ok = req("#fContact", contact) && ok;
      if (!picks.length) { var er = $("#optErr"); if (er) er.textContent = "Pick at least one service."; ok = false; }
      if (!ok) return;

      var key = C.web3formsKey || "";
      var statusEl = $("#formStatus");

      if (!key || key.indexOf("YOUR_") === 0) {
        if (statusEl) { statusEl.className = "msg warn"; statusEl.textContent = "⚠ Form not connected yet. Add your Web3Forms key in config.js to receive submissions by email."; }
        return;
      }

      var btn = $("#submitBtn"); if (btn) { btn.disabled = true; btn.querySelector("span").textContent = "Sending…"; }
      if (statusEl) { statusEl.className = "msg"; statusEl.textContent = ""; }

      var payload = {
        access_key: key,
        subject: C.emailSubject || "New streamer project request",
        from_name: (C.brand || "Studio") + " — Contact Form",
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
      '<div class="success"><div class="success-ic">✓</div>' +
      "<h3>Request sent" + (name ? ", " + esc(name.split(" ")[0]) : "") + "!</h3>" +
      "<p>Got it. I'll get back to you shortly with next steps.</p></div>";
    if (card.scrollIntoView) card.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- helpers ---------- */
  function setText(s, v) { var n = $(s); if (n && v != null) n.textContent = v; }
  function setHTML(s, v) { var n = $(s); if (n && v != null) n.innerHTML = v; }
  function val(s) { var n = $(s); return n ? String(n.value || "").trim() : ""; }
  function req(s, v) { var n = $(s); if (!n) return true; if (!v) { n.classList.add("invalid"); return false; } n.classList.remove("invalid"); return true; }
  function fail(el, m) { if (el) { el.className = "msg err"; el.textContent = m; } }
  function restoreBtn(b) { if (b) { b.disabled = false; var sp = b.querySelector("span"); if (sp) sp.textContent = "Send request"; } }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  // turn the FIRST few words / a {marked} span into the highlighted block
  function hi(s) {
    if (s == null) return "";
    s = String(s);
    if (s.indexOf("{") !== -1 && s.indexOf("}") !== -1) {
      return esc(s).replace("{", '<span class="hl">').replace("}", "</span>");
    }
    // default: highlight the last word for a bit of punch
    var parts = esc(s).split(" ");
    if (parts.length > 1) { parts[parts.length - 1] = '<span class="hl">' + parts[parts.length - 1] + "</span>"; }
    return parts.join(" ");
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
