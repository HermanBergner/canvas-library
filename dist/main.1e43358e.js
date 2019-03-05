// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style/main.sass":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./fonts/fontawesome/fa-regular-400.eot":[["fa-regular-400.429238d8.eot","style/fonts/fontawesome/fa-regular-400.eot"],"style/fonts/fontawesome/fa-regular-400.eot"],"./fonts/fontawesome/fa-regular-400.woff2":[["fa-regular-400.031a524d.woff2","style/fonts/fontawesome/fa-regular-400.woff2"],"style/fonts/fontawesome/fa-regular-400.woff2"],"./fonts/fontawesome/fa-regular-400.woff":[["fa-regular-400.458ab567.woff","style/fonts/fontawesome/fa-regular-400.woff"],"style/fonts/fontawesome/fa-regular-400.woff"],"./fonts/fontawesome/fa-regular-400.ttf":[["fa-regular-400.2b288cbf.ttf","style/fonts/fontawesome/fa-regular-400.ttf"],"style/fonts/fontawesome/fa-regular-400.ttf"],"./fonts/fontawesome/fa-regular-400.svg":[["fa-regular-400.34489141.svg","style/fonts/fontawesome/fa-regular-400.svg"],"style/fonts/fontawesome/fa-regular-400.svg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/lib/vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var atan2 = Math.atan2,
    sqrt = Math.sqrt,
    pow = Math.pow;

var _dist = function dist() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _ref = args || 0,
      length = _ref.length;

  if (length === 4) {
    var x1 = args[0],
        y1 = args[1],
        x2 = args[2],
        y2 = args[3];
    return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
  } else if (length === 6) {
    var _x = args[0],
        _y = args[1],
        z1 = args[2],
        _x2 = args[3],
        _y2 = args[4],
        z2 = args[5];
    return sqrt(pow(_x2 - _x, 2) + pow(_y2 - _y, 2) + pow(z2 - z1, 2));
  }
};

