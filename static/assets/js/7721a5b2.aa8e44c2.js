"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[5182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={slug:"/data-fetching/useposts",sidebar_position:2},s="The usePosts hook",i={unversionedId:"Data Fetching/usePosts",id:"Data Fetching/usePosts",title:"The usePosts hook",description:"The usePosts hook is the Next.js binding for the useFetchPosts.",source:"@site/documentation/02 - Data Fetching/usePosts.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/useposts",permalink:"/docs/data-fetching/useposts",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/usePosts.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Oliveira",lastUpdatedAt:1671555755,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:2,frontMatter:{slug:"/data-fetching/useposts",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The usePost hook",permalink:"/docs/data-fetching/usepost"},next:{title:"The useAuthorArchive Hook",permalink:"/docs/data-fetching/useauthorarchive"}},l={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Category Archive",id:"category-archive",level:2},{value:"Known limitations",id:"known-limitations",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-useposts-hook"},"The usePosts hook"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#useposts"},"usePosts")," hook is the Next.js binding for the ",(0,o.kt)("a",{parentName:"p",href:"/api/namespaces/10up_headless_core.react#usefetchposts"},"useFetchPosts"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"usePosts")," hook fetches a collection of WordPress posts from a registered post type. It's basic usage is very simple."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"Assuming a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/blog/[[...path]].js")," route with the following content."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This example is using the optional catch-all route ",(0,o.kt)("inlineCode",{parentName:"p"},"[[..path]].js")," because we want the ",(0,o.kt)("inlineCode",{parentName:"p"},"/blog")," route to be handled by the same file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//src/pages/blog/[[...path]].js\nimport { usePost } from '@10up/headless-next';\n\nconst ArchivePage = () => {\n    const { loading, error, data } = usePosts({ per_page: 10 });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            {data?.posts?.map((post) => (\n                <h2 key={post.id}>{post.title.rendered}</h2>\n            ))}\n        </div>\n    );\n};\n")),(0,o.kt)("p",null,"The route will automatically render the latest 10 posts and you get pagination, category, tags and custom taxonomies filtering for free as the following paths will automatically map URL segements into REST API requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/blog/page/2"),(0,o.kt)("li",{parentName:"ul"},"/blog/category/category-name"),(0,o.kt)("li",{parentName:"ul"},"/blog/tag/tag-name"),(0,o.kt)("li",{parentName:"ul"},"/blog/category/category-name/page/2")),(0,o.kt)("h2",{id:"category-archive"},"Category Archive"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePosts")," hook to create a category archive route (",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/category/[...path].js"),")."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"[...path].js")," here because ",(0,o.kt)("strong",{parentName:"p"},"we do not want")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"/category")," route to render anything.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/pages/category/[...path].js\nimport {\n    usePosts,\n    fetchHookData,\n    addHookData,\n    handleError,\n} from '@10up/headless-next';\n\nconst CategoryPage = () => {\n    const { data } = usePosts({ taxonomy: 'category' });\n\n    return (\n        <>\n            <h1>Category Page: {data.queriedObject.term.name}</h1>\n            <ul>\n                {data.posts.map((post) => (\n                    <li key={post.id}>\n                        <Link href={post.link}>{post.title.rendered}</Link>\n                    </li>\n                ))}\n            </ul>\n            <Pagination pageInfo={data.pageInfo} />\n        </>\n    );\n};\n\n")),(0,o.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is not possible to fetch posts from more than one post type.")))}u.isMDXComponent=!0}}]);