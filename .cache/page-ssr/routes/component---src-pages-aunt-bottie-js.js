exports.id = "component---src-pages-aunt-bottie-js";
exports.ids = ["component---src-pages-aunt-bottie-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./src/components/index.module.css":
/*!*****************************************!*\
  !*** ./src/components/index.module.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hero: () => (/* binding */ hero),
/* harmony export */   title: () => (/* binding */ title)
/* harmony export */ });
// Exports
var hero = "index-module--hero--82553";
var title = "index-module--title--20f3b";


/***/ }),

/***/ "./src/static/amc-resume1.pdf":
/*!************************************!*\
  !*** ./src/static/amc-resume1.pdf ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/amc-resume1-e212659111e313c630bde34d853d41c7.pdf");

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/components/CaseStudyContent5050/CaseStudyContent5050.js":
/*!*********************************************************************!*\
  !*** ./src/components/CaseStudyContent5050/CaseStudyContent5050.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyContent5050)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyContent5050_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyContent5050.css */ "./src/components/CaseStudyContent5050/CaseStudyContent5050.css");
/* harmony import */ var _CaseStudyContent5050_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyContent5050_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);



function CaseStudyContent5050(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content_5050"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block_half",
    style: props.b1Style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, props.b1Supertitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "half_title"
  }, props.b1Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: "half_list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, props.b1ListItem1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, props.b1ListItem2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, props.b1ListItem3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block_half",
    style: props.b2Style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, props.b2Supertitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "half_title"
  }, props.b2Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: "half_list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, props.b2ListItem1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, props.b2ListItem2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, props.b2ListItem3))));
}
;

/***/ }),

/***/ "./src/components/CaseStudyContentBlock/CaseStudyContentBlock.js":
/*!***********************************************************************!*\
  !*** ./src/components/CaseStudyContentBlock/CaseStudyContentBlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyContentBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyContentBlock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyContentBlock.css */ "./src/components/CaseStudyContentBlock/CaseStudyContentBlock.css");
/* harmony import */ var _CaseStudyContentBlock_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyContentBlock_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);



function CaseStudyContentBlock(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block_content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, props.supertitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "content_title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "content_text"
  }, props === null || props === void 0 ? void 0 : props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content_image"
  }, props === null || props === void 0 ? void 0 : props.image)));
}
;

/***/ }),

/***/ "./src/components/CaseStudyContentVisual/CaseStudyContentVisual.js":
/*!*************************************************************************!*\
  !*** ./src/components/CaseStudyContentVisual/CaseStudyContentVisual.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyContentVisual)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyContentVisual_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyContentVisual.css */ "./src/components/CaseStudyContentVisual/CaseStudyContentVisual.css");
/* harmony import */ var _CaseStudyContentVisual_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyContentVisual_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);



function CaseStudyContentVisual(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content_visual",
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, props.supertitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "visual_title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "visual_image"
  }, props.image));
}
;

/***/ }),

/***/ "./src/components/CaseStudyHeader/CaseStudyHeader.js":
/*!***********************************************************!*\
  !*** ./src/components/CaseStudyHeader/CaseStudyHeader.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyHeader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyHeader.css */ "./src/components/CaseStudyHeader/CaseStudyHeader.css");
/* harmony import */ var _CaseStudyHeader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyHeader_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);



function CaseStudyHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header",
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "case study"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "header_title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header_image"
  }, props.image));
}
;

/***/ }),

/***/ "./src/components/CaseStudyImage/CaseStudyImage.js":
/*!*********************************************************!*\
  !*** ./src/components/CaseStudyImage/CaseStudyImage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyImage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyImage.css */ "./src/components/CaseStudyImage/CaseStudyImage.css");
/* harmony import */ var _CaseStudyImage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyImage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);



function CaseStudyImage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block_image"
  }, props.image);
}
;

/***/ }),

/***/ "./src/components/CaseStudyIntro/CaseStudyIntro.js":
/*!*********************************************************!*\
  !*** ./src/components/CaseStudyIntro/CaseStudyIntro.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyIntro)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyIntro_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyIntro.css */ "./src/components/CaseStudyIntro/CaseStudyIntro.css");
/* harmony import */ var _CaseStudyIntro_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyIntro_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