var Vector =
/*#__PURE__*/
function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  _createClass(Vector, [{
    key: "copy",
    value: function copy() {
      var x = this.x,
          y = this.y,
          z = this.z;
      return new Vector(x, y, z);
    }
  }, {
    key: "add",
    value: function add() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x instanceof Vector) return this.add(x.x, x.y, x.z);
      this.x += x;
      this.y += y;
      this.z += z;
      return this;
    }
  }, {
    key: "addX",
    value: function addX() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (x instanceof Vector) {
        this.x += x.x;
        return this;
      }

      this.x += x;
      return this;
    }
  }, {
    key: "addY",
    value: function addY() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (y instanceof Vector) {
        this.y += y.y;
        return this;
      }

      this.y += y;
      return this;
    }
  }, {
    key: "addZ",
    value: function addZ() {
      var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (z instanceof Vector) {
        this.z += z.z;
        return this;
      }

      this.z += z;
      return this;
    }
  }, {
    key: "addXY",
    value: function addXY() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector) {
        this.x += x.x;
        this.y += x.y;
        return this;
      }

      this.x += x;
      this.y += y;
      return this;
    }
  }, {
    key: "sub",
    value: function sub() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x instanceof Vector) return this.sub(x.x, x.y, x.z);
      this.x -= x;
      this.y -= y;
      this.z -= z;
      return this;
    }
  }, {
    key: "subX",
    value: function subX() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (x instanceof Vector) {
        this.x -= x.x;
        return this;
      }

      this.x -= x;
      return this;
    }
  }, {
    key: "subY",
    value: function subY() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (y instanceof Vector) {
        this.y -= y.y;
        return this;
      }

      this.y -= y;
      return this;
    }
  }, {
    key: "subZ",
    value: function subZ() {
      var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (z instanceof Vector) {
        this.z -= z.z;
        return this;
      }

      this.z -= z;
      return this;
    }
  }, {
    key: "subXY",
    value: function subXY() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector) {
        this.x -= x.x;
        this.y -= x.y;
        return this;
      }

      this.x -= x;
      this.y -= y;
      return this;
    }
  }, {
    key: "mult",
    value: function mult() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x instanceof Vector) return this.mult(x.x, x.y, x.z);
      this.x *= x;
      this.y *= y;
      this.z *= z;
      return this;
    }
  }, {
    key: "multX",
    value: function multX() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (x instanceof Vector) {
        this.x *= x.x;
        return this;
      }

      this.x *= x;
      return this;
    }
  }, {
    key: "multY",
    value: function multY() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (y instanceof Vector) {
        this.y *= y.y;
        return this;
      }

      this.y *= y;
      return this;
    }
  }, {
    key: "multZ",
    value: function multZ() {
      var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (z instanceof Vector) {
        this.z *= z.z;
        return this;
      }

      this.z *= z;
      return this;
    }
  }, {
    key: "multXY",
    value: function multXY() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector) {
        this.x *= x.x;
        this.y *= x.y;
        return this;
      }

      this.x *= x;
      this.y *= y;
      return this;
    }
  }, {
    key: "div",
    value: function div() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x instanceof Vector) return this.div(x.x, x.y, x.z);
      this.x /= x;
      this.y /= y;
      this.z /= z;
      return this;
    }
  }, {
    key: "divX",
    value: function divX() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (x instanceof Vector) {
        this.x /= x.x;
        return this;
      }

      this.x /= x;
      return this;
    }
  }, {
    key: "divY",
    value: function divY() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (y instanceof Vector) {
        this.y /= y.y;
        return this;
      }

      this.y /= y;
      return this;
    }
  }, {
    key: "divZ",
    value: function divZ() {
      var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (z instanceof Vector) {
        this.z /= z.z;
        return this;
      }

      this.z /= z;
      return this;
    }
  }, {
    key: "divXY",
    value: function divXY() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector) {
        this.x /= x.x;
        this.y /= x.y;
        return this;
      }

      this.x /= x;
      this.y /= y;
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      return this.div(this.mag());
    }
  }, {
    key: "mag",
    value: function mag() {
      var x = this.x,
          y = this.y,
          z = this.z;
      return sqrt(x * x + y * y + z * z);
    }
  }, {
    key: "setMag",
    value: function setMag(mag) {
      this.normalize().mult(mag);
      return this;
    }
  }, {
    key: "randomize",
    value: function randomize() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.x = random(min, max);
      this.y = random(min, max);
      this.z = random(min, max);
      return this;
    }
  }, {
    key: "set",
    value: function set() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (x instanceof Vector) return this.set(x.x, x.y, x.z);
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
  }, {
    key: "setX",
    value: function setX() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (x instanceof Vector) {
        this.x = x.x;
        return this;
      }

      this.x = x;
      return this;
    }
  }, {
    key: "setY",
    value: function setY() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (y instanceof Vector) {
        this.y = y.y;
        return this;
      }

      this.y = y;
      return this;
    }
  }, {
    key: "setY",
    value: function setY() {
      var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (z instanceof Vector) {
        this.z = z.z;
        return this;
      }

      this.z = z;
      return this;
    }
  }, {
    key: "setXY",
    value: function setXY() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (x instanceof Vector) {
        return this.set(x.x, x.y, this.z);
      }

      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "getXY",
    value: function getXY() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "dist",
    value: function dist(x, y, z) {
      if (x instanceof Vector) return this.dist(x.x, x.y, x.z);
      return _dist(this.x, this.y, this.z, x, y, z);
    }
  }, {
    key: "heading",
    value: function heading(other) {
      var copy = this.copy();
      copy.sub(other);
      var x = copy.x,
          y = copy.y;
      return atan2(y, x);
    }
  }, {
    key: "limit",
    value: function limit() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x instanceof Vector) return this.limit(x.x, x.y, x.z);
      this.x = this.x > x ? x : this.x;
      this.y = this.y > y ? y : this.y;
      this.z = this.z > z ? z : this.z;
      return this;
    }
  }, {
    key: "lerp",
    value: function lerp(stop) {
      var amt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
      var x = this.x,
          y = this.y,
          z = this.z;
      this.x = x + amt * (stop.x - x);
      this.y = y + amt * (stop.y - y);
      this.y = y + amt * (stop.z - z);
      return this;
    }
  }], [{
    key: "add",
    value: function add(a, b) {
      var x = a.x + b.x;
      var y = a.y + b.y;
      var z = a.z + b.z;
      return new Vector(x, y, z);
    }
  }, {
    key: "sub",
    value: function sub(a, b) {
      var x = a.x - b.x;
      var y = a.y - b.y;
      var z = a.z - b.z;
      return new Vector(x, y, z);
    }
  }, {
    key: "mult",
    value: function mult(a, b) {
      var x = a.x * b.x;
      var y = a.y * b.y;
      var z = a.z * b.z;
      return new Vector(x, y, z);
    }
  }, {
    key: "div",
    value: function div(a, b) {
      var x = a.x / b.x;
      var y = a.y / b.y;
      var z = a.z / b.z;
      return new Vector(x, y, z);
    }
  }]);

  return Vector;
}();

