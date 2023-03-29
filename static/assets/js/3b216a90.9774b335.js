"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[8989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(g,s(s({ref:t},h),{},{components:a})):n.createElement(g,s({ref:t},h))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"/getting-started/quick-tutorial"},s="Quick Introduction to the Framework",i={unversionedId:"Getting Started/quick-tutorial",id:"Getting Started/quick-tutorial",title:"Quick Introduction to the Framework",description:"Introduction",source:"@site/documentation/01-Getting Started/quick-tutorial.md",sourceDirName:"01-Getting Started",slug:"/getting-started/quick-tutorial",permalink:"/docs/getting-started/quick-tutorial",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/01-Getting Started/quick-tutorial.md",tags:[],version:"current",lastUpdatedBy:"Eduardo Campa\xf1a",lastUpdatedAt:1680099917,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{slug:"/getting-started/quick-tutorial"},sidebar:"tutorialSidebar",previous:{title:"Installing WordPress Plugin",permalink:"/docs/getting-started/installing-wordpress-plugin"},next:{title:"Introduction",permalink:"/docs/data-fetching"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How Routing Works",id:"how-routing-works",level:2},{value:"Basic Data Fetching",id:"basic-data-fetching",level:3},{value:"Main Query, Queried Object, and SEO handling.",id:"main-query-queried-object-and-seo-handling",level:2},{value:"Should you handle loading/error states on the client?",id:"should-you-handle-loadingerror-states-on-the-client",level:2}],h={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-introduction-to-the-framework"},"Quick Introduction to the Framework"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"If you\u2019re familiar with Next.js you probably already know that it has a file-system-based router. The routes are declared under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages")," folder. To learn more about Next.js routing, read the ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/routing/introduction"},"official docs"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," folder is currently not supported in 10up's headless framework. Support for new Next.js 13 features are underway.")),(0,r.kt)("p",null,"The headless framework takes advantage of Next.js routing by leveraging a feature called \u201ccatch-all routes\u201d which allows the framework to automatically map URL segments to WordPress routes and the proper REST API parameters necessary to fetch the appropriate data. It does so by adopting a convention of using a \u201ccatch-all\u201d route named ",(0,r.kt)("inlineCode",{parentName:"p"},"[...path].js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...path]].js"),"."),(0,r.kt)("h2",{id:"how-routing-works"},"How Routing Works"),(0,r.kt)("p",null,"To understand how routing works in the headless framework, let\u2019s take a look at the route in the starter project (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/develop/projects/wp-nextjs/src/pages/%5B...path%5D.js"},"src/pages/[...path].js"),") that corresponds to a single post/page template (single.php) in WordPress."),(0,r.kt)("p",null,"First, note that it is using single brackets and not double brackets. That is because we only want to \u201ccatch\u201d that route if no other top-level route is matched (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"). Therefore, any route in the form of /post-name or /2022/10/1 will match ",(0,r.kt)("inlineCode",{parentName:"p"},"src/[...path].js"),". You can confirm this by opening any post by either the /post-name route or the date route depending on how your permalinks settings are set up in WordPress E.g:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://headless-framework.vercel.app/2020/05/07/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam"},"https://headless-framework.vercel.app/2020/05/07/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://headless-framework.vercel.app/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam"},"https://headless-framework.vercel.app/distinctio-rerum-ratione-maxime-repudiandae-laboriosam-quam"))),(0,r.kt)("p",null,"The great thing about this is that you don\u2019t need multiple Next.js routes to handle the same resource!"),(0,r.kt)("h3",{id:"basic-data-fetching"},"Basic Data Fetching"),(0,r.kt)("p",null,"Now let\u2019s look at how data fetching for this route works. To make things easier to understand, let\u2019s disregard ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/params.js"',title:'"src/params.js"'},"/**\n * @type {import('@10up/headless-core').PostParams}\n */\nexport const singleParams = { postType: ['page', 'post'] };\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/[...path].js"',title:'"src/pages/[...path].js"'},"import { usePost } from '@10up/headless-next';\n\nconst SinglePostsPage = () => {\n    const { loading, error } = usePost(singleParams);\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    if (error) {\n        return 'error...';\n    }\n\n    return (\n        <div>\n            <PageContent params={singleParams} />\n        </div>\n    );\n};\n")),(0,r.kt)("p",null,"At this point, the page is not rendered on the server (or at build time) at all. Therefore this route is behaving like a single-page application."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"usePost")," hook is one of the framework's data-fetching hooks. As its name suggests it fetches a single post for a given set of params. We\u2019re passing one param called ",(0,r.kt)("inlineCode",{parentName:"p"},"postType"),', which is telling the hook to fetch the current page from either the "page" or "post" post type. Note that we\'re not passing the slug. Passing the slug is optional and if you don\'t pass the slug, the framework will automatically extract the post/page slug from the URL, if present.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extracting the ",(0,r.kt)("em",{parentName:"p"},"slug")," from the url ",(0,r.kt)("strong",{parentName:"p"},"only")," works when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[...path].js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[[...path]].js "),"catch-all route style.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SPA Data Fetching",src:a(3832).Z,width:"1900",height:"817"})),(0,r.kt)("p",null,"Without server-side data fetching, the experience gets clunky and web vitals are greatly affected as there will be a high CLS. SEO is also affected since there is no content or SEO meta tags until the browser fetches the data."),(0,r.kt)("p",null,"The framework data fetching layer is \u201cisomorphic\u201d, you start with client-side data fetching and then opt-in for data that must be pre-fetched on the server. There are a few benefits of this approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It\u2019s possible to easily switch between pre-fetched and non-prefetched data"),(0,r.kt)("li",{parentName:"ul"},'You can pre-fetch on the server and re-fetch on the client, for instance, you might want to re-fetch the "most recent posts" block on the homepage.'),(0,r.kt)("li",{parentName:"ul"},"Mitigate prop-drilling, no need to pass post props to every component as you can simply call the custom hooks (as long as the params match what's being queried for).")),(0,r.kt)("p",null,"It is important to note that ",(0,r.kt)("strong",{parentName:"p"},"you should always pre-fetch on the server the \u201cmain query\u201d and/or the \u201ccore\u201d data for a page in a headless site"),". That\u2019s what we\u2019ll do next! Keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," function commented out and uncomment ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/[...path].js"',title:'"src/pages/[...path].js"'},"export async function getStaticProps(context) {\n    try {\n\n        const settledPromises = await resolveBatch([\n            {\n                func: fetchHookData(usePost.fetcher(), context, { params: singleParams }),\n            },\n            { func: fetchHookData(useAppSettings.fetcher(), context), throw: false },\n        ]);\n\n        return addHookData(settledPromises, { revalidate: 5 * 60 });\n    } catch (e) {\n        return handleError(e, context);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," is a Next.js method used when you want to pre-render a page on the server at build time or ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"},"on-demand via ISR"),"."),(0,r.kt)("p",null,"To enable pre-rendering of this route all we need to do is pre-fetch all of the data needed for the framework\u2019s custom hooks. There are two hooks we need to pre-fetch data for, ",(0,r.kt)("inlineCode",{parentName:"p"},"usePost")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppSettings"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppSettings")," hook is responsible for fetching general settings and menu data. The Nav.js component depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppSettings")," and if we don\u2019t pre-fetch data for it, the menu will be fetched on the client side only."),(0,r.kt)("p",null,"The function responsible for pre-fetching data is ",(0,r.kt)("inlineCode",{parentName:"p"},"fetchHookData"),". It accepts the following params:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A fetcher strategy that you can get via ",(0,r.kt)("inlineCode",{parentName:"li"},"usePost.fetcher()")),(0,r.kt)("li",{parentName:"ul"},"The next.js context. It is used to extract parameters from the URL among other things."),(0,r.kt)("li",{parentName:"ul"},"An object containing the params. The params must match the params being used by the hooks, otherwise, there will be a key mismatch and data would be pre-fetched for the wrong set of params.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveBatch")," function is just a utility function that lets you run multiple promises in parallel and select which ones you don\u2019t want to throw errors for. In this case, we\u2019re ignoring the error potentially thrown by ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppSettings.fetcher()")," the reason being that this hook requires the Headless WordPress plugin, and therefore disabling that plugin would cause a crash on the site if we don\u2019t ignore errors thrown by ",(0,r.kt)("inlineCode",{parentName:"p"},"useAppSettings.fetcher()"),". Ultimately, it is up to your to decide how to handle errors, we just give you the tools to make your job easier."),(0,r.kt)("p",null,"Next, we have the ",(0,r.kt)("inlineCode",{parentName:"p"},"addHookData"),' function which expects an array of "hook data" (i.e pre-fetched data for the custom hooks returned by ',(0,r.kt)("inlineCode",{parentName:"p"},"fetchHookData"),"). The ",(0,r.kt)("inlineCode",{parentName:"p"},"addHookData")," will simply put the results on the cache and hydrate the custom hook with pre-fetched data. The second param is an object that represents the Next.js props you can return from ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,r.kt)("p",null,"If anything fails, we call the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleError")," function which provides standard error handling such as rendering a 404 page if a page is not found and optionally handling redirects (if the redirect strategy is set to 404 in headless.config.js)."),(0,r.kt)("p",null,"Lastly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticPaths")," will return an array of paths that should be pre-rendered at build time. This should only be used in conjunction with getStaticProps. Note that the framework doesn\u2019t force getStaticProps you can use getServerSideProps (especially if your hosting doesn\u2019t provide good support for ISR)."),(0,r.kt)("p",null,"One benefit of pre-rendering (a subset of your pages) at build time is that it can catch a lot of runtime issues since undefined/type errors among others would be caught at build time in your CI."),(0,r.kt)("h2",{id:"main-query-queried-object-and-seo-handling"},"Main Query, Queried Object, and SEO handling."),(0,r.kt)("p",null,"At this point, you might be wondering how the framework handles SEO integration. It does so by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"yoast_head")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"yoast_head_json")," object) added by the Yoast plugin to every resource in the REST API. It works for both single pages and archive pages. The ",(0,r.kt)("inlineCode",{parentName:"p"},"yoast_head_json")," from either the main query or the queried object is used to populate the page\u2019s meta tags."),(0,r.kt)("p",null,'The "Main Query" is the query that draws parameters from the URL. For example, in ',(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/[...path].js"),", the usePost is the main query since it extracts parameters from the URL. Therefore the yoast_head_json associated with the resource returned by usePost is used to populate the page's SEO meta tags. This allows for additional data to be fetched with other custom hooks without messing with the SEO meta tags for the page."),(0,r.kt)("p",null,'For instance, you might want to display an array of related posts at the bottom of the single post template, since this doesn\u2019t represent the "main query" of the page it won\u2019t be used to populate the page\'s SEO meta tags.'),(0,r.kt)("p",null,'There\u2019s also the concept of "queried object" which is very similar to ',(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/get_queried_object/"},"get_queried_object()"),' function in WP. It returns the resource that is being "queried for". For instance, in a category archive page, the queried object represents the category that\'s being queried for.'),(0,r.kt)("p",null,"Let's take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/develop/projects/wp-nextjs/src/pages/category/%5B...path%5D.js"},"src/pages/category/[...path].js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/pages/category/[...path].js"',title:'"src/pages/category/[...path].js"'},"import { usePosts } from '@10up/headless-next';\n\nconst CategoryPage = () => {\n    const { data } = usePosts({ taxonomy: 'category' });\n\n    return (\n        <>\n            <h1>Category Page: {data.queriedObject.term.name}</h1>\n            <ul>\n                {data.posts.map((post) => (\n                    <li key={post.id}>\n                        <Link href={post.link}>{post.title.rendered}</Link>\n                    </li>\n                ))}\n            </ul>\n            <Pagination pageInfo={data.pageInfo} />\n        </>\n    );\n};\n")),(0,r.kt)("p",null,"In this route, we're fetching a list of posts that belong to the category taxonomy. Note that again, we're not passing the category slug, it\u2019s automatically inferred by the framework."),(0,r.kt)("p",null,"Since we\u2019re querying posts that belong to a specific category, ",(0,r.kt)("inlineCode",{parentName:"p"},"data.queriedObject"),' is available with a term object representing the queried category. You will note that this route follows the same "pattern" from ',(0,r.kt)("inlineCode",{parentName:"p"},"src/[...path].js"),"."),(0,r.kt)("p",null,"Take some time to review the other routes, did you spot the pattern?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetch data on the client using the framework\u2019s custom hooks"),(0,r.kt)("li",{parentName:"ul"},"Pre-fetch the data on the server matching the params object.")),(0,r.kt)("h2",{id:"should-you-handle-loadingerror-states-on-the-client"},"Should you handle loading/error states on the client?"),(0,r.kt)("p",null,"As you might have noticed, the category route is not handling errors and loading states on the client. Therefore it assumes the data will always be pre-fetched on the server. If you remove ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),", you will see the following error."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"data-error",src:a(5380).Z,width:"1016",height:"479"})),(0,r.kt)("p",null,"At 10up, we strongly believe that a great developer experience increases developer productivity! Therefore the framework will try to help you, the developer, as much as it can."),(0,r.kt)("p",null,"In this case, it \"detects\" that you\u2019re trying to access something that's returned by the custom hook but is not yet available. As the error message suggests, you need to either handle the loading/error states or pre-fetch the data on the server. We didn't see this error on the single post route because loading/error states are being handled on that route!"),(0,r.kt)("p",null,"So as long as you're pre-fetching data on the server you do not need to handle loading/error states on the client."),(0,r.kt)("p",null,"One way to make things more consistent and your code more resilient without directly handling loading states is by using Suspense, however, that is not fully supported in Next.js and the framework itself (but it will!)."))}d.isMDXComponent=!0},5380:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/error-3ed1849400bc19eb2faa27512eef44c7.png"},3832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spa-data-fetching-1-57ac198c0190058bf0a30abfa7ccd060.gif"}}]);