function CaseStudyIntro(props) {
  const openInNewTab = url => {
    window.open(url, "_blank", "noreferrer");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "intro"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "intro_content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "intro_left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "intro_title"
  }, "Project overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "intro_description"
  }, props.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    role: "link",
    onClick: () => openInNewTab(props.link),
    className: "primary_button"
  }, props.buttonLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "intro_right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "role"
  }, props.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, props.flexTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.flexDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.date))));
}
;

/***/ }),

/***/ "./src/components/CaseStudyProcess/CaseStudyProcess.js":
/*!*************************************************************!*\
  !*** ./src/components/CaseStudyProcess/CaseStudyProcess.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CaseStudyProcess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseStudyProcess_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseStudyProcess.css */ "./src/components/CaseStudyProcess/CaseStudyProcess.css");
/* harmony import */ var _CaseStudyProcess_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseStudyProcess_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_2__);



function CaseStudyProcess(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "process",
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "process_title"
  }, "Design process"), props.image);
}
;

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/components/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_amc_resume1_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/amc-resume1.pdf */ "./src/static/amc-resume1.pdf");





function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "primary-link",
    to: "/"
  }, "Anne-Marie Champoux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "nav-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "secondary-link",
    to: "/"
  }, "Work")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "secondary-link",
    to: "/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "secondary-link",
    rel: "noopener noreferrer",
    href: _static_amc_resume1_pdf__WEBPACK_IMPORTED_MODULE_3__["default"],
    target: "_blank"
  }, " Resume")))));
}
;

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */




