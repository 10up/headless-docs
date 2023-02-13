"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[1551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"/data-fetching"},s="Data Fetching",i={unversionedId:"Data Fetching/index",id:"Data Fetching/index",title:"Data Fetching",description:'The Headless Framework exposes several custom react hooks that provides a seamless data-fetching experience with WordPress. Those hooks are built to be "isomorphic" i.e, can be executed either on the browser or on the server (e.g: Node.js).',source:"@site/documentation/02 - Data Fetching/index.md",sourceDirName:"02 - Data Fetching",slug:"/data-fetching",permalink:"/docs/data-fetching",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/02 - Data Fetching/index.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Andr\xe9",lastUpdatedAt:1676315153,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{slug:"/data-fetching"},sidebar:"tutorialSidebar",previous:{title:"Quick Introduction to the Framework",permalink:"/docs/getting-started/quick-tutorial"},next:{title:"The usePost hook",permalink:"/docs/data-fetching/usepost"}},l={},p=[{value:"React Custom hooks",id:"react-custom-hooks",level:2},{value:"Next.js &quot;bindings&quot;",id:"nextjs-bindings",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-fetching"},"Data Fetching"),(0,r.kt)("p",null,'The Headless Framework exposes several custom react hooks that provides a seamless data-fetching experience with WordPress. Those hooks are built to be "isomorphic" i.e, can be executed either on the browser or on the server (e.g: Node.js).'),(0,r.kt)("p",null,"The data-fetching logic itself is abstracted by ",(0,r.kt)("a",{parentName:"p",href:"/docs/data-fetching/strategies"},"strategies"),". The custom react hooks are powered by ",(0,r.kt)("a",{parentName:"p",href:"https://swr.vercel.app/"},"useSwr"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With Next.js ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory support added in Next.js 13, we will be providing special hooks that will work well with Suspense and Streaming. At the moment, we do not recommend using the existing custom hooks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," directory.")),(0,r.kt)("h2",{id:"react-custom-hooks"},"React Custom hooks"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@10up/headless-core/react")," package export exposes the react hooks implementation on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSwr")," library. Those hooks are called ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetch*")," e.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetchPost"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetchPosts")," and so on. They can be used outside of Next.js (i.e create-react-app, React Native etc.)."),(0,r.kt)("h2",{id:"nextjs-bindings"},'Next.js "bindings"'),(0,r.kt)("p",null,"Next.js is the main meta-framework supported by 10up's Headless Framework, therefore we provide special bindings that makes using the framework a breeze."),(0,r.kt)("p",null,"The Next.js bindings are exposed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@10up/headless-next")," package."),(0,r.kt)("p",null,'The main difference is that the Next.js binding will automatically extract URL segments into request params (i.e extracting post name from the URL automatically) when used in conjuction with the "path" catch-all pattern like ',(0,r.kt)("inlineCode",{parentName:"p"},"src/page/[...path.js]"),"."),(0,r.kt)("p",null,"The following example uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetchPost")," to manually fetch a page with the ",(0,r.kt)("inlineCode",{parentName:"p"},"about")," slug."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useFetchPost } from '@10up/headless-core/react';\n\nconst Page = () => {\n    const  { data: { post }, loading } = useFetchPost({ slug: 'about', post_type: 'page' } );\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    return (<h1>{post.title.rendered}</h1>);\n};\n")),(0,r.kt)("p",null,"You could ommit the ",(0,r.kt)("inlineCode",{parentName:"p"},"slug")," param by specifing the current path of the page and it will parse the path and extract matched params following the WordPress pretty permalinks convention."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"usePost({ post_type: 'page' }, {}, '/about' );\n")),(0,r.kt)("p",null,"By using the Next.js bindings and following the path catch-all route convention, the URL extraction is automatic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/[...path].js"',title:'"src/pages/[...path].js"'},"import { usePost } from '@10up/headless-next';\n\nconst Page = () => {\n    // slug is automatically injected from the next.js router\n    // if you pass a slug it will override what's coming from the URL\n    const { loading, error, data } = usePost( { post_type: 'page' });\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n\n    return (<h1>{post.title.rendered}</h1>);\n};\n")),(0,r.kt)("p",null,"Then visiting a URL like ",(0,r.kt)("inlineCode",{parentName:"p"},"/about")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/privacy-policy")," will render the contents of the about and privacy policy pages respectively."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The remaining of this section will assume the Next.js versions of the hooks are used. It will also assume the "path" catch-all route conventions are being used.')))}u.isMDXComponent=!0}}]);