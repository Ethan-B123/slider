/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/display/tile.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/display/tile.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".game-tile-container {\\n  position: absolute;\\n  background-color: #ccf;\\n  width: 500px;\\n  height: 500px;\\n  overflow: hidden;\\n  top: 200px;\\n  cursor: pointer;\\n}\\n\\n.game-tile {\\n  position: absolute;\\n  background-color: #fcc;\\n  width: 100px;\\n  height: 100px;\\n  border: 0px solid #fff;\\n  transition: all 300ms ease-in-out, z-index 0ms linear,\\n    border 200ms ease-in-out;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/display/tile.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/display/board.js":
/*!******************************!*\
  !*** ./src/display/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/display/tile.js\");\n\n\nclass Board {\n  constructor({ containerSize, dimensions, containerDom }) {\n    this.bindFunctions();\n    this.grid = {};\n    this.dimensions = dimensions;\n    this.containerSize = containerSize;\n    this.containerDom = containerDom;\n    const size = {\n      x: containerSize.x / dimensions.x,\n      y: containerSize.y / dimensions.y\n    };\n    for (let y = 0; y < dimensions.y; y++) {\n      for (let x = 0; x < dimensions.x; x++) {\n        this.grid[`${x},${y}`] = new _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          pos: { x: x * size.x, y: y * size.y },\n          rowsCols: { ...dimensions },\n          containerSize: { ...containerSize },\n          customStyles: this.createCustomStyle(x, y),\n          parent: containerDom\n        });\n      }\n    }\n  }\n\n  findDimension({ x, y }) {\n    return {\n      x: Math.floor((x / this.containerSize.x) * this.dimensions.x),\n      y: Math.floor((y / this.containerSize.y) * this.dimensions.y)\n    };\n  }\n\n  createCustomStyle(x, y, dimX = this.dimensions.x, dimY = this.dimensions.y) {\n    return {\n      backgroundColor: `hsl(${(y / dimY) * 255},${100 - (y / dimY) * 50}%,${30 +\n        (x / dimX) * 50}%)`\n    };\n  }\n\n  setTileStyle(tileKey, styles) {\n    this.grid[tileKey].applyStyle(styles);\n  }\n\n  updateGrid(newGrid) {\n    Object.keys(newGrid).forEach(key => {\n      const tile = this.grid[key];\n      tile.move(\n        newGrid[key][0] * (this.containerSize.x / this.dimensions.x),\n        newGrid[key][1] * (this.containerSize.y / this.dimensions.y)\n      );\n    });\n  }\n\n  async finishTransition() {\n    Object.keys(this.grid).forEach(key => {\n      this.grid[key].applyStyle({\n        transition: \"none\"\n      });\n    });\n    await new Promise(res => requestAnimationFrame(res));\n    Object.keys(this.grid).forEach(key => {\n      // if (key === \"0,0\") debugger;\n      this.grid[key].applyStyle({\n        transition: null\n      });\n    });\n  }\n\n  moveGroup(group, axis, amount) {\n    group.forEach(key => {\n      const tile = this.grid[key];\n      const { x: oldX, y: oldY } = tile.pos;\n      tile.move(\n        oldX + (axis === \"x\" ? amount : 0),\n        oldY + (axis === \"y\" ? amount : 0)\n      );\n    });\n  }\n\n  testingMove(dist) {\n    for (let x = 0; x < this.dimensions.x; x++) {\n      const tile = this.grid[`${x},1`];\n      const { x: oldX, y } = tile.pos;\n      tile.move(oldX + dist, y);\n    }\n  }\n\n  bindFunctions() {\n    this.findDimension = this.findDimension.bind(this);\n    this.createCustomStyle = this.createCustomStyle.bind(this);\n    this.updateGrid = this.updateGrid.bind(this);\n    this.moveGroup = this.moveGroup.bind(this);\n    this.testingMove = this.testingMove.bind(this);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./src/display/board.js?");

/***/ }),