const Layout = ({
  children
}) => {
  var _data$site$siteMetada;
  const data = _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: ((_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.title) || `Title`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("footer", {
    style: {
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`
    }
  }, "\xA9 ", new Date().getFullYear(), " \xB7 Built with", ` `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://www.gatsbyjs.com"
  }, "Gatsby"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/aunt-bottie.js?export=default":
/*!*************************************************!*\
  !*** ./src/pages/aunt-bottie.js?export=default ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuntBottiePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CaseStudyHeader_CaseStudyHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CaseStudyHeader/CaseStudyHeader */ "./src/components/CaseStudyHeader/CaseStudyHeader.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index.module.css */ "./src/components/index.module.css");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _components_CaseStudyIntro_CaseStudyIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CaseStudyIntro/CaseStudyIntro */ "./src/components/CaseStudyIntro/CaseStudyIntro.js");
/* harmony import */ var _components_CaseStudyProcess_CaseStudyProcess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CaseStudyProcess/CaseStudyProcess */ "./src/components/CaseStudyProcess/CaseStudyProcess.js");
/* harmony import */ var _components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CaseStudyContentBlock/CaseStudyContentBlock */ "./src/components/CaseStudyContentBlock/CaseStudyContentBlock.js");
/* harmony import */ var _components_CaseStudyContent5050_CaseStudyContent5050__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CaseStudyContent5050/CaseStudyContent5050 */ "./src/components/CaseStudyContent5050/CaseStudyContent5050.js");
/* harmony import */ var _components_CaseStudyContentVisual_CaseStudyContentVisual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CaseStudyContentVisual/CaseStudyContentVisual */ "./src/components/CaseStudyContentVisual/CaseStudyContentVisual.js");
/* harmony import */ var _components_CaseStudyImage_CaseStudyImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CaseStudyImage/CaseStudyImage */ "./src/components/CaseStudyImage/CaseStudyImage.js");











// import NewLineText from "../components/NewLineText"

function AuntBottiePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyHeader_CaseStudyHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      backgroundColor: `#ECF4F3`
    },
    title: "Aunt Bottie",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/main.png",
      loading: "eager",
      width: 957,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Aunt Bottie application",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3130820175.json */ "./.cache/caches/gatsby-plugin-image/3130820175.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyIntro_CaseStudyIntro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    description: 'Aunt Bottie is an AI powered web app allowing a customer to buy a plant as a gift and getting a personal card to accompany the delivery.\n\nThis application MVP was done as part of the LightHouseLabs Full Stack Web development Bootcamp.',
    buttonLabel: "See on GitHub",
    link: "https://github.com/amchampoux/bottie",
    role: 'User Experience\nVisual Design\nDevelopment',
    flexTitle: "Stack",
    flexDescription: "React, Typescript, Axios, Express, Node.js, PostgreSQL, ChatGPT",
    date: "2023"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyProcess_CaseStudyProcess__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      backgroundColor: `#ECF4F3`
    },
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/design-process.png",
      loading: "eager",
      width: 830,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Design process",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1490089735.json */ "./.cache/caches/gatsby-plugin-image/1490089735.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "empathize",
    title: "Market research",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "The Plant and Flower industry is at the heart of the application. Before talking about functionalities, some research was needed to make sure that we have an overview of the market and to align our product objectives with business and user needs. We also wanted to have a good understanding of artificial intelligence emergence and figure out how we can leverage its benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Here are some key findings that guide us in the product definition."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Customers trends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Millennials saw the biggest demographic growth in 2021 houseplant sales at 65%. (Garden Center Magazine)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Most people in the US still prefer to buy their houseplants from home improvement stores (30%) and garden centers (29%). (Floral Marketing Fund)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "19% of plant purchasers plan to increase their spending at online plant stores. (Floral Marketing Fund)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "59% of plant buyers say that houseplants are important to their health and wellness. (Craftjack)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Artificial intelligence (AI) "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "The AI market is growing by more than 20% each year."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "35% of businesses are already using AI tools in their everyday operations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "97% of people who use a computerized device interact with AI on a daily basis."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "ChatGPT is a text-generating AI and reached more than 100 million users in a shorter time than any other software in history (less than 2 months). (findweb3)")))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "empathize",
    title: "Competitive analysis",
    text: "There is a keen interest in the market for plant gifting and the use of AI, in particular ChatGPT is rising. How can our application stand out from the competition? An analysis of some key industry players helped us identify how Aunt Bottie can offer a distinctive service to its customers.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/benchmark.png",
      loading: "eager",
      width: 950,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Benchmark",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/422913344.json */ "./.cache/caches/gatsby-plugin-image/422913344.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "define",
    title: "Objectives",
    text: "With the support of the information gathered, we brainstormed around our product definition. The product strategy needs to meet both business and user goals.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/goals.png",
      loading: "eager",
      width: 871,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "business and user goals",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/426699294.json */ "./.cache/caches/gatsby-plugin-image/426699294.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "define",
    title: "Minimal viable product (MVP)",
    text: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "From the product objectives, the minimal viable product (MVP) was defined. Here are the user requirements included in the first iteration:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Users can browse through a curated selection of plants"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Users can log in to the app and access their account and orders information "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Users can configure their gift by getting an AI-generated personalized card"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Users can add gifts to their cart and then proceed to checkout")))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "prototype",
    title: "User flow",
    text: "To ensure that we cover all user requirements, a user journey on the application was drawn. This allowed us to identify quickly the main interfaces needed.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/flow.png",
      loading: "eager",
      width: 950,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2584646187.json */ "./.cache/caches/gatsby-plugin-image/2584646187.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentVisual_CaseStudyContentVisual__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: `#EFEFEF`
    },
    supertitle: "prototype",
    title: "Gift configuration",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/wireframes.png",
      loading: "eager",
      width: 1218,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Wireframes of gift configuration",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/96024842.json */ "./.cache/caches/gatsby-plugin-image/96024842.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "prototype",
    title: "UI style guide",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/styleguide.png",
      loading: "eager",
      width: 950,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3627492383.json */ "./.cache/caches/gatsby-plugin-image/3627492383.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentVisual_CaseStudyContentVisual__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: `#EFEFEF`
    },
    supertitle: "prototype",
    title: "Mockups",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/mockups.png",
      loading: "eager",
      width: 1218,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Mockups",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3659778103.json */ "./.cache/caches/gatsby-plugin-image/3659778103.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "test",
    title: "Iterate, iterate and iterate",
    text: `Aunt Bottie was created as our final Bootcamp project and we didn’t had much time to test our MVP solution. Having so, we would have validate at least the users understanding of the gift configuration steps, which is the most complex and important part of the app.\n\nWe have a backlog of improvements we would like to tackle that include taking advantage of AI for product recommendation and adding an order management system for admins. Before moving forward, the right approach would be to leverage the existing features, iterate on the current behaviors, than to increase the scope.`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyImage_CaseStudyImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Bottie/final.png",
      loading: "eager",
      width: 1350,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Final design",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4106150565.json */ "./.cache/caches/gatsby-plugin-image/4106150565.json")
    })
  }));
}

/***/ }),

