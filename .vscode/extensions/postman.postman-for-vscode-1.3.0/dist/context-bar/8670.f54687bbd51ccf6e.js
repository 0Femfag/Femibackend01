"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[8670],{9951:(e,t,n)=>{n.r(t),n.d(t,{initSentry:()=>l,sentryRouter:()=>f});var r=n(7560),a=n(6663),o=n.n(a),i=n(381);function s(e){var t;if(null!=e&&null!=(t=e.exception)&&t.values)for(const t of e.exception.values){var n;if(null!=t&&null!=(n=t.stacktrace)&&n.frames)for(const e of t.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function l(e){o().SENTRY_DSN&&i.init((0,r.Z)({},e,{dsn:o().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-09-23.10-55",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:s}))}var u=n(540),c=n(607);const f=e=>{if(o().SENTRY_DSN){var t;const n=null==(t=i.getCurrentHub())?void 0:t.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new i.BrowserTracing({routingInstrumentation:i.reactRouterV6Instrumentation(u.useEffect,c.useLocation,c.useNavigationType,c.createRoutesFromChildren,c.matchRoutes)})),i.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=8670.f54687bbd51ccf6e.js.map