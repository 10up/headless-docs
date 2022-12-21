"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[9530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={slug:"/data-fetching/usepost",sidebar_position:1},a="The usePost hook",i={unversionedId:"Data Fetching/usePost",id:"Data Fetching/usePost",title:"The usePost hook",description:"The usePost hook is the Next.js binding for the useFetchPost.",source:"@site/documentation/02 - Data Fetching/usePost.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching/usepost",permalink:"/docs/data-fetching/usepost",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/usePost.md",tags:[],version:"current",lastUpdatedBy:"tobey",lastUpdatedAt:1671587678,formattedLastUpdatedAt:"Dec 21, 2022",sidebarPosition:1,frontMatter:{slug:"/data-fetching/usepost",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Fetching",permalink:"/docs/data-fetching"},next:{title:"The usePosts hook",permalink:"/docs/data-fetching/useposts"}},p={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Fetching from multiple post types",id:"fetching-from-multiple-post-types",level:3},{value:"Fetching from a custom post type",id:"fetching-from-a-custom-post-type",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-usepost-hook"},"The usePost hook"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next#usepost"},"usePost")," hook is the Next.js binding for the ",(0,o.kt)("a",{parentName:"p",href:"/api/namespaces/10up_headless_core.react#usefetchpost"},"useFetchPost"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"usePost")," hook fetches a single WordPress post from a registered post type. It's basic usage is very simple."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//src/pages/[...path].js\nimport { usePost } from '@10up/headless-next';\n\nconst PostPage = () => {\n    const { loading, error, data } = usePost();\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <h2>{data?.post.title.rendered}</h2>\n        </div>\n    );\n};\n")),(0,o.kt)("h3",{id:"fetching-from-multiple-post-types"},"Fetching from multiple post types"),(0,o.kt)("p",null,"When specifying an array of post type, the slug will be searched in both endpoint and the first one to return a valid post object will be used."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: this might result in URL conflicts, i.e a post or page using the same slug. The first post type specified will take precedence. In such cases, consider using a different URL structure for each for instance (e.g: using ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/article/[...path].js")," for posts).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//src/pages/[...path].js\nimport { usePost } from '@10up/headless-next';\n\nconst PostOrPage = () => {\n    const { loading, error, data } = usePost({ postType: ['page', 'post'] });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <h2>{data?.post.title.rendered}</h2>\n        </div>\n    );\n};\n")),(0,o.kt)("h2",{id:"fetching-from-a-custom-post-type"},"Fetching from a custom post type"),(0,o.kt)("p",null,"In order to fetch a single from a custom post type, first declare the custom post type in ",(0,o.kt)("inlineCode",{parentName:"p"},"headless.config.js")," as explained in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/headless-config#custom-post-types"},"headless.config.js")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//src/pages/book/[...path].js\nimport { usePost } from '@10up/headless-next';\n\nconst PostPage = () => {\n    const { loading, error, data } = usePost({ postType: 'book' });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <h2>{data?.post.title.rendered}</h2>\n        </div>\n    );\n};\n")))}u.isMDXComponent=!0}}]);