/***/ "./src/display/tile.css":
/*!******************************!*\
  !*** ./src/display/tile.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./tile.css */ \"./node_modules/css-loader/dist/cjs.js!./src/display/tile.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/display/tile.css?");

/***/ }),

/***/ "./src/display/tile.js":
/*!*****************************!*\
  !*** ./src/display/tile.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.css */ \"./src/display/tile.css\");\n/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tile_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Tile {\n  constructor({ pos, containerSize, rowsCols, customStyles, parent }) {\n    this.bindFunctions();\n    this.pos = pos;\n    this.customStyles = customStyles;\n    this.containerSize = containerSize;\n    this.rowsCols = rowsCols;\n    this.parent = parent;\n    this.createDomTiles(pos, containerSize, rowsCols, parent);\n    this.appendTo(parent);\n  }\n\n  move(x, y) {\n    this.pos = { x, y };\n    this.updateDomTiles();\n  }\n\n  appendTo(domNode) {\n    [\"dom_offX\", \"dom_offY\", \"dom_offXY\", \"dom_on\"].forEach(domKey => {\n      domNode.appendChild(this[domKey]);\n    });\n  }\n\n  removeFromDom() {\n    [\"dom_offX\", \"dom_offY\", \"dom_offXY\", \"dom_on\"].forEach(domKey => {\n      this[domKey].remove();\n    });\n  }\n\n  applyStyle(style) {\n    [\"dom_offX\", \"dom_offY\", \"dom_offXY\", \"dom_on\"].forEach(domKey => {\n      const tile = this[domKey];\n      Object.assign(tile.style, style);\n    });\n  }\n\n  applyCustomStyles(posKey, customStyles = this.customStyles) {\n    const tile = this[\"dom_\" + posKey];\n    Object.assign(tile.style, customStyles);\n  }\n\n  updateDomTiles(\n    pos = this.pos,\n    containerSize = this.containerSize,\n    rowsCols = this.rowsCols\n  ) {\n    const { makePositions, updateStyle, appendTo, parent } = this;\n    const height = containerSize.y / rowsCols.x;\n    const width = containerSize.x / rowsCols.y;\n    const positions = makePositions(pos, containerSize);\n    Object.keys(positions).forEach(posKey => {\n      const pos = positions[posKey];\n      const offscreen =\n        pos.x + width < 0 ||\n        pos.y + height < 0 ||\n        pos.x > containerSize.x ||\n        pos.y > containerSize.y;\n      updateStyle(posKey, pos, width, height, offscreen);\n    });\n    this.updateNames();\n  }\n\n  createDomTiles(\n    pos = this.pos,\n    containerSize = this.containerSize,\n    rowsCols = this.rowsCols,\n    parent = this.parent\n  ) {\n    const {\n      applyCustomStyles,\n      updateDomTiles,\n      createDomTile,\n      makePositions\n    } = this;\n    const positions = makePositions(pos, containerSize);\n    Object.keys(positions).forEach(posKey => {\n      this[\"dom_\" + posKey] = createDomTile();\n      applyCustomStyles(posKey);\n    });\n    updateDomTiles(...arguments);\n  }\n\n  createDomTile() {\n    const tile = document.createElement(\"div\");\n    tile.classList.add(\"game-tile\");\n    return tile;\n  }\n\n  updateStyle(posKey, pos, width, height, offscreen) {\n    const tile = this[\"dom_\" + posKey];\n    tile.style.left = pos.x + \"px\";\n    tile.style.top = pos.y + \"px\";\n    tile.style.width = width + \"px\";\n    tile.style.height = height + \"px\";\n    tile.style.zIndex = offscreen ? -1 : 1;\n  }\n\n  makePositions(pos, containerSize = this.containerSize) {\n    const result = {};\n    const { offset, wrap } = this;\n    result.offX = offset(pos, true, containerSize);\n    result.offY = offset(pos, false, containerSize);\n    result.offXY = offset(\n      offset(pos, true, containerSize),\n      false,\n      containerSize\n    );\n    const current = { ...pos };\n    result.on = current;\n    [\"offX\", \"offY\", \"offXY\", \"on\"].forEach(key => {\n      result[key].x = wrap(result[key].x, true, containerSize);\n      result[key].y = wrap(result[key].y, false, containerSize);\n    });\n    return result;\n  }\n\n  findOff(pos, containerSize = this.containerSize) {\n    const result = { x: false, y: false };\n    if (pos.x < 0 || pos.x >= containerSize.x) {\n      result.x = true;\n    }\n    if (pos.y < 0 || pos.y >= containerSize.y) {\n      result.y = true;\n    }\n    return result;\n  }\n\n  updateNames() {\n    const old = {};\n    const updated = {};\n    [\"offX\", \"offY\", \"offXY\", \"on\"].forEach(key => {\n      const node = this[\"dom_\" + key];\n      old[\"dom_\" + key] = node;\n    });\n    [\"offX\", \"offY\", \"offXY\", \"on\"].forEach(key => {\n      const node = this[\"dom_\" + key];\n      const pos = {\n        x: parseInt(node.style.left),\n        y: parseInt(node.style.top)\n      };\n      const { x: offX, y: offY } = this.findOff(pos);\n      if (offX && offY) {\n        updated[\"dom_offXY\"] = node;\n      } else if (offX) {\n        updated[\"dom_offX\"] = node;\n      } else if (offY) {\n        updated[\"dom_offY\"] = node;\n      } else {\n        updated[\"dom_on\"] = node;\n        this.pos.x = parseInt(node.style.left)\n        this.pos.y = parseInt(node.style.right)\n      }\n    });\n    Object.assign(this, updated);\n  }\n\n  offset(pos, xAxis, containerSize = this.containerSize) {\n    const axis = xAxis ? \"x\" : \"y\";\n    const offset = containerSize[axis];\n    const oldValue = pos[axis];\n    return { ...pos, [axis]: oldValue + offset };\n  }\n\n  wrap(value, xAxis, containerSize = this.containerSize) {\n    const axis = xAxis ? \"x\" : \"y\";\n    const offset = containerSize[axis];\n    const halfOffet = offset / 2;\n    const oldValue = value;\n    let shifted = (halfOffet + oldValue) % (offset * 2);\n    if (shifted < 0) shifted += offset * 2;\n    return shifted - halfOffet;\n  }\n\n  bindFunctions() {\n    this.move = this.move.bind(this);\n    this.updateDomTiles = this.updateDomTiles.bind(this);\n    this.createDomTiles = this.createDomTiles.bind(this);\n    this.createDomTile = this.createDomTile.bind(this);\n    this.updateStyle = this.updateStyle.bind(this);\n    this.makePositions = this.makePositions.bind(this);\n    this.offset = this.offset.bind(this);\n    this.wrap = this.wrap.bind(this);\n    this.appendTo = this.appendTo.bind(this);\n    this.removeFromDom = this.removeFromDom.bind(this);\n    this.applyCustomStyles = this.applyCustomStyles.bind(this);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n\n//# sourceURL=webpack:///./src/display/tile.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display_tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/tile */ \"./src/display/tile.js\");\n/* harmony import */ var _display_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/board */ \"./src/display/board.js\");\n/* harmony import */ var _logic_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/logic */ \"./src/logic/logic.js\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input */ \"./src/input/input.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nwindow.Tile = _display_tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nwindow.KeyInput = _input_input__WEBPACK_IMPORTED_MODULE_3__[\"KeyInput\"];\n\nwindow.makeGame = () => {\n  let currentMouseSpot = null;\n  let currentTileKey = null;\n\n  const board = (window.board = new _display_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    containerSize: { x: 500, y: 500 },\n    dimensions: { x: 4, y: 4 },\n    containerDom: document.querySelector(\".game-tile-container\")\n  }));\n\n  const logic = (window.logic = new _logic_logic__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    dimensions: { x: 4, y: 4 },\n    onUpdate: window.board.updateGrid.bind(window.board)\n  }));\n\n  const keyInput = (window.keyInput = new _input_input__WEBPACK_IMPORTED_MODULE_3__[\"KeyInput\"]({\n    element: document,\n    a: updateStyleAfter(() => logic.fullMove(-1, 0, currentMouseSpot)),\n    d: updateStyleAfter(() => logic.fullMove(1, 0, currentMouseSpot)),\n    w: updateStyleAfter(() => logic.fullMove(0, -1, currentMouseSpot)),\n    s: updateStyleAfter(() => logic.fullMove(0, 1, currentMouseSpot))\n  }));\n\n  const mouseInput = (window.mouseInput = new _input_input__WEBPACK_IMPORTED_MODULE_3__[\"MouseInput\"]({\n    element: document.querySelector(\".game-tile-container\"),\n    onMouseMove: xy => {\n      const mouseSpotObj = board.findDimension(xy);\n      const nextTileKey = logic.tileKeyAtDimension(mouseSpotObj);\n      if (!nextTileKey) return;\n      const nextMouseSpot = `${mouseSpotObj.x},${mouseSpotObj.y}`;\n      if (nextTileKey !== currentTileKey) {\n        if (currentTileKey) {\n          board.setTileStyle(currentTileKey, {\n            border: \"0px solid #fff\"\n          });\n        }\n        board.setTileStyle(nextTileKey, {\n          border: \"10px solid #fff\"\n        });\n        currentMouseSpot = nextMouseSpot;\n        currentTileKey = nextTileKey;\n      }\n    }\n  }));\n\n  function updateStyleAfter(fn) {\n    // this is hacky\n    return async () => {\n      if (!currentMouseSpot) return;\n      const x = parseInt(currentMouseSpot.split(\",\")[0]);\n      const y = parseInt(currentMouseSpot.split(\",\")[1]);\n      // console.log(mouseSpotObj);\n      await board.finishTransition();\n      board.setTileStyle(currentTileKey, {\n        border: \"0px solid #fff\"\n      });\n      fn();\n      const nextTileKey = logic.tileKeyAtDimension({ x, y });\n      currentTileKey = nextTileKey;\n\n      // console.log({ x, y });\n      // console.log(nextTileKey);\n\n      board.setTileStyle(nextTileKey, {\n        border: \"10px solid #fff\"\n      });\n    };\n  }\n};\n\nwindow.run = () => {\n  let axis = \"x\";\n  let moves = 0;\n  const fn = () => {\n    setTimeout(fn, 400);\n    window.logic.grab(axis, [moves % 5, moves % 5]);\n    window.logic.move(1);\n    window.logic.snap();\n    moves++;\n    axis = axis === \"x\" ? \"y\" : \"x\";\n  };\n  fn();\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => window.makeGame());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input/input.js":