/***/ "./src/components/CaseStudyContent5050/CaseStudyContent5050.css":
/*!**********************************************************************!*\
  !*** ./src/components/CaseStudyContent5050/CaseStudyContent5050.css ***!
  \**********************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/CaseStudyContentBlock/CaseStudyContentBlock.css":
/*!************************************************************************!*\
  !*** ./src/components/CaseStudyContentBlock/CaseStudyContentBlock.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/CaseStudyContentVisual/CaseStudyContentVisual.css":
/*!**************************************************************************!*\
  !*** ./src/components/CaseStudyContentVisual/CaseStudyContentVisual.css ***!
  \**************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/CaseStudyHeader/CaseStudyHeader.css":
/*!************************************************************!*\
  !*** ./src/components/CaseStudyHeader/CaseStudyHeader.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/CaseStudyImage/CaseStudyImage.css":
/*!**********************************************************!*\
  !*** ./src/components/CaseStudyImage/CaseStudyImage.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/CaseStudyIntro/CaseStudyIntro.css":
/*!**********************************************************!*\
  !*** ./src/components/CaseStudyIntro/CaseStudyIntro.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/CaseStudyProcess/CaseStudyProcess.css":
/*!**************************************************************!*\
  !*** ./src/components/CaseStudyProcess/CaseStudyProcess.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/header.css":
/*!***********************************!*\
  !*** ./src/components/header.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1490089735.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1490089735.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ae43f4668ef9c576ac90a9048eab3715/431e6/design-process.png","srcSet":"/static/ae43f4668ef9c576ac90a9048eab3715/a3d9f/design-process.png 208w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/eee49/design-process.png 415w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/431e6/design-process.png 830w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/5335b/design-process.png 1660w","sizes":"(min-width: 830px) 830px, 100vw"},"sources":[{"srcSet":"/static/ae43f4668ef9c576ac90a9048eab3715/7c7d5/design-process.avif 208w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/8839e/design-process.avif 415w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/4729c/design-process.avif 830w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/18bf3/design-process.avif 1660w","type":"image/avif","sizes":"(min-width: 830px) 830px, 100vw"},{"srcSet":"/static/ae43f4668ef9c576ac90a9048eab3715/80701/design-process.webp 208w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/fffe4/design-process.webp 415w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/e30e8/design-process.webp 830w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/cd5cf/design-process.webp 1660w","type":"image/webp","sizes":"(min-width: 830px) 830px, 100vw"}]},"width":830,"height":135}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2584646187.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2584646187.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/4b3b80cf61b379a2844539f9c9006775/2b5aa/flow.png","srcSet":"/static/4b3b80cf61b379a2844539f9c9006775/6fa93/flow.png 238w,\\n/static/4b3b80cf61b379a2844539f9c9006775/926e5/flow.png 475w,\\n/static/4b3b80cf61b379a2844539f9c9006775/2b5aa/flow.png 950w","sizes":"(min-width: 950px) 950px, 100vw"},"sources":[{"srcSet":"/static/4b3b80cf61b379a2844539f9c9006775/0a6b6/flow.avif 238w,\\n/static/4b3b80cf61b379a2844539f9c9006775/3f431/flow.avif 475w,\\n/static/4b3b80cf61b379a2844539f9c9006775/79c9e/flow.avif 950w","type":"image/avif","sizes":"(min-width: 950px) 950px, 100vw"},{"srcSet":"/static/4b3b80cf61b379a2844539f9c9006775/388f9/flow.webp 238w,\\n/static/4b3b80cf61b379a2844539f9c9006775/4c17d/flow.webp 475w,\\n/static/4b3b80cf61b379a2844539f9c9006775/f10c0/flow.webp 950w","type":"image/webp","sizes":"(min-width: 950px) 950px, 100vw"}]},"width":950,"height":2126}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3130820175.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3130820175.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e04ce384f61c539c1cd018eddcc0f943/325d5/main.png","srcSet":"/static/e04ce384f61c539c1cd018eddcc0f943/58bc7/main.png 239w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/9f98c/main.png 479w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/325d5/main.png 957w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/23995/main.png 1914w","sizes":"(min-width: 957px) 957px, 100vw"},"sources":[{"srcSet":"/static/e04ce384f61c539c1cd018eddcc0f943/982d5/main.avif 239w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/dbec2/main.avif 479w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/93325/main.avif 957w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/34261/main.avif 1914w","type":"image/avif","sizes":"(min-width: 957px) 957px, 100vw"},{"srcSet":"/static/e04ce384f61c539c1cd018eddcc0f943/e8311/main.webp 239w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/46381/main.webp 479w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/d833b/main.webp 957w,\\n/static/e04ce384f61c539c1cd018eddcc0f943/4ce77/main.webp 1914w","type":"image/webp","sizes":"(min-width: 957px) 957px, 100vw"}]},"width":957,"height":392}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3627492383.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3627492383.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1b78f778a1b3fc73d74df2c4fad5fbb7/e553b/styleguide.png","srcSet":"/static/1b78f778a1b3fc73d74df2c4fad5fbb7/a6a5e/styleguide.png 238w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/7c6f6/styleguide.png 475w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/e553b/styleguide.png 950w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/3b523/styleguide.png 1900w","sizes":"(min-width: 950px) 950px, 100vw"},"sources":[{"srcSet":"/static/1b78f778a1b3fc73d74df2c4fad5fbb7/2b02b/styleguide.avif 238w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/9f171/styleguide.avif 475w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/cbeb8/styleguide.avif 950w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/5ada3/styleguide.avif 1900w","type":"image/avif","sizes":"(min-width: 950px) 950px, 100vw"},{"srcSet":"/static/1b78f778a1b3fc73d74df2c4fad5fbb7/ba3ff/styleguide.webp 238w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/be6fd/styleguide.webp 475w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/51b99/styleguide.webp 950w,\\n/static/1b78f778a1b3fc73d74df2c4fad5fbb7/fa68f/styleguide.webp 1900w","type":"image/webp","sizes":"(min-width: 950px) 950px, 100vw"}]},"width":950,"height":1021}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3659778103.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3659778103.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9fdc92c4881c8594406ced1c4cd146a1/3b1c6/mockups.png","srcSet":"/static/9fdc92c4881c8594406ced1c4cd146a1/8b143/mockups.png 305w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/a7b1c/mockups.png 609w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/3b1c6/mockups.png 1218w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/dc207/mockups.png 2436w","sizes":"(min-width: 1218px) 1218px, 100vw"},"sources":[{"srcSet":"/static/9fdc92c4881c8594406ced1c4cd146a1/ebdd3/mockups.avif 305w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/5c5a2/mockups.avif 609w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/fda0c/mockups.avif 1218w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/0686a/mockups.avif 2436w","type":"image/avif","sizes":"(min-width: 1218px) 1218px, 100vw"},{"srcSet":"/static/9fdc92c4881c8594406ced1c4cd146a1/735e9/mockups.webp 305w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/f9ab0/mockups.webp 609w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/d8df9/mockups.webp 1218w,\\n/static/9fdc92c4881c8594406ced1c4cd146a1/eca91/mockups.webp 2436w","type":"image/webp","sizes":"(min-width: 1218px) 1218px, 100vw"}]},"width":1218,"height":1542}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4106150565.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4106150565.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e40d38e93106d2f320d7663b2fa65592/98e96/final.png","srcSet":"/static/e40d38e93106d2f320d7663b2fa65592/29f7c/final.png 338w,\\n/static/e40d38e93106d2f320d7663b2fa65592/73da5/final.png 675w,\\n/static/e40d38e93106d2f320d7663b2fa65592/98e96/final.png 1350w,\\n/static/e40d38e93106d2f320d7663b2fa65592/92eea/final.png 2700w","sizes":"(min-width: 1350px) 1350px, 100vw"},"sources":[{"srcSet":"/static/e40d38e93106d2f320d7663b2fa65592/3f7bd/final.avif 338w,\\n/static/e40d38e93106d2f320d7663b2fa65592/7ae85/final.avif 675w,\\n/static/e40d38e93106d2f320d7663b2fa65592/14292/final.avif 1350w,\\n/static/e40d38e93106d2f320d7663b2fa65592/72d0a/final.avif 2700w","type":"image/avif","sizes":"(min-width: 1350px) 1350px, 100vw"},{"srcSet":"/static/e40d38e93106d2f320d7663b2fa65592/f2c91/final.webp 338w,\\n/static/e40d38e93106d2f320d7663b2fa65592/e8150/final.webp 675w,\\n/static/e40d38e93106d2f320d7663b2fa65592/26944/final.webp 1350w,\\n/static/e40d38e93106d2f320d7663b2fa65592/76241/final.webp 2700w","type":"image/webp","sizes":"(min-width: 1350px) 1350px, 100vw"}]},"width":1350,"height":752}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/422913344.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/422913344.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/af68c393afe6a8c50381614ce7c3d030/22170/benchmark.png","srcSet":"/static/af68c393afe6a8c50381614ce7c3d030/56488/benchmark.png 238w,\\n/static/af68c393afe6a8c50381614ce7c3d030/5f2fb/benchmark.png 475w,\\n/static/af68c393afe6a8c50381614ce7c3d030/22170/benchmark.png 950w,\\n/static/af68c393afe6a8c50381614ce7c3d030/47657/benchmark.png 1900w","sizes":"(min-width: 950px) 950px, 100vw"},"sources":[{"srcSet":"/static/af68c393afe6a8c50381614ce7c3d030/c7ad8/benchmark.avif 238w,\\n/static/af68c393afe6a8c50381614ce7c3d030/c664d/benchmark.avif 475w,\\n/static/af68c393afe6a8c50381614ce7c3d030/02ea6/benchmark.avif 950w,\\n/static/af68c393afe6a8c50381614ce7c3d030/762fd/benchmark.avif 1900w","type":"image/avif","sizes":"(min-width: 950px) 950px, 100vw"},{"srcSet":"/static/af68c393afe6a8c50381614ce7c3d030/f77d0/benchmark.webp 238w,\\n/static/af68c393afe6a8c50381614ce7c3d030/06dcf/benchmark.webp 475w,\\n/static/af68c393afe6a8c50381614ce7c3d030/c1fa9/benchmark.webp 950w,\\n/static/af68c393afe6a8c50381614ce7c3d030/2d812/benchmark.webp 1900w","type":"image/webp","sizes":"(min-width: 950px) 950px, 100vw"}]},"width":950,"height":588}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/426699294.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/426699294.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8f8","images":{"fallback":{"src":"/static/0eb187511e071a77cb73d6f13dd9787b/1590c/goals.png","srcSet":"/static/0eb187511e071a77cb73d6f13dd9787b/f870c/goals.png 218w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/75b18/goals.png 436w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/1590c/goals.png 871w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/a824d/goals.png 1742w","sizes":"(min-width: 871px) 871px, 100vw"},"sources":[{"srcSet":"/static/0eb187511e071a77cb73d6f13dd9787b/5c390/goals.avif 218w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/8bd75/goals.avif 436w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/a3bbe/goals.avif 871w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/722ba/goals.avif 1742w","type":"image/avif","sizes":"(min-width: 871px) 871px, 100vw"},{"srcSet":"/static/0eb187511e071a77cb73d6f13dd9787b/b7e17/goals.webp 218w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/aae26/goals.webp 436w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/210aa/goals.webp 871w,\\n/static/0eb187511e071a77cb73d6f13dd9787b/aa78b/goals.webp 1742w","type":"image/webp","sizes":"(min-width: 871px) 871px, 100vw"}]},"width":871,"height":603}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/96024842.json":
/*!*********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/96024842.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/061c5355ca2b9aa93f4d20d8fd328fb6/decea/wireframes.png","srcSet":"/static/061c5355ca2b9aa93f4d20d8fd328fb6/cbd08/wireframes.png 305w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/f1304/wireframes.png 609w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/decea/wireframes.png 1218w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/bfd69/wireframes.png 2436w","sizes":"(min-width: 1218px) 1218px, 100vw"},"sources":[{"srcSet":"/static/061c5355ca2b9aa93f4d20d8fd328fb6/d0582/wireframes.avif 305w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/0bd04/wireframes.avif 609w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/95d77/wireframes.avif 1218w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/9b331/wireframes.avif 2436w","type":"image/avif","sizes":"(min-width: 1218px) 1218px, 100vw"},{"srcSet":"/static/061c5355ca2b9aa93f4d20d8fd328fb6/e6a62/wireframes.webp 305w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/c6961/wireframes.webp 609w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/5bfbc/wireframes.webp 1218w,\\n/static/061c5355ca2b9aa93f4d20d8fd328fb6/fdc5a/wireframes.webp 2436w","type":"image/webp","sizes":"(min-width: 1218px) 1218px, 100vw"}]},"width":1218,"height":1718}');

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-aunt-bottie-js.js.map