"use strict";(self.webpackChunkcookies_editor=self.webpackChunkcookies_editor||[]).push([[1910],{8912:(n,e,a)=>{a.r(e),a.d(e,{CHANGE_LANGUAGE:()=>h,bootstrapI18n:()=>d,changeLanguage:()=>E,createInstance:()=>f,i18n:()=>s(),registerChangeLanguageListener:()=>L});var t=a(3398),s=a.n(t),o=a(1669),c=a.n(o),i=a(5352),u=a(6523),l=a.n(u);const r={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(n,e)=>(n=>`%%basePath%%/${n}/locale/{{lng}}/{{ns}}.json`)(e[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},d=()=>{s().use(l()).use(c()).use(i.initReactI18next).init(r)};a(540);var g=a(8980),b=a.n(g);const h="CHANGE_LANGUAGE";function E(n){const e=new CustomEvent("CHANGE_LANGUAGE",{detail:n});document.body.dispatchEvent(e)}function L(n){function e(e){n(e.detail)}return s().on("languageChanged",n),document.body.addEventListener(h,e),()=>{s().off("languageChanged",n),document.body.removeEventListener(h,e)}}var A=a(2322);function f(n){const e=s().createInstance();return e.use(l()),e.use(b()(((e,a,t)=>{n(`${e}/${a}`).then((({default:n})=>{t(null,n)})).catch((n=>{t(n,null)}))}))),e.init(Object.assign({},r,{ns:["core"]})),L((n=>{e.changeLanguage(n)})),{i18n:e,useTranslation:(n,a)=>(0,i.useTranslation)(n,Object.assign({},a,{i18n:e})),Translation:n=>(0,A.jsx)(i.Translation,Object.assign({},n,{i18n:e}))}}}}]);
//# sourceMappingURL=1910.18884f35e1cee680.js.map