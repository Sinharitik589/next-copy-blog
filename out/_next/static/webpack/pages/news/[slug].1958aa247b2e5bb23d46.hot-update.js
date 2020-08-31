webpackHotUpdate_N_E("pages/news/[slug]",{

/***/ "./pages/news/[slug].js":
/*!******************************!*\
  !*** ./pages/news/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsPage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\self\\Next-gh-page-example-master\\pages\\news\\[slug].js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var revalidateInterval = 20;

function getTimeDiff(updatedAt) {
  return Math.floor((Date.now() - updatedAt) / 1000);
}

var __N_SSG = true;
function NewsPage(_ref) {
  _s();

  var slug = _ref.slug,
      updatedAt = _ref.updatedAt;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getTimeDiff(updatedAt)),
      timeDiff = _useState[0],
      setTimeDiff = _useState[1];

  var timeString = new Date(updatedAt).toLocaleTimeString();
  var newVersionIn = Math.max(revalidateInterval - timeDiff, 0);

  var reloadNow = function reloadNow(e) {
    e.preventDefault();
    location.reload();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handler = setInterval(function () {
      setTimeDiff(getTimeDiff(updatedAt));
    }, 100);
    return function () {
      return clearInterval(handler);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-979391861" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "News: ", slug), __jsx("p", {
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "This is a news about: ", slug), __jsx("div", {
    className: "jsx-979391861" + " " + "meta",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Updated at ", __jsx("span", {
    className: "jsx-979391861" + " " + "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 20
    }
  }, timeString), " (", timeDiff, "s ago.)"), __jsx("div", {
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Home")), " | ", newVersionIn === 0 ? __jsx("a", {
    href: "#",
    onClick: reloadNow,
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Reload Now") : __jsx("span", {
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "New version in \"", newVersionIn, "\" secs.")), __jsx("div", {
    className: "jsx-979391861" + " " + "learn-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://arunoda.me/blog/what-is-nextjs-issg",
    className: "jsx-979391861",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "What is Next.js iSSG?")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "979391861",
    __self: this
  }, ".container.jsx-979391861{font-family:Arial;margin:50px 30px;}a.jsx-979391861{-webkit-text-decoration:none;text-decoration:none;}.meta.jsx-979391861{margin:25px 0 15px 0;padding-bottom:15px;border-bottom:1px solid #ddd;font-size:13px;}.time.jsx-979391861{font-weight:bold;}.learn-more.jsx-979391861{position:fixed;bottom:0px;padding:30px 0;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxzZWxmXFxOZXh0LWdoLXBhZ2UtZXhhbXBsZS1tYXN0ZXJcXHBhZ2VzXFxuZXdzXFxbc2x1Z10uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RrQixBQUc2QixBQUlHLEFBR0EsQUFNSixBQUdGLGVBQ0osRUFIYixDQWJtQixHQU9HLEtBVUwsU0FoQmpCLE1BTytCLEFBVWQsU0FkakIsTUFlQSxjQVZpQixlQUNqQiIsImZpbGUiOiJEOlxcc2VsZlxcTmV4dC1naC1wYWdlLWV4YW1wbGUtbWFzdGVyXFxwYWdlc1xcbmV3c1xcW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCByZXZhbGlkYXRlSW50ZXJ2YWwgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVEaWZmKHVwZGF0ZWRBdCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gdXBkYXRlZEF0KSAvIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzUGFnZSh7IHNsdWcsIHVwZGF0ZWRBdCB9KSB7XHJcbiAgY29uc3QgW3RpbWVEaWZmLCBzZXRUaW1lRGlmZl0gPSB1c2VTdGF0ZShnZXRUaW1lRGlmZih1cGRhdGVkQXQpKTtcclxuICBjb25zdCB0aW1lU3RyaW5nID0gbmV3IERhdGUodXBkYXRlZEF0KS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICBjb25zdCBuZXdWZXJzaW9uSW4gPSBNYXRoLm1heChyZXZhbGlkYXRlSW50ZXJ2YWwgLSB0aW1lRGlmZiwgMCk7XHJcblxyXG4gIGNvbnN0IHJlbG9hZE5vdyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGltZURpZmYoZ2V0VGltZURpZmYodXBkYXRlZEF0KSk7XHJcbiAgICB9LCAxMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGhhbmRsZXIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5OZXdzOiB7c2x1Z308L2gxPlxyXG4gICAgICA8cD5UaGlzIGlzIGEgbmV3cyBhYm91dDoge3NsdWd9PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICBVcGRhdGVkIGF0IDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57dGltZVN0cmluZ308L3NwYW4+ICh7dGltZURpZmZ9cyBhZ28uKVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAge1wiIHwgXCJ9XHJcbiAgICAgICAge25ld1ZlcnNpb25JbiA9PT0gMCA/IChcclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17cmVsb2FkTm93fT5cclxuICAgICAgICAgICAgUmVsb2FkIE5vd1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8c3Bhbj5OZXcgdmVyc2lvbiBpbiBcIntuZXdWZXJzaW9uSW59XCIgc2Vjcy48L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhcm4tbW9yZVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FydW5vZGEubWUvYmxvZy93aGF0LWlzLW5leHRqcy1pc3NnXCI+XHJcbiAgICAgICAgICBXaGF0IGlzIE5leHQuanMgaVNTRz9cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgICBtYXJnaW46IDUwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgIG1hcmdpbjogMjVweCAwIDE1cHggMDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVhcm4tbW9yZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAgeyBwYXJhbXM6IHsgc2x1ZzogXCJjb3ZpZDE5XCIgfSB9LFxyXG4gICAgICB7IHBhcmFtczogeyBzbHVnOiBcImdsb2JhbHdhcm1pbmdcIiB9IH0sXHJcbiAgICBdLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcucmVwbGFjZSgvLS4qLywgXCJcIiksXHJcbiAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiByZXZhbGlkYXRlSW50ZXJ2YWwsXHJcbiAgfTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\self\\\\Next-gh-page-example-master\\\\pages\\\\news\\\\[slug].js */"));
}

_s(NewsPage, "mTc7BV25yDslzZiZ3M46zos2LVc=");

_c = NewsPage;

var _c;

$RefreshReg$(_c, "NewsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9bc2x1Z10uanMiXSwibmFtZXMiOlsicmV2YWxpZGF0ZUludGVydmFsIiwiZ2V0VGltZURpZmYiLCJ1cGRhdGVkQXQiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiTmV3c1BhZ2UiLCJzbHVnIiwidXNlU3RhdGUiLCJ0aW1lRGlmZiIsInNldFRpbWVEaWZmIiwidGltZVN0cmluZyIsInRvTG9jYWxlVGltZVN0cmluZyIsIm5ld1ZlcnNpb25JbiIsIm1heCIsInJlbG9hZE5vdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwicmVsb2FkIiwidXNlRWZmZWN0IiwiaGFuZGxlciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxFQUEzQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxTQUFyQixFQUFnQztBQUM5QixTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDQyxJQUFJLENBQUNDLEdBQUwsS0FBYUosU0FBZCxJQUEyQixJQUF0QyxDQUFQO0FBQ0Q7OztBQUVjLFNBQVNLLFFBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYk4sU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUNwQk8sc0RBQVEsQ0FBQ1IsV0FBVyxDQUFDQyxTQUFELENBQVosQ0FEWTtBQUFBLE1BQzdDUSxRQUQ2QztBQUFBLE1BQ25DQyxXQURtQzs7QUFFcEQsTUFBTUMsVUFBVSxHQUFHLElBQUlQLElBQUosQ0FBU0gsU0FBVCxFQUFvQlcsa0JBQXBCLEVBQW5CO0FBQ0EsTUFBTUMsWUFBWSxHQUFHWCxJQUFJLENBQUNZLEdBQUwsQ0FBU2Ysa0JBQWtCLEdBQUdVLFFBQTlCLEVBQXdDLENBQXhDLENBQXJCOztBQUVBLE1BQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFlBQVEsQ0FBQ0MsTUFBVDtBQUNELEdBSEQ7O0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE9BQU8sR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDaENaLGlCQUFXLENBQUNWLFdBQVcsQ0FBQ0MsU0FBRCxDQUFaLENBQVg7QUFDRCxLQUYwQixFQUV4QixHQUZ3QixDQUEzQjtBQUlBLFdBQU87QUFBQSxhQUFNc0IsYUFBYSxDQUFDRixPQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxTQUNFO0FBQUEsdUNBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVdkLElBQVgsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBMEJBLElBQTFCLENBRkYsRUFHRTtBQUFBLHVDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDYTtBQUFBLHVDQUFnQixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCSSxVQUF4QixDQURiLFFBQzBERixRQUQxRCxZQUhGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBSUcsS0FKSCxFQUtHSSxZQUFZLEtBQUssQ0FBakIsR0FDQztBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksV0FBTyxFQUFFRSxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsR0FLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXVCRixZQUF2QixhQVZKLENBTkYsRUFtQkU7QUFBQSx1Q0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyw2Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FuQkY7QUFBQTtBQUFBO0FBQUEsMjNJQURGO0FBbUREOztHQXJFdUJQLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy9bc2x1Z10uMTk1OGFhMjQ3YjJlNWJiMjNkNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgcmV2YWxpZGF0ZUludGVydmFsID0gMjA7XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lRGlmZih1cGRhdGVkQXQpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHVwZGF0ZWRBdCkgLyAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c1BhZ2UoeyBzbHVnLCB1cGRhdGVkQXQgfSkge1xyXG4gIGNvbnN0IFt0aW1lRGlmZiwgc2V0VGltZURpZmZdID0gdXNlU3RhdGUoZ2V0VGltZURpZmYodXBkYXRlZEF0KSk7XHJcbiAgY29uc3QgdGltZVN0cmluZyA9IG5ldyBEYXRlKHVwZGF0ZWRBdCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgY29uc3QgbmV3VmVyc2lvbkluID0gTWF0aC5tYXgocmV2YWxpZGF0ZUludGVydmFsIC0gdGltZURpZmYsIDApO1xyXG5cclxuICBjb25zdCByZWxvYWROb3cgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVEaWZmKGdldFRpbWVEaWZmKHVwZGF0ZWRBdCkpO1xyXG4gICAgfSwgMTAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGVyKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDE+TmV3czoge3NsdWd9PC9oMT5cclxuICAgICAgPHA+VGhpcyBpcyBhIG5ld3MgYWJvdXQ6IHtzbHVnfTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgVXBkYXRlZCBhdCA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+e3RpbWVTdHJpbmd9PC9zcGFuPiAoe3RpbWVEaWZmfXMgYWdvLilcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHtcIiB8IFwifVxyXG4gICAgICAgIHtuZXdWZXJzaW9uSW4gPT09IDAgPyAoXHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3JlbG9hZE5vd30+XHJcbiAgICAgICAgICAgIFJlbG9hZCBOb3dcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHNwYW4+TmV3IHZlcnNpb24gaW4gXCJ7bmV3VmVyc2lvbklufVwiIHNlY3MuPC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYXJuLW1vcmVcIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcnVub2RhLm1lL2Jsb2cvd2hhdC1pcy1uZXh0anMtaXNzZ1wiPlxyXG4gICAgICAgICAgV2hhdCBpcyBOZXh0LmpzIGlTU0c/XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICBtYXJnaW46IDI1cHggMCAxNXB4IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlYXJuLW1vcmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXHJcbiAgICAgIHsgcGFyYW1zOiB7IHNsdWc6IFwiY292aWQxOVwiIH0gfSxcclxuICAgICAgeyBwYXJhbXM6IHsgc2x1ZzogXCJnbG9iYWx3YXJtaW5nXCIgfSB9LFxyXG4gICAgXSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLnJlcGxhY2UoLy0uKi8sIFwiXCIpLFxyXG4gICAgICB1cGRhdGVkQXQ6IERhdGUubm93KCksXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogcmV2YWxpZGF0ZUludGVydmFsLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==