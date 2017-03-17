! function() {
  "use strict";
  var a = window.document,
    b = {
      STYLES: "https://a.disquscdn.com/next/embed/styles/lounge.e1507075be6435f232cb90056aae02d6.css",
      RTL_STYLES: "https://a.disquscdn.com/next/embed/styles/lounge_rtl.889013cc30388d4715dcdb2e8b378e4a.css",
      "lounge/main": "https://a.disquscdn.com/next/embed/lounge.bundle.140849e04173ca2c8d577886d3c71fa0.js",
      "discovery/main": "https://a.disquscdn.com/next/embed/discovery.bundle.c1279f7b6402d990698b3b99593a7fa9.js",
      "remote/config": "https://disqus.com/next/config.js",
      highlight: "https://a.disquscdn.com/next/embed/highlight.0faa05361b05582ff85f4eff7fda997e.js"
    };
  window.require = {
    baseUrl: "https://a.disquscdn.com/next/current/embed",
    paths: ["lounge/main", "discovery/main", "remote/config", "highlight"].reduce(function(a, c) {
      return a[c] = b[c].slice(0, -3), a
    }, {})
  };
  var c = a.createElement("link");
  c.rel = "prefetch";
  try {
    c.relList.supports("preload") && (c.rel = "preload")
  } catch (d) {}
  var e = function(b, d) {
    var e = c.cloneNode();
    return e.as = d || "script", e.pr = "1", e.href = b, a.head.appendChild(e), e
  };
  e(b["lounge/main"]), e(b["remote/config"]);
  var f = a.createElement("script");
  f.onload = function() {
    require(["common/main"], function(a) {
      a.init("lounge", b)
    })
  }, f.src = "https://a.disquscdn.com/next/embed/common.bundle.ff6a66b4d25701c70ed6c589fb1bfcf9.js", a.body.appendChild(f)
}();
