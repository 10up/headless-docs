"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[3497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=d(a),m=n,k=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(k,s(s({ref:t},o),{},{components:a})):r.createElement(k,s({ref:t},o))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={id:"10up_headless_core.SearchFetchStrategy",title:"Class: SearchFetchStrategy",sidebar_label:"@10up/headless-core.SearchFetchStrategy",custom_edit_url:null},s=void 0,l={unversionedId:"classes/10up_headless_core.SearchFetchStrategy",id:"classes/10up_headless_core.SearchFetchStrategy",title:"Class: SearchFetchStrategy",description:"@10up/headless-core.SearchFetchStrategy",source:"@site/docs/classes/10up_headless_core.SearchFetchStrategy.md",sourceDirName:"classes",slug:"/classes/10up_headless_core.SearchFetchStrategy",permalink:"/api/classes/10up_headless_core.SearchFetchStrategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_core.SearchFetchStrategy",title:"Class: SearchFetchStrategy",sidebar_label:"@10up/headless-core.SearchFetchStrategy",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-core.PostsArchiveFetchStrategy",permalink:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},next:{title:"@10up/headless-core.SinglePostFetchStrategy",permalink:"/api/classes/10up_headless_core.SinglePostFetchStrategy"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"baseURL",id:"baseurl",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"endpoint",id:"endpoint",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"buildEndpointURL",id:"buildendpointurl",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"fetcher",id:"fetcher",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"filterData",id:"filterdata",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"get",id:"get",level:3},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getDefaultEndpoint",id:"getdefaultendpoint",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getEndpoint",id:"getendpoint",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getParamsFromURL",id:"getparamsfromurl",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getQueriedObject",id:"getqueriedobject",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"isMainQuery",id:"ismainquery",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"prepareResponse",id:"prepareresponse",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"setBaseURL",id:"setbaseurl",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"setEndpoint",id:"setendpoint",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-14",level:4}],o={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core"},"@10up/headless-core"),".SearchFetchStrategy"),(0,n.kt)("p",null,"The SearchFetchStrategy extends the ",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy")," and does not make use of the\nsearch endpoint. Instead it uses the specified postType endpoint."),(0,n.kt)("p",null,"This strategy supports extracting endpoint params from url E.g:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/page/2/")," maps to ",(0,n.kt)("inlineCode",{parentName:"li"},"{ page: 2 }")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/searched-term/page/2")," maps to ",(0,n.kt)("inlineCode",{parentName:"li"},"{ search: 'searched-term', page: 2 }"))),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveFetchStrategy"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"SearchFetchStrategy"))))),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new SearchFetchStrategy"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"baseURL?"),")"),(0,n.kt)("p",null,"The strategy constructor"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"baseURL?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The base URL of the API")))),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L103"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:103")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"baseurl"},"baseURL"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"baseURL"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"''")),(0,n.kt)("p",null,"The base URL where the API is located"),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#baseurl"},"baseURL")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L90"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:90")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"endpoint"},"endpoint"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"endpoint"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"''")),(0,n.kt)("p",null,"Holds the current endpoint for the strategy"),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#endpoint"},"endpoint")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L85"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:85")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"buildendpointurl"},"buildEndpointURL"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"buildEndpointURL"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Handles taxonomy filters and switch endpoint based on post type"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The params to build the endpoint with")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#buildendpointurl"},"buildEndpointURL")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/PostsArchiveFetchStrategy.ts#L267"},"packages/core/src/data/strategies/PostsArchiveFetchStrategy.ts:267")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fetcher"},"fetcher"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"fetcher"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,n.kt)("inlineCode",{parentName:"p"},"pageInfo"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PageInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ; ",(0,n.kt)("inlineCode",{parentName:"p"},"queriedObject"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core#queriedobject"},(0,n.kt)("inlineCode",{parentName:"a"},"QueriedObject"))," ; ",(0,n.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]  }",">"),(0,n.kt)("p",null,"The fetcher function is overriden to disable throwing if not found"),(0,n.kt)("p",null,"If a search request returns not found we do not want to redirect to a 404 page,\ninstead the user should be informated that no posts were found"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"url")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The url to parse")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The params to build the endpoint with")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,n.kt)("inlineCode",{parentName:"p"},"pageInfo"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PageInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ; ",(0,n.kt)("inlineCode",{parentName:"p"},"queriedObject"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core#queriedobject"},(0,n.kt)("inlineCode",{parentName:"a"},"QueriedObject"))," ; ",(0,n.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]  }",">"),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#fetcher"},"fetcher")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/SearchFetchStrategy.ts#L41"},"packages/core/src/data/strategies/SearchFetchStrategy.ts:41")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"filterdata"},"filterData"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"filterData"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("p",null,"Filters the data returned from the API by excluding fields that are not needed in order to reduce\npayload size."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to filter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FilterDataOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"FilterDataOptions")),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("p",null,"The filtered data"),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#filterdata"},"filterData")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/PostsArchiveFetchStrategy.ts#L449"},"packages/core/src/data/strategies/PostsArchiveFetchStrategy.ts:449")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"get"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">",">"),(0,n.kt)("p",null,"This is a simple wrapper to quickly fetch data from the API given a set of params"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PostsArchiveFetchStrategy } from '@10up/headless-core';\n\nnew PostsArchiveFetchStrategy('http://my-wp-url.com').get({perPage: 10});\n")),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The endpoint params")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">",">"),(0,n.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#get"},"get")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L309"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:309")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getdefaultendpoint"},"getDefaultEndpoint"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getDefaultEndpoint"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"A method that must be implemented by concrete implementations which returns the default endpoint\nfor the strategy"),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#getdefaultendpoint"},"getDefaultEndpoint")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/SearchFetchStrategy.ts#L20"},"packages/core/src/data/strategies/SearchFetchStrategy.ts:20")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getendpoint"},"getEndpoint"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getEndpoint"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Returns the endpoint of the strategy. If no endpoint has been set at runtime,\nreturns the default endpoint"),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"The current endpoint for the strategy"),(0,n.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#getendpoint"},"getEndpoint")),(0,n.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L130"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:130")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getparamsfromurl"},"getParamsFromURL"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getParamsFromURL"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"nonUrlParams?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("p",null,"This strategy automatically extracts taxonomy filters, date filters and paginations params from the URL"),(0,n.kt)("p",null,"It also takes into account the custom taxonomies specified in ",(0,n.kt)("inlineCode",{parentName:"p"},"headless.config.js")),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The URL path to extract params from")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nonUrlParams")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("h4",{id:"overrides-2"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#getparamsfromurl"},"getParamsFromURL")),(0,n.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/SearchFetchStrategy.ts#L24"},"packages/core/src/data/strategies/SearchFetchStrategy.ts:24")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getqueriedobject"},"getQueriedObject"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getQueriedObject"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core#queriedobject"},(0,n.kt)("inlineCode",{parentName:"a"},"QueriedObject"))),(0,n.kt)("p",null,"Returns the queried object if applicable (e.g if querying by category, tag, author or custom taxonomy term)"),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"response")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The response from the API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The request params")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core#queriedobject"},(0,n.kt)("inlineCode",{parentName:"a"},"QueriedObject"))),(0,n.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#getqueriedobject"},"getQueriedObject")),(0,n.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/PostsArchiveFetchStrategy.ts#L380"},"packages/core/src/data/strategies/PostsArchiveFetchStrategy.ts:380")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ismainquery"},"isMainQuery"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"isMainQuery"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"nonUrlParams"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Checks if this is the main query for a page"),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"path")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The page name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nonUrlParams")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The non-url params")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#ismainquery"},"isMainQuery")),(0,n.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L157"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:157")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"prepareresponse"},"prepareResponse"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"prepareResponse"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"response")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"params")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,n.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.PostsArchiveParams"},(0,n.kt)("inlineCode",{parentName:"a"},"PostsArchiveParams")),">")))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.PostEntity"},(0,n.kt)("inlineCode",{parentName:"a"},"PostEntity")),"[]",">"),(0,n.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#prepareresponse"},"prepareResponse")),(0,n.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L185"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:185")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setbaseurl"},"setBaseURL"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setBaseURL"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"url?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"url")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"''"))))),(0,n.kt)("h4",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#setbaseurl"},"setBaseURL")),(0,n.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L120"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:120")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setendpoint"},"setEndpoint"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setEndpoint"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"endpoint"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"The strategy can switch endpoints at runtime if neeeded."),(0,n.kt)("p",null,"E.g: The actual endpoint for a post depends on its post_type"),(0,n.kt)("h4",{id:"parameters-10"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The endpoint to fetch")))),(0,n.kt)("h4",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},"PostsArchiveFetchStrategy"),".",(0,n.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy#setendpoint"},"setEndpoint")),(0,n.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/724eeb4/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L116"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:116")))}h.isMDXComponent=!0}}]);