exports.default = Vector;
},{}],"src/lib/color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color(r, g, b) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Color);

    if (!isNaN(r)) {
      if (r > 0xff) return Color.hexToRGB(r);
      if (!g) this._rgba = {
        r: r,
        g: r,
        b: r,
        a: a
      };else if (!b) this._rgba = {
        r: r,
        g: r,
        b: r,
        a: a
      };else this._rgba = {
        r: r,
        g: g,
        b: b,
        a: a
      };
    } else {
      var patterns = {
        hex3: /^#?[0-9a-fA-F]{3}$/i,
        hex6: /^#?[0-9a-fA-F]{6}$/i,
        rgba: /^rgba\((.*)\)$/i
      };

      var _arr = Object.entries(patterns);

      for (var _i = 0; _i < _arr.length; _i++) {
        var _arr$_i = _slicedToArray(_arr[_i], 2),
            name = _arr$_i[0],
            regex = _arr$_i[1];

        var match = regex.exec(r);
        if (match) if (name.includes('hex')) this._rgba = Color.hexToRGB(r);else if (name.includes('rgba')) {
          var _match$1$split = match[1].split(','),
              _match$1$split2 = _slicedToArray(_match$1$split, 4),
              _r = _match$1$split2[0],
              _g = _match$1$split2[1],
              _b = _match$1$split2[2],
              _a = _match$1$split2[3];

          console.log(_r, _g, _b, _a);
          return new Color(_r, _g, _b, _a);
        }
      }
    }
  }

  _createClass(Color, [{
    key: "_rgba",
    set: function set(_ref) {
      var r = _ref.r,
          g = _ref.g,
          b = _ref.b,
          _ref$a = _ref.a,
          a = _ref$a === void 0 ? 1 : _ref$a;
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
  }, {
    key: "rgb",
    get: function get() {
      var r = this.r,
          g = this.g,
          b = this.b;
      return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
    }
  }, {
    key: "rgba",
    get: function get() {
      var r = this.r,
          g = this.g,
          b = this.b,
          a = this.a;
      return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
    }
  }], [{
    key: "hsl",
    value: function hsl(hue, saturation, light) {
      var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      if (isNaN(hue)) if (Array.isArray(hue)) {
        var _hue = hue;

        var _hue2 = _slicedToArray(_hue, 4);

        hue = _hue2[0];
        saturation = _hue2[1];
        light = _hue2[2];
        var _hue2$ = _hue2[3];
        alpha = _hue2$ === void 0 ? alpha : _hue2$;
      } else if ('h' in hue) {
        var _hue3 = hue;
        hue = _hue3.hue;
        saturation = _hue3.saturation;
        light = _hue3.light;
        var _hue3$alpha = _hue3.alpha;
        alpha = _hue3$alpha === void 0 ? alpha : _hue3$alpha;
      }
      return "hsl(".concat(hue, ", ").concat(saturation, ", ").concat(light, ", ").concat(alpha, ")");
    }
  }, {
    key: "hexToRGB",
    value: function hexToRGB(hex) {
      if (isNaN(hex)) {
        hex = hex.replace(/#/, '');
        var _hex = hex,
            length = _hex.length;

        if (length === 3) {
          hex = _toConsumableArray(hex).map(function (char) {
            return char + char;
          }).join('');
        }

        return Color.hexToRGB(parseInt(hex, 16));
      }

      var r = hex >>> 16 & 0xff;
      var g = hex >>> 8 & 0xff;
      var b = hex & 0xff;
      return {
        r: r,
        g: g,
        b: b,
        a: 1
      };
    }
  }]);

  return Color;
}();

exports.default = Color;
},{}],"src/lib/texture.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("./color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Texture =
/*#__PURE__*/
function () {
  function Texture(opt) {
    _classCallCheck(this, Texture);

    this.options = Object.assign({
      fill: undefined,
      stroke: undefined,
      strokeWeight: 1
    }, opt);
    var _this$options = this.options,
        fill = _this$options.fill,
        stroke = _this$options.stroke;
    this.fill = new _color.default(fill);
    this.stroke = new _color.default(stroke);
  }

  _createClass(Texture, [{
    key: "fillRGBA",
    value: function fillRGBA() {
      var _this$fill = this.fill,
          r = _this$fill.r,
          g = _this$fill.g,
          b = _this$fill.b,
          a = _this$fill.a;
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    }
  }, {
    key: "strokeRGBA",
    value: function strokeRGBA() {
      var _this$stroke = this.stroke,
          r = _this$stroke.r,
          g = _this$stroke.g,
          b = _this$stroke.b,
          a = _this$stroke.a;
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
    }
  }, {
    key: "fill",
    get: function get() {
      var fill = this.options.fill;
      return 'r' in fill ? fill : undefined;
    },
    set: function set(fill) {
      this.options.fill = fill;
    }
  }, {
    key: "stroke",
    get: function get() {
      var stroke = this.options.stroke;
      return 'r' in stroke ? stroke : undefined;
    },
    set: function set(stroke) {
      this.options.stroke = stroke;
    }
  }, {
    key: "strokeWeight",
    get: function get() {
      var strokeWeight = this.options.strokeWeight;
      return strokeWeight;
    },
    set: function set(weight) {
      this.options.strokeWeight = strokeWeight;
    }
  }], [{
    key: "Default",
    value: function Default() {
      return new Texture({
        fill: '#fff'
      });
    }
  }]);

  return Texture;
}();

