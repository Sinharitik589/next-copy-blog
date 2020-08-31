webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\self\\Next-gh-page-example-master\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App(_ref) {
  var data = _ref.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Front page"), __jsx("meta", {
    name: "google-site-verification",
    content: "nJKzLkR7UKXOdYtFfc7fgCO6Hml0Mi5zCHHFHU9BI1k",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: data[0].heading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, data.map(function (val) {
    return __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 18
      }
    }, val.heading);
  })));
};

_c = App;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (App);
/* import Link from "next/link";
import { nanoid } from "nanoid";

const NewsLink = ({ slug, title }) => (
  <Link href="/news/[slug]" as={`/news/${slug}`}>
    <a>{title}</a>
  </Link>
);

export default function Index() {
  return (
    <div>
      <h1>The News Portal</h1>
      <ul>
        <li>
          <NewsLink slug={`srilanka-${nanoid(15)}`} title="Sri Lanka" />
        </li>
        <li>
          <NewsLink slug="covid19" title="Covid 19" />
        </li>
        <li>
          <NewsLink slug="globalwarming" title="Global Warming" />
        </li>
      </ul>
      <div className="learn-more">
        <a href="https://arunoda.me/blog/what-is-nextjs-issg">
          What is Next.js iSSG?
        </a>
      </div>
      <style jsx>{`
        div {
          font-family: Arial;
          margin: 50px 30px;
        }

        li {
          margin: 10px 0;
        }

        a,
        li :global(a) {
          text-decoration: none;
        }

        .learn-more {
          position: fixed;
          bottom: 0px;
          left: 30px;
          padding: 30px 0;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
 */

var _c;

$RefreshReg$(_c, "App");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwiZGF0YSIsImhlYWRpbmciLCJtYXAiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3hCLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLDBCQURQO0FBRUUsV0FBTyxFQUFDLDZDQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU1FO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLE9BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQVM7QUFDakIsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLEdBQUcsQ0FBQ0YsT0FBVCxDQUFQO0FBQ0QsR0FGQSxDQURILENBWkYsQ0FERjtBQW9CRCxDQXJCRDs7S0FBTUYsRzs7QUFzQ1NBLGtFQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzBmZDJiYzdmZjNjOWI4ZGI1OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgQXBwID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RnJvbnQgcGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIm5KS3pMa1I3VUtYT2RZdEZmYzdmZ0NPNkhtbDBNaTV6Q0hIRkhVOUJJMWtcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhWzBdLmhlYWRpbmd9IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogPExpbmsgaHJlZj1cIi9hYm91dFwiIGFzPXtwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIFwiL2Fib3V0XCJ9PlxuICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgIDwvTGluaz4gKi99XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8aDE+e3ZhbC5oZWFkaW5nfTwvaDE+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgXCJodHRwczovL3plbi1uZXd0b24tNTcyM2ZlLm5ldGxpZnkuYXBwLy5uZXRsaWZ5L2Z1bmN0aW9ucy9hcGkvXCJcbiAgKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmRhdGEuYXJyO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG5cbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbi8qIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcblxuY29uc3QgTmV3c0xpbmsgPSAoeyBzbHVnLCB0aXRsZSB9KSA9PiAoXG4gIDxMaW5rIGhyZWY9XCIvbmV3cy9bc2x1Z11cIiBhcz17YC9uZXdzLyR7c2x1Z31gfT5cbiAgICA8YT57dGl0bGV9PC9hPlxuICA8L0xpbms+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRoZSBOZXdzIFBvcnRhbDwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmV3c0xpbmsgc2x1Zz17YHNyaWxhbmthLSR7bmFub2lkKDE1KX1gfSB0aXRsZT1cIlNyaSBMYW5rYVwiIC8+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TmV3c0xpbmsgc2x1Zz1cImNvdmlkMTlcIiB0aXRsZT1cIkNvdmlkIDE5XCIgLz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxOZXdzTGluayBzbHVnPVwiZ2xvYmFsd2FybWluZ1wiIHRpdGxlPVwiR2xvYmFsIFdhcm1pbmdcIiAvPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhcm4tbW9yZVwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcnVub2RhLm1lL2Jsb2cvd2hhdC1pcy1uZXh0anMtaXNzZ1wiPlxuICAgICAgICAgIFdoYXQgaXMgTmV4dC5qcyBpU1NHP1xuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhLFxuICAgICAgICBsaSA6Z2xvYmFsKGEpIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubGVhcm4tbW9yZSB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuICovXG4iXSwic291cmNlUm9vdCI6IiJ9