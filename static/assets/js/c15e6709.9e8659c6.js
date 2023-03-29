"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[5588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(f,s(s({ref:t},o),{},{components:a})):r.createElement(f,s({ref:t},o))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8823:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={id:"10up_headless_next.middlewares",title:"Namespace: middlewares",sidebar_label:"@10up/headless-next.middlewares",custom_edit_url:null},s=void 0,i={unversionedId:"namespaces/10up_headless_next.middlewares",id:"namespaces/10up_headless_next.middlewares",title:"Namespace: middlewares",description:"@10up/headless-next.middlewares",source:"@site/docs/namespaces/10up_headless_next.middlewares.md",sourceDirName:"namespaces",slug:"/namespaces/10up_headless_next.middlewares",permalink:"/api/namespaces/10up_headless_next.middlewares",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_next.middlewares",title:"Namespace: middlewares",sidebar_label:"@10up/headless-next.middlewares",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-next.config",permalink:"/api/namespaces/10up_headless_next.config"},next:{title:"@10up/headless-core.AbstractFetchStrategy",permalink:"/api/classes/10up_headless_core.AbstractFetchStrategy"}},d={},p=[{value:"@10up/headless-next/middlewares",id:"10upheadless-nextmiddlewares",level:2},{value:"Usage",id:"usage",level:3},{value:"Functions",id:"functions",level:2},{value:"AppMiddleware",id:"appmiddleware",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],o={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next"},"@10up/headless-next"),".middlewares"),(0,n.kt)("h2",{id:"10upheadless-nextmiddlewares"},"@10up/headless-next/middlewares"),(0,n.kt)("p",null,"The middlewwares export of the `@10up/headless-next' package."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { appMiddleware } from '@10up/headless-next/middlewares';\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"appmiddleware"},"AppMiddleware"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"AppMiddleware"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"req"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"NextResponse"),">"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"req")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"NextRequest"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"NextResponse"),">"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/a444791/packages/next/src/middlewares/appMidleware.ts#L14"},"packages/next/src/middlewares/appMidleware.ts:14")))}u.isMDXComponent=!0}}]);