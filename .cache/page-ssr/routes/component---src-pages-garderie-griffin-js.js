exports.id = "component---src-pages-garderie-griffin-js";
exports.ids = ["component---src-pages-garderie-griffin-js"];
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
/* harmony export */   "hero": () => (/* binding */ hero),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
// Exports
var hero = "index-module--hero--82553";
var title = "index-module--title--20f3b";


/***/ }),

/***/ "./src/static/amc-resume.pdf":
/*!***********************************!*\
  !*** ./src/static/amc-resume.pdf ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/amc-resume-f6f715d181bb39684fc4fd4ed179ad5a.pdf");

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ X),
/* harmony export */   "MainImage": () => (/* binding */ D),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ Z),
/* harmony export */   "generateImageData": () => (/* binding */ b),
/* harmony export */   "getImage": () => (/* binding */ I),
/* harmony export */   "getImageData": () => (/* binding */ R),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ y),
/* harmony export */   "getSrc": () => (/* binding */ W),
/* harmony export */   "getSrcSet": () => (/* binding */ j),
/* harmony export */   "withArtDirection": () => (/* binding */ _)
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
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
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
    className: "text-icon_button"
  }, props.buttonLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "intro_right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "role"
  }, props.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "client"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.client), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, props.date))));
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
/* harmony import */ var _static_amc_resume_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/amc-resume.pdf */ "./src/static/amc-resume.pdf");





function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "primary-link",
    to: "/"
  }, "Anne-Marie Champoux")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "secondary-link",
    to: "/"
  }, "Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "secondary-link",
    to: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "secondary-link",
    rel: "noopener noreferrer",
    href: _static_amc_resume_pdf__WEBPACK_IMPORTED_MODULE_3__["default"],
    target: "_blank"
  }, " Resume"))));
}
;
// <header
//   style={{
//     margin: `0 auto`,
//     padding: `var(--space-4) var(--size-gutter)`,
//     display: `flex`,
//     alignItems: `center`,
//     justifyContent: `space-between`,
//   }}
// >
//   <Link
//     to="/"
//     style={{
//       fontSize: `var(--font-sm)`,
//       textDecoration: `none`,
//     }}
//   >
//     {siteTitle}
//   </Link>
//   <h2>About</h2>
//   <img
//     alt="Gatsby logo"
//     height={20}
//     style={{ margin: 0 }}
//     src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"
//   />
// </header>

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

