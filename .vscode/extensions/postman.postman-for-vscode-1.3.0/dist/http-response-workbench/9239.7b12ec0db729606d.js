"use strict";(self.webpackChunkhttp_response_workbench=self.webpackChunkhttp_response_workbench||[]).push([[9239],{31597:(e,r,n)=>{n.r(r),n.d(r,{perfComponents:()=>t,perfConst:()=>a,sendMeasureEvent:()=>h,sessionId:()=>p});var a={};n.r(a),n.d(a,{GENERIC_CATEGORY:()=>o,PERFORMANCE_GLOBAL_NAMESPACE:()=>c});var t={};n.r(t),n.d(t,{PerfContext:()=>m,PerformanceMarkPaint:()=>f});const c="__POSTMAN_PERFORMANCE__",o="app-perf";var s=n(40540),i=n(52322);function f({children:e,markName:r,condition:n=!0,callback:a=function(){}}){const[t,c]=(0,s.useState)(!1),o=(0,s.useRef)(0),f=()=>{var e;if(n&&!t&&null!=(e=performance)&&e.mark){performance.mark(r);try{a()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}c(!0)}};return(0,s.useLayoutEffect)((()=>(o.current=requestAnimationFrame(f),()=>cancelAnimationFrame(o.current))),[n]),(0,i.jsx)(i.Fragment,{children:e})}f.displayName="PerformanceMarkPaint";const l={markName:void 0,callback:void 0},m=(0,s.createContext)(l);m.displayName="PerfContext";var u=n(56880);const p=(0,n(60398).v4)(),d=[];function k(e){const r=Object.assign({},e,{traceId:p});u.AnalyticsService.addEventV2(r)}function h({name:e,category:r=o,label:n,entityType:a,once:t=!0}){if(!t||!d.includes(e)){d.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))k({category:r,action:t.name,value:Math.round(t.duration),label:n||"",entityType:a})}}}}]);
//# sourceMappingURL=9239.7b12ec0db729606d.js.map