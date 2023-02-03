"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[5620],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||k[c]||l;return a?n.createElement(h,i(i({ref:t},o),{},{components:a})):n.createElement(h,i({ref:t},o))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5793:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"10up_headless_core.AbstractFetchStrategy",title:"Class: AbstractFetchStrategy<E, Params, R>",sidebar_label:"@10up/headless-core.AbstractFetchStrategy",custom_edit_url:null},i=void 0,p={unversionedId:"classes/10up_headless_core.AbstractFetchStrategy",id:"classes/10up_headless_core.AbstractFetchStrategy",title:"Class: AbstractFetchStrategy<E, Params, R>",description:"@10up/headless-core.AbstractFetchStrategy",source:"@site/docs/classes/10up_headless_core.AbstractFetchStrategy.md",sourceDirName:"classes",slug:"/classes/10up_headless_core.AbstractFetchStrategy",permalink:"/api/classes/10up_headless_core.AbstractFetchStrategy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"10up_headless_core.AbstractFetchStrategy",title:"Class: AbstractFetchStrategy<E, Params, R>",sidebar_label:"@10up/headless-core.AbstractFetchStrategy",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"@10up/headless-next.middlewares",permalink:"/api/namespaces/10up_headless_next.middlewares"},next:{title:"@10up/headless-core.AppSettingsStrategy",permalink:"/api/classes/10up_headless_core.AppSettingsStrategy"}},s={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"baseURL",id:"baseurl",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"endpoint",id:"endpoint",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"buildEndpointURL",id:"buildendpointurl",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"fetcher",id:"fetcher",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"filterData",id:"filterdata",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"get",id:"get",level:3},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getDefaultEndpoint",id:"getdefaultendpoint",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getDefaultParams",id:"getdefaultparams",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getEndpoint",id:"getendpoint",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getParamsFromURL",id:"getparamsfromurl",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getQueriedObject",id:"getqueriedobject",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"isMainQuery",id:"ismainquery",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"prepareResponse",id:"prepareresponse",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"setBaseURL",id:"setbaseurl",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"setEndpoint",id:"setendpoint",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-15",level:4}],o={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core"},"@10up/headless-core"),".AbstractFetchStrategy"),(0,r.kt)("p",null,"Abstract class that lays out a strategy for fetching data"),(0,r.kt)("p",null,"All Fetch Strategies should implement this class and it allows to share logic for fetching data both\non the front-end and on the back-end."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of entity that is fetched (e.g PostEntity, TermEntity etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.EndpointParams"},(0,r.kt)("inlineCode",{parentName:"a"},"EndpointParams"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of the params that are passed to the endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"R")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AbstractFetchStrategy"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.SinglePostFetchStrategy"},(0,r.kt)("inlineCode",{parentName:"a"},"SinglePostFetchStrategy"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.PostsArchiveFetchStrategy"},(0,r.kt)("inlineCode",{parentName:"a"},"PostsArchiveFetchStrategy"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.AppSettingsStrategy"},(0,r.kt)("inlineCode",{parentName:"a"},"AppSettingsStrategy"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.TaxonomyTermsStrategy"},(0,r.kt)("inlineCode",{parentName:"a"},"TaxonomyTermsStrategy"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.VerifyTokenFetchStrategy"},(0,r.kt)("inlineCode",{parentName:"a"},"VerifyTokenFetchStrategy"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new AbstractFetchStrategy"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL?"),")"),(0,r.kt)("p",null,"The strategy constructor"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.EndpointParams"},(0,r.kt)("inlineCode",{parentName:"a"},"EndpointParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"R")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"baseURL?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The base URL of the API")))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L103"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:103")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"baseurl"},"baseURL"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"baseURL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"''")),(0,r.kt)("p",null,"The base URL where the API is located"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L90"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:90")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"endpoint"},"endpoint"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"endpoint"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"''")),(0,r.kt)("p",null,"Holds the current endpoint for the strategy"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L85"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:85")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"buildendpointurl"},"buildEndpointURL"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildEndpointURL"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Builds the final endpoint URL based on the passed parameters"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Params"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The params to add to the request")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The endpoint URL."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L176"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:176")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fetcher"},"fetcher"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fetcher"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">",">"),(0,r.kt)("p",null,"The default fetcher function"),(0,r.kt)("p",null,"The default fetcher function handles authentication headers and errors from the API."),(0,r.kt)("p",null,"A custom strategy can override this function to run additional logic before or after the fetch call"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL to fetch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Params"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The request params")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchOptions")),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">",">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L209"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:209")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"filterdata"},"filterData"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"filterData"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filterOptions?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">"),(0,r.kt)("p",null,"Filters the data returned from the API by excluding fields that are not needed in order to reduce\npayload size."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"R"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The data to filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"filterOptions?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FilterDataOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"FilterDataOptions")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"R"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">"),(0,r.kt)("p",null,"The filtered data"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L275"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:275")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">",">"),(0,r.kt)("p",null,"This is a simple wrapper to quickly fetch data from the API given a set of params"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PostsArchiveFetchStrategy } from '@10up/headless-core';\n\nnew PostsArchiveFetchStrategy('http://my-wp-url.com').get({perPage: 10});\n")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The endpoint params")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">",">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L313"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:313")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdefaultendpoint"},"getDefaultEndpoint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"getDefaultEndpoint"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"A method that must be implemented by concrete implementations which returns the default endpoint\nfor the strategy"),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L96"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:96")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdefaultparams"},"getDefaultParams"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDefaultParams"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),">"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),">"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L138"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:138")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getendpoint"},"getEndpoint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEndpoint"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Returns the endpoint of the strategy. If no endpoint has been set at runtime,\nreturns the default endpoint"),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The current endpoint for the strategy"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L130"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:130")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getparamsfromurl"},"getParamsFromURL"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"getParamsFromURL"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonUrlParams"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),">"),(0,r.kt)("p",null,"Returns the supported params from the URL if present."),(0,r.kt)("p",null,"These params are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"buildEndpointURL"),". If the strategy does not support\nmapping url params to endpoint params, it should return an empty object."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Path name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonUrlParams")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Params"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The non-url params")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),">"),(0,r.kt)("p",null,"params extracted from the URL"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L153"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:153")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getqueriedobject"},"getQueriedObject"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getQueriedObject"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"E"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Params"),">")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L263"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:263")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ismainquery"},"isMainQuery"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isMainQuery"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonUrlParams"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Checks if this is the main query for a page"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The page name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonUrlParams")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Params"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The non-url params")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L161"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:161")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepareresponse"},"prepareResponse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"prepareResponse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"): ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"E"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Params"),">")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.FetchResponse"},(0,r.kt)("inlineCode",{parentName:"a"},"FetchResponse")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"R"),">"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L189"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:189")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setbaseurl"},"setBaseURL"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setBaseURL"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"url?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"''"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L120"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:120")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setendpoint"},"setEndpoint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setEndpoint"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"The strategy can switch endpoints at runtime if needed."),(0,r.kt)("p",null,"E.g: The actual endpoint for a post depends on its post_type"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The endpoint to fetch")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/0c0350a/packages/core/src/data/strategies/AbstractFetchStrategy.ts#L116"},"packages/core/src/data/strategies/AbstractFetchStrategy.ts:116")))}m.isMDXComponent=!0}}]);