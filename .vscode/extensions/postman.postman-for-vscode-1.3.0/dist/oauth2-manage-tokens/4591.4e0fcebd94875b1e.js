"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[4591],{84888:(e,t,s)=>{s.r(t),s.d(t,{ACCESS_CONTROL_QUERY_KEY_PREFIX:()=>l,ALL_ROLES:()=>i,DEFAULT_ROLES:()=>u,ENTITY_PERMISSIONS_QUERY_KEY:()=>p,entityPermissionsQuery:()=>d,getAllRolesForObjectType:()=>c,getDefaultRolesForObjectType:()=>g,getDefaultRolesMap:()=>f,getRolesData:()=>_,getRolesForObject:()=>y,getUserGroupsFromRoles:()=>v,segregateGroupRoles:()=>G,useEntityPermissions:()=>C,useFetchAssociatedRoles:()=>k,useFetchDefaultRolesForObjectType:()=>E,useFetchRolesForObject:()=>R,useFetchRolesForObjectType:()=>T,validateRolesAssignment:()=>n});var a=s(45860),r=s(26663),o=s.n(r);const n=async({signal:e,validationCriteria:t})=>await a.postmanGateway.post({url:`${o().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/validations/role-assignment",data:{body:{validations:t},service:"acs"},signal:e}),l="acs",i="all-roles",u="default-roles",p="entity-permissions",c=({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:r})=>({queryKey:[l,i,t],queryFn:()=>(async({signal:e,objectType:t,getGuestConfig:s=!1,partnerWorkspaceEnabled:r=!1})=>await a.postmanGateway.post({url:`${o().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,service:"acs",path:"/api/roles/list/by-objects",data:{body:{getGuestConfig:s,partnerWorkspaceEnabled:r,objects:[t]},query:{guest:s,include:"state",partner:r,permissions:!0,populate:!0,type:"all"}},signal:e}))({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:r}),enabled:!!t,useErrorBoundary:!1}),y=({signal:e,objectType:t,objectId:s,getGuestConfig:r,partnerWorkspaceEnabled:n})=>({queryKey:[l,i,t,s],queryFn:()=>(async({signal:e,objectType:t,objectId:s,getGuestConfig:r=!1,partnerWorkspaceEnabled:n=!1})=>await a.postmanGateway.post({url:`${o().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,service:"acs",path:"/api/roles/list-by-object",data:{body:{item:{getGuestConfig:r,objectId:s,objectType:t,partnerWorkspaceEnabled:n}},query:{guest:r,include:"state",partner:n,permissions:!0,populate:!0,type:"all"}},signal:e}))({signal:e,objectType:t,objectId:s,getGuestConfig:r,partnerWorkspaceEnabled:n}),enabled:!!s&&!!t,useErrorBoundary:!1}),g=({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:r})=>({queryKey:[l,u,t],queryFn:()=>(async({signal:e,objectType:t,getGuestConfig:s=!1,partnerWorkspaceEnabled:r=!1})=>await a.postmanGateway.get({url:`${o().HTTPS_GATEWAY_PRIVATE_URL}/roles/default`,query:{objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:r},signal:e}))({signal:e,objectType:t,getGuestConfig:s,partnerWorkspaceEnabled:r}),enabled:!!t,useErrorBoundary:!1}),d=({signal:e,entityId:t,permissions:s})=>({queryKey:[p,t],queryFn:()=>(async({permissions:e,signal:t})=>await a.postmanGateway.post({url:`${o().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/permissions/check",service:"acs",data:{body:e},signal:t}))({signal:e,permissions:s}),enabled:!!t,useErrorBoundary:!1});var b=s(97201);const T=(e,t,s)=>(0,b.useDataFetch)(c({objectType:e,getGuestConfig:t,partnerWorkspaceEnabled:s})),E=(e,t,s)=>(0,b.useDataFetch)(g({objectType:e,getGuestConfig:t,partnerWorkspaceEnabled:s})),R=(e,t,s,a)=>(0,b.useDataFetch)(y({objectType:e,objectId:t,getGuestConfig:s,partnerWorkspaceEnabled:a})),j=(e,t,s)=>Array.isArray(e)?0===e.length?s:e.reduce(((e,s,a,r)=>t(e,s,a,r)||e),s):"object"==typeof e?0===Object.keys(e).length?s:Object.keys(e).reduce(((s,a,r,o)=>t(s,e[a],a,o)||s),s):s;var m=s(7560);const f=(e,t)=>{const s={};for(const r of["user","team","guest","partner"]){var a;const o=null==t||null==(a=t.listing)||null==(a=a[r])||null==(a=a[e])?void 0:a.roles;o&&(s[r]=o[0])}return s},G=(e,t)=>{const s=new Set(t.map((e=>e.id.toString()))),a={},r={};for(const[t,o]of Object.entries(e))s.has(t)?a[t]=o:r[t]=o;return{userGroupRoles:a,otherGroupRoles:r}},v=(e,t)=>j(e,((e,s,a)=>{const r=t.find((e=>`${e.id}`==`${a}`));return r&&(e[a]=(0,m.Z)({},r,{canRemove:!0,value:r.name})),e}),{}),_=(e,t,s,a,r)=>{const o=[],n=(0,m.Z)({},s,a);null!=r&&r.id&&(n[r.id]=r);for(const[,s]of Object.entries(n))o.push({entityId:s.id,entityType:s.type,roles:{[s.name]:{objects:[{objectId:t,objectType:e}]}}});return o},k=()=>(e,t,s,a)=>{var r,o;const n=s.objects[e],l=[...s.roleOrder[e]].reverse()||[],i=t.listing,u=f(e,a),p=null==(r=s.wrapperData)||null==(r=r.guest)?void 0:r[e],c=null==(o=s.wrapperData)||null==(o=o.partner)?void 0:o[e];return{defaultRoles:u,rolesList:n,userCurrentRoles:j(null==i?void 0:i.user,((e,t,s)=>{var a;return e[s]={type:"user",id:s,name:null==t||null==(a=t.roles)?void 0:a[0]},e}),{}),teamCurrentRoles:j(null==i?void 0:i.team,((e,t,s)=>{var a;return e[s]={type:"team",id:s,name:null==t||null==(a=t.roles)?void 0:a[0]},e}),{}),groupCurrentRoles:j(null==i?void 0:i.group,((e,t,s)=>{var a;return e[s]={type:"group",id:s,name:null==t||null==(a=t.roles)?void 0:a[0]},e}),{}),rolesOrder:l,guestRoles:p,partnerRoles:c}},C=(e,t)=>(0,b.useDataFetch)(d({entityId:e,permissions:t}))}}]);
//# sourceMappingURL=4591.4e0fcebd94875b1e.js.map