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
},{}],"node_modules/assert/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"node_modules/assert/node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/assert/node_modules/util/util.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = undefined || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require('inherits');

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
},{"./support/isBuffer":"node_modules/assert/node_modules/util/support/isBufferBrowser.js","inherits":"node_modules/assert/node_modules/inherits/inherits_browser.js","process":"node_modules/process/browser.js"}],"node_modules/assert/assert.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

},{"util/":"node_modules/assert/node_modules/util/util.js"}],"src/lib/color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assert = require("assert");

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
        g: r,
        b: r,
        a: a
      };
    } else {
      var patterns = {
        hex3: /^#?[0-9a-fA-F]{3}$/i,
        hex6: /^#?[0-9a-fA-F]{6}$/i
      };

      var _arr = Object.entries(patterns);

      for (var _i = 0; _i < _arr.length; _i++) {
        var _arr$_i = _slicedToArray(_arr[_i], 2),
            name = _arr$_i[0],
            regex = _arr$_i[1];

        var match = regex.exec(r);
        if (match) if (name.includes('hex')) this._rgba = Color.hexToRGB(r);
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
          b = this.b;
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
},{"assert":"node_modules/assert/assert.js"}],"src/lib/texture.js":[function(require,module,exports) {
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
},{"./texture":"src/lib/texture.js"}],"src/lib/renderer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vector = _interopRequireDefault(require("./vector"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _rectangle = _interopRequireDefault(require("./rectangle"));

var _grid = _interopRequireDefault(require("./grid"));

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
            var x = entity.x,
                y = entity.y,
                rx = entity.rx,
                ry = entity.ry,
                rotation = entity.rotation,
                texture = entity.texture;
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
          } else if (entity instanceof _rectangle.default) {
            var width = entity.width,
                height = entity.height,
                _texture = entity.texture,
                drawFrom = entity.drawFrom;
            var _x = entity.x,
                _y = entity.y;

            if (drawFrom === 'center') {
              _x -= width / 2;
              _y -= width / 2;
            } else if (drawFrom === 'top-right') {
              _x -= width;
            } else if (drawFrom === 'bottom-right') {
              _x -= width;
              _y -= height;
            } else if (drawFrom === 'bottom-left') {
              _y -= height;
            }

            context.beginPath();
            context.rect(_x, _y, width, height);

            if (_texture.fill) {
              context.fillStyle = _texture.fillRGBA();
              context.fill();
            }

            if (_texture.stroke) {
              context.lineWidth = _texture.strokeWeight;
              context.strokeStyle = _texture.strokeRGBA();
              context.stroke();
            }
          } else if (entity instanceof _grid.default) {
            var _width = (entity.width ? entity.width : canvas.width) / 2;

            var _height = (entity.height ? entity.height : canvas.height) / 2;

            var spaceY = _height * 2 / entity.rows;
            var spaceX = _width * 2 / entity.columns;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = entity.highlights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var highlight = _step2.value;
                context.save();
                var _x2 = highlight.x,
                    _y2 = highlight.y,
                    _texture2 = highlight.texture;
                context.fillStyle = _texture2.fillRGBA();
                context.fillRect(-spaceX * entity.columns / 2 + spaceX * _x2, -spaceY * entity.rows / 2 + spaceY * _y2, spaceX, spaceY);
                context.restore();
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            context.strokeStyle = "#fff";

            for (var row = 0; row < entity.rows + 1; row++) {
              context.beginPath();
              context.moveTo(-_width, -_height + spaceY * row);
              context.lineTo(_width, -_height + spaceY * row);
              context.stroke();
            }

            for (var column = 0; column < entity.columns + 1; column++) {
              context.beginPath();
              context.moveTo(-_width + spaceX * column, -_height);
              context.lineTo(-_width + spaceX * column, _height);
              context.stroke();
            }
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
},{"./vector":"src/lib/vector.js","./ellipse":"src/lib/ellipse.js","./rectangle":"src/lib/rectangle.js","./grid":"src/lib/grid.js"}],"src/lib/camera.js":[function(require,module,exports) {
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
var rectangle = new _rectangle.default({
  x: 0,
  y: 0,
  width: 10,
  height: 10
});
var grid = new _grid.default({
  rows: 200,
  columns: 200,
  width: 6000,
  height: 6000
}); // add the ellipse to the scene (for rendering)

scene.add(rectangle);
scene.add(grid);
var b = grid.highlight(0, 10, h3);

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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56985" + '/');

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