"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[5148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:1,slug:"/wordpress-integration/multisite"},a="Multisite",o={unversionedId:"WordPress Integration/multisite",id:"WordPress Integration/multisite",title:"Multisite",description:"10up's headless framework has built-in support for WordPress multisite via the sites property in the headless.config.js file. This transforms the Next.js app into a multi-tenant app.",source:"@site/documentation/06-WordPress Integration/multisite.md",sourceDirName:"06-WordPress Integration",slug:"/wordpress-integration/multisite",permalink:"/docs/wordpress-integration/multisite",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/06-WordPress Integration/multisite.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Andr\xe9",lastUpdatedAt:1681349107,formattedLastUpdatedAt:"Apr 13, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/wordpress-integration/multisite"},sidebar:"tutorialSidebar",previous:{title:"Previews",permalink:"/docs/wordpress-integration/previews"},next:{title:"On-demand ISR revalidation",permalink:"/docs/wordpress-integration/revalidate"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Config",id:"config",level:3},{value:"Internationalized routing",id:"internationalized-routing",level:4},{value:"Middleware",id:"middleware",level:3},{value:"Folder structure",id:"folder-structure",level:3},{value:"Creating Routes that target a specific site",id:"creating-routes-that-target-a-specific-site",level:3},{value:"Known Issues",id:"known-issues",level:2}],u={toc:p};function d(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multisite"},"Multisite"),(0,i.kt)("p",null,"10up's headless framework has built-in support for WordPress multisite via the ",(0,i.kt)("inlineCode",{parentName:"p"},"sites")," property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless.config.js")," file. This transforms the Next.js app into a multi-tenant app."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sites")," option allows specifying as many sites you want to connect to your app. Each site must have a ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceUrl")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"hostUrl"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"hostUrl")," will be used to match the current site and ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceUrl")," indicates where content should be sourced from."),(0,i.kt)("p",null,"This feature does not require that all sites belong to the same multisite, you're free to connect the Next.js app to a completely separate WordPress instance, as long as that instance implements what your Next.js app needs."),(0,i.kt)("p",null,"Take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/tree/develop/projects/wp-multisite-nextjs"},"multisite demo project")," to familiarize yourself with the set-up."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("p",null,"The first step is to declare all of your sites in ",(0,i.kt)("inlineCode",{parentName:"p"},"headless.config.js"),". In the example below we're declaring two sites."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Headless Config\n *\n * @type {import('@10up/headless-core').HeadlessConfig}\n */\nmodule.exports = {\n    redirectStrategy: '404',\n    useWordPressPlugin: true,\n\n    sites: [\n        {\n            hostUrl: 'http://site1.localhost:3001',\n            sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,\n\n        },\n        {\n            hostUrl: 'http://site2.localhost:3001',\n            sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_2,\n        },\n    ],\n};\n")),(0,i.kt)("p",null,"In the example above we specify that all sites must use the WordPress plugin and that the redirect strategy should be ",(0,i.kt)("inlineCode",{parentName:"p"},"404"),". Then we're declaring two sites that will respond via the ",(0,i.kt)("a",{parentName:"p",href:"http://site1.localhost:3001"},"http://site1.localhost:3001")," and ",(0,i.kt)("a",{parentName:"p",href:"http://site2.localhost:3001"},"http://site2.localhost:3001")," URLs. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceUrl")," for each comes from an env variable."),(0,i.kt)("p",null,"This means that when we visit ",(0,i.kt)("a",{parentName:"p",href:"http://site1.localhost:3001"},"http://site1.localhost:3001"),", the source URL specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_HEADLESS_WP_URL")," will be used."),(0,i.kt)("h4",{id:"internationalized-routing"},"Internationalized routing"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/i18n-routing"},"Next.js i18n")," feature you can specify the locale in the site's config object and the locale will also be used when matching a site."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Headless Config\n *\n * @type {import('@10up/headless-core').HeadlessConfig}\n */\nmodule.exports = {\n    redirectStrategy: '404',\n    useWordPressPlugin: true,\n\n    sites: [\n        {\n            hostUrl: 'http://site1.localhost:3001',\n            sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,\n            locale: 'en'\n        },\n        {\n            hostUrl: 'http://site1.localhost:3001',\n            sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL_2,\n            locale: 'es'\n        },\n    ],\n};\n")),(0,i.kt)("p",null,"The above config means that ",(0,i.kt)("inlineCode",{parentName:"p"},"http://site1.localhost:3001/en")," will match the first site config and ",(0,i.kt)("inlineCode",{parentName:"p"},"http://site1.localhost:3001/es")," will match the second site config."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": You must declare those locales in Next.js config. See ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/i18n-routing"},"Next.js documentation")," for more information."),(0,i.kt)("p",null,"When using locales make sure to add the locale to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings -> General -> Headless Multisite Locale (optional)"),". This is required for previews and the revalidate handler to work properly since API routes are not localized in Next.js."),(0,i.kt)("p",null,"As an example, the first site config in the example above would need the following settings in WordPress."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin settings Multisite Locale",src:n(9992).Z,width:"759",height:"349"})),(0,i.kt)("h3",{id:"middleware"},"Middleware"),(0,i.kt)("p",null,"Make sure you have the framework's middleware setup at ",(0,i.kt)("inlineCode",{parentName:"p"},"src/middleware.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { AppMiddleware } from '@10up/headless-next/middlewares';\n\nexport const config = {\n    matcher: [\n        /*\n         * Match all paths except for:\n         * 1. /api routes\n         * 2. /_next (Next.js internals)\n         * 3. /fonts (inside /public)\n         * 4. all root files inside /public (e.g. /favicon.ico)\n         */\n        '/((?!api|_next|fonts[\\\\w-]+\\\\.\\\\w+).*)',\n    ],\n};\n\nexport async function middleware(...args) {\n    return AppMiddleware(...args);\n}\n")),(0,i.kt)("h3",{id:"folder-structure"},"Folder structure"),(0,i.kt)("p",null,"Put all of your page routes in ",(0,i.kt)("inlineCode",{parentName:"p"},"_sites/[site]/")," folder with the exception of the following files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"_app.js"),(0,i.kt)("li",{parentName:"ul"},"_document.js"),(0,i.kt)("li",{parentName:"ul"},"404.js"),(0,i.kt)("li",{parentName:"ul"},"500.js"),(0,i.kt)("li",{parentName:"ul"},"api/")),(0,i.kt)("p",null," This should give you a structure similar to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"_sites/\n\u251c\u2500 [site]/\n\u2502  \u251c\u2500 [...path].js\n\u2502  \u251c\u2500 index.js\n_app.js\n_document.js\n404.js\n500.js\napi/\n")),(0,i.kt)("p",null,"With this setup, the framework's middleware will rewrite all requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"_sites/hostName"),". All of the data-fetching hooks will fetch data to the appropriate WordPress instance."),(0,i.kt)("p",null,"This allows you to power all of your sites with the same codebase. This is very useful if you're building sites that support internationalization or if the only thing that changes across sites is the content."),(0,i.kt)("h3",{id:"creating-routes-that-target-a-specific-site"},"Creating Routes that target a specific site"),(0,i.kt)("p",null,"It is possible to create routes specific to each site. To do this simply create a folder for that particular site eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"src/pages/_sites/mysite.com/index.js"),". Then when a user visits ",(0,i.kt)("inlineCode",{parentName:"p"},"mysite.com")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," route file will be used instead of the one in ",(0,i.kt)("inlineCode",{parentName:"p"},"[site]/index.js"),"."),(0,i.kt)("p",null,"This provides a powerful way of powering complex multi-tenant apps that shares a codebase but render completely different pages and layouts."),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"404.js and 500.js are unable to know the current site")),(0,i.kt)("p",null,"At the moment, there's a limitation in Next.js that doesn't allow the ",(0,i.kt)("inlineCode",{parentName:"p"},"404.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"500.js")," pages to know the current site. These two files ",(0,i.kt)("strong",{parentName:"p"},"must")," be in the root of the pages directory and we can't rewrite them. Additionally, they only support ",(0,i.kt)("inlineCode",{parentName:"p"},"getStaticProps")," which means there's no way to know which site you're on in case you need to fetch data specific for that site."),(0,i.kt)("p",null,"If you need to fetch data in ",(0,i.kt)("inlineCode",{parentName:"p"},"404.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"500.js")," there's one workaround but it relies on client-side data-fetching. In ",(0,i.kt)("inlineCode",{parentName:"p"},"_app.js")," do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getSiteByHost } from '@10up/headless-core';\n\n//grab the current site\nconst currentSite = useMemo(() => {\n    if (router.query?.site && !Array.isArray(router.query.site)) {\n        return getSiteByHost(router.query.site, router.locale);\n    }\n\n    // 404.js and 500.js do not have a site query param.\n    if (typeof window !== 'undefined') {\n        return getSiteByHost(window.location.host, router.locale);\n    }\n    return {};\n}, [router]);\n\n// pass it to HeadlessApp to override the current site settings defined by the framework\n// once react hydrates and window is defined, the currentSite will be set for 404 and 500 poages.\n<HeadlessApp settings={currentSite} />\n")))}d.isMDXComponent=!0},9992:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multisite-locale-60d679b73933b2e528aac602efd6e3d6.png"}}]);