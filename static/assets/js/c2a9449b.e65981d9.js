"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[2568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"10up_headless_next.FetchHookDataOptions",title:"Interface: FetchHookDataOptions",sidebar_label:"@10up/headless-next.FetchHookDataOptions",custom_edit_url:null},o=void 0,s={unversionedId:"interfaces/10up_headless_next.FetchHookDataOptions",id:"interfaces/10up_headless_next.FetchHookDataOptions",title:"Interface: FetchHookDataOptions",description:"@10up/headless-next.FetchHookDataOptions",source:"@site/docs/interfaces/10up_headless_next.FetchHookDataOptions.md",sourceDirName:"interfaces",slug:"/interfaces/10up_headless_next.FetchHookDataOptions",permalink:"/api/interfaces/10up_headless_next.FetchHookDataOptions",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_next.FetchHookDataOptions",title:"Interface: FetchHookDataOptions",sidebar_label:"@10up/headless-next.FetchHookDataOptions",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-core.react.useTermsResponse",permalink:"/api/interfaces/10up_headless_core.react.useTermsResponse"},next:{title:"@10up/headless-next.useAppSettingsResponse",permalink:"/api/interfaces/10up_headless_next.useAppSettingsResponse"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"fetchStrategyOptions",id:"fetchstrategyoptions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"filterData",id:"filterdata",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"params",id:"params",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next"},"@10up/headless-next"),".FetchHookDataOptions"),(0,r.kt)("p",null,"The supported options for ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#fetchhookdata"},"fetchHookData")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"fetchstrategyoptions"},"fetchStrategyOptions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"fetchStrategyOptions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"FetchOptions")),(0,r.kt)("p",null,"Optional. If set, will fowardh fetch options to the fetch strategy"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/next/src/data/utils.ts#L32"},"packages/next/src/data/utils.ts:32")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"filterdata"},"filterData"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"filterData"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"FilterDataOptions"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Optional. If set, the data will be filtered given FilterDataOptions"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/next/src/data/utils.ts#L27"},"packages/next/src/data/utils.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"params"},"params"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"params"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",null,"This should match params passed to the hook on the client side."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/next/src/data/utils.ts#L22"},"packages/next/src/data/utils.ts:22")))}u.isMDXComponent=!0}}]);