exports.default = Texture;
},{"./color":"src/lib/color.js"}],"src/lib/ellipse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _texture = _interopRequireDefault(require("./texture"));

var _vector = _interopRequireDefault(require("./vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PI = Math.PI;
var TAU = 2 * PI;

var Ellipse =
/*#__PURE__*/
function () {
  function Ellipse(opt, texture) {
    _classCallCheck(this, Ellipse);

    if (opt instanceof _texture.default) {
      texture = opt;
      opt = {};
    }

    var options = {
      x: 0,
      y: 0,
      r: 10,
      rotation: 0,
      start: 0,
      end: TAU,
      clockwise: true
    };
    Object.assign(options, opt);
    'radius' in options && (options.r = options.radius);
    'rx' in options && 'ry' in options && (options.r = options.radius);
    var x = options.x,
        y = options.y,
        rx = options.rx,
        ry = options.ry,
        r = options.r,
        rotation = options.rotation,
        start = options.start,
        end = options.end,
        clockwise = options.clockwise;
    this._options = {
      position: new _vector.default(x, y),
      rx: rx ? rx : r,
      ry: ry ? ry : r,
      rotation: rotation,
      texture: texture ? texture : _texture.default.Default(),
      start: start,
      end: end,
      clockwise: clockwise
    };
  }

  _createClass(Ellipse, [{
    key: "position",
    get: function get() {
      var position = this._options.position;
      return position;
    },
    set: function set(position) {
      this._options.position = position;
      return this;
    }
  }, {
    key: "x",
    get: function get() {
      var x = this._options.position.x;
      return x;
    },
    set: function set(x) {
      this._options.position.x = x;
      return this;
    }
  }, {
    key: "y",
    get: function get() {
      var y = this._options.position.y;
      return y;
    },
    set: function set(y) {
      this._options.position.y = y;
      return this;
    }
  }, {
    key: "rx",
    get: function get() {
      var rx = this._options.rx;
      return rx;
    },
    set: function set(rx) {
      this._options.rx = rx;
      return this;
    }
  }, {
    key: "ry",
    get: function get() {
      var ry = this._options.ry;
      return ry;
    },
    set: function set(ry) {
      this._options.ry = ry;
      return this;
    }
  }, {
    key: "rotation",
    get: function get() {
      var rotation = this._options.rotation;
      return rotation;
    },
    set: function set(rotation) {
      this._options.rotation = rotation;
      return this;
    }
  }, {
    key: "texture",
    get: function get() {
      var texture = this._options.texture;
      return texture;
    },
    set: function set(texture) {
      this._options.texture = texture;
      return this;
    }
  }, {
    key: "r",
    set: function set(r) {
      this._options.rx = r;
      this._options.ry = r;
      return this;
    }
  }, {
    key: "radius",
    set: function set(radius) {
      this._options.rx = radius;
      this._options.ry = radius;
      return this;
    }
  }]);

  return Ellipse;
}();

exports.default = Ellipse;
},{"./texture":"src/lib/texture.js","./vector":"src/lib/vector.js"}],"src/lib/rectangle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _texture = _interopRequireDefault(require("./texture"));

