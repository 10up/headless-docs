"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[9726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={slug:"/data-fetching/usesearch",sidebar_position:5},s="The useSearch hook",i={unversionedId:"Data Fetching/useSearch",id:"Data Fetching/useSearch",title:"The useSearch hook",description:"The useSearch hook is the Next.js binding for the useFetchSearch.",source:"@site/documentation/02 - Data Fetching/useSearch.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/usesearch",permalink:"/docs/data-fetching/usesearch",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/useSearch.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Andr\xe9",lastUpdatedAt:1680109358,formattedLastUpdatedAt:"Mar 29, 2023",sidebarPosition:5,frontMatter:{slug:"/data-fetching/usesearch",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"The useTerms hook",permalink:"/docs/data-fetching/useterms"},next:{title:"Creating your own custom hooks",permalink:"/docs/data-fetching/creating-your-own-custom-hooks"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"QueriedObject",id:"queriedobject",level:2},{value:"Known limitations",id:"known-limitations",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-usesearch-hook"},"The useSearch hook"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#usesearch"},"useSearch")," hook is the Next.js binding for the ",(0,n.kt)("a",{parentName:"p",href:"/api/namespaces/10up_headless_core.react#usefetchsearch"},"useFetchSearch"),".")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useSearch")," hook searches for WordPress posts from a registered post type."),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"Assuming a ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/search/[[...path]].js")," route with the following content."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This example is using the optional catch-all route ",(0,n.kt)("inlineCode",{parentName:"p"},"[[..path]].js")," because we want the ",(0,n.kt)("inlineCode",{parentName:"p"},"/search")," route to be handled by the same file and fetch the latest posts.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/search/[[...path]].js"',title:'"src/pages/search/[[...path]].js"'},"import { useSearch } from '@10up/headless-next';\n\nconst ArchivePage = () => {\n    const { loading, error, data } = useSearch({ per_page: 10 });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            {data?.posts?.map((post) => (\n                <h2 key={post.id}>{post.title.rendered}</h2>\n            ))}\n        </div>\n    );\n};\n")),(0,n.kt)("p",null,"The route will automatically render the latest 10 posts if no search term is provided. The following paths are automatically handled:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/search/search-term"),(0,n.kt)("li",{parentName:"ul"},"/search/search-term/page/2"),(0,n.kt)("li",{parentName:"ul"},"/search")),(0,n.kt)("h2",{id:"queriedobject"},"QueriedObject"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useSearch")," hook also exposes a ",(0,n.kt)("inlineCode",{parentName:"p"},"queriedObject"),". See ",(0,n.kt)("a",{parentName:"p",href:"/docs/data-fetching/useposts/#queried-object"},"usePosts docs")," for more info."),(0,n.kt)("p",null,"The queried object for for this hook is an object of type ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/10up_headless_core.SearchEntity/"},"SearchEnrity"),"."),(0,n.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It is not possible to fetch posts from more than one post type.")))}u.isMDXComponent=!0}}]);