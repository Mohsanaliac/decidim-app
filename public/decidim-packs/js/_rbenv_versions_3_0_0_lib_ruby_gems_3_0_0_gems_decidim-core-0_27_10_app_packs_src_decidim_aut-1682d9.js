"use strict";
(self["webpackChunkdecidim_app"] = self["webpackChunkdecidim_app"] || []).push([["_rbenv_versions_3_0_0_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_10_app_packs_src_decidim_aut-1682d9"],{

/***/ "../../.rbenv/versions/3.0.0/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/autocomplete.js":
/*!***********************************************************************************************************************!*\
  !*** ../../.rbenv/versions/3.0.0/lib/ruby/gems/3.0.0/gems/decidim-core-0.27.10/app/packs/src/decidim/autocomplete.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoComplete; }
/* harmony export */ });
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
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
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/* eslint max-lines: ["error", 350] */


var AutoComplete = /*#__PURE__*/function () {
  function AutoComplete(el) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AutoComplete);
    this.element = el;
    this.stickySelectedSpan = null;
    this.clearStickySelectionSpan = null;
    this.stickyHiddenInput = null;
    this.promptDiv = null;
    var thresholdTemp = options.threshold || 2;
    this.options = Object.assign({
      // Defines name of the hidden input (e.g. assembly_member[user_id])
      name: null,
      // Placeholder of the visible input field
      placeholder: "",
      // Defines what happens after user has selected value from suggestions
      // sticky - Allows selecting a single value and not editing the value after selected (e.g. as the admin autocomplete fields)
      // single - Allows selecting a single value and editing the selected text after the selection (e.g. geocoding field)
      // multi - Allows selecting multiple values
      // null (default) - Disable selection event handling in this class
      mode: null,
      // Defines if we show input help (e.g. "Type at least three characters to search") or not.
      searchPrompt: false,
      // Defines search prompt message, only shown if showPrompt is enabled!
      searchPromptText: "Type at least ".concat(thresholdTemp, " characters to search"),
      // Defines items that are selected already when page is loaded before user selects them. (e.g. when form submit fails)
      selected: null,
      // Defines how many characters input has to have before we start searching
      threshold: thresholdTemp,
      // Defines how many results to show in the autocomplete selection list
      // by maximum.
      maxResults: 10,
      // Defines the data keys against which to match the user input when
      // searching through the results. For example, when the following
      // data is returned by the API:
      //   { id: 123, name: "John", nickname: "john", __typename: "User" }
      //
      // You can define the data keys array as ["name", "nickname"] in
      // which case the results shown to user would be only those that
      // have matching text in these defined fields.
      dataMatchKeys: null,
      // The data source is a method that gets the callback parameter as
      // its first argument which should be called with the results array
      // once they are returned by the API.
      // For example:
      //   (query, callback) => {
      //     (async () => {
      //       const results = await callAjax(`/api/url?query=${query}`);
      //       callback(results);
      //     })();
      //   }
      //
      // Signature: (callback: Function)
      dataSource: function dataSource() {
        return [];
      },
      // Filters the data list returned by the data source before it is shown
      // to the user. Can be used e.g. to hide already selected values from
      // the list.
      dataFilter: null,
      // Delay in milliseconds how long to wait after user action before
      // doing a backend request.
      delay: 200,
      // Allows modifying the suggested items before they are displayed in the list
      // Signature: (element: HTMLElement, value: Object)
      modifyResult: null
    }, options);
    this.autocomplete = new (_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default())({
      selector: function selector() {
        return _this.element;
      },
      diacritics: true,
      placeHolder: options.placeholder,
      // Delay (milliseconds) before autocomplete engine starts. It's preventing many queries when user is typing fast.
      debounce: 200,
      threshold: this.options.threshold,
      data: {
        keys: this.options.dataMatchKeys,
        src: function () {
          var _src = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(query) {
            var fetchResults, _t;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.p = _context.n) {
                case 0:
                  fetchResults = function fetchResults() {
                    return new Promise(function (resolve) {
                      _this.options.dataSource(query, resolve);
                    });
                  };
                  _context.p = 1;
                  _context.n = 2;
                  return fetchResults();
                case 2:
                  return _context.a(2, _context.v);
                case 3:
                  _context.p = 3;
                  _t = _context.v;
                  return _context.a(2, _t);
              }
            }, _callee, null, [[1, 3]]);
          }));
          function src(_x) {
            return _src.apply(this, arguments);
          }
          return src;
        }(),
        filter: function filter(list) {
          var results = list.filter(function (item, idx, arr) {
            return arr.findIndex(function (val) {
              return val.value === item.value;
            }) === idx;
          });
          if (_this.options.dataFilter) {
            return _this.options.dataFilter(results);
          }
          return results;
        }
      },
      resultsList: {
        maxResults: this.options.maxResults
      },
      resultItem: {
        element: function element(item, data) {
          if (!_this.options.modifyResult) {
            return;
          }
          _this.options.modifyResult(item, data.value);
        }
      },
      events: {
        input: {
          blur: function blur() {
            _this.promptDiv.style.display = "none";
          }
        }
      }
    });
    this.acWrapper = this.element.closest(".autoComplete_wrapper");
    this.element.ac = this.autocomplete;

    // Stop input field from bubbling open and close events to parent elements,
    // because foundation closes modal from these events.
    var stopPropagation = function stopPropagation(event) {
      event.stopPropagation();
    };
    this.element.addEventListener("close", stopPropagation);
    this.element.addEventListener("open", stopPropagation);
    this.createPromptDiv();
    switch (this.options.mode) {
      case "sticky":
        this.createStickySelect(this.options.name);
        break;
      case "multi":
        this.createMultiSelect(this.options.name);
        break;
      default:
    }
  }
  return _createClass(AutoComplete, [{
    key: "setInput",
    value: function setInput(value) {
      this.autocomplete.input.value = value;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      switch (this.options.mode) {
        case "single":
          this.setInput(event.detail.selection.value[event.detail.selection.key]);
          break;
        case "sticky":
          this.handleStickyEvents(event);
          break;
        case "multi":
          this.handleMultiEvents(event);
          break;
        default:
      }
    }
  }, {
    key: "handleMultiEvents",
    value: function handleMultiEvents(event) {
      switch (event.type) {
        case "selection":
          this.addMultiSelectItem(event.detail.selection);
          break;
        default:
      }
    }
  }, {
    key: "handleStickyEvents",
    value: function handleStickyEvents(event) {
      switch (event.type) {
        case "selection":
          this.addStickySelectItem(event.detail.selection);
          break;
        case "click":
          if (event.target === this.clearStickySelectionSpan) {
            this.removeStickySelection();
          }
          break;
        case "keyup":
          if (this.stickyHiddenInput.value !== "" && event.target === this.element && (["Escape", "Backspace", "Delete"].includes(event.key) || /^[a-z0-9]$/i.test(event.key))) {
            this.removeStickySelection();
          } else if (this.options.searchPrompt) {
            if (this.stickyHiddenInput.value === "" && this.element.value.length < this.options.threshold) {
              this.promptDiv.style.display = "block";
            } else {
              this.promptDiv.style.display = "none";
            }
          }
          break;
        default:
      }
    }
  }, {
    key: "createHiddenInput",
    value: function createHiddenInput(value) {
      var hiddenInput = document.createElement("input");
      hiddenInput.name = this.options.name;
      hiddenInput.type = "hidden";
      if (value) {
        hiddenInput.value = value;
      }
      this.acWrapper.prepend(hiddenInput);
      return hiddenInput;
    }
  }, {
    key: "removeStickySelection",
    value: function removeStickySelection() {
      this.stickyHiddenInput.value = "";
      this.element.placeholder = this.options.placeholder;
      this.clearStickySelectionSpan.style.display = "none";
      this.stickySelectedSpan.style.display = "none";
    }
  }, {
    key: "addStickySelectItem",
    value: function addStickySelectItem(selection) {
      this.stickyHiddenInput.value = selection.value.value;
      this.element.placeholder = "";
      this.stickySelectedSpan.innerHTML = selection.value[selection.key];
      this.stickySelectedSpan.style.display = "block";
      this.clearStickySelectionSpan.style.display = "block";
      this.setInput("");
    }
  }, {
    key: "addMultiSelectItem",
    value: function addMultiSelectItem(selection) {
      var _this2 = this;
      this.setInput("");
      var chosen = document.createElement("span");
      chosen.classList.add("label", "primary", "autocomplete__selected-item", "multi");
      chosen.innerHTML = selection.value[selection.key];
      var clearSelection = document.createElement("span");
      clearSelection.classList.add("clear-multi-selection");
      clearSelection.innerHTML = "&times;";
      clearSelection.setAttribute("data-remove", selection.value.value);
      clearSelection.addEventListener("click", function (evt) {
        var hiddenInput = _this2.acWrapper.querySelector("input[type='hidden'][value='".concat(selection.value.value, "']"));
        if (hiddenInput) {
          hiddenInput.remove();
          evt.target.parentElement.remove();
        }
      });
      chosen.appendChild(clearSelection);
      var multiSelectWrapper = this.acWrapper.querySelector(".multiselect");
      var inputContainer = multiSelectWrapper.querySelector("span.input-container");
      multiSelectWrapper.insertBefore(chosen, inputContainer);
      this.createHiddenInput(selection.value.value);
    }
  }, {
    key: "createStickySelect",
    value: function createStickySelect() {
      var _this3 = this;
      this.stickySelectedSpan = document.createElement("span");
      this.stickySelectedSpan.classList.add("autocomplete__selected-item", "sticky");
      this.stickySelectedSpan.style.display = "none";
      this.stickySelectedSpan.addEventListener("click", function () {
        return _this3.element.focus();
      });
      this.stickyHiddenInput = this.createHiddenInput();
      this.clearStickySelectionSpan = document.createElement("span");
      this.clearStickySelectionSpan.className = "clear-sticky-selection";
      this.clearStickySelectionSpan.innerHTML = "&times;";
      this.clearStickySelectionSpan.style.display = "none";
      this.clearStickySelectionSpan.addEventListener("click", this);
      this.element.addEventListener("selection", this);
      this.element.addEventListener("keyup", this);
      this.acWrapper.insertBefore(this.clearStickySelectionSpan, this.element);
      this.acWrapper.insertBefore(this.stickySelectedSpan, this.element);
      if (this.options.selected) {
        this.addStickySelectItem(this.options.selected);
      }
    }
  }, {
    key: "createMultiSelect",
    value: function createMultiSelect() {
      var _this4 = this;
      var multiSelectWrapper = document.createElement("div");
      multiSelectWrapper.classList.add("multiselect");
      var inputContainer = document.createElement("span");
      inputContainer.classList.add("input-container");
      multiSelectWrapper.appendChild(inputContainer);
      this.acWrapper.prepend(multiSelectWrapper);
      inputContainer.appendChild(this.element);
      this.element.addEventListener("selection", this);
      multiSelectWrapper.addEventListener("click", function () {
        _this4.element.focus();
      });
      if (this.options.selected) {
        this.options.selected.forEach(function (selection) {
          _this4.addMultiSelectItem(selection);
        });
      }
    }
  }, {
    key: "createPromptDiv",
    value: function createPromptDiv() {
      this.promptDiv = document.createElement("div");
      this.promptDiv.classList.add("search-prompt");
      this.promptDiv.style.display = "none";
      this.promptDiv.innerHTML = this.options.searchPromptText;
      this.acWrapper.appendChild(this.promptDiv);
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=_rbenv_versions_3_0_0_lib_ruby_gems_3_0_0_gems_decidim-core-0_27_10_app_packs_src_decidim_aut-1682d9.js.map