var _vector = _interopRequireDefault(require("./vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(opt, texture) {
    _classCallCheck(this, Rectangle);

    var options = {
      x: 0,
      y: 0,
      width: 10,
      height: 10,
      drawFrom: 'center'
    };
    Object.assign(options, opt);
    var x = options.x,
        y = options.y,
        width = options.width,
        height = options.height,
        drawFrom = options.drawFrom;
    this._options = {
      position: new _vector.default(x, y),
      width: width,
      height: height,
      texture: texture ? texture : _texture.default.Default(),
      drawFrom: drawFrom
    };
  }

  _createClass(Rectangle, [{
    key: "position",
    get: function get() {
      var position = this._options.position;
      return position;
    },
    set: function set(position) {
      this._options.position = position;
      return this;
    }
  }, {
    key: "x",
    get: function get() {
      var x = this._options.position.x;
      return x;
    },
    set: function set(x) {
      this._options.position.x = x;
      return this;
    }
  }, {
    key: "y",
    get: function get() {
      var y = this._options.position.y;
      return y;
    },
    set: function set(y) {
      this._options.position.y = y;
      return this;
    }
  }, {
    key: "width",
    get: function get() {
      var width = this._options.width;
      return width;
    },
    set: function set(width) {
      this._options.width = width;
      return this;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this._options.height;
      return height;
    },
    set: function set(height) {
      this._options.height = height;
      return this;
    }
  }, {
    key: "texture",
    get: function get() {
      var texture = this._options.texture;
      return texture;
    },
    set: function set(texture) {
      this._options.texture = texture;
      return this;
    }
  }, {
    key: "drawFrom",
    get: function get() {
      var drawFrom = this._options.drawFrom;
      return drawFrom;
    },
    set: function set(from) {
      this._options.drawFrom = from;
      return this;
    }
  }]);

  return Rectangle;
}();

exports.default = Rectangle;
},{"./texture":"src/lib/texture.js","./vector":"src/lib/vector.js"}],"src/lib/grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _texture = _interopRequireDefault(require("./texture"));

var _vector = _interopRequireDefault(require("./vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Grid =
/*#__PURE__*/
function () {
  function Grid(opts) {
    _classCallCheck(this, Grid);

    this.options = Object.assign({
      rows: 10,
      columns: 10,
      width: undefined,
      height: undefined,
      highlights: []
    }, opts);
  }

  _createClass(Grid, [{
    key: "highlight",
    value: function highlight() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var texture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _texture.default.Default();
      var index = this.options.highlights.push({
        x: x,
        y: y,
        texture: texture
      });
      return this.options.highlights[index - 1];
    }
  }, {
    key: "getPositionAt",
    value: function getPositionAt(_ref) {
      var _ref$row = _ref.row,
          row = _ref$row === void 0 ? 0 : _ref$row,
          _ref$column = _ref.column,
          column = _ref$column === void 0 ? 0 : _ref$column;
      var width = this.width,
          height = this.height,
          rows = this.rows,
          columns = this.columns;
      var spaceX = width / columns;
      var spaceY = height / rows;
      console.log(spaceX);
      var x = column * spaceX + spaceX * 0.5 - width / 2;
      var y = row * spaceY + spaceY * 0.5 - height / 2;
      return new _vector.default(x, y);
    }
  }, {
    key: "rows",
    get: function get() {
      var rows = this.options.rows;
      return rows;
    }
  }, {
    key: "columns",
    get: function get() {
      var columns = this.options.columns;
      return columns;
    }
  }, {
    key: "width",
    get: function get() {
      var width = this.options.width;
      return width;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this.options.height;
      return height;
    }
  }, {
    key: "highlights",
    get: function get() {
      var highlights = this.options.highlights;
      return highlights;
    }
  }]);

  return Grid;
}();

exports.default = Grid;
},{"./texture":"src/lib/texture.js","./vector":"src/lib/vector.js"}],"src/lib/sensor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _rectangle = _interopRequireDefault(require("./rectangle"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _vector = _interopRequireDefault(require("./vector"));

