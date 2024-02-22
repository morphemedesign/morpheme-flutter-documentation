---
sidebar_position: 1
---

# Getting Started

## Requirement

- Dart SDK 3.2 - latest
- Flutter: 3.16.0 - latest

:::note

- Dart SDK Installation **[Dart SDK](https://dart.dev/get-dart)**
- Flutter SDK Installation **[Flutter SDK](https://docs.flutter.dev/development/tools/sdk/releases?tab=macos)**

:::

## IDE Recommendation

- [VSCode](https://code.visualstudio.com/)

## Installations

Install current version `morpheme_cli` by this command :

```bash
dart pub global activate morpheme_cli
```

   Make sure morpheme cli was installed, you can check by this command :

```bash
morpheme -v
```

```console title="Output"
Morpheme CLI 1.0.0
```

If this directory is missing from your PATH, locate the file for your platform and add it.

| Platform       | Cache location               |
|----------------|------------------------------|
| macOS or Linux | HOME/.pub-cache/bin          |
| Windows*       | %LOCALAPPDATA%\Pub\Cache\bin |

:::info

If you want install spesific version morpheme cli you need to follow this step:

```bash
dart pub global activate morpheme_cli@1.0.0
```

:::

### Additional Tools Installations

1. Install `flutterfire` for requirement command `morpheme firebase`.

   You can install with `dart pub global activate flutterfire_cli`

2. Install `gherkin` for requirement command `morpheme cucumber`.

   Install gherkin executable and make sure to export to your PATH from this [Gherkin Executable](https://github.com/morphemedesign/morpheme-flutter-cli/releases/tag/cucumber)

3. Install `npm` for requirement command `morpheme cucumber` to generate report integration test.

   You can follow installation in [nodejs](https://nodejs.org/en)

4. Install `lcov` for requirement command `morpheme coverage`.

   Install lcov with follow [this installation](https://github.com/linux-test-project/lcov)

## Usage

To use the Morpheme CLI, you must run the `morpheme` command from the terminal on your project directory.

:::caution

This CLI can only be used on Morpheme Flutter Starter Kit, please clone it first and configure it based on the documentation on the following link **[Morpheme Flutter Starter Kit](../starter_kit/started)**

:::
