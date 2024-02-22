"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[2754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(r),s=a,g=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:9},o="Upgrade",p={unversionedId:"morpheme_cli/project/upgrade",id:"morpheme_cli/project/upgrade",title:"Upgrade",description:"This command is used to upgrade the current package's dependencies to latest versions.",source:"@site/docs/morpheme_cli/project/upgrade.md",sourceDirName:"morpheme_cli/project",slug:"/morpheme_cli/project/upgrade",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/project/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mySidebars",previous:{title:"Clean",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/project/clean"},next:{title:"Refactor",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/project/refactor"}},i={},m=[{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],c={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade"},"Upgrade"),(0,a.kt)("p",null,"This command is used to upgrade the current package's dependencies to latest versions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme upgrade\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme upgrade [argument]\n")),(0,a.kt)("p",null,"To see all available options and flags, run ",(0,a.kt)("inlineCode",{parentName:"p"},"morpheme upgrade --help"),"."),(0,a.kt)("h3",{id:"available-options"},"Available Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Flag"),(0,a.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-a")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--all")),(0,a.kt)("td",{parentName:"tr",align:null},"Upgrade all project package's dependencies to latest versions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-d")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--dependency")),(0,a.kt)("td",{parentName:"tr",align:null},"Upgrade all dependency_manager package's dependencies to latest versions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-g")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--morpheme")),(0,a.kt)("td",{parentName:"tr",align:null},"Upgrade all morpheme_library package's dependencies to latest versions (Default)")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom Morpheme Yaml :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Custom Morpheme Yaml"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--morpheme-yaml [path_file]")),(0,a.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,a.kt)("inlineCode",{parentName:"td"},"morpheme.yaml")," file.")))))}d.isMDXComponent=!0}}]);