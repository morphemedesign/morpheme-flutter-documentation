"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[9807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:5},o="Assets",i={unversionedId:"starter_kit/assets",id:"starter_kit/assets",title:"Assets",description:"Asset has its own module which aims to support all other modules so that they can use the asset, the location of the assets is in ./assets",source:"@site/docs/starter_kit/assets.md",sourceDirName:"starter_kit",slug:"/starter_kit/assets",permalink:"/morpheme-flutter-documentation/docs/starter_kit/assets",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"mySidebars",previous:{title:"Environment (morpheme.yaml)",permalink:"/morpheme-flutter-documentation/docs/starter_kit/environment"},next:{title:"Feature",permalink:"/morpheme-flutter-documentation/docs/starter_kit/feature"}},l={},p=[{value:"Usages",id:"usages",level:2}],m={toc:p};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assets"},"Assets"),(0,r.kt)("p",null,"Asset has its own module which aims to support all other modules so that they can use the asset, the location of the assets is in ",(0,r.kt)("inlineCode",{parentName:"p"},"./assets")),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("p",null,"Here are the steps for creating a logo.png image file as an example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the logo files to the ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/assets/images/")," folder"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"File generated",src:a(7231).Z,width:"474",height:"313"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate constants with the ",(0,r.kt)("a",{parentName:"p",href:"/morpheme-flutter-documentation/docs/morpheme_cli/started"},"Morpheme CLI")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme assets\n")),(0,r.kt)("p",{parentName:"li"},"Learn more about command assets ",(0,r.kt)("a",{parentName:"p",href:"../morpheme_cli/generate/assets"},"here")),(0,r.kt)("p",{parentName:"li"},"The logo constant will be generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"core/assets/lib/morpheme_images.dart")," file"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"File generated",src:a(6056).Z,width:"629",height:"315"})),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Adjust the placement of the assets that we use"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Image file path ",(0,r.kt)("inlineCode",{parentName:"li"},"assets/assets/images/")," constant will be generated in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"core/assets/lib/morpheme_images.dart")),(0,r.kt)("li",{parentName:"ul"},"The file path icon ",(0,r.kt)("inlineCode",{parentName:"li"},"assets/assets/icons/")," constant will be generated in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"core/assets/lib/morpheme_icons.dart")),(0,r.kt)("li",{parentName:"ul"},"The path of the json file ",(0,r.kt)("inlineCode",{parentName:"li"},"assets/assets/json/")," constant will be generated in the file ",(0,r.kt)("inlineCode",{parentName:"li"},"core/assets/lib/morpheme_json.dart"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"MorphemeImages.logo")," in your code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Image.asset(MorphemeImages.logo);\n")))))}c.isMDXComponent=!0},6056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/const_generated-e0c5fb045f42f1beb6a55a6f7d062384.png"},7231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/copy_file-636ecdbc87f809ba199423d8dba53cae.png"}}]);