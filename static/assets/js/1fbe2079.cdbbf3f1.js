"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[2781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,v=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:0,slug:"/wordpress-integration/previews"},o="Previews",s={unversionedId:"WordPress Integration/previews",id:"WordPress Integration/previews",title:"Previews",description:"The preview feature requires the 10up's headless WordPress plugin installed. The preview functionality is built on top of Next.js preview API. It uses a short-lived JWT token generated on the WordPress side that can only be used for previewing, this means it is not necessary to set up a hardcoded secret between WP and Next.js.",source:"@site/documentation/06-WordPress Integration/previews.md",sourceDirName:"06-WordPress Integration",slug:"/wordpress-integration/previews",permalink:"/docs/wordpress-integration/previews",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/06-WordPress Integration/previews.md",tags:[],version:"current",lastUpdatedBy:"N\xedcholas Andr\xe9",lastUpdatedAt:1680109358,formattedLastUpdatedAt:"Mar 29, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/wordpress-integration/previews"},sidebar:"tutorialSidebar",previous:{title:"Rendering Blocks in React Native",permalink:"/docs/gutenberg/rendering-blocks-in-react-native"},next:{title:"Multisite",permalink:"/docs/wordpress-integration/multisite"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"<code>previewHandler</code> options",id:"previewhandler-options",level:3},{value:"<code>preparePreviewData</code>",id:"preparepreviewdata",level:4},{value:"<code>onRedirect</code>",id:"onredirect",level:4},{value:"FAQ",id:"faq",level:2}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"previews"},"Previews"),(0,a.kt)("p",null,"The preview feature requires the 10up's headless WordPress plugin installed. The preview functionality is built on top of ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/preview-mode"},"Next.js preview API"),". It uses a short-lived JWT token generated on the WordPress side that can only be used for previewing, this means it is not necessary to set up a hardcoded secret between WP and Next.js."),(0,a.kt)("p",null,"For previews to work, make sure the frontend URL is entered in WP settings as per instructions in ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/installing-wordpress-plugin"},"Installing WordPress Plugin"),"."),(0,a.kt)("p",null,"The logic for generating the JWT token and redirecting to the preview endpoint can be seen ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/10up/headless/blob/develop/wp/tenup-headless-wp/includes/classes/Preview/preview.php"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$token = PreviewToken::generate(\n    [\n        'type'      => 'preview',\n        'post_type' => $post_type,\n        'post_id'   => $post_id,\n    ]\n);\n\n$preview_url = sprintf(\n    '%sapi/preview?post_id=%d&post_type=%s&is_revision=%s&token=%s',\n    trailingslashit( Plugin::get_react_url() ),\n    $post_id,\n    $post_type,\n    $is_revision ? '1' : '0',\n    $token\n);\n\nwp_redirect( $preview_url );\ndie();\n")),(0,a.kt)("p",null,"Below is a summary of the preview workflow."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First a token of type ",(0,a.kt)("inlineCode",{parentName:"li"},"preview")," is generated"),(0,a.kt)("li",{parentName:"ul"},"The token encodes the post type and post id."),(0,a.kt)("li",{parentName:"ul"},"A preview URL is generated assuming the preview endpoint lives at ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/preview")),(0,a.kt)("li",{parentName:"ul"},"WordPress redirects to the preview endpoint"),(0,a.kt)("li",{parentName:"ul"},"The token is sent alongside the post_type, post_id and a boolean indicating whether the post being previewed is a revision or not. "),(0,a.kt)("li",{parentName:"ul"},"The token is verified against the parameters and the token is used to fetch the post's draft/revision content.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The Next.js project ",(0,a.kt)("strong",{parentName:"p"},"must")," expose a ",(0,a.kt)("inlineCode",{parentName:"p"},"api/preview")," endpoint that uses the ",(0,a.kt)("a",{parentName:"p",href:"/api/modules/10up_headless_next/#previewhandler"},"previewHandler"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//src/pages/api/preview.js\nimport { previewHandler } from '@10up/headless-next';\n\n/**\n * The Preview endpoint just needs to proxy the default preview handler\n *\n * @param {*} req Next.js request object\n * @param {*} res  Next.js response object\n *\n * @returns\n */\nexport default async function handler(req, res) {\n    return previewHandler(req, res);\n}\n")),(0,a.kt)("p",null,"That's all that is needed to enable WordPress preview."),(0,a.kt)("p",null,"While previewing the URL will not reflect the actual URL of the post, but instead, it will contain the post id and a ",(0,a.kt)("inlineCode",{parentName:"p"},"-preview")," suffix."),(0,a.kt)("h3",{id:"previewhandler-options"},(0,a.kt)("inlineCode",{parentName:"h3"},"previewHandler")," options"),(0,a.kt)("h4",{id:"preparepreviewdata"},(0,a.kt)("inlineCode",{parentName:"h4"},"preparePreviewData")),(0,a.kt)("p",null,"This allows you to alter the preview data object before it is stored by Next.js (i.e before calling ",(0,a.kt)("inlineCode",{parentName:"p"},"res.setPreviewData"),"). You can use this if you need to add additional fields to preview data object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default async function handler(req, res) {\n    return previewHandler(req, res, {\n        preparePreviewData(req, res, post, previewData) {\n            return { ...previewData, name: post.name };\n        },\n    });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"name")," would now be avaliable in the context object of ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getStaticProps")," (",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.previewData"),");"),(0,a.kt)("h4",{id:"onredirect"},(0,a.kt)("inlineCode",{parentName:"h4"},"onRedirect")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onRedirect")," option allows you to customize the redirected URL that should handle the preview request. This can be useful if you have implemented a non-standard URL structure. For instance, if the permalink for your posts are ",(0,a.kt)("inlineCode",{parentName:"p"},"/%category%/%postname%/")," you could create a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/[category]/[...path.js]")," route to handle single post. However once you do that the ",(0,a.kt)("inlineCode",{parentName:"p"},"previewHandler")," doesn't know how to redirect to that URL and as such you will have to provide your own redirect handling."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When handling redirects yourself, make sure to always append ",(0,a.kt)("inlineCode",{parentName:"p"},"-preview=true")," to the end of the redirected URL.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { getPostTerms } from '@10up/headless-core';\nimport { previewHandler } from '@10up/headless-next';\n\nexport default async function handler(req, res) {\n    return previewHandler(req, res, {\n        // add categorySlug and post slug to preview data\n        preparePreviewData(req, res, post, previewData) {\n            const terms = getPostTerms(post);\n            if (Array.isArray(terms?.category) && terms.category.length > 0) {\n                const [category] = terms.category;\n\n                return { ...previewData, categorySlug: category.slug, slug: post.slug };\n            }\n            return { ...previewData };\n        },\n        onRedirect(req, res, previewData, defaultRedirect) {\n            const { postType, id, slug, categorySlug } = previewData;\n\n            if (postType === 'post' && typeof categorySlug === 'string') {\n                return res.redirect(`/${categorySlug}/${id}/${slug || id}-preview=true`);\n            }\n\n            return defaultRedirect(req, res, previewData);\n        },\n    });\n}\n")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"After a while, the preview URL stops working")),(0,a.kt)("p",null,"The JWT token expires after 5 min by default, after this period, open another preview window from WordPress to preview the post."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"I'm unable to preview a custom post type")),(0,a.kt)("p",null,"Make sure you defined the right ",(0,a.kt)("inlineCode",{parentName:"p"},"single")," property when registering the custom post type. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/headless-config/#customposttypes"},"headless config docs"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"single")," property must match the route prefix for the custom post type."))}u.isMDXComponent=!0}}]);