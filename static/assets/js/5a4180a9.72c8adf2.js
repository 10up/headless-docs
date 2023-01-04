"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[9589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Quick Setup",slug:"/getting-started/quick-setup",sidebar_position:0},o="Quick Setup",s={unversionedId:"Getting Started/quick-setup",id:"Getting Started/quick-setup",title:"Quick Setup",description:"If you're new to Next.js, we recommend reviewing Next.js docs.",source:"@site/documentation/01-Getting Started/quick-setup.md",sourceDirName:"01-Getting Started",slug:"/getting-started/quick-setup",permalink:"/docs/getting-started/quick-setup",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/01-Getting Started/quick-setup.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1672859262,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:0,frontMatter:{sidebar_label:"Quick Setup",slug:"/getting-started/quick-setup",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Setting up the framework from scratch",permalink:"/docs/getting-started/setting-up-manually"}},l={},u=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Something Missing?",id:"something-missing",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-setup"},"Quick Setup"),(0,i.kt)("p",null,"If you're new to Next.js, we recommend reviewing ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},"Next.js docs"),"."),(0,i.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js 16 or later"),(0,i.kt)("li",{parentName:"ul"},"NPM >= 7"),(0,i.kt)("li",{parentName:"ul"},"WordPress >= 5.9 (prior versions might work but haven't been tested).")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The easiest way to get started with 10up's headless framework is by using ",(0,i.kt)("inlineCode",{parentName:"p"},"create-next-app")," with the official starter project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app --use-npm -e https://github.com/10up/headless-docs/tree/projects-develop/wp-nextjs\n")),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," and open http://localhost:3000 in your browser."),(0,i.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"By default the starter project will point to ",(0,i.kt)("inlineCode",{parentName:"p"},"js1.10up.com"),". Either change the\n",(0,i.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_HEADLESS_WP_URL")," variable or create a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," file to override the default env variables."),(0,i.kt)("p",null,"If you're developing locally and using HTTPS with WordPress and you don't have valid certs, you will need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_TLS_REJECT_UNAUTHORIZED=0")," as a env variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_HEADLESS_WP_URL=https://wordpress.test\nNODE_TLS_REJECT_UNAUTHORIZED=0\n")),(0,i.kt)("h2",{id:"something-missing"},"Something Missing?"),(0,i.kt)("p",null,"If something is missing in the documentation or if you found some part confusing, please file an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/issues"},"issue")," for the documentation repository with your suggestions for improvement."))}c.isMDXComponent=!0}}]);