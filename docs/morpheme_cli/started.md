---
sidebar_position: 1
---

# Getting Started

## Requirements

- Dart SDK: >= 3.6.0
- Flutter SDK: >= 3.35.0

:::note

- **[Dart SDK Installation](https://dart.dev/get-dart)**
- **[Flutter SDK Installation](https://docs.flutter.dev/get-started/install)**

:::

## IDE Recommendation

- [VSCode](https://code.visualstudio.com/)

## Installation

Install the latest version of `morpheme_cli` using the following command:

```bash
dart pub global activate morpheme_cli
```

:::info

If you need to install a specific version of `morpheme_cli`, use:

```bash
dart pub global activate morpheme_cli@<version>
```

:::

### Verify Installation

After installation, verify that `morpheme_cli` is correctly installed and check the status of all dependencies by running:

```bash
morpheme doctor
```

This command will check for all required and optional tools. If any tools are missing, it will provide instructions on how to install them.

If the `morpheme` command is not found, ensure your PATH is configured correctly.

| Platform       | Cache Location               |
|----------------|------------------------------|
| macOS or Linux | `$HOME/.pub-cache/bin`       |
| Windows        | `%LOCALAPPDATA%\Pub\Cache\bin` |

### Additional Tools

The `morpheme doctor` command checks for these additional tools, which enable extended functionality:

1. **FlutterFire CLI** (`flutterfire`)
   - Required for: `morpheme firebase`
   - Install: `dart pub global activate flutterfire_cli`

2. **Gherkin** (`gherkin`)
   - Required for: `morpheme cucumber`
   - Install: download from **[Gherkin Executable](https://github.com/morphemedesign/morpheme-flutter-cli/releases/tag/cucumber)** and add to PATH.

3. **Node.js & npm** (`npm`)
   - Required for: Generating integration test reports with `morpheme cucumber`.
   - Install: **[Node.js](https://nodejs.org/en)**

4. **LCOV** (`lcov`)
   - Required for: `morpheme coverage`
   - Install: **[LCOV Installation Guide](https://github.com/linux-test-project/lcov)**

5. **Shorebird** (`shorebird`)
   - Required for: `morpheme shorebird` (Code Push)
   - Install: **[Shorebird Documentation](https://docs.shorebird.dev/)**

## Usage

To use the Morpheme CLI, run the `morpheme` command from your terminal within your project directory.

:::caution

The CLI is designed for use with the **Morpheme Flutter Starter Kit**. Please clone and configure the starter kit first:
**[Morpheme Flutter Starter Kit](../starter_kit/started)**

:::
