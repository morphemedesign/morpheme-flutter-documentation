---
sidebar_position: 10
---

# Service Locator

Service locator using [get_it](https://pub.dev/packages/get_it), but you don't worry about this cause if you use Morpheme Starter Kit and Morpheme CLI all locator was handle by generated.

All locator you can find in:

- `core/lib/src/locator.dart`
- in every features you can find (e.g auth `features/auth/lib/locator.dart`)
- `lib/locator.dart` all features and core locator setup in this file

    ```dart
    void setupLocator() {
      locator.registerLazySingleton(() => Routes.router);
      setupLocatorFeatureCore();
      setupLocatorFeatureAuth();
      setupLocatorFeatureOnboarding();
      setupLocatorFeatureHome();
      setupLocatorFeatureNews();
      setupLocatorFeatureProfile();
      setupLocatorFeatureSelling();
    }
    ```

Call `setupLocator()` in `main`

```dart
void main() async {
  // usePathUrlStrategy();
  runZonedGuarded<Future<void>>(() async {
    WidgetsFlutterBinding.ensureInitialized();

    setupLocator();

    runApp(const MyApp());
  }, (error, stack) {
    log(error.toString(), error: error, stackTrace: stack);
    // FirebaseCrashlytics.instance.recordError(error, stack, fatal: true);
  });
}
```
