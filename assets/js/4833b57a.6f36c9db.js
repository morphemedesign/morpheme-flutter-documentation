"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[2804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},l="Environment (morpheme.yaml)",o={unversionedId:"starter_kit/environment",id:"starter_kit/environment",title:"Environment (morpheme.yaml)",description:"Summary",source:"@site/docs/starter_kit/environment.md",sourceDirName:"starter_kit",slug:"/starter_kit/environment",permalink:"/morpheme-flutter-documentation/docs/starter_kit/environment",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mySidebars",previous:{title:"Concepts",permalink:"/morpheme-flutter-documentation/docs/starter_kit/concepts"},next:{title:"Assets",permalink:"/morpheme-flutter-documentation/docs/starter_kit/assets"}},s={},m=[{value:"Summary",id:"summary",level:2},{value:"Project Name",id:"project-name",level:2},{value:"Example Default (Morpheme)",id:"example-default-morpheme",level:3},{value:"Example Custom (Example)",id:"example-custom-example",level:3},{value:"List Usages",id:"list-usages",level:3},{value:"Flavor",id:"flavor",level:2},{value:"Usages",id:"usages",level:3},{value:"Flutter",id:"flutter",level:4},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4},{value:"Localization / Internationalization",id:"localization--internationalization",level:2},{value:"Configuring localization in morpheme.yaml file",id:"configuring-localization-in-morphemeyaml-file",level:3},{value:"Firebase",id:"firebase",level:2},{value:"Assets",id:"assets",level:2},{value:"Configuring assets in morpheme.yaml file",id:"configuring-assets-in-morphemeyaml-file",level:3},{value:"Coverage",id:"coverage",level:2},{value:"Configuring coverage in morpheme.yaml file",id:"configuring-coverage-in-morphemeyaml-file",level:3},{value:"References",id:"references",level:2}],p={toc:m};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environment-morphemeyaml"},"Environment (morpheme.yaml)"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"morpheme.yaml")," is the config environment used by the morpheme flutter starter kit, developers are required to do run ",(0,r.kt)("inlineCode",{parentName:"p"},"morpheme init")," or copy the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"morpheme.yaml")," file. keep ",(0,r.kt)("inlineCode",{parentName:"p"},"morpheme.yaml")," secret and ignore dare repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},'project_name: Morpheme\nflavor:\n  dev:\n    FLAVOR: dev\n    APP_NAME: Morpheme Dev\n    ANDROID_APPLICATION_ID: design.morpheme.dev\n    IOS_APPLICATION_ID: design.morpheme.dev\n    BASE_URL: https://reqres.in/api\n  stag:\n    FLAVOR: stag\n    APP_NAME: Morpheme Stag\n    ANDROID_APPLICATION_ID: design.morpheme.stag\n    IOS_APPLICATION_ID: design.morpheme.stag\n    BASE_URL: https://reqres.in/api\n  prod:\n    FLAVOR: prod\n    APP_NAME: Morpheme\n    ANDROID_APPLICATION_ID: design.morpheme\n    IOS_APPLICATION_ID: design.morpheme\n    BASE_URL: https://reqres.in/api\n\nfirebase:\n  dev:\n    project_id: "morpheme-dev"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n  stag:\n    project_id: "morpheme-stag"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n  prod:\n    project_id: "morpheme"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n\nlocalization:\n  arb_dir: assets/assets/l10n\n  template_arb_file: id.arb\n  output_localization_file: s.dart\n  output_class: S\n  output_dir: core/lib/src/l10n\n  replace: false\n\nassets:\n  pubspec_dir: assets\n  assets_dir: assets/assets\n  output_dir: assets/lib\n  create_library_file: true\n  \ncoverage:\n  lcov_dir: coverage/lcov.info\n  output_html_dir: coverage/html\n  remove:\n    - "*/mock/*"\n    - "*.freezed.*"\n    - "*.g.*"\n    - "*/l10n/*"\n    - "*_state.dart"\n    - "*_event.dart"\n    - "**/locator.dart"\n    - "**/environtment.dart"\n    - "core/lib/src/test/*"\n    - "core/lib/src/constants/*"\n    - "core/lib/src/themes/*"\n    - "lib/routes/routes.dart"\n    - "lib/generated_plugin_registrant.dart"\n')),(0,r.kt)("h2",{id:"project-name"},"Project Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project_name")," will be used in some generators for naming files, classes and variables. project_name's default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"Morpheme")),(0,r.kt)("h3",{id:"example-default-morpheme"},"Example Default (Morpheme)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},"...\nproject_name: Morpheme\n...\n")),(0,r.kt)("p",null,"example to generate assets if we use default or Morpheme for project_name then we run command ",(0,r.kt)("inlineCode",{parentName:"p"},"morpheme assets"),", we see file generated like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Folder Structure"',title:'"Folder','Structure"':!0},".\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 example.png\n\u2502   \u251c\u2500\u2500 lib\n\u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 morpheme_images.dart        # filename generate will prefix morpheme\n\u2514\u2500\u2500 ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="assets/lib/src/morpheme_images.dart"',title:'"assets/lib/src/morpheme_images.dart"'},"abstract class MorphemeImages {             // Prefix class name with morpheme\n  // ignore: unused_field\n  static const String _assets = 'packages/assets/assets/images';\n\n  static const String example = '$_assets/example.png';\n}\n")),(0,r.kt)("h3",{id:"example-custom-example"},"Example Custom (Example)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},"...\nproject_name: Example\n...\n")),(0,r.kt)("p",null,"example to generate assets if we use default or Morpheme for project_name then we run command ",(0,r.kt)("inlineCode",{parentName:"p"},"morpheme assets"),", we see file generated like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Folder Structure"',title:'"Folder','Structure"':!0},".\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u251c\u2500\u2500 images\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 example.png\n\u2502   \u251c\u2500\u2500 lib\n\u2502   \u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 example_images.dart        # filename generate will prefix example\n\u2514\u2500\u2500 ...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="assets/lib/src/example_images.dart"',title:'"assets/lib/src/example_images.dart"'},"abstract class ExampleImages {             // Prefix class name with example\n  // ignore: unused_field\n  static const String _assets = 'packages/assets/assets/images';\n\n  static const String example = '$_assets/example.png';\n}\n")),(0,r.kt)("h3",{id:"list-usages"},"List Usages"),(0,r.kt)("p",null,"For more information on the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"project_name"),", see the following list:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./assets"},"Assets")," or CLI ",(0,r.kt)("a",{parentName:"li",href:"../morpheme_cli/generate/assets"},"morpheme assets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./json2dart"},"Json2dart")," or CLI ",(0,r.kt)("a",{parentName:"li",href:"../morpheme_cli/generate/json2dart"},"morpheme json2dart")),(0,r.kt)("li",{parentName:"ul"},"CLI ",(0,r.kt)("a",{parentName:"li",href:"../morpheme_cli/generate/config"},"morpheme config")),(0,r.kt)("li",{parentName:"ul"},"CLI ",(0,r.kt)("a",{parentName:"li",href:"../morpheme_cli/generate/endpoint"},"morpheme endpoint")),(0,r.kt)("li",{parentName:"ul"},"CLI ",(0,r.kt)("a",{parentName:"li",href:"../morpheme_cli/generate/api"},"morpheme api")),(0,r.kt)("li",{parentName:"ul"},"CLI ",(0,r.kt)("a",{parentName:"li",href:"../morpheme_cli/generate/unit-test"},"morpheme unit-test"))),(0,r.kt)("h2",{id:"flavor"},"Flavor"),(0,r.kt)("p",null,"Flavor has 3 variants ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"stag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prod"),", each of the variants has the same key but the value can be different from one another. Keys that are ",(0,r.kt)("inlineCode",{parentName:"p"},"FLAVOR"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_NAME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ANDROID_APPLICATION_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IOS_APPLICATION_ID")," used on Android and iOS natively."),(0,r.kt)("p",null,"The way it works is that the flavor will be changed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dart-define")," in cli argument which is used during run or build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"...\nflavor:\n  dev:\n    FLAVOR: dev                                         # Mandatory\n    APP_NAME: Morpheme Dev                                  # Mandatory\n    ANDROID_APPLICATION_ID: design.morpheme.dev         # Mandatory\n    IOS_APPLICATION_ID: design.morpheme.dev             # Mandatory\n    BASE_URL: https://reqres.in/api\n  stag:\n    FLAVOR: stag                                        # Mandatory\n    APP_NAME: Morpheme Stag                                 # Mandatory\n    ANDROID_APPLICATION_ID: design.morpheme.stag        # Mandatory\n    IOS_APPLICATION_ID: design.morpheme.stag            # Mandatory\n    BASE_URL: https://reqres.in/api\n  prod:\n    FLAVOR: prod                                        # Mandatory\n    APP_NAME: Morpheme                                      # Mandatory\n    ANDROID_APPLICATION_ID: design.morpheme             # Mandatory\n    IOS_APPLICATION_ID: design.morpheme                 # Mandatory\n    BASE_URL: https://reqres.in/api\n...\n")),(0,r.kt)("h3",{id:"usages"},"Usages"),(0,r.kt)("h4",{id:"flutter"},"Flutter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:'title="core/lib/scr/environment.dart"',title:'"core/lib/scr/environment.dart"'},"class Environment {\n  static const bool isDev = String.fromEnvironment('FLAVOR') == 'dev';\n  static const bool isNotDev = String.fromEnvironment('FLAVOR') != 'dev';\n  static const bool isStag = String.fromEnvironment('FLAVOR') == 'stag';\n  static const bool isNotStag = String.fromEnvironment('FLAVOR') != 'stag';\n  static const bool isProd = String.fromEnvironment('FLAVOR') == 'prod';\n  static const bool isNotProd = String.fromEnvironment('FLAVOR') != 'prod';\n\n  static const String baseUrl = String.fromEnvironment('BASE_URL');\n}\n")),(0,r.kt)("h4",{id:"android"},"Android"),(0,r.kt)("p",null,"To get dart define from argument on android add in ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},"...\ndef dartEnvironmentVariables = []\nif (project.hasProperty('dart-defines')) {\n    dartEnvironmentVariables = project.property('dart-defines')\n        .split(',')\n        .collectEntries { entry ->\n            def pair = new String(entry.decodeBase64(), 'UTF-8').split('=')\n            [(pair.first()): pair.last()]\n        }\n}\n\nandroid {\n    ...\n    defaultConfig {\n        applicationId dartEnvironmentVariables.APPLICATION_ID               // Take from dart define\n        minSdkVersion minSdk\n        targetSdkVersion targetSdk\n        versionCode flutterVersionCode.toInteger()\n        versionName flutterVersionName \n        resValue \"string\", \"app_name\", dartEnvironmentVariables.APP_NAME    // Take from dart define\n        multiDexEnabled = true\n    }\n}\n")),(0,r.kt)("h4",{id:"ios"},"iOS"),(0,r.kt)("p",null,"To get the dart define of the arguments on ios add a pre-action to the scheme runner"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"flavor-preaction-ios",src:n(7027).Z,width:"1396",height:"896"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Type a script or drag a script file from your workspace to insert its path.\n\nfunction entry_decode() { echo "${*}" | base64 --decode; }\n\nIFS=\',\' read -r -a define_items <<< "$DART_DEFINES"\n\n\nfor index in "${!define_items[@]}"\ndo\n    define_items[$index]=$(entry_decode "${define_items[$index]}");\ndone\n\nprintf "%s\\n" "${define_items[@]}" > ${SRCROOT}/Flutter/DartDefined.xcconfig\n')),(0,r.kt)("p",null,"Then in ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug.xcconfig")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"Release.xcconfig")," add this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xcconfig"},'#include "DartDefined.xcconfig"\n')),(0,r.kt)("p",null,"Example usage on ios in ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plist"},"<key>CFBundleDisplayName</key>\n<string>${APP_NAME}</string>\n")),(0,r.kt)("h2",{id:"localization--internationalization"},"Localization / Internationalization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},"...\nlocalization:\n  arb_dir: assets/assets/l10n\n  template_arb_file: id.arb\n  output_localization_file: s.dart\n  output_class: S\n  output_dir: core/lib/src/l10n\n  replace: false\n...\n")),(0,r.kt)("h3",{id:"configuring-localization-in-morphemeyaml-file"},"Configuring localization in morpheme.yaml file"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arb-dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the template and translated arb files are located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"template-arb-file"),(0,r.kt)("td",{parentName:"tr",align:null},"The template arb file that is used as the basis for generating the Dart localization and messages files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output-localization-file"),(0,r.kt)("td",{parentName:"tr",align:null},"The filename for the output localization and localizations delegate classes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output-dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the generated localization classes are written. This option is only relevant if you want to generate the localizations code somewhere else in the Flutter project. You also need to set the synthetic-package flag to false. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," The app must import the file specified in the output-localization-file option from this directory. If unspecified, this defaults to the same directory as the input directory specified in arb-dir.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow you to replace and merge with default each root .arb if you use separate folder e.g en.arb will be maintained from generate. by default is false")))),(0,r.kt)("p",null,"Learn more about Internationalization ",(0,r.kt)("a",{parentName:"p",href:"./internationalization"},"here")),(0,r.kt)("h2",{id:"firebase"},"Firebase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},'...\nfirebase:\n  dev:\n    project_id: "morpheme-dev"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n  stag:\n    project_id: "morpheme-stag"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n  prod:\n    project_id: "morpheme"\n    token: "YOUR FIREBASE TOKEN: firebase login:ci"\n')),(0,r.kt)("p",null,"Learn more about Firebase ",(0,r.kt)("a",{parentName:"p",href:"./firebase"},"here")),(0,r.kt)("h2",{id:"assets"},"Assets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},"...\nassets:\n  pubspec_dir: assets\n  assets_dir: assets/assets\n  output_dir: assets/lib\n  create_library_file: true\n...\n")),(0,r.kt)("h3",{id:"configuring-assets-in-morphemeyaml-file"},"Configuring assets in morpheme.yaml file"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pubspec_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the module assets are located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assets_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the assets are located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assets_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the assets are located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output-dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the generated localization classes are written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create_library_file"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow to generated file dart library with export file-filed generated.")))),(0,r.kt)("p",null,"Learn more about Assets ",(0,r.kt)("a",{parentName:"p",href:"./assets"},"here")),(0,r.kt)("h2",{id:"coverage"},"Coverage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="morpheme.yaml"',title:'"morpheme.yaml"'},'...\ncoverage:\n  lcov_dir: coverage/lcov.info\n  output_html_dir: coverage/html\n  remove:\n    - "*/mock/*"\n    - "*.freezed.*"\n    - "*.g.*"\n    - "*/l10n/*"\n    - "*_state.dart"\n    - "*_event.dart"\n    - "**/locator.dart"\n    - "**/environtment.dart"\n    - "core/lib/src/test/*"\n    - "core/lib/src/constants/*"\n    - "core/lib/src/themes/*"\n    - "lib/routes/routes.dart"\n    - "lib/generated_plugin_registrant.dart"\n...\n')),(0,r.kt)("h3",{id:"configuring-coverage-in-morphemeyaml-file"},"Configuring coverage in morpheme.yaml file"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lcov_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where the lcov.info are located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output_html_dir"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory where output the generated report html are written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remove"),(0,r.kt)("td",{parentName:"tr",align:null},"Ignore or remove pattern dir / file support glob from calculate coverage.")))),(0,r.kt)("p",null,"Learn more about Coverage ",(0,r.kt)("a",{parentName:"p",href:"./coverage"},"here")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@tatsu.ukraine/flutter-2-2-dart-defines-and-breaking-changes-here-we-go-again-ce40cfea74fd"},"https://medium.com/@tatsu.ukraine/flutter-2-2-dart-defines-and-breaking-changes-here-we-go-again-ce40cfea74fd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/flutter-community/how-to-setup-dart-define-for-keys-and-secrets-on-android-and-ios-in-flutter-apps-4f28a10c4b6c"},"https://medium.com/flutter-community/how-to-setup-dart-define-for-keys-and-secrets-on-android-and-ios-in-flutter-apps-4f28a10c4b6c"))))}d.isMDXComponent=!0},7027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flavor-preaction-ios-6c4223dd20e0a779a9c7a40d5aa69a43.png"}}]);