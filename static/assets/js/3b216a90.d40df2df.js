"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[8989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=h(a),d=o,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||n;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var h=2;h<n;h++)s[h]=a[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var r=a(7462),o=(a(7294),a(3905));const n={slug:"/getting-started/quick-tutorial"},s="Quick Introduction to the Framework",i={unversionedId:"Getting Started/quick-tutorial",id:"Getting Started/quick-tutorial",title:"Quick Introduction to the Framework",description:"Introduction",source:"@site/documentation/01-Getting Started/quick-tutorial.md",sourceDirName:"01-Getting Started",slug:"/getting-started/quick-tutorial",permalink:"/docs/getting-started/quick-tutorial",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/01-Getting Started/quick-tutorial.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Oliveira",lastUpdatedAt:1672925351,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{slug:"/getting-started/quick-tutorial"},sidebar:"tutorialSidebar",previous:{title:"Installing WordPress Plugin",permalink:"/docs/getting-started/installing-wordpress-plugin"},next:{title:"Data Fetching",permalink:"/docs/data-fetching"}},l={},h=[{value:"Introduction",id:"introduction",level:2},{value:"How Routing Works",id:"how-routing-works",level:2},{value:"Basic Data Fetching",id:"basic-data-fetching",level:3},{value:"Main Query, Queried Object, and SEO handling.",id:"main-query-queried-object-and-seo-handling",level:2},{value:"Should you handle loading/error states on the client?",id:"should-you-handle-loadingerror-states-on-the-client",level:2}],p={toc:h};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-introduction-to-the-framework"},"Quick Introduction to the Framework"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"If you\u2019re familiar with Next.js you probably already know that it has a file-system-based router. The routes are declared under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages")," folder. To learn more about Next.js routing, read the ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/routing/introduction"},"official docs"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," folder is currently not supported in 10up's headless framework. Support for new Next.js 13 features are underway.")),(0,o.kt)("p",null,"The headless framework takes advantage of Next.js routing by leveraging a feature called \u201ccatch-all routes\u201d which allows the framework to automatically map URL segments to WordPress routes and the proper REST API parameters necessary to fetch the appropriate data. It does so by adopting a convention of using a \u201ccatch-all\u201d route named ",(0,o.kt)("inlineCode",{parentName:"p"},"[...path].js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"[[...path]].js"),"."),(0,o.kt)("h2",{id:"how-routing-works"},"How Routing Works"),(0,o.kt)("p",null,"To understand how routing works in the headless framework, let\u2019s take a look at the route in the starter project (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/develop/projects/wp-nextjs/src/pages/%5B...path%5D.js"},"src/pages/[...path].js"),") that corresponds to a single post/page template (single.php) in WordPress."),(0,o.kt)("p",null,"First, note that it is using single brackets and not double brackets. That is because we only want to \u201ccatch\u201d that route if no other top-level route is matched (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js"),"). Therefore, any route in the form of /post-name or /2022/10/1 will match ",(0,o.kt)("inlineCode",{parentName:"p"},"src/[...path].js"),". You can confirm this by opening any post by either the /post-name route or the date route depending on how your permalinks settings are set up in WordPress E.g:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://headless-framework.vercel.app/2020/05/07/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam"},"https://headless-framework.vercel.app/2020/05/07/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://headless-framework.vercel.app/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam"},"https://headless-framework.vercel.app/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam"))),(0,o.kt)("p",null,"The great thing about this is that you don\u2019t need multiple Next.js routes to handle the same resource!"),(0,o.kt)("h3",{id:"basic-data-fetching"},"Basic Data Fetching"),(0,o.kt)("p",null,"Now let\u2019s look at how data fetching for this route works. To make things easier to understand, let\u2019s disregard ",(0,o.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/params.js"',title:'"src/params.js"'},"/**\n * @type {import('@10up/headless-core').PostParams}\n */\nexport const singleParams = { postType: ['page', 'post'] };\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/[...path].js"',title:'"src/pages/[...path].js"'},"const SinglePostsPage = () => {\n    const { loading, error } = usePost(singleParams);\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <PageContent params={singleParams} />\n        </div>\n    );\n};\n")),(0,o.kt)("p",null,"At this point, page is not rendered on the server (or at build time) at all. Therefore this route is behaving like a single page application."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"usePost"),' hook is one of the framework data-fetching hooks. As its name suggests it fetches a single post for a given set of params. We\u2019re passing one param called \u201cpostType", which is telling the hook to fetch the current page from either the \u201cpage\u201d or \u201cpost\u201d post type. Note that we\u2019re not passing the slug. Passing the slug is optional and if don\u2019t pass the slug, the framework will automatically extract the post/page slug from the URL, if present.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Extracting the ",(0,o.kt)("em",{parentName:"p"},"slug")," from the url ",(0,o.kt)("strong",{parentName:"p"},"only")," works when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"[...path].js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"[[...path]].js "),"catch-all route style.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SPA Data Fetching",src:a(3832).Z,width:"1900",height:"817"})),(0,o.kt)("p",null,"Without server-side data fetching, the experience gets clunky and web vitals are greatly affected to as there will be a high CLS. SEO is also affected since there is no actual content or SEO meta tags until the browser fetches the data."),(0,o.kt)("p",null,"The framework data fetching layer is \u201cisomorphic\u201d, you start with client-side data fetching then opt-in for data that must be pre-fetched on the server. There are a few benefits of this approach:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It\u2019s possible to easily switch between pre-fetched and non-prefetched data"),(0,o.kt)("li",{parentName:"ul"},"You can pre-fetch on the server and re-fetch on the client, for instance, you might want to re-fetch a \u201cmost recent posts\u201d block on the homepage."),(0,o.kt)("li",{parentName:"ul"},"Mitigate prop-drilling, no need to pass a post props to every component as you can simply call the custom hooks (as long as the params match what\u2019s being queried for).")),(0,o.kt)("p",null,"It is important to note that ",(0,o.kt)("strong",{parentName:"p"},"you should always pre-fetch on the server the \u201cmain query\u201d and/or the \u201ccore\u201d data for a page in a headless site"),". That\u2019s what we\u2019ll do next! Keep the getStaticPaths commented out and uncomment getStaticProps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/[...path].js"',title:'"src/pages/[...path].js"'},"export async function getStaticProps(context) {\n    try {\n\n        const settledPromises = await resolveBatch([\n            {\n                func: fetchHookData(usePost.fetcher(), context, { params: singleParams }),\n            },\n            { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },\n        ]);\n\n        return addHookData(settledPromises, { revalidate: 5 * 60 });\n    } catch (e) {\n        return handleError(e, context);\n    }\n}\n")),(0,o.kt)("p",null,"getStaticProps is a Next.js method used when you want to pre-render a page on the server at build time or ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"},"on-demand via ISR"),"."),(0,o.kt)("p",null,"To enable pre-rendering of this route all we need to do is pre-fetch all of the data needed for the framework\u2019s custom hooks. There are two hooks we need to pre-fetch data for: usePost and useAppSettings. useAppSettings is responsible for fetching general settings and menu data. The Nav.js component depends on useAppSettings and if we don\u2019t pre-fetch data for it, the menu will be fetched on the client side only."),(0,o.kt)("p",null,"The function responsible for pre-fetching data is ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchHookData"),". It accepts the following params:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A fetcher strategy that you can get via usePost.fetcher()"),(0,o.kt)("li",{parentName:"ul"},"The next.js context. It is used to extract parameters from the URL among other things."),(0,o.kt)("li",{parentName:"ul"},"An object containing the params. The params must match the params being used by the hooks, otherwise, there will be a key mismatch and data would be pre-fetched for the wrong set of params.")),(0,o.kt)("p",null,"The resolveBatch function is just a utility function that lets you run multiple promises in parallel and select which ones you don\u2019t want to throw errors for. In this case, we\u2019re ignoring the error potentially thrown by useAppSettings.fetcher() the reason being that this hook requires the Headless WordPress plugin, and therefore disabling that plugin would cause a crash on the site if we don\u2019t ignore error throws by useAppSettings.fetcher(). Ultimately, it is up to your to decide how to handle errors, we just give you the tools to make your job easier."),(0,o.kt)("p",null,"Next, we have the addHookData function which expects an array of \u201chook data\u201d (i.e pre-fetched data for the custom hooks returned by fetchHookData). The addHookData will simply put the results on the cache and hydrate the custom hook with pre-fetched data. The second params is an object that represents the Next.js props you can return from getStaticProps or getServerSideProps."),(0,o.kt)("p",null,"If anything fails, we call the handleError function which provides standard error handling such as rendering a 404 page if a page is not found and optionally handling redirects (if redirect strategy is set to 404 in headless.config.js)."),(0,o.kt)("p",null,"Lastly, the getStaticPaths will return an array of paths that should be pre-rendered at build time. This should only be used in conjunction with getStaticProps. Note that the framework doesn\u2019t force getStaticProps you can use getServerSideProps (especially if your hosting doesn\u2019t provide good support for ISR)."),(0,o.kt)("p",null,"One benefit of pre-rendering (a subset of your pages) at build time is that it can catch a lot of runtime issues since undefined/type errors among others would be caught at build time in your CI."),(0,o.kt)("h2",{id:"main-query-queried-object-and-seo-handling"},"Main Query, Queried Object, and SEO handling."),(0,o.kt)("p",null,"At this point, you might be wondering how the framework handles SEO integration. It does so by using the yoast_head_json object added by the Yoast plugin to every resource in the REST API. It works for both single pages and archive pages. The yoast_head_json from either the main query or the queried object is used to populate the page\u2019s meta tags."),(0,o.kt)("p",null,"The \u201cMain Query\u201d is the query that draws parameters from the URL. For example, in src/pages/","[...path]",".js, the usePost is the main query since it extracts parameters from the URL. Therefore the yoast_head_json associated with the resource returned by usePost is used to populate the page\u2019s SEO meta tags. This allows for additional data to be fetched with other custom hooks without messing with the SEO meta tags for the page."),(0,o.kt)("p",null,"For instance, you might want to display an array of related posts at the bottom of the single post template, since this doesn\u2019t represent the \u201cmain query\u201d of the page it won\u2019t be used to populate the page\u2019s SEO meta tags."),(0,o.kt)("p",null,"There\u2019s also the concept of \u201cqueried object\u201d which is very similar to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/get_queried_object/"},"get_queried_object()")," function in WP. It returns the resource that is being \u201cqueried for\u201d. For instance, in a category archive page, the queried object represents the category that\u2019s being queried for."),(0,o.kt)("p",null,"Let\u2019s take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/develop/projects/wp-nextjs/src/pages/category/%5B...path%5D.js"},"src/pages/category/[...path].js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/category/[...path].js"',title:'"src/pages/category/[...path].js"'},"const CategoryPage = () => {\n    const { data } = usePosts({ taxonomy: 'category' });\n\n    return (\n        <>\n            <h1>Category Page: {data.queriedObject.term.name}</h1>\n            <ul>\n                {data.posts.map((post) => (\n                    <li key={post.id}>\n                        <Link href={post.link}>{post.title.rendered}</Link>\n                    </li>\n                ))}\n            </ul>\n            <Pagination pageInfo={data.pageInfo} />\n        </>\n    );\n};\n")),(0,o.kt)("p",null,"In this route, we\u2019re fetching a list of posts that belong to the category taxonomy. Note that again, we\u2019re not passing the category slug, it\u2019s automatically inferred by the framework."),(0,o.kt)("p",null,"Since we\u2019re querying posts that belong to a specific category, data.queriedObject is available with a term object representing the queried category. You will note that this route follows the same \u201cpattern\u201d from src/","[...path]",".js."),(0,o.kt)("p",null,"Take some time to review the other routes, did you spot the pattern?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetch data on the client using the framework\u2019s custom hooks"),(0,o.kt)("li",{parentName:"ul"},"Pre-fetch the data on the server matching the params object.")),(0,o.kt)("h2",{id:"should-you-handle-loadingerror-states-on-the-client"},"Should you handle loading/error states on the client?"),(0,o.kt)("p",null,"As you might have noticed, the category route is not handling errors and loading states on the client. Therefore it assumes the data will always be pre-fetched on the server. If you remove  ",(0,o.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),", you will see the following error."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"data-error",src:a(5380).Z,width:"1016",height:"479"})),(0,o.kt)("p",null,"At 10up, we strongly believe that a great developer experience increases developer productivity! Therefore the framework will try to help you, the developer, as much as it can."),(0,o.kt)("p",null,"In this case, it \u201cdetects\u201d that you\u2019re trying to access something that\u2019s returned by the custom hook but is not yet available. As the error message suggests, you need to either handle the loading/error states or pre-fetch the data on the server. We didn\u2019t see this error on the single post route because loading/error states are being handled on that route!"),(0,o.kt)("p",null,"So as long as you\u2019re pre-fetching data on the server you do not need to handle loading/error states on the client."),(0,o.kt)("p",null,"One way to make things more consistent and your code more resilient without directly handling loading states is by using Suspense, however, that is not fully supported in Next.js and the framework itself (but it will!)."))}u.isMDXComponent=!0},5380:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/error-3ed1849400bc19eb2faa27512eef44c7.png"},3832:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spa-data-fetching-1-57ac198c0190058bf0a30abfa7ccd060.gif"}}]);