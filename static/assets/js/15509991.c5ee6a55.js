"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[1425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={slug:"/getting-started/headless-config",sidebar_position:3},i="Headless Config",a={unversionedId:"Getting Started/headless-config",id:"Getting Started/headless-config",title:"Headless Config",description:"The headless.config.js file contains several config options for 10up's headless framework. This file should export a object of type HeadlessConfig.",source:"@site/documentation/01-Getting Started/headless-config.md",sourceDirName:"01-Getting Started",slug:"/getting-started/headless-config",permalink:"/docs/getting-started/headless-config",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/01-Getting Started/headless-config.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1672859262,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:3,frontMatter:{slug:"/getting-started/headless-config",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setting up the framework from scratch",permalink:"/docs/getting-started/setting-up-manually"},next:{title:"Installing WordPress Plugin",permalink:"/docs/getting-started/installing-wordpress-plugin"}},l={},p=[{value:"sourceUrl",id:"sourceurl",level:2},{value:"useWordPressPlugin",id:"usewordpressplugin",level:2},{value:"hostUrl",id:"hosturl",level:2},{value:"host",id:"host",level:2},{value:"customPostTypes",id:"customposttypes",level:2},{value:"customTaxonomies",id:"customtaxonomies",level:2},{value:"redirectStrategy",id:"redirectstrategy",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"headless-config"},"Headless Config"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"headless.config.js")," file contains several config options for 10up's headless framework. This file should export a object of type ",(0,r.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_core/#headlessconfig"},"HeadlessConfig"),"."),(0,r.kt)("p",null,"Here's a sample config file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,\n    hostUrl: process.env.HOST_URL,\n    customPostTypes: [],\n    customTaxonomies: [],\n    redirectStrategy: '404',\n    useWordPressPlugin: true,\n};\n")),(0,r.kt)("h2",{id:"sourceurl"},"sourceUrl"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceUrl")," option should point to a valid WordPress installation form where the headless site should be sourced to."),(0,r.kt)("h2",{id:"usewordpressplugin"},"useWordPressPlugin"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useWordPressPlugin")," indicates whether the WordPress instance at ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceUrl")," contains the Headless WordPress plugin. While it is possible to use this framework without the plugin, it is strongly recommended to install the WP plugin and set this option to true."),(0,r.kt)("h2",{id:"hosturl"},"hostUrl"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hostUrl")," option should contain the value where the frontend app lives. This would typically be the public domain of the site."),(0,r.kt)("h2",{id:"host"},"host"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," option is automatically inferrered if ",(0,r.kt)("inlineCode",{parentName:"p"},"hostUrl")," is set. You probably don't need to se this option by yourself. The ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," value is used by the multisite feature to match the current site to a site config."),(0,r.kt)("h2",{id:"customposttypes"},"customPostTypes"),(0,r.kt)("p",null,"To add support for custom post types, add your custom post type to the ",(0,r.kt)("inlineCode",{parentName:"p"},"customPostTypes")," setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"headless.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/headless.config.js\nmodule.exports = {\n    sourceUrl: process.env.NEXT_PUBLIC_HEADLESS_WP_URL,\n    hostUrl: process.env.HOST_URL,\n    customPostTypes: [\n        {\n            slug: 'book',\n            endpoint: '/wp-json/wp/v2/book',\n            // these should match your file-system routing\n            single: '/book',\n            archive: '/books',\n        },\n    ],\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"single"),' option is required for properly previwing custom post types when the "single" route is at a different prefix. E.g: ',(0,r.kt)("inlineCode",{parentName:"p"},"/book/da-vince-code")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"/da-vice-code"),"; The framework will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"single")," path to redirect the previewed post to the right path/route."),(0,r.kt)("h2",{id:"customtaxonomies"},"customTaxonomies"),(0,r.kt)("p",null,"To add support for custom taxonomies, add your custom taxonomy to the ",(0,r.kt)("inlineCode",{parentName:"p"},"customTaxonomies")," setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"headless.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/headless.config.js\nmodule.exports = {\n    customPostTypes: [\n        {\n            slug: 'book',\n            endpoint: '/wp-json/wp/v2/book',\n            // these should match your file-system routing\n            single: '/book',\n            archive: '/books',\n        },\n    ],\n    cstomTaxonomies: [\n        // this is just an example\n        { \n            slug: 'genre',\n            endpoint: '/wp-json/wp/v2/genre',\n            postType: ['book'],\n        },\n    ],\n}\n")),(0,r.kt)("h2",{id:"redirectstrategy"},"redirectStrategy"),(0,r.kt)("p",null,"This option control how redirects are handlded. There are 2 supported methods of handling redirects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"404: If a route 404, the framework will check to see if there's a redirect for that page in WP. If so it performs the redirect. This is the recommended option."),(0,r.kt)("li",{parentName:"ul"},"always: When this option is set, the framework will ",(0,r.kt)("strong",{parentName:"li"},"always")," check for redirects prior to rendering any page. Using this option carefully as it will impact perfomance.")))}u.isMDXComponent=!0}}]);