/***/ "./src/pages/garderie-griffin.js?export=default":
/*!******************************************************!*\
  !*** ./src/pages/garderie-griffin.js?export=default ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GarderieGriffinPage)
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

function GarderieGriffinPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyHeader_CaseStudyHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      backgroundColor: `#FFF3E7`
    },
    title: "Garderie Griffin",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/main.png",
      loading: "eager",
      width: 620,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Garderie griffin website",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1424201611.json */ "./.cache/caches/gatsby-plugin-image/1424201611.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyIntro_CaseStudyIntro__WEBPACK_IMPORTED_MODULE_4__["default"], {
    description: 'Garderie Griffin is a private kindergarten, well established  in Montreal, Griffintown since 10 years.\n\nWord of mouth was mainly how they acquire new clients. With the rise of newcomers in the neighborhood, a responsive website easily maintenable was a must have.',
    buttonLabel: "Visit website",
    link: "https://garderiegriffin.com/en/home/",
    role: 'User Experience\nVisual Design\nWordpress Integration',
    client: "Garderie Griffin",
    date: "2021 - today"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyProcess_CaseStudyProcess__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      backgroundColor: `#FFF3E7`
    },
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/design-process.png",
      loading: "eager",
      width: 830,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Design process",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3776654823.json */ "./.cache/caches/gatsby-plugin-image/3776654823.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "empathize",
    title: "User interviews",
    text: 'Being a mother of two, I know how it feels trying to find the perfect kindergarten for your kid, visit a lot of places, subscribe to too many waiting lists, and start to stress out a few weeks before going back to work.\n\nAlthough I had my journey, I wanted to hear about the experience of other parents to have a clear understanding of the various challenges when searching for a kindergarten. I conducted interviews with four parents of Griffin Kindergarten and two parents who choose another place in the neighborhood.\n\nI asked them to explain their search process, their motivations, frustrations, and how they made their choice.'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "define",
    title: "User personas",
    text: "A lot of good insights came from the user interviews. Depending on the family situation, their location, the age of their kids, the needs where different. Those findings allowed me to define the main user personas to refer to along this project.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/personas.png",
      loading: "eager",
      width: 915,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User personas",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/222763410.json */ "./.cache/caches/gatsby-plugin-image/222763410.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContent5050_CaseStudyContent5050__WEBPACK_IMPORTED_MODULE_7__["default"], {
    b1Style: {
      backgroundColor: `#FFF3E7`
    },
    b1Supertitle: "define",
    b1Title: "The problem",
    b1ListItem1: "People needs to have a good impression from the first click on the website.",
    b1ListItem2: "People needs to understand he culture, the values and learn about the team.",
    b1ListItem3: "People needs to access quickly to practical information.",
    b2Style: {
      backgroundColor: `#FFF3E7`
    },
    b2Supertitle: "ideate",
    b2Title: "The solution",
    b2ListItem1: "The use of vibrant colors and soft imagery can communicate comfort and childhood.",
    b2ListItem2: "In-depth and well structured explanatory content pages.",
    b2ListItem3: "Access to key sections from the first level of navigation."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "prototype",
    title: "User flow",
    text: "The new mom and the professional constitute the major part of Garderie Griffin customer base. To make sure that the solution will align with their navigation behaviour, I built a user flow.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/userflow.png",
      loading: "eager",
      width: 641,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1565273313.json */ "./.cache/caches/gatsby-plugin-image/1565273313.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "prototype",
    title: "Information architecture",
    text: "Based on the user needs, their navigation pattern and the information available about the kindergarten, an information architecture was created and helped to structure the new website.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/arbo.png",
      loading: "eager",
      width: 950,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2597828552.json */ "./.cache/caches/gatsby-plugin-image/2597828552.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentVisual_CaseStudyContentVisual__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: `#EFEFEF`
    },
    supertitle: "prototype",
    title: "Wireframing",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/wireframes.png",
      loading: "eager",
      width: 1220,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "Website wireframes",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3436535463.json */ "./.cache/caches/gatsby-plugin-image/3436535463.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "prototype",
    title: "UI style guide",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/styleguide.png",
      loading: "eager",
      width: 950,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/858391228.json */ "./.cache/caches/gatsby-plugin-image/858391228.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentVisual_CaseStudyContentVisual__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      backgroundColor: `#EFEFEF`
    },
    supertitle: "prototype",
    title: "Mockups",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/ui.png",
      loading: "eager",
      width: 1220,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "website ui mockups",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/428962660.json */ "./.cache/caches/gatsby-plugin-image/428962660.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "prototype",
    title: "Reusable components",
    text: "One of the objectives of the new website was to be easy to maintain. To make sure that the team members without prior programming knowledge can update the website, several reusable components have been created.",
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/components.png",
      loading: "eager",
      width: 950,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3218617686.json */ "./.cache/caches/gatsby-plugin-image/3218617686.json")
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyContentBlock_CaseStudyContentBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    supertitle: "test",
    title: "Usability testing",
    text: "Many iterations were done on the information architecture and mockups until most of the key users feed back were addressed. Today, the website is still evolving and it is really helpful to organize user testing session before implementing new features."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CaseStudyImage_CaseStudyImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    image: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.StaticImage, {
      src: "../images/Griffin/final.png",
      loading: "eager",
      width: 1353,
      quality: 100,
      formats: ["auto", "webp", "avif"],
      alt: "User flow",
      __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3240819332.json */ "./.cache/caches/gatsby-plugin-image/3240819332.json")
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