var _texture = _interopRequireDefault(require("./texture"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sensor =
/*#__PURE__*/
function () {
  function Sensor(opt) {
    _classCallCheck(this, Sensor);

    var options = {
      x: 0,
      y: 0,
      radius: 10,
      width: 10,
      height: 10,
      drawFrom: 'center'
    };
    Object.assign(options, opt);
    var x = options.x,
        y = options.y,
        radius = options.radius,
        width = options.width,
        height = options.height,
        drawFrom = options.drawFrom;
    this._options = {
      position: new _vector.default(x, y),
      radius: radius,
      width: width,
      height: height,
      texture: texture ? texture : _texture.default.Default(),
      drawFrom: drawFrom
    };
    this.rectangle = new _rectangle.default({
      x: x,
      y: y,
      width: width,
      height: height,
      drawFrom: drawFrom
    }, arguments.length <= 1 ? undefined : arguments[1]);
    this.ellipse = new _ellipse.default({
      x: x,
      y: y,
      radius: radius
    }, arguments.length <= 2 ? undefined : arguments[2]);
  }

  _createClass(Sensor, [{
    key: "x",
    get: function get() {
      var x = this._options.position.x;
      return x;
    },
    set: function set(x) {
      this._options.position.x = x;
      return this;
    }
  }, {
    key: "y",
    get: function get() {
      var y = this._options.position.y;
      return y;
    },
    set: function set(y) {
      this._options.position.y = y;
      return this;
    }
  }, {
    key: "radius",
    get: function get() {
      var height = this._options.height;
      return height;
    },
    set: function set(radius) {
      this._options.radius = radius;
      return this;
    }
  }, {
    key: "width",
    get: function get() {
      var width = this._options.width;
      return width;
    },
    set: function set(width) {
      this._options.width = width;
      return this;
    }
  }, {
    key: "height",
    get: function get() {
      var height = this._options.height;
      return height;
    },
    set: function set(height) {
      this._options.height = height;
      return this;
    }
  }, {
    key: "texture",
    get: function get() {
      var texture = this._options.texture;
      return texture;
    },
    set: function set(texture) {
      this._options.texture = texture;
      return this;
    }
  }, {
    key: "drawFrom",
    get: function get() {
      var drawFrom = this._options.drawFrom;
      return drawFrom;
    },
    set: function set(from) {
      this._options.drawFrom = from;
      return this;
    }
  }, {
    key: "position",
    set: function set(position) {
      this._options.position = position;
      return this;
    }
  }]);

  return Sensor;
}();

exports.default = Sensor;
},{"./rectangle":"src/lib/rectangle.js","./ellipse":"src/lib/ellipse.js","./vector":"src/lib/vector.js","./texture":"src/lib/texture.js"}],"src/lib/renderers/ellipse.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var PI = Math.PI;
var TAU = 2 * PI;

var ellipse = function ellipse(_ellipse, context) {
  var x = _ellipse.x,
      y = _ellipse.y,
      rx = _ellipse.rx,
      ry = _ellipse.ry,
      rotation = _ellipse.rotation,
      texture = _ellipse.texture;
  context.beginPath();
  context.ellipse(x, y, rx, ry, rotation, 0, TAU, false);

  if (texture.fill) {
    context.fillStyle = texture.fillRGBA();
    context.fill();
  }

  if (texture.stroke) {
    context.lineWidth = texture.strokeWeight;
    context.strokeStyle = texture.strokeRGBA();
    context.stroke();
  }
};

