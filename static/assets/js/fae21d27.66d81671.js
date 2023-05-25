"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[2179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,w=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(w,i(i({ref:t},u),{},{components:r})):n.createElement(w,i({ref:t},u))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={slug:"/wordpress-integration/feeds"},i="Feeds",s={unversionedId:"WordPress Integration/feeds",id:"WordPress Integration/feeds",title:"Feeds",description:"Feeds are proxied via Next.js rewrites by default. meaning that you can directly access the feed via your front-end/Next.js URL.",source:"@site/documentation/06-WordPress Integration/feeds.md",sourceDirName:"06-WordPress Integration",slug:"/wordpress-integration/feeds",permalink:"/learn/wordpress-integration/feeds",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/06-WordPress Integration/feeds.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Oliveira",lastUpdatedAt:1685019150,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{slug:"/wordpress-integration/feeds"},sidebar:"tutorialSidebar",previous:{title:"On-demand ISR revalidation",permalink:"/learn/wordpress-integration/revalidate"},next:{title:"Polylang Integration",permalink:"/learn/wordpress-integration/polylang"}},l={},d=[{value:"Filtering when to rewrite URLs",id:"filtering-when-to-rewrite-urls",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feeds"},"Feeds"),(0,a.kt)("p",null,"Feeds are proxied via Next.js rewrites by default. meaning that you can directly access the feed via your front-end/Next.js URL."),(0,a.kt)("p",null,"If you have the plugin enabled, the URLs in the feed will also be rewritten to use front-end URLs. URLs are only rewritten if ",(0,a.kt)("inlineCode",{parentName:"p"},"?rewrite_urls=1")," is passed to a feed URL (which the framework does automatically). The following is the default rewrite rule set by the framework in Next.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    source: `${prefix}/feed`,\n    destination: `${wpUrl}/feed/?rewrite_urls=1`,\n},\n")),(0,a.kt)("p",null,"Therefore, accessing the feed from your WordPress domain will display the WP URLs unless you pass ",(0,a.kt)("inlineCode",{parentName:"p"},"?rewrite_urls=1"),"."),(0,a.kt)("h2",{id:"filtering-when-to-rewrite-urls"},"Filtering when to rewrite URLs"),(0,a.kt)("p",null,"If you want to better control when feed URLs are rewritten there's a filter called ",(0,a.kt)("inlineCode",{parentName:"p"},"tenup_headless_wp_should_rewrite_feed_urls"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Filter's out whether feed urls should be rewritten\n *\n * @param boolean $rewrite_urls Whether the current request should rewrite_urls\n */\nreturn apply_filters( 'tenup_headless_wp_should_rewrite_feed_urls', (bool) $rewrite_urls );\n")),(0,a.kt)("p",null,"You could use this to always enable rewriting the feed URLs or to use a different query param to enable URL rewrites in the feed."))}p.isMDXComponent=!0}}]);