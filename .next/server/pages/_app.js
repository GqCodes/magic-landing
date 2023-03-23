(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 757:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_ec4d0e', '__Roboto_Fallback_ec4d0e'","fontStyle":"normal"},
	"className": "__className_ec4d0e"
};


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"pages/_app.js","import":"Roboto","arguments":[{"weight":["100","300","400","500","700","900"],"subsets":["latin"]}],"variableName":"bebas"}
var _app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_ = __webpack_require__(757);
var _app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default = /*#__PURE__*/__webpack_require__.n(_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/styles.scss
var styles = __webpack_require__(455);
;// CONCATENATED MODULE: ./pages/_app.js






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "39d4306e4bf13c6a",
                dynamic: [
                    (_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default()).style.fontFamily
                ],
                children: `html{font-family:${(_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                    className: style_default().dynamic([
                        [
                            "39d4306e4bf13c6a",
                            [
                                (_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default()).style.fontFamily
                            ]
                        ]
                    ])
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: style_default().dynamic([
                    [
                        "39d4306e4bf13c6a",
                        [
                            (_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default()).style.fontFamily
                        ]
                    ]
                ]) + " " + ((_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default()).className || ""),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    className: style_default().dynamic([
                        [
                            "39d4306e4bf13c6a",
                            [
                                (_app_js_import_Roboto_arguments_weight_100_300_400_500_700_900_subsets_latin_variableName_bebas_default()).style.fontFamily
                            ]
                        ]
                    ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            })
        ]
    });
}


/***/ }),

/***/ 455:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(287));
module.exports = __webpack_exports__;

})();