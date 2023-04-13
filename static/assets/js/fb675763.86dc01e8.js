"use strict";(self.webpackChunkheadless_doc=self.webpackChunkheadless_doc||[]).push([[7067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(n),h=r,k=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(k,s(s({ref:t},p),{},{components:n})):o.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Rendering Blocks",sidebar_position:0,slug:"/gutenberg/rendering-blocks"},s="Rendering Blocks",l={unversionedId:"Gutenberg/rendering-blocks",id:"Gutenberg/rendering-blocks",title:"Rendering Blocks",description:"Introduction",source:"@site/documentation/05-Gutenberg/rendering-blocks.md",sourceDirName:"05-Gutenberg",slug:"/gutenberg/rendering-blocks",permalink:"/docs/gutenberg/rendering-blocks",draft:!1,editUrl:"https://github.com/10up/headless/tree/trunk/site/documentation/05-Gutenberg/rendering-blocks.md",tags:[],version:"current",lastUpdatedBy:"tobey",lastUpdatedAt:1681348984,formattedLastUpdatedAt:"Apr 13, 2023",sidebarPosition:0,frontMatter:{sidebar_label:"Rendering Blocks",sidebar_position:0,slug:"/gutenberg/rendering-blocks"},sidebar:"tutorialSidebar",previous:{title:"Prefetching data on the server",permalink:"/docs/data-fetching/prefetching"},next:{title:"Rendering Custom Blocks",permalink:"/docs/gutenberg/rendering-custom-blocks"}},c={},i=[{value:"Introduction",id:"introduction",level:2},{value:"Naive Approach",id:"naive-approach",level:3},{value:"Blocks as JSON Approach",id:"blocks-as-json-approach",level:3},{value:"Blocks as Markup Approach",id:"blocks-as-markup-approach",level:3},{value:"Which approach should you use?",id:"which-approach-should-you-use",level:3},{value:"The BlocksRenderer component",id:"the-blocksrenderer-component",level:2},{value:"Matching blocks with isBlock",id:"matching-blocks-with-isblock",level:3},{value:"Matching Blocks with isBlockByName",id:"matching-blocks-with-isblockbyname",level:3},{value:"Core Blocks",id:"core-blocks",level:2}],p={toc:i};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rendering-blocks"},"Rendering Blocks"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"There are multiple approaches to block rendering"),(0,r.kt)("h3",{id:"naive-approach"},"Naive Approach"),(0,r.kt)("p",null,'Simply output the generated markup "as is", using dangerouslySetInnerHTML.'),(0,r.kt)("h3",{id:"blocks-as-json-approach"},"Blocks as JSON Approach"),(0,r.kt)("p",null,"With this approach, there's some custom PHP logic that parses blocks on the PHP side of things and converts them to JSON to be included in the REST API (or GraphQL). "),(0,r.kt)("p",null,"This approach makes it very easy (and portable) to render blocks anywhere, but on the other hand, it forces the implementation of all supported blocks. Handling server-rendered blocks is also a problem."),(0,r.kt)("p",null,"In this approach, blocks are parsed on the Backend."),(0,r.kt)("h3",{id:"blocks-as-markup-approach"},"Blocks as Markup Approach"),(0,r.kt)("p",null,"Instead of simply outputting the generated markup \u201cas is\u201d, it runs the block markup through an HTML parser (after sanitizing) and selectively (and progressively) replaces block markup with actual React components as needed."),(0,r.kt)("p",null,"This approach is the simplest way to render blocks as not all blocks need to be actual React components (e.g paragraphs, lists, etc). You only need to create React Components for very specific blocks such as Links, Images, and \u201cdynamic blocks\u201d such as accordion, etc. You can still ignore certain blocks if you want better control of supported blocks (both on the WP side and the front-end side)."),(0,r.kt)("p",null,"In this approach, blocks are parsed on the Frontend."),(0,r.kt)("h3",{id:"which-approach-should-you-use"},"Which approach should you use?"),(0,r.kt)("p",null,"The Headless Framework supports all of these approaches. However, it does not ship with a \u201cblocks-to-rest\u201d plugin. But nothing is stopping you from shipping your own."),(0,r.kt)("p",null,"Instead, it provides a React API for selectively choosing blocks to be replaced with React components and as we\u2019ll show in this article this approach works well for most content-focused websites and can even be implemented in React Native apps to power App screens fully curated by Gutenberg."),(0,r.kt)("h2",{id:"the-blocksrenderer-component"},"The BlocksRenderer component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BlocksRenderer")," component is the heart of the \u201cHTML to React\u201d approach. It receives arbitrary HTML markup, runs its content through wpKsesPost, and replaces markup with react component based on the child components passed to it. This approach is not tied to Gutenberg markup in any way, it can be used as a generic HTML-to-React conversion tool. Here\u2019s a simple example of how it works"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const MyLinkBlock = ({ domNode, children }) => {\n    // get the html attributes from the dom node\n    const { href, rel } = domNode.attribs;\n\n    return (\n        <MyFrameWorkSpecificLinkComponent href={href} rel={rel}>\n            {children}\n        </MyFrameWorkSpecificLinkComponent>\n    );\n};\n\nexport const Blocks = ({ html }) => {\n    return (\n        <BlocksRenderer html={html}>\n            <MyLinkBlock tagName="a" classList="my-special-anchor" />\n        </BlocksRenderer>\n    );\n};\n')),(0,r.kt)("p",null,"In the example above, we\u2019re passing the HTML content directly to BlocksRenderer and we\u2019re specifying that any anchor tags with a class of \u201cmy-special-anchor\u201d should be replaced with MyLinkBlock."),(0,r.kt)("p",null,"The MyLinkBlock then gets one special prop called domNode which is the DOM Node that\u2019s being replaced with a React component. You can use domNode to access attributes of the node such as href and rel in this case."),(0,r.kt)("p",null,"Alternatively, you can also specify a test function to match dom nodes, the example above could also have been written as shown below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<MyLinkBlock \n  test={ \n        (node) => node.type === 'tag' \n               && node.name === 'a' \n               && node.attribs.class === 'my-special-anchor'\n  } \n/>\n")),(0,r.kt)("p",null,"There are a number of utility functions that make matching nodes and blocks specifically very easy as we\u2019ll see now."),(0,r.kt)("h3",{id:"matching-blocks-with-isblock"},"Matching blocks with isBlock"),(0,r.kt)("p",null,"The isBlock function matches a DOM node by its tagName and optionally CSS classes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<BlocksRenderer html={html}>\n     <MyCustomBlock\n            test={(node) => isBlock(node, { tagName: 'div', classList: ['block-class-name'] })}\n        />\n</BlocksRenderer>\n")),(0,r.kt)("h3",{id:"matching-blocks-with-isblockbyname"},"Matching Blocks with isBlockByName"),(0,r.kt)("p",null,"The isBlockByName matches a DOM node by its Gutenberg block name. This function requires the Headless WP plugin to be installed. The Headless WP plugin appends two special attributes to every block: data-wp-block-name and data-wp-block-attrs."),(0,r.kt)("p",null,"This is a very handy function as it makes it very easy to match any registered Gutenberg block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<BlocksRenderer html={html}>\n     <MyCustomParagraphBlock\n            test={(node) => isBlock(node, 'core/paragraph')}\n        />\n</BlocksRenderer>\n")),(0,r.kt)("h2",{id:"core-blocks"},"Core Blocks"),(0,r.kt)("p",null,"Not all core blocks would need to be rendered as React components, but when needed to replace core blocks with react components, the framework provides a set of components that does the heavy lifting of matching core blocks and getting their properties. This set of blocks can be seen here."),(0,r.kt)("p",null,"You can explore how this works by using a debug block component to inspect all of its props. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    BlocksRenderer,\n    YoutubeLiteBlock,\n    ImageBlock,\n    ColumnBlock,\n    ColumnsBlock,\n    ParagraphBlock,\n    DebugBlock,\n} from '@10up/headless-core/react';\n\n<BlocksRenderer html={html}>\n     { /* .... */ }\n    <ColumnBlock component={DebugBlock} />\n    <ColumnsBlock component={DebugBlock} />\n    <ParagraphBlock component={DebugBlock} />\n</BlocksRenderer>\n")),(0,r.kt)("p",null,"You should see something like this\n",(0,r.kt)("img",{alt:"Debug Blocks",src:n(7017).Z,width:"1024",height:"669"})),(0,r.kt)("p",null,"By inspecting the props you can see you have access to things like block name, className, and even the Gutenberg attributes. You could, in theory, build your implementation for every block without loading any of the default Gutenberg styles, shipping your own component library/design system."))}d.isMDXComponent=!0},7017:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/debug-blocks-bcbca3b384a5e56495b121ea85ba5401.png"}}]);