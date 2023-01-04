"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[2781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,v=u["".concat(p,".").concat(h)]||u[h]||c[h]||s;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const s={sidebar_position:3,slug:"/wordpress-integration/previews"},a="Previews",o={unversionedId:"WordPress Integration/previews",id:"WordPress Integration/previews",title:"Previews",description:"The preview feature requires the 10up's headless WordPress plugin installed. The preview functionality is built on top of Next.js preview API. It uses a short-lived JWT token generated on the WordPress side that can only be used for previewing, this means it is not neecessary to set up a hardcoded secret between WP and Next.js.",source:"@site/documentation/06-WordPress Integration/previews.md",sourceDirName:"06-WordPress Integration",slug:"/wordpress-integration/previews",permalink:"/docs/wordpress-integration/previews",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/06-WordPress Integration/previews.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Oliveira",lastUpdatedAt:1672846226,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/wordpress-integration/previews"},sidebar:"tutorialSidebar",previous:{title:"Revalidating ISR Pages",permalink:"/docs/wordpress-integration/revalidate"},next:{title:"Multisite",permalink:"/docs/wordpress-integration/multisite"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"previews"},"Previews"),(0,i.kt)("p",null,"The preview feature requires the 10up's headless WordPress plugin installed. The preview functionality is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/preview-mode"},"Next.js preview API"),". It uses a short-lived JWT token generated on the WordPress side that can only be used for previewing, this means it is not neecessary to set up a hardcoded secret between WP and Next.js."),(0,i.kt)("p",null,"In order for previews to work, make sure the frontend URL is entered in WP settings as per instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/installing-wordpress-plugin"},"Installing WordPress Plugin"),"."),(0,i.kt)("p",null,"The logic for generated the JWT token and redirecting to the preview endpoint can be seen ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/develop/wp/tenup-headless-wp/includes/classes/Preview/preview.php"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$token = PreviewToken::generate(\n    [\n        'type'      => 'preview',\n        'post_type' => $post_type,\n        'post_id'   => $post_id,\n    ]\n);\n\n$preview_url = sprintf(\n    '%sapi/preview?post_id=%d&post_type=%s&is_revision=%s&token=%s',\n    trailingslashit( Plugin::get_react_url() ),\n    $post_id,\n    $post_type,\n    $is_revision ? '1' : '0',\n    $token\n);\n\nwp_redirect( $preview_url );\ndie();\n")),(0,i.kt)("p",null,"Below is a summary of the preview workflow."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First a token of type ",(0,i.kt)("inlineCode",{parentName:"li"},"preview")," is generated"),(0,i.kt)("li",{parentName:"ul"},"The token encodes the post type and post id."),(0,i.kt)("li",{parentName:"ul"},"A preview URL is generated assuming the preview endpoint lives at ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/preview")),(0,i.kt)("li",{parentName:"ul"},"WordPress redirects to the preview endpoint"),(0,i.kt)("li",{parentName:"ul"},"The token is sent alongside the post_type, post_id and a a boolean indicating whether the post being previewed is a revision or not. "),(0,i.kt)("li",{parentName:"ul"},"The token is verify against the parameters and the token is used to fetch the post's draft/revision content.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The Next.js project ",(0,i.kt)("strong",{parentName:"p"},"must")," expose a ",(0,i.kt)("inlineCode",{parentName:"p"},"api/preview")," endpoint that uses the ",(0,i.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next/#previewhandler"},"previewHandler"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"//src/pages/api/preview.js\nimport { previewHandler } from '@10up/headless-next';\n\n/**\n * The Preview endpoint just needs to proxy the default preview handler\n *\n * @param {*} req Next.js request object\n * @param {*} res  Next.js response object\n *\n * @returns\n */\nexport default async function handler(req, res) {\n    return previewHandler(req, res);\n}\n")),(0,i.kt)("p",null,"That's all that is needed in order to enable WordPress preview."),(0,i.kt)("p",null,"While previewing the URL will not reflect the actual URL of the post, but instead it will contain the post id and a ",(0,i.kt)("inlineCode",{parentName:"p"},"-preview")," suffix."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"After a while the preview URL stops working")),(0,i.kt)("p",null,"The JWT token expires after 5 min by default, after this period, open another preview window from WordPress to preview the post."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"I'm unable to preview a custom post type")),(0,i.kt)("p",null,"Make sure you defined the right ",(0,i.kt)("inlineCode",{parentName:"p"},"single")," property when registering the custom post type. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/headless-config/#customposttypes"},"headless config docs"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"single")," property must match the route prefix for the custom post type."))}u.isMDXComponent=!0}}]);