---
sidebar_position: 15
---

# Middleware

Middleware used [morpheme_http](https://pub.dev/packages/morpheme_http) and setup in `core/lib/src/locator.dart`

```dart title="core/lib/src/locator.dart"
void setupLocatorFeatureCore() {
  ...
  locator.registerLazySingleton(
    () => MorphemeHttp(
      timeout: 30000,
      showLog: false,
      morphemeInspector: kIsWeb ? null : locator(),
      middlewareResponseOption: MiddlewareResponseOption(
        condition: (request, response) {
          return response.statusCode == 401;
        },
        onResponse: (response) async {
          locator<GoRouter>().go(PathRoutes.login);
        },
      ),
    ),
  );
}
```
