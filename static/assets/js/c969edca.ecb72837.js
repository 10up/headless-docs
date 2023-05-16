"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(h,s(s({ref:t},l),{},{components:r})):a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={id:"headstartwp_core.FetchResponse",title:"Interface: FetchResponse<T>",sidebar_label:"@headstartwp/core.FetchResponse",custom_edit_url:null},s=void 0,o={unversionedId:"interfaces/headstartwp_core.FetchResponse",id:"interfaces/headstartwp_core.FetchResponse",title:"Interface: FetchResponse<T>",description:"@headstartwp/core.FetchResponse",source:"@site/docs/interfaces/headstartwp_core.FetchResponse.md",sourceDirName:"interfaces",slug:"/interfaces/headstartwp_core.FetchResponse",permalink:"/api/interfaces/headstartwp_core.FetchResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"headstartwp_core.FetchResponse",title:"Interface: FetchResponse<T>",sidebar_label:"@headstartwp/core.FetchResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@headstartwp/core.FetchOptions",permalink:"/api/interfaces/headstartwp_core.FetchOptions"},next:{title:"@headstartwp/core.FilterDataOptions",permalink:"/api/interfaces/headstartwp_core.FilterDataOptions"}},p={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"pageInfo",id:"pageinfo",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"queriedObject",id:"queriedobject",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-2",level:4}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/headstartwp_core"},"@headstartwp/core"),".FetchResponse"),(0,n.kt)("p",null,"The type of the fetch response"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"pageinfo"},"pageInfo"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"pageInfo"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/headstartwp_core.PageInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"PageInfo"))),(0,n.kt)("p",null,"Contains pagination information"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L46"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:46")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"queriedobject"},"queriedObject"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"queriedObject"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/headstartwp_core#queriedobject"},(0,n.kt)("inlineCode",{parentName:"a"},"QueriedObject"))),(0,n.kt)("p",null,"Queried Object information"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L51"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:51")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"result"},"result"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"result"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"Contains the actual data returned from the API"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L41"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:41")))}d.isMDXComponent=!0}}]);