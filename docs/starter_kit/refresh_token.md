---
sidebar_position: 16
---

# Refresh Token

Refresh token used [morpheme_http](https://pub.dev/packages/morpheme_http) and setup in `core/lib/src/locator.dart`

```dart title="core/lib/src/locator.dart"
void setupLocatorFeatureCore() {
  ...
  locator.registerLazySingleton(
    () => MorphemeHttp(
      timeout: 30000,
      showLog: false,
      morphemeInspector: kIsWeb ? null : locator(),
      refreshTokenOption: RefreshTokenOption(
        method: RefreshTokenMethod.post,
        url: MorphemeEndpoints.refreshToken,
        condition: (request, response) =>
            request.url != MorphemeEndpoints.login && response.statusCode == 401,
        getBody: () async {
          final refreshToken =
              await FlutterSecureStorageHelper.getRefreshToken();
          return {
            'refresh_token': refreshToken ?? '',
          };
        },
        onResponse: (response) async {
          final map = jsonDecode(response.body);
          await FlutterSecureStorageHelper.saveRefreshToken(map['token']);
        },
      ),
    ),
  );
}
```
