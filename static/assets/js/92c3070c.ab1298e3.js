"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[6264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"10up_headless_core.TaxonomyEntity",title:"Interface: TaxonomyEntity",sidebar_label:"@10up/headless-core.TaxonomyEntity",custom_edit_url:null},l=void 0,s={unversionedId:"interfaces/10up_headless_core.TaxonomyEntity",id:"interfaces/10up_headless_core.TaxonomyEntity",title:"Interface: TaxonomyEntity",description:"@10up/headless-core.TaxonomyEntity",source:"@site/docs/interfaces/10up_headless_core.TaxonomyEntity.md",sourceDirName:"interfaces",slug:"/interfaces/10up_headless_core.TaxonomyEntity",permalink:"/api/interfaces/10up_headless_core.TaxonomyEntity",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_core.TaxonomyEntity",title:"Interface: TaxonomyEntity",sidebar_label:"@10up/headless-core.TaxonomyEntity",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-core.TaxonomyArchiveParams",permalink:"/api/interfaces/10up_headless_core.TaxonomyArchiveParams"},next:{title:"@10up/headless-core.TermEntity",permalink:"/api/interfaces/10up_headless_core.TermEntity"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"hierarchical",id:"hierarchical",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"rest_base",id:"rest_base",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"slug",id:"slug",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"types",id:"types",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core"},"@10up/headless-core"),".TaxonomyEntity"),(0,a.kt)("p",null,"Interface for entities from the /wp/v2/taxonomy endpoint."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TaxonomyEntity"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"A human-readable description of the taxonomy."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/fe75183/packages/core/src/data/types/entities.ts#L395"},"packages/core/src/data/types/entities.ts:395")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hierarchical"},"hierarchical"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"hierarchical"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether or not the taxonomy should have children."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/fe75183/packages/core/src/data/types/entities.ts#L400"},"packages/core/src/data/types/entities.ts:400")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The title for the taxonomy."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/fe75183/packages/core/src/data/types/entities.ts#L405"},"packages/core/src/data/types/entities.ts:405")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rest_base"},"rest","_","base"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"rest","_","base"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"REST base route for the taxonomy."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/fe75183/packages/core/src/data/types/entities.ts#L415"},"packages/core/src/data/types/entities.ts:415")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"slug"},"slug"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"slug"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"An alphanumeric identifier for the taxonomy."),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/fe75183/packages/core/src/data/types/entities.ts#L410"},"packages/core/src/data/types/entities.ts:410")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"types"},"types"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"types"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Types associated with the taxonomy."),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/fe75183/packages/core/src/data/types/entities.ts#L420"},"packages/core/src/data/types/entities.ts:420")))}d.isMDXComponent=!0}}]);