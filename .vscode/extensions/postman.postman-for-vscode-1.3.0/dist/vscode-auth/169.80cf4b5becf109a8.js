"use strict";(self.webpackChunkvscode_auth=self.webpackChunkvscode_auth||[]).push([[169],{188:(o,t,n)=>{n.r(t),n.d(t,{default:()=>S});var e=n(540),a=n(9530),c=n.n(a),r=n(6486),i=n(8560),s=n(5736),u=n(9437),d=n(9460),l=n(47),p=n(1466),y=n(2322);const b=c().div.withConfig({displayName:"vscode-auth__StyledApp",componentId:"sc-loz8d2-0"})(["height:325px;max-width:325px;inset:0;margin:auto;position:absolute;"]),g=c()(r.Z).withConfig({displayName:"vscode-auth__StyledSignInButton",componentId:"sc-loz8d2-1"})(["background-color:'var(--button-primary-background-color)';color:'var(--button-primary-content-color)';&:hover,&.is-hovered{background-color:'var(--button-primary-hover-background-color)';}:disabled{background-color:var(--button-primary-background-color) !important;color:var(--button-primary-content-color) !important;opacity:0.5;}"]),m=c()(r.Z).withConfig({displayName:"vscode-auth__StyledCreateAccountButton",componentId:"sc-loz8d2-2"})(["background-color:'var(--button-secondary-background-color)';color:'var(--button-secondary-content-color)';&:hover,&.is-hovered{background-color:'var(--button-secondary-hover-background-color)';}"]),h={"sign-in":"INITIATE_LOGIN","sign-up":"INITIATE_SIGN_UP","paste-token":"AUTH_PASTE_TOKEN",cancel:"CANCEL_LOGIN"};function v(o){p.VSCodeCommunicationsService.postMessageToExtension({type:h[o],payload:{}})}const S=function(){const[o,t]=(0,e.useState)(!0),[n,a]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const o=[];return p.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"IS_LOGIN_ENABLED",payload:{}}).then((o=>{t(o)})),o.push(p.VSCodeCommunicationsService.subscribe("SET_LOGIN_BUSY_STATE",(()=>{a(!0)})),p.VSCodeCommunicationsService.subscribe("RESET_SIDEBAR_LOGIN_STATE",(()=>{a(!1)}))),()=>{for(const t of o)t&&t()}}),[]),(0,y.jsx)(b,{children:n?(0,y.jsxs)(i.Z,{direction:"column",gap:"spacing-l",alignItems:"center",children:[(0,y.jsx)(s.Z,{size:"large"}),(0,y.jsx)(r.Z,{type:"tertiary",text:"Cancel",onClick:()=>{v("cancel")},"data-testid":"auth-cancel-button"}),(0,y.jsx)(r.Z,{type:"monochrome-plain",text:"Enter authorization token",onClick:()=>{v("paste-token")},"data-testid":"paste-token-button"})]}):(0,y.jsx)(u.Z,{title:"Sign in to save your work",description:(0,y.jsx)(d.ZP,{type:"para",children:"Test and debug your collections, then save and sync your changes seamlessly."}),primaryAction:(0,y.jsx)(g,{type:"primary",text:"Sign In",isDisabled:!o,onClick:()=>{v("sign-in")}}),secondaryAction:(0,y.jsx)(m,{type:"outline",text:"Create Account",isDisabled:!o,"data-testid":"signup-button",onClick:()=>{v("sign-up")}}),children:(0,y.jsx)(l.Z,{name:"illustration-signIn"})})})}}}]);
//# sourceMappingURL=169.80cf4b5becf109a8.js.map