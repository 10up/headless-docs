"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[8115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||l[d]||a;return r?n.createElement(m,s(s({ref:t},h),{},{components:r})):n.createElement(m,s({ref:t},h))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"/data-fetching/useauthorarchive",sidebar_position:3},s="The useAuthorArchive Hook",i={unversionedId:"Data Fetching/useAuthorArchive",id:"Data Fetching/useAuthorArchive",title:"The useAuthorArchive Hook",description:"The useAuthorArchive hook is the Next.js binding for the useFetchAuthorArchive.",source:"@site/documentation/02 - Data Fetching/useAuthorArchive.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/useauthorarchive",permalink:"/docs/data-fetching/useauthorarchive",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/useAuthorArchive.md",tags:[],version:"current",lastUpdatedBy:"Taylor Lovett",lastUpdatedAt:1677617268,formattedLastUpdatedAt:"Feb 28, 2023",sidebarPosition:3,frontMatter:{slug:"/data-fetching/useauthorarchive",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"The usePosts hook",permalink:"/docs/data-fetching/useposts"},next:{title:"The useTerms hook",permalink:"/docs/data-fetching/useterms"}},u={},c=[{value:"Basic Usage (Author Archive)",id:"basic-usage-author-archive",level:2},{value:"Author Archive for Custom Post Type",id:"author-archive-for-custom-post-type",level:2}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-useauthorarchive-hook"},"The useAuthorArchive Hook"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#useauthorarchive"},"useAuthorArchive")," hook is the Next.js binding for the ",(0,o.kt)("a",{parentName:"p",href:"/api/namespaces/10up_headless_core.react#usefetchauthorarchive"},"useFetchAuthorArchive"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useAuthorArchive")," hook fetches a collection of WordPress posts from a registered post type filtered by an author."),(0,o.kt)("h2",{id:"basic-usage-author-archive"},"Basic Usage (Author Archive)"),(0,o.kt)("p",null,"Assuming a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/author/[...path].js")," route with the following content."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example is using the catch-all route ",(0,o.kt)("inlineCode",{parentName:"p"},"[..path].js")," because ",(0,o.kt)("strong",{parentName:"p"},"we do not want")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"/author")," path to be handled by this route.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/author/[...path].js"',title:'"src/pages/author/[...path].js"'},"import { useAuthorArchive } from '@10up/headless-next';\n\nconst ArchivePage = () => {\n    const { loading, error, data } = useAuthorArchive({ per_page: 10 });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            {data?.posts?.map((post) => (\n                <h2 key={post.id}>{post.title.rendered}</h2>\n            ))}\n        </div>\n    );\n};\n")),(0,o.kt)("p",null,"The route will automatically render the latest 10 posts from the current author. The following paths will automatically be handled by the hook."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/author/author-name"),(0,o.kt)("li",{parentName:"ul"},"/author/author-name/page/2")),(0,o.kt)("h2",{id:"author-archive-for-custom-post-type"},"Author Archive for Custom Post Type"),(0,o.kt)("p",null,"In order to fetch posts from a custom post type, first declare the custom post type in ",(0,o.kt)("inlineCode",{parentName:"p"},"headless.config.js")," as explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/headless-config#custom-post-types"},"headless.config.js")," section. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/author/[...path].js"',title:'"src/pages/author/[...path].js"'},"import { useAuthorArchive } from '@10up/headless-next';\n\nconst ArchivePage = () => {\n    // book must be declared in headless.config.js\n    const { loading, error, data } = useAuthorArchive({ postType: ['book'] });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            {data?.posts?.map((post) => (\n                <h2 key={post.id}>{post.title.rendered}</h2>\n            ))}\n        </div>\n    );\n};\n")))}p.isMDXComponent=!0}}]);