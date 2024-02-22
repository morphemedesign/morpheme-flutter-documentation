"use strict";(self.webpackChunkmorpheme_flutter_documentation=self.webpackChunkmorpheme_flutter_documentation||[]).push([[5129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Morpheme Base",l={unversionedId:"morpheme_library/morpheme_base",id:"morpheme_library/morpheme_base",title:"Morpheme Base",description:"Link: pub.dev",source:"@site/docs/morpheme_library/morpheme_base.md",sourceDirName:"morpheme_library",slug:"/morpheme_library/morpheme_base",permalink:"/morpheme-flutter-documentation/docs/morpheme_library/morpheme_base",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebars",previous:{title:"Changelog",permalink:"/morpheme-flutter-documentation/docs/starter_kit/changelog"},next:{title:"Morpheme Cached Network Image",permalink:"/morpheme-flutter-documentation/docs/morpheme_library/morpheme_cached_netwrok_image"}},d={},s=[{value:"MorphemeStatePage dan MorphemeCubit (State Management)",id:"morphemestatepage-dan-morphemecubit-state-management",level:2},{value:"Example",id:"example",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"morpheme-base"},"Morpheme Base"),(0,i.kt)("p",null,"Link: ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/packages/morpheme_base"},"pub.dev")),(0,i.kt)("h2",{id:"morphemestatepage-dan-morphemecubit-state-management"},"MorphemeStatePage dan MorphemeCubit (State Management)"),(0,i.kt)("p",null,"To use morpheme base you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefullWidget")," and in the class extends ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," add the mixin ",(0,i.kt)("inlineCode",{parentName:"p"},"with MorphemeStatePage<T extends StatefullWidget, C extends MorphemeCubit>"),"."),(0,i.kt)("p",null,"Methods that need to be overridden ",(0,i.kt)("inlineCode",{parentName:"p"},"setCubit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"buildWidget"),". the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," method is deprecated when using ",(0,i.kt)("inlineCode",{parentName:"p"},"with MorphemeStatepage")," and is replaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"buildWidget"),"."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:core/core.dart';\nimport 'package:flutter/material.dart';\nimport 'package:onboarding/widgets/widgets.dart';\n\nimport '../cubit/onboarding_cubit.dart';\n\nclass OnboardingPage extends StatefulWidget {\n  const OnboardingPage({Key? key}) : super(key: key);\n\n  @override\n  State<OnboardingPage> createState() => _OnboardingPageState();\n}\n\nclass _OnboardingPageState extends State<OnboardingPage>\n    with MorphemeStatePage<OnboardingPage, OnboardingCubit> {\n  @override\n  OnboardingCubit setCubit() => locator();\n\n  @override\n  Widget buildWidget(BuildContext context) {\n    return Scaffold(\n      body: Stack(\n        children: [\n          PageView(\n            controller: cubit.pageController,\n            onPageChanged: cubit.onPageChange,\n            children: cubit.listOnboarding,\n          ),\n          const Positioned(\n            left: MorphemeSizes.s16,\n            right: MorphemeSizes.s16,\n            bottom: MorphemeSizes.s16,\n            child: OnboardingButton(),\n          ),\n        ],\n      ),\n    );\n  }\n}\n")),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"MorphemeCubit")," first we need ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," from the data class which added the ",(0,i.kt)("inlineCode",{parentName:"p"},"copyWith")," method to replace the variables in ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"part of 'onboarding_cubit.dart';\n\nclass OnboardingStateCubit extends Equatable {\n  const OnboardingStateCubit({\n    required this.selected,\n    required this.isLast,\n  });\n\n  final int selected;\n  final bool isLast;\n\n  OnboardingStateCubit copyWith({\n    int? selected,\n    bool? isLast,\n  }) {\n    return OnboardingStateCubit(\n      selected: selected ?? this.selected,\n      isLast: isLast ?? this.isLast,\n    );\n  }\n\n  @override\n  List<Object?> get props => [selected, isLast]; // add all variables to list props\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MorphemeCubit")," is a controller for all the logic that will be used, by creating a class with extends ",(0,i.kt)("inlineCode",{parentName:"p"},"MorphemeCubit<State>")," in the constructor must call ",(0,i.kt)("inlineCode",{parentName:"p"},"super(State())")," to give the initial value to ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:core/core.dart';\nimport 'package:flutter/material.dart';\n\nimport '../widgets/onboarding.dart';\n\npart 'onboarding_state.dart';\n\nclass OnboardingCubit extends MorphemeCubit<OnboardingStateCubit> {\n  OnboardingCubit()\n      : super(const OnboardingStateCubit( // must call super with value initial state\n          selected: 0,\n          isLast: false,\n        ));\n  ...\n  @override\n  void initState(BuildContext context) async {}\n\n  @override\n  void initAfterFirstLayout(BuildContext context) {}\n\n  @override\n  List<BlocProvider> blocProviders(BuildContext context) => [];\n\n  @override\n  List<BlocListener> blocListeners(BuildContext context) => [];\n\n  @override\n  void dispose() {}\n\n  void onPageChange(int value) => emit(state.copyWith(\n        selected: value,\n        isLast: value == listOnboarding.length - 1,\n      ));\n\n ...\n}\n")),(0,i.kt)("p",null,"here's an example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"MorphemeCubit")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"bloc")," to fetch data to api on ",(0,i.kt)("inlineCode",{parentName:"p"},"login_cubit.dart"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:core/core.dart';\nimport 'package:flutter/foundation.dart';\nimport 'package:flutter/material.dart';\n\nimport '../../data/models/body/login_body.dart';\nimport '../bloc/login/login_bloc.dart';\n\npart 'login_state.dart';\n\nclass LoginCubit extends MorphemeCubit<LoginStateCubit> {\n  LoginCubit({required this.loginBloc}) : super(LoginStateCubit());\n\n  final LoginBloc loginBloc;\n\n  ...\n\n  @override\n  List<BlocProvider> blocProviders(BuildContext context) => [\n        BlocProvider<LoginBloc>(create: (context) => loginBloc),\n      ];\n\n  @override\n  List<BlocListener> blocListeners(BuildContext context) => [\n        BlocListener<LoginBloc, LoginState>(listener: _listenerLogin),\n      ];\n\n  @override\n  void dispose() {\n    try {\n      loginBloc.close();\n    } catch (e) {\n      if (kDebugMode) print(e.toString());\n    }\n  }\n\n  ...\n\n  void onLoginWithEmailPressed(BuildContext context) {\n    _setValidate();\n    if (_isValidEmailPassword()) {\n      _fetchLogin(LoginBody(email: emailKey.text, password: passwordKey.text));\n    }\n  }\n\n  ...\n\n  void _fetchLogin(LoginBody body) {\n    loginBloc.add(FetchLogin(body));\n  }\n\n  void _listenerLogin(BuildContext context, LoginState state) {\n    if (state is LoginFailed) {\n      state.failure.showSnackbar(context);\n    } else if (state is LoginSuccess) {\n      context.go(MorphemeRoutes.main);\n    }\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initState")," : same method on ",(0,i.kt)("inlineCode",{parentName:"li"},"StatefullWidget")," when doing ",(0,i.kt)("inlineCode",{parentName:"li"},"initState"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initAfterFirstLayout")," : method that is called when the application finishes rendering what is in the ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," widget."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocProviders")," : initialize ",(0,i.kt)("inlineCode",{parentName:"li"},"bloc")," to be used in this method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocListeners")," : catch callback of ",(0,i.kt)("inlineCode",{parentName:"li"},"state bloc")," which will be listened when ",(0,i.kt)("inlineCode",{parentName:"li"},"state bloc")," moves to another ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dispose")," : same method on ",(0,i.kt)("inlineCode",{parentName:"li"},"StatefullWidget")," when doing ",(0,i.kt)("inlineCode",{parentName:"li"},"dispose"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"emit")," : method used to change ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"reactive")," change UI that requires ",(0,i.kt)("inlineCode",{parentName:"li"},"state"),".")),(0,i.kt)("p",null,"for pages that need reactive data from ",(0,i.kt)("inlineCode",{parentName:"p"},"MorphemeCubit")," we can do the extensions ",(0,i.kt)("inlineCode",{parentName:"p"},"context.select")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"context.watch")," and call them in ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),". then as for ",(0,i.kt)("inlineCode",{parentName:"p"},"context.read")," is used to call methods that are in ",(0,i.kt)("inlineCode",{parentName:"p"},"MorphemeCubit")," and are not listeners, for complete documentation it is in ",(0,i.kt)("a",{parentName:"p",href:"https://bloclibrary.dev/"},"bloclibrary.dev"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context.select")," : listen for changes to a selected variable from ",(0,i.kt)("inlineCode",{parentName:"li"},"MorphemeCubit")," or from ",(0,i.kt)("inlineCode",{parentName:"li"},"State MorphemeCubit"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// fetch data from OnboardingCubit\nfinal listOnboarding = context.select((OnboardingCubit element) => element.listOnboarding);\n\n// fetch data from OnboardingCubit state\nfinal selected = context.select((OnboardingCubit element) => element.state.selected);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context.watch")," : listen for ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," changes, usually used to listen for ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," fetch API changes starting from ",(0,i.kt)("inlineCode",{parentName:"li"},"Initial"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Loading"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Succss")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"Failed"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"final watchLoginState = context.watch<LoginBloc>().state;\n...\nMorphemeButton.elevated(\n  isLoading: watchLoginState is LoginLoading,\n  text: context.s.loginWithEmail,\n  onPressed: () =>\n      context.read<LoginCubit>().onLoginWithEmailPressed(context),\n)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context.read")," : usually used for calling methods in ",(0,i.kt)("inlineCode",{parentName:"li"},"MorphemeCubit"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"MorphemeButton.elevated(\n  isLoading: watchLoginState is LoginLoading,\n  text: context.s.loginWithEmail,\n  onPressed: () =>\n      context.read<LoginCubit>().onLoginWithEmailPressed(context),\n)\n")),(0,i.kt)("p",null,"and the following is an example of implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"state management")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding_button.dart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:core/core.dart';\nimport 'package:flutter/material.dart';\nimport 'package:onboarding/cubit/onboarding_cubit.dart';\nimport 'package:onboarding/widgets/indicator.dart';\n\nclass OnboardingButton extends StatelessWidget {\n  const OnboardingButton({Key? key}) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    final listOnboarding =\n        context.select((OnboardingCubit element) => element.listOnboarding);\n    final selected =\n        context.select((OnboardingCubit element) => element.state.selected);\n    final isLast =\n        context.select((OnboardingCubit element) => element.state.isLast);\n\n    return Row(\n      mainAxisAlignment: MainAxisAlignment.spaceBetween,\n      children: [\n        isLast\n            ? const SizedBox(width: 100)\n            : MorphemeButton.text(\n                isExpand: false,\n                text: context.s.skip,\n                style: TextButton.styleFrom(\n                  minimumSize: const Size.fromWidth(100),\n                ),\n                onPressed: context.read<OnboardingCubit>().onSkipPressed,\n              ),\n        Indicator(length: listOnboarding.length, selected: selected),\n        MorphemeButton.elevated(\n          text: isLast ? context.s.started : context.s.next,\n          isExpand: false,\n          style: ElevatedButton.styleFrom(\n            minimumSize: const Size.fromWidth(100),\n          ),\n          onPressed: () =>\n              context.read<OnboardingCubit>().onNextPressed(context),\n        ),\n      ],\n    );\n  }\n}\n")))}c.isMDXComponent=!0}}]);