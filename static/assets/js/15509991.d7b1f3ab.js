"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[1425],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(o),h=s,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return o?n.createElement(g,a(a({ref:t},u),{},{components:o})):n.createElement(g,a({ref:t},u))}));function g(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},6265:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(7462),s=(o(7294),o(3905));const r={slug:"/getting-started/headless-config",sidebar_position:3},a="Headless Config",i={unversionedId:"Getting Started/headless-config",id:"Getting Started/headless-config",title:"Headless Config",description:"The headless.config.js file contains several config options for 10up's headless framework. This file should export a object of type HeadlessConfig.",source:"@site/documentation/01-Getting Started/headless-config.md",sourceDirName:"01-Getting Started",slug:"/getting-started/headless-config",permalink:"/docs/getting-started/headless-config",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/01-Getting Started/headless-config.md",tags:[],version:"current",lastUpdatedBy:"Udit Desai",lastUpdatedAt:1674089187,formattedLastUpdatedAt:"Jan 19, 2023",sidebarPosition:3,frontMatter:{slug:"/getting-started/headless-config",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up the framework from scratch",permalink:"/docs/getting-started/setting-up-manually"},next:{title:"Installing WordPress Plugin",permalink:"/docs/getting-started/installing-wordpress-plugin"}},l={},p=[{value:"sourceUrl",id:"sourceurl",level:2},{value:"useWordPressPlugin",id:"usewordpressplugin",level:2},{value:"hostUrl",id:"hosturl",level:2},{value:"host",id:"host",level:2},{value:"customPostTypes",id:"customposttypes",level:2},{value:"customTaxonomies",id:"customtaxonomies",level:2},{value:"redirectStrategy",id:"redirectstrategy",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"headless-config"},"Headless Config"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"headless.config.js")," file contains several config options for 10up's headless framework. This file should export a object of type ",(0,s.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core/#headlessconfig"},"HeadlessConfig"),"."),(0,s.kt)("p",null,"Here's a sample config file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="headless.config.js"',title:'"headless.config.js"'},"module.exports = {\n    sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,\n    hostUrl: process.env.HOST_URL,\n    customPostTypes: [],\n    customTaxonomies: [],\n    redirectStrategy: '404',\n    useWordPressPlugin: true,\n};\n")),(0,s.kt)("h2",{id:"sourceurl"},"sourceUrl"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"sourceUrl")," option should point to a valid WordPress installation from where the headless site should be sourced to."),(0,s.kt)("h2",{id:"usewordpressplugin"},"useWordPressPlugin"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"useWordPressPlugin")," indicates whether the WordPress instance at ",(0,s.kt)("inlineCode",{parentName:"p"},"sourceUrl")," contains the Headless WordPress plugin. While it is possible to use this framework without the plugin, it is strongly recommended to install the WP plugin and set this option to true."),(0,s.kt)("h2",{id:"hosturl"},"hostUrl"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"hostUrl")," option should contain the value where the frontend app lives. This would typically be the public domain of the site."),(0,s.kt)("h2",{id:"host"},"host"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"host")," option is automatically inferrered if ",(0,s.kt)("inlineCode",{parentName:"p"},"hostUrl")," is set. You probably don't need to se this option by yourself. The ",(0,s.kt)("inlineCode",{parentName:"p"},"host")," value is used by the multisite feature to match the current site to a site config."),(0,s.kt)("h2",{id:"customposttypes"},"customPostTypes"),(0,s.kt)("p",null,"To add support for custom post types, add your custom post type to the ",(0,s.kt)("inlineCode",{parentName:"p"},"customPostTypes")," setting in ",(0,s.kt)("inlineCode",{parentName:"p"},"headless.config.js"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="headless.config.js"',title:'"headless.config.js"'},"module.exports = {\n    sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,\n    hostUrl: process.env.HOST_URL,\n    customPostTypes: [\n        {\n            slug: 'book',\n            endpoint: '/wp-json/wp/v2/book',\n            // these should match your file-system routing\n            single: '/book',\n            archive: '/books',\n        },\n    ],\n}\n")),(0,s.kt)("p",null,"After adding a custom post type to the config, you will be able to fetch posts from the registered post type via the slug:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"usePost({ postType: ['book'] });\nusePosts({ postType:'book', perPage: 10 });\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"single")," option is required for a number of things that includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'properly previewing custom post types when the "single" route is at a different prefix. E.g: ',(0,s.kt)("inlineCode",{parentName:"li"},"/book/da-vince-code")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"/da-vice-code"),"; In this case, the framework will use the ",(0,s.kt)("inlineCode",{parentName:"li"},"single")," path to redirect the previewed post to the right path/route."),(0,s.kt)("li",{parentName:"ul"},"Matching post path permalinks with the current URL. E.g: when fetching a single custom post type the framework will filter the returned posts to the one that matches the existing URL. Therefore, the framework needs to know the single prefix url for custom post types. This is required to properly handle parent pages that share the same child slug. See ",(0,s.kt)("a",{parentName:"li",href:"/docs/data-fetching/usepost/#post-path-matching"},"post path mapping")," for more info.")),(0,s.kt)("h2",{id:"customtaxonomies"},"customTaxonomies"),(0,s.kt)("p",null,"To add support for custom taxonomies, add your custom taxonomy to the ",(0,s.kt)("inlineCode",{parentName:"p"},"customTaxonomies")," setting in ",(0,s.kt)("inlineCode",{parentName:"p"},"headless.config.js"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="headless.config.js"',title:'"headless.config.js"'},"module.exports = {\n    customPostTypes: [\n        {\n            slug: 'book',\n            endpoint: '/wp-json/wp/v2/book',\n            // these should match your file-system routing\n            single: '/book',\n            archive: '/books',\n        },\n    ],\n    cstomTaxonomies: [\n        { \n            slug: 'genre',\n            endpoint: '/wp-json/wp/v2/genre',\n            postType: ['book'],\n        },\n    ],\n}\n")),(0,s.kt)("p",null,"After adding a custom taxonomy to the config, you will be able to filter posts by the registered taxonomy or fetch terms from it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"usePost({ postType: ['book'], genre: 'action' });\nusePosts({ postType:'book', genre: 'action' perPage: 10 });\nuseTerms({ taxonomy: 'genre' } );\n")),(0,s.kt)("p",null,"Additionally if you have an archive route such as ",(0,s.kt)("inlineCode",{parentName:"p"},"/blog")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/books")," filtering for all registered taxonomies works out of the box. For instance, take the headless config above the following page route:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/pages/books/[[...path]].js",title:"src/pages/books/[[...path]].js"},"import { usePosts} from '@10up/headless-next';\nconst BooksPage = () => {\n    const { data, error, loading } = usePosts({postType: 'book'});\n\n    if (error) {\n        return 'error';\n    }\n\n    if (loading) {\n        return 'Loading...';\n    }\n\n    return (\n        <ul>\n            {data.posts.map((post) => (\n                <li key={post.id}>{post.title.rendered}</li>\n            ))}\n        </ul>\n    );\n};\n\nexport default BooksPage;\n")),(0,s.kt)("p",null,"This route would automatically handle the following URLs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"/books -> list latest books"),(0,s.kt)("li",{parentName:"ul"},"/books/page/x -> paginate books"),(0,s.kt)("li",{parentName:"ul"},"/books/genre/genre-name -> filter books by genre"),(0,s.kt)("li",{parentName:"ul"},"/books/genre/genre-name/page/2 -> paginate books filtered by genre")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"The code snippet above does not implement pre-fetching, which you probably want to. Check out the ",(0,s.kt)("a",{parentName:"p",href:"/docs/data-fetching/prefetching"},"pre-fetching docs")," for instructions.")),(0,s.kt)("h2",{id:"redirectstrategy"},"redirectStrategy"),(0,s.kt)("p",null,"This option control how redirects are handlded. There are 2 supported methods of handling redirects."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"404: If a route 404, the framework will check to see if there's a redirect for that page in WP. If so it performs the redirect. This is the recommended option."),(0,s.kt)("li",{parentName:"ul"},"always: When this option is set, the framework will ",(0,s.kt)("strong",{parentName:"li"},"always")," check for redirects prior to rendering any page. Using this option carefully as it will impact perfomance.")))}d.isMDXComponent=!0}}]);