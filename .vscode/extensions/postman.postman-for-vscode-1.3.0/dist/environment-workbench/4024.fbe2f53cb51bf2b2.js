"use strict";(self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[]).push([[4024,6776],{46776:(e,r,t)=>{t.r(r),t.d(r,{Observer:()=>k,clearTimers:()=>E,enableStaticRendering:()=>v,isObserverBatched:()=>f,isUsingStaticRendering:()=>p,observer:()=>T,observerBatching:()=>c,useAsObservableSource:()=>B,useLocalObservable:()=>x,useLocalStore:()=>z,useObserver:()=>A,useStaticRendering:()=>M});var n=t(78476),o=t(40540),i=t.n(o);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.makeObservable)throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var a=t(21730);function u(e){e()}function c(e){e||(e=u),(0,n.configure)({reactionScheduler:e})}var f=function(){return!0};function l(e){return(0,n.getDependencyTree)(e)}var s=function(){function e(e){var r=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(r.sweepTimeout),r.sweepTimeout=void 0;var t=Date.now();r.registrations.forEach((function(n,o){t-n.registeredAt>=e&&(r.finalize(n.value),r.registrations.delete(o))})),r.registrations.size>0&&r.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){r.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r,t){this.registrations.set(t,{value:r,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),b=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:s)((function(e){var r;null===(r=e.reaction)||void 0===r||r.dispose(),e.reaction=null})),d=!1;function v(e){d=e}function p(){return d}var y=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a};function m(e){return"observer".concat(e)}var w=function(){};function h(){return new w}function g(e,r){if(void 0===r&&(r="observed"),p())return e();var t=y(i().useState(h),1)[0],o=y(i().useState(),2)[1],a=function(){return o([])},u=i().useRef(null);u.current||(u.current={reaction:null,mounted:!1,changedBeforeMount:!1});var c,f,s=u.current;if(s.reaction||(s.reaction=new n.Reaction(m(r),(function(){s.mounted?a():s.changedBeforeMount=!0})),b.register(t,s,s)),i().useDebugValue(s.reaction,l),i().useEffect((function(){return b.unregister(s),s.mounted=!0,s.reaction?s.changedBeforeMount&&(s.changedBeforeMount=!1,a()):(s.reaction=new n.Reaction(m(r),(function(){a()})),a()),function(){s.reaction.dispose(),s.reaction=null,s.mounted=!1,s.changedBeforeMount=!1}}),[]),s.reaction.track((function(){try{c=e()}catch(e){f=e}})),f)throw f;return c}var S="function"==typeof Symbol&&Symbol.for,O=S?Symbol.for("react.forward_ref"):"function"==typeof o.forwardRef&&(0,o.forwardRef)((function(e){return null})).$$typeof,R=S?Symbol.for("react.memo"):"function"==typeof o.memo&&(0,o.memo)((function(e){return null})).$$typeof;function T(e,r){var t;if(R&&e.$$typeof===R)throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");if(p())return e;var n=null!==(t=null==r?void 0:r.forwardRef)&&void 0!==t&&t,i=e,a=e.displayName||e.name;if(O&&e.$$typeof===O&&(n=!0,"function"!=typeof(i=e.render)))throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var u,c,f=function(e,r){return g((function(){return i(e,r)}),a)};return""!==a&&(f.displayName=a),e.contextTypes&&(f.contextTypes=e.contextTypes),n&&(f=(0,o.forwardRef)(f)),f=(0,o.memo)(f),u=e,c=f,Object.keys(u).forEach((function(e){j[e]||Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(u,e))})),f}var j={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};function k(e){var r=e.children,t=e.render,n=r||t;return"function"!=typeof n?null:g(n)}function x(e,r){return(0,o.useState)((function(){return(0,n.observable)(e(),r,{autoBind:!0})}))[0]}k.displayName="Observer";var P,$=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a};function B(e){var r=$((0,o.useState)((function(){return(0,n.observable)(e,{},{deep:!1})})),1)[0];return(0,n.runInAction)((function(){Object.assign(r,e)})),r}function z(e,r){var t=r&&B(r);return(0,o.useState)((function(){return(0,n.observable)(e(t),void 0,{autoBind:!0})}))[0]}c(a.unstable_batchedUpdates);var E=null!==(P=b.finalizeAllImmediately)&&void 0!==P?P:function(){};function A(e,r){return void 0===r&&(r="observed"),g(e,r)}function M(e){v(e)}}}]);
//# sourceMappingURL=4024.fbe2f53cb51bf2b2.js.map