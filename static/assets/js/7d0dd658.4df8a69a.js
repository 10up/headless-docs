"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[7246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||h[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={id:"headstartwp_core.TaxonomyEntity",title:"Interface: TaxonomyEntity",sidebar_label:"@headstartwp/core.TaxonomyEntity",custom_edit_url:null},o=void 0,s={unversionedId:"interfaces/headstartwp_core.TaxonomyEntity",id:"interfaces/headstartwp_core.TaxonomyEntity",title:"Interface: TaxonomyEntity",description:"@headstartwp/core.TaxonomyEntity",source:"@site/docs/interfaces/headstartwp_core.TaxonomyEntity.md",sourceDirName:"interfaces",slug:"/interfaces/headstartwp_core.TaxonomyEntity",permalink:"/api/interfaces/headstartwp_core.TaxonomyEntity",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"headstartwp_core.TaxonomyEntity",title:"Interface: TaxonomyEntity",sidebar_label:"@headstartwp/core.TaxonomyEntity",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@headstartwp/core.TaxonomyArchiveParams",permalink:"/api/interfaces/headstartwp_core.TaxonomyArchiveParams"},next:{title:"@headstartwp/core.TermEntity",permalink:"/api/interfaces/headstartwp_core.TermEntity"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"hierarchical",id:"hierarchical",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"rest_base",id:"rest_base",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"slug",id:"slug",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"types",id:"types",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"yoast_head",id:"yoast_head",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"yoast_head_json",id:"yoast_head_json",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/headstartwp_core"},"@headstartwp/core"),".TaxonomyEntity"),(0,r.kt)("p",null,"Interface for entities from the /wp/v2/taxonomy endpoint."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/headstartwp_core.Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TaxonomyEntity"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"description"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"A human-readable description of the taxonomy."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L397"},"packages/core/src/data/types/entities.ts:397")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hierarchical"},"hierarchical"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"hierarchical"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether or not the taxonomy should have children."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L402"},"packages/core/src/data/types/entities.ts:402")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The title for the taxonomy."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L407"},"packages/core/src/data/types/entities.ts:407")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"rest_base"},"rest","_","base"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"rest","_","base"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"REST base route for the taxonomy."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L417"},"packages/core/src/data/types/entities.ts:417")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"slug"},"slug"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"slug"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"An alphanumeric identifier for the taxonomy."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L412"},"packages/core/src/data/types/entities.ts:412")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"types"},"types"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"types"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,"Types associated with the taxonomy."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L422"},"packages/core/src/data/types/entities.ts:422")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"yoast_head"},"yoast","_","head"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"yoast","_","head"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/headstartwp_core.Entity"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/headstartwp_core.Entity#yoast_head"},"yoast_head")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L14"},"packages/core/src/data/types/entities.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"yoast_head_json"},"yoast","_","head","_","json"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"yoast","_","head","_","json"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/headstartwp_core.Entity"},"Entity"),".",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/headstartwp_core.Entity#yoast_head_json"},"yoast_head_json")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/1f1637e/packages/core/src/data/types/entities.ts#L13"},"packages/core/src/data/types/entities.ts:13")))}c.isMDXComponent=!0}}]);