var _default = ellipse;
exports.default = _default;
},{}],"src/lib/renderers/rectangle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var rectangle = function rectangle(_rectangle, context) {
  var width = _rectangle.width,
      height = _rectangle.height,
      texture = _rectangle.texture,
      drawFrom = _rectangle.drawFrom;
  var x = _rectangle.x,
      y = _rectangle.y;

  if (drawFrom === 'center') {
    x -= width / 2;
    y -= width / 2;
  } else if (drawFrom === 'top-right') {
    x -= width;
  } else if (drawFrom === 'bottom-right') {
    x -= width;
    y -= height;
  } else if (drawFrom === 'bottom-left') {
    y -= height;
  }

  context.beginPath();
  context.rect(x, y, width, height);

  if (texture.fill) {
    context.fillStyle = texture.fillRGBA();
    context.fill();
  }

  if (texture.stroke) {
    context.lineWidth = texture.strokeWeight;
    context.strokeStyle = texture.strokeRGBA();
    context.stroke();
  }
};

var _default = rectangle;
exports.default = _default;
},{}],"src/lib/renderers/grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var grid = function grid(_grid, context) {
  var width = (_grid.width ? _grid.width : canvas.width) / 2;
  var height = (_grid.height ? _grid.height : canvas.height) / 2;
  var spaceY = height * 2 / _grid.rows;
  var spaceX = width * 2 / _grid.columns;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _grid.highlights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var highlight = _step.value;
      context.save();
      var x = highlight.x,
          y = highlight.y,
          texture = highlight.texture;
      context.fillStyle = texture.fillRGBA();
      context.fillRect(-spaceX * _grid.columns / 2 + spaceX * x, -spaceY * _grid.rows / 2 + spaceY * y, spaceX, spaceY);
      context.restore();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  context.strokeStyle = "#fff";

  for (var row = 0; row < _grid.rows + 1; row++) {
    context.beginPath();
    context.moveTo(-width, -height + spaceY * row);
    context.lineTo(width, -height + spaceY * row);
    context.stroke();
  }

  for (var column = 0; column < _grid.columns + 1; column++) {
    context.beginPath();
    context.moveTo(-width + spaceX * column, -height);
    context.lineTo(-width + spaceX * column, height);
    context.stroke();
  }
};

var _default = grid;
exports.default = _default;
},{}],"src/lib/renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vector = _interopRequireDefault(require("./vector"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _rectangle = _interopRequireDefault(require("./rectangle"));

var _grid = _interopRequireDefault(require("./grid"));

var _sensor = _interopRequireDefault(require("./sensor"));

var _ellipse2 = _interopRequireDefault(require("./renderers/ellipse"));

var _rectangle2 = _interopRequireDefault(require("./renderers/rectangle"));

var _grid2 = _interopRequireDefault(require("./renderers/grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PI = Math.PI;
var TAU = 2 * PI;

var Renderer =
/*#__PURE__*/
function () {
  function Renderer() {
    _classCallCheck(this, Renderer);

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    this.canvas = canvas;
    this.context = context;
    this.events = [];
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render(scene, camera) {
      var canvas = this.canvas,
          context = this.context;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight; //Clear the screen

      context.fillStyle = scene.texture.fillRGBA();
      context.rect(0, 0, canvas.width, canvas.height);
      context.fill(); //Find the center of the screen

      var center = new _vector.default(canvas.width / 2, canvas.height / 2); // Get the translation point and zoom of the camera

      var cameraCopy = camera.position.copy();
      var zoom = Math.pow(1.2, cameraCopy.z);
      var translate = cameraCopy.add(center); // Apply translation and zoom

      context.translate(translate.x, translate.y);
      context.scale(zoom, zoom);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = scene.entities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var entity = _step.value;
          context.save();

          if (entity instanceof _ellipse.default) {
            (0, _ellipse2.default)(entity, context);
          } else if (entity instanceof _rectangle.default) {
            (0, _rectangle2.default)(entity, context);
          } else if (entity instanceof _grid.default) {
            (0, _grid2.default)(entity, context);
          } else if (entity instanceof _sensor.default) {
            var rectangle = entity.rectangle,
                ellipse = entity.ellipse;
            (0, _ellipse2.default)(ellipse, context);
            (0, _rectangle2.default)(rectangle, context);
          }

          context.restore();
        } // get all elements in scene
        // sort them by order?
        // clear the canvas?
        // translate to camera position
        // render element based on type

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "event",
    value: function event(e) {
      this.event.push(e);
    }
  }, {
    key: "on",
    value: function on() {
      var event = function () {}.bind(this);

      return {
        event: event
      };
    }
  }, {
    key: "dom",
    get: function get() {
      return this.canvas;
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;
},{"./vector":"src/lib/vector.js","./ellipse":"src/lib/ellipse.js","./rectangle":"src/lib/rectangle.js","./grid":"src/lib/grid.js","./sensor":"src/lib/sensor.js","./renderers/ellipse":"src/lib/renderers/ellipse.js","./renderers/rectangle":"src/lib/renderers/rectangle.js","./renderers/grid":"src/lib/renderers/grid.js"}],"src/lib/camera.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vector = _interopRequireDefault(require("./vector"));

var _texture = _interopRequireDefault(require("./texture"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === void 0 ? -1 : _ref$z;

    _classCallCheck(this, Camera);

    this.position = new _vector.default(x, y, z);
  }

  _createClass(Camera, [{
    key: "follow",
    value: function follow() {}
  }, {
    key: "lookAt",
    value: function lookAt() {}
  }, {
    key: "zero",
    value: function zero() {}
  }]);

  return Camera;
}();

exports.default = Camera;
},{"./vector":"src/lib/vector.js","./texture":"src/lib/texture.js"}],"src/lib/scene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _texture = _interopRequireDefault(require("./texture"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(_ref) {
    var _ref$background = _ref.background,
        background = _ref$background === void 0 ? 0x000000 : _ref$background;

    _classCallCheck(this, Scene);

    this.texture = new _texture.default({
      fill: background
    });
    this.entities = [];
  }

  _createClass(Scene, [{
    key: "add",
    value: function add() {
      var _this$entities;

      (_this$entities = this.entities).push.apply(_this$entities, arguments);
    }
  }]);

  return Scene;
}();

