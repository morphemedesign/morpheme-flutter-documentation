"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[7756],{3905:(e,A,t)=>{t.d(A,{Zo:()=>d,kt:()=>s});var n=t(7294);function a(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function i(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?i(Object(t),!0).forEach((function(A){a(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function l(e,A){if(null==e)return{};var t,n,a=function(e,A){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var A=n.useContext(o),t=A;return e&&(t="function"==typeof e?e(A):r(r({},A),e)),t},d=function(e){var A=p(e.components);return n.createElement(o.Provider,{value:A},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},u=n.forwardRef((function(e,A){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,s=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return t?n.createElement(s,r(r({ref:A},d),{},{components:t})):n.createElement(s,r({ref:A},d))}));function s(e,A){var t=arguments,a=A&&A.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var o in A)hasOwnProperty.call(A,o)&&(l[o]=A[o]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6851:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1},r="Config",l={unversionedId:"morpheme_cli/generate/config",id:"morpheme_cli/generate/config",title:"Config",description:"This command is specific to VSCode IDE user.",source:"@site/docs/morpheme_cli/generate/config.md",sourceDirName:"morpheme_cli/generate",slug:"/morpheme_cli/generate/config",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/config",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebars",previous:{title:"Generate",permalink:"/morpheme-flutter-documentation/docs/category/generate"},next:{title:"Apps",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/apps"}},o={},p=[{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],d={toc:p};function m(e){let{components:A,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:A,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config"},"Config"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This command is specific to VSCode IDE user.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme config\n")),(0,a.kt)("p",null,"This command is used to generate the ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/launch.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/task.json")," files according to the configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"morpheme.yaml")," file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File generated",src:t(374).Z,width:"473",height:"88"})),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme config [arguments]\n")),(0,a.kt)("p",null,"To see all available options and flags, run ",(0,a.kt)("inlineCode",{parentName:"p"},"morpheme config --help"),"."),(0,a.kt)("h3",{id:"available-options"},"Available Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom Morpheme Yaml :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Custom Morpheme Yaml"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--morpheme-yaml [path_file]")),(0,a.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,a.kt)("inlineCode",{parentName:"td"},"morpheme.yaml")," file.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom Target :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Custom Target"),(0,a.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-t [path_file]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--target [path_file]")),(0,a.kt)("td",{parentName:"tr",align:null},"This command is used to run the application in a specific file, by default it will run the ",(0,a.kt)("inlineCode",{parentName:"td"},"lib/main.dart")," file.")))))}m.isMDXComponent=!0},374:(e,A,t)=>{t.d(A,{Z:()=>n});const n="data:image/png;base64,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"}}]);