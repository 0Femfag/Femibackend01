"use strict";(self.webpackChunkenvironment_sidebar=self.webpackChunkenvironment_sidebar||[]).push([[1148],{8283:(e,t,r)=>{function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:()=>n})},730:(e,t,r)=>{r.r(t),r.d(t,{AwaitErrorBoundary:()=>k,CustomErrorBoundary:()=>y,GenericErrorMessage:()=>g,RouteErrorBoundary:()=>x,logError:()=>l}),r(540);var n=r(607),o=r(8283),a=r(1466),i=r(381);const s=["crash"],l=(e,t)=>{let{crash:r=!1}=t,n=(0,o.Z)(t,s);((e,t)=>{var r;null==(r=window)||null==(r=r.newrelic)||null==r.noticeError||r.noticeError(e,t)})(e,Object.assign({crash:r},n)),((e,t)=>{i.withScope((r=>{r.setExtra("ErrorStack",t.stack),r.setExtra("ErrorAppId",t.appId),r.setExtra("ErrorElementId",t.errorElementId),i.captureException(e)}))})(e,Object.assign({crash:r},n)),((e,t)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:t.appId,error:(null==e.toString?void 0:e.toString())||e.message,info:t}})})(e,n)};var c=r(9437),d=r(47);const p="Something Went Wrong",h="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=r(2322);const u=["title","description","message","illustration","error"],g=e=>{let{title:t=p,description:r=h,message:n,illustration:a="illustration-unable-to-load",error:i}=e,s=(0,o.Z)(e,u);const l=n||i&&i.message;return(0,m.jsxs)(c.Z,Object.assign({title:t,description:r},s,{children:[l&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:l})}),(0,m.jsx)(d.Z,{name:a})]}))},x=({children:e,title:t,description:r,message:o,appId:a,errorElementId:i})=>{const s=(0,n.useRouteError)();return l(s,{stack:s.stack,appId:a,errorElementId:i}),e||(0,m.jsx)(g,{title:t,description:r,error:s,message:o})};var f=r(6010);const E=["children","onError","appId","errorElementId","FallbackComponent"],b=(e,t,r,n)=>{l(e,{stack:t.componentStack,appId:r,crash:!0,errorElementId:n})},y=e=>{let{children:t,onError:r,appId:n,errorElementId:a,FallbackComponent:i=g}=e,s=(0,o.Z)(e,E);return(0,m.jsx)(f.ErrorBoundary,Object.assign({FallbackComponent:null!=s&&s.fallback?void 0:i,onError:(e,t)=>(r||b)(e,t,n,a)},s,{children:t}))},k=({children:e,title:t,description:r,message:o,appId:a,errorElementId:i})=>{const s=(0,n.useAsyncError)();return l(s,{stack:s.stack,appId:a,errorElementId:i}),e||(0,m.jsx)(g,{title:t,description:r,error:s,message:o})}},4962:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(540),o=r.n(n),a=r(1314),i=r.n(a),s=r(9530),l=r.n(s),c=r(3753),d=r(265);function p(e,t){switch(e){case"h1":return`\n        font-size: ${t["text-size-xxxl"]};\n        line-height: 1.2;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.72px;\n      `;case"h2":return`\n        font-size: ${t["text-size-xxl"]};\n        line-height: 1.2;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.56px;\n      `;case"h3":return`\n        font-size: ${t["text-size-xl"]};\n        line-height: 1.28;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h4":return`\n        font-size: ${t["text-size-l"]};\n        line-height: 1.44;\n        color: ${t["content-color-primary"]};\n        letter-spacing: -0.12px;\n      `;case"h5":return`\n        font-size: ${t["text-size-m"]};\n        line-height: 1.4;\n        color: ${t["content-color-primary"]};\n      `;case"h6":return`\n        font-size: ${t["text-size-m"]};\n        line-height: 1.4;\n        color: ${t["content-color-secondary"]};\n      `;default:return null}}const h=l().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(e=>e.theme["spacing-zero"]),(e=>e.theme["text-family-default"]),(e=>e.theme["text-weight-medium"]),(e=>e.wordBreak),(e=>e.styleAs?p(e.styleAs,e.theme):p(e.as,e.theme)),(e=>e.color&&`color: ${e.theme[e.color]};`),(e=>e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return`margin-bottom: ${t["spacing-l"]} !important`;case"h2":return`margin-bottom: ${t["spacing-m"]} !important`;case"h3":return`margin-bottom: ${t["spacing-s"]} !important`;case"h4":case"h5":case"h6":return`margin-bottom: ${t["spacing-xs"]} !important`;default:return`margin: ${t["spacing-zero"]} !important`}}(e.as,e.theme)),(e=>{return`\n    ${e.isTruncated?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":""}\n    ${(t=e.maxLines)?`\n    display: -webkit-box;\n    -webkit-line-clamp: ${t};\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    `:""}\n    `;var t}));function m(e){const{text:t,type:r,styleAs:a,color:i,_wordBreak:s,className:l,hasBottomSpacing:c,isTruncated:p,maxLines:m,tooltip:u,"data-testid":g,"data-click":x}=e,[f,E]=(0,n.useState)(!1),b=o().createElement(h,{as:r,styleAs:a,color:i,className:l,"data-aether-id":"aether-heading","data-testid":g,"data-click":x,hasBottomSpacing:c,isTruncated:p,maxLines:m,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?E(!0):E(!1)},wordBreak:s},t);return f&&(0,d.LX)(e)?(0,d.Ur)(b,u||t):b}m.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},m.propTypes={type:i().oneOf(["h1","h2","h3","h4","h5","h6"]),text:i().string.isRequired,color:i().oneOf(["",...Object.keys(c.globals.colors),...Object.keys(c.aliases.light.content)]),styleAs:i().oneOf(["h1","h2","h3","h4","h5","h6"]),className:i().string,hasBottomSpacing:i().bool,isTruncated:e=>{let{isTruncated:t,maxLines:r}=e;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&r?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:i().number,tooltip:e=>{const{tooltip:t,isTruncated:r,maxLines:n}=e;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||r&&!n?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:i().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":i().string,"data-click":i().string}}}]);
//# sourceMappingURL=1148.754bb5c543d88b34.js.map