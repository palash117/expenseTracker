// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/script.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "jKfF": [function (require, module, exports) {
    var E = {
      POSITIVE_EXPENSE: 1,
      NEGATIVE_EXPENSE: 2
    };
    module.exports = E;
  }, {}],
  "ap6O": [function (require, module, exports) {
    function t(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function e(t, e) {
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }

    function n(t, n, a) {
      return n && e(t.prototype, n), a && e(t, a), t;
    }

    var a = require("./expenseType"),
        s = function () {
      function e(n, a, s, i, o, r) {
        t(this, e), this.amount = n, this.message = a, this.type = s, this.id = i, this.createDate = null == o ? new Date().getTime() : o, this.deleted = 1 == r;
      }

      return n(e, [{
        key: "toHTML",
        value: function value() {
          var t = this.type == a.NEGATIVE_EXPENSE ? "negative" : "possitive";
          return '<tr class="transactionRow"><td class="delete" idValue="'.concat(this.id, '"></td><td class="transactionAmount ').concat(t, '">').concat(this.amount, '</td><td class="transactionMessage"><span>').concat(this.message, "</span></td></tr>");
        }
      }]), e;
    }();

    module.exports = s;
  }, {
    "./expenseType": "jKfF"
  }],
  "cT7V": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
        t = new Uint8Array(16);

    function o() {
      if (!e) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return e(t);
    }
  }, {}],
  "Qdkx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    for (var e = [], r = 0; r < 256; ++r) {
      e.push((r + 256).toString(16).substr(1));
    }

    function t(r, t) {
      var o = t || 0,
          s = e;
      return (s[r[o + 0]] + s[r[o + 1]] + s[r[o + 2]] + s[r[o + 3]] + "-" + s[r[o + 4]] + s[r[o + 5]] + "-" + s[r[o + 6]] + s[r[o + 7]] + "-" + s[r[o + 8]] + s[r[o + 9]] + "-" + s[r[o + 10]] + s[r[o + 11]] + s[r[o + 12]] + s[r[o + 13]] + s[r[o + 14]] + s[r[o + 15]]).toLowerCase();
    }

    var o = t;
    exports.default = o;
  }, {}],
  "nQZ2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e,
        r,
        o = u(require("./rng.js")),
        s = u(require("./bytesToUuid.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = 0,
        t = 0;

    function a(u, a, d) {
      var l = a && d || 0,
          c = a || [],
          i = (u = u || {}).node || e,
          v = void 0 !== u.clockseq ? u.clockseq : r;

      if (null == i || null == v) {
        var f = u.random || (u.rng || o.default)();
        null == i && (i = e = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), null == v && (v = r = 16383 & (f[6] << 8 | f[7]));
      }

      var q = void 0 !== u.msecs ? u.msecs : Date.now(),
          m = void 0 !== u.nsecs ? u.nsecs : t + 1,
          p = q - n + (m - t) / 1e4;
      if (p < 0 && void 0 === u.clockseq && (v = v + 1 & 16383), (p < 0 || q > n) && void 0 === u.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      n = q, t = m, r = v;

      var _ = (1e4 * (268435455 & (q += 122192928e5)) + m) % 4294967296;

      c[l++] = _ >>> 24 & 255, c[l++] = _ >>> 16 & 255, c[l++] = _ >>> 8 & 255, c[l++] = 255 & _;
      var j = q / 4294967296 * 1e4 & 268435455;
      c[l++] = j >>> 8 & 255, c[l++] = 255 & j, c[l++] = j >>> 24 & 15 | 16, c[l++] = j >>> 16 & 255, c[l++] = v >>> 8 | 128, c[l++] = 255 & v;

      for (var k = 0; k < 6; ++k) {
        c[l + k] = i[k];
      }

      return a || (0, s.default)(c);
    }

    var d = a;
    exports.default = d;
  }, {
    "./rng.js": "cT7V",
    "./bytesToUuid.js": "Qdkx"
  }],
  "y1M0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.URL = exports.DNS = void 0;
    var r = e(require("./bytesToUuid.js"));

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function t(r) {
      var e = [];
      return r.replace(/[a-fA-F0-9]{2}/g, function (r) {
        e.push(parseInt(r, 16));
      }), e;
    }

    function a(r) {
      r = unescape(encodeURIComponent(r));

      for (var e = [], t = 0; t < r.length; ++t) {
        e.push(r.charCodeAt(t));
      }

      return e;
    }

    var n = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = n;
    var o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";

    function u(e, u, s) {
      function f(e, n, o, f) {
        var c = o && f || 0;
        if ("string" == typeof e && (e = a(e)), "string" == typeof n && (n = t(n)), !Array.isArray(e)) throw TypeError("value must be an array of bytes");
        if (!Array.isArray(n) || 16 !== n.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
        var i = s(n.concat(e));
        if (i[6] = 15 & i[6] | u, i[8] = 63 & i[8] | 128, o) for (var d = 0; d < 16; ++d) {
          o[c + d] = i[d];
        }
        return o || (0, r.default)(i);
      }

      try {
        f.name = e;
      } catch (c) {}

      return f.DNS = n, f.URL = o, f;
    }

    exports.URL = o;
  }, {
    "./bytesToUuid.js": "Qdkx"
  }],
  "hNcK": [function (require, module, exports) {
    "use strict";

    function n(n) {
      if ("string" == typeof n) {
        var t = unescape(encodeURIComponent(n));
        n = new Uint8Array(t.length);

        for (var o = 0; o < t.length; ++o) {
          n[o] = t.charCodeAt(o);
        }
      }

      return r(e(u(n), 8 * n.length));
    }

    function r(n) {
      for (var r = [], t = 32 * n.length, e = 0; e < t; e += 8) {
        var u = n[e >> 5] >>> e % 32 & 255,
            o = parseInt("0123456789abcdef".charAt(u >>> 4 & 15) + "0123456789abcdef".charAt(15 & u), 16);
        r.push(o);
      }

      return r;
    }

    function t(n) {
      return 14 + (n + 64 >>> 9 << 4) + 1;
    }

    function e(n, r) {
      n[r >> 5] |= 128 << r % 32, n[t(r) - 1] = r;

      for (var e = 1732584193, u = -271733879, f = -1732584194, a = 271733878, v = 0; v < n.length; v += 16) {
        var s = e,
            d = u,
            p = f,
            g = a;
        e = c(e, u, f, a, n[v], 7, -680876936), a = c(a, e, u, f, n[v + 1], 12, -389564586), f = c(f, a, e, u, n[v + 2], 17, 606105819), u = c(u, f, a, e, n[v + 3], 22, -1044525330), e = c(e, u, f, a, n[v + 4], 7, -176418897), a = c(a, e, u, f, n[v + 5], 12, 1200080426), f = c(f, a, e, u, n[v + 6], 17, -1473231341), u = c(u, f, a, e, n[v + 7], 22, -45705983), e = c(e, u, f, a, n[v + 8], 7, 1770035416), a = c(a, e, u, f, n[v + 9], 12, -1958414417), f = c(f, a, e, u, n[v + 10], 17, -42063), u = c(u, f, a, e, n[v + 11], 22, -1990404162), e = c(e, u, f, a, n[v + 12], 7, 1804603682), a = c(a, e, u, f, n[v + 13], 12, -40341101), f = c(f, a, e, u, n[v + 14], 17, -1502002290), e = i(e, u = c(u, f, a, e, n[v + 15], 22, 1236535329), f, a, n[v + 1], 5, -165796510), a = i(a, e, u, f, n[v + 6], 9, -1069501632), f = i(f, a, e, u, n[v + 11], 14, 643717713), u = i(u, f, a, e, n[v], 20, -373897302), e = i(e, u, f, a, n[v + 5], 5, -701558691), a = i(a, e, u, f, n[v + 10], 9, 38016083), f = i(f, a, e, u, n[v + 15], 14, -660478335), u = i(u, f, a, e, n[v + 4], 20, -405537848), e = i(e, u, f, a, n[v + 9], 5, 568446438), a = i(a, e, u, f, n[v + 14], 9, -1019803690), f = i(f, a, e, u, n[v + 3], 14, -187363961), u = i(u, f, a, e, n[v + 8], 20, 1163531501), e = i(e, u, f, a, n[v + 13], 5, -1444681467), a = i(a, e, u, f, n[v + 2], 9, -51403784), f = i(f, a, e, u, n[v + 7], 14, 1735328473), e = h(e, u = i(u, f, a, e, n[v + 12], 20, -1926607734), f, a, n[v + 5], 4, -378558), a = h(a, e, u, f, n[v + 8], 11, -2022574463), f = h(f, a, e, u, n[v + 11], 16, 1839030562), u = h(u, f, a, e, n[v + 14], 23, -35309556), e = h(e, u, f, a, n[v + 1], 4, -1530992060), a = h(a, e, u, f, n[v + 4], 11, 1272893353), f = h(f, a, e, u, n[v + 7], 16, -155497632), u = h(u, f, a, e, n[v + 10], 23, -1094730640), e = h(e, u, f, a, n[v + 13], 4, 681279174), a = h(a, e, u, f, n[v], 11, -358537222), f = h(f, a, e, u, n[v + 3], 16, -722521979), u = h(u, f, a, e, n[v + 6], 23, 76029189), e = h(e, u, f, a, n[v + 9], 4, -640364487), a = h(a, e, u, f, n[v + 12], 11, -421815835), f = h(f, a, e, u, n[v + 15], 16, 530742520), e = l(e, u = h(u, f, a, e, n[v + 2], 23, -995338651), f, a, n[v], 6, -198630844), a = l(a, e, u, f, n[v + 7], 10, 1126891415), f = l(f, a, e, u, n[v + 14], 15, -1416354905), u = l(u, f, a, e, n[v + 5], 21, -57434055), e = l(e, u, f, a, n[v + 12], 6, 1700485571), a = l(a, e, u, f, n[v + 3], 10, -1894986606), f = l(f, a, e, u, n[v + 10], 15, -1051523), u = l(u, f, a, e, n[v + 1], 21, -2054922799), e = l(e, u, f, a, n[v + 8], 6, 1873313359), a = l(a, e, u, f, n[v + 15], 10, -30611744), f = l(f, a, e, u, n[v + 6], 15, -1560198380), u = l(u, f, a, e, n[v + 13], 21, 1309151649), e = l(e, u, f, a, n[v + 4], 6, -145523070), a = l(a, e, u, f, n[v + 11], 10, -1120210379), f = l(f, a, e, u, n[v + 2], 15, 718787259), u = l(u, f, a, e, n[v + 9], 21, -343485551), e = o(e, s), u = o(u, d), f = o(f, p), a = o(a, g);
      }

      return [e, u, f, a];
    }

    function u(n) {
      if (0 === n.length) return [];

      for (var r = 8 * n.length, e = new Uint32Array(t(r)), u = 0; u < r; u += 8) {
        e[u >> 5] |= (255 & n[u / 8]) << u % 32;
      }

      return e;
    }

    function o(n, r) {
      var t = (65535 & n) + (65535 & r);
      return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
    }

    function f(n, r) {
      return n << r | n >>> 32 - r;
    }

    function a(n, r, t, e, u, a) {
      return o(f(o(o(r, n), o(e, a)), u), t);
    }

    function c(n, r, t, e, u, o, f) {
      return a(r & t | ~r & e, n, r, u, o, f);
    }

    function i(n, r, t, e, u, o, f) {
      return a(r & e | t & ~e, n, r, u, o, f);
    }

    function h(n, r, t, e, u, o, f) {
      return a(r ^ t ^ e, n, r, u, o, f);
    }

    function l(n, r, t, e, u, o, f) {
      return a(t ^ (r | ~e), n, r, u, o, f);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var v = n;
    exports.default = v;
  }, {}],
  "DhOM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./v35.js")),
        r = t(require("./md5.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)("v3", 48, r.default),
        d = u;
    exports.default = d;
  }, {
    "./v35.js": "y1M0",
    "./md5.js": "hNcK"
  }],
  "hVBO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./rng.js")),
        r = t(require("./bytesToUuid.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u, n) {
      "string" == typeof t && (u = "binary" === t ? new Uint8Array(16) : null, t = null);
      var a = (t = t || {}).random || (t.rng || e.default)();

      if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, u) {
        for (var o = n || 0, i = 0; i < 16; ++i) {
          u[o + i] = a[i];
        }

        return u;
      }

      return (0, r.default)(a);
    }

    var n = u;
    exports.default = n;
  }, {
    "./rng.js": "cT7V",
    "./bytesToUuid.js": "Qdkx"
  }],
  "PBRp": [function (require, module, exports) {
    "use strict";

    function r(r, e, t, a) {
      switch (r) {
        case 0:
          return e & t ^ ~e & a;

        case 1:
          return e ^ t ^ a;

        case 2:
          return e & t ^ e & a ^ t & a;

        case 3:
          return e ^ t ^ a;
      }
    }

    function e(r, e) {
      return r << e | r >>> 32 - e;
    }

    function t(t) {
      var a = [1518500249, 1859775393, 2400959708, 3395469782],
          n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];

      if ("string" == typeof t) {
        var o = unescape(encodeURIComponent(t));
        t = [];

        for (var f = 0; f < o.length; ++f) {
          t.push(o.charCodeAt(f));
        }
      }

      t.push(128);

      for (var u = t.length / 4 + 2, s = Math.ceil(u / 16), c = new Array(s), v = 0; v < s; ++v) {
        for (var h = new Uint32Array(16), i = 0; i < 16; ++i) {
          h[i] = t[64 * v + 4 * i] << 24 | t[64 * v + 4 * i + 1] << 16 | t[64 * v + 4 * i + 2] << 8 | t[64 * v + 4 * i + 3];
        }

        c[v] = h;
      }

      c[s - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), c[s - 1][14] = Math.floor(c[s - 1][14]), c[s - 1][15] = 8 * (t.length - 1) & 4294967295;

      for (var l = 0; l < s; ++l) {
        for (var p = new Uint32Array(80), d = 0; d < 16; ++d) {
          p[d] = c[l][d];
        }

        for (var g = 16; g < 80; ++g) {
          p[g] = e(p[g - 3] ^ p[g - 8] ^ p[g - 14] ^ p[g - 16], 1);
        }

        for (var w = n[0], y = n[1], M = n[2], A = n[3], x = n[4], U = 0; U < 80; ++U) {
          var C = Math.floor(U / 20),
              _ = e(w, 5) + r(C, y, M, A) + x + a[C] + p[U] >>> 0;

          x = A, A = M, M = e(y, 30) >>> 0, y = w, w = _;
        }

        n[0] = n[0] + w >>> 0, n[1] = n[1] + y >>> 0, n[2] = n[2] + M >>> 0, n[3] = n[3] + A >>> 0, n[4] = n[4] + x >>> 0;
      }

      return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var a = t;
    exports.default = a;
  }, {}],
  "UVmZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./v35.js")),
        r = t(require("./sha1.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)("v5", 80, r.default),
        s = u;
    exports.default = s;
  }, {
    "./v35.js": "y1M0",
    "./sha1.js": "PBRp"
  }],
  "Lz3t": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "v1", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "v3", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "v4", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "v5", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    });
    var e = n(require("./v1.js")),
        r = n(require("./v3.js")),
        t = n(require("./v4.js")),
        u = n(require("./v5.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./v1.js": "nQZ2",
    "./v3.js": "DhOM",
    "./v4.js": "hVBO",
    "./v5.js": "UVmZ"
  }],
  "m33K": [function (require, module, exports) {
    function n(_n, e) {
      var r;

      if ("undefined" == typeof Symbol || null == _n[Symbol.iterator]) {
        if (Array.isArray(_n) || (r = t(_n)) || e && _n && "number" == typeof _n.length) {
          r && (_n = r);

          var a = 0,
              i = function i() {};

          return {
            s: i,
            n: function n() {
              return a >= _n.length ? {
                done: !0
              } : {
                done: !1,
                value: _n[a++]
              };
            },
            e: function e(n) {
              throw n;
            },
            f: i
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var o,
          s = !0,
          c = !1;
      return {
        s: function s() {
          r = _n[Symbol.iterator]();
        },
        n: function n() {
          var n = r.next();
          return s = n.done, n;
        },
        e: function e(n) {
          c = !0, o = n;
        },
        f: function f() {
          try {
            s || null == r.return || r.return();
          } finally {
            if (c) throw o;
          }
        }
      };
    }

    function t(n, t) {
      if (n) {
        if ("string" == typeof n) return e(n, t);
        var r = Object.prototype.toString.call(n).slice(8, -1);
        return "Object" === r && n.constructor && (r = n.constructor.name), "Map" === r || "Set" === r ? Array.from(n) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(n, t) : void 0;
      }
    }

    function e(n, t) {
      (null == t || t > n.length) && (t = n.length);

      for (var e = 0, r = new Array(t); e < t; e++) {
        r[e] = n[e];
      }

      return r;
    }

    function r(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function a(n, t) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
      }
    }

    function i(n, t, e) {
      return t && a(n.prototype, t), e && a(n, e), n;
    }

    var o = require("./transaction"),
        s = require("./expenseType"),
        c = require("uuid"),
        u = c.v4,
        l = function () {
      function t(n) {
        r(this, t), this.testMode = "test" == n, this.transactionList = [], this.id = 0;
      }

      return i(t, [{
        key: "addTransaction",
        value: function value(n, t) {
          if (isNaN(n)) throw "transaction amount not a number ".concat(n);
          if (0 == n) throw "transaction amount 0 ".concat(n);
          var e = n > 0 ? s.POSITIVE_EXPENSE : s.NEGATIVE_EXPENSE;
          n = Math.abs(n);
          var r = new o(n, t, e, this.testMode ? "1234" : u());
          this.transactionList.push(r);
        }
      }, {
        key: "getTransactions",
        value: function value() {
          return this.transactionList;
        }
      }, {
        key: "toHTML",
        value: function value() {
          var n = this.transactionList.filter(function (n) {
            return !n.deleted;
          }).map(function (n) {
            return n.toHTML();
          }).reduce(function (n, t) {
            return n + t;
          }, "");
          return '<table class="transactionTable">'.concat(n, "</table>");
        }
      }, {
        key: "completeAccountHTML",
        value: function value() {
          this.getBallance();
          return '<div class="ballanceContainer">\n                    <div class="ballanceMessage">\n                        your current ballance\n                    </div>\n                    <div class="ballance">\n                        <span class="money"><h3>'.concat(this.getBallance(), '</h3></span>\n                    </div>\n                    <div class="incomeVsExpenseContainer">\n                        <div class="ieContainer">\n                            <span class="money possitive">').concat(this.getPossitiveBallance(), '</span>\n                        </div>\n                        <div class="ieContainer">\n                            <span class="money negative">').concat(this.getNegativeBallance(), '</span>\n                        </div>\n                    </div>\n                </div>\n                <div class="transactionContainer">\n                    <div class="transactionMainMessage">\n                        <h5>your transactions</h5>\n                    </div>\n                    <div class="transactionList">\n                        ').concat(this.toHTML(), "\n                    </div>\n                </div>");
        }
      }, {
        key: "getBallance",
        value: function value() {
          return this.transactionList.filter(function (n) {
            return !n.deleted;
          }).map(function (n) {
            return n.type == s.NEGATIVE_EXPENSE ? -n.amount : n.amount;
          }).reduce(function (n, t) {
            return n + t;
          }, 0);
        }
      }, {
        key: "getPossitiveBallance",
        value: function value() {
          return this.transactionList.filter(function (n) {
            return !n.deleted;
          }).filter(function (n) {
            return n.type == s.POSITIVE_EXPENSE;
          }).map(function (n) {
            return n.amount;
          }).reduce(function (n, t) {
            return n + t;
          }, 0);
        }
      }, {
        key: "getNegativeBallance",
        value: function value() {
          return this.transactionList.filter(function (n) {
            return !n.deleted;
          }).filter(function (n) {
            return n.type == s.NEGATIVE_EXPENSE;
          }).map(function (n) {
            return n.amount;
          }).reduce(function (n, t) {
            return n + t;
          }, 0);
        }
      }, {
        key: "serialize",
        value: function value() {
          return JSON.stringify(this.transactionList);
        }
      }, {
        key: "deSerialize",
        value: function value(t) {
          if (null != t && null != t && "" != t) {
            var e,
                r = n(JSON.parse(t));

            try {
              for (r.s(); !(e = r.n()).done;) {
                var a = e.value,
                    i = a.amount,
                    c = a.type,
                    u = a.message,
                    l = a.id,
                    f = a.createDate,
                    d = a.deleted,
                    v = 1 == c ? s.POSITIVE_EXPENSE : s.NEGATIVE_EXPENSE,
                    y = new o(i, u, v, l, f, d);
                this.transactionList.push(y);
              }
            } catch (h) {
              r.e(h);
            } finally {
              r.f();
            }
          }
        }
      }, {
        key: "deleteTransaction",
        value: function value(n) {
          this.transactionList.find(function (t) {
            return t.id == n;
          }).deleted = !0;
        }
      }]), t;
    }();

    module.exports = l;
  }, {
    "./transaction": "ap6O",
    "./expenseType": "jKfF",
    "uuid": "Lz3t"
  }],
  "mpVp": [function (require, module, exports) {
    console.log("hello expense manager");

    var e,
        n,
        t,
        o,
        c,
        r,
        a = require("./modules/expenseManager"),
        u = "EXPENSE_MANAGER_KEY",
        i = function i() {
      l(), d(), m(), g(), s();
    },
        l = function l() {
      e = document.querySelector(".accountInfoContainer"), n = document.querySelector("#transactionTypeInput"), t = document.querySelector("#transactionDescriptionInput"), o = document.querySelector("#transactionAmountInput"), c = document.querySelector("#transactionSubmit");
    },
        d = function d() {
      c.addEventListener("click", f);
    },
        s = function s() {
      document.querySelectorAll(".delete").forEach(function (e) {
        return e.addEventListener("click", S);
      });
    },
        m = function m() {
      var e = localStorage.getItem(u);
      (r = new a()).deSerialize(e);
    },
        f = function f() {
      var e = n.value,
          c = o.value,
          a = t.value;
      1 != e && (c *= -1), r.addTransaction(c, a), setTimeout(v, 1), g(), s();
    },
        S = function S(e) {
      var n = e.target.getAttribute("idValue");
      r.deleteTransaction(n), g(), s();
    },
        v = function v() {
      localStorage.setItem(u, r.serialize());
    },
        g = function g() {
      e.innerHTML = r.completeAccountHTML();
    };

    window.onload = i;
  }, {
    "./modules/expenseManager": "m33K"
  }]
}, {}, ["mpVp"], null);
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54092" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/script.js"], null)
//# sourceMappingURL=/script.834ed2f9.js.map