/*!****************************!*\
  !*** ./src/input/input.js ***!
  \****************************/
/*! exports provided: MouseInput, KeyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MouseInput\", function() { return MouseInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyInput\", function() { return KeyInput; });\nclass MouseInput {\n  constructor({ element, onMouseMove }) {\n    this._onMouseMove = this._onMouseMove.bind(this);\n    this.onMouseMove = onMouseMove;\n    this.element = element;\n    element.addEventListener(\"mousemove\", this._onMouseMove);\n  }\n\n  remove() {\n    element.removeEventListener(\"mousemove\", this._onMouseMove);\n  }\n\n  _onMouseMove(e) {\n    const rect = e.currentTarget.getBoundingClientRect();\n    const x = e.clientX - rect.left;\n    const y = e.clientY - rect.top;\n    this.onMouseMove({ x, y });\n  }\n}\n\nclass KeyInput {\n  constructor({ element, ...keys }) {\n    this.keys = keys;\n    this.element = element;\n    this._onKeyDown = this._onKeyDown.bind(this);\n    element.addEventListener(\"keypress\", this._onKeyDown);\n  }\n\n  remove() {\n    element.removeEventListener(\"mouseover\", this._onMouseOver);\n  }\n\n  _onKeyDown(e) {\n    if(typeof this.keys[e.key] === \"function\")\n    this.keys[e.key]();\n  }\n}\n\n//# sourceURL=webpack:///./src/input/input.js?");

/***/ }),

