"use strict";(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[9951,8670],{79951:(e,n,t)=>{t.r(n),t.d(n,{initSentry:()=>s,sentryRouter:()=>u});var r=t(26663),o=t.n(r),a=t(70381);function i(e){var n;if(null!=e&&null!=(n=e.exception)&&n.values)for(const n of e.exception.values){var t;if(null!=n&&null!=(t=n.stacktrace)&&t.frames)for(const e of n.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function s(e){o().SENTRY_DSN&&a.init(Object.assign({},e,{dsn:o().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-09-23.10-55",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:i}))}var l=t(40540),c=t(60607);const u=e=>{if(o().SENTRY_DSN){var n;const t=null==(n=a.getCurrentHub())?void 0:n.getClient();if(null!=t&&t.addIntegration)return t.addIntegration(new a.BrowserTracing({routingInstrumentation:a.reactRouterV6Instrumentation(l.useEffect,c.useLocation,c.useNavigationType,c.createRoutesFromChildren,c.matchRoutes)})),a.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=9951.fb7effd4738e3a00.js.map