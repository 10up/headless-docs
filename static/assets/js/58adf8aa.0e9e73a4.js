"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[3133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7670:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Rendering Custom Blocks",sidebar_position:1,slug:"/gutenberg/rendering-custom-blocks"},i="Rendering Custom Blocks",s={unversionedId:"Gutenberg/rendering-custom-blocks",id:"Gutenberg/rendering-custom-blocks",title:"Rendering Custom Blocks",description:"Custom Blocks can be handled in a very similar way. If you need to render your custom block as a react component you should make sure that the block exposes its data via the markup. You can do so by appending additional data to the data-wp-block-attrs attribute or serializing the data needed inside the block. We\u2019ll explore these approaches in a future post after we set up a dedicated WP backend for this project.",source:"@site/documentation/05-Gutenberg/rendering-custom-blocks.md",sourceDirName:"05-Gutenberg",slug:"/gutenberg/rendering-custom-blocks",permalink:"/docs/gutenberg/rendering-custom-blocks",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/05-Gutenberg/rendering-custom-blocks.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Oliveira",lastUpdatedAt:1671555755,formattedLastUpdatedAt:"Dec 20, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Rendering Custom Blocks",sidebar_position:1,slug:"/gutenberg/rendering-custom-blocks"},sidebar:"tutorialSidebar",previous:{title:"Rendering Blocks",permalink:"/docs/gutenberg/rendering-blocks"},next:{title:"Rendering Blocks in React Native",permalink:"/docs/gutenberg/rendering-blocks-io-ract-native"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rendering-custom-blocks"},"Rendering Custom Blocks"),(0,o.kt)("p",null,"Custom Blocks can be handled in a very similar way. If you need to render your custom block as a react component you should make sure that the block exposes its data via the markup. You can do so by appending additional data to the data-wp-block-attrs attribute or serializing the data needed inside the block. We\u2019ll explore these approaches in a future post after we set up a dedicated WP backend for this project."))}d.isMDXComponent=!0}}]);