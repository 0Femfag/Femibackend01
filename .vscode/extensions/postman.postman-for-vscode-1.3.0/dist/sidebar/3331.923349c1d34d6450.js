"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[3331],{15059:(e,n,o)=>{o.r(n),o.d(n,{COLLECTION_RUNS_LIST_PREFIX:()=>u,COLLECTION_RUN_PREFIX:()=>l,collectionRunByIdQuery:()=>p,collectionRunsListQuery:()=>d,deleteCollectionRun:()=>y,fetchCollectionRunById:()=>I,findCollectionRuns:()=>a,getQueryKey:()=>i,importCollectionRun:()=>w,removeCollectionRunFromListCache:()=>T,useCollectionRunById:()=>k,useCollectionRuns:()=>R,useDeleteCollectionRun:()=>g,useDeleteRuns:()=>E});var s=o(7560),t=o(45860),r=o(26663),c=o.n(r);const a=async e=>{const{signal:n,workspaceId:o,collectionId:r,populateIterations:a,count:u,status:l,owner:i,source:d,since_id:I,max_id:p}=e;return await t.postmanGateway.get({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/collectionrun`,query:(0,s.Z)({workspace:o},r&&{collection:r},{iterations:a||!1,count:u},l&&{status:l},i&&{owner:i},d&&{source:d},{since_id:I||0},p&&{max_id:p}),signal:n})},u="collection-runs-list",l="collection-run",i=e=>{const n=[u];for(const o of Object.values(e))o&&n.push(o);return n},d=({signal:e,workspaceId:n,collectionId:o,populateIterations:s=!1,count:t,status:r,owner:c,source:u,since_id:l=0,max_id:d=0})=>({queryKey:i({workspaceId:n,collectionId:o}),queryFn:()=>a({signal:e,workspaceId:n,collectionId:o,populateIterations:s,count:t,status:r,owner:c,source:u,since_id:l,max_id:d}),enabled:!!n,useErrorBoundary:!1}),I=async({signal:e,runId:n})=>await t.postmanGateway.get({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/${n}`,signal:e}),p=({signal:e,runId:n})=>({queryKey:[l,n],queryFn:()=>I({signal:e,runId:n}),enabled:!!n,useErrorBoundary:!1}),w=async({signal:e,owner:n,workspace:o,runDetails:s})=>await t.postmanGateway.post({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/import`,query:{owner:n,workspace:o},body:JSON.stringify(s),signal:e}),y=async({runId:e,userId:n,signal:o})=>await t.postmanGateway.delete({url:`${c().HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/${e}`,query:{owner:n},signal:o});var _=o(97201);const R=({workspaceId:e,collectionId:n,count:o,status:s,source:t,owner:r})=>(0,_.useDataFetch)(d({workspaceId:e,collectionId:n,count:o,status:s,source:t,owner:r})),k=e=>(0,_.useDataFetch)(p({runId:e})),T=(e,n,o)=>{e&&(0,_.updateCache)({key:i({workspaceId:n,collectionId:null!=o?o:""}),updater:n=>n?n.filter((n=>n.model_id!==e)):n})},g=()=>(0,_.useMutation)({mutationFn:e=>y({runId:e.runId,userId:e.userId,signal:e.signal}),onSuccess:(e,n)=>{T(n.runId,n.workspaceId,n.collectionId),n.onSuccess&&n.onSuccess(e)},onError:(e,n)=>{n.onError&&n.onError(e)}});var m=o(53186),C=o(10099);const E=(e,n)=>{const o=(0,C.useActiveWorkspaceId)(),{userCanDeleteHistory:s}=(0,m.useWorkspacePermissions)(o),t=g(),{data:r}=R({workspaceId:o,count:e});return{deleteRuns:e=>{if(!s||!r)return;const c=r.map((e=>t.mutateAsync({runId:e.data.id,userId:e.data.owner,workspaceId:o,collectionId:n})));Promise.all(c).catch((n=>{e&&e(n)}))}}}}}]);
//# sourceMappingURL=3331.923349c1d34d6450.js.map