// JavaScript Document

(() => {
  "use strict";
  var e = {};

  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  e.g = function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), (() => {
    var t;
    e.g.importScripts && (t = e.g.location + "");
    var n = e.g.document;
    if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
      var r = n.getElementsByTagName("script");
      r.length && (t = r[r.length - 1].src)
    }
    if (!t) throw new Error("Automatic publicPath is not supported in this browser");
    t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), e.p = t
  })();
  var n = document.querySelector(".site-banner > .inside"),
    r = document.querySelectorAll(".site-banner > .inside > *:not(".concat(".header-logo, .header-date, .toggle-menu, .mobile-menu, .breadcrumb-nav", ")")),
    i = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.init()
      }
      var i, l, o;
      return i = e, (l = [{
        key: "init",
        value: function () {
          this.createMobileElements(), this.moveNavigation(), this.watchResize()
        }
      }, {
        key: "createMobileElements",
        value: function () {
          var e = this;
          this.toggleBtn = document.createElement("div"), this.toggleBtn.classList.add("toggle-menu"), this.toggleBtn.innerHTML = '<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="2" fill="white"/><rect width="24" height="2" transform="translate(0 6)" fill="white"/><rect width="24" height="2" transform="translate(0 12)" fill="white"/></svg>', this.toggleBtn.addEventListener("click", (function () {
            e.changeMenuState()
          })), n.appendChild(this.toggleBtn), this.closeBtn = document.createElement("div"), this.closeBtn.classList.add("close-menu"), this.closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>', this.closeBtn.addEventListener("click", (function () {
            e.changeMenuState()
          })), this.mobileMenu = document.createElement("div"), this.mobileMenu.classList.add("mobile-menu"), this.mobileMenu.prepend(this.closeBtn), n.appendChild(this.mobileMenu)
        }
      }, {
        key: "moveNavigation",
        value: function () {
          var e = this;
          window.matchMedia("(max-width: 992px)").matches ? r.forEach((function (t) {
            e.mobileMenu.prepend(t)
          })) : r.forEach((function (e) {
            n.prepend(e)
          }))
        }
      }, {
        key: "watchResize",
        value: function () {
          var e = this;
          window.addEventListener("resize", (function () {
            e.moveNavigation()
          }))
        }
      }, {
        key: "changeMenuState",
        value: function () {
          this.mobileMenu.classList.toggle("is-open"), document.documentElement.classList.toggle("scroll-locked")
        }
      }]) && t(i.prototype, l), o && t(i, o), Object.defineProperty(i, "prototype", {
        writable: !1
      }), e
    }();

  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var o = function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.watchScreenChange()
    }
    var t, n, r;
    return t = e, (n = [{
      key: "watchScreenChange",
      value: function () {
        var e = this;
        ["scroll", "resize", "fullscreenchange", "fullscreenerror", "touchcancel", "touchend", "touchmove", "touchstart", "mozbrowserscroll", "mozbrowserscrollareachanged", "mozbrowserscrollviewchange", "mozbrowserresize", "MozScrolledAreaChanged", "mozbrowserresize", "orientationchange"].forEach((function (t) {
          window.addEventListener(t, e.setRealVH)
        }))
      }
    }, {
      key: "setRealVH",
      value: function () {
        document.documentElement.style.setProperty("--real-vh", window.innerHeight / 100 + "px")
      }
    }]) && l(t.prototype, n), r && l(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e
  }();
  e.p;

  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var c = '<svg class="arrow" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 4.66667L0 1.33333L1.33333 0L6 4.66667L1.33333 9.33333L0 8L3.33333 4.66667Z" fill="#1A4470"/></svg>',
    s = '<svg class="arrow" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.125 3.5L0.5 0.5L5.75 0.5L3.125 3.5Z" fill="#CCCADD"/></svg>',
    u = '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0H3V3H0V5H3V8H5V5H8V3H5V0Z" fill="#1E1F40"/></svg>',
    d = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.removeFaqTitlesPoints(), this.viewAllSections(), this.gridFigurePlacement(), this.addArrow(), this.programmeOverlay(), this.headerSubMenuArrow(), this.moveBreadcrumb(), this.altVideoBLoc(), this.scrollForMore(), this.downloadButtons(), this.disabledFAQQuestions(), this.addInputPlaceholders(), this.milipolNetwork(), this.blockVideos(), this.partnersGridLinks()
      }
      var t, n, r;
      return t = e, n = [{
        key: "viewAllSections",
        value: function () {
          document.querySelectorAll(".block .inside").forEach((function (e) {
            var t = e.querySelector(".main-title-with-link a");
            t && (e.classList.add("view-all-section"), e.insertBefore(t, e.children[e.children.length - 1]))
          }));
          var e = document.querySelector(".landing .partner .inside");
          e && e.classList.add("view-all-section")
        }
      }, {
        key: "gridFigurePlacement",
        value: function () {
          var e = document.querySelectorAll(".article-content figure.fl");
          e && e.forEach((function (e) {
            e.nextElementSibling && e.nextElementSibling.classList.add("half-grid")
          }));
          var t = document.querySelectorAll(".article-content figure.fr");
          t && t.forEach((function (e) {
            e.previousElementSibling && e.previousElementSibling.classList.add("half-grid")
          }))
        }
      }, {
        key: "addArrow",
        value: function () {
          [{
            selector: ".site-wrapper ul ul li",
            place: "before",
            svg: c
          }, {
            selector: ".site-wrapper ul ul ul li",
            place: "before",
            svg: c
          }, {
            selector: ".lien1",
            place: "after",
            svg: c
          }, {
            selector: ".lien2",
            place: "after",
            svg: c
          }, {
            selector: "header .mn-item-lvl-1>a>span",
            place: "after",
            svg: s
          }, {
            selector: ".milipol-network p:nth-child(1n + 3)",
            place: "after",
            svg: c
          }, {
            selector: ".link-view-all",
            place: "after",
            svg: u
          }, {
            selector: "header .mn-item-lvl-2>a>span",
            place: "after",
            svg: c
          }, {
            selector: ".fc-item-title",
            place: "after",
            svg: c
          }, {
            selector: "#userAccount_newsletter_submit",
            place: "after",
            svg: c
          }, {
            selector: ".breadcrumb-nav a",
            place: "after",
            svg: c
          }, {
            selector: ".slider-pagin-btn button",
            place: "after",
            svg: c
          }, {
            selector: ".front .cta2 li a",
            place: "after",
            svg: c
          }, {
            selector: "header .mn-menu .mn-item-lvl-1:last-of-type",
            place: "after",
            svg: c
          }, {
            selector: ".article_list .la-item-content, .programmes .la-item-content",
            place: "after",
            svg: c
          }, {
            selector: ".ctas a",
            place: "after",
            svg: c
          }, {
            selector: ".lang-switcher button",
            place: "after",
            svg: s
          }, {
            selector: ".actualites article .gla-item-content",
            place: "after",
            svg: c
          }, {
            selector: ".secteurs_activite article .gla-item-content",
            place: "after",
            svg: c
          }, {
            selector: ".pagination .pagin-next a",
            place: "after",
            svg: c
          }, {
            selector: ".pagination .pagin-prev a",
            place: "before",
            svg: c
          }, {
            selector: ".contacts-list + .quicklinks a",
            place: "after",
            svg: u
          }, {
            selector: "body.partner .btn .js-pal-plus",
            place: "after",
            svg: u
          }].forEach((function (e) {
            var t = document.querySelectorAll(e.selector);
            0 !== t.length && t.forEach((function (t) {
              t.innerHTML = "before" === e.place ? e.svg + t.innerHTML : t.innerHTML + e.svg
            }))
          }))
        }
      }, {
        key: "programmeOverlay",
        value: function () {
          var e = document.querySelector(".front .programmes");
          if (e) {
            var t = document.createElement("img");
            t.classList.add("vector"), t.setAttribute("src", "/theme/milipol_paris_git_desktop/img/overlay.svg"), e.insertBefore(t, e.children[e.children.length - 1])
          }
        }
      }, {
        key: "headerSubMenuArrow",
        value: function () {
          document.querySelectorAll("header .mn-item-lvl-1").forEach((function (e) {
            var t = document.createElement("div");
            t.classList.add("submenu-arrow"), e.insertBefore(t, e.children[e.children.length - 1])
          }))
        }
      }, {
        key: "moveBreadcrumb",
        value: function () {
          var e = document.querySelector(".site-banner > .inside"),
            t = document.querySelector(".breadcrumb-nav");
          t && e.insertBefore(t, e.children[e.children.length - 1])
        }
      }, {
        key: "altVideoBLoc",
        value: function () {
          var e = document.querySelector(".landing .edito3");
          if (e) {
            var t = e.querySelector(".block-video");
            e.insertBefore(t, e.children[e.children.length - 1])
          }
        }
      }, {
        key: "scrollForMore",
        value: function () {
          var e = document.querySelector(".home-hero");
          if (e) {
            var t = document.querySelector("html").getAttribute("lang"),
              n = document.createElement("div");
            n.classList.add("scrollForMore"), n.innerHTML = c + "".concat("fr" === t ? "<p>Scrollez pour plus de contenu</p>" : "<p>Scroll for more content</p>"), e.appendChild(n)
          }
        }
      }, {
        key: "downloadButtons",
        value: function () {
          var e = document.querySelectorAll(".lien4");
          e && e.forEach((function (e) {
            e.innerHTML = '\n      <div class="dl__name">'.concat(e.innerHTML, '</div>\n      <div class="dl__infos">\n        <div class="dl__infos__type">PDF</div>\n        <div class="dl__infos__size">40ko</div>\n      </div>\n      <div class="dl__btn">\n        Télécharger ').concat('<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3.33333L8 2.91409e-07L9.33333 1.33333L4.66667 6L0 1.33333L1.33333 0L4.66667 3.33333Z" fill="#F5F4F8"/><path d="M0.666586 7L8.66659 7V9L0.666586 9L0.666586 7Z" fill="#F5F4F8"/></svg>', "\n      </div>\n      ")
          }))
        }
      }, {
        key: "disabledFAQQuestions",
        value: function () {
          var e = document.querySelectorAll(".faq .fc-item-link");
          e && e.forEach((function (e) {
            e.removeAttribute("href")
          }))
        }
      }, {
        key: "removeFaqTitlesPoints",
        value: function () {
          document.querySelector(".faq") && document.querySelectorAll(".faq .fc-item-nb").forEach((function (e) {
            e.innerHTML = e.innerHTML.replace(".", "")
          }))
        }
      }, {
        key: "addInputPlaceholders",
        value: function () {
          var e = "fr" === document.querySelector("html").getAttribute("lang") ? "Votre email" : "Your email";
          document.querySelector("#comexposium_newsletter_email").setAttribute("placeholder", e)
        }
      }, {
        key: "milipolNetwork",
        value: function () {
          var e = document.querySelector(".milipol-network");
          if (e) {
            var t = ["logo-milipol-qatar", "logo-milipol-asia", "logo-milipol-paris", "logo-milipol-india"];
            e.querySelectorAll(".externe").forEach((function (e, n) {
              e.innerHTML = '<img src="/theme/milipol_paris_git_desktop/img/'.concat(t[n], '.png">').concat(e.innerHTML)
            }))
          }
        }
      }, {
        key: "blockVideos",
        value: function () {
          var e = document.querySelectorAll(".block-video");
          e && e.forEach((function (e, t) {
            var n = e.querySelector(".controls"),
              r = e.querySelector(".thumbnail"),
              i = e.querySelector("iframe");
            n.addEventListener("click", (function () {
              i.setAttribute("src", i.getAttribute("src") + "?autoplay=1"), n.style.display = "none", r.classList.add("playing")
            }))
          }))
        }
      }, {
        key: "partnersGridLinks",
        value: function () {
          document.querySelector("body.partner .partner-list") && document.querySelectorAll(".pl-item").forEach((function (e) {
            var t = e.querySelector("a.link-read-more");
            e.addEventListener("click", (function () {
              t.click()
            }))
          }))
        }
      }], n && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();
  e.p;

  function h(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var f = [".hero .inside", ".home-hero .inside", ".hero-adapted"],
    v = function () {
      function e() {
        var t, n, r, i = this;
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), r = void 0, (n = "r") in (t = this) ? Object.defineProperty(t, n, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = r, this.addClasses(), f.forEach((function (e) {
          var t = document.querySelector(e);
          null !== t && (i.overlay(t), i.vector(t))
        }))
      }
      var t, n, r;
      return t = e, (n = [{
        key: "addClasses",
        value: function () {
          var e = document.querySelectorAll("#zone2 > .block");
          if (!document.querySelector(".error404")) {
            if (1 === e.length)
              if (document.querySelector("body").classList.contains("partner")) {
                var t = document.querySelector("#zone1");
                t.classList.add("hero-adapted");
                var n = document.querySelector("#zone2").querySelector("h1");
                t.insertBefore(n, t.children[0])
              } else e[0].querySelector(".inside").classList.add("hero-adapted");
            var r = document.querySelector(".article .article-title");
            r && r.classList.add("hero")
          }
        }
      }, {
        key: "overlay",
        value: function (e) {
          var t = document.createElement("div");
          t.classList.add("overlay"), e.insertBefore(t, e.children[e.children.length - 1])
        }
      }, {
        key: "vector",
        value: function (e) {
          var t = document.createElement("img");
          t.classList.add("vector"), t.setAttribute("src", "/theme/milipol_paris_git_desktop/img/hero-overlay.svg"), e.insertBefore(t, e.children[e.children.length - 1])
        }
      }]) && h(t.prototype, n), r && h(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();

  function p(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var m = function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.handleDropdown()
    }
    var t, n, r;
    return t = e, (n = [{
      key: "handleDropdown",
      value: function () {
        var e = document.querySelectorAll(".fc-item ");
        e && e.forEach((function (e) {
          e.addEventListener("click", (function () {
            e.classList.contains("open") ? e.classList.remove("open") : e.classList.add("open")
          }))
        }))
      }
    }]) && p(t.prototype, n), r && p(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e
  }();

  function g(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var w = {
      fr: '<svg class="flag" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_655_1888)"><rect x="0.513428" y="0.5" width="15" height="15" rx="7.5" fill="white"/><rect width="5" height="15" transform="translate(0.513428 0.5)" fill="#1A4470"/><rect width="5" height="15" transform="translate(5.51343 0.5)" fill="white"/><rect width="5" height="15" transform="translate(10.5134 0.5)" fill="#CD1F1F"/></g><defs><clipPath id="clip0_655_1888"><rect x="0.513428" y="0.5" width="15" height="15" rx="7.5" fill="white"/></clipPath></defs></svg>',
      en: '<svg xmlns="http://www.w3.org/2000/svg" class="flag" viewBox="0 0 512 512" width="16" height="16"><path fill="#012169" d="M0 0h512v512H0z"/><path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/><path fill="#C8102E" d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"/><path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"/><path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"/>\n</svg>\n'
    },
    y = document.querySelector(".lang-switcher"),
    b = document.documentElement.lang,
    L = function () {
      function e() {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.addFlag()
      }
      var t, n, r;
      return t = e, (n = [{
        key: "addFlag",
        value: function () {
          var e = y.querySelector("button");
          e && (e.innerHTML = w[b] + e.innerHTML)
        }
      }]) && g(t.prototype, n), r && g(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e
    }();

  function k(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  var S = function () {
    function e() {
      ! function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }(this, e), this.init()
    }
    var t, n, r;
    return t = e, (n = [{
      key: "init",
      value: function () {
        var e = document.querySelector("footer .optin-container").querySelector("input");
        if (e) {
          var t = '<label class="optin-validator">'.concat(e.outerHTML, '<div class="custom-checkbox"><svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 3.33333L6.66667 -5.82819e-08L8 1.33333C5.99312 3.32846 5.03247 4.29384 3.33333 6L0.166665 2.83333L1.5 1.5L3.33333 3.33333Z" fill="white"/>\n</svg>\n</div></label>');
          e.outerHTML = t
        }
      }
    }]) && k(t.prototype, n), r && k(t, r), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e
  }();

  function E(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function q(e, t, n) {
    return t && E(e.prototype, t), n && E(e, n), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e
  }
  var M = q((function e() {
    ! function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), this.mobileNav = new i, this.realVH = new o, this.Lang = new L, this.displace = new d, this.hero = new v, this.FAQ = new m, this.Checkbox = new S
  }));
  window.app = new M
})();
