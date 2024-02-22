---
sidebar_position: 14
---

# Authorization

Authorization used [morpheme_http](https://pub.dev/packages/morpheme_http) and setup in `core/lib/src/locator.dart`

```dart title="core/lib/src/locator.dart"
void setupLocatorFeatureCore() {
  ...
  locator.registerLazySingleton(
    () => MorphemeHttp(
      timeout: 30000,
      showLog: false,
      morphemeInspector: kIsWeb ? null : locator(),
      authTokenOption: AuthTokenOption( // add authTokenOption to set automatically authorization when call api
        typeHeader: 'Authorization',
        prefixHeader: 'Bearer',
        getToken: () => FlutterSecureStorageHelper.getToken(),
        authCondition: (request, response) =>
            request.url == MorphemeEndpoints.login,
        onAuthTokenResponse: (response) async {
          final map = jsonDecode(response.body);
          await FlutterSecureStorageHelper.saveToken(map['token']);
          await FlutterSecureStorageHelper.saveRefreshToken(
            map['refresh_token'],
          );
        },
        clearCondition: (request, response) =>
            request.url == MorphemeEndpoints.logout,
        onClearToken: () => FlutterSecureStorageHelper.removeToken(),
        excludeEndpointUsageToken: [
          MorphemeEndpoints.login,
          MorphemeEndpoints.register,
        ],
      ),
    ),
  );
}
```
