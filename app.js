(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* escape text, then turn [label](url) into links */
  const rich = (s) => esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) =>
    /^(#|projects\.html)/.test(u) ? `<a href="${u}">${t}</a>` : `<a href="${u}" target="_blank" rel="noopener">${t}</a>`);

  function ytId(v) {
    if (!v) return "";
    const m = String(v).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : /^[\w-]{11}$/.test(v) ? v : "";
  }

  /* Video or image block. Videos load only when clicked (fast page, no cookies until then). */
  function media({ youtube, image, title, href, cta }) {
    const id = ytId(youtube);
    if (href && image) return `<a class="media link" href="${esc(href)}" target="_blank" rel="noopener" aria-label="${esc(title)}">
        <img src="${esc(image)}" alt="" loading="lazy"><span class="ext">${esc(cta || "Open")} &#8599;</span></a>`;
    if (id) {
      const thumb = image || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      return `<button class="media video" data-yt="${id}" aria-label="Play ${esc(title)}">
        <img src="${esc(thumb)}" alt="" loading="lazy"><span class="play"></span></button>`;
    }
    if (image) return `<div class="media"><img src="${esc(image)}" alt="${esc(title)}" loading="lazy"></div>`;
    return `<div class="media placeholder"><span>Video / image goes here</span></div>`;
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-yt]");
    if (!btn) return;
    const tile = btn.closest(".tile");           // hide the hover description while the video plays
    if (tile) tile.classList.add("is-playing");
    btn.outerHTML = `<div class="media video"><iframe src="https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&rel=0" title="${esc(btn.getAttribute('aria-label').replace(/^Play /, ''))}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
  });

  /* ---------- shared: centered logo, nav, footer ---------- */
  const home = page === "home" ? "" : "index.html";
  let iconN = 0;
  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
    /* Airwiggles: its rounded-diamond badge with the "wiggle" cut out, drawn in the same solid style as the other icons */
    airwiggles: '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><mask id="aw-wave"><rect width="24" height="24" fill="#fff"/><path d="M5.3 12.6q1.75-5.2 3.5 0t3.5 0t3.5 0t3.5 0" fill="none" stroke="#000" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></mask></defs><g mask="url(#aw-wave)"><rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5.2" transform="rotate(45 12 12)"/></g></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7.5 12 13.5l8.5-6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.2-4.6A8 8 0 1 1 21 12z"/></svg>',
  };
  /* the Airwiggles icon uses an SVG mask, and ids must be unique on a page - give each copy its own */
  const icon = (key) => { const n = iconN++; return (ICONS[key] || "").replace(/aw-wave/g, "aw-wave-" + n); };
  $("#masthead").innerHTML = `<a class="logo" href="index.html" aria-label="${esc(S.name)} - home">
      <img class="logo-light" src="images/logo.png" alt="${esc(S.name)}">
      <img class="logo-dark" src="images/logo-dark.png" alt="">
    </a>
    <div class="social-top">${Object.entries(S.social).map(([k, v]) =>
      `<a href="${esc(v)}" target="_blank" rel="noopener" aria-label="${esc(k)}" title="${esc(k)}">${icon(k.toLowerCase()) || esc(k[0])}</a>`).join("")}</div>`;

  const links = [
    ["About", `${home}#about`],
    ...S.sections.filter((s) => s.id !== "community").map((s) => [s.nav || s.title, `${home}#${s.id}`]),
    ["Project History", "projects.html"],
    ["Contact", `${home}#contact`],
  ];
  $("#nav").innerHTML = `<div class="nav-in">
      <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
      <div class="links">${links.map(([t, h]) => `<a href="${h}"${h === "projects.html" && page === "projects" ? ' class="on"' : ""}>${esc(t)}</a>`).join("")}</div>
    </div>`;
  $(".burger").addEventListener("click", (e) => {
    const open = $("#nav").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });
  $("#nav .links").addEventListener("click", () => $("#nav").classList.remove("open"));

  $("#footer").innerHTML = `<span class="social">${Object.entries(S.social).map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener" aria-label="${esc(k)}" title="${esc(k)}">${icon(k.toLowerCase()) || esc(k)}</a>`).join("")}</span>
    <span>&copy; ${new Date().getFullYear()} ${esc(S.name)}</span>`;

  /* The site uses one theme, Midnight Moss (set on the <html> tag as data-theme="midnight").
     The other themes (forest, sage) are still defined in styles.css if you ever want to bring a switcher back. */

  /* Email links only work if the computer has a mail app set up for them. If nothing opens after a click,
     show the address with Copy / Gmail buttons so the visitor can still reach out. */
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="mailto:"]');
    if (!a) return;
    const addr = a.getAttribute("href").slice(7).split("?")[0];
    let left = false;
    const gone = () => { left = true; };
    addEventListener("blur", gone, { once: true });
    document.addEventListener("visibilitychange", gone, { once: true });
    setTimeout(() => {
      removeEventListener("blur", gone);
      document.removeEventListener("visibilitychange", gone);
      if (!left) showMailHelp(addr);
    }, 1300);
  });
  function showMailHelp(addr) {
    let box = $("#mailhelp");
    if (!box) { box = document.createElement("div"); box.id = "mailhelp"; box.setAttribute("role", "status"); document.body.appendChild(box); }
    box.innerHTML = `<p>Didn't open your mail app? Email me at <strong>${esc(addr)}</strong></p>
      <div><button data-act="copy">Copy address</button>
      <a href="https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(addr)}" target="_blank" rel="noopener">Open in Gmail</a>
      <button data-act="close" aria-label="Close">&times;</button></div>`;
    box.classList.add("show");
    box.onclick = (ev) => {
      const b = ev.target.closest("button"); if (!b) return;
      if (b.dataset.act === "close") { box.classList.remove("show"); return; }
      const done = () => { b.textContent = "Copied ✓"; setTimeout(() => box.classList.remove("show"), 1400); };
      if (navigator.clipboard) navigator.clipboard.writeText(addr).then(done, () => { b.textContent = addr; });
      else b.textContent = addr;
    };
  }

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); reveal.unobserve(en.target); } });
  }, { threshold: 0.12 });
  const watch = (root = document) => root.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
  setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((el) => {      // safety net: never leave anything hidden
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 1.5) el.classList.add("in");
  }), 1500);

  /* ---------- home ---------- */
  function renderHome() {
    $("#hero-title").textContent = `${S.name} - ${S.role}`;

    $("#reels-grid").innerHTML = S.showreels.map((r) => `
      <article class="reel reveal">
        <span class="badge">${esc(r.title)}</span>
        ${media({ youtube: r.youtube, title: r.title })}
      </article>`).join("");

    $("#about-heading").textContent = S.about.heading || "About";
    $("#about-photos").innerHTML = S.about.photos.map((src, i) => `<img src="${esc(src)}" alt="${esc((S.about.photoAlts || [])[i] || "")}" loading="lazy" draggable="false">`).join("");
    const [lead, ...rest] = S.about.paragraphs;           // first paragraph is the large lead line
    $("#about-lead").innerHTML = rich(lead);
    $("#about-text").innerHTML = rest.map((p) => `<p>${rich(p)}</p>`).join("");
    const skillRows = Array.isArray(S.about.skills[0]) ? S.about.skills : [S.about.skills];   // list of lines, or one flat list
    $("#skills").innerHTML = skillRows.map((row) => `<ul class="chips">${row.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`).join("");
    if (S.about.cv) $("#cv").href = S.about.cv; else $("#cv").remove();

    const slide = (it, cover, tile) => tile
      ? `<article class="slide tile">
          <div class="tile-media">${media(it)}${it.caption ? `<div class="tile-desc"><span>${rich(it.caption)}</span></div>` : ""}</div>
          <h3 class="tile-title">${esc(it.title)}</h3>
        </article>`
      : `<article class="slide${cover ? " cover" : ""}">${cover && it.link
          ? `<a class="cover-link" href="${esc(it.link)}" target="_blank" rel="noopener" aria-label="${esc(it.title)}">${media(it)}</a>`   // cover art goes to the same page as the title
          : media(it)}
        <div class="slide-body"><h3>${it.link && cover ? `<a href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.title)}</a>` : esc(it.title)}</h3>
        ${it.caption ? `<p>${rich(it.caption)}</p>` : ""}</div></article>`;
    const carousel = (items, sec, label) => `
      ${label ? `<h3 class="track-label">${esc(label)}</h3>` : ""}
      <div class="carousel${sec.rows === 2 ? " two-rows" : ""}${sec.cover ? " covers" : ""}${sec.wide ? " wide" : ""}${sec.tiles ? " tiles" : ""}" tabindex="0">${items.map((it) => slide(it, sec.cover, sec.tiles)).join("")}</div>
      <div class="arrows"><button data-dir="-1" aria-label="Previous">&#8592;</button><button data-dir="1" aria-label="Next">&#8594;</button></div>`;

    /* items marked `featured: true` go in a bigger, fixed top row; the rest scroll in a one-row carousel below */
    const sectionBody = (sec) => {
      const feat = sec.items.filter((it) => it.featured);
      if (!feat.length) return carousel(sec.items, sec);
      return `<div class="feature-row">${feat.map((it) => slide(it, false, sec.tiles)).join("")}</div>
        ${carousel(sec.items.filter((it) => !it.featured), { ...sec, rows: 1 })}`;
    };

    $("#sections").innerHTML = S.sections.map((sec) => `
      <section class="block" id="${esc(sec.id)}"><div class="wrap">
        <div class="sec-head"><h2>${esc(sec.title)}</h2>${sec.intro ? `<p class="intro">${rich(sec.intro)}</p>` : ""}</div>
        ${sec.tracks ? sec.tracks.map((t) => carousel(t.items, sec, t.label)).join("") : sectionBody(sec)}
      </div></section>`).join("");

    const fp = S.freePack;
    if (fp) {
      $("#freepack .wrap").innerHTML = `<div class="freepack reveal">
        <div class="gallery" id="gallery" role="region" aria-label="Photos from the recordings">
          ${fp.images.map((im, i) => `<figure class="g-slide${i ? "" : " on"}"><img src="${esc(im.src)}" alt="${esc(im.caption)}" ${i ? 'loading="lazy"' : ""}><figcaption>${esc(im.caption)}</figcaption></figure>`).join("")}
          <button class="g-btn prev" aria-label="Previous photo">&#8592;</button><button class="g-btn next" aria-label="Next photo">&#8594;</button>
          <div class="g-dots">${fp.images.map((_, i) => `<button aria-label="Photo ${i + 1}"${i ? "" : ' class="on"'}></button>`).join("")}</div>
        </div>
        <div class="fp-body"><span class="badge">${esc(fp.badge)}</span><h2>${esc(fp.title)}</h2>
        ${fp.text.map((t) => `<p>${rich(t)}</p>`).join("")}
        <a class="btn" href="${esc(fp.link)}" download>${esc(fp.button)}</a></div></div>`;
      const g = $("#gallery"), slides = [...g.querySelectorAll(".g-slide")], dots = [...g.querySelectorAll(".g-dots button")];
      let cur = 0, timer;
      const show = (n) => {
        cur = (n + slides.length) % slides.length;
        slides.forEach((sl, i) => sl.classList.toggle("on", i === cur));
        dots.forEach((d, i) => d.classList.toggle("on", i === cur));
      };
      const play = () => { clearInterval(timer); if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(() => show(cur + 1), 5000); };
      g.addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b) return;
        if (b.classList.contains("prev")) show(cur - 1);
        else if (b.classList.contains("next")) show(cur + 1);
        else show(dots.indexOf(b));
        play();
      });
      g.addEventListener("mouseenter", () => clearInterval(timer));
      g.addEventListener("mouseleave", play);
      play();
    } else $("#freepack").remove();

    /* separator line + tab above every section except the first */
    [...document.querySelectorAll("main > section, #sections > section")].forEach((sec, i) => sec.classList.toggle("seam", i > 0));

    document.querySelectorAll(".carousel").forEach((track) => {
      const arrows = track.nextElementSibling;
      const sync = () => { arrows.hidden = track.scrollWidth <= track.clientWidth + 4; };
      sync(); addEventListener("resize", sync); addEventListener("load", sync);
      arrows.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (b) track.scrollBy({ left: b.dataset.dir * track.clientWidth * 0.85, behavior: "smooth" });
      });
    });

    /* faint, slow background motion behind individual sections (corner rings / drifting wave) */
    Object.entries(S.deco || {}).forEach(([id, kind]) => {
      const sec = document.getElementById(id);
      if (!sec || kind === "none") return;
      sec.insertAdjacentHTML("afterbegin", `<div class="deco deco-${kind}" aria-hidden="true">${kind === "wave" ? "" : "<span></span><span></span><span></span>"}</div>`);
    });

    $("#contact-heading").textContent = S.contact.heading;
    $("#contact-lede").textContent = S.contact.text;
    $("#contact-actions").innerHTML = S.contact.buttons.map((b) => {
      const href = b.href === "email" ? `mailto:${S.email}` : b.href;
      const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
      return `<a class="btn${b.primary ? "" : " ghost"}" href="${esc(href)}"${ext}>${icon(b.icon)}${esc(b.label)}</a>`;
    }).join("");

    /* Fit the hover descriptions to their tile: shrink the text until it fits the thumbnail (never cropped),
       and re-fit whenever the window or the tile size changes. */
    const fitTiles = () => {
      const touch = matchMedia("(hover: none)").matches;      // touch layout shows the text under the image instead
      document.querySelectorAll(".tile-desc").forEach((d) => {
        const span = d.firstElementChild;
        d.style.fontSize = ""; span.style.cssText = "";
        if (touch) return;
        const cs = getComputedStyle(d);
        const avail = d.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        let lo = 9, hi = parseFloat(cs.fontSize), best = lo;
        for (let i = 0; i < 9; i++) {
          const mid = (lo + hi) / 2;
          d.style.fontSize = mid + "px";
          if (span.offsetHeight <= avail) { best = mid; lo = mid; } else hi = mid;
        }
        d.style.fontSize = best + "px";
        if (span.offsetHeight > avail) {                      // still too long at the smallest size: trim with an ellipsis
          const lh = parseFloat(getComputedStyle(span).lineHeight) || best * 1.45;
          span.style.cssText = `display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:${Math.max(2, Math.floor(avail / lh))};overflow:hidden`;
        }
      });
    };
    let fitTimer;
    const refit = () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitTiles, 80); };
    fitTiles();
    addEventListener("resize", refit);
    addEventListener("load", fitTiles);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTiles);
  }

  /* ---------- projects ---------- */
  function renderProjects() {
    let list = [...S.projects];
    /* shown in the order they're listed in content.js */
    {
      $("#timeline").innerHTML = list.map((p, i) => `
        <li class="entry ${i % 2 ? "right" : "left"} reveal">
          <span class="node" aria-hidden="true"></span>${p.year ? `<span class="year">${esc(p.year)}</span>` : ""}
          <article class="card">
            ${media({ youtube: p.youtube, image: p.image, title: p.title, href: p.href, cta: p.cta })}
            <div class="card-body">
              <p class="meta"><span class="badge">${esc(p.role)}</span></p>
              <h3>${esc(p.title)}</h3>
              ${p.sub ? `<p class="sub">${esc(p.sub)}</p>` : ""}
              <p class="summary">${rich(p.summary)}</p>
              ${(p.did || []).length ? `<ul>${p.did.map((d) => `<li>${rich(d)}</li>`).join("")}</ul>` : ""}
              ${(() => { const ls = p.links || (p.link ? [{ label: "View project", href: p.link }] : []);
                return ls.length ? `<div class="more-row">${ls.map((l) => `<a class="more" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} &#8599;</a>`).join("")}</div>` : ""; })()}
            </div>
          </article>
        </li>`).join("");
      watch($("#timeline"));
    }
  }

  page === "home" ? renderHome() : renderProjects();
  watch();

  /* Only animate rings / waves while their section is near the screen. Fewer animated layers at once keeps the browser's
     graphics smooth and avoids parts of the page flickering in and out. */
  if ("IntersectionObserver" in window) {
    const motionIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => en.target._motion.forEach((m) => m.classList.toggle("is-paused", !en.isIntersecting)));
    }, { rootMargin: "150px" });
    const hosts = new Map();
    document.querySelectorAll(".ripples, .about-rings, .deco, .proj-waves").forEach((m) => {
      const host = m.parentElement;
      if (!hosts.has(host)) { host._motion = []; hosts.set(host, true); motionIO.observe(host); }
      host._motion.push(m);
    });
  }
})();
