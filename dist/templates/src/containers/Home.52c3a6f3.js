webpackJsonp([0],{179:function(e,t,n){e.exports=function(){return n(180)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"/\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\nself.addEventListener('message', function({ data: { message, payload } }) {\n\tswitch(message) {\n\t\tcase 'initial':\n\t\t\tinitial(payload);\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tbreak;\n\t}\n});\n\nfunction initial({ near_earth_objects }) {\n\tObject.entries(near_earth_objects).map((dayObject) => {\n\t\tlet result = sortByMeters(dayObject);\n\t\ttransferToMain({ payload: {[dayObject[0]]: result }});\n\t});\n}\n\nfunction sortByMeters(dayObject) {\n\treturn dayObject[1].sort(function(obj1, obj2) {\n\t\treturn obj1.estimated_diameter.meters.estimated_diameter_max - obj2.estimated_diameter.meters.estimated_diameter_max;\n\t});\n}\n\nfunction transferToMain({ payload }) {\n\tconst buffer = new ArrayBuffer(1024 * 1024 * 5);\n\tself.postMessage({\n\t\tpayload\n\t}, [buffer]);\n};\n\n/***/ })\n/******/ ]);\n//# sourceMappingURL=webWorker.js.map",null)}},180:function(e,t,n){"use strict";var r=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var n;try{var o=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;n=new o,n.append(e),n=n.getBlob()}catch(t){n=new Blob([e])}return new Worker(r.createObjectURL(n))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){if(!t)throw Error("Inline worker is not supported");return new Worker(t)}}},181:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("p",null,"data container"))}}]),t}(i.Component);t.default=c},182:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function o(e){return{oneDayAgo:e.setDate(e.getDate()-1),twoDaysAgo:e.setDate(e.getDate()-1)}}function a(e){var t=new Date(e),n=""+t.getDate(),r=""+(t.getMonth()+1),o=t.getFullYear();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),o+"-"+r+"-"+n}function u(e){var t=e.message,n=e.payload,r=new ArrayBuffer(5242880);this.worker.postMessage({message:t,payload:n},[r])}Object.defineProperty(t,"__esModule",{value:!0}),t.makeAPICall=void 0;var i=n(9),l=function(e){return e&&e.__esModule?e:{default:e}}(i);t.makeAPICall=function(){var e=r(l.default.mark(function e(t){var n,r,o=t.oneDayAgo,u=t.twoDaysAgo;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date="+a(u)+"&end_date="+a(o)+"&api_key=XFVyTh99UZoZtTygdFRMUTPfsTeGxxDZJH9SMp9q");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.getDates=o,t.formatDate=a,t.messageWebWorker=u},65:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var u=t[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),c=r(l),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),p=r(d),_=n(31),b=n(179),m=r(b),y=n(181),w=r(y),h=n(182),v=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={average:0,data:void 0,gpuAvailable:!1,offline:!1,gpuAcceleration:!1,webWorkerAvailable:!1,webWorkerAcceleration:!1},n.worker=null,n.TOSupport=!1,n.messageWebWorker=h.messageWebWorker.bind(n),n}return i(t,e),f(t,[{key:"main",value:function(){function e(){return t.apply(this,arguments)}var t=o(c.default.mark(function e(){var t,n,r;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=(0,h.getDates)(t),e.next=4,(0,h.makeAPICall)(n);case 4:r=e.sent,this.messageWebWorker({message:"initial",payload:r});case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentDidMount",value:function(){var e=this;this.worker=new m.default,this.worker.addEventListener("message",function(t){e.setState({data:s({},e.state.data,t.data.payload)})}),this.main()}},{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement("h1",null,"Home"),p.default.createElement(w.default,{data:this.state.data}))}}]),t}(d.Component);t.default=(0,_.withSiteData)(v)}});