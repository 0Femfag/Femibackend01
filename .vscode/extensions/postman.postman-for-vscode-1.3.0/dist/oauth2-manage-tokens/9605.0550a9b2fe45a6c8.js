"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[9605,7560,2389,2908],{7560:(e,n,t)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(n,{Z:()=>o})},42908:(e,n,t)=>{t.r(n),t.d(n,{LazyModalsContainer:()=>f,PostmanModalFactory:()=>w});var o=t(7560),a=t(40540),r=t(35348);const i="modalmanager.toggleModal";var s=t(58560),l=t(59530),d=t.n(l);const c=d().div.withConfig({displayName:"skeleton-bar__SkeletonBar",componentId:"sc-10t11n6-0"})(["height:",";width:",";background-color:",";border-radius:",";"],(e=>e.height),(e=>e.width),(e=>e.theme[e.backgroundColorToken]),(e=>e.borderRadius));var h=t(52322);const p=e=>(0,h.jsx)(s.Z,{gap:"spacing-xs",justifyContent:"space-between",grow:1,shrink:1,padding:{paddingBottom:"spacing-l",paddingLeft:"spacing-xl",paddingRight:"spacing-xl",paddingTop:"spacing-xl"},children:e.children}),u={container:{width:{small:440,medium:648,large:856}},headerFooter:{backgroundColorToken:"background-color-tertiary",height:"10px",borderRadius:"10px"},content:{backgroundColorToken:"background-color-secondary",height:"8px",borderRadius:"8px"}},g=(0,l.keyframes)(["0%{opacity:0.25;}50%{opacity:1;}100%{opacity:0.25;}"]),m=d().div.withConfig({displayName:"fallback-container__FallbackContainer",componentId:"sc-1ger207-0"})(["width:",";animation:"," 1s linear infinite;"],(e=>u.container.width[e.size]),g),b=e=>(0,h.jsxs)(m,{id:"lazy-modal-default-fallback",size:e.size,children:[(0,h.jsx)(p,{children:(0,h.jsx)(c,{height:u.headerFooter.height,width:.45*u.container.width[e.size]+"px",borderRadius:u.headerFooter.borderRadius,backgroundColorToken:u.headerFooter.backgroundColorToken})}),(0,h.jsx)(r.hz,{children:[.7,.85,.65,.55,.8].map((n=>(0,h.jsx)(c,{height:u.content.height,borderRadius:u.content.borderRadius,width:u.container.width[e.size]*n+"px",backgroundColorToken:u.content.backgroundColorToken},n)))}),(0,h.jsx)(r.mz,{children:(0,h.jsxs)(s.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:[(0,h.jsx)(c,{height:u.headerFooter.height,borderRadius:u.headerFooter.borderRadius,width:"48px",backgroundColorToken:u.headerFooter.backgroundColorToken}),(0,h.jsx)(c,{height:u.headerFooter.height,borderRadius:u.headerFooter.borderRadius,width:"48px",backgroundColorToken:u.headerFooter.backgroundColorToken})]})})]}),k={isOpen:!1,modalComponent:r.u_,allowClose:!0,lazyModalContent:()=>(0,h.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,h.jsx)(b,{size:"medium"})},f=()=>{const[e,n]=(0,a.useState)(k);(0,a.useEffect)((()=>{const t=t=>{const{fallback:a,customModalComponent:i,lazyModalContent:s,childProps:l,modalProps:d,allowClose:c}=t.detail;n(null!==s?{modalProps:d,childProps:l,isOpen:!0,modalComponent:i||r.u_,lazyModalContent:s,fallback:a||(0,h.jsx)(b,{size:(null==d?void 0:d.size)||"medium"}),allowClose:null==c||c}:(0,o.Z)({},e,{isOpen:!1}))};return document.addEventListener(i,t),()=>{document.removeEventListener(i,t)}}),[e]);const t=(0,a.useCallback)((()=>{var t,a;e.allowClose&&(null==e||null==(t=e.childProps)||null==(a=t.onClose)||a.call(t),n((0,o.Z)({},e,{isOpen:!1})))}),[e]);return(0,h.jsx)(e.modalComponent,(0,o.Z)({},e.modalProps,{isOpen:e.isOpen,onClose:t,children:(0,h.jsx)(a.Suspense,{fallback:e.fallback,children:(0,h.jsx)(e.lazyModalContent,(0,o.Z)({},e.childProps,{onClose:t}))})}))};let x;const w=Object.freeze({getOpenModal:()=>x,openModal(e){const n=new CustomEvent(i,{detail:e});x=e,document.dispatchEvent(n)},closeModal(){const e=new CustomEvent(i,{detail:{lazyModalContent:null}});x=void 0,document.dispatchEvent(e)}})},49627:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(7560),a=t(40540),r=t.n(a),i=t(207),s=r().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),l=r().forwardRef((function(e,n){return r().createElement(i.Z,(0,o.Z)({},e,{svg:s,ref:n}))}));l.getName=function(){return"icon-action-close-stroke"};const d=l},74962:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(40540),a=t.n(o),r=t(1314),i=t.n(r),s=t(59530),l=t.n(s),d=t(43753),c=t(90265);function h(e,n){switch(e){case"h1":return`\n        font-size: ${n["text-size-xxxl"]};\n        line-height: 1.2;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.72px;\n      `;case"h2":return`\n        font-size: ${n["text-size-xxl"]};\n        line-height: 1.2;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.56px;\n      `;case"h3":return`\n        font-size: ${n["text-size-xl"]};\n        line-height: 1.28;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h4":return`\n        font-size: ${n["text-size-l"]};\n        line-height: 1.44;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h5":return`\n        font-size: ${n["text-size-m"]};\n        line-height: 1.4;\n        color: ${n["content-color-primary"]};\n      `;case"h6":return`\n        font-size: ${n["text-size-m"]};\n        line-height: 1.4;\n        color: ${n["content-color-secondary"]};\n      `;default:return null}}const p=l().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(e=>e.theme["spacing-zero"]),(e=>e.theme["text-family-default"]),(e=>e.theme["text-weight-medium"]),(e=>e.wordBreak),(e=>e.styleAs?h(e.styleAs,e.theme):h(e.as,e.theme)),(e=>e.color&&`color: ${e.theme[e.color]};`),(e=>e.hasBottomSpacing&&function(e,n){switch(e){case"h1":return`margin-bottom: ${n["spacing-l"]} !important`;case"h2":return`margin-bottom: ${n["spacing-m"]} !important`;case"h3":return`margin-bottom: ${n["spacing-s"]} !important`;case"h4":case"h5":case"h6":return`margin-bottom: ${n["spacing-xs"]} !important`;default:return`margin: ${n["spacing-zero"]} !important`}}(e.as,e.theme)),(e=>{return`\n    ${e.isTruncated?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":""}\n    ${(n=e.maxLines)?`\n    display: -webkit-box;\n    -webkit-line-clamp: ${n};\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    `:""}\n    `;var n}));function u(e){const{text:n,type:t,styleAs:r,color:i,_wordBreak:s,className:l,hasBottomSpacing:d,isTruncated:h,maxLines:u,tooltip:g,"data-testid":m,"data-click":b}=e,[k,f]=(0,o.useState)(!1),x=a().createElement(p,{as:t,styleAs:r,color:i,className:l,"data-aether-id":"aether-heading","data-testid":m,"data-click":b,hasBottomSpacing:d,isTruncated:h,maxLines:u,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?f(!0):f(!1)},wordBreak:s},n);return k&&(0,c.LX)(e)?(0,c.Ur)(x,g||n):x}u.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},u.propTypes={type:i().oneOf(["h1","h2","h3","h4","h5","h6"]),text:i().string.isRequired,color:i().oneOf(["",...Object.keys(d.globals.colors),...Object.keys(d.aliases.light.content)]),styleAs:i().oneOf(["h1","h2","h3","h4","h5","h6"]),className:i().string,hasBottomSpacing:i().bool,isTruncated:e=>{let{isTruncated:n,maxLines:t}=e;return"boolean"!=typeof n?new Error("Heading: expected a boolean value for isTruncated prop"):n&&t?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:i().number,tooltip:e=>{const{tooltip:n,isTruncated:t,maxLines:o}=e;return"string"!=typeof n?new Error("Heading: tooltip prop should only have a string value."):!n||t&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:i().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":i().string,"data-click":i().string}}}]);
//# sourceMappingURL=9605.0550a9b2fe45a6c8.js.map