"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[5335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:7},i="Page",l={unversionedId:"starter_kit/page",id:"starter_kit/page",title:"Page",description:"The morpheme page command has several options and arguments that can be used to create a new page in a feature module. To create a new page in a feature module, you must provide the feature name using the -f or --feature-name option. You can also specify other options depending on how you want to create the page. For example, to create a new page with just UI pages and Cubit, you can use the following command:",source:"@site/docs/starter_kit/page.md",sourceDirName:"starter_kit",slug:"/starter_kit/page",permalink:"/morpheme-flutter-documentation/docs/starter_kit/page",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mySidebars",previous:{title:"Feature",permalink:"/morpheme-flutter-documentation/docs/starter_kit/feature"},next:{title:"Internationalization",permalink:"/morpheme-flutter-documentation/docs/starter_kit/internationalization"}},p={},u=[{value:"Example",id:"example",level:2}],s={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"page"},"Page"),(0,n.kt)("p",null,"The morpheme page command has several options and arguments that can be used to create a new page in a feature module. To create a new page in a feature module, you must provide the feature name using the -f or --feature-name option. You can also specify other options depending on how you want to create the page. For example, to create a new page with just UI pages and Cubit, you can use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme page [page-name] -f <feature-name>\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here's an example of how you can use the morpheme page command to create a new page in the users feature module, with the feature name set to master:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme page users -f master\n")),(0,n.kt)("p",null,"As you can see, the command has generated the following files and folders in the users feature module:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"lib/users/presentation/cubit/users_cubit.dart: The Cubit file for the new page."),(0,n.kt)("li",{parentName:"ul"},"lib/users/presentation/pages/users_page.dart: The UI page file for the new page."),(0,n.kt)("li",{parentName:"ul"},"lib/users/presentation/widgets/.gitkeep: An empty file to preserve the widgets folder."),(0,n.kt)("li",{parentName:"ul"},"lib/users/locator.dart: The locator file for the users feature module."),(0,n.kt)("li",{parentName:"ul"},"lib/locator.dart: The main locator file for the entire project.")),(0,n.kt)("p",null,"With these files and folders generated, you can now start adding your own code to create the new page in the users feature module."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"File generated",src:r(8268).Z,width:"356",height:"808"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Page will not be generated if:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The feature that we enter does not exist"),(0,n.kt)("li",{parentName:"ul"},"The page name we entered already exists"))))}c.isMDXComponent=!0},8268:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/user_page-20d526dbe0c0db30cc49138c0ec3d974.png"}}]);