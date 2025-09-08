/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/a2hs.js":
/*!******************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/a2hs.js ***!
  \******************************************************************************************************************/
/***/ (function() {

function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine2(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var visitedPages = JSON.parse(sessionStorage.getItem("visitedPages")) || [];
var DELAYED_VISITS = 2;
var deferredPrompt = null;
var shouldCountVisitedPages = function shouldCountVisitedPages() {
  return sessionStorage.getItem("userChoice") !== "dismissed" && visitedPages.length < DELAYED_VISITS && !visitedPages.includes(location.pathname);
};
var shouldPrompt = function shouldPrompt() {
  // Disable the application install prompt showing constantly.
  if (localStorage.getItem("pwaInstallPromptSeen")) {
    return false;
  }
  return deferredPrompt && sessionStorage.getItem("userChoice") !== "dismissed" && visitedPages.length >= DELAYED_VISITS;
};
window.addEventListener("beforeinstallprompt", function (event) {
  event.preventDefault();
  deferredPrompt = event;

  // allow the user browse through different locations before prompt them anything
  if (shouldCountVisitedPages()) {
    sessionStorage.setItem("visitedPages", JSON.stringify([].concat(_toConsumableArray(visitedPages), [location.pathname])));
  }
});

// to trigger the prompt, it must be a "user gesture"
window.addEventListener("click", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
    var _yield$deferredPrompt, outcome;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!shouldPrompt()) {
            _context.n = 2;
            break;
          }
          event.preventDefault();
          deferredPrompt.prompt();
          _context.n = 1;
          return deferredPrompt.userChoice;
        case 1:
          _yield$deferredPrompt = _context.v;
          outcome = _yield$deferredPrompt.outcome;
          // store the user choice to avoid asking again in the current session
          sessionStorage.setItem("userChoice", outcome);
          sessionStorage.removeItem("visitedPages");
          localStorage.setItem("pwaInstallPromptSeen", true);
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/index.js":
/*!*******************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/index.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/loader.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _a2hs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a2hs */ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/a2hs.js");
/* harmony import */ var _a2hs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_a2hs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _push_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./push-permissions */ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/push-permissions.js");
/* harmony import */ var _push_permissions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_push_permissions__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/loader.js":
/*!********************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/loader.js ***!
  \********************************************************************************************************************/
/***/ (function() {

function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine2(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
// check if the browser supports serviceWorker at all
window.addEventListener("load", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var mandatoryElements, isOperaMini;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        if (!("serviceWorker" in navigator)) {
          _context.n = 2;
          break;
        }
        _context.n = 1;
        return navigator.serviceWorker.register("/sw.js", {
          scope: "/"
        });
      case 1:
        mandatoryElements = document.querySelector(".js-sw-mandatory"); // Opera uses Opera for versions <= 12 and OPR for versions > 12
        isOperaMini = (navigator.userAgent.indexOf("OPR") > -1 || navigator.userAgent.indexOf("Opera") > -1) && navigator.userAgent.indexOf("Mini") > -1;
        if (mandatoryElements && isOperaMini) {
          mandatoryElements.classList.add("hide");
        }
        _context.n = 3;
        break;
      case 2:
        console.log("Your browser doesn't support service workers 🤷‍♀️");
      case 3:
        return _context.a(2);
    }
  }, _callee);
})));

/***/ }),

/***/ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/push-permissions.js":
/*!******************************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/push-permissions.js ***!
  \******************************************************************************************************************************/
