"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[5837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||s;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const s={id:"10up_headless_core.FetchResponse",title:"Interface: FetchResponse<T>",sidebar_label:"@10up/headless-core.FetchResponse",custom_edit_url:null},i=void 0,o={unversionedId:"interfaces/10up_headless_core.FetchResponse",id:"interfaces/10up_headless_core.FetchResponse",title:"Interface: FetchResponse<T>",description:"@10up/headless-core.FetchResponse",source:"@site/docs/interfaces/10up_headless_core.FetchResponse.md",sourceDirName:"interfaces",slug:"/interfaces/10up_headless_core.FetchResponse",permalink:"/api/interfaces/10up_headless_core.FetchResponse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_core.FetchResponse",title:"Interface: FetchResponse<T>",sidebar_label:"@10up/headless-core.FetchResponse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-core.FetchOptions",permalink:"/api/interfaces/10up_headless_core.FetchOptions"},next:{title:"@10up/headless-core.FilterDataOptions",permalink:"/api/interfaces/10up_headless_core.FilterDataOptions"}},p={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"pageInfo",id:"pageinfo",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"queriedObject",id:"queriedobject",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core"},"@10up/headless-core"),".FetchResponse"),(0,n.kt)("p",null,"The type of the fetch response"),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"T"))))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"pageinfo"},"pageInfo"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"pageInfo"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PageInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"PageInfo"))),(0,n.kt)("p",null,"Contains pagination information"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L38"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:38")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"queriedobject"},"queriedObject"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"queriedObject"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core#queriedobject"},(0,n.kt)("inlineCode",{parentName:"a"},"QueriedObject"))),(0,n.kt)("p",null,"Queried Object information"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L43"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:43")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"result"},"result"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"result"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"T")),(0,n.kt)("p",null,"Contains the actual data returned from the API"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L33"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:33")))}u.isMDXComponent=!0}}]);