exports.default = Scene;
},{"./texture":"src/lib/texture.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

require("../style/main.sass");

var _vector = _interopRequireDefault(require("./lib/vector"));

var _renderer = _interopRequireDefault(require("./lib/renderer"));

var _camera = _interopRequireDefault(require("./lib/camera"));

var _scene = _interopRequireDefault(require("./lib/scene"));

var _texture = _interopRequireDefault(require("./lib/texture"));

var _ellipse = _interopRequireDefault(require("./lib/ellipse"));

var _rectangle = _interopRequireDefault(require("./lib/rectangle"));

var _grid = _interopRequireDefault(require("./lib/grid"));

var _color = _interopRequireDefault(require("./lib/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = function random() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (min > max) return random(max, min);
  if (min === 0 && max === 0) return random(0, 1);
  return Math.random() * (max - min) + min;
};

var camera = new _camera.default({
  x: 0,
  y: 0,
  z: -1
});
var scene = new _scene.default({
  background: 0x222222
});
var renderer = new _renderer.default(); // Add the renderers dom element to a container

document.querySelector('#container').appendChild(renderer.dom);
var grid = new _grid.default({
  rows: 21,
  columns: 21,
  width: 600,
  height: 600
});
var rectangle = new _rectangle.default({
  x: 0,
  y: 0,
  width: 10,
  height: 10
});
rectangle.position = grid.getPositionAt({
  row: 10,
  column: 10
});
console.log(rectangle); // add the ellipse to the scene (for rendering)

scene.add(rectangle);
scene.add(grid);

var update = function update() {
  requestAnimationFrame(update); //b.x = ++b.x % 200
  //Render the scene

  renderer.render(scene, camera);
}; //start the update loop


update();
renderer.dom.addEventListener('mousewheel', function (e) {
  e.preventDefault();
  var x = e.offsetX || e.pageX - renderer.dom.offsetLeft;
  var y = e.offsetY || e.pageY - renderer.dom.offsetTop;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  camera.position.z += delta * 0.2;
});
},{"../style/main.sass":"style/main.sass","./lib/vector":"src/lib/vector.js","./lib/renderer":"src/lib/renderer.js","./lib/camera":"src/lib/camera.js","./lib/scene":"src/lib/scene.js","./lib/texture":"src/lib/texture.js","./lib/ellipse":"src/lib/ellipse.js","./lib/rectangle":"src/lib/rectangle.js","./lib/grid":"src/lib/grid.js","./lib/color":"src/lib/color.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61575" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.map