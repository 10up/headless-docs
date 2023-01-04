"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[4015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={slug:"/getting-started/installing-wordpress-plugin",sidebar_position:4},a="Installing WordPress Plugin",s={unversionedId:"Getting Started/wordpress-plugin",id:"Getting Started/wordpress-plugin",title:"Installing WordPress Plugin",description:"The WordPress plugin currently lives in a private Github Repo. Make sure you have access to this repo before continuing.",source:"@site/documentation/01-Getting Started/wordpress-plugin.md",sourceDirName:"01-Getting Started",slug:"/getting-started/installing-wordpress-plugin",permalink:"/docs/getting-started/installing-wordpress-plugin",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/01-Getting Started/wordpress-plugin.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1672859262,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:4,frontMatter:{slug:"/getting-started/installing-wordpress-plugin",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Headless Config",permalink:"/docs/getting-started/headless-config"},next:{title:"Quick Introduction to the Framework",permalink:"/docs/getting-started/quick-tutorial"}},l={},p=[{value:"Composer Installation (Recommended)",id:"composer-installation-recommended",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Enter the front-end site URL.",id:"enter-the-front-end-site-url",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-wordpress-plugin"},"Installing WordPress Plugin"),(0,i.kt)("p",null,"The WordPress plugin currently lives in a private Github Repo. Make sure you have access to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/10up/tenup-headless-wp-plugin"},"this repo")," before continuing."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We're in the process of open sourcing the Headless Framework, once this process is complete it will be possible to install the WordPress plugin from ",(0,i.kt)("a",{parentName:"p",href:"https://wpackagist.org/"},"wpackagist"),".")),(0,i.kt)("h2",{id:"composer-installation-recommended"},"Composer Installation (Recommended)"),(0,i.kt)("p",null,"Add the plugin's github repository to to your ",(0,i.kt)("inlineCode",{parentName:"p"},"composer.json")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "your-project-name",\n    "minimum-stability": "dev",\n    "repositories": [\n        {\n            "type": "vcs",\n            "url": "git@github.com:10up/tenup-headless-wp-plugin.git"\n        }\n    ],\n    "require": {\n        "10up/tenup-headless-wp": "dev-develop",\n    },\n    "extra": {\n        "installer-paths": {\n            "plugins/{$name}/": [\n                "type:wordpress-plugin"\n            ]\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"composer install")," and activate the pluginb."),(0,i.kt)("h2",{id:"manual-install"},"Manual install"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/10up/tenup-headless-wp-plugin/archive/refs/heads/develop.zip"},"Download the plugin's zip file"),", manually move it to ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-content/plugins")," and activate the plugin."),(0,i.kt)("h2",{id:"enter-the-front-end-site-url"},"Enter the front-end site URL."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings -> General"),' and scroll down until you find the "Headless Frontend URL" and enter the URL for the Headless site.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Plugin settings",src:n(8925).Z,width:"835",height:"366"})))}d.isMDXComponent=!0},8925:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/plugin-settings-ae774c25b95e665be6e060d3045df52c.png"}}]);