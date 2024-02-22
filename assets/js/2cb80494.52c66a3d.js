"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:8},l="l10n (Languages)",o={unversionedId:"morpheme_cli/generate/l10n",id:"morpheme_cli/generate/l10n",title:"l10n (Languages)",description:"Single .arb",source:"@site/docs/morpheme_cli/generate/l10n.md",sourceDirName:"morpheme_cli/generate",slug:"/morpheme_cli/generate/l10n",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/l10n",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"mySidebars",previous:{title:"Color2Dart",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/color2dart"},next:{title:"Firebase",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/firebase"}},s={},p=[{value:"Single .arb",id:"single-arb",level:2},{value:"Spesific .arb",id:"spesific-arb",level:2},{value:"Generate The Languages",id:"generate-the-languages",level:2},{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"l10n-languages"},"l10n (Languages)"),(0,r.kt)("h2",{id:"single-arb"},"Single .arb"),(0,r.kt)("p",null,"We can create multilingual systems with single .arb"),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"Single arb",src:n(2712).Z,width:"263",height:"197"})),(0,r.kt)("h2",{id:"spesific-arb"},"Spesific .arb"),(0,r.kt)("p",null,"We can create multilingual systems with specific .arb based on our features for easy maintenance with this structure:"),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"Spesific arb",src:n(2142).Z,width:"486",height:"425"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We are unable to combine single and specific.arb !")),(0,r.kt)("h2",{id:"generate-the-languages"},"Generate The Languages"),(0,r.kt)("p",null,"This command is used to generate the l10n file at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/assets/l1on/")," so that we can use it in the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme l10n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use this command when there is a change in the l10n file."),(0,r.kt)("li",{parentName:"ul"},"Especially for vscode users, to make it easier to process l10n files, we can use the extension ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://marketplace.visualstudio.com/items?itemName=innwin.i18n-arb-editor"},"i10n arb editor")),", don't forget to save and use the command above after making changes. (This tips only works for non spesific ",(0,r.kt)("inlineCode",{parentName:"li"},".arb")," or single ",(0,r.kt)("inlineCode",{parentName:"li"},".arb")," file)"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme l10n [arguments]\n")),(0,r.kt)("p",null,"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"morpheme l10n --help"),"."),(0,r.kt)("h3",{id:"available-options"},"Available Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom Morpheme Yaml :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Custom Morpheme Yaml"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--morpheme-yaml [path_file]")),(0,r.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,r.kt)("inlineCode",{parentName:"td"},"morpheme.yaml")," file.")))))}m.isMDXComponent=!0},2712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/l10n_single-94e3cadf289255fbe3d9893bc3144b57.png"},2142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/l10n_specific-12c33d6219ce9f605d6323f0cab040d1.png"}}]);