/***/ "./src/logic/logic.js":
/*!****************************!*\
  !*** ./src/logic/logic.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Logic {\n  constructor({ dimensions, onUpdate }) {\n    this.dimensions = dimensions;\n    this.onUpdate = onUpdate;\n    this._onUpdate = () => this.onUpdate(this.cloneTiles());\n    this.currentAxis = null;\n    this.currentTile = null;\n    this.tiles = {};\n    for (let y = 0; y < dimensions.y; y++) {\n      for (let x = 0; x < dimensions.x; x++) {\n        this.tiles[`${x},${y}`] = [x, y];\n      }\n    }\n  }\n\n  tileKeyAtDimension({ x, y }) {\n    return Object.keys(this.tiles).find(\n      key =>\n        this.tiles[key][0] === x &&\n        this.tiles[key][1] === y\n    );\n  }\n\n  cloneTiles() {\n    const tileClone = {};\n    Object.keys(this.tiles).forEach(key => {\n      tileClone[key] = this.tiles[key].slice();\n    });\n    return tileClone;\n  }\n\n  fullMove(x, y, tileLocation) {\n    if (!tileLocation) return;\n    const axis = x ? \"x\" : \"y\";\n    const amount = x || y;\n    this.grab(axis, tileLocation);\n    this.move(amount);\n    this.snap();\n  }\n\n  grab(axis, tileLocation) {\n    if (this.currentAxis || this.currentTile) throw \"already grabbed\";\n    if (typeof tileLocation === \"string\")\n      tileLocation = tileLocation.split(\",\").map(val => parseInt(val));\n    this.currentAxis = axis;\n    this.currentTile = Object.keys(this.tiles).find(\n      key =>\n        this.tiles[key][0] === tileLocation[0] &&\n        this.tiles[key][1] === tileLocation[1]\n    );\n  }\n\n  move(amount) {\n    if (!this.currentAxis || !this.currentTile) throw \"not grabbed\";\n    const currentTileLocation = this.tiles[this.currentTile].slice();\n    const axisIdx = this.currentAxis === \"x\" ? 0 : 1;\n    const otherAxisIdx = 1 - axisIdx;\n    const movingTiles = Object.keys(this.tiles).filter(\n      key => this.tiles[key][otherAxisIdx] === currentTileLocation[otherAxisIdx]\n    );\n    movingTiles.forEach(key => {\n      this.tiles[key][axisIdx] += amount;\n      // while(this.tiles[key][axisIdx] < 0) {\n      //   this.tiles[key][axisIdx] += this.dimensions[this.currentAxis]\n      // }\n    });\n    this._onUpdate();\n  }\n\n  snap() {\n    if (!this.currentAxis || !this.currentTile) throw \"not grabbed\";\n    const currentTileLocation = this.tiles[this.currentTile].slice();\n    const axisIdx = this.currentAxis === \"x\" ? 0 : 1;\n    const otherAxisIdx = 1 - axisIdx;\n    const movingTiles = Object.keys(this.tiles).filter(\n      key => this.tiles[key][otherAxisIdx] === currentTileLocation[otherAxisIdx]\n    );\n    movingTiles.forEach(key => {\n      const currentAxisValue = this.tiles[key][axisIdx];\n      let newAxisValue = Math.round(currentAxisValue);\n      this.tiles[key][axisIdx] = this.posMod(\n        newAxisValue,\n        this.dimensions[this.currentAxis]\n      );\n    });\n    this.currentAxis = null;\n    this.currentTile = null;\n    this._onUpdate();\n  }\n\n  posMod(val, base) {\n    let newValue = val % base;\n    if (newValue < 0 || Object.is(newValue, -0)) {\n      return (base + newValue) % base;\n    } else {\n      return newValue;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logic);\n\n\n//# sourceURL=webpack:///./src/logic/logic.js?");

/***/ })

/******/ });