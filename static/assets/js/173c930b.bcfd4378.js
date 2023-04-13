"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[3446],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(o),m=r,d=l["".concat(p,".").concat(m)]||l[m]||h[m]||a;return o?n.createElement(d,s(s({ref:t},c),{},{components:o})):n.createElement(d,s({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={slug:"/data-fetching/creating-your-own-custom-hooks",sidebar_label:"Creating your own custom hooks"},s="Custom hoooks",i={unversionedId:"Data Fetching/custom-hooks",id:"Data Fetching/custom-hooks",title:"Custom hoooks",description:"Sometimes it might be useful to wrap the framework data-fetching hooks into your own hooks.",source:"@site/documentation/02 - Data Fetching/custom-hooks.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/creating-your-own-custom-hooks",permalink:"/docs/data-fetching/creating-your-own-custom-hooks",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/custom-hooks.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Andr\xe9",lastUpdatedAt:1681349107,formattedLastUpdatedAt:"Apr 13, 2023",frontMatter:{slug:"/data-fetching/creating-your-own-custom-hooks",sidebar_label:"Creating your own custom hooks"},sidebar:"tutorialSidebar",previous:{title:"The useSearch hook",permalink:"/docs/data-fetching/usesearch"},next:{title:"Prefetching data on the server",permalink:"/docs/data-fetching/prefetching"}},p={},u=[{value:"Creating a custom hook for a custom post type",id:"creating-a-custom-hook-for-a-custom-post-type",level:2},{value:"Creating your own AppSettings hook",id:"creating-your-own-appsettings-hook",level:2},{value:"Custom Strategies",id:"custom-strategies",level:2}],c={toc:u};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-hoooks"},"Custom hoooks"),(0,r.kt)("p",null,"Sometimes it might be useful to wrap the framework data-fetching hooks into your own hooks."),(0,r.kt)("h2",{id:"creating-a-custom-hook-for-a-custom-post-type"},"Creating a custom hook for a custom post type"),(0,r.kt)("p",null,"Let's say you have a custom-post type and you want to abstract the parameteres needed to get that custom post type. You can create your own hook and pass in the required paramms."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/hooks/useBook.js",title:"src/hooks/useBook.js"},"import { usePost } from '@10up/headless-next';\n\nconst defaultParams = {\n    postType: 'book',\n    _embed: true,\n};\n\nexport function useBook(params = {}) {\n    return usePost({ ...params, ...defaultParams }, options);\n}\n\nuseBook.fetcher = (sourceUrl?: string) => {\n    const fetcher = usePost.fetcher(sourceUrl, defaultParams);\n    return fetcher;\n};\n")),(0,r.kt)("p",null,"That way, you don't need to keep passing around the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultParams")," whenever you want to fetch a single book."),(0,r.kt)("p",null,"By wrapping ",(0,r.kt)("inlineCode",{parentName:"p"},"useBook.fetcher")," we can also pass a set of default params to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"usePost")," fetcher function. This ensure that when you use ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchHookData")," on the server, the data is fetched using the default params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// no need to manually pass `{ params: { postType: 'book' } }\nconst bookData = await fetchHookData(useBook.fetcher(), context);\n")),(0,r.kt)("p",null,"This is also useful if you're using TypeScript and your custom post type have additional meta fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/hooks/useBook.ts",title:"src/hooks/useBook.ts"},"import { usePost } from '@10up/headless-next';\nimport { PostEntity, PostParams } from '@10up/headless-core';\n\nconst defaultParams: PostParams = {\n    postType: 'book',\n    _embed: true,\n};\n\ninterface Book extends PostEntity {\n    isbn: string;\n}\n\nexport function useBook(params: PostParams | {} = {}) {\n    return usePost<Book>({ ...params, ...defaultParams }, options);\n}\n\nuseBook.fetcher = (sourceUrl?: string) => {\n    const fetcher = usePost.fetcher<Book>(sourceUrl, defaultParams);\n    return fetcher;\n};\n")),(0,r.kt)("p",null,"Then when using the custom hook ",(0,r.kt)("inlineCode",{parentName:"p"},"isbn")," will show up as an property of the returned post objects."),(0,r.kt)("h2",{id:"creating-your-own-appsettings-hook"},"Creating your own AppSettings hook"),(0,r.kt)("p",null,"If you're using TypeScript and you are extending the framework's app endpoint and including new fields you can create your own custom hook and specify the additional TypeScript types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/hooks/useMyAppSettings.ts",title:"src/hooks/useMyAppSettings.ts"},"import { FetchResponse, AppEntity, AppSettingsStrategy } from '@10up/headless-core';\nimport { FetchHookOptions } from '@10up/headless-core/react';\nimport { useAppSettings } from '@10up/headless-next';\n\nexport interface MyAppSettings extends AppEntity {\n    my_custom_setting: string;\n}\n\nexport function useMyAppSettings(\n    options: FetchHookOptions<FetchResponse<MyAppSettings>> = {},\n) {\n    return useAppSettings<MyAppSettings>({}, options);\n}\n\nuseMyAppSettings.fetcher = (sourceUrl?: string) =>\n    new AppSettingsStrategy<MyAppSettings>(sourceUrl);\n")),(0,r.kt)("h2",{id:"custom-strategies"},"Custom Strategies"),(0,r.kt)("p",null,"Depending on what you're doing you might need to create a completely custom Fetch Strategy. A Fetch Stragety must extend ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/10up_headless_core.AbstractFetchStrategy/"},"AbstractFetchStrategy")," and it must contain all of the logic needed to fetch the data."),(0,r.kt)("p",null,"If you feel like to need to create a custom strategy check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/tree/develop/packages/core/src/data/strategies"},"default Fetch Strategies")," as well as the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/tree/develop/packages/core/src/react/hooks"},"hooks")," that implements them."))}l.isMDXComponent=!0}}]);