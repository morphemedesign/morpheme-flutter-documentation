"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[9637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},i="Coverage",l={unversionedId:"morpheme_cli/project/coverage",id:"morpheme_cli/project/coverage",title:"Coverage",description:"Requirement",source:"@site/docs/morpheme_cli/project/coverage.md",sourceDirName:"morpheme_cli/project",slug:"/morpheme_cli/project/coverage",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/project/coverage",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mySidebars",previous:{title:"Test",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/project/test"},next:{title:"Analyze",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/project/analyze"}},p={},c=[{value:"Requirement",id:"requirement",level:2},{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coverage"},"Coverage"),(0,a.kt)("h2",{id:"requirement"},"Requirement"),(0,a.kt)("p",null,"Install lcov with follow ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/linux-test-project/lcov"},"this installation")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'LCOV is an extension of GCOV, a GNU tool which provides information about\nwhat parts of a program are actually executed (i.e. "covered") while running\na particular test case. The extension consists of a set of Perl scripts\nwhich build on the textual GCOV output to implement the following enhanced\nfunctionality:'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"* HTML based output: coverage rates are additionally indicated using bar\n  graphs and specific colors.\n\n* Support for large projects: overview pages allow quick browsing of\n  coverage data by providing either a hierarchical directory structure\n  view or a three-level detail view: directory, file and source code view.\n")),(0,a.kt)("p",{parentName:"admonition"},"  LCOV was initially designed to support Linux kernel coverage measurements,\nbut works as well for coverage measurements on standard user space\napplications.")),(0,a.kt)("p",null,"check your installation with run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"lcov -v\n")),(0,a.kt)("p",null,"or you can run command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme doctor\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This command is used to calculate our code coverage based on the tests that have been made. Code coverage will not be generated if all the tests we make have not been passed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme coverage\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"morpheme coverage")," support for Linux and macOS.")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme coverage [arguments]\n")),(0,a.kt)("p",null,"To see all available options and flags, run ",(0,a.kt)("inlineCode",{parentName:"p"},"morpheme coverage --help"),"."),(0,a.kt)("h3",{id:"available-options"},"Available Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom Morpheme Yaml :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Custom Morpheme Yaml"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--morpheme-yaml [path_file]")),(0,a.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,a.kt)("inlineCode",{parentName:"td"},"morpheme.yaml")," file.")))))}m.isMDXComponent=!0}}]);