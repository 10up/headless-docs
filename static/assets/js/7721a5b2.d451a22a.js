"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[5182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/data-fetching/useposts",sidebar_position:2},s="The usePosts hook",i={unversionedId:"Data Fetching/usePosts",id:"Data Fetching/usePosts",title:"The usePosts hook",description:"The usePosts hook is the Next.js binding for the useFetchPosts.",source:"@site/documentation/02 - Data Fetching/usePosts.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/useposts",permalink:"/docs/data-fetching/useposts",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/usePosts.md",tags:[],version:"current",lastUpdatedBy:"Daryll Doyle",lastUpdatedAt:1681532250,formattedLastUpdatedAt:"Apr 15, 2023",sidebarPosition:2,frontMatter:{slug:"/data-fetching/useposts",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The usePost hook",permalink:"/docs/data-fetching/usepost"},next:{title:"The useAuthorArchive Hook",permalink:"/docs/data-fetching/useauthorarchive"}},l={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Queried Object",id:"queried-object",level:2},{value:"Category Archive",id:"category-archive",level:2},{value:"Known limitations",id:"known-limitations",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-useposts-hook"},"The usePosts hook"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#useposts"},"usePosts")," hook is the Next.js binding for the ",(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/10up_headless_core.react#usefetchposts"},"useFetchPosts"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"usePosts")," hook fetches a collection of WordPress posts from a registered post type. Its basic usage is very simple."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"Assuming a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog/[[...path]].js")," route with the following content."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example is using the optional catch-all route ",(0,r.kt)("inlineCode",{parentName:"p"},"[[..path]].js")," because we want the ",(0,r.kt)("inlineCode",{parentName:"p"},"/blog")," route to be handled by the same file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/blog/[[...path]].js"',title:'"src/pages/blog/[[...path]].js"'},"import { usePost } from '@10up/headless-next';\n\nconst ArchivePage = () => {\n    const { loading, error, data } = usePosts({ per_page: 10 });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            {data?.posts?.map((post) => (\n                <h2 key={post.id}>{post.title.rendered}</h2>\n            ))}\n        </div>\n    );\n};\n")),(0,r.kt)("p",null,"The route will automatically render the latest 10 posts and you get pagination, category, tags and custom taxonomies filtering for free as the following paths will automatically map URL segements into REST API requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/blog/page/2"),(0,r.kt)("li",{parentName:"ul"},"/blog/category/category-name"),(0,r.kt)("li",{parentName:"ul"},"/blog/tag/tag-name"),(0,r.kt)("li",{parentName:"ul"},"/blog/category/category-name/page/2")),(0,r.kt)("h2",{id:"queried-object"},"Queried Object"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"usePosts")," hook exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"queriedObject"),". It's similar to WordPress ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/get_queried_object/"},"get_queried_object()")," function."),(0,r.kt)("p",null,"It essentially returned the what's being queried for, e.g: author or category. If the current page is querying posts within a certain author, then that author object will be populated in ",(0,r.kt)("inlineCode",{parentName:"p"},"data.queriedObject.author"),". Similarly, if the current page is quering posts from a given category ",(0,r.kt)("inlineCode",{parentName:"p"},"data.queriedObject.term")," will be populated with that category."),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// category-name can either come from the URL or be manually specified.\nconst { data } = usePosts({ taxonomy: 'category', category: 'cat-name' });\n\nreturn (\n    <h1>Category Page: {data.queriedObject.term.name}</h1>\n);\n")),(0,r.kt)("h2",{id:"category-archive"},"Category Archive"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePosts")," hook to create a category archive route (",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/category/[...path].js"),")."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"[...path].js")," here because ",(0,r.kt)("strong",{parentName:"p"},"we do not want")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"/category")," route to render anything.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/category/[...path].js"',title:'"src/pages/category/[...path].js"'},"import {\n    usePosts,\n    fetchHookData,\n    addHookData,\n    handleError,\n} from '@10up/headless-next';\n\nconst CategoryPage = () => {\n    const { data } = usePosts({ taxonomy: 'category' });\n\n    return (\n        <>\n            <h1>Category Page: {data.queriedObject.term.name}</h1>\n            <ul>\n                {data.posts.map((post) => (\n                    <li key={post.id}>\n                        <Link href={post.link}>{post.title.rendered}</Link>\n                    </li>\n                ))}\n            </ul>\n            <Pagination pageInfo={data.pageInfo} />\n        </>\n    );\n};\n\n")),(0,r.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is not possible to fetch posts from more than one post type.")))}u.isMDXComponent=!0}}]);