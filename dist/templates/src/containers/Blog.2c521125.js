webpackJsonp([2],{67:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l(1),n=function(e){return e&&e.__esModule?e:{default:e}}(u),a=l(30);t.default=(0,a.withRouteData)(function(e){var t=e.posts;return n.default.createElement("div",null,n.default.createElement("h1",null,"It's blog time."),n.default.createElement("br",null),"All Posts:",n.default.createElement("ul",null,t.map(function(e){return n.default.createElement("li",{key:e.id},n.default.createElement(a.Link,{to:"/blog/post/"+e.id+"/"},e.title))})))})}});