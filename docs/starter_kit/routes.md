---
sidebar_position: 9
---

# Routes

Routes we recommend use [GoRouter](https://pub.dev/packages/go_router) to easy navigation, deeplink and well maintained.

## Setup

Routes in Morpheme you can find it in two files

1. `lib/routes/routes.dart`

    Structure in this file `Routes`

    ```dart
    abstract class Routes {
        static GoRouter router = GoRouter(
            navigatorKey: rootNavigatorKey,
            debugLogDiagnostics: kDebugMode,
            initialLocation: joinRoutes([MorphemeRoutes.splash]),
            routes: [
              GoRoute(
                 path: joinRoutes([MorphemeRoutes.splash]),
                 builder: (context, state) => const SplashPage(),
               ),
              GoRoute(
                path: joinRoutes([MorphemeRoutes.onboarding]),
                builder: (context, state) => const OnboardingPage(),
              ),
              GoRoute(
                path: joinRoutes([MorphemeRoutes.login]),
                builder: (context, state) => const LoginPage(),
                routes: [
                  GoRoute(
                    path: MorphemeRoutes.register,
                    builder: (context, state) => const RegisterPage(),
                  ),
                  GoRoute(
                    path: MorphemeRoutes.forgotPassword,
                    builder: (context, state) => const ForgotPasswordPage(),
                  ),
                ],
              ),
              StatefulShellRoute.indexedStack(
                  builder: (context, state, navigationShell) =>
                      MainPage(navigationShell: navigationShell),
                  branches: [
                    ...homeRoutes,
                    ...newsRoutes,
                    ...profileRoutes,
                  ],
                ),
              ],
        );
    }
    ```

    Register `GoRouter` in service locator [get_it](https://pub.dev/packages/get_it)

    ```dart title="lib/locator.dart"
    void setupLocator() {
        locator.registerLazySingleton(() => Routes.router); // add this
        setupLocatorFeatureCore();
        setupLocatorFeatureAuth();
        setupLocatorFeatureOnboarding();
        setupLocatorFeatureHome();
        setupLocatorFeatureNews();
        setupLocatorFeatureProfile();
        setupLocatorFeatureSelling();
    }
    ```

    And then setup router in `MaterialApp.router`

    ```dart title="lib/main.dart"
    class MyApp extends StatelessWidget {

    const MyApp({super.key});
        @override
        Widget build(BuildContext context) {
            final router = locator<GoRouter>();

            return BlocProvider(
            create: (context) => GlobalCubit(),
                child: Builder(builder: (context) {
                    return MaterialApp.router(
                    title: 'Morpheme',
                    scaffoldMessengerKey: scaffoldMessengerKey,
                    theme: context.selectedTheme.themeData,
                    darkTheme: context.selectedTheme.themeData,
                    locale: context.selectedLocale,
                    localizationsDelegates: S.localizationsDelegates,
                    supportedLocales: S.supportedLocales,
                    routerConfig: router, // add this
                    );
                }),
            );
        }
    }
    ```

2. `core/lib/src/constants/src/morpheme_routes.dart`

    In this file we separate 3 part

    1. Constants path name class `MorphemeRoutes`

        ```dart
        abstract final class MorphemeRoutes {        
          static const String splash = '/';
          static const String onboarding = 'onboarding';
          static const String login = 'login';
          static const String register = 'register';
          static const String forgotPassword = 'forgot-password';

          static const String main = 'main';
          static const String home = 'home';
          static const String news = 'news';
          static const String profile = 'profile';

          static const String selling = 'selling';
        }
        ```

    2. Path for routes `PathRoutes`

        in PathRoutes we have 2 way to set path

        1. use `joinRoutes` this is static way to join path (e.g joinRoutes(['auth', 'login']) than result '/auth/login')
        2. use `dynamicRoutes` this dynamic way to define path (e.g last route is '/auth' now you add dynamicRoutes('login') than result is '/auth/login')

        ```dart
        abstract final class PathRoutes {
          static String get onboarding => joinRoutes([MorphemeRoutes.onboarding]);

          static String get login => joinRoutes([MorphemeRoutes.login]);
          static String get register => dynamicRoutes(MorphemeRoutes.register);
          static String get forgotPassword =>
              dynamicRoutes(MorphemeRoutes.forgotPassword);

          static String get home => joinRoutes([MorphemeRoutes.home]);
          static String get news => joinRoutes([MorphemeRoutes.news]);
          static String get profile => joinRoutes([MorphemeRoutes.profile]);

          static String get selling => dynamicRoutes(MorphemeRoutes.selling);
        }
        ```

    3. Extension om `BuildContext` for easy use later in `MorphemeRoutesContextExtension`

        ```dart
        extension MorphemeRoutesContextExtension on BuildContext {
          void goToOnboading() => go(PathRoutes.onboarding);
          void goToLogin() => go(PathRoutes.login);
          void goToRegister() => go(PathRoutes.register);
          void goToForgotPassword() => go(PathRoutes.forgotPassword);

          void goToHome() => go(PathRoutes.home);
          void goToNews() => go(PathRoutes.news);
          void goToProfile() => go(PathRoutes.profile);

          void goToSelling({
            required Function(dynamic result) onReturn,
          }) =>
              goWithResult(PathRoutes.selling, onReturn: onReturn);
        }
        ```

## How to Navigate

To use navigate if you already done to define then call from extension `BuildContext`.

```dart
InkWell(
    onTap: () => context.goToLogin();
    child: Text('Login'),
),
```
