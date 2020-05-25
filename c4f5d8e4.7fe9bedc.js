(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{118:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(129),o=a.n(l),i=a(136),s=a(131),u=a(128),d=a(130),m=a(119),h=a.n(m);const f=[{title:c.a.createElement(c.a.Fragment,null,"Functional Graph Interface"),imageUrl:"img/graph-figure.svg",description:c.a.createElement(c.a.Fragment,null,"Defines a graph-processing interface that extends the Ligra, Ligra+, and Julienne graph processing interfaces with other useful functional primitives, including map, reduce, and filter, defined over both vertices and graphs. The API also supports compression completely under the hood.")},{title:c.a.createElement(c.a.Fragment,null,"Fundamental Graph Problems"),imageUrl:"img/undraw_docusaurus_tree.svg",description:c.a.createElement(c.a.Fragment,null,"Includes provably-efficient implementations for over 22 fundamental graph problems including shortest-path problems, connectivity problems, various data-mining problems, and many more. Good theoretical bounds ensure consistent and explainable performance across different inputs.")},{title:c.a.createElement(c.a.Fragment,null,"State-of-the-Art Performance"),imageUrl:"img/undraw_docusaurus_react.svg",description:c.a.createElement(c.a.Fragment,null,"Implementations from GAB achieve state-of-the-art performance. For example, our implementation of connectivity solves the HyperLink2012 graph, the largest publicly-available graph with over 3 billion vertices and over 200 billion edges in 8.5 seconds on a 72-core machine.")}];function b({imageUrl:e,title:t,description:a}){const n=Object(d.a)(e);return c.a.createElement("div",{className:o()("col col--4",h.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:n,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,a))}t.default=function(){const e=Object(u.a)(),{siteConfig:t={}}=e;return c.a.createElement(i.a,{title:`${t.title}`,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:o()("hero",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},t.title),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(s.a,{className:o()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/introduction")},"Get Started")))),c.a.createElement("main",null,f&&f.length&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},f.map((e,t)=>c.a.createElement(b,Object(n.a)({key:t},e))))))))}},132:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},133:function(e,t,a){"use strict";var n=a(0),r=a(132);t.a=function(){return Object(n.useContext)(r.a)}},134:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},135:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},136:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(142),l=a(128),o=a(130);const i="",s="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(l.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(i),r(i)},[]),o=Object(n.useCallback)(()=>{a(s),r(s)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?s:i)})},[]),{isDarkTheme:t===s,setLightTheme:c,setDarkTheme:o}},d=a(132);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},h=a(1),f=a(131),b=a(137),v=()=>null,g=a(138),p=a.n(g),k=a(129),E=a.n(k),_=a(93),y=a.n(_);const O=()=>r.a.createElement("span",{className:E()(y.a.toggle,y.a.moon)}),j=()=>r.a.createElement("span",{className:E()(y.a.toggle,y.a.sun)});var w=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(p.a,Object(h.a)({disabled:!t,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(j,null)}},e))},N=a(133),C=a(134);var T=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var S=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[i,s]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&s(e.getBoundingClientRect().height)},[]),d=Object(C.b)(),[m,h]=T(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<i)return;if(r)return c(!1),a(!1),void o(e);const t=document.documentElement.scrollHeight-i,n=window.innerHeight;l&&e>l?a(!1):e+n<t&&a(!0),o(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[l,i]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},x=a(135),L=a(94),M=a.n(L);function D({activeBasePath:e,to:t,href:a,label:n,position:c,...l}){const i=Object(o.a)(t),s=Object(o.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:i,...e?{isActive:(e,t)=>t.pathname.startsWith(s)}:null},l),n)}var F=function(){const{siteConfig:e={},isClient:t}=Object(l.a)(),{baseUrl:a,themeConfig:c={}}=e,{navbar:i={},disableDarkMode:s=!1}=c,{title:u,logo:d={},links:m=[],hideOnScroll:g=!1}=i,[p,k]=Object(n.useState)(!1),[_,y]=Object(n.useState)(!1),{isDarkTheme:O,setLightTheme:j,setDarkTheme:C}=Object(N.a)(),{navbarRef:T,isNavbarVisible:L}=S(g);Object(x.a)(p);const F=Object(n.useCallback)(()=>{k(!0)},[k]),P=Object(n.useCallback)(()=>{k(!1)},[k]),B=Object(n.useCallback)(e=>e.target.checked?C():j(),[j,C]),I=d.href||a;let X={};d.target?X={target:d.target}:Object(b.a)(I)||(X={rel:"noopener noreferrer",target:"_blank"});const A=d.srcDark&&O?d.srcDark:d.src,H=Object(o.a)(A);return r.a.createElement("nav",{ref:T,className:E()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":p,[M.a.navbarHideable]:g,[M.a.navbarHidden]:!L})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:F,onKeyDown:F},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",to:I},X),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:H,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:E()("navbar__title",{[M.a.hideLogoText]:_})},u)),m.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(D,Object(h.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(D,Object(h.a)({},e,{key:t}))),!s&&r.a.createElement(w,{className:M.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:O,onChange:B}),r.a.createElement(v,{handleSearchBarToggle:y,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",onClick:P,to:I},X),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:H,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:"navbar__title"},u)),!s&&p&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:O,onChange:B})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(D,Object(h.a)({className:"menu__link"},e,{onClick:P})))))))))},P=a(95),B=a.n(P);function I({to:e,href:t,label:a,...n}){const c=Object(o.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const X=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var A=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:i=[],logo:s={}}=n||{},u=Object(o.a)(s.src);return n?r.a.createElement("footer",{className:E()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},i.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e)))):null))),(s||c)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:B.a.footerLogoLink},r.a.createElement(X,{alt:s.alt,url:u})):r.a.createElement(X,{alt:s.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(96);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,title:n,themeConfig:{image:i},url:s}=t,{children:u,title:d,noFooter:h,description:f,image:b,keywords:v,permalink:g,version:p}=e,k=d?`${d} | ${n}`:n,E=b||i,_=s+Object(o.a)(E),y=Object(o.a)(a);return r.a.createElement(m,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:_}),E&&r.a.createElement("meta",{property:"twitter:image",content:_}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`}),g&&r.a.createElement("meta",{property:"og:url",content:s+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(F,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(A,null))}},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(129)),i=m(a(8)),s=m(a(139)),u=m(a(140)),d=a(141);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},139:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},140:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);