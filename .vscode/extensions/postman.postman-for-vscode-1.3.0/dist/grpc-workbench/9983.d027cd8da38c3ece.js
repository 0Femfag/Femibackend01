"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[9983],{79983:(e,t,n)=>{n.r(t),n.d(t,{ActiveEnvironmentSelector:()=>cn,ENVIRONMENTS_SIDEBAR_PERMISSIONS_QUERY_KEY_PREFIX:()=>E,ENVIRONMENT_BROADCAST_EVENT_ACTIONS:()=>L,ENVIRONMENT_ITEM_BROADCAST_EVENT_ACTIONS:()=>O,ENVIRONMENT_ITEM_QUERY_KEY_PREFIX:()=>b,ENVIRONMENT_LIST_QUERY_KEY_PREFIX:()=>m,ENVIRONMENT_SELECTOR_PERMISSIONS_QUERY_KEY_PREFIX:()=>f,ENVIRONMENT_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>w,GLOBALS_BROADCAST_EVENT_ACTIONS:()=>N,GLOBALS_ITEM_QUERY_KEY_PREFIX:()=>h,GLOBALS_WORKBENCH_PERMISSIONS_QUERY_KEY_PREFIX:()=>g,SECRET:()=>ue,VariablesContextProvider:()=>W,VariablesContextStore:()=>l,WORKSPACE_BROADCAST_EVENT_ACTIONS:()=>P,WORKSPACE_QUERY_KEY_PREFIX:()=>y,environmentItemsQuery:()=>M,environmentVariablesHandler:()=>In,environmentsSubscriptionHandler:()=>Tn,getActiveEnvironment:()=>F,getActiveEnvironmentSession:()=>_n,getActiveGlobalsSession:()=>An,getDuplicateEntityName:()=>oe,getDynamicVariableQuery:()=>Xt,getEnvironmentItemQuery:()=>Tt,getEnvironmentItemQuerySafe:()=>Rt,getEnvironmentSelectorPermissionsQuery:()=>Yt,getEnvironmentSidebarPermissionsQuery:()=>Ft,getEnvironmentWorkbenchPermissionsQuery:()=>Zt,getGlobalsItemQuery:()=>Nt,getGlobalsWorkbenchPermissionsQuery:()=>Wt,globalVariablesHandler:()=>Sn,isEnvironmentItemLoading:()=>en,resolveVariablesInObject:()=>fn,setActiveEnvironment:()=>$,unZipVariables:()=>de,updateEnvironment:()=>Cn,updateEnvironmentCacheAndSession:()=>x,updateEnvironmentMutation:()=>vn,updateEnvironmentNameMutation:()=>gn,updateEnvironmentWithSessionMutation:()=>pn,updateGlobals:()=>kn,updateGlobalsCacheAndSession:()=>T,updateGlobalsMutation:()=>hn,updateGlobalsWithSessionMutation:()=>En,useActiveAndDynamicVariables:()=>Ee,useActiveEnvironment:()=>Z,useActiveVariables:()=>he,useCreateNewEnvironment:()=>J,useCurrentEnvironmentId:()=>ke,useEnvironmentDelete:()=>X,useEnvironmentDuplicate:()=>ie,useEnvironmentFeatureFlag:()=>z,useEnvironmentItems:()=>j,useEnvironmentListSubscription:()=>ne,useEnvironmentSubscription:()=>se,useSetAsActiveEnvironment:()=>re,useUpdateEnvironmentName:()=>fe,useUpdateEnvironmentRoles:()=>Ie,zipVariables:()=>ce});var r=n(78476),a=n(29875);const o=new a.KVStorage("last-used-active-environment"),i=async e=>await o.get(e)||null,s={queryFn:()=>Promise.reject(),enabled:!1,useErrorBoundary:!1};class l{constructor({collectionFetchOptions:e},t){this.activeEnvironment=null,this.collectionFetchOptions=void 0,this.meta=void 0,this.useActiveEnvironmentFromContext=void 0,this.loadLastUsedActiveEnvironment=()=>{i(this.meta.workspaceId).then((e=>{(0,r.runInAction)((()=>{this.activeEnvironment=e}))})).catch((()=>{}))},this.setActiveEnvironment=e=>{this.activeEnvironment=e,(async(e,t)=>(await o.set(e,t),t))(this.meta.workspaceId,e).catch((()=>{}))},this.meta=t,this.useActiveEnvironmentFromContext=!e,this.collectionFetchOptions=e||s,(0,r.makeObservable)(this,{activeEnvironment:r.observable,setActiveEnvironment:r.action}),this.useActiveEnvironmentFromContext&&this.loadLastUsedActiveEnvironment()}}var c=n(40540),d=n.n(c),u=n(97201),v=n(10099),p=n(45860);const m="environments",b="environment",y="workspace",h="globals",E="environment-sidebar-permissions",w="environment-workbench-permissions",g="globals-workbench-permissions",f="environment-selector-permissions",C=new class{constructor(){var e=this;this.observer=null,this.environmentId="",this.abortController=null,this.asyncObserver=null,this.changeEnvironment=e=>{this.environmentId&&this.unsubscribe(),this.environmentId=e},this.subscribe=async function({environmentId:t=e.environmentId,subscriptionHandler:n}){if(""===t)return;if(e.environmentId!==t&&e.changeEnvironment(t),e.observer||e.asyncObserver)return;const{asyncObserver:r,abortController:a}=(e=>{const t=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:t.signal,subscribeRequest:{method:"post",service:"sync",url:`/environment/${e}/subscribe`,data:{}},subscriptionEvents:["update","update_roles"],responseFilter:e=>{var t;return null==e||null==(t=e.body)?void 0:t.model_id},broadcastFilter:e=>null==e?void 0:e.model_id,unsubscribeRequest:{method:"delete",service:"sync",url:`/environment/${e}/subscribe`,data:{}}}),abortController:t}})(t);e.abortController=a,e.asyncObserver=r,e.observer=await r,e.abortController=null,(0,u.invalidateCache)([b,t]),e.observer.subscribe({next:e=>{n(e,{environmentId:t})},complete:()=>{e.unsubscribe()},error:async function(r){e.cleanup(),await e.subscribe({subscriptionHandler:n,environmentId:t})}})},this.unsubscribe=()=>{var e,t;null==(e=this.abortController)||e.abort(),null==(t=this.observer)||t.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}};var k=n(7560),I=n(85692),S=n(26663),_=n.n(S);const A=e=>(0,k.Z)({},e,{id:`${e.owner}-${e.id}`}),x=async(e,t)=>{const n=A(t);(0,u.updateCache)({key:[b,e],updater:e=>e?(0,k.Z)({},e,n):e}),await(0,I.updateDependentSession)({model:"environment",modelId:n.id},n)},T=async(e,t)=>{(0,u.updateCache)({key:[h,e],updater:e=>e?(0,k.Z)({},e,t):e}),await(0,I.updateDependentSession)({model:"globals",modelId:t.id},t)};var R=n(14350);let N=function(e){return e.UPDATE="update",e}({}),L=function(e){return e.DELETE="delete",e.CREATE="create",e.UPDATE="update",e}({}),O=function(e){return e.UPDATE="update",e.UPDATE_ROLES="update_roles",e}({}),P=function(e){return e.UPDATE="update",e.UPDATE_ROLES="update_roles",e}({});const D=(e,{environmentId:t})=>{var n;const r=null==e||null==(n=e.meta)?void 0:n.action,a=null==e?void 0:e.data;if(r&&a)switch(r){case O.UPDATE:x(t,a);break;case O.UPDATE_ROLES:(0,u.invalidateCache)([R.ACCESS_CONTROL_QUERY_KEY_PREFIX,R.ALL_ROLES,"environment",t])}},V=new a.KVStorage("active-environment"),F=async e=>V.get(B(e)),$=async(e,t)=>{return V.set(B(e),(n=t,JSON.parse(JSON.stringify(n))));var n},B=({model:e,modelId:t})=>[e,t].join("/"),U=()=>V,M=e=>({queryKey:[m,e],queryFn:({signal:t})=>(async({signal:e,workspaceId:t})=>{const n=await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/list/environment`,headers:{"Content-type":"text/plain"},signal:e,query:{workspace:t}});if(!Array.isArray(null==n?void 0:n.data))throw new TypeError("Received invalid response from server");return n.data})({signal:t,workspaceId:e}),select:e=>(Array.isArray(e)&&e.sort(((e,t)=>e.name.localeCompare(t.name))),e),useErrorBoundary:!1}),j=({workspaceId:e})=>(0,u.useDataFetch)(M(e)),Z=()=>{const e=(0,v.useActiveWorkspaceId)(),t=(0,c.useContext)(G);if(!t)throw new Error("useActiveEnvironment must be used within a VariablesContextProvider");const[n,o]=(0,c.useState)(t.activeEnvironment);(0,c.useEffect)((()=>{if(t.useActiveEnvironmentFromContext)return(0,r.reaction)((()=>t.activeEnvironment),o)}),[t]);const{data:i}=(0,u.useDataFetch)(t.collectionFetchOptions),s=i?B({model:"collection",modelId:i.id}):"",{value:l}=(0,a.useKVStorage)(U(),s),d=t.useActiveEnvironmentFromContext?n:l,{data:p,isLoading:m,isError:b}=j({workspaceId:e}),y=(null==d?void 0:d.id)&&(null==p?void 0:p.some((({id:e})=>e===d.id)));return y?{data:d,isLoading:m,isError:b}:{data:null,isLoading:m,isError:b}};var H=n(52322);const G=(0,c.createContext)(void 0),q=()=>{const{data:e}=Z();return(0,c.useEffect)((()=>{if(e)return C.subscribe({environmentId:e.id,subscriptionHandler:D}),()=>C.unsubscribe()}),[e]),null},W=({store:e,children:t})=>((e=>{const t=(0,v.useActiveWorkspaceId)(),{data:n}=(0,u.useDataFetch)(e.collectionFetchOptions);(0,c.useEffect)((()=>{null!=n&&n.id&&(async e=>V.has(B(e)))({model:"collection",modelId:n.id}).then((e=>{if(!e)return i(t).then((e=>$({model:"collection",modelId:n.id},e)))}))}),[n])})(e),(0,H.jsxs)(G.Provider,{value:e,children:[(0,H.jsx)(q,{}),t]}));var Q=n(60398),K=n(39245),Y=n(56880);const z=()=>!0,X=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({environmentId:e})=>(async e=>{const t=await p.postmanGateway.delete({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`});return await(0,I.deleteDependentSession)({model:"environment",modelId:e}),t})(e),onMutate:async({workspaceId:t,environmentId:n})=>{const r=[m,t];await e.cancelQueries({queryKey:r}),(0,u.updateCache)({key:r,updater:e=>e?e.filter((({id:e})=>e!==n)):e})},onSettled:(e,t,{workspaceId:n})=>{(0,u.invalidateCache)([m,n])}})},J=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:({workspaceId:e,requestBody:t})=>(async(e,t)=>await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/import`,body:JSON.stringify(t),query:{workspace:e}}))(e,t),onMutate:async({workspaceId:t,requestBody:n})=>{const r=[m,t];await e.cancelQueries({queryKey:r}),e.setQueryData(r,(e=>[...null!=e?e:[],{id:window.USER_ID+"-"+n.id,name:n.name,isLoading:!0}]))},onSettled:(e,t,{workspaceId:n})=>{(0,u.invalidateCache)([m,n])},useErrorBoundary:!1})},ee=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.subscribe=async function({workspaceId:t=e.workspaceId,subscriptionHandler:n}){if(""===t)return;if(e.workspaceId!==t&&e.changeWorkspace(t),e.observer||e.asyncObserver)return;const{asyncObserver:r,abortController:a}=(e=>{const t=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:t.signal,subscribeRequest:{method:"post",url:`/list/environment?workspace=${e}&subscribe=true`,service:"sync"},subscriptionEvents:["broadcast"],responseFilter:e=>{var t;return null==e||null==(t=e.body)||null==(t=t.subscription)?void 0:t.id},broadcastFilter:e=>{var t;return null==e||null==(t=e.data)||null==(t=t.subscription)?void 0:t.id},unsubscribeRequest:{data:{},method:"delete",url:`/list/environment/subscribe?workspace=${e}`,service:"sync"}}),abortController:t}})(t);e.abortController=a,e.asyncObserver=r,e.observer=await r,e.abortController=null,(0,u.invalidateCache)([m,t]),e.observer.subscribe({next:e=>{n(e,{workspaceId:t})},complete:()=>{e.unsubscribe()},error:async function(r){e.cleanup(),await e.subscribe({subscriptionHandler:n,workspaceId:t})}})},this.unsubscribe=()=>{var e,t;null==(e=this.abortController)||e.abort(),null==(t=this.observer)||t.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null}}},te=(e,{workspaceId:t})=>{var n;const r=null==e||null==(n=e.data)?void 0:n.data;if(!Array.isArray(r))return;const a=[],o=[],i=[];for(const e of r)switch(e.action){case L.CREATE:o.push(e.id);break;case L.DELETE:a.push(e.id);break;case L.UPDATE:i.push(e.id)}o.length>0||i.length>0?(0,u.invalidateCache)([m,t]):a.length>0&&((e,t)=>{0!==e.length&&(0,u.updateCache)({key:[m,t],updater:t=>Array.isArray(t)?t.filter((t=>!e.includes(t.id))):t})})(a,t)},ne=e=>{(0,c.useEffect)((()=>{if(e)return ee.subscribe({workspaceId:e,subscriptionHandler:te}),()=>{ee.unsubscribe()}}),[e])},re=()=>{const e=(0,c.useContext)(G);if(!e)throw new Error("useSetAsActiveEnvironment must be used within a VariablesProvider");const{data:t}=(0,u.useDataFetch)(e.collectionFetchOptions),n=t?B({model:"collection",modelId:t.id}):"",{setValue:r}=(0,a.useKVStorage)(U(),n);return{mutate:t=>{e.setActiveEnvironment(t),!e.useActiveEnvironmentFromContext&&n&&r(t)}}},ae=e=>{const t=e.split(" "),n=t.length,r=t[n-1],a=Number.parseInt(r);return n>=2&&"Copy"===r?e+" 2":n>=3&&"Copy"===t[n-2]&&!Number.isNaN(a)?(t[n-1]=`${a+1}`,t.join(" ")):e+" Copy"},oe=(e,t="")=>{const n=new Set(e);let r=t;for(;n.has(r);)r=ae(r);return r},ie=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>(async({environmentId:e,workspaceId:t})=>await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}/duplicate`,query:{workspace:t},data:{}}))(e),onMutate:async({workspaceId:t,environmentId:n})=>{const r=[m,t];await e.cancelQueries({queryKey:r});const a=e.getQueryData(r);if(!a)return;const{name:o}=a.find((({id:e})=>e===n));(0,u.updateCache)({key:r,updater:e=>e?[...e,{id:window.USER_ID+"-"+n,name:oe([o],o),isLoading:!0}]:e})},onSettled:(e,t,{workspaceId:n})=>{(0,u.invalidateCache)([m,n])}})},se=(e="")=>{(0,c.useEffect)((()=>{if(e)return C.subscribe({environmentId:e,subscriptionHandler:D}),()=>{C.unsubscribe()}}),[e])},le=(e,t=new Set)=>n=>{var r;const a=e.findIndex(((e,r)=>e.key===n.key&&e.enabled===n.enabled&&!t.has(r)));let o;return-1===a?o={value:n.value}:(t.add(a),o=e[a]),{key:n.key,value:n.value,sessionValue:o.value,isSessionValueDeleted:null==(r=o)?void 0:r.deleted,enabled:n.enabled,type:n.type}},ce=(e,t)=>e.map(le(t)),de=e=>e.reduce((({initialValues:e,sessionValues:t},n)=>{const{key:r,value:a,sessionValue:o,enabled:i,type:s,isSessionValueDeleted:l}=n;return t.push({key:r,value:o,enabled:i,type:s,deleted:!!l||void 0}),e.push({key:r,value:a,enabled:i,type:s}),{initialValues:e,sessionValues:t}}),{initialValues:[],sessionValues:[]}),ue="secret",ve={queryKey:["empty-collection"],queryFn:()=>Promise.reject(),enabled:!1},pe=(e,t,n=le(t))=>t=>t.map((t=>(0,k.Z)({},n(t),{scope:e}))),me=()=>{var e;const t=(0,v.useActiveWorkspaceId)(),{collectionFetchOptions:n}=null!=(e=(0,c.useContext)(G))?e:{collectionFetchOptions:ve},{data:r}=(0,u.useDataFetch)(Nt(t)),{data:a}=(0,u.useDataFetch)(Xt()),{data:o}=(0,u.useDataFetch)(n),{data:i}=Z(),{data:s}=(0,u.useDataFetch)(Rt(null==i?void 0:i.id)),l=(0,I.useSessionSafe)({model:"environment",modelId:null==s?void 0:s.id}),d=(0,I.useSessionSafe)({model:"globals",modelId:null==r?void 0:r.id}),p=(0,I.useSessionSafe)({model:"collection",modelId:null==o?void 0:o.id});return(0,c.useMemo)((()=>{var e,t,n,i,c,u,v,m,b,y;return{data:[...(y=a,y||[]),...pe("globals",null!=(e=null==(t=d.value)?void 0:t.values)?e:[])(null!=(n=null==r?void 0:r.values)?n:[]),...pe("collection",null!=(i=null==(c=p.value)?void 0:c.values)?i:[])(null!=(u=null==o?void 0:o.variables)?u:[]),...pe("environment",null!=(v=null==(m=l.value)?void 0:m.values)?v:[])(null!=(b=null==s?void 0:s.values)?b:[])].map(((e,t)=>(0,k.Z)({},e,{id:`${e.scope}::${t}`})))}}),[o,p.value,s,l.value,r,d.value,a])},be=e=>{const t=e.filter((e=>"dynamic"===e.type));return[...e.filter((e=>"dynamic"!==e.type)),...t]},ye=e=>{const t=e.filter((e=>{return"boolean"!=typeof(t=e).enabled||t.enabled;var t})),n=(e=>{const t=new Map(e.map((e=>[e.key,e])));return e=>{const n=t.get(e.key);return n&&n.id!==e.id?(0,k.Z)({},e,{overriddenBy:{id:n.id,scope:n.scope}}):e}})(t),r=t.map((e=>n(e)));return{data:be(r)}},he=()=>{const{data:e}=me();return(0,c.useMemo)((()=>{if(!e)return{};const t=e.filter((e=>"dynamic"!==e.type));return ye(t)}),[e])},Ee=()=>{const{data:e}=me();return(0,c.useMemo)((()=>e?ye(e):{}),[e])},we=async({environmentId:e,name:t})=>await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,data:{name:t}}),ge=(e,t,n)=>{(0,u.updateCache)({key:e,updater:e=>e?e.map((e=>e.id===t?(0,k.Z)({},e,{name:n}):e)):e})},fe=()=>{const e=(0,u.useCacheClient)();return(0,u.useMutation)({mutationFn:e=>we(e),onMutate:async({workspaceId:t,environmentId:n,name:r})=>{const a=[m,t],o=e.getQueryData(a);if(!o)return;const i=o.find((({id:e})=>e===n));return ge(a,n,r),()=>{i&&ge(a,n,i.name)}},onSuccess:(e,{workspaceId:t,environmentId:n})=>{ge([m,t],n,e.data.name)},onError:(e,t,n)=>{n&&n()}})};var Ce=n(60607);const ke=()=>{const{pathname:e}=(0,K.useLocation)(),{environmentId:t}=(0,Ce.useParams)();return t||(null!=e&&e.endsWith("/globals")?"globals":void 0)},Ie=()=>(0,u.useMutation)({mutationFn:({signal:e,environmentId:t,roles:n})=>(async({signal:e,environmentId:t,roles:n})=>await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${t}/roles`,data:{roles:n},signal:e}))({signal:e,environmentId:t,roles:n}),onSuccess:(e,t)=>{t.onSuccess&&t.onSuccess(e)}});var Se=n(59530),_e=n.n(Se),Ae=n(20856),xe=n(1314),Te=n.n(xe),Re=n(56415),Ne=n(80605);const Le=_e().div.withConfig({displayName:"SplitButton__StyledSplitButton",componentId:"sc-1uqtf3s-0"})(["width:max-content;box-sizing:border-box;cursor:pointer;user-select:none;display:inline-flex;align-items:center;border-radius:",";height:",";",";& .aether-split-button__primary-btn:disabled{border-top-right-radius:0;border-bottom-right-radius:0;}& .aether-split-button__secondary-btn:disabled{border-top-left-radius:0;border-bottom-left-radius:0;}&:hover{& .aether-split-button__splitter{border-left-color:transparent;}}&:active{& .aether-split-button__splitter{border-left-color:transparent;}}"],(e=>e.theme["border-radius-default"]),(e=>e.theme["size-m"]),(e=>function(e,t){switch(e){case"primary":return`\n        background-color: ${t["button-primary-background-color"]};\n\n        & .aether-split-button__splitter {\n          border-left-color: ${t["splitbutton-primary-splitter-color"]};\n        }\n      `;case"secondary":return`\n        background-color: ${t["button-secondary-background-color"]};\n\n        & .aether-split-button__splitter {\n          border-left-color: ${t["splitbutton-secondary-splitter-color"]};\n        }\n      `;case"tertiary":return`\n        background-color: ${t["button-tertiary-background-color"]};\n\n        & .aether-split-button__splitter {\n          border-left-color: ${t["splitbutton-tertiary-splitter-color"]};\n        }\n      `;default:return null}}(e.type,e.theme))),Oe=_e().div.withConfig({displayName:"SplitButton__StyledButtonSplitter",componentId:"sc-1uqtf3s-1"})(["border-width:",";border-left-style:",";height:20px;"],(e=>`${e.theme["border-width-default"]}`),(e=>`${e.theme["border-style-solid"]}`));function Pe(e){const t=(0,c.useRef)(),{text:n,onClick:r,children:a,type:o,icon:i,tooltip:s,minWidth:l,className:u,isLoading:v,isDisabled:p,secondaryButton:m,autoFocus:b,"data-testid":y,"data-click":h}=e,E=d().Children.map(a,(e=>d().isValidElement(e)&&e.type===Ae.ZP?d().cloneElement(e,{placement:"bottom-end",...!m&&{triggerRef:t}}):e));return d().createElement(Le,{type:o,className:u,"data-aether-id":"aether-splitButton","data-testid":y,"data-click":h},d().createElement(Ne.Z,{type:o,text:n,icon:i,isLoading:v,isDisabled:p,minWidth:l,onClick:r,tooltip:s,className:"aether-split-button__primary-btn",autoFocus:b}),!p&&!v&&d().createElement(Oe,{className:"aether-split-button__splitter"}),function(e,t,n){if(e&&e.type===Ne.Z){const{icon:n}=e.props;return d().cloneElement(e,{type:t,icon:n||d().createElement(Re.Z,null),className:"aether-split-button__secondary-btn"})}return d().createElement(Ne.Z,{type:t,icon:d().createElement(Re.Z,null),ref:n,className:"aether-split-button__secondary-btn"})}(m,o,t),E)}Pe.displayName="SplitButton";const De=Pe;Pe.defaultProps={text:"",type:"secondary",icon:null,tooltip:"",minWidth:"",className:"",isLoading:!1,isDisabled:!1,secondaryButton:null,autoFocus:!1,"data-testid":"aether-split-button","data-click":""},Pe.propTypes={text:Te().string,onClick:Te().func.isRequired,children:Te().node.isRequired,type:Te().oneOf(["primary","secondary","tertiary"]),icon:Te().node,tooltip:Te().oneOfType([Te().string,Te().object]),minWidth:Te().string,className:Te().string,isLoading:Te().bool,isDisabled:Te().bool,secondaryButton:Te().node,autoFocus:Te().bool,"data-testid":Te().string,"data-click":Te().string};var Ve=n(207),Fe=d().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d().createElement("g",{clipPath:"url(#clip0_3652_80)"},d().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 2L2 2.00004V14H6V15H2C1.44772 15 1 14.5523 1 14V2.00004C1 1.44776 1.44771 1.00004 2 1.00004L14 1C14.5523 0.999998 15 1.44771 15 2V9H14V2ZM11 16C7.875 16 6 12.5 6 12.5C6 12.5 7.5625 9 11 9C14.4375 9 16 12.5 16 12.5C16 12.5 14.125 16 11 16ZM7.94047 11.4339C7.59128 11.8064 7.33019 12.182 7.15622 12.4663L7.16698 12.482C7.36759 12.7751 7.66306 13.1639 8.04157 13.5493C8.81714 14.339 9.82494 15 11 15C12.1751 15 13.1829 14.339 13.9584 13.5493C14.3369 13.1639 14.6324 12.7751 14.833 12.482L14.8438 12.4663C14.6698 12.182 14.4087 11.8064 14.0595 11.4339C13.3515 10.6787 12.3472 10 11 10C9.65281 10 8.64852 10.6787 7.94047 11.4339ZM12.5 12.5C12.5 13.3284 11.8284 14 11 14C10.1716 14 9.5 13.3284 9.5 12.5C9.5 11.6716 10.1716 11 11 11C11.8284 11 12.5 11.6716 12.5 12.5ZM3 4H6V3H3V4ZM6 7H3V6H6V7ZM3 10H6V9H3V10ZM13 4H8V3H13V4ZM8 7H13V6H8V7Z",fill:"#6B6B6B"})),d().createElement("defs",null,d().createElement("clipPath",{id:"clip0_3652_80"},d().createElement("rect",{width:"16",height:"16",fill:"white"})))),$e=d().forwardRef((function(e,t){return d().createElement(Ve.Z,(0,k.Z)({},e,{svg:Fe,ref:t}))}));$e.getName=function(){return"icon-action-viewEnvironment-stroke"};const Be=$e;let Ue,Me,je=e=>e;const Ze=_e()(Be)(Ue||(Ue=je`
  padding: 0 var(--spacing-xs);
`)),He=_e()(De)(Me||(Me=je`
  flex: 1;
  min-width: 0;

  button:first-child > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    .aether-split-button__splitter {
      border-left-color: var(--vscode-button-separator);
    }
  }
