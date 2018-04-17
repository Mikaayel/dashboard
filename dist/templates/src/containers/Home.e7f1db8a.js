webpackJsonp([0],{179:function(e,t,n){e.exports=function(){return n(180)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"/\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\nself.addEventListener('message', function({ data: { message, payload } }) {\n\tswitch(message) {\n\t\tcase 'average':\n\t\t\tself.postMessage(CalculateAverage(payload));\n\t\t\tbreak;\n\t}\n});\n\nfunction CalculateAverage(payload) {\n\tconst payloadLength = payload.length;\n\tlet total = 0;\n\tpayload.map((item) => {\n\t\ttotal = total + item;\n\t});\n\treturn {\n\t\tmessage: 'average',\n\t\tpayload: total / payloadLength\n\t};\n};\n\n/***/ })\n/******/ ]);\n//# sourceMappingURL=webWorker.js.map",null)}},180:function(e,t,n){"use strict";var r=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var n;try{var o=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;n=new o,n.append(e),n=n.getBlob()}catch(t){n=new Blob([e])}return new Worker(r.createObjectURL(n))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}},64:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),l=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(9),s=r(c),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(1),f=r(p),_=n(30),m=n(179),w=r(m),b=function(e){function t(e){u(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={average:0},n.worker=null,n.TOSupport=!1,n.calculateAverage=n.calculateAverage.bind(n),n}return i(t,e),d(t,[{key:"getDates",value:function(e){return{OneDayAgo:e.setDate(e.getDate()-1),TwoDaysAgo:e.setDate(e.getDate()-2)}}},{key:"makeAPICall",value:function(){}},{key:"main",value:function(){function e(){return t.apply(this,arguments)}var t=a(s.default.mark(function e(){var t,n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,console.log(t),n=this.getDates(t),console.log(n);case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentDidMount",value:function(){var e=this;if(window.Worker){this.worker=new w.default;var t=new ArrayBuffer(1);this.worker.postMessage(t,[t]),t.byteLength||(this.TOSupport=!0),this.worker.addEventListener("message",function(t){console.log("return event",t),e.setState(o({},t.data.message,t.data.payload))})}this.main()}},{key:"calculateAverage",value:function(){var e=new ArrayBuffer(5242880);console.log("before",e.byteLength),this.worker.postMessage({message:"average",payload:[10,20,30,40,50]},[e]),console.log("after",e.byteLength)}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("h1",null,"Home"),f.default.createElement("button",{onClick:this.calculateAverage,type:"button"},"Average"),f.default.createElement("p",null,this.state.average))}}]),t}(p.Component);t.default=(0,_.withSiteData)(b)}});