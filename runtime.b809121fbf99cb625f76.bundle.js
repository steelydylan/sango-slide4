(()=>{"use strict";var e,t,r,a,n,o,i,l={},f={};function d(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return l[e].call(r.exports,r,r.exports,d),r.exports}d.m=l,e=[],d.O=(t,r,a,n)=>{if(!r){var o=1/0;for(s=0;s<e.length;s++){for(var[r,a,n]=e[s],i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(d.O).every((e=>d.O[e](r[l])))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(s--,1);var f=a();void 0!==f&&(t=f)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,a,n]},d.F={},d.E=e=>{Object.keys(d.F).map((t=>{d.F[t](e)}))},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var o={};t=t||[null,r({}),r([]),r(r)];for(var i=2&a&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,d.d(n,o),n},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{209:"16a22fafa12be4550421",352:"399bea10566ae90897ea",465:"5d7108168c8548054123",512:"2116536478935f186e2a",568:"b1c1d6f04884ff245b8a",582:"1afa9112581dce0cf20f",626:"93bd452fb068394f6e81",846:"0cc4307ba4629c2159d7",869:"803faa10cb0f4dd5cf6f",921:"d315746ab7d65c721f62"}[e]+".bundle.js",d.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"21a762ca924cb09eab46",209:"16a22fafa12be4550421",352:"399bea10566ae90897ea",512:"2116536478935f186e2a",626:"93bd452fb068394f6e81",736:"8e6632e9056b591559d5",846:"0cc4307ba4629c2159d7"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},n="sango-slide:",d.l=(e,t,r,o)=>{if(a[e])a[e].push(t);else{var i,l;if(void 0!==r)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var u=f[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+r){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+r),i.src=e),a[e]=[t];var c=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var n=a[e];if(delete a[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/sango-slide4/",o=e=>new Promise(((t,r)=>{var a=d.miniCssF(e),n=d.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===t))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===t)return i}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=l,n.parentNode.removeChild(n),a(f)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),i={666:0},d.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{209:1,352:1,512:1,626:1,846:1}[e]&&t.push(i[e]=o(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={666:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(209|626|666)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=d.p+d.u(t),i=new Error;d.l(o,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}},d.F.j=t=>{if(!(d.o(e,t)&&void 0!==e[t]||/^(209|626|666)$/.test(t))){e[t]=null;var r=document.createElement("link");d.nc&&r.setAttribute("nonce",d.nc),r.rel="prefetch",r.as="script",r.href=d.p+d.u(t),document.head.appendChild(r)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[o,i,l]=r,f=0;if(o.some((t=>0!==e[t]))){for(a in i)d.o(i,a)&&(d.m[a]=i[a]);if(l)var s=l(d)}for(t&&t(r);f<o.length;f++)n=o[f],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(s)},r=self.webpackChunksango_slide=self.webpackChunksango_slide||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();