`)),Ge=({value:e,isLoading:t,onClick:n,isSecondaryButtonDisabled:r,onSecondaryButtonClick:a,ref:o})=>{const{label:i,forkLabel:s}=e,l=s?`${i} [${s}]`:i;return(0,H.jsx)(He,{ref:o,type:"secondary",minWidth:"0px",tooltip:l,text:l,secondaryButton:(0,H.jsx)(Ne.Z,{type:"secondary",icon:(0,H.jsx)(Ze,{}),onClick:a,"data-testid":"quick-look-button",isDisabled:r}),isLoading:t,onClick:n})};let qe;const We=_e().div(qe||(qe=(e=>e)`
  display: flex;
  padding: var(--spacing-l);
  background-color: var(--highlight-background-color-secondary);
  border-radius: 0 0 var(--border-radius-default) var(--border-radius-default);
`)),Qe=({text:e,isLoading:t,isDisabled:n,onClick:r})=>(0,H.jsx)(We,{children:(0,H.jsx)(Ne.Z,{type:"text",text:e,onClick:r,isLoading:t,isDisabled:n})});var Ke=n(68206);let Ye;const ze=_e()(Ke.Z)(Ye||(Ye=(e=>e)`
  border-color: transparent;
  border-radius: var(--border-radius-default) var(--border-radius-default) 0 0;

  &:active,
  &:focus,
  &:hover,
  &:focus-within {
    box-shadow: none;
    border-color: transparent;
  }
