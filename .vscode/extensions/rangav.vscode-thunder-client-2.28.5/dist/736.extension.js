"use strict";exports.id=736,exports.ids=[736],exports.modules={1131:(e,t,s)=>{s.d(t,{GetRoleCredentialsCommand:()=>q,SSOClient:()=>je});var n=s(44),o=s(49),r=s(54);const i={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};class a extends r.TJ{constructor(e){super(e),Object.setPrototypeOf(this,a.prototype)}}class c extends a{constructor(e){super({name:"InvalidRequestException",$fault:"client",...e}),this.name="InvalidRequestException",this.$fault="client",Object.setPrototypeOf(this,c.prototype)}}class u extends a{constructor(e){super({name:"ResourceNotFoundException",$fault:"client",...e}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,u.prototype)}}class d extends a{constructor(e){super({name:"TooManyRequestsException",$fault:"client",...e}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,d.prototype)}}class p extends a{constructor(e){super({name:"UnauthorizedException",$fault:"client",...e}),this.name="UnauthorizedException",this.$fault="client",Object.setPrototypeOf(this,p.prototype)}}const l=e=>({...e,...e.accessToken&&{accessToken:r.$H}}),h=e=>({...e,...e.secretAccessKey&&{secretAccessKey:r.$H},...e.sessionToken&&{sessionToken:r.$H}}),m=e=>({...e,...e.roleCredentials&&{roleCredentials:h(e.roleCredentials)}});var y=s(79),g=s(42);const S=async(e,t)=>{const s=(0,g.lI)(e,t),n=(0,r.Tj)({},r.eU,{[F]:e[k]});s.bp("/federation/credentials");const o=(0,r.Tj)({[D]:[,(0,r.Y0)(e[C],"roleName")],[A]:[,(0,r.Y0)(e[b],"accountId")]});return s.m("GET").h(n).q(o).b(undefined),s.build()},f=async(e,t)=>{if(200!==e.statusCode&&e.statusCode>=300)return w(e,t);const s=(0,r.Tj)({$metadata:I(e)}),n=(0,r.Y0)((0,r.Xk)(await(0,y.Y2)(e.body,t)),"body"),o=(0,r.s)(n,{roleCredentials:r.Ss});return Object.assign(s,o),s},w=async(e,t)=>{const s={...e,body:await(0,y.CG)(e.body,t)},n=(0,y.cJ)(e,s.body);switch(n){case"InvalidRequestException":case"com.amazonaws.sso#InvalidRequestException":throw await x(s,t);case"ResourceNotFoundException":case"com.amazonaws.sso#ResourceNotFoundException":throw await P(s,t);case"TooManyRequestsException":case"com.amazonaws.sso#TooManyRequestsException":throw await E(s,t);case"UnauthorizedException":case"com.amazonaws.sso#UnauthorizedException":throw await R(s,t);default:const o=s.body;return v({output:e,parsedBody:o,errorCode:n})}},v=(0,r.jr)(a),x=async(e,t)=>{const s=(0,r.Tj)({}),n=e.body,o=(0,r.s)(n,{message:r.lK});Object.assign(s,o);const i=new c({$metadata:I(e),...s});return(0,r.Mw)(i,e.body)},P=async(e,t)=>{const s=(0,r.Tj)({}),n=e.body,o=(0,r.s)(n,{message:r.lK});Object.assign(s,o);const i=new u({$metadata:I(e),...s});return(0,r.Mw)(i,e.body)},E=async(e,t)=>{const s=(0,r.Tj)({}),n=e.body,o=(0,r.s)(n,{message:r.lK});Object.assign(s,o);const i=new d({$metadata:I(e),...s});return(0,r.Mw)(i,e.body)},R=async(e,t)=>{const s=(0,r.Tj)({}),n=e.body,o=(0,r.s)(n,{message:r.lK});Object.assign(s,o);const i=new p({$metadata:I(e),...s});return(0,r.Mw)(i,e.body)},I=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),b="accountId",k="accessToken",A="account_id",C="roleName",D="role_name",F="x-amz-sso_bearer_token";class q extends(r.uB.classBuilder().ep(i).m((function(e,t,s,r){return[(0,o.TM)(s,this.serialize,this.deserialize),(0,n.rD)(s,e.getEndpointParameterInstructions())]})).s("SWBPortalService","GetRoleCredentials",{}).n("SSOClient","GetRoleCredentialsCommand").f(l,m).ser(S).de(f).build()){}var O=s(36),U=s(39),z=s(40),j=s(41),$=s(66),T=s(67),M=s(50),N=s(68),G=s(43);const H=async(e,t,s)=>({operation:(0,G.u)(t).operation,region:await(0,G.t)(e.region)()||(()=>{throw new Error("expected `region` to be configured for `aws.auth#sigv4`")})()});const L=e=>{const t=[];switch(e.operation){case"GetRoleCredentials":case"ListAccountRoles":case"ListAccounts":case"Logout":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push(function(e){return{schemeId:"aws.auth#sigv4",signingProperties:{name:"awsssoportal",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})}}(e))}return t},_="3.670.0";var B=s(77),V=s(72),K=s(73),W=s(45),J=s(60),Q=s(74),X=s(51),Y=s(75),Z=s(48),ee=s(56),te=s(59),se=s(64),ne=s(65);const oe="required",re="fn",ie="argv",ae="ref",ce=!0,ue="isSet",de="booleanEquals",pe="error",le="endpoint",he="tree",me="PartitionResult",ye="getAttr",ge={[oe]:!1,type:"String"},Se={[oe]:!0,default:!1,type:"Boolean"},fe={[ae]:"Endpoint"},we={[re]:de,[ie]:[{[ae]:"UseFIPS"},!0]},ve={[re]:de,[ie]:[{[ae]:"UseDualStack"},!0]},xe={},Pe={[re]:ye,[ie]:[{[ae]:me},"supportsFIPS"]},Ee={[ae]:me},Re={[re]:de,[ie]:[!0,{[re]:ye,[ie]:[Ee,"supportsDualStack"]}]},Ie=[we],be=[ve],ke=[{[ae]:"Region"}],Ae={version:"1.0",parameters:{Region:ge,UseDualStack:Se,UseFIPS:Se,Endpoint:ge},rules:[{conditions:[{[re]:ue,[ie]:[fe]}],rules:[{conditions:Ie,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:pe},{conditions:be,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:pe},{endpoint:{url:fe,properties:xe,headers:xe},type:le}],type:he},{conditions:[{[re]:ue,[ie]:ke}],rules:[{conditions:[{[re]:"aws.partition",[ie]:ke,assign:me}],rules:[{conditions:[we,ve],rules:[{conditions:[{[re]:de,[ie]:[ce,Pe]},Re],rules:[{endpoint:{url:"https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:xe,headers:xe},type:le}],type:he},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:pe}],type:he},{conditions:Ie,rules:[{conditions:[{[re]:de,[ie]:[Pe,ce]}],rules:[{conditions:[{[re]:"stringEquals",[ie]:[{[re]:ye,[ie]:[Ee,"name"]},"aws-us-gov"]}],endpoint:{url:"https://portal.sso.{Region}.amazonaws.com",properties:xe,headers:xe},type:le},{endpoint:{url:"https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",properties:xe,headers:xe},type:le}],type:he},{error:"FIPS is enabled but this partition does not support FIPS",type:pe}],type:he},{conditions:be,rules:[{conditions:[Re],rules:[{endpoint:{url:"https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:xe,headers:xe},type:le}],type:he},{error:"DualStack is enabled but this partition does not support DualStack",type:pe}],type:he},{endpoint:{url:"https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",properties:xe,headers:xe},type:le}],type:he}],type:he},{error:"Invalid Configuration: Missing Region",type:pe}]},Ce=new ne.kS({size:50,params:["Endpoint","Region","UseDualStack","UseFIPS"]}),De=(e,t={})=>Ce.get(e,(()=>(0,ne.sO)(Ae,{endpointParams:e,logger:t.logger})));ne.mw.aws=se.UF;var Fe=s(76);const qe=e=>{(0,r.I9)(process.version);const t=(0,Fe.I)(e),s=()=>t().then(r.lT),n=(e=>({apiVersion:"2019-06-10",base64Decoder:e?.base64Decoder??ee.E,base64Encoder:e?.base64Encoder??ee.n,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??De,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??L,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new Y.f2},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new g.mR}],logger:e?.logger??new r.N4,serviceId:e?.serviceId??"SSO",urlParser:e?.urlParser??Z.D,utf8Decoder:e?.utf8Decoder??te.ar,utf8Encoder:e?.utf8Encoder??te.Pq}))(e);return(0,B.I)(process.version),{...n,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??Q.n,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,V.pf)({serviceId:n.serviceId,clientVersion:_}),maxAttempts:e?.maxAttempts??(0,W.Z)(M.qs),region:e?.region??(0,W.Z)($.GG,$.zH),requestHandler:J.$c.create(e?.requestHandler??s),retryMode:e?.retryMode??(0,W.Z)({...M.kN,default:async()=>(await s()).retryMode||X.L0}),sha256:e?.sha256??K.V.bind(null,"sha256"),streamCollector:e?.streamCollector??J.kv,useDualstackEndpoint:e?.useDualstackEndpoint??(0,W.Z)($.e$),useFipsEndpoint:e?.useFipsEndpoint??(0,W.Z)($.Ko),userAgentAppId:e?.userAgentAppId??(0,W.Z)(V.hV)}};var Oe=s(78),Ue=s(37);const ze=e=>{const t=e.httpAuthSchemes;let s=e.httpAuthSchemeProvider,n=e.credentials;return{setHttpAuthScheme(e){const s=t.findIndex((t=>t.schemeId===e.schemeId));-1===s?t.push(e):t.splice(s,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){s=e},httpAuthSchemeProvider:()=>s,setCredentials(e){n=e},credentials:()=>n}};class je extends r.Kj{constructor(...[e]){const t=qe(e||{}),s=(o=t,{...o,useDualstackEndpoint:o.useDualstackEndpoint??!1,useFipsEndpoint:o.useFipsEndpoint??!1,defaultSigningName:"awsssoportal"});var o;const i=(0,j.Dc)(s),a=(0,M.$z)(i),c=(0,$.TD)(a),u=(0,O.OV)(c),d=(0,n.Co)(u);var p;const l=((e,t)=>{const s={...(0,Oe.Rq)(e),...(0,r.xA)(e),...(0,Ue.eS)(e),...ze(e)};return t.forEach((e=>e.configure(s))),{...e,...(0,Oe.$3)(s),...(0,r.uv)(s),...(0,Ue.jt)(s),...(n=s,{httpAuthSchemes:n.httpAuthSchemes(),httpAuthSchemeProvider:n.httpAuthSchemeProvider(),credentials:n.credentials()})};var n})((p=d,{...(0,N.h)(p)}),e?.extensions||[]);super(l),this.config=l,this.middlewareStack.use((0,j.sM)(this.config)),this.middlewareStack.use((0,M.ey)(this.config)),this.middlewareStack.use((0,T.vK)(this.config)),this.middlewareStack.use((0,O.TC)(this.config)),this.middlewareStack.use((0,U.Y7)(this.config)),this.middlewareStack.use((0,z.n4)(this.config)),this.middlewareStack.use((0,g.wB)(this.config,{httpAuthSchemeParametersProvider:H,identityProviderConfigProvider:async e=>new g.h$({"aws.auth#sigv4":e.credentials})})),this.middlewareStack.use((0,g.lW)(this.config))}destroy(){super.destroy()}}}};