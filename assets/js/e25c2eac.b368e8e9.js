"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[9029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,f=u["".concat(p,".").concat(c)]||u[c]||s[c]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:9},i="Firebase",l={unversionedId:"morpheme_cli/generate/firebase",id:"morpheme_cli/generate/firebase",title:"Firebase",description:"This command is used to generate firebase configuration used cli flutterfire which recommendation from firebase reference for flutter.",source:"@site/docs/morpheme_cli/generate/firebase.md",sourceDirName:"morpheme_cli/generate",slug:"/morpheme_cli/generate/firebase",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/firebase",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mySidebars",previous:{title:"l10n (Languages)",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/l10n"},next:{title:"Unit Test",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/generate/unit-test"}},p={},m=[{value:"Setup",id:"setup",level:2},{value:"Command",id:"command",level:2},{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"firebase"},"Firebase"),(0,a.kt)("p",null,"This command is used to generate firebase configuration used cli ",(0,a.kt)("inlineCode",{parentName:"p"},"flutterfire")," which recommendation from ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/flutter/setup?platform=ios"},"firebase reference")," for flutter."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"In firebase have flavor and each flavor can be different project setup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-morpheme.yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},'...\nfirebase:\n  dev: #flavor\n    project_id: "morpheme-dev"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n    platform: "android,ios,web" #optional\n    android_package_name: "design.morpheme.dev" #optional by default use from flavor[ANDROID_APPLICATION_ID]\n    ios_bundle_id: "design.morpheme.dev" #optional by default use from flavor[IOS_APPLICATION_ID]\n    web_app_id: "YOUR WEB APP ID" #optional\n  stag:\n    project_id: "morpheme-stag"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n  prod:\n    project_id: "morpheme"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n    platform: "android,ios"\n...\n')),(0,a.kt)("p",null,"for token you need to get from ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cli"},"firebase_cli")," you need install that and run ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase login:ci")," to get token."),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme firebase -f [flavor]\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Ensure you already to install ",(0,a.kt)("inlineCode",{parentName:"p"},"flutterfire")," or you can check with ",(0,a.kt)("inlineCode",{parentName:"p"},"moprpheme doctor")," to see requirement you dont already installed. you can install ",(0,a.kt)("inlineCode",{parentName:"p"},"flutterfire")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"dart pub global activate flutterfire"),".")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme firebase [arguments]\n")),(0,a.kt)("p",null,"To see all available options and flags, run ",(0,a.kt)("inlineCode",{parentName:"p"},"morpheme firebase --help"),"."),(0,a.kt)("h3",{id:"available-options"},"Available Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom Morpheme Yaml :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Custom Morpheme Yaml"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--morpheme-yaml [path_file]")),(0,a.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,a.kt)("inlineCode",{parentName:"td"},"morpheme.yaml")," file.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flavor/Environment :  ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Flavor/Environment"),(0,a.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f dev")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--flavor dev")),(0,a.kt)("td",{parentName:"tr",align:null},"Run project on dev environment (Default)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f stag")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--flavor stag")),(0,a.kt)("td",{parentName:"tr",align:null},"Run project on staging environment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-f prod")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--flavor prod")),(0,a.kt)("td",{parentName:"tr",align:null},"Run project on production environment")))))}u.isMDXComponent=!0}}]);