`)),Xe=({value:e,onChange:t})=>{const n=d().useRef(null);return d().useEffect((()=>{n.current&&n.current.focus()}),[]),(0,H.jsx)(ze,{ref:n,type:"search",value:e,onChange:t,placeholder:"Search"})};var Je=n(81397),et=d().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 3C4.5 3.55228 4.05228 4 3.5 4C2.94772 4 2.5 3.55228 2.5 3C2.5 2.44772 2.94772 2 3.5 2C4.05228 2 4.5 2.44772 4.5 3ZM4 4.93699C4.86261 4.71497 5.5 3.93192 5.5 3C5.5 1.89543 4.60457 1 3.5 1C2.39543 1 1.5 1.89543 1.5 3C1.5 3.93192 2.13739 4.71497 3 4.93699V6.5C3 7.88071 4.11929 9 5.5 9H7.5V11.563C6.63739 11.785 6 12.5681 6 13.5C6 14.6046 6.89543 15.5 8 15.5C9.10457 15.5 10 14.6046 10 13.5C10 12.5681 9.36261 11.785 8.5 11.563V9H10.5C11.8807 9 13 7.88071 13 6.5V4.93699C13.8626 4.71497 14.5 3.93192 14.5 3C14.5 1.89543 13.6046 1 12.5 1C11.3954 1 10.5 1.89543 10.5 3C10.5 3.93192 11.1374 4.71497 12 4.93699V6.5C12 7.32843 11.3284 8 10.5 8H8.5H7.5H5.5C4.67157 8 4 7.32843 4 6.5V4.93699ZM12.5 4C13.0523 4 13.5 3.55228 13.5 3C13.5 2.44772 13.0523 2 12.5 2C11.9477 2 11.5 2.44772 11.5 3C11.5 3.55228 11.9477 4 12.5 4ZM8 14.5C8.55228 14.5 9 14.0523 9 13.5C9 12.9477 8.55228 12.5 8 12.5C7.44772 12.5 7 12.9477 7 13.5C7 14.0523 7.44772 14.5 8 14.5Z",fill:"#6B6B6B"})),tt=d().forwardRef((function(e,t){return d().createElement(Ve.Z,(0,k.Z)({},e,{svg:et,ref:t}))}));tt.getName=function(){return"icon-action-fork-stroke"};const nt=tt;let rt,at,ot,it=e=>e;const st=_e().div(rt||(rt=it`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`)),lt=_e().p(at||(at=it`
  flex: 2;
  margin: 0;
  margin-right: var(--spacing-s);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: fit-content;