/***/ "./.cache/caches/gatsby-plugin-image/1424201611.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1424201611.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/995a0b59e45093f5e6099117fe8c9869/289c2/main.png","srcSet":"/static/995a0b59e45093f5e6099117fe8c9869/7d49a/main.png 155w,\\n/static/995a0b59e45093f5e6099117fe8c9869/78789/main.png 310w,\\n/static/995a0b59e45093f5e6099117fe8c9869/289c2/main.png 620w,\\n/static/995a0b59e45093f5e6099117fe8c9869/ab73c/main.png 1240w","sizes":"(min-width: 620px) 620px, 100vw"},"sources":[{"srcSet":"/static/995a0b59e45093f5e6099117fe8c9869/ccc92/main.avif 155w,\\n/static/995a0b59e45093f5e6099117fe8c9869/8122c/main.avif 310w,\\n/static/995a0b59e45093f5e6099117fe8c9869/3644c/main.avif 620w,\\n/static/995a0b59e45093f5e6099117fe8c9869/33f45/main.avif 1240w","type":"image/avif","sizes":"(min-width: 620px) 620px, 100vw"},{"srcSet":"/static/995a0b59e45093f5e6099117fe8c9869/581f3/main.webp 155w,\\n/static/995a0b59e45093f5e6099117fe8c9869/1c6cb/main.webp 310w,\\n/static/995a0b59e45093f5e6099117fe8c9869/7e5b0/main.webp 620w,\\n/static/995a0b59e45093f5e6099117fe8c9869/84433/main.webp 1240w","type":"image/webp","sizes":"(min-width: 620px) 620px, 100vw"}]},"width":620,"height":389}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1565273313.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1565273313.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/96d48ca68b3e1614f203cbf3306a5aed/5ff35/userflow.png","srcSet":"/static/96d48ca68b3e1614f203cbf3306a5aed/3581b/userflow.png 160w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/416b6/userflow.png 321w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/5ff35/userflow.png 641w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/0132d/userflow.png 1282w","sizes":"(min-width: 641px) 641px, 100vw"},"sources":[{"srcSet":"/static/96d48ca68b3e1614f203cbf3306a5aed/2cbbf/userflow.avif 160w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/0079d/userflow.avif 321w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/82e6c/userflow.avif 641w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/cd93e/userflow.avif 1282w","type":"image/avif","sizes":"(min-width: 641px) 641px, 100vw"},{"srcSet":"/static/96d48ca68b3e1614f203cbf3306a5aed/5faa0/userflow.webp 160w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/a50ca/userflow.webp 321w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/fc032/userflow.webp 641w,\\n/static/96d48ca68b3e1614f203cbf3306a5aed/967ee/userflow.webp 1282w","type":"image/webp","sizes":"(min-width: 641px) 641px, 100vw"}]},"width":641,"height":1193}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/222763410.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/222763410.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/465f4dbc9a9bb8dcac6a191de91543d0/1bd79/personas.png","srcSet":"/static/465f4dbc9a9bb8dcac6a191de91543d0/46e82/personas.png 229w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/df540/personas.png 458w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/1bd79/personas.png 915w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/a8053/personas.png 1830w","sizes":"(min-width: 915px) 915px, 100vw"},"sources":[{"srcSet":"/static/465f4dbc9a9bb8dcac6a191de91543d0/f3de3/personas.avif 229w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/c004e/personas.avif 458w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/4d95d/personas.avif 915w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/9acce/personas.avif 1830w","type":"image/avif","sizes":"(min-width: 915px) 915px, 100vw"},{"srcSet":"/static/465f4dbc9a9bb8dcac6a191de91543d0/5a5f9/personas.webp 229w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/dc6ab/personas.webp 458w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/2534b/personas.webp 915w,\\n/static/465f4dbc9a9bb8dcac6a191de91543d0/aaebd/personas.webp 1830w","type":"image/webp","sizes":"(min-width: 915px) 915px, 100vw"}]},"width":915,"height":862.0000000000001}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2597828552.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2597828552.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/af3b18a79339e2efe579872fb28fefd8/04345/arbo.png","srcSet":"/static/af3b18a79339e2efe579872fb28fefd8/0bc0a/arbo.png 238w,\\n/static/af3b18a79339e2efe579872fb28fefd8/739ad/arbo.png 475w,\\n/static/af3b18a79339e2efe579872fb28fefd8/04345/arbo.png 950w","sizes":"(min-width: 950px) 950px, 100vw"},"sources":[{"srcSet":"/static/af3b18a79339e2efe579872fb28fefd8/d56bf/arbo.avif 238w,\\n/static/af3b18a79339e2efe579872fb28fefd8/d8b54/arbo.avif 475w,\\n/static/af3b18a79339e2efe579872fb28fefd8/4b963/arbo.avif 950w","type":"image/avif","sizes":"(min-width: 950px) 950px, 100vw"},{"srcSet":"/static/af3b18a79339e2efe579872fb28fefd8/1d807/arbo.webp 238w,\\n/static/af3b18a79339e2efe579872fb28fefd8/55b56/arbo.webp 475w,\\n/static/af3b18a79339e2efe579872fb28fefd8/0b2d8/arbo.webp 950w","type":"image/webp","sizes":"(min-width: 950px) 950px, 100vw"}]},"width":950,"height":582}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3218617686.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3218617686.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d056f1cc47fa1bc3de3b5dca7732a247/cbbd8/components.png","srcSet":"/static/d056f1cc47fa1bc3de3b5dca7732a247/fd866/components.png 238w,\\n/static/d056f1cc47fa1bc3de3b5dca7732a247/eb0e9/components.png 475w,\\n/static/d056f1cc47fa1bc3de3b5dca7732a247/cbbd8/components.png 950w","sizes":"(min-width: 950px) 950px, 100vw"},"sources":[{"srcSet":"/static/d056f1cc47fa1bc3de3b5dca7732a247/2d029/components.avif 238w,\\n/static/d056f1cc47fa1bc3de3b5dca7732a247/bae25/components.avif 475w,\\n/static/d056f1cc47fa1bc3de3b5dca7732a247/7520e/components.avif 950w","type":"image/avif","sizes":"(min-width: 950px) 950px, 100vw"},{"srcSet":"/static/d056f1cc47fa1bc3de3b5dca7732a247/ead0b/components.webp 238w,\\n/static/d056f1cc47fa1bc3de3b5dca7732a247/958d9/components.webp 475w,\\n/static/d056f1cc47fa1bc3de3b5dca7732a247/ddea5/components.webp 950w","type":"image/webp","sizes":"(min-width: 950px) 950px, 100vw"}]},"width":950,"height":2318}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3240819332.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3240819332.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2b6299ff034dafc8da949b0e8a2e6d88/ded39/final.png","srcSet":"/static/2b6299ff034dafc8da949b0e8a2e6d88/29f7c/final.png 338w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/3e46b/final.png 677w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/ded39/final.png 1353w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/513d3/final.png 2706w","sizes":"(min-width: 1353px) 1353px, 100vw"},"sources":[{"srcSet":"/static/2b6299ff034dafc8da949b0e8a2e6d88/3f7bd/final.avif 338w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/5d994/final.avif 677w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/c9c86/final.avif 1353w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/550cb/final.avif 2706w","type":"image/avif","sizes":"(min-width: 1353px) 1353px, 100vw"},{"srcSet":"/static/2b6299ff034dafc8da949b0e8a2e6d88/f2c91/final.webp 338w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/b454d/final.webp 677w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/c3032/final.webp 1353w,\\n/static/2b6299ff034dafc8da949b0e8a2e6d88/cfd2f/final.webp 2706w","type":"image/webp","sizes":"(min-width: 1353px) 1353px, 100vw"}]},"width":1353,"height":753}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3436535463.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3436535463.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/7c0f145220c08698ba251e31eaa22faf/d01ef/wireframes.png","srcSet":"/static/7c0f145220c08698ba251e31eaa22faf/a5e85/wireframes.png 305w,\\n/static/7c0f145220c08698ba251e31eaa22faf/148db/wireframes.png 610w,\\n/static/7c0f145220c08698ba251e31eaa22faf/d01ef/wireframes.png 1220w,\\n/static/7c0f145220c08698ba251e31eaa22faf/4062c/wireframes.png 2440w","sizes":"(min-width: 1220px) 1220px, 100vw"},"sources":[{"srcSet":"/static/7c0f145220c08698ba251e31eaa22faf/009aa/wireframes.avif 305w,\\n/static/7c0f145220c08698ba251e31eaa22faf/4fabf/wireframes.avif 610w,\\n/static/7c0f145220c08698ba251e31eaa22faf/fb6a6/wireframes.avif 1220w,\\n/static/7c0f145220c08698ba251e31eaa22faf/02fcc/wireframes.avif 2440w","type":"image/avif","sizes":"(min-width: 1220px) 1220px, 100vw"},{"srcSet":"/static/7c0f145220c08698ba251e31eaa22faf/10d1f/wireframes.webp 305w,\\n/static/7c0f145220c08698ba251e31eaa22faf/7eba5/wireframes.webp 610w,\\n/static/7c0f145220c08698ba251e31eaa22faf/cbc8c/wireframes.webp 1220w,\\n/static/7c0f145220c08698ba251e31eaa22faf/d1205/wireframes.webp 2440w","type":"image/webp","sizes":"(min-width: 1220px) 1220px, 100vw"}]},"width":1220,"height":951.9999999999999}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3776654823.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3776654823.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ae43f4668ef9c576ac90a9048eab3715/431e6/design-process.png","srcSet":"/static/ae43f4668ef9c576ac90a9048eab3715/a3d9f/design-process.png 208w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/eee49/design-process.png 415w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/431e6/design-process.png 830w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/5335b/design-process.png 1660w","sizes":"(min-width: 830px) 830px, 100vw"},"sources":[{"srcSet":"/static/ae43f4668ef9c576ac90a9048eab3715/7c7d5/design-process.avif 208w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/8839e/design-process.avif 415w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/4729c/design-process.avif 830w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/18bf3/design-process.avif 1660w","type":"image/avif","sizes":"(min-width: 830px) 830px, 100vw"},{"srcSet":"/static/ae43f4668ef9c576ac90a9048eab3715/80701/design-process.webp 208w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/fffe4/design-process.webp 415w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/e30e8/design-process.webp 830w,\\n/static/ae43f4668ef9c576ac90a9048eab3715/cd5cf/design-process.webp 1660w","type":"image/webp","sizes":"(min-width: 830px) 830px, 100vw"}]},"width":830,"height":135}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/428962660.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/428962660.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b77c6b269031dbd2fe002c48648cd7f1/2934f/ui.png","srcSet":"/static/b77c6b269031dbd2fe002c48648cd7f1/efca8/ui.png 305w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/ab663/ui.png 610w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/2934f/ui.png 1220w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/49bb7/ui.png 2440w","sizes":"(min-width: 1220px) 1220px, 100vw"},"sources":[{"srcSet":"/static/b77c6b269031dbd2fe002c48648cd7f1/da750/ui.avif 305w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/902a2/ui.avif 610w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/ff9cb/ui.avif 1220w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/7e88f/ui.avif 2440w","type":"image/avif","sizes":"(min-width: 1220px) 1220px, 100vw"},{"srcSet":"/static/b77c6b269031dbd2fe002c48648cd7f1/c8b8d/ui.webp 305w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/bff36/ui.webp 610w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/dd3d5/ui.webp 1220w,\\n/static/b77c6b269031dbd2fe002c48648cd7f1/e02ce/ui.webp 2440w","type":"image/webp","sizes":"(min-width: 1220px) 1220px, 100vw"}]},"width":1220,"height":562}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/858391228.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/858391228.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/6835c912b88cdc926d44f49a7fa9937c/264d3/styleguide.png","srcSet":"/static/6835c912b88cdc926d44f49a7fa9937c/a1cbf/styleguide.png 238w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/014cf/styleguide.png 475w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/264d3/styleguide.png 950w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/e2bf1/styleguide.png 1900w","sizes":"(min-width: 950px) 950px, 100vw"},"sources":[{"srcSet":"/static/6835c912b88cdc926d44f49a7fa9937c/f5c98/styleguide.avif 238w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/5ca0a/styleguide.avif 475w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/db48b/styleguide.avif 950w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/9711a/styleguide.avif 1900w","type":"image/avif","sizes":"(min-width: 950px) 950px, 100vw"},{"srcSet":"/static/6835c912b88cdc926d44f49a7fa9937c/0815c/styleguide.webp 238w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/4471a/styleguide.webp 475w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/7459e/styleguide.webp 950w,\\n/static/6835c912b88cdc926d44f49a7fa9937c/4eedf/styleguide.webp 1900w","type":"image/webp","sizes":"(min-width: 950px) 950px, 100vw"}]},"width":950,"height":721}');

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
//# sourceMappingURL=component---src-pages-garderie-griffin-js.js.map