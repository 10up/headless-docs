"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[9530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/data-fetching/usepost",sidebar_position:1},s="The usePost hook",i={unversionedId:"Data Fetching/usePost",id:"Data Fetching/usePost",title:"The usePost hook",description:"The usePost hook is the Next.js binding for the useFetchPost.",source:"@site/documentation/02 - Data Fetching/usePost.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/usepost",permalink:"/docs/data-fetching/usepost",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/usePost.md",tags:[],version:"current",lastUpdatedBy:"tobey",lastUpdatedAt:1681348984,formattedLastUpdatedAt:"Apr 13, 2023",sidebarPosition:1,frontMatter:{slug:"/data-fetching/usepost",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/data-fetching"},next:{title:"The usePosts hook",permalink:"/docs/data-fetching/useposts"}},p={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Post path matching",id:"post-path-matching",level:4},{value:"Fetching from multiple post types",id:"fetching-from-multiple-post-types",level:3},{value:"Fetching from a custom post type",id:"fetching-from-a-custom-post-type",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-usepost-hook"},"The usePost hook"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#usepost"},"usePost")," hook is the Next.js binding for the ",(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/10up_headless_core.react#usefetchpost"},"useFetchPost"),".")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"usePost")," hook fetches a single WordPress post from a registered post type. Its basic usage is very simple."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"The basic usage is pretty simple and it assumes a route named ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/[...path].js")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," is extracted from the URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/pages/[...path].js",title:"src/pages/[...path].js"},"import { usePost } from '@10up/headless-next';\n\nconst PostPage = () => {\n    const { loading, error, data } = usePost();\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <h2>{data?.post.title.rendered}</h2>\n        </div>\n    );\n};\n")),(0,r.kt)("h4",{id:"post-path-matching"},"Post path matching"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The behavior described here was implemented in version ",(0,r.kt)("strong",{parentName:"p"},"0.5.x")," of the framework and can be disabled by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"matchCurrentPath: false")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"usePost")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchHookData")," for server-side data fetching).")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"usePost")," hook will by default match the current path captured by ",(0,r.kt)("inlineCode",{parentName:"p"},"[...path].js")," with the post's link property. This ensures the right post is loaded and that 404 are issued to unsupported permalinks. "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The framework requires that the permalink structure set on the backend matches the URL structure being used on the front-end. "),(0,r.kt)("p",{parentName:"admonition"},"This means that if you include the date in your permalinks the URLs to a post without the date will 404 in the framework."),(0,r.kt)("p",{parentName:"admonition"},"This is also true for custom post types, if the WordPress backend expects a custom post type to be at ",(0,r.kt)("inlineCode",{parentName:"p"},"/book/book-name")," the front-end must also follow the same URL structure. If you wish to change the permalink structure for custom post types make sure to make the changes both in WordPress and in your front-end code.")),(0,r.kt)("p",null,"Example where path matches:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User visits URL ",(0,r.kt)("inlineCode",{parentName:"li"},"/post-name")),(0,r.kt)("li",{parentName:"ul"},"The post with the ",(0,r.kt)("inlineCode",{parentName:"li"},"post-name")," slug contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"http://backend.com/post-name")," link."),(0,r.kt)("li",{parentName:"ul"},"Since the URL and the path of ",(0,r.kt)("inlineCode",{parentName:"li"},"post.link")," matches the page/post is rendered.")),(0,r.kt)("p",null,"Example where path does not match:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User visits URL ",(0,r.kt)("inlineCode",{parentName:"li"},"/parent-page/post-name")),(0,r.kt)("li",{parentName:"ul"},"The post with the ",(0,r.kt)("inlineCode",{parentName:"li"},"post-name")," slug contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"http://backend.com/different-parent/post-name")," url"),(0,r.kt)("li",{parentName:"ul"},"Since the URL (",(0,r.kt)("inlineCode",{parentName:"li"},"/parent-page/post-name"),") and the path of ",(0,r.kt)("inlineCode",{parentName:"li"},"post.link")," (",(0,r.kt)("inlineCode",{parentName:"li"},"different-parent/post-name"),") ",(0,r.kt)("strong",{parentName:"li"},"do not")," match a 404 page is issued.")),(0,r.kt)("p",null,"Example where path does not match but is redirected to the right one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User visits URL ",(0,r.kt)("inlineCode",{parentName:"li"},"/post-name")),(0,r.kt)("li",{parentName:"ul"},"The post with the ",(0,r.kt)("inlineCode",{parentName:"li"},"post-name")," slug contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"http://backend.com/2022/10/30/post-name")," url"),(0,r.kt)("li",{parentName:"ul"},"Since the URL and the path of ",(0,r.kt)("inlineCode",{parentName:"li"},"post.link")," do not match, a NotFound error is thrown"),(0,r.kt)("li",{parentName:"ul"},"If prefetching is setup following ",(0,r.kt)("a",{parentName:"li",href:"/docs/data-fetching/prefetching"},"pre-fetching")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"redirectStrategy"),' is set to "404" or "always" in ',(0,r.kt)("inlineCode",{parentName:"li"},"headless.config.js"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"handleError")," will then look if there's a redirect avaliable and since WordPress redirects ",(0,r.kt)("inlineCode",{parentName:"li"},"/post-name")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"/2022/10/30/post-name"),", the framework will also perform the redirect.")),(0,r.kt)("h3",{id:"fetching-from-multiple-post-types"},"Fetching from multiple post types"),(0,r.kt)("p",null,"When specifying an array of post type, the slug will be searched in both endpoint and the first one to return a valid post object will be used."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This might result in URL conflicts, i.e a post or page using the same slug. The first post type specified will take precedence. In such cases, consider using a different URL structure for each for instance (e.g: using ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/article/[...path].js")," for posts).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/[...path].js"',title:'"src/pages/[...path].js"'},"import { usePost } from '@10up/headless-next';\n\nconst PostOrPage = () => {\n    const { loading, error, data } = usePost({ postType: ['page', 'post'] });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <h2>{data?.post.title.rendered}</h2>\n        </div>\n    );\n};\n")),(0,r.kt)("h2",{id:"fetching-from-a-custom-post-type"},"Fetching from a custom post type"),(0,r.kt)("p",null,"To fetch a single from a custom post type, first declare the custom post type in ",(0,r.kt)("inlineCode",{parentName:"p"},"headless.config.js")," as explained in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/headless-config#custom-post-types"},"headless.config.js")," section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/book/[...path].js"',title:'"src/pages/book/[...path].js"'},"import { usePost } from '@10up/headless-next';\n\nconst PostPage = () => {\n    const { loading, error, data } = usePost({ postType: 'book' });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <h2>{data?.post.title.rendered}</h2>\n        </div>\n    );\n};\n")))}d.isMDXComponent=!0}}]);