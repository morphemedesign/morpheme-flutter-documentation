---
sidebar_position: 11
---

# Cucumber

This command allows you to run integration tests written in the [Gherkin](https://cucumber.io/docs/gherkin/reference/) language using the `morpheme_cucumber` package. It bridges the gap between readable feature files and Flutter's integration test driver.

```bash
morpheme cucumber
```

## Description

The `cucumber` command automates the following workflow:
1.  **Generates Localization**: (Optional) Ensures your l10n files are up-to-date.
2.  **Processes Features**: Discovers and parses `.feature` files in `integration_test/features`.
3.  **Compiles Tests**: Converts Gherkin scenarios into a format executable by the test runner.
4.  **Runs Tests**: Executes `integration_test/cucumber_test.dart` on a connected device/emulator.
5.  **Generates Reports**: Creates JSON and (if Node.js is available) HTML reports of the test results.

## Prerequisites

1.  **Flutter**: Installed and available in PATH.
2.  **Gherkin CLI**: Required to parse feature files.
    Install gherkin executable and make sure to export to your PATH from this [Gherkin Executable](https://github.com/morphemedesign/morpheme-flutter-cli/releases/tag/cucumber)
3.  **Node.js**: (Optional) Required for generating HTML reports.
    Install nodejs for generate cucumber json to report html [NodeJs](https://nodejs.org/en/download/)

## Usage

### Run All Tests
Executes all feature files found in `integration_test/features`.

```bash
morpheme cucumber
```

### Run Specific Features
Run only the `login` and `profile` feature files (e.g., `login.feature`, `profile.feature`).

```bash
morpheme cucumber login,profile
```

### Run with Flavors
Run tests against a specific environment flavor (default is `dev`).

```bash
morpheme cucumber --flavor staging
```

### Run on Specific Device
target a specific device or emulator by its ID.

```bash
morpheme cucumber --device-id emulator-5554
```

## Options

```bash
morpheme cucumber [features] [options]
```

To see all available options and flags, run `morpheme cucumber --help`.

### Available Options

| Option | Abbr | Description |
|---|---|---|
| `--flavor [env]` | `-f` | Target environment flavor (default: `dev`). |
| `--device-id [id]` | `-d` | Target specific device identifier for testing. |
| `--[no-]generate-l10n` | | Generate localization files before testing (default: `true`). |
| `--morpheme-yaml [path]` | | Path to a custom configuration file. |

:::tip
Combine arguments for precise testing control:
`morpheme cucumber login --flavor prod --device-id DEVICE_ID`
:::
