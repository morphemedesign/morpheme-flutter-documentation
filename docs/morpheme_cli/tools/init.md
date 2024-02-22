---
sidebar_position: 2
---

# Init

This command is used to initialize the project to generate project configuration files in the form of `morpheme.yaml` files.

```bash
morpheme init
```

Example result generated file from `morpheme init`

```yaml title="morpheme.yaml"
flavor:
  dev:
    FLAVOR: dev
    APP_NAME: Morpheme Dev
    ANDROID_APPLICATION_ID: design.morpheme.dev
    IOS_APPLICATION_ID: design.morpheme.dev
    BASE_URL: https://reqres.in/api
  stag:
    FLAVOR: stag
    APP_NAME: Morpheme Stag
    ANDROID_APPLICATION_ID: design.morpheme.stag
    IOS_APPLICATION_ID: design.morpheme.stag
    BASE_URL: https://reqres.in/api
  prod:
    FLAVOR: prod
    APP_NAME: Morpheme
    ANDROID_APPLICATION_ID: design.morpheme
    IOS_APPLICATION_ID: design.morpheme
    BASE_URL: https://reqres.in/api

firebase:
  dev:
    project_id: "morpheme-dev"
    token: "YOUR FIREBASE TOKEN: firebase login:ci"
  stag:
    project_id: "morpheme-stag"
    token: "YOUR FIREBASE TOKEN: firebase login:ci"
  prod:
    project_id: "morpheme"
    token: "YOUR FIREBASE TOKEN: firebase login:ci"

localization:
  arb_dir: assets/assets/l10n
  template_arb_file: id.arb
  output_localization_file: s.dart
  output_class: S
  output_dir: core/lib/src/l10n
  replace: false

assets:
  pubspec_dir: assets
  assets_dir: assets/assets
  output_dir: assets/lib
  create_library_file: true
  
coverage:
  lcov_dir: coverage/lcov.info
  output_html_dir: coverage/html
  remove:
    - "*/mock/*"
    - "*.freezed.*"
    - "*.g.*"
    - "*/l10n/*"
    - "*_state.dart"
    - "*_event.dart"
    - "**/locator.dart"
    - "**/environtment.dart"
    - "core/lib/src/test/*"
    - "core/lib/src/constants/*"
    - "core/lib/src/themes/*"
    - "lib/routes/routes.dart"
    - "lib/generated_plugin_registrant.dart"
```

## Options

```bash
morpheme init [arguments]
```

To see all available options and flags, run `morpheme init --help`.

### Available Options

- App Name :

| App Name | Description |
|----------|-------------|
| `--app-name [app-name]` | Define application name in generate morpheme.yaml |
