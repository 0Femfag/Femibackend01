"use strict";(self.webpackChunkhttp_response_workbench=self.webpackChunkhttp_response_workbench||[]).push([[9605,2908],{42908:(e,n,t)=>{t.r(n),t.d(n,{LazyModalsContainer:()=>k,PostmanModalFactory:()=>w});var o=t(40540),a=t(35348);const r="modalmanager.toggleModal";var i=t(58560),s=t(59530),l=t.n(s);const d=l().div.withConfig({displayName:"skeleton-bar__SkeletonBar",componentId:"sc-10t11n6-0"})(["height:",";width:",";background-color:",";border-radius:",";"],(e=>e.height),(e=>e.width),(e=>e.theme[e.backgroundColorToken]),(e=>e.borderRadius));var c=t(52322);const h=e=>(0,c.jsx)(i.Z,{gap:"spacing-xs",justifyContent:"space-between",grow:1,shrink:1,padding:{paddingBottom:"spacing-l",paddingLeft:"spacing-xl",paddingRight:"spacing-xl",paddingTop:"spacing-xl"},children:e.children}),p={container:{width:{small:440,medium:648,large:856}},headerFooter:{backgroundColorToken:"background-color-tertiary",height:"10px",borderRadius:"10px"},content:{backgroundColorToken:"background-color-secondary",height:"8px",borderRadius:"8px"}},u=(0,s.keyframes)(["0%{opacity:0.25;}50%{opacity:1;}100%{opacity:0.25;}"]),g=l().div.withConfig({displayName:"fallback-container__FallbackContainer",componentId:"sc-1ger207-0"})(["width:",";animation:"," 1s linear infinite;"],(e=>p.container.width[e.size]),u),m=e=>(0,c.jsxs)(g,{id:"lazy-modal-default-fallback",size:e.size,children:[(0,c.jsx)(h,{children:(0,c.jsx)(d,{height:p.headerFooter.height,width:.45*p.container.width[e.size]+"px",borderRadius:p.headerFooter.borderRadius,backgroundColorToken:p.headerFooter.backgroundColorToken})}),(0,c.jsx)(a.hz,{children:[.7,.85,.65,.55,.8].map((n=>(0,c.jsx)(d,{height:p.content.height,borderRadius:p.content.borderRadius,width:p.container.width[e.size]*n+"px",backgroundColorToken:p.content.backgroundColorToken},n)))}),(0,c.jsx)(a.mz,{children:(0,c.jsxs)(i.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:[(0,c.jsx)(d,{height:p.headerFooter.height,borderRadius:p.headerFooter.borderRadius,width:"48px",backgroundColorToken:p.headerFooter.backgroundColorToken}),(0,c.jsx)(d,{height:p.headerFooter.height,borderRadius:p.headerFooter.borderRadius,width:"48px",backgroundColorToken:p.headerFooter.backgroundColorToken})]})})]}),b={isOpen:!1,modalComponent:a.u_,allowClose:!0,lazyModalContent:()=>(0,c.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,c.jsx)(m,{size:"medium"})},k=()=>{const[e,n]=(0,o.useState)(b);(0,o.useEffect)((()=>{const t=t=>{const{fallback:o,customModalComponent:r,lazyModalContent:i,childProps:s,modalProps:l,allowClose:d}=t.detail;n(null!==i?{modalProps:l,childProps:s,isOpen:!0,modalComponent:r||a.u_,lazyModalContent:i,fallback:o||(0,c.jsx)(m,{size:(null==l?void 0:l.size)||"medium"}),allowClose:null==d||d}:Object.assign({},e,{isOpen:!1}))};return document.addEventListener(r,t),()=>{document.removeEventListener(r,t)}}),[e]);const t=(0,o.useCallback)((()=>{var t,o;e.allowClose&&(null==e||null==(t=e.childProps)||null==(o=t.onClose)||o.call(t),n(Object.assign({},e,{isOpen:!1})))}),[e]);return(0,c.jsx)(e.modalComponent,Object.assign({},e.modalProps,{isOpen:e.isOpen,onClose:t,children:(0,c.jsx)(o.Suspense,{fallback:e.fallback,children:(0,c.jsx)(e.lazyModalContent,Object.assign({},e.childProps,{onClose:t}))})}))};let x;const w=Object.freeze({getOpenModal:()=>x,openModal(e){const n=new CustomEvent(r,{detail:e});x=e,document.dispatchEvent(n)},closeModal(){const e=new CustomEvent(r,{detail:{lazyModalContent:null}});x=void 0,document.dispatchEvent(e)}})},49627:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(7560),a=t(40540),r=t.n(a),i=t(207),s=r().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),l=r().forwardRef((function(e,n){return r().createElement(i.Z,(0,o.Z)({},e,{svg:s,ref:n}))}));l.getName=function(){return"icon-action-close-stroke"};const d=l},74962:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(40540),a=t.n(o),r=t(1314),i=t.n(r),s=t(59530),l=t.n(s),d=t(43753),c=t(90265);function h(e,n){switch(e){case"h1":return`\n        font-size: ${n["text-size-xxxl"]};\n        line-height: 1.2;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.72px;\n      `;case"h2":return`\n        font-size: ${n["text-size-xxl"]};\n        line-height: 1.2;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.56px;\n      `;case"h3":return`\n        font-size: ${n["text-size-xl"]};\n        line-height: 1.28;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h4":return`\n        font-size: ${n["text-size-l"]};\n        line-height: 1.44;\n        color: ${n["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h5":return`\n        font-size: ${n["text-size-m"]};\n        line-height: 1.4;\n        color: ${n["content-color-primary"]};\n      `;case"h6":return`\n        font-size: ${n["text-size-m"]};\n        line-height: 1.4;\n        color: ${n["content-color-secondary"]};\n      `;default:return null}}const p=l().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(e=>e.theme["spacing-zero"]),(e=>e.theme["text-family-default"]),(e=>e.theme["text-weight-medium"]),(e=>e.wordBreak),(e=>e.styleAs?h(e.styleAs,e.theme):h(e.as,e.theme)),(e=>e.color&&`color: ${e.theme[e.color]};`),(e=>e.hasBottomSpacing&&function(e,n){switch(e){case"h1":return`margin-bottom: ${n["spacing-l"]} !important`;case"h2":return`margin-bottom: ${n["spacing-m"]} !important`;case"h3":return`margin-bottom: ${n["spacing-s"]} !important`;case"h4":case"h5":case"h6":return`margin-bottom: ${n["spacing-xs"]} !important`;default:return`margin: ${n["spacing-zero"]} !important`}}(e.as,e.theme)),(e=>{return`\n    ${e.isTruncated?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":""}\n    ${(n=e.maxLines)?`\n    display: -webkit-box;\n    -webkit-line-clamp: ${n};\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    `:""}\n    `;var n}));function u(e){const{text:n,type:t,styleAs:r,color:i,_wordBreak:s,className:l,hasBottomSpacing:d,isTruncated:h,maxLines:u,tooltip:g,"data-testid":m,"data-click":b}=e,[k,x]=(0,o.useState)(!1),w=a().createElement(p,{as:t,styleAs:r,color:i,className:l,"data-aether-id":"aether-heading","data-testid":m,"data-click":b,hasBottomSpacing:d,isTruncated:h,maxLines:u,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?x(!0):x(!1)},wordBreak:s},n);return k&&(0,c.LX)(e)?(0,c.Ur)(w,g||n):w}u.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},u.propTypes={type:i().oneOf(["h1","h2","h3","h4","h5","h6"]),text:i().string.isRequired,color:i().oneOf(["",...Object.keys(d.globals.colors),...Object.keys(d.aliases.light.content)]),styleAs:i().oneOf(["h1","h2","h3","h4","h5","h6"]),className:i().string,hasBottomSpacing:i().bool,isTruncated:e=>{let{isTruncated:n,maxLines:t}=e;return"boolean"!=typeof n?new Error("Heading: expected a boolean value for isTruncated prop"):n&&t?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:i().number,tooltip:e=>{const{tooltip:n,isTruncated:t,maxLines:o}=e;return"string"!=typeof n?new Error("Heading: tooltip prop should only have a string value."):!n||t&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:i().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":i().string,"data-click":i().string}}}]);
//# sourceMappingURL=9605.6d1a1d6fc00a5f02.js.map