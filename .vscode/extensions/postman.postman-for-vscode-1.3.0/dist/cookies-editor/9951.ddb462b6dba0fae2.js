"use strict";(self.webpackChunkcookies_editor=self.webpackChunkcookies_editor||[]).push([[9951,8670],{9951:(e,t,n)=>{n.r(t),n.d(t,{initSentry:()=>s,sentryRouter:()=>c});var r=n(6663),o=n.n(r),i=n(381);function a(e){var t;if(null!=e&&null!=(t=e.exception)&&t.values)for(const t of e.exception.values){var n;if(null!=t&&null!=(n=t.stacktrace)&&n.frames)for(const e of t.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function s(e){o().SENTRY_DSN&&i.init(Object.assign({},e,{dsn:o().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-09-23.10-55",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:a}))}var l=n(540),u=n(607);const c=e=>{if(o().SENTRY_DSN){var t;const n=null==(t=i.getCurrentHub())?void 0:t.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new i.BrowserTracing({routingInstrumentation:i.reactRouterV6Instrumentation(l.useEffect,u.useLocation,u.useNavigationType,u.createRoutesFromChildren,u.matchRoutes)})),i.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=9951.ddb462b6dba0fae2.js.map