(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3812)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),a=n(1003),i=n(7795),u=n(4465),s=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:i.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let n,o;let{href:i,as:h,children:b,prefetch:m,passHref:j,replace:_,shallow:g,scroll:x,locale:C,onClick:E,onMouseEnter:M,onTouchStart:k,legacyBehavior:O=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let w=!1!==m,T=l.default.useContext(s.RouterContext),U=l.default.useContext(c.AppRouterContext),L=null!=T?T:U,S=!T,{href:I,as:N}=l.default.useMemo(()=>{if(!T){let e=y(i);return{href:e,as:h?y(h):e}}let[e,t]=a.resolveHref(T,i,!0);return{href:e,as:h?a.resolveHref(T,h):t||e}},[T,i,h]),R=l.default.useRef(I),D=l.default.useRef(N);O&&(o=l.default.Children.only(n));let H=O?o&&"object"==typeof o&&o.ref:t,[K,B,A]=f.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(D.current!==N||R.current!==I)&&(A(),D.current=N,R.current=I),K(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[N,H,I,A,K]);l.default.useEffect(()=>{L&&B&&w&&v(L,I,N,{locale:C})},[N,I,B,C,w,null==T?void 0:T.locale,L]);let X={ref:F,onClick(e){O||"function"!=typeof E||E(e),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,o,r,i,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:i,locale:s,scroll:u}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,L,I,N,_,g,x,C,S,w)},onMouseEnter(e){O||"function"!=typeof M||M(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(w||!S)&&v(L,I,N,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof k||k(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(w||!S)&&v(L,I,N,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||j||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&d.getDomainLocale(N,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);X.href=t||p.addBasePath(u.addLocale(N,e,null==T?void 0:T.defaultLocale))}return O?l.default.cloneElement(o,X):l.default.createElement("a",Object.assign({},P,X),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!l,[c,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=a.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},i.push(n),a.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),a.delete(o);let e=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&i.splice(e,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[d,s,n,t,c]);let h=o.useCallback(()=>{f(!1)},[]);return[p,c,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3812:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var o=n(5893),r=n(9008),l=n.n(r),a=n(1502),i=n.n(a),u=n(1664),s=n.n(u);let c={pops:{baseUrl:"/procedure-oriented-programming",vars:{baseUrl:"/variables-and-data-types",int:"/int",float:"/float"},funs:{baseUrl:"/functions"}}};function f(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"Journey To Become Developer"}),(0,o.jsx)("meta",{name:"description",content:"journey to become a developer"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("main",{className:i().main,children:["Procedure Oriented Programming",(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)(s(),{href:c.pops.vars.int,children:"Variables & Data Types"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:c.pops.vars.int,children:"int"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:c.pops.vars.float,children:"float"})})]})]}),(0,o.jsx)("li",{children:(0,o.jsx)(s(),{href:c.pops.funs.baseUrl,children:"Function"})})]})]})]})}!function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"!=typeof t)return Object.keys(t).forEach(o=>{"baseUrl"!==o&&("string"==typeof t[o]?t[o]=n+t[o]:(t[o].baseUrl=n+t[o].baseUrl,e(t[o],t[o].baseUrl)))}),t}(c)},1502:function(e){e.exports={main:"Home_main__nLjiQ"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);