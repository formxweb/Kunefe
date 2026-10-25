(function () {
  "use strict";

  var SITE = window.SITE;
  var IMG = "assets/img/";
  var collator = new Intl.Collator("tr");

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value === null || value === undefined || value === false) return;
        if (key === "text") node.textContent = value;
        else if (key === "html") node.innerHTML = value;
        else if (key === "className") node.className = value;
        else node.setAttribute(key, value === true ? "" : value);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  // Türkçe karakterleri sadeleştirerek arama yap ("umraniye" → "Ümraniye")
  function normalize(str) {
    return str
      .toLocaleLowerCase("tr")
      .replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u")
      .replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c")
      .normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  // "0552 451 00 27" → "905524510027"
  function intlPhone(phone) {
    var digits = String(phone).replace(/\D/g, "");
    if (digits.indexOf("90") === 0 && digits.length === 12) return digits;
    if (digits.charAt(0) === "0") return "90" + digits.slice(1);
    return "90" + digits;
  }

  function isMobile(phone) {
    return intlPhone(phone).indexOf("905") === 0;
  }

  function formatPrice(value) {
    return new Intl.NumberFormat("tr-TR").format(value) + " " + SITE.currency;
  }

  var icons = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>',
    map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };

  /* ---------- Mobil menü ---------- */
  function initNav() {
    var toggle = $(".nav-toggle");
    var header = $(".site-header");
    if (!toggle) return;

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    }

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });
    $all(".site-nav a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Menü ---------- */
  function renderMenu() {
    var tabsRoot = $("[data-menu-tabs]");
    var panelsRoot = $("[data-menu-panels]");
    var tabs = [];
    var hasPrice = false;

    SITE.menu.forEach(function (category, index) {
      var selected = index === 0;
      var tab = el("button", {
        type: "button",
        role: "tab",
        id: "tab-" + category.id,
        "aria-controls": "panel-" + category.id,
        "aria-selected": String(selected),
        tabindex: selected ? "0" : "-1",
        className: "tab"
      }, [category.title, el("span", { className: "tab-count", text: String(category.items.length) })]);
      tabs.push(tab);
      tabsRoot.appendChild(tab);

      var grid = el("ul", { className: "menu-grid" });
      category.items.forEach(function (item) {
        if (typeof item.price === "number") hasPrice = true;
        grid.appendChild(el("li", { className: "dish" }, [
          el("div", { className: "dish-media" }, [
            el("img", {
              src: IMG + "menu/" + item.image + ".webp",
              width: "430", height: "558",
              loading: index === 0 ? null : "lazy",
              decoding: "async",
              alt: item.name
            })
          ]),
          el("div", { className: "dish-body" }, [
            el("h4", { className: "dish-name", text: item.name }),
            item.desc ? el("p", { className: "dish-desc", text: item.desc }) : null,
            typeof item.price === "number" ? el("p", { className: "dish-price", text: formatPrice(item.price) }) : null
          ])
        ]));
      });

      panelsRoot.appendChild(el("div", {
        role: "tabpanel",
        id: "panel-" + category.id,
        "aria-labelledby": "tab-" + category.id,
        hidden: !selected,
        className: "menu-panel"
      }, [el("h3", { className: "visually-hidden", text: category.heading }), grid]));
    });

    if (hasPrice) {
      var note = $("[data-price-note]");
      if (note) note.textContent = "Fiyatlar şubeye göre farklılık gösterebilir.";
    }

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.setAttribute("tabindex", on ? "0" : "-1");
        $("#" + t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab); });
      tab.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (event.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (event.key === "Home") next = tabs[0];
        if (event.key === "End") next = tabs[tabs.length - 1];
        if (next) { event.preventDefault(); select(next, true); }
      });
    });

    // Alt bilgideki "Baklava çeşitlerimiz" vb. bağlantılar ilgili sekmeyi açar
    $all("[data-menu-link]").forEach(function (link) {
      link.addEventListener("click", function () {
        var tab = $("#tab-" + link.getAttribute("data-menu-link"));
        if (tab) select(tab);
      });
    });
  }

  /* ---------- Şubeler ---------- */
  function mapsUrl(branch) {
    var query = "Antephan Künefe " + branch.name + ", " + branch.address + ", " + branch.district + "/" + branch.city;
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }

  function regionLabel(id) {
    var region = SITE.regions.filter(function (r) { return r.id === id; })[0];
    return region ? region.label : id;
  }

  function branchCard(branch) {
    var phoneIntl = intlPhone(branch.phone);
    var actions = [
      el("a", { className: "btn btn-gold btn-sm", href: "tel:+" + phoneIntl, "aria-label": branch.name + " şubesini ara: " + branch.phone, html: icons.phone + "<span>Ara</span>" })
    ];
    if (SITE.contact.branchWhatsapp && isMobile(branch.phone)) {
      actions.push(el("a", {
        className: "btn btn-outline-dark btn-sm",
        href: "https://wa.me/" + phoneIntl,
        target: "_blank", rel: "noopener",
        "aria-label": branch.name + " şubesine WhatsApp'tan yaz",
        html: icons.whatsapp + "<span>WhatsApp</span>"
      }));
    }
    actions.push(el("a", {
      className: "btn btn-outline-dark btn-sm",
      href: mapsUrl(branch),
      target: "_blank", rel: "noopener",
      "aria-label": branch.name + " şubesi için yol tarifi",
      html: icons.map + "<span>Yol tarifi</span>"
    }));

    var media = branch.image
      ? el("img", { src: IMG + "branches/" + branch.slug + ".webp", width: "800", height: "297", loading: "lazy", decoding: "async", alt: "Antephan Künefe " + branch.name + " şubesinin dış cephesi" })
      : el("div", { className: "branch-placeholder", "aria-hidden": "true" }, [
          el("img", { src: IMG + "logo-badge.webp", width: "64", height: "64", alt: "", loading: "lazy" })
        ]);

    return el("li", { className: "branch", "data-slug": branch.slug }, [
      el("div", { className: "branch-media" }, [media]),
      el("div", { className: "branch-body" }, [
        el("p", { className: "branch-region", text: regionLabel(branch.region) }),
        el("h3", { className: "branch-name" }, [el("span", { className: "visually-hidden", text: "Antephan Künefe " }), branch.name]),
        el("address", { className: "branch-address" }, [
          branch.address, el("br"), branch.district + " / " + branch.city
        ]),
        el("p", { className: "branch-phone" }, [
          el("a", { href: "tel:+" + phoneIntl, text: branch.phone })
        ]),
        branch.hours ? el("p", { className: "branch-hours", html: icons.clock + "<span></span>" }) : null,
        el("div", { className: "branch-actions" }, actions)
      ])
    ]);
  }

  function renderBranches() {
    var list = $("[data-branch-list]");
    var filters = $("[data-branch-filters]");
    var search = $("[data-branch-search]");
    var result = $("[data-branch-result]");
    var empty = $("[data-branch-empty]");
    var activeRegion = "all";

    $all("[data-branch-count]").forEach(function (node) { node.textContent = String(SITE.branches.length); });

    var cards = SITE.branches.map(function (branch) {
      var card = branchCard(branch);
      if (branch.hours) $(".branch-hours span", card).textContent = branch.hours;
      list.appendChild(card);
      return {
        branch: branch,
        node: card,
        haystack: normalize([branch.name, branch.district, branch.city, branch.address, regionLabel(branch.region)].join(" "))
      };
    });

    var regions = [{ id: "all", label: "Tümü" }].concat(SITE.regions);
    var chips = regions.map(function (region) {
      var count = region.id === "all"
        ? SITE.branches.length
        : SITE.branches.filter(function (b) { return b.region === region.id; }).length;
      var chip = el("button", {
        type: "button",
        className: "chip",
        "aria-pressed": String(region.id === activeRegion),
        "data-region": region.id
      }, [region.label, el("span", { className: "chip-count", text: String(count) })]);
      chip.addEventListener("click", function () {
        activeRegion = region.id;
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
        apply();
      });
      filters.appendChild(chip);
      return chip;
    });

    function apply() {
      var terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
      var visible = 0;
      cards.forEach(function (item) {
        var inRegion = activeRegion === "all" || item.branch.region === activeRegion;
        var matches = terms.every(function (term) { return item.haystack.indexOf(term) !== -1; });
        var show = inRegion && matches;
        item.node.hidden = !show;
        if (show) visible++;
      });
      empty.hidden = visible !== 0;
      result.textContent = visible === SITE.branches.length
        ? "Tüm şubeler (" + visible + ")"
        : visible + " şube listeleniyor";
    }

    search.addEventListener("input", apply);
    $("[data-branch-reset]").addEventListener("click", function () {
      search.value = "";
      activeRegion = "all";
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c.getAttribute("data-region") === "all")); });
      apply();
      search.focus();
    });

    apply();
  }

  /* ---------- Instagram ---------- */
  function renderInstagram() {
    var root = $("[data-instagram]");
    SITE.instagram.forEach(function (post) {
      root.appendChild(el("li", null, [
        el("a", { href: post.url, target: "_blank", rel: "noopener", className: "insta-item", "aria-label": "Instagram gönderisi: " + post.alt }, [
          el("img", { src: IMG + "instagram/" + post.image + ".webp", width: "520", height: "616", loading: "lazy", decoding: "async", alt: post.alt })
        ])
      ]));
    });
  }

  /* ---------- SSS ---------- */
  function renderFaq() {
    var root = $("[data-faq]");
    SITE.faq.forEach(function (item, i) {
      root.appendChild(el("details", { className: "faq-item", open: i === 0 }, [
        el("summary", null, [el("h3", { text: item.q })]),
        el("p", { text: item.a })
      ]));
    });
  }

  /* ---------- WhatsApp & yapılandırılmış veri ---------- */
  function initWhatsapp() {
    var number = SITE.contact.whatsapp;
    var button = $("[data-wa-float]");
    if (!number || !button) return;
    button.href = "https://wa.me/" + intlPhone(number);
    button.setAttribute("aria-label", "WhatsApp ile bize yazın");
    button.hidden = false;
  }

  function injectStructuredData() {
    var base = SITE.contact.website.replace(/\/$/, "");
    var data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": base + "/#organization",
          name: "Antephan Künefe",
          url: base + "/",
          logo: base + "/assets/img/icon-512.png",
          email: SITE.contact.email,
          sameAs: ["https://www.instagram.com/" + SITE.contact.instagram + "/"]
        }
      ].concat(SITE.branches.map(function (b) {
        return {
          "@type": "Restaurant",
          name: "Antephan Künefe " + b.name,
          servesCuisine: ["Künefe", "Baklava", "Katmer"],
          telephone: "+" + intlPhone(b.phone),
          parentOrganization: { "@id": base + "/#organization" },
          image: b.image ? base + "/assets/img/branches/" + b.slug + ".webp" : undefined,
          address: {
            "@type": "PostalAddress",
            streetAddress: b.address,
            addressLocality: b.district,
            addressRegion: b.city,
            addressCountry: "TR"
          },
          hasMap: mapsUrl(b)
        };
      })).concat([{
        "@type": "FAQPage",
        mainEntity: SITE.faq.map(function (f) {
          return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } };
        })
      }])
    };
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  function init() {
    SITE.branches.sort(function (a, b) {
      var ra = SITE.regions.map(function (r) { return r.id; }).indexOf(a.region);
      var rb = SITE.regions.map(function (r) { return r.id; }).indexOf(b.region);
      return ra - rb || collator.compare(a.name, b.name);
    });

    initNav();
    renderMenu();
    renderBranches();
    renderInstagram();
    renderFaq();
    initWhatsapp();
    injectStructuredData();
    $all("[data-year]").forEach(function (node) { node.textContent = String(new Date().getFullYear()); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
