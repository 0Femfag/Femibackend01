"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[9890],{98283:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})},35482:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7560),o=n(40540),a=n.n(o),i=n(207),s=a().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a().createElement("path",{d:"M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",fill:"#6B6B6B"}),a().createElement("path",{d:"M8 4C8.53541 4 8.95377 4.46229 8.9005 4.99504L8.54975 8.50248C8.52151 8.78492 8.28384 9 8 9C7.71616 9 7.47849 8.78492 7.45025 8.50248L7.0995 4.99504C7.04623 4.46228 7.46459 4 8 4Z",fill:"#6B6B6B"}),a().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",fill:"#6B6B6B"})),l=a().forwardRef((function(e,t){return a().createElement(i.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));l.getName=function(){return"icon-state-error-stroke"};const c=l},74962:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(40540),o=n.n(r),a=n(1314),i=n.n(a),s=n(59530),l=n.n(s),c=n(43753),h=n(90265);function d(e,t){switch(e){case"h1":return`\n        font-size: ${t["text-size-xxxl"]};\n        line-height: 1.2;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.72px;\n      `;case"h2":return`\n        font-size: ${t["text-size-xxl"]};\n        line-height: 1.2;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.56px;\n      `;case"h3":return`\n        font-size: ${t["text-size-xl"]};\n        line-height: 1.28;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h4":return`\n        font-size: ${t["text-size-l"]};\n        line-height: 1.44;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h5":return`\n        font-size: ${t["text-size-m"]};\n        line-height: 1.4;\n        color: ${t["content-color-primary"]};\n      `;case"h6":return`\n        font-size: ${t["text-size-m"]};\n        line-height: 1.4;\n        color: ${t["content-color-secondary"]};\n      `;default:return null}}const p=l().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(e=>e.theme["spacing-zero"]),(e=>e.theme["text-family-default"]),(e=>e.theme["text-weight-medium"]),(e=>e.wordBreak),(e=>e.styleAs?d(e.styleAs,e.theme):d(e.as,e.theme)),(e=>e.color&&`color: ${e.theme[e.color]};`),(e=>e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return`margin-bottom: ${t["spacing-l"]} !important`;case"h2":return`margin-bottom: ${t["spacing-m"]} !important`;case"h3":return`margin-bottom: ${t["spacing-s"]} !important`;case"h4":case"h5":case"h6":return`margin-bottom: ${t["spacing-xs"]} !important`;default:return`margin: ${t["spacing-zero"]} !important`}}(e.as,e.theme)),(e=>{return`\n    ${e.isTruncated?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":""}\n    ${(t=e.maxLines)?`\n    display: -webkit-box;\n    -webkit-line-clamp: ${t};\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    `:""}\n    `;var t}));function u(e){const{text:t,type:n,styleAs:a,color:i,_wordBreak:s,className:l,hasBottomSpacing:c,isTruncated:d,maxLines:u,tooltip:m,"data-testid":g,"data-click":f}=e,[w,x]=(0,r.useState)(!1),y=o().createElement(p,{as:n,styleAs:a,color:i,className:l,"data-aether-id":"aether-heading","data-testid":g,"data-click":f,hasBottomSpacing:c,isTruncated:d,maxLines:u,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?x(!0):x(!1)},wordBreak:s},t);return w&&(0,h.LX)(e)?(0,h.Ur)(y,m||t):y}u.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},u.propTypes={type:i().oneOf(["h1","h2","h3","h4","h5","h6"]),text:i().string.isRequired,color:i().oneOf(["",...Object.keys(c.globals.colors),...Object.keys(c.aliases.light.content)]),styleAs:i().oneOf(["h1","h2","h3","h4","h5","h6"]),className:i().string,hasBottomSpacing:i().bool,isTruncated:e=>{let{isTruncated:t,maxLines:n}=e;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:i().number,tooltip:e=>{const{tooltip:t,isTruncated:n,maxLines:r}=e;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!r?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:i().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":i().string,"data-click":i().string}}}]);
//# sourceMappingURL=9890.22d74bf59feee02e.js.map