`)),ct=_e().p(ot||(ot=it`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  margin-left: var(--spacing-xs);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  text-overflow: ellipsis;
  color: var(--content-color-tertiary);
  max-width: fit-content;
`)),dt=({label:e,forkLabel:t})=>e?(0,H.jsxs)(st,{children:[(0,H.jsx)(Je.Z,{content:e,openDelay:1e3,placement:"bottom",children:(0,H.jsx)(lt,{children:e})}),t&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(nt,{color:"content-color-tertiary",size:"small","data-testid":"fork-icon"}),(0,H.jsx)(Je.Z,{content:t,openDelay:1e3,placement:"bottom",children:(0,H.jsx)(ct,{children:t})})]})]}):null;let ut;const vt=_e().div(ut||(ut=(e=>e)`
  flex: 1;
  color: var(--content-color-primary);
  min-height: 28px;
  box-sizing: border-box;
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  user-select: none;

  ${0}

  &:hover {
    background-color: var(--highlight-background-color-secondary);
  }

  &:active {
    background-color: var(--highlight-background-color-tertiary);
  }
`),(({isSelected:e})=>e&&"background-color: var(--highlight-background-color-primary);")),pt=({isSelected:e,label:t,forkLabel:n,onSelect:r})=>(0,H.jsx)(vt,{isSelected:e,role:"menuitem",onClick:r,tabIndex:0,onKeyPress:e=>{if("Enter"===e.key||" "===e.key)return e.preventDefault(),e.stopPropagation(),r()},children:(0,H.jsx)(dt,{label:t,forkLabel:n})});let mt,bt,yt,ht,Et,wt=e=>e;const gt=_e().div(mt||(mt=wt`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  width: 90vw;
  max-width: 320px;
