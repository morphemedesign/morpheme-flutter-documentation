---
sidebar_position: 11
---

# Dependency Manager

Centeralize all depedency in one module make more readable and easy maintenance to depedencies we used, module dependency_manager you can find in `core/packages/depedency_manager` and `core/packages/morpheme_library` for morpheme depedency.

Dependency Manager just define depedency in pubspec.yaml and export it.

```yaml title="core/packages/depedency_manager/pubspec.yaml"
name: dependency_manager
description: All dependency package of project here.
version: 0.0.1

publish_to: "none"

environment:
  sdk: ">=3.0.0 <4.0.0"
  flutter: ">=3.10.0"

dependencies:
  flutter:
    sdk: flutter

  # Google Font
  google_fonts: ^6.1.0

  # Navigation
  go_router: ^13.2.0

  # Service Locator
  get_it: ^7.6.7

  # Storage
  flutter_secure_storage: ^9.0.0

  # Component
  skeletonizer: ^1.0.1

  # Utils
  equatable: ^2.0.5
  collection: ^1.18.0

  # Firebase
  # firebase_core: ^2.25.4
  # firebase_analytics: ^10.8.5
  # firebase_crashlytics: ^3.4.14
  # firebase_remote_config: ^4.3.13

  # Test
  mocktail: ^1.0.3
  bloc_test: ^9.1.6

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.1

flutter:
  uses-material-design: true
```

and export all you need

```dart title="core/packages/dependency_manager/lib/dependency_manager.dart"
library dependency_manager;

export 'package:collection/collection.dart';
export 'package:equatable/equatable.dart';
// export 'package:firebase_analytics/firebase_analytics.dart';
// export 'package:firebase_core/firebase_core.dart';
// export 'package:firebase_crashlytics/firebase_crashlytics.dart';
// export 'package:firebase_remote_config/firebase_remote_config.dart';
export 'package:flutter_secure_storage/flutter_secure_storage.dart';
export 'package:get_it/get_it.dart';
export 'package:go_router/go_router.dart';
export 'package:google_fonts/google_fonts.dart';
export 'package:skeletonizer/skeletonizer.dart';

```
