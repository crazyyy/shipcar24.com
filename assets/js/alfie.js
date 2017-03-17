! function(self_name) {
  var viglink, $;
  $ = {
    each: function(a, b) {
      var c, d;
      for (c = 0, d = a.length; d > c; c++) b(a[c], c)
    },
    extend: function(a) {
      var b, c, d, e, f = arguments.length;
      for (a = a || {}, c = 1; f > c; c++)
        if (e = arguments[c], void 0 !== e && null !== e)
          for (d in e) b = e[d], a !== b && void 0 !== b && (a[d] = b);
      return a
    }
  }, $.extend($, {
    addClass: function(a, b) {
      $.hasClass(a, b) || (a.className = (a.className ? a.className + " " : "") + b)
    },
    attrValues: function(a, b, c) {
      return c = c || " ", b = a[b], b ? b.split(c) : []
    },
    bind: function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    },
    browser: function() {
      var a, b = {},
        c = navigator.userAgent.toLowerCase().replace(/\s*[()]\s*/g, "; ").replace(/(\/[\w.]+)\s+/g, "$1; ").replace(/\;\s*$/, "").split(/;\s*/);
      return $.each(c, function(c) {
        a = (/[\/ :]([^\/ :]+)$/.exec(c) || [])[1], b[a ? c.substr(0, c.length - a.length - 1).replace(/\d*$/, "") : c] = a || !0
      }), {
        aol: b.aol,
        blackberry: b.blackberry,
        ie: b.msie,
        ios: b.mobile && b.safari,
        opera: b.opera,
        playstation: b.playstation,
        version: parseFloat(b.version) || !1
      }
    }(),
    cache: function() {
      var a = {},
        b = "vglnk_" + (new Date).getTime(),
        c = 0;
      return function(d, e, f) {
        if (d) {
          var g = d[b];
          if (g || void 0 !== f) return g || (g = ++c), a[g] || (d[b] = g, a[g] = {}), void 0 !== f && (a[g][e] = f), "string" == typeof e ? a[g][e] : a[g]
        }
      }
    }(),
    canonicalizeHostname: function(a) {
      return "string" == typeof a && (a = $.createA(a)), a.hostname ? a.hostname.toString().toLowerCase().replace(/^www\./, "").replace(/:.*$/, "") : ""
    },
    clone: function(a) {
      return $.extend({}, a)
    },
    contains: function(a, b) {
      return -1 !== $.indexOf(a, b)
    },
    contextIsAncestor: function(a) {
      for (var b = window.self; b.parent && b.parent !== b;)
        if (b = b.parent, b === a) return !0;
      return !1
    },
    cors: function(url) {
      var request, onSuccess = function() {
        eval(request.responseText)
      };
      request = new window.XMLHttpRequest, request.onreadystatechange = function() {
        4 === request.readyState && 200 === request.status && onSuccess()
      }, request.open("GET", url), request.withCredentials = !0, request.send()
    },
    createA: function(a, b) {
      return $.createEl("a", {
        href: a,
        target: b
      })
    },
    createEl: function(a, b, c, d) {
      var e, f = (d || document).createElement(a);
      b = b || {}, c = c || {};
      for (e in b) void 0 !== b[e] && (f[e] = b[e]);
      return $.css(f, c), f
    },
    css: function(a, b) {
      var c;
      for (c in b) try {
        a.style[c] = b[c]
      } catch (d) {}
      return a
    },
    destructing: function(a) {
      return function(a) {
        var b, c = !1;
        return function() {
          return c || (b = a.apply(null, arguments), c = !0), b
        }
      }(a)
    },
    escapeRegExp: function() {
      var a;
      return function(b) {
        return a = a || new RegExp("([.*+?^${}()|[\\]\\\\])", "g"), b.replace(a, "\\$1")
      }
    }(),
    eventLink: function(a) {
      var b, c, d = a.target || a.srcElement;
      do {
        try {
          b = d.nodeType
        } catch (e) {
          return
        }
        if (1 === b && (c = d.tagName.toUpperCase(), "A" === c || "AREA" === c)) return d;
        d = d.parentNode
      } while (d)
    },
    exceptionLogger: function() {
      var a = !1,
        b = function() {};
      return function(c, d) {
        return void 0 === d ? function() {
          if (!a) return c.apply(this, arguments);
          try {
            return c.apply(this, arguments)
          } catch (d) {
            b(d)
          }
        } : (a = d, void(b = c))
      }
    }(),
    fromQuery: function(a) {
      "?" === a.substr(0, 1) && (a = a.substr(1));
      var b = a.split("&"),
        c = {};
      return $.each(b, function(a) {
        var b = a.split("=");
        c[decodeURIComponent(b[0])] = decodeURIComponent(b[1])
      }), c
    },
    hasAttrValue: function(a, b, c, d) {
      return b ? $.contains($.attrValues(a, b, d), c) : !1
    },
    hasClass: function(a, b) {
      return $.hasAttrValue(a, "className", b)
    },
    hasRel: function(a, b) {
      return $.hasAttrValue(a, "rel", b)
    },
    indexOf: function() {
      return Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b)
      } : function(a, b) {
        var c, d;
        for (c = 0, d = a.length; d > c; c++)
          if (a[c] === b) return c;
        return -1
      }
    }(),
    isArray: function(a) {
      return "array" === $.type(a)
    },
    isDefaultPrevented: function(a) {
      return a.isDefaultPrevented && a.isDefaultPrevented() || a.returnValue === !1 || a.defaultPrevented === !0
    },
    jsonp: function(a) {
      var b = document.getElementsByTagName("script")[0],
        c = $.createEl("script", {
          type: "text/javascript",
          src: a
        });
      b.parentNode.insertBefore(c, b)
    },
    map: function(a, b) {
      var c = [];
      return $.each(a, function(a, d) {
        void 0 !== a && (c[d] = b(a))
      }), c
    },
    on: function() {
      var a;
      return function(b, c, d) {
        var e, f;
        if (1 === arguments.length) return void(a = b);
        if (2 === arguments.length) {
          if (!a) return;
          d = c, c = b, b = a
        }
        try {
          e = b["on" + c]
        } catch (g) {}
        "function" == typeof e && (b["on" + c] = $.bind(function(a) {
          a = a || window.event;
          var c = e.apply(b, arguments);
          this.exceptionLogger(function() {
            return a ? (void 0 !== c && a.returnValue !== !1 && (a.returnValue = c), $.isDefaultPrevented(a) && "function" === $.type(a.preventDefault) && a.preventDefault(), a.returnValue) : c
          })()
        }, this)), f = $.exceptionLogger(function() {
          return a.enabled() ? d.apply(null, arguments) : void 0
        }), b.addEventListener ? b.addEventListener(c, f, !1) : b.attachEvent && b.attachEvent("on" + c, f)
      }
    }(),
    position: function(a) {
      var b, c = 0,
        d = 0,
        e = 0,
        f = 0;
      if (!a.offsetParent) return !1;
      b = a;
      do c += b.offsetLeft, d += b.offsetTop, b = b.offsetParent; while (b);
      b = a;
      do e += b.scrollLeft, f += b.scrollTop, b = b.parentNode; while (b && b !== document.body);
      return {
        x: c - e,
        y: d - f
      }
    },
    preventDefault: function(a) {
      return a.preventDefault && a.preventDefault(), a.returnValue = !1, !1
    },
    ready: function() {
      var a, b, c, d, e, f = !1,
        g = [],
        h = !1;
      return document.addEventListener ? c = function() {
          document.removeEventListener("DOMContentLoaded", c, !1), e()
        } : document.attachEvent && (d = function() {
          "complete" === document.readyState && (document.detachEvent("onreadystatechange", d), e())
        }), a = function() {
          if (!f) {
            if (f = !0, "complete" === document.readyState) return e();
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", c, !1);
            else if (document.attachEvent) {
              document.attachEvent("onreadystatechange", d);
              var a = !1;
              try {
                a = null === window.frameElement
              } catch (g) {}
              document.documentElement.doScroll && a && b()
            }
            $.on(window, "load", e)
          }
        }, b = function() {
          if (!h) {
            try {
              document.documentElement.doScroll("left")
            } catch (a) {
              return void setTimeout($.exceptionLogger(b), 1)
            }
            e()
          }
        }, e = function() {
          if (!h) {
            if (!document.body) return setTimeout($.exceptionLogger(e), 13);
            h = !0, g && ($.each(g, function(a) {
              a()
            }), g = null)
          }
        },
        function(b) {
          a(), h ? b() : g.push(b)
        }
    }(),
    reformatKeys: function(a) {
      var b, c, d = function(a) {
        return "_" + a.toLowerCase()
      };
      for (b in a) c = b.replace(/([A-Z])/g, d), "object" === $.type(a[b]) && (a[b] = $.reformatKeys(a[b])), c !== b && (a[c] = a[b], delete a[b]);
      return a
    },
    removeClass: function(a, b) {
      if ($.hasClass(a, b)) {
        var c, d, e = $.attrValues(a, "className");
        for (c = 0, d = e.length; d > c; c++) e[c] === b && delete e[c];
        a.className = e.join(" ")
      }
    },
    request: function(a, b, c) {
      var d, e;
      return c = $.extend({
        fn: function() {},
        "return": !1,
        timeout: null
      }, c), "string" == typeof c.fn ? b = $.extend(b, {
        jsonp: c.fn
      }) : "function" == typeof c.fn && (d = $.destructing(c.fn), e = $.uniqid("vglnk_jsonp_"), b = $.extend(b, {
        jsonp: e
      }), window[e] = $.exceptionLogger(function() {
        d.apply(this, arguments), window[e] = void 0
      }), null !== c.timeout && setTimeout($.exceptionLogger(d), c.timeout)), b = $.extend({
        format: "jsonp"
      }, b), b = $.toQuery(b), a = a + (b.length ? "?" : "") + b, c["return"] ? a : $.traits.cors ? $.cors(a) : $.jsonp(a)
    },
    toQuery: function(a) {
      var b, c = "";
      for (b in a) null !== a[b] && void 0 !== a[b] && (c += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(a[b]));
      return c.substr(1)
    },
    type: function(a) {
      return null === a ? "null" : void 0 === a ? "undefined" : Object.prototype.toString.call(a).slice(8, -1).toLowerCase()
    },
    updateUrl: function(a, b) {
      return $.extend($.createA(a), b).href
    },
    uniqid: function() {
      var a = 0;
      return function(b) {
        return (b || "") + (new Date).getTime() + a++
      }
    }()
  }), $.traits = {
    basicCompatibility: !($.browser.blackberry || $.browser.playstation),
    cors: window.XMLHttpRequest && void 0 !== (new window.XMLHttpRequest).withCredentials,
    crossWindowCommunication: !($.browser.ios && $.browser.version && ($.browser.version < 5 || $.browser.version > 5)),
    jsRedirectSetsReferrer: $.browser.aol || !($.browser.ie || $.browser.opera),
    quirksMode: !Boolean(window.addEventListener),
    windowLevelHandlers: Boolean(window.addEventListener)
  };
  var opts, scope, self, viglink;
  viglink = {
    api: function(a, b, c) {
      var d = opts.api_url + "/" + a;
      return b = $.extend({
        cuid: opts.cuid,
        key: opts.key,
        drKey: opts.key ? null : opts.dr_key,
        loc: location.href,
        subId: opts.sub_id,
        v: 1
      }, b), b.subId && b.key !== opts.key && (b.subId = null), $.request(d, b, c)
    },
    addEventListener: function(a, b) {
      this.fire(a, b)
    },
    click: function() {
      var a = function(a, b) {
          if (!("_self" === b || $.traits.crossWindowCommunication && $.traits.jsRedirectSetsReferrer)) return "go";
          try {
            if (void 0 === a.document) throw !0;
            return "jsonp"
          } catch (c) {
            return "go"
          }
        },
        b = function(a) {
          if ("_self" === a) return window.self;
          if ($.traits.crossWindowCommunication && $.traits.jsRedirectSetsReferrer) {
            var b = window.open("", a);
            return b.focus(), b
          }
        },
        c = function(a) {
          var b, c = a.previousSibling,
            d = a.nextSibling,
            e = ["", a.textContent, ""],
            f = 10,
            g = function(a, b, c) {
              var d = function(a) {
                return a.replace(/\s+/g, " ")
              };
              return a = d(a), b = d(b), c = d(c), a = a.replace(/^\s+/, ""), " " === b.substr(0, 1) && (b = b.substr(1), a += " " !== a.substr(a.length - 1, 1) ? " " : ""), " " === b.substr(b.length - 1, 1) && (b = b.substr(0, b.length - 1), c = (" " !== c.substr(0, 1) ? " " : "") + c), c = c.replace(/\s+$/, ""), [a, b, c]
            };
          void 0 !== e[1] && (e[0] = c && 3 === c.nodeType ? c.data : "", e[2] = d && 3 === d.nodeType ? d.data : "", e = g.apply(this, e), "" !== e[0] && "" !== e[2] && (e[0] = e[0].split(" ").reverse().slice(0, f + (" " === e[0].substr(e[0].length - 1, 1) ? 1 : 0)).reverse().join(" "), e[2] = e[2].split(" ").slice(0, f).join(" "), b = {
            type: "context",
            itype: ($.cache(a, "params") || {}).type,
            before: e[0],
            after: e[2],
            txt: e[1],
            loc: location.href,
            out: a.href,
            v: 2
          }, viglink.log("info", $.toQuery(b))))
        };
      return function(d, e) {
        e = d.target || e, e = !e || e === window.name || "_top" === e && window.top === window.self || "_parent" === e && window.parent === window.self ? "_self" : e;
        var f, g, h = b(e),
          i = a(h, e);
        if (f = $.destructing($.bind(function() {
            opts.time_click && arguments.length && this.logTime("clk");
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d, h, e), this.onApiClick.apply(this, a)
          }, this)), $.cache(this, "link", "string" == typeof d ? d : d.href), "string" == typeof d && (d = $.createA(d, e), !this.preprocessLink(d))) return f();
        if (!opts.enabled) return f();
        if (g = this.clickParams(d, i), this.logTime(), opts.log_context && c(d), "go" === i) this.redirect(this.api("click", g, {
          "return": !0
        }), h, e);
        else if (h === window.self) this.api("click", g, {
          fn: f,
          timeout: opts.click_timeout
        });
        else {
          if ($.contextIsAncestor(h)) return this.redirect(d.href, h, e);
          f = $.exceptionLogger(f), setTimeout(function() {
            f()
          }, opts.click_timeout), h.document.open(), h.callback = f, h.document.write("<html><head><title>" + d.href + '</title><script type="text/javascript" src="' + this.api("click", g, {
            fn: "callback",
            "return": !0
          }) + '"></script></head></html>'), h.document.close()
        }
      }
    }(),
    clickParams: function(a, b) {
      var c = $.extend($.cache(a, "params"), {
        format: b,
        libid: opts.library_id,
        out: a.href,
        ref: document.referrer || null,
        reaf: opts.reaffiliate || null,
        title: document.title,
        txt: a.innerHTML
      });
      return c.txt.length > 128 && (c.txt = c.txt.replace(/<[^>]+>/g, ""), c.txt = c.txt.length > 128 ? c.txt.substr(0, 125) + "..." : c.txt), c
    },
    enabled: function() {
      return opts.enabled && scope !== window && window.vglnk && (window.vglnk.key || "function" == typeof window.vglnk) && (opts.enabled = !1), opts.enabled
    },
    expose: function(a, b) {
      b = b || this[a], b && ("function" == typeof b ? b = $.exceptionLogger($.bind(b, this)) : "object" == typeof b && (b = $.clone(b)), self[a] || (self[a] = b))
    },
    fire: function() {
      var a = {};
      return function(b, c) {
        b = b.toLowerCase();
        var d = a[b] || {
            fired: !1,
            listeners: []
          },
          e = function(a) {
            a({
              type: b
            })
          };
        "function" == typeof c ? d.fired ? e(c) : d.listeners.push(c) : (d.fired = !0, $.each(d.listeners, function(a) {
          "function" == typeof a && e(a)
        }), d.listeners = []), a[b] = d
      }
    }(),
    handleRightClick: function(a, b) {
      if (opts.rewrite_modified && a && b) switch (b) {
        case "setup":
          $.cache(a, "href") || $.cache(a, "href", a.href), a.href = this.api("click", this.clickParams(a, "go"), {
            "return": !0
          }), setTimeout($.exceptionLogger($.bind(function() {
            this.handleRightClick(a, "teardown")
          }, this)), 0);
          break;
        case "teardown":
          a.href = $.cache(a, "href"), $.cache(a, "href", null)
      }
    },
    harmony: function() {
      return $.harmony = {
          UNSAFE_QUIRKSMODE_HANDLERS: 1
        },
        function(a) {
          return opts.harmony_level < a
        }
    }(),
    init: $.exceptionLogger(function() {
      this.initLibEvents(), this.initNamespace(), this.initOptions(), $.exceptionLogger($.bind(this.logException, this), !opts.dev), this.initDRApi(), this.initApi(), this.enabled() && (this.initLegacyCallbacks(), this.ping())
    }),
    initApi: function() {
      var a, b = {};
      if (window.vglnk)
        for (a in window.vglnk) "_plugin" === a.substr(-7) && (b[a] = window.vglnk[a]);
      self = scope[self_name] = function() {}, this.expose("click"), this.expose("link", viglink.preprocessLink), this.expose("opt"), this.expose("$", $.clone($)), $.extend(self, self === window.vglnk ? b : {})
    },
    initDRApi: function() {
      var a = !1;
      window.DrivingRevenue = $.exceptionLogger($.destructing($.bind(function() {
        a = !0, opts.dr_key = window.DR_id, this.enabled() && this.ping()
      }, this))), $.on("DOMReady", function() {
        if (!a) try {
          delete window.DrivingRevenue
        } catch (b) {
          window.DrivingRevenue = void 0
        }
      })
    },
    initLibEvents: function() {
      $.on(viglink), $.ready($.bind(function() {
        this.fire("DOMReady")
      }, this))
    },
    initNamespace: function() {
      window.vglnk && window.vglnk.key && (self_name = "vglnk");
      var a, b = window,
        c = self_name.split(".");
      for (self_name = c.pop(); c.length > 0;) a = c.shift(), b[a] = b[a] || {}, b = b[a];
      scope = b, self = scope[self_name] = scope[self_name] || {}
    },
    initOptions: function() {
      var a;
      this.initLegacyOptions(), opts = $.extend(this.publicOptions({
        api_url: "//api.viglink.com/api",
        cuid: null,
        dev: !1,
        dr_key: null,
        enabled: $.traits.basicCompatibility,
        key: null,
        partner: null,
        sub_id: null,
        reaffiliate: !1,
        harmony_level: 0,
        rewrite_original: !0,
        rewrite_modified: !1
      }), opts, self, {
        click_timeout: 1e3,
        hop_timeout: 2e3,
        debug: !1,
        library_id: null,
        log_context: !0,
        nofollow: {},
        norewrite: {},
        plugins: {
          link_affiliation: {},
          modified_clicks: {}
        },
        swap: {},
        time_click: !1,
        time_ping: !1
      });
      for (a in opts) "_plugin" === a.substr(-7) && delete opts[a]
    },
    initLegacyOptions: function() {
      var a, b = {
        DR_id: "dr_key",
        vglnk_api_key: "key",
        vglnk_cuid: "cuid",
        vglnk_domain: "api_url",
        vglnk_reaf: "reaffiliate",
        vglnk_subid: "sub_id"
      };
      for (a in b) void 0 !== window[a] && (self[b[a]] = window[a], "vglnk_domain" === a && (self[b[a]] += "/api"))
    },
    initLegacyCallbacks: function() {
      var a, b = {
        vl_cB: $.bind(this.onApiClick, this),
        vl_disable: function() {
          opts.enabled = !1
        }
      };
      for (a in b) window[a] = b[a]
    },
    initLinks: function() {
      $.each(document.links, $.bind(this.preprocessLink, this))
    },
    initPlugins: function() {
      var a, b = 100,
        c = 5e3,
        d = 1,
        e = [],
        f = function() {
          var g = [],
            h = function(a) {
              return function() {
                if (a) {
                  var b = Array.prototype.slice.call(arguments);
                  b.unshift("custom", a), viglink.log.apply(this, b)
                }
              }
            };
          a = null, $.each(e, function(a) {
            var b, c, d = a[0],
              e = a[1],
              f = a[2],
              i = window.vglnk && window.vglnk[d + "_plugin"];
            i ? (b = "function" === $.type(i.run) ? i.run : i, c = "function" === $.type(i.setup) ? i.setup : null, e && 1 === e.mode ? (c && c(e, $.clone($), self, h(e.key)), delete e.mode) : b && (c && !f && c(e, $.clone($), self, h(e.key)), b(e, $.clone($), self, h(e.key)))) : g.push(a)
          }), e = g, e.length > 0 && (a = setTimeout($.exceptionLogger(f), Math.min(Math.max(Math.pow(2, ++d), b), c)))
        },
        g = function(b, c) {
          return function(b, c) {
            return function() {
              e.push([b, c, !0]), d = 1, clearTimeout(a), f()
            }
          }(b, c)
        };
      return function(a) {
        var b;
        for (b in a) "object" == typeof a[b] && a[b].enabled !== !1 && (e.push([b, a[b]]), 1 === a[b].mode && this.expose("init_" + b, g(b, a[b])));
        f()
      }
    }(),
    isRewritable: function() {
      var a = $.canonicalizeHostname(document.location);
      return function(b) {
        var c, d = "";
        try {
          c = b.hostname, d = b.protocol, c.charAt(0)
        } catch (e) {
          return !1
        }
        return "" !== c && (c = $.canonicalizeHostname(b)), !("" === c || a === c || !d.match(/^https?:$/i) || opts.norewrite[c] || !opts.rewrite_original && !$.cache(b, "type") || $.hasRel(b, "norewrite") || $.hasRel(b, "noskim"))
      }
    }(),
    initEvents: $.destructing(function() {
      var a = $.traits.windowLevelHandlers ? window : document;
      $.on(a, "mousedown", function(a) {
        a = a || window.event;
        var b = $.eventLink(a);
        b && !$.cache(b, "evented") && ($.on(b, "click", function(a) {}), $.cache(b, "evented", !0))
      }), (!$.traits.quirksMode || viglink.harmony($.harmony.UNSAFE_QUIRKSMODE_HANDLERS)) && ($.on(a, "click", $.bind(viglink.onClick, viglink)), $.on(a, "contextmenu", $.bind(viglink.onContextmenu, viglink)))
    }),
    log: function(a, b, c, d) {
      var e, f, g = $.toQuery({
          nocache: $.uniqid()
        }),
        h = "pixel.gif";
      if ("custom" === a) f = b, a = c, g += "&" + $.toQuery({
        key: f,
        type: a
      }), $.each("array" === $.type(d) ? d : [d], function(a) {
        $.each(["e", "i", "o"], function(b) {
          delete a[b]
        }), g += "&" + $.toQuery(a)
      });
      else {
        if (g += "&" + $.toQuery({
            key: opts.key,
            drKey: opts.key ? null : opts.dr_key
          }), "time" === a) h = "time.gif", e = {
          libId: opts.library_id,
          time: c,
          type: b
        };
        else if ("exception" === a) e = {
          e: b,
          o: c
        };
        else {
          if ("info" !== a) return;
          e = {
            i: b
          }
        }
        g += "&" + $.toQuery(e)
      }
      $.createEl("img").src = opts.api_url + "/" + h + "?" + g
    },
    logException: function(a) {
      if (opts.debug) {
        var b = {
          link: $.cache(this, "link"),
          loc: document.location.href,
          UA: navigator.userAgent
        };
        "string" == typeof a ? b.message = a : b = $.extend(b, a), this.log("exception", a, $.toQuery(b))
      }
    },
    logTime: function() {
      var a;
      return function(b) {
        0 === arguments.length ? a = (new Date).getTime() : this.log("time", b, (new Date).getTime() - a)
      }
    }(),
    onApiClick: function(a, b, c, d, e) {
      var f, g = d || a.href,
        h = $.bind(function() {
          this.redirect(g, b, c)
        }, this);
      "object" == typeof e && (e.tracking || e.image) ? (f = $.createEl(e.tracking ? "iframe" : "img", {
        src: e.tracking || e.image
      }, {
        height: 0,
        width: 0,
        visibility: "hidden"
      }), document.body.appendChild(f), setTimeout($.exceptionLogger(h), e.timeout || opts.hop_timeout)) : h()
    },
    onApiPing: function(a, b, c, d, e, f) {
      opts.rewrite_original = !1, e = $.reformatKeys(e || {});
      var g, h, i;
      h = function(a) {
        var b = {},
          c = function(a) {
            $.isArray(a) ? b[a[0]] = a[1] : b[a] = 1
          };
        return $.isArray(a) && $.each(a, c), b
      }, i = $.extend(opts.plugins, e.plugins), opts = $.extend(opts, e), delete opts.plugins, opts.library_id = a, opts.click_timeout = b, opts.time_ping && this.logTime("png"), $.extend(opts.norewrite, h(c)), $.extend(opts.swap, h(d)), $.extend(opts.nofollow, h(f));
      for (g in opts) "on" === g.toLowerCase().substr(0, 2) && g.length > 2 && "function" === $.type(opts[g]) && ($.on(viglink, g.toLowerCase().substr(2), $.bind(opts[g], window)), delete opts[g]);
      this.initPlugins(i), this.initLinks(), this.initEvents(), this.fire("libready")
    },
    onClick: function(a) {
      a = a || window.event;
      var b = a.ctrlKey || a.metaKey || a.altKey || a.shiftKey,
        c = a.which && 1 === a.which || 0 === a.button,
        d = $.eventLink(a);
      if (d && this.isRewritable(d) && !b && c && !$.isDefaultPrevented(a)) return this.click(d), $.preventDefault(a)
    },
    onContextmenu: function(a) {
      var b = $.eventLink(a || window.event);
      b && this.isRewritable(b) && this.handleRightClick(b, "setup")
    },
    opt: function(a, b) {
      return void 0 !== b && void 0 !== this.publicOptions()[a] && (opts[a] = b), opts[a]
    },
    ping: function() {
      var a = !1;
      return function() {
        a || !opts.key && !opts.dr_key || (a = !0, this.logTime(), this.api("ping", null, {
          fn: $.bind(this.onApiPing, this)
        }))
      }
    }(),
    preprocessLink: function(a) {
      if (this.isRewritable(a)) {
        var b, c = $.createA(opts.api_url);
        return "/api/click" != a.pathname || a.hostname != c.hostname && !a.hostname.match(/(^|\.)(api|cdn|apicdn)\.viglink\.com$/) || (b = $.fromQuery(a.search), void 0 !== b.out && (a.href = b.out, delete b.out, $.cache(a, "params", b))), opts.swap[a.href] && (a.href = opts.swap[a.href]), opts.nofollow[a.href] && !$.hasRel(a, "nofollow") && (a.rel = (a.rel ? a.rel + " " : "") + "nofollow"), window.IPBoard && window.IPBoard.prototype && window.IPBoard.prototype.delegate && $.hasRel(a, "external") && (a.rel = a.rel.replace(/(^| )external( |$)/, ""), a.target = "_blank"), a
      }
    },
    publicOptions: function() {
      var a = {};
      return function(b) {
        return "object" === $.type(b) && (a = b), $.extend({}, a)
      }
    }(),
    redirect: function(a, b, c) {
      var d, e;
      $.traits.crossWindowCommunication || b ? $.traits.jsRedirectSetsReferrer ? setTimeout($.exceptionLogger(function() {
        b && b !== window.self ? $.contextIsAncestor(b) ? b.location = a : b.location.replace(a) : window.location = a
      }), 0) : ("_blank" === c && (c = $.uniqid("win_")), d = $.createA(a, c), d.rel = "norewrite", document.body.appendChild(d), d.click(), d.parentNode.removeChild(d)) : (e = window.open(a, c), e.focus())
    }
  }, viglink.init()
}("undefined" == typeof vglnk_self ? "vglnk" : vglnk_self), window.vglnk = window.vglnk || {}, window.vglnk.link_affiliation_plugin = {
  run: function(a, b, c) {
    c.opt("rewrite_original", !0)
  }
}, window.vglnk = window.vglnk || {}, window.vglnk.modified_clicks_plugin = {
  run: function(a, b, c) {
    c.opt("rewrite_modified", !0)
  }
};