`)),ft=_e().div(bt||(bt=wt`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-s);
  overflow-y: auto;
  background: var(--background-color-primary);

  :empty::before {
    content: 'No items found';
    flex: 1;
    min-height: 28px;
    box-sizing: border-box;
    padding: var(--spacing-xs) var(--spacing-s);
    color: var(--content-color-tertiary);
  }
`)),Ct=_e().div(yt||(yt=wt`
  padding: var(--spacing-s) var(--spacing-l);
  color: var(--content-color-secondary);
  background-color: var(--highlight-background-color-secondary);
  font-weight: var(--text-weight-bold);
  user-select: none;
`)),kt=_e().div(ht||(ht=wt`
  text-align: center;
  padding: var(--spacing-m);
`)),It=_e().div(Et||(Et=wt`
  border-radius: var(--border-radius-default) var(--border-radius-default) 0 0;
  ${0};
`),(e=>e.isBleed?" ":"border-bottom: var(--border-width-default) var(--border-style-solid) var(--border-color-default);")),St=({options:e,onChange:t,value:n,isError:r,refetch:a,headerInfoText:o,isCreateNewLoading:i,isCreateNewDisabled:s,onCreateNew:l,createNewText:c="Create New"})=>{const[u,v]=d().useState(""),p=e.filter((({label:e})=>e.toLowerCase().includes(String(u).toLowerCase())));return(0,H.jsxs)(gt,{role:"menu",id:"selectormenu","aria-labelledby":"menubutton",children:[(0,H.jsx)(It,{isBleed:Boolean(o),children:(0,H.jsx)(Xe,{value:u,onChange:e=>v(e.target.value)})}),o&&(0,H.jsx)(Ct,{children:o}),r?(0,H.jsxs)(kt,{children:["Failed to load. ",(0,H.jsx)(Ne.Z,{type:"text",text:"Retry",onClick:a})]}):(0,H.jsx)(ft,{children:p.map((e=>(0,H.jsx)(pt,{value:e.value,label:e.label,forkLabel:e.forkLabel,onSelect:()=>(v(""),t(e)),isSelected:e.value===n.value},e.value)))}),l&&(0,H.jsx)(Qe,{text:c,onClick:l,isLoading:i,isDisabled:s})]})};let _t;const At=_e().div(_t||(_t=(e=>e)`
  display: flex;
  flex: 1;
  max-width: 260px;