/***/ (function() {

function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine2(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
window.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
  var GRANTED_PERMISSION, hideReminder, subscribeToNotifications, unsubscribeFromNotifications, setToggleState, toggle, registration;
  return _regenerator().w(function (_context5) {
    while (1) switch (_context5.n) {
      case 0:
        GRANTED_PERMISSION = "granted";
        hideReminder = function hideReminder() {
          var reminder = document.querySelector("#push-notifications-reminder");
          reminder.classList.add("hide");
        };
        subscribeToNotifications = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(registration) {
            var permission, vapidElement, vapidPublicKeyElement, subscription, _document$querySelect;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  _context.n = 1;
                  return window.Notification.requestPermission();
                case 1:
                  permission = _context.v;
                  if (!(registration && permission === GRANTED_PERMISSION)) {
                    _context.n = 4;
                    break;
                  }
                  vapidElement = document.querySelector("#vapidPublicKey"); // element could not exist in DOM
                  if (!vapidElement) {
                    _context.n = 3;
                    break;
                  }
                  vapidPublicKeyElement = JSON.parse(vapidElement.value);
                  _context.n = 2;
                  return registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: new Uint8Array(vapidPublicKeyElement)
                  });
                case 2:
                  subscription = _context.v;
                  if (!subscription) {
                    _context.n = 3;
                    break;
                  }
                  _context.n = 3;
                  return fetch("/notifications_subscriptions", {
                    headers: {
                      "Content-Type": "application/json",
                      "X-CSRF-Token": (_document$querySelect = document.querySelector("meta[name=csrf-token]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content
                    },
                    method: "POST",
                    body: JSON.stringify(subscription)
                  });
                case 3:
                  hideReminder();
                  _context.n = 5;
                  break;
                case 4:
                  throw new Error("Permission not granted for Notification");
                case 5:
                  return _context.a(2);
              }
            }, _callee);
          }));
          return function subscribeToNotifications(_x) {
            return _ref2.apply(this, arguments);
          };
        }();
        unsubscribeFromNotifications = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(registration) {
            var _document$querySelect2;
            var currentSubscription, auth;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  _context2.n = 1;
                  return registration.pushManager.getSubscription();
                case 1:
                  currentSubscription = _context2.v;
                  auth = currentSubscription.toJSON().keys.auth;
                  _context2.n = 2;
                  return fetch("/notifications_subscriptions/".concat(auth), {
                    headers: {
                      "Content-Type": "application/json",
                      "X-CSRF-Token": (_document$querySelect2 = document.querySelector("meta[name=csrf-token]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content
                    },
                    method: "DELETE"
                  });
                case 2:
                  return _context2.a(2);
              }
            }, _callee2);
          }));
          return function unsubscribeFromNotifications(_x2) {
            return _ref3.apply(this, arguments);
          };
        }();
        setToggleState = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(registration, toggle) {
            var currentSubscription, toggleChecked, auth, subKeys;
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  _context3.n = 1;
                  return registration.pushManager.getSubscription();
                case 1:
                  currentSubscription = _context3.v;
                  toggleChecked = false;
                  if (window.Notification.permission === GRANTED_PERMISSION) {
                    hideReminder();
                    if (currentSubscription) {
                      auth = currentSubscription.toJSON().keys.auth;
                      subKeys = JSON.parse(document.querySelector("#subKeys").value); // Subscribed && browser notifications enabled
                      if (subKeys.includes(auth)) {
                        toggleChecked = true;
                      }
                    }
                  }
                  toggle.checked = toggleChecked;
                case 2:
                  return _context3.a(2);
              }
            }, _callee3);
          }));
          return function setToggleState(_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }();
        if (!("serviceWorker" in navigator)) {
          _context5.n = 2;
          break;
        }
        toggle = document.getElementById("allow_push_notifications");
        if (!toggle) {
          _context5.n = 2;
          break;
        }
        _context5.n = 1;
        return navigator.serviceWorker.ready;
      case 1:
        registration = _context5.v;
        setToggleState(registration, toggle);
        toggle.addEventListener("change", /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_ref5) {
            var target;
            return _regenerator().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  target = _ref5.target;
                  if (!target.checked) {
                    _context4.n = 2;
                    break;
                  }
                  _context4.n = 1;
                  return subscribeToNotifications(registration);
                case 1:
                  _context4.n = 3;
                  break;
                case 2:
                  _context4.n = 3;
                  return unsubscribeFromNotifications(registration);
                case 3:
                  return _context4.a(2);
              }
            }, _callee4);
          }));
          return function (_x5) {
            return _ref6.apply(this, arguments);
          };
        }());
      case 2:
        return _context5.a(2);
    }
  }, _callee5);
})));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*********************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/entrypoints/decidim_sw.js ***!
  \*********************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_sw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/sw */ "../../.rbenv/versions/3.0.6/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/sw/index.js");

}();
/******/ })()
;
//# sourceMappingURL=decidim_sw.js.map