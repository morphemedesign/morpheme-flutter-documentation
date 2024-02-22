"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[6594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},a="Morpheme Responsive",p={unversionedId:"morpheme_library/morpheme_responsive",id:"morpheme_library/morpheme_responsive",title:"Morpheme Responsive",description:"Link: pub.dev",source:"@site/docs/morpheme_library/morpheme_responsive.md",sourceDirName:"morpheme_library",slug:"/morpheme_library/morpheme_responsive",permalink:"/morpheme-flutter-documentation/docs/morpheme_library/morpheme_responsive",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mySidebars",previous:{title:"Morpheme Inspector",permalink:"/morpheme-flutter-documentation/docs/morpheme_library/morpheme_inspector"}},s={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Breakpoints",id:"breakpoints",level:2},{value:"Contributing",id:"contributing",level:3},{value:"License",id:"license",level:2}],u={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"morpheme-responsive"},"Morpheme Responsive"),(0,o.kt)("p",null,"Link: ",(0,o.kt)("a",{parentName:"p",href:"https://pub.dev/packages/morpheme_responsive"},"pub.dev")),(0,o.kt)("p",null,"A Flutter package for building responsive Flutter applications with support for breakpoints on mobile, tablet, and desktop."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Wrap your ",(0,o.kt)("inlineCode",{parentName:"p"},"MaterialApp")," widget with ",(0,o.kt)("inlineCode",{parentName:"p"},"MorphemeResponsive.builder")," to enable responsive design."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\nimport 'package:morpheme_responsive/morpheme_responsive.dart';\n\nvoid main() {\n  runApp(MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      builder: (context, child) => MorphemeResponsive.builder(\n        breakpoints: const [\n          MorphemeBreakpoint.mobile(),\n          MorphemeBreakpoint.tablet(),\n          MorphemeBreakpoint.desktop(),\n        ],\n        child: child,\n      ),\n      initialRoute: \"/\",\n      // Add your routes and other MaterialApp configurations here.\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"breakpoints"},"Breakpoints"),(0,o.kt)("p",null,"This package provides three default breakpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mobile: Suitable for small screens like phones."),(0,o.kt)("li",{parentName:"ul"},"Tablet: Ideal for medium-sized screens like tablets."),(0,o.kt)("li",{parentName:"ul"},"Desktop: Designed for large screens like desktops.")),(0,o.kt)("p",null,"You can customize the breakpoints based on your application's needs."),(0,o.kt)("p",null,"for widthDesign and heightDesign set to be ",(0,o.kt)("inlineCode",{parentName:"p"},"potrait"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"MorphemeResponsive.builder(\n  breakpoints: const [\n    MorphemeBreakpoint(start: 0, end: 599, widthDesign: 360, heightDesign: 800, target: MorphemeResponsiveTarget.mobile,),  // Custom mobile breakpoint\n    MorphemeBreakpoint(start: 600, end: 1199, widthDesign: 834, heightDesign: 1194, target: MorphemeResponsiveTarget.tablet,), // Custom tablet breakpoint\n    MorphemeBreakpoint(start: 1200, end: double.infinity, widthDesign: 1024, heightDesign: 1440, target: MorphemeResponsiveTarget.desktop,), // Custom desktop breakpoint\n  ],\n  child: child,\n),\n")),(0,o.kt)("h3",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request on GitHub."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"This project is licensed under the BSD 3-Clause License - see the LICENSE file for details."))}m.isMDXComponent=!0}}]);