"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={id:"10up_headless_core.TypeEntity",title:"Interface: TypeEntity",sidebar_label:"@10up/headless-core.TypeEntity",custom_edit_url:null},p=void 0,l={unversionedId:"interfaces/10up_headless_core.TypeEntity",id:"interfaces/10up_headless_core.TypeEntity",title:"Interface: TypeEntity",description:"@10up/headless-core.TypeEntity",source:"@site/docs/interfaces/10up_headless_core.TypeEntity.md",sourceDirName:"interfaces",slug:"/interfaces/10up_headless_core.TypeEntity",permalink:"/api/interfaces/10up_headless_core.TypeEntity",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_core.TypeEntity",title:"Interface: TypeEntity",sidebar_label:"@10up/headless-core.TypeEntity",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-core.TermEntity",permalink:"/api/interfaces/10up_headless_core.TermEntity"},next:{title:"@10up/headless-core.VerifyTokenParams",permalink:"/api/interfaces/10up_headless_core.VerifyTokenParams"}},s={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"hierarchical",id:"hierarchical",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"rest_base",id:"rest_base",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"slug",id:"slug",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"taxonomies",id:"taxonomies",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core"},"@10up/headless-core"),".TypeEntity"),(0,a.kt)("p",null,"Interface for entities from the /wp/v2/types endpoint."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TypeEntity"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"A human-readable description of the post type."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/types/entities.ts#L360"},"packages/core/src/data/types/entities.ts:360")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hierarchical"},"hierarchical"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"hierarchical"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether or not the post type should have children."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/types/entities.ts#L365"},"packages/core/src/data/types/entities.ts:365")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The title for the post type."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/types/entities.ts#L370"},"packages/core/src/data/types/entities.ts:370")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rest_base"},"rest","_","base"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"rest","_","base"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"REST base route for the post type."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/types/entities.ts#L380"},"packages/core/src/data/types/entities.ts:380")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"slug"},"slug"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"slug"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"An alphanumeric identifier for the post type."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/types/entities.ts#L375"},"packages/core/src/data/types/entities.ts:375")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"taxonomies"},"taxonomies"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"taxonomies"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Taxonomies associated with post type."),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/types/entities.ts#L385"},"packages/core/src/data/types/entities.ts:385")))}d.isMDXComponent=!0}}]);