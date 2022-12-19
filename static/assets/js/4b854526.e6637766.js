"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[3664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"A/B Test SPA vs MPA navigation",sidebar_position:0},o="A/B Testing SPA vs MPA navigation",s={unversionedId:"Guides/ab-test-link",id:"Guides/ab-test-link",title:"A/B Testing SPA vs MPA navigation",description:"In this guide, we\u2019ll implement a custom Link component that will replace every Link in the post content with a custom React component that will implement SPA or MPA navigation based on an A/B test. By \u201cSPA navigation\u201d I mean navigating to other pages via client-side rendering instead of a full-page reload. MPA navigation is the opposite and traditional way of navigation.",source:"@site/documentation/07-Guides/ab-test-link.md",sourceDirName:"07-Guides",slug:"/Guides/ab-test-link",permalink:"/docs/Guides/ab-test-link",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/07-Guides/ab-test-link.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1671493341,formattedLastUpdatedAt:"Dec 19, 2022",sidebarPosition:0,frontMatter:{sidebar_label:"A/B Test SPA vs MPA navigation",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Rendering Blocks in React Native",permalink:"/docs/Gutenberg/rendering-blocks-in-react-native"},next:{title:"Implementing a Youtube Facade",permalink:"/docs/Guides/youtube-facade"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ab-testing-spa-vs-mpa-navigation"},"A/B Testing SPA vs MPA navigation"),(0,i.kt)("p",null," In this guide, we\u2019ll implement a custom Link component that will replace every Link in the post content with a custom React component that will implement SPA or MPA navigation based on an A/B test. By \u201cSPA navigation\u201d I mean navigating to other pages via client-side rendering instead of a full-page reload. MPA navigation is the opposite and traditional way of navigation."),(0,i.kt)("p",null," This is an interesting use case since there are some claims that ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/vitals-spa-faq/"},"MPA might perform better in web vitals compared to SPA")," (not because it\u2019s necessarily better but because of difficulties to capture some metrics in SPA)."),(0,i.kt)("p",null," First off, let\u2019s create a custom LinkBlock. We\u2019ll replace the default LinkBlock component with a custom one. Note that the default LinkBlock is a special block implementation that handles internal links for Next.js."),(0,i.kt)("p",null," The starter project already has a custom ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nicholasio/headless-tutorial/blob/trunk/src/components/Link.js"},"Link")," component that is passed via dependency injection to the Framework Provider in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nicholasio/headless-tutorial/blob/trunk/src/pages/_app.js#L38"},"_app.js"),". This is essentially telling the framework to use that component whenever rendering a Link."),(0,i.kt)("p",null,"So the next step here is creating our own \u201cLinkBlock\u201d implementation to use that custom link component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Link } from './Link';\n\nconst LinkBlock = ({ domNode, children }) => {\n    const { href, rel } = getAttributes(domNode.attribs);\n\n    return (\n        <Link href={href} rel={rel}>\n            {children}\n        </Link>\n    );\n};\n\nLinkBlock.propTypes = {\n    domNode: PropTypes.shape({\n        attribs: PropTypes.shape({}).isRequired,\n    }).isRequired,\n    children: PropTypes.node.isRequired,\n};\n")),(0,i.kt)("p",null,"Our custom LinkBlock component leverages the getAttributes utility that receives the domNode attributes and returns an object with available node attributes. You could access attributes directly but this function does some normalization especially around returning className instead of class."),(0,i.kt)("p",null,"We\u2019ll leverage Next.js middleware for A/B testing. If you\u2019re unfamiliar with Next.js middleware, go read their ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/middleware"},"documentation"),"."),(0,i.kt)("p",null,"The next step is to open ",(0,i.kt)("inlineCode",{parentName:"p"},"src/middleware.js")," and make the following changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { AppMiddleware } from '@10up/headless-next/middlewares';\nimport { NextResponse } from 'next/server';\n\nconst COOKIE_NAME = 'bucket-navigation';\nconst BUCKETS = ['spa', 'mpa'];\nconst getBucket = () => BUCKETS[Math.floor(Math.random() * BUCKETS.length)];\n\nexport async function middleware(req) {\n    const response = await AppMiddleware(req);\n\n    if (!response.redirected) {\n        const url = req.nextUrl;\n        const bucket = req.cookies.get(COOKIE_NAME) || getBucket();\n\n        response.cookies.set(COOKIE_NAME, bucket);\n        url.searchParams.set('navigation', bucket);\n\n        req.nextUrl.searchParams.set('navigation', bucket);\n        return NextResponse.rewrite(req.nextUrl, response);\n    }\n\n    return response;\n}\n")),(0,i.kt)("p",null,"Here, we\u2019re simply simulating an A/B test, but you could, in theory, replace getBucket with a call to an A/B testing service. This middleware is essentially adding ?navigation=type to every URL using rewrite which means users won\u2019t actually see that query param in the URL. That provides us with an easy way to check if the current request should be using SPA or MPA for navigation which we\u2019ll do directly in the Link component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/Link.js\nexport const Link = ({ href, rel, children }) => {\n    const { query } = useRouter();\n\n    const settings = useSettings();\n    const link = removeSourceUrl({ link: href, backendUrl: settings.sourceUrl || '' });\n\n    const isSpaNavigation = query?.navigation === 'spa' || typeof query.navigation === 'undefined';\n\n    if (isSpaNavigation) {\n        return (\n            <NextLink href={link}>\n                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}\n                <a rel={rel}>{children}</a>\n            </NextLink>\n        );\n    }\n\n    return (\n        <a href={link} rel={rel}>\n            {children}\n        </a>\n    );\n};\n")),(0,i.kt)("p",null,"The changes to this component limit to checking the query object from the router and if the navigation param is equal to \u201cspa\u201d or undefined, in which case it will default to use Next.js Link component. Otherwise, it defaults to an MPA by simply rendering a regular anchor tag."),(0,i.kt)("p",null,"Note that the link is converted to a relative link to remove the WordPress domain."),(0,i.kt)("p",null,"To test this, open a page. Then, check which bucket you\u2019re in"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AB Test bucket",src:n(9955).Z,width:"1024",height:"251"})),(0,i.kt)("p",null,"In the example above, I was assigned the \u201cmpa\u201d bucket I should see a full page reload when navigating to internal links inside the post content. You can change to the \u201cspa\u201d bucket by modifying the cookie."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AB Test Link",src:n(7788).Z,width:"1444",height:"930"})))}u.isMDXComponent=!0},9955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a-b-test-1-b1409857b5f72e1a97ec053cc775846f.png"},7788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/a-b-testing-link-c71624b493baae52089d5258aeb43246.gif"}}]);