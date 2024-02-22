"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[8560],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,c=d["".concat(m,".").concat(k)]||d[k]||s[k]||r;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1},i="APK File Format",o={unversionedId:"morpheme_cli/build/android/apk",id:"morpheme_cli/build/android/apk",title:"APK File Format",description:"This command is used to build the project in the form of an .apk file.",source:"@site/docs/morpheme_cli/build/android/apk.md",sourceDirName:"morpheme_cli/build/android",slug:"/morpheme_cli/build/android/apk",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/build/android/apk",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebars",previous:{title:"Android",permalink:"/morpheme-flutter-documentation/docs/category/android"},next:{title:"App Bundle",permalink:"/morpheme-flutter-documentation/docs/morpheme_cli/build/android/app_bundle"}},m={},p=[{value:"Default",id:"default",level:2},{value:"Options :",id:"options-",level:2},{value:"Example - Custom Version",id:"example---custom-version",level:2},{value:"Example - Custom Environment/Flavor",id:"example---custom-environmentflavor",level:2},{value:"Example - Custom Version and Environment Combination",id:"example---custom-version-and-environment-combination",level:2},{value:"Example - Custom Target",id:"example---custom-target",level:2},{value:"Example - Custom morpheme.yaml",id:"example---custom-morphemeyaml",level:2},{value:"Example - Custom Build Number",id:"example---custom-build-number",level:2},{value:"Example - Custom Build Name",id:"example---custom-build-name",level:2},{value:"Example - No Obfuscate",id:"example---no-obfuscate",level:2},{value:"Example - Split Debug Info",id:"example---split-debug-info",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apk-file-format"},"APK File Format"),(0,l.kt)("p",null,"This command is used to build the project in the form of an ",(0,l.kt)("inlineCode",{parentName:"p"},".apk")," file."),(0,l.kt)("h2",{id:"default"},"Default"),(0,l.kt)("p",null,"By default this command will build the project with the release version staging flavor."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk\n")),(0,l.kt)("p",null,"After the building process is complete, we can check the ",(0,l.kt)("inlineCode",{parentName:"p"},".apk")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"build/app/outputs/apk/")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"build/app/outputs/flutter-apk/")," folders."),(0,l.kt)("h2",{id:"options-"},"Options :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk [flavor/environment] [app_version] [custom_target] [build_number] [build_name] [[no-]obfuscate] [split-debug-info]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flavor/Environment :  ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flavor/Environment"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f dev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flavor dev")),(0,l.kt)("td",{parentName:"tr",align:null},"Build project on dev environment (Default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f stag")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flavor stag")),(0,l.kt)("td",{parentName:"tr",align:null},"Build project on staging environment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f prod")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--flavor prod")),(0,l.kt)("td",{parentName:"tr",align:null},"Build project on production environment")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Generate l10n :  ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Generate l10n"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--[no]l10n")),(0,l.kt)("td",{parentName:"tr",align:null},"Generate l10n first before running other command. (defaults to on)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"App Version :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"App Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--debug")),(0,l.kt)("td",{parentName:"tr",align:null},"Build project on debug mode (Default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--profile")),(0,l.kt)("td",{parentName:"tr",align:null},"Build project on profile mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--release")),(0,l.kt)("td",{parentName:"tr",align:null},"Build project on release mode (Default)")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom Target :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Custom Target"),(0,l.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-t [url_file]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--target [url_file]")),(0,l.kt)("td",{parentName:"tr",align:null},"This command is used to build the application in a specific file, by default it will run the ",(0,l.kt)("inlineCode",{parentName:"td"},"lib/main.dart")," file.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom Build Name :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Build Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--build-name [build_number]")),(0,l.kt)("td",{parentName:"tr",align:null},"This command is used to build application with a specific name.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom Build Number :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Build Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--build-number [build_number]")),(0,l.kt)("td",{parentName:"tr",align:null},"This command is used to build application with a specific version number.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"No Obfuscate :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Build Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--[no-]obfuscate")),(0,l.kt)("td",{parentName:"tr",align:null},'In a release build, this flag removes identifiers and replaces them with randomized values for the purposes of source code obfuscation. This flag must always be combined with "--split-debug-info" option, the mapping between the values and the original identifiers is stored in the symbol map created in the specified directory. For an app built with this flag, the "flutter symbolize" command with the right program symbol file is required to obtain a human readable stack trace. (defaults to on)')))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Split Debug Info :")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Build Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--split-debug-info")),(0,l.kt)("td",{parentName:"tr",align:null},'In a release build, this flag reduces application size by storing Dart program symbols in a separate file on the host rather than in the application. The value of the flag should be a directory where program symbol files can be stored for later use. These symbol files contain the information needed to symbolize Dart stack traces. For an app built with this flag, the "flutter symbolize" command with the right program symbol file is required to obtain a human readable stack trace. This flag cannot be combined with "--analyze-size". (defaults to "./.symbols/")')))),(0,l.kt)("h2",{id:"example---custom-version"},"Example - Custom Version"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Debug Version"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --debug\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Profile Version"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --profile\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Release Version"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --release\n")))),(0,l.kt)("h2",{id:"example---custom-environmentflavor"},"Example - Custom Environment/Flavor"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Dev Environment",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk -f dev\n")),"Alternative:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --flavor dev\n"))),(0,l.kt)("li",{parentName:"ol"},"Staging Environment",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk -f dev\n")),"Alternative:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --flavor dev\n"))),(0,l.kt)("li",{parentName:"ol"},"Production Environment",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk -f dev\n")),"Alternative:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --flavor dev\n")))),(0,l.kt)("h2",{id:"example---custom-version-and-environment-combination"},"Example - Custom Version and Environment Combination"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --release -f prod\n")),(0,l.kt)("h2",{id:"example---custom-target"},"Example - Custom Target"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --target [url_file *optional]\n")),(0,l.kt)("p",null,"Alternative:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --t [url_file *optional]\n")),(0,l.kt)("h2",{id:"example---custom-morphemeyaml"},"Example - Custom morpheme.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --morpheme-yaml [custom_path]\n")),(0,l.kt)("h2",{id:"example---custom-build-number"},"Example - Custom Build Number"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --build-number [build_number]\n")),(0,l.kt)("p",null,"For example, we create an apk file with the custom build number ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --build-number 1.0.0\n")),(0,l.kt)("h2",{id:"example---custom-build-name"},"Example - Custom Build Name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --build-name [build_name]\n")),(0,l.kt)("p",null,"For example, we create an apk file with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"application_release")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --build-name application_release\n")),(0,l.kt)("h2",{id:"example---no-obfuscate"},"Example - No Obfuscate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --[no-]obfuscate\n")),(0,l.kt)("h2",{id:"example---split-debug-info"},"Example - Split Debug Info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"morpheme build apk --split-debug-info\n")))}d.isMDXComponent=!0}}]);