`)),xt=({value:e,options:t,onChange:n,isLoading:r,isError:a,refetch:o,headerInfoText:i,isCreateNewLoading:s,isCreateNewDisabled:l,onCreateNew:c,isQuickLookDisabled:u,onQuickLookClick:v,menuPlacement:p,"aria-label":m})=>{const[b,y]=d().useState(!1),h=(0,H.jsx)(At,{children:(0,H.jsx)(Ge,{value:e,isLoading:r,onClick:()=>y((e=>!e)),isSecondaryButtonDisabled:u,onSecondaryButtonClick:()=>(b&&y(!1),v()),"aria-haspopup":"menu","aria-controls":"selectormenu","aria-expanded":b,"aria-label":m})});return(0,H.jsx)(Ae.ZP,{placement:p,trigger:h,isOpen:b,onClickOutside:()=>y(!1),padding:"0",appendTo:"parent",children:b&&(0,H.jsx)(St,{isCreateNewLoading:s,isCreateNewDisabled:l,onCreateNew:c,headerInfoText:i,options:t,isError:a,refetch:o,onChange:(...e)=>(y(!1),n(...e)),value:e})})},Tt=e=>({queryKey:[b,e],queryFn:({signal:t})=>(async(e,{signal:t}={})=>{var n,r;if(!e)throw new Error("Invalid environment id");const a=await p.postmanGateway.get({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${e}`,signal:t});null==a||a.data;const o=A(a.data);return await(0,I.updateDependentSession)({model:"environment",modelId:o.id},o),(0,k.Z)({},o,{forkedFrom:null!=(n=null==(r=a.meta)?void 0:r.forkedFrom)?n:null})})(e,{signal:t}),useErrorBoundary:!1}),Rt=e=>(0,k.Z)({},Tt(null!=e?e:""),{enabled:!!e}),Nt=e=>({queryKey:[h,e],queryFn:({signal:t})=>(async(e,{signal:t}={})=>{var n;const r=await p.postmanGateway.get({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/workspace/${e}/globals`,signal:t});if(!Array.isArray(null==r||null==(n=r.data)?void 0:n.values))throw new TypeError("Received invalid globals data from server");const a=r.data;return await(0,I.updateDependentSession)({model:"globals",modelId:a.id},a),a})(e,{signal:t}),useErrorBoundary:!1}),Lt=async({signal:e,permissionsPayload:t})=>{const n=await p.postmanGateway.post({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/permissions/check",service:"acs",data:{body:{checks:(0,k.Z)({},t)}},signal:e});if(null==n||!n.results)throw new Error("Received invalid permissions");return n.results},Ot="workspace",Pt="ADD_ENVIRONMENT_TO_WORKSPACE",Dt="UPDATE_GLOBALS",Vt=(e,t)=>{const n={};for(const[r,a]of Object.entries(t))n[a]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:Ot,permission:r};return n},Ft=e=>({queryKey:[y,E,e],queryFn:async({signal:t})=>{if(!window.USER_ID)return{userCanCreateEnvironment:!0,userCanUpdateGlobals:!0};const n={[Pt]:`${Ot}/${e}/${Pt}`,[Dt]:`${Ot}/${e}/${Dt}`},r=await Lt({signal:t,permissionsPayload:Vt(e,n)});return{userCanCreateEnvironment:r[n[Pt]].allowed,userCanUpdateGlobals:r[n[Dt]].allowed}},useErrorBoundary:!1}),$t="workspace",Bt="ADD_ENVIRONMENT_TO_WORKSPACE",Ut="UPDATE_ENVIRONMENT",Mt="DELETE_ENVIRONMENT",jt=e=>e.includes($t),Zt=(e,t)=>({queryKey:[w,e],queryFn:async({signal:n})=>{if(!window.USER_ID)return{userCanCreate:!0,userCanUpdate:!0,userCanDelete:!0};const r={[Bt]:`${$t}/${t}/${Bt}`,[Ut]:`${e}:${Ut}`,[Mt]:`${e}:${Mt}`},a=((e,t,n)=>{const r={};for(const[a,o]of Object.entries(n))r[o]={entityId:window.USER_ID,entityType:"user",permission:a,objectId:jt(o)?t:e,objectType:jt(o)?$t:"environment"};return r})(e,t,r),o=await Lt({signal:n,permissionsPayload:a});return{userCanCreate:o[r[Bt]].allowed,userCanUpdate:o[r[Ut]].allowed,userCanDelete:o[r[Mt]].allowed}},useErrorBoundary:!1}),Ht="workspace",Gt="UPDATE_GLOBALS",qt=(e,t)=>{const n={};for(const[r,a]of Object.entries(t))n[a]={entityId:window.USER_ID,entityType:"user",objectId:e,objectType:Ht,permission:r};return n},Wt=e=>({queryKey:[g,e],queryFn:async({signal:t})=>{if(!window.USER_ID)return{userCanUpdate:!0};const n={[Gt]:`${Ht}/${e}/${Gt}`};return{userCanUpdate:(await Lt({signal:t,permissionsPayload:qt(e,n)}))[n[Gt]].allowed}},useErrorBoundary:!1}),Qt="workspace",Kt="ADD_ENVIRONMENT_TO_WORKSPACE",Yt=e=>({queryKey:[f,e],queryFn:async({signal:t})=>{if(!window.USER_ID)return{userCanCreate:!0};const n={[Kt]:`${Qt}/${e}/${Kt}`},r=((e,t)=>{const n={};for(const[r,a]of Object.entries(t))n[a]={entityId:window.USER_ID,entityType:"user",permission:r,objectId:e,objectType:Qt};return n})(e,n);return{userCanCreate:(await Lt({signal:t,permissionsPayload:r}))[n[Kt]].allowed}},useErrorBoundary:!1});var zt=n(21466);const Xt=()=>({queryKey:["dynamic"],queryFn:()=>(async()=>await zt.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_DYNAMIC_VARIABLES",payload:{}}))()}),Jt={userCanCreate:!0},en=e=>Boolean(e.isLoading);var tn=n(80809);const nn="environment-selector-value-paint-mark",{PerfContext:rn,PerformanceMarkPaint:an}=tn.perfComponents,on=()=>{performance.measure("environment-selector-value-paint-time",{},nn),(0,tn.sendMeasureEvent)({name:nn,entityType:"generic-selector"})},sn=Object.freeze({label:"No Environment",value:"",forkLabel:""}),ln=()=>{var e;const t=(0,K.useNavigate)(),n=(0,v.useActiveWorkspaceId)(),r=(0,c.useContext)(G),a=r&&!r.useActiveEnvironmentFromContext;ne(n);const{data:o,isError:i,refetch:s}=j({workspaceId:n}),l=!o,{data:d}=Z(),p=re(),m=(0,c.useMemo)((()=>{var e;return[sn,...null!=(e=null==o?void 0:o.map((e=>{var t;const n=en(e)?null:null==(t=e.attributes)||null==(t=t.fork)?void 0:t.forkLabel;return{label:e.name,value:e.id,forkLabel:null!=n?n:""}})))?e:[]]}),[o]),b=J(),{isLoading:y,userCanCreate:h}=(()=>{const e=(0,v.useActiveWorkspaceId)(),{data:t,error:n}=(0,u.useDataFetch)(Yt(e));return n?(0,k.Z)({isLoading:!1},Jt):t?(0,k.Z)({isLoading:!1},t):(0,k.Z)({isLoading:!0},Jt)})(),E=(e,r)=>{const a={rename:(null==r?void 0:r.showRenameOptionOnOpen)||!1};t(`/workspace/${n}/environment/${e}`,{state:JSON.stringify({additionalContext:a})},{customNavEvent:K.OPEN_EXTENSION_URL})},w=null!=(e=m.find((e=>e.value===(null==d?void 0:d.id))))?e:sn,g=l&&!i,{markName:f,callback:C}=(0,c.useContext)(rn);return(0,H.jsx)("div",{"data-testid":"active-environment-selector",children:(0,H.jsx)(an,{condition:!g,markName:f||nn,callback:C||on,children:(0,H.jsx)(xt,{options:m,value:w,isLoading:g,isError:i,refetch:s,onChange:e=>{p.mutate(null!=e&&e.value?{id:e.value}:null)},menuPlacement:"bottom-end","aria-label":"active-environment",isQuickLookDisabled:!d||l,onQuickLookClick:()=>{d&&E(d.id)},headerInfoText:a?"Switch environment for the entire collection":void 0,isCreateNewLoading:b.isLoading||y,isCreateNewDisabled:!h,onCreateNew:()=>{b.mutate({workspaceId:n,requestBody:{id:(0,Q.v4)(),name:"New Environment",values:[]}},{onSuccess:({data:e})=>{Y.AnalyticsService.addEventV2({category:"environment",action:"create",label:"environment-selector"}),E(`${e.owner}-${e.id}`,{showRenameOptionOnOpen:!0})}})}})})})},cn=e=>z()?(0,H.jsx)(ln,(0,k.Z)({},e)):null,dn=e=>null==e?void 0:e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),un=async(e,t)=>{if(!e.id)throw new Error("updateEnvironment: id is required");const n=(e=>{const{values:t}=e;return(0,k.Z)({},e,{values:dn(t)})})(e),r=(a=(await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/environment/${n.id}`,body:JSON.stringify({name:n.name,values:n.values})})).data,(0,k.Z)({},a,{id:`${a.owner}-${a.id}`}));var a;return null!=t&&t.avoidSession||await(0,I.updateDependentSession)({model:"environment",modelId:r.id},r),r},vn=()=>({mutationFn:un,onSuccess:e=>{u.cacheClient.setQueryData(["environment",e.id],e)}}),pn=()=>({mutationFn:async(e,t,n=!1)=>{const r=e.id;if(n)return await(0,I.setSession)({model:"environment",modelId:r},t),null;const[a]=await Promise.all([un(e,{avoidSession:!0}),(0,I.setSession)({model:"environment",modelId:r},t)]);return{environment:a}},onSuccess:e=>{if(e){const{environment:t}=e;(0,u.updateCache)({key:[b,t.id],updater:e=>e?(0,k.Z)({},e,t):e})}}}),mn=e=>e.map((e=>({key:e.key,value:e.value,enabled:e.enabled,type:e.type}))),bn=e=>{const{values:t,workspace:n}=e;return{workspace:n,values:mn(t)}},yn=async(e,t)=>{const n=e.workspace,r=(await p.postmanGateway.put({url:`${_().HTTPS_GATEWAY_PRIVATE_URL}/workspace/${n}/globals`,body:JSON.stringify(bn(e))})).data;return null!=t&&t.avoidSession||await(0,I.updateDependentSession)({model:"globals",modelId:r.id},r),r},hn=()=>({mutationFn:yn,onSuccess:e=>{u.cacheClient.setQueryData([h,e.workspace],e)}}),En=()=>({mutationFn:async(e,t,n=!1)=>{if(n)return await(0,I.setSession)({model:"globals",modelId:e.id},t),null;const[r]=await Promise.all([yn(e,{avoidSession:!0}),(0,I.setSession)({model:"globals",modelId:e.id},t)]);return{globals:(0,k.Z)({},r,{workspace:e.workspace})}},onSuccess:e=>{if(e){const{globals:t}=e;(0,u.updateCache)({key:["globals",t.workspace],updater:t})}}}),wn=(e,t)=>{(0,u.updateCache)({key:e,updater:e=>e?(0,k.Z)({},e,{name:t}):e})},gn=()=>({mutationFn:e=>we(e),onMutate:async({environmentId:e,name:t})=>{const n=[b,e],r=u.cacheClient.getQueryData(n);return wn(n,t),()=>{r&&wn(n,r.name)}},onSuccess:(e,{environmentId:t})=>{wn([b,t],e.data.name)},onError:(e,t,n)=>{n&&n()}});async function fn(e,t,n){zt.VSCodeCommunicationsService.postMessageToExtension({type:"RESOLVE_VARIABLES",payload:{objectToResolve:e,variables:t,id:n}})}const Cn=async(...e)=>{const t=await un(...e);return(0,u.updateCache)({key:[b,t.id],updater:()=>t}),t},kn=async(...e)=>{const t=await yn(...e);return(0,u.updateCache)({key:[h,t.workspace],updater:()=>t}),t},In=(0,I.createVariableUpdatesHandler)({model:"environment",hasEditPermission:async(e,{workspaceId:t})=>{var n;const r=await u.cacheClient.fetchQuery(Zt(e,t)).catch((()=>null));return null==(n=null==r?void 0:r.userCanUpdate)||n},getValues:async e=>await u.cacheClient.fetchQuery(Tt(e)).catch((()=>null)),setValues:(e,t)=>Cn({id:e,values:t})}),Sn=(0,I.createVariableUpdatesHandler)({model:"globals",hasEditPermission:async(e,{workspaceId:t})=>{var n;const r=await u.cacheClient.fetchQuery(Wt(t)).catch((()=>null));return null==(n=null==r?void 0:r.userCanUpdate)||n},getValues:async(e,{workspaceId:t})=>await u.cacheClient.fetchQuery(Nt(t)).catch((()=>null)),setValues:(e,t,{workspaceId:n})=>kn({id:e,values:t,workspace:n})}),_n=async e=>{if(!e)return;const t=await u.cacheClient.fetchQuery(Tt(e));return(0,I.getActiveSession)({model:"environment",modelId:t.id},t)},An=async e=>{const t=await u.cacheClient.fetchQuery(Nt(e));return(0,I.getActiveSession)({model:"globals",modelId:t.id},t)};var xn=function(e){return e.GLOBALS="globals",e.WORKSPACE="workspace",e}(xn||{});const Tn=(e,{workspaceId:t})=>{var n,r;const a=null==e||null==(n=e.meta)?void 0:n.model,o=null==e||null==(r=e.meta)?void 0:r.action;if(a===xn.GLOBALS&&o===N.UPDATE){const n=null==e?void 0:e.data;T(t,n)}a===xn.WORKSPACE&&o===P.UPDATE_ROLES&&(u.cacheClient.invalidateQueries({queryKey:[w]}),(0,u.invalidateCache)([g,t]))}},56415:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7560),a=n(40540),o=n.n(a),i=n(207),s=o().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.00004 9.29294L4.35359 5.64649L3.64648 6.3536L8.00004 10.7072L12.3536 6.3536L11.6465 5.64649L8.00004 9.29294Z",fill:"#6B6B6B"})),l=o().forwardRef((function(e,t){return o().createElement(i.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));l.getName=function(){return"icon-direction-down"};const c=l}}]);
//# sourceMappingURL=9983.d